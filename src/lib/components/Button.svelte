<script lang='ts'>
    export let href: string | undefined;
    export let type: 'outline' | 'filled';
</script>


{#if href}
    <a class="hover:no-underline py-1 px-6 bg-black rounded-full text-white" {href}> <slot></slot> </a>
{:else}
    <button class="py-1 px-6 bg-black rounded-full text-white"> <slot></slot> </button>
{/if}