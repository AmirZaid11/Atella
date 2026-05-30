import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export function useCMS(pageName, defaultContent = {}) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        const { data, error } = await supabase
          .from("site_content")
          .select("*")
          .eq("page", pageName);

        if (!error && data) {
          // Merge fetched data over defaults
          const merged = { ...defaultContent };
          data.forEach(item => {
            if (item.content_value) {
              merged[item.section_key] = item.content_value;
            }
          });
          setContent(merged);
        }
      } catch (err) {
        console.error("CMS Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [pageName]);

  return { content, loading };
}
