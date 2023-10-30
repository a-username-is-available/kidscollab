const url = 
    'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/dist/';
// const urlPrefix = 'kidscollab/';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    // console.log(params);
    const content = await (await fetch(`${url}/${params.file}.html`)).text();

    return {
        content
    };
}