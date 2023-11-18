const url = 
    'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/dist/';

const fixName = (str: string) => str.replaceAll(/[ #?]/g, '');

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const content = await (await fetch(`${url}/${fixName(params.file)}.html`)).text();

    const newLineIndex = content.indexOf('\n');
    
    return {
        id: content.substring(0, newLineIndex),
        content: content.substring(newLineIndex)
    };
}