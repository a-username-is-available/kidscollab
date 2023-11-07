<script lang='ts'>
	import Accordion from "./Accordion.svelte";

    export let data: any;
    export let pathPrefix: string[] = [];

    const fixName = (str: string) => str.replaceAll(' ', '-').replaceAll(/[#?]/g, '');
</script>

{#each data as file}
    {#if typeof file === 'string'}
        <li>
            <a class='block w-max' href='/content/{pathPrefix.join('/')}/{fixName(file)}'>{file}</a>
        </li>
    {:else}
        <li>
            <Accordion category={file.name}>
                <svelte:self pathPrefix={[...pathPrefix, fixName(file.name)]} data={file.content}/>
            </Accordion>
        </li>
    {/if}
{/each}

<style>
    li {
        list-style: none;
    }
</style>