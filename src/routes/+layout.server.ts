const url = 
    'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/nav.json';

/** @type {import('./$types').PageLoad} */
export async function load() {
    // if (params.slug.includes('..')) throw Error('slash cannot be in slug')

    const nav = await (await fetch(url)).text();

    return {
        nav: JSON.parse(nav)
    };
}