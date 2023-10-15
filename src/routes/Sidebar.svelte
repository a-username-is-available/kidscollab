<script lang='ts'>
	import { onMount } from "svelte";
	import Dropdown from "./Dropdown.svelte";

    let container: HTMLElement; 
    let width: number = 0;
    
    onMount(() => {
        width = container.getBoundingClientRect().width;
    });
</script>

<span bind:this={container} class="h-full pr-[12px] ml-1">
    <aside style='width: {width}px;'
           class="h-[calc(100%+1.5rem)] bg-[#F5EEE9] rounded-3xl border-[5px] border-black fixed">
        <div class="m-4">
            <h2 class="text-black text-2xl font-semibold">Articles</h2>
          
            <Dropdown category='KidsCollab'>
                <a href="/kidscollab/test_item">Test Item</a>
            </Dropdown>

            <Dropdown category='Category 2 (dummy)'>
                <a href="/">Item #1</a>
                <a href="/">Item with long name that goes to the next line</a>
                <a href="/">Item #2</a>
                <a href="/">Item #3</a>
            </Dropdown>

            <Dropdown category='Category 3 (dummy)'>
                <a href="/">Item #1</a>
                <a href="/">Item with long name that goes to the next line</a>
                <a href="/">Item #2</a>
                <a href="/">Item #3</a>
            </Dropdown>
        </div>
    </aside>
</span>

<style>
    aside {
        box-shadow: 11px 12px 0px 0px #000;
    }
</style>