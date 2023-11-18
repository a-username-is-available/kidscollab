<script lang='ts'>
    export let href: string | null = null;
    export let click: () => any = () => {};

    export let type: 'outline' | 'filled';
</script>


{#if href}
    <a {href} class="hover:no-underline {type === 'outline' ?  '' : 'text-white bg-black'}"> <slot></slot> </a>
{:else}
    <button on:click={click} class="{type === 'outline' ?  '' : 'text-white bg-black'}"> <slot></slot> </button>
{/if}

<style lang="postcss">
    a, button {
        transition-duration: 250ms;
        @apply py-1 px-6 rounded-full transition-colors border-2 border-black flex items-center gap-1
    }
</style>