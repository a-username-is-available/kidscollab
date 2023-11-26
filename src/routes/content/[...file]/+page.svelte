<script lang='ts'>
    import Favorite from "./Favorite.svelte";
    import Like from "./Like.svelte";

    export let data;
    $: ({ id, likes: count, content } = data);
</script>

<div class='lg:w-2/3 w-full'>
    <div class='mb-2 flex gap-3'>
        <Like {id} {count}/>
        <Favorite {id}/>
    </div>
    <div id="content">
        {@html content}
        <br>
    </div>
</div>

<style lang='postcss'>
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