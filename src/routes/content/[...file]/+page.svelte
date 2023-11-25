<script lang='ts'>
    import Like from "./Like.svelte";

    export let data;
    $: ({ id, likes: count, content } = data);
</script>

<div class='lg:w-2/3 w-full'>
    <div class='mb-2'>
        <Like {id} {count}/>
        {count}
    </div>
    <div id="content">
        {@html content}
        <br>
    </div>
</div>

<style lang='postcss'>
    #content :global(h1){ @apply font-bold text-4xl mb-2; }
    #content :global(h2){ @apply font-bold text-3xl mb-1.5; }
    #content :global(h3){ @apply font-bold text-2xl mb-1; }
    #content :global(h4){ @apply font-bold text-xl; }
    #content :global(h5){ @apply font-bold text-lg; }
    #content :global(h6){ @apply font-bold text-base; }
    #content :global(ul) { @apply list-disc ml-5; }
    #content :global(ol) { @apply list-decimal ml-5; }
    #content :global(b), :global(strong){ @apply font-bold; }
    #content :global(i), :global(em), :global(cite) { @apply italic; }
    #content :global(blockquote){ @apply p-3 mt-1 mb-2 rounded-md overflow-hidden bg-stone-300 box-border relative; }

    #content :global(blockquote::before) { 
        content: '';
        @apply bg-stone-500 h-full w-2 block absolute inset-0; 
    }

    #content :global(p::before) {
        content: '';
        margin-right: 1em;
    }
</style>