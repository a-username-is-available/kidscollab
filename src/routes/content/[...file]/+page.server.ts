import { supabase } from '$lib/supabaseClient';

const url =
    'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/dist/';

const fixName = (str: string) => str.replaceAll(/[ #?]/g, '');

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const file = await (await fetch(`${url}/${fixName(params.file)}.html`)).text();

    const newLineIndex = file.indexOf('\n');
    const id = file.substring(0, newLineIndex);
    const content = file.substring(newLineIndex);

    const { data, count, error } = await supabase
        .from('review')
        .select('*', { count: 'exact', head: true })
        .eq('article_id', id);
    // console.log(id, count, error)

    if (error) {
        return {
            content: `<em>Something went wrong while getting the like count!</em>\n${content}`,
            id: 'null',
            likes: 0,
        };
    }

    return {
        id,
        content,
        likes: count ?? 0,
    };
}
