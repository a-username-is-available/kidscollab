const urlPrefix = 
    'https://raw.githubusercontent.com/a-username-is-available/kidscollab-content/main/dist/kidscollab';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    // if (params.slug.includes('..')) throw Error('slash cannot be in slug')

    const content = await (await fetch(`${urlPrefix}/${params.slug}`)).text()
    // console.log(content)

    return {
        content
    };
}