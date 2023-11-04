<script lang='ts'>
	import Accordion from "$lib/Accordion.svelte";
    export let data: any; // svelte cant do type narrowing :/

    type directory = { name: string, content: content };
    type file = string | directory;
    type content = file[];

    const fixName = (str: string) => str.replaceAll(' ', '-').replaceAll(/[#?]/g, '');
</script>

<div id='sticky-area' class="h-[calc(100%+2rem)] pr-[12px] ml-1">
    <aside 
        class="h-[calc(100vh+1rem)] bg-[#F5EEE9] rounded-3xl border-[5px] border-black 
        sticky bottom-0 top-4 p-4">
        <h2 class="text-black text-2xl mb-2 font-semibold">Articles</h2>
        <div class="overflow-y-auto lg:h-[calc(100%-5rem)] h-[calc(100%-8rem)]">
            <div class="flex flex-col mb-1 md:hidden ">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
            {#each data.nav as file}
            {#if typeof file === 'string'}
                <a href='/content/{fixName(file)}' >{file}</a>
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
        </div>
    </aside>
</div>

<style>
    aside {
        box-shadow: 11px 12px 0px 0px #000;
    }

    a {
        display: block;
        width: max-content;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>