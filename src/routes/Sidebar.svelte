<script lang='ts'>
	import Accordion from "$lib/Accordion.svelte";
    export let data: any; // svelte cant do type narrowing :/

    type directory = { name: string, content: content };
    type file = string | directory;
    type content = file[];

    const toDash = (str: string) => str.replaceAll(' ', '-');
    console.log(data)
</script>

<span class="h-[calc(100%+2rem)] overflow-y-clip">
    <div class="h-[calc(100%+4rem)] pr-[12px] ml-1">
        <aside 
            class="h-[calc(100vh+1rem)] bg-[#F5EEE9] rounded-3xl border-[5px] border-black 
            sticky bottom-0 top-4 p-4">
            <h2 class="text-black text-2xl mb-2 font-semibold">Articles</h2>
            {#each data.nav as file}
            {#if typeof file === 'string'}
                <a href='/content/{toDash(file)}' >{file}</a>
            {:else}
                <Accordion category={file.name}>
                    {#each file.content as innerFile}
                    {#if typeof innerFile === 'string'}
                        <a href='/content/{toDash(file.name)}/{toDash(innerFile)}'>{innerFile}</a>
                    {:else}
                        <Accordion category={innerFile.name}>
                            {#each innerFile.content as innerInnerFile}
                            <a href='/content/{toDash(file.name)}/{toDash(innerFile.name)}/{toDash(innerInnerFile)}' >
                                {innerInnerFile}
                            </a>
                            {/each}
                        </Accordion>
                    {/if}
                    {/each}
                </Accordion>
            {/if}
            {/each}
        </aside>
    </div>
</span>

<style>
    aside {
        box-shadow: 11px 12px 0px 0px #000;
        clip-path: inset(0 -16px 1.5rem 0);
    }

    a {
        display: block;
        width: max-content;
    }
</style>