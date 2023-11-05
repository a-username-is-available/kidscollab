<script lang='ts'>
	import Accordion from "$lib/Accordion.svelte";
	import LinkedAccordion from "$lib/LinkedAccordion.svelte";
    export let data: any; // svelte cant do type narrowing :/

    type directory = { name: string, content: content };
    type file = string | directory;
    type content = file[];

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

            <LinkedAccordion data={data.nav}/>
        </div>
    </aside>
</div>

<style>
    aside {
        box-shadow: 11px 12px 0px 0px #000;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>