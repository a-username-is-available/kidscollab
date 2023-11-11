<script>
	import Button from "$lib/components/Button.svelte";

    export let open = false;
</script>

<header class='z-10 flex gap-5 p-5 items-center mr-2 ml-2'>
    <button class='lg:hidden inline-block {open ? 'open' : ''}'  on:click={() => open = !open}
      aria-expanded={open} aria-label='Open Sidebar'>
        <svg viewBox="0 0 60 52" width="20" height="20">
            <rect class="top" rx="5" y="0" width="55" height="7"></rect>
            <rect class="middle" rx="5" y="20" width="55" height="7"></rect>
            <rect class="bottom" rx="5" y="40" width="55" height="7"></rect>
        </svg>
    </button>    

    <p class="text-black text-2xl font-semibold">KidsCollab</p>

    <!-- space -->
    <div class="flex-grow"></div>

    <nav aria-label="General">
        <ul class="text-right text-black font-normal md:flex gap-10 hidden">
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="//sites.google.com/view/kidscollab">other</a></li>
        </ul>
    </nav>

    <p class="text-gray-400">|</p>

    <Button type="filled" href="/you">you</Button>
</header>

<style>
    .open .top {
        transform: rotate(45deg);
    }
    
    .open .middle {
        opacity: 0;
    }
    
    .open .bottom {
        transform: rotate(-45deg);
    }
    
    .top, .bottom {
        transition-property: transform, opacity, y;
        transition-duration: 250ms;
        transition-timing-function: ease-in-out;
        transform-box: fill-box;
        transform-origin: center;
    }

    .open :is(.top, .bottom) {
        y: 20;
    }
    
    rect {
        transition: opacity 250ms ease-in-out;
    }
</style>