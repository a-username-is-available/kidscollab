<script lang='ts'>
	import Dropdown from "./Dropdown.svelte";
</script>

<span class="h-[calc(100%+2rem)] overflow-y-clip">
    <div class="h-[calc(100%+4rem)] pr-[12px] ml-1">
        <aside class="h-[calc(100vh+1rem)] bg-[#F5EEE9] rounded-3xl border-[5px] border-black sticky bottom-0 top-4">
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
    </div>
</span>

<style>
    aside {
        box-shadow: 11px 12px 0px 0px #000;
        clip-path: inset(0 -16px 1.5rem 0);
    }
</style>