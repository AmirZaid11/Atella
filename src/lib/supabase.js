import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://myyoffuhhslljbfrhlmv.supabase.co';
const supabaseKey = 'sb_publishable_qcLTZH1K03qzceOH7wrT3w_LLBPVoeA';

export const supabase = createClient(supabaseUrl, supabaseKey);
