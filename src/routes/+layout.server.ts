const url = 
    'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/nav.json';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const nav = await (await fetch(url)).text();

    return {
        nav: JSON.parse(nav)
    };
}