import fs from 'node:fs/promises';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// if (params.slug.includes('/')) throw Error('slash cannot be in slug')

	const content = await fs.readFile(
		`./content/kidscollab/${params.slug}.md`,
		{ encoding: 'utf-8' }
	);
	// console.log(content)

    return {
        content
    };
}