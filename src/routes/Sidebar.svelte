<script lang='ts'>
	import LinkedAccordion from "./LinkedAccordion.svelte";
    export let data: any;
</script>

<div id='sticky-area' class="h-[calc(100%+2rem)] pr-[12px] ml-1 lg:translate-x-0 -translate-x-[12px]">
    <aside class="bg-[#F5EEE9] rounded-3xl border-[5px] border-black sticky 
      bottom-0 top-4 p-4 lg:h-[calc(min(100vh,100%)+1.5rem)] h-screen bold-shadow" 
      aria-label="Article Directory (for navigating files)" role='navigation'>
        <h2 class="text-black text-2xl mb-2 font-semibold">Articles</h2>
        <div class="overflow-y-auto lg:h-[calc(100%-5rem)] h-[calc(100%-8rem)]">
            <a class="md:hidden block" href="/">Home</a>
            <a class="md:hidden block" href="/about">About</a>

            <LinkedAccordion data={data.nav}/>
        </div>
    </aside>
</div>

<style>
    ::-webkit-scrollbar {
        display: none;
    }
</style>