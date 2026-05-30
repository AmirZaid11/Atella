import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { 
  FaTrash, FaUpload, FaSpinner, FaImage, FaBullhorn, FaSignOutAlt, 
  FaPlus, FaCheckCircle, FaTimesCircle, FaChartLine, FaUsers, 
  FaGlassCheers, FaEye, FaEdit 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function AdminPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview"); 
  
  useEffect(() => {
    if (sessionStorage.getItem("attela_auth") !== "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("attela_auth");
    navigate("/");
  };

  // --- GALLERY STATE ---
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Beach");
  const [galleryError, setGalleryError] = useState(null);
  const categories = ["Beach", "Dining", "Events", "Nightlife", "VIP"];

  // --- NOTIFICATION STATE ---
  const [announcements, setAnnouncements] = useState([]);
  const [annForm, setAnnForm] = useState({ title: "", message: "", is_active: false });
  const [savingAnn, setSavingAnn] = useState(false);
  const [annError, setAnnError] = useState(null);

  // --- CMS STATE ---
  const [siteContent, setSiteContent] = useState([]);
  const [cmsForm, setCmsForm] = useState({ page: "home", section_key: "", content_type: "text", content_value: "" });
  const [cmsFile, setCmsFile] = useState(null);
  const [savingCms, setSavingCms] = useState(false);
  const [cmsError, setCmsError] = useState(null);
  const pageOptions = ["home", "about", "events", "vip", "contact"];

  useEffect(() => {
    if (activeTab === "gallery" || activeTab === "overview") fetchImages();
    if (activeTab === "notifications" || activeTab === "overview") fetchAnnouncements();
    if (activeTab === "cms") fetchCms();
  }, [activeTab]);

  const fetchImages = async () => {
    const { data } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });
    if (data) setImages(data);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    try {
      const fileName = `${Math.random()}.${file.name.split('.').pop()}`;
      const filePath = `${category}/${fileName}`;
      await supabase.storage.from("images").upload(filePath, file);
      const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(filePath);
      await supabase.from("gallery").insert([{ category, image_url: publicUrl, file_path: filePath }]);
      setFile(null); fetchImages();
    } catch (err) { setGalleryError(err.message); } finally { setUploading(false); }
  };
  const handleDeleteImage = async (id, filePath) => {
    if (!window.confirm("Delete image?")) return;
    await supabase.from("gallery").delete().eq("id", id);
    if (filePath) await supabase.storage.from("images").remove([filePath]);
    fetchImages();
  };

  const fetchAnnouncements = async () => {
    const { data } = await supabase.from("announcements").select("*").order("created_at", { ascending: false });
    if (data) setAnnouncements(data);
  };
  const handleSaveAnnouncement = async (e) => {
    e.preventDefault();
    setSavingAnn(true);
    try {
      if (annForm.is_active) await supabase.from("announcements").update({ is_active: false }).neq("id", "00000000-0000-0000-0000-000000000000");
      await supabase.from("announcements").insert([{ title: annForm.title, message: annForm.message, is_active: annForm.is_active }]);
      setAnnForm({ title: "", message: "", is_active: false }); fetchAnnouncements();
    } catch (err) { setAnnError(err.message); } finally { setSavingAnn(false); }
  };
  const toggleAnnouncementStatus = async (id, currentStatus) => {
    if (!currentStatus) await supabase.from("announcements").update({ is_active: false }).neq("id", id);
    await supabase.from("announcements").update({ is_active: !currentStatus }).eq("id", id);
    fetchAnnouncements();
  };
  const handleDeleteAnn = async (id) => {
    if (!window.confirm("Delete announcement?")) return;
    await supabase.from("announcements").delete().eq("id", id); fetchAnnouncements();
  };

  // --- CMS LOGIC ---
  const fetchCms = async () => {
    const { data, error } = await supabase.from("site_content").select("*").order("page", { ascending: true });
    if (error) setCmsError("Database not connected. Run the Phase E SQL script.");
    else { setSiteContent(data || []); setCmsError(null); }
  };
  const handleSaveCms = async (e) => {
    e.preventDefault();
    setSavingCms(true);
    try {
      let finalContentValue = cmsForm.content_value;
      let finalFilePath = null;

      if (cmsForm.content_type === "image" && cmsFile) {
        const fileName = `${Math.random()}.${cmsFile.name.split('.').pop()}`;
        const filePath = `cms/${fileName}`;
        await supabase.storage.from("images").upload(filePath, cmsFile);
        const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(filePath);
        finalContentValue = publicUrl;
        finalFilePath = filePath;
      }

      // Upsert based on page + section_key
      const { error } = await supabase.from("site_content").upsert({
        page: cmsForm.page,
        section_key: cmsForm.section_key,
        content_type: cmsForm.content_type,
        content_value: finalContentValue,
        file_path: finalFilePath
      }, { onConflict: 'page, section_key' });

      if (error) throw error;
      setCmsForm({ ...cmsForm, section_key: "", content_value: "" });
      setCmsFile(null);
      fetchCms();
    } catch (err) { setCmsError(err.message); } finally { setSavingCms(false); }
  };
  const handleDeleteCms = async (id, filePath) => {
    if (!window.confirm("Delete this content block? The website will revert to default hardcoded text.")) return;
    await supabase.from("site_content").delete().eq("id", id);
    if (filePath) await supabase.storage.from("images").remove([filePath]);
    fetchCms();
  };


  return (
    <div className="min-h-screen bg-[#0a0f18] text-white flex">
      <div className="w-80 bg-[#111827] border-r border-white/5 p-8 flex flex-col h-screen sticky top-0">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-[#ea580c] tracking-[4px]">ATTELA</h1>
          <p className="text-white/50 text-sm tracking-[2px] uppercase mt-2">Control Center</p>
        </div>
        <nav className="flex-1 space-y-4">
          <button onClick={() => setActiveTab("overview")} className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === "overview" ? "bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30" : "text-white/50 hover:bg-white/5 hover:text-white"}`}><FaChartLine className="text-xl" /> Analytics & Overview</button>
          <button onClick={() => setActiveTab("cms")} className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === "cms" ? "bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/30" : "text-white/50 hover:bg-white/5 hover:text-white"}`}><FaEdit className="text-xl" /> Page Editor</button>
          <button onClick={() => setActiveTab("gallery")} className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === "gallery" ? "bg-[#ea580c]/10 text-[#ea580c] border border-[#ea580c]/30" : "text-white/50 hover:bg-white/5 hover:text-white"}`}><FaImage className="text-xl" /> Gallery Manager</button>
          <button onClick={() => setActiveTab("notifications")} className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === "notifications" ? "bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30" : "text-white/50 hover:bg-white/5 hover:text-white"}`}><FaBullhorn className="text-xl" /> Notifications</button>
        </nav>
        <button onClick={handleLogout} className="flex items-center justify-center gap-3 w-full py-4 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition duration-300 font-bold uppercase tracking-[2px]"><FaSignOutAlt /> Lock Terminal</button>
      </div>

      <div className="flex-1 p-10 lg:p-20 overflow-y-auto">
        <AnimatePresence mode="wait">
          
          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-6xl">
              <h2 className="text-4xl font-bold mb-2">System Analytics</h2>
              <p className="text-white/50 mb-10">Real-time performance metrics and system status.</p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#111827] border border-white/5 p-8 rounded-[30px] shadow-2xl relative overflow-hidden group">
                  <FaUsers className="text-4xl text-[#22c55e] mb-6" />
                  <p className="text-white/50 font-bold uppercase tracking-[2px] text-sm mb-2">Monthly Visitors</p>
                  <h3 className="text-5xl font-bold">14,209</h3>
                </div>
                <div className="bg-[#111827] border border-white/5 p-8 rounded-[30px] shadow-2xl relative overflow-hidden group">
                  <FaImage className="text-4xl text-[#ea580c] mb-6" />
                  <p className="text-white/50 font-bold uppercase tracking-[2px] text-sm mb-2">Gallery Assets</p>
                  <h3 className="text-5xl font-bold">{images.length}</h3>
                </div>
                <div className="bg-[#111827] border border-white/5 p-8 rounded-[30px] shadow-2xl relative overflow-hidden group">
                  <FaBullhorn className="text-4xl text-[#0ea5e9] mb-6" />
                  <p className="text-white/50 font-bold uppercase tracking-[2px] text-sm mb-2">Active Adverts</p>
                  <h3 className="text-5xl font-bold">{announcements.filter(a => a.is_active).length}</h3>
                </div>
              </div>
            </motion.div>
          )}

          {/* PAGE EDITOR (CMS) */}
          {activeTab === "cms" && (
            <motion.div key="cms" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-6xl">
              <h2 className="text-4xl font-bold mb-2">Page Editor (CMS)</h2>
              <p className="text-white/50 mb-10">Modify text and images directly on the public facing website.</p>

              {cmsError && <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-xl mb-8">{cmsError}</div>}

              {/* EDITOR FORM */}
              <div className="bg-[#111827] border border-white/5 p-8 rounded-[30px] shadow-2xl mb-12">
                <form onSubmit={handleSaveCms} className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Target Page</label>
                      <select value={cmsForm.page} onChange={(e) => setCmsForm({...cmsForm, page: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8b5cf6] transition">
                        {pageOptions.map(p => <option key={p} value={p} className="bg-[#111827] uppercase">{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Section Key</label>
                      <input required type="text" value={cmsForm.section_key} onChange={(e) => setCmsForm({...cmsForm, section_key: e.target.value})} placeholder="e.g., hero_title" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8b5cf6] transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Content Type</label>
                      <select value={cmsForm.content_type} onChange={(e) => setCmsForm({...cmsForm, content_type: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8b5cf6] transition">
                        <option value="text" className="bg-[#111827]">Text</option>
                        <option value="image" className="bg-[#111827]">Image</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Content</label>
                    {cmsForm.content_type === "text" ? (
                      <textarea required value={cmsForm.content_value} onChange={(e) => setCmsForm({...cmsForm, content_value: e.target.value})} rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8b5cf6] transition" placeholder="Enter new text here..."></textarea>
                    ) : (
                      <input required type="file" accept="image/*" onChange={(e) => setCmsFile(e.target.files[0])} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none" />
                    )}
                  </div>

                  <button type="submit" disabled={savingCms} className="bg-[#8b5cf6] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-[2px] hover:bg-[#7c3aed] transition duration-300 disabled:opacity-50 flex items-center justify-center h-[60px] w-full md:w-auto self-start">
                    {savingCms ? <FaSpinner className="animate-spin text-2xl" /> : <><FaUpload className="mr-2" /> Push to Live Website</>}
                  </button>
                </form>
              </div>

              {/* SAVED CONTENT GRID */}
              <div className="space-y-4">
                {siteContent.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 transition duration-300 hover:border-white/10">
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#8b5cf6]/20 text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[1px]">{item.page}</span>
                        <span className="text-white/50 text-sm font-mono">{item.section_key}</span>
                      </div>
                      {item.content_type === "text" ? (
                        <p className="text-white/80 font-medium">{item.content_value}</p>
                      ) : (
                        <img src={item.content_value} alt={item.section_key} className="h-16 rounded-md border border-white/10 mt-2" />
                      )}
                    </div>
                    <button onClick={() => handleDeleteCms(item.id, item.file_path)} className="w-10 h-10 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/20 transition shrink-0">
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* GALLERY TAB */}
          {activeTab === "gallery" && (
            <motion.div key="gallery" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-6xl">
              <h2 className="text-4xl font-bold mb-2">Gallery Engine</h2>
              <p className="text-white/50 mb-10">Upload and manage all high-res photography for the public portfolio.</p>

              {/* UPLOAD FORM */}
              <div className="bg-[#111827] border border-white/5 p-8 rounded-[30px] shadow-2xl mb-12">
                <form onSubmit={handleUpload} className="flex flex-col md:flex-row gap-6 items-end">
                  <div className="flex-1 w-full">
                    <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Category Tag</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#ea580c] transition">
                      {categories.map(c => <option key={c} value={c} className="bg-[#111827]">{c}</option>)}
                    </select>
                  </div>
                  <div className="flex-1 w-full">
                    <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Select Image</label>
                    <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none" />
                  </div>
                  <button type="submit" disabled={uploading || !file} className="bg-[#ea580c] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-[2px] hover:bg-[#d94a08] transition flex items-center justify-center h-[60px] w-full md:w-auto">
                    {uploading ? <FaSpinner className="animate-spin text-2xl" /> : <><FaUpload className="mr-2" /> Inject</>}
                  </button>
                </form>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {images.map((img) => (
                  <div key={img.id} className="relative group rounded-2xl overflow-hidden border border-white/10 aspect-square">
                    <img src={img.image_url} alt={img.category} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#ea580c] font-bold mb-4 uppercase tracking-[2px] text-xs bg-black/80 px-3 py-1 rounded-full">{img.category}</span>
                      <button onClick={() => handleDeleteImage(img.id, img.file_path)} className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition shadow-xl"><FaTrash /></button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === "notifications" && (
            <motion.div key="notifications" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-6xl">
              <h2 className="text-4xl font-bold mb-2">Global Advert Network</h2>
              <p className="text-white/50 mb-10">Broadcast alerts and offers directly to the homepage overlay.</p>
              
              <div className="bg-[#111827] border border-white/5 p-8 rounded-[30px] shadow-2xl mb-12">
                <form onSubmit={handleSaveAnnouncement} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Advert Title</label>
                    <input required type="text" value={annForm.title} onChange={e => setAnnForm({...annForm, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#0ea5e9]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/50 uppercase tracking-[2px] mb-3">Advert Message</label>
                    <textarea required value={annForm.message} onChange={e => setAnnForm({...annForm, message: e.target.value})} rows="3" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#0ea5e9] resize-none"></textarea>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${annForm.is_active ? 'bg-[#0ea5e9]' : 'bg-white/10'}`}>
                        <div className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ${annForm.is_active ? 'translate-x-6' : 'translate-x-0'}`}></div>
                      </div>
                      <span className="text-white/70 font-bold uppercase tracking-[1px] text-sm">Set Live Immediately</span>
                    </label>
                    <button type="submit" disabled={savingAnn} className="bg-[#0ea5e9] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-[2px] hover:bg-[#0284c7] transition flex items-center gap-3">
                      {savingAnn ? <FaSpinner className="animate-spin text-xl" /> : <><FaPlus /> Create Broadcast</>}
                    </button>
                  </div>
                </form>
              </div>

              <div className="space-y-4">
                {announcements.map((ann) => (
                  <div key={ann.id} className={`flex items-center justify-between p-6 rounded-2xl border transition duration-300 ${ann.is_active ? 'bg-[#0ea5e9]/5 border-[#0ea5e9]/30' : 'bg-white/5 border-white/5'}`}>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        {ann.is_active ? <FaCheckCircle className="text-[#0ea5e9]" /> : <FaTimesCircle className="text-white/20" />}
                        <h3 className={`text-xl font-bold ${ann.is_active ? 'text-white' : 'text-white/50'}`}>{ann.title}</h3>
                      </div>
                      <p className="text-white/50 pl-8 max-w-2xl">{ann.message}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => toggleAnnouncementStatus(ann.id, ann.is_active)} className={`px-6 py-2 rounded-lg font-bold text-sm tracking-[1px] transition ${ann.is_active ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#0ea5e9]/20 text-[#0ea5e9] hover:bg-[#0ea5e9]/40'}`}>
                        {ann.is_active ? 'Deactivate' : 'Set Live'}
                      </button>
                      <button onClick={() => handleDeleteAnn(ann.id)} className="w-10 h-10 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/20 transition"><FaTrash /></button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}

export default AdminPage;
