<script>
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let open = false;

    function toggleMenu() {
       dispatch('toggleMenu');
       open = !open;
    }
</script>

<nav class='flex gap-3 p-5 items-center mr-2 ml-2'>
    <button class='lg:hidden inline-block {open ? 'open' : ''}' on:click={toggleMenu}>
        <svg viewBox="0 0 55 47" width="20" height="20">
            <rect class="top" rx="5" y="0" width="55" height="7"></rect>
            <rect class="middle" rx="5" y="20" width="55" height="7"></rect>
            <rect class="bottom" rx="5" y="40" width="55" height="7"></rect>
        </svg>
    </button>    

    <p class="text-black text-2xl font-semibold">KidsCollab</p>

    <!-- space -->
    <div class="flex-grow"></div>

    <div class="text-right text-black font-normal md:flex gap-10 hidden">
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="//sites.google.com/view/kidscollab">other</a>
    </div>
</nav>

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
        transform-origin: center;
    }

    .open :is(.top, .bottom) {
        y: 20;
    }

    button:active {

    }
    
    rect {
        transition: opacity 250ms ease-in-out;
    }
</style>