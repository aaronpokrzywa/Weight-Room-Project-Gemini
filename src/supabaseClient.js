import { createClient } from '@supabase/supabase-js';

const supabaseUrl = https://eboynmbqnotpgauqfpwa.supabase.co/rest/v1/; // Your Supabase Project URL
const supabaseAnonKey = sb_publishable_R0rWggYHhR3zrbkSySsSVQ_QEn36Nsz;    // Your publishable key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
