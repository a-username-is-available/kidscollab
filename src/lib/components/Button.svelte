<script lang='ts'>
    export let href: string | null = null;
    export let click: () => any = () => {};

    export let type: 'outline' | 'filled';
</script>


{#if href}
    <a {href} class="hover:no-underline py-1 px-6 rounded-full transition-colors border-2 border-black
      {type === 'outline' ?  '' : 'text-white bg-black'}"> <slot></slot> </a>
{:else}
    <button on:click={click} class="py-1 px-6 rounded-full transition-colors border-2 border-black
      {type === 'outline' ?  '' : 'text-white bg-black'}"> <slot></slot> </button>
{/if}

<style>
    a, button {
        transition-duration: 250ms;
    }
</style>