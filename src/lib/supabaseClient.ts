import { PUBLIC_SUPABASE_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://inaebpnhptdkioictxuc.supabase.co';
const supabaseKey = PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);