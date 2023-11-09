<script lang='ts'>
	import Accordion from "./Accordion.svelte";

    type file = {
        uuid: string,
        name: string,
    };

    type category = {
        name: string,
        content: item[],
    };

    type item = file | category;

    export let data: item[];
    export let pathPrefix: string[] = [];

    const fixName = (str: string) => str.replaceAll(' ', '-').replaceAll(/[#?]/g, '');
</script>

{#each data as file}
    {#if 'uuid' in file}
        <a class='block w-max mt-1' href='/content/{pathPrefix.join('/')}/{fixName(file.name)}'>{file.name}</a>
    {:else}
        <Accordion category={file.name}>
            <svelte:self pathPrefix={[...pathPrefix, fixName(file.name)]} data={file.content}/>
        </Accordion>
    {/if}
{/each}