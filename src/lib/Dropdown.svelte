<script lang='ts'>
	import { fly } from "svelte/transition";
    import { cubicOut, quadIn, quintIn } from 'svelte/easing';

    export let open: boolean = false;
    export let category: string = '';

    // make this actually smooth later
    function inFlySmooth(node: HTMLElement, { duration, y }: { duration: number, y: number }) {
        return {
            duration,
            easing: cubicOut,
            css: (t: number) => {
                return `
                    transform: translateY(${(1 - t) * y}px);
                    opacity: ${t};
                `
            }
        }
    }
</script>

<button class='mb-1 mt-2 block' on:click={() => open = !open}>
    <svg class="transition-all {open ? '' : '-rotate-90'} relative bottom-0.5 inline" 
         width="9" height="8" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.56768L1.50054 0L0 0.908555L6 11L12 0.908555L10.4995 0L6 7.56768Z" fill="black"/>
    </svg>
    { category }
</button>

{#if open}
    <div class='ml-6 [&>a]:block [&>a]:leading-[1.1em] [&>a]:mb-1' in:inFlySmooth={{ duration: 500, y: -10 }}>
        <slot />
    </div>
{/if}