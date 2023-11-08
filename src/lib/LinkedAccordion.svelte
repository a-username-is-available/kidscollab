<script lang='ts'>
	import Accordion from "./Accordion.svelte";

    export let data: any;
    export let pathPrefix: string[] = [];

    const fixName = (str: string) => str.replaceAll(' ', '-').replaceAll(/[#?]/g, '');
</script>

{#each data as file}
    {#if typeof file === 'string'}
        <a class='block w-max mt-1' href='/content/{pathPrefix.join('/')}/{fixName(file)}'>{file}</a>
    {:else}
        <Accordion category={file.name}>
            <svelte:self pathPrefix={[...pathPrefix, fixName(file.name)]} data={file.content}/>
        </Accordion>
    {/if}
{/each}