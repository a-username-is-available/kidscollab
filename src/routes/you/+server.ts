import { SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const supabaseUrl = 'https://inaebpnhptdkioictxuc.supabase.co';
    const supabaseKey = SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // I could just not destructure this but the request might have other data, which might interfere
    const { email, password } = await request.json();
    console.log(email, password)
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) console.error(error);
    console.log(data);

    return json({ error })
}