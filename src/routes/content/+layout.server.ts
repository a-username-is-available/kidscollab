const url = 
    'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/dist/';
const urlPrefix = '';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const content = await (await fetch(`${url}/${urlPrefix}${params.slug}.html`)).text();

    return {
        content
    };
}