<script>
	import Dropdown from "./Dropdown.svelte";
</script>

<span class="h-full pr-[12px] overflow-hidden m-1">
    <aside class="h-[calc(100%+1.5rem)] bg-[#F5EEE9] rounded-3xl border-[5px] border-black">
        <div class="m-4">
            <h2 class="text-black text-2xl font-semibold mb-5">Articles</h2>
            
            <p>
                <Dropdown /> Category
            </p>
        </div>
    </aside>
</span>

<style>
    aside {
        box-shadow: 11px 12px 0px 0px #000;
    }
</style>