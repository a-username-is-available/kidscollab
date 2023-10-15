<script lang='ts'>
	import Dropdown from "./Dropdown.svelte";

    let width: number = 0;
    let scrolled: boolean = false;
</script>

<span bind:clientWidth={width} class="h-full pr-[12px] ml-1">
    <aside style='width: {width}px;'
           class="h-[calc(100%+1.5rem)] bg-[#F5EEE9] rounded-3xl border-[5px] border-black fixed 
                  {scrolled ? '-translate-y-16' : ''}">
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