<script lang='ts'>
	import Accordion from "./Accordion.svelte";

    export let data: any;
    export let pathPrefix: string[] = [];

    const fixName = (str: string) => str.replaceAll(' ', '-').replaceAll(/[#?]/g, '');
</script>

{#each data as file}
    {#if typeof file === 'string'}
        <li class='list-none'>
            <a class='block w-max' href='/content/{pathPrefix.join('/')}/{fixName(file)}'>{file}</a>
        </li>
    {:else}
        <li class='list-none'>
            <Accordion category={file.name}>
                <svelte:self pathPrefix={[...pathPrefix, fixName(file.name)]} data={file.content}/>
            </Accordion>
        </li>
    {/if}
{/each}

            <!--
            {#each data.nav as file}
            {#if typeof file === 'string'}
                <a href='/content/{fixName(file)}'>{file}</a>
            {:else}
                <Accordion category={file.name}>
                    {#each file.content as innerFile}
                    {#if typeof innerFile === 'string'}
                        <a href='/content/{fixName(file.name)}/{fixName(innerFile)}'>{innerFile}</a>
                    {:else}
                        <Accordion category={innerFile.name}>
                            {#each innerFile.content as innerInnerFile}
                            <a href='/content/{fixName(file.name)}/{fixName(innerFile.name)}/{fixName(innerInnerFile)}' >
                                {innerInnerFile}
                            </a>
                            {/each}
                        </Accordion>
                    {/if}
                    {/each}
                </Accordion>
            {/if}
            {/each}
            -->