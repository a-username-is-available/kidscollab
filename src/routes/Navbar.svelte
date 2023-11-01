<script>
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function toggleMenu() {
       dispatch('toggleMenu');
    }
</script>

<nav class='flex gap-3 p-5 items-center mr-2 ml-2'>
    <button class='lg:hidden inline-block' on:click={toggleMenu}>
        <svg viewBox="0 0 55 47" width="20" height="20">
            <rect rx="5" y="0"  width="55" height="7"></rect>
            <rect rx="5" y="20" width="35" height="7"></rect>
            <rect rx="5" y="40" width="45" height="7"></rect>
        </svg>
    </button>    

    <p class="text-black text-2xl font-semibold">LogoThingy</p>

    <!-- space -->
    <div class="flex-grow"></div>

    <div class="text-right text-black font-normal flex gap-10">
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/">idk what to put here</a>
    </div>
</nav>