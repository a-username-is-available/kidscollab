<div class='lg:w-2/3 w-full'>
    <slot />
</div>

<style lang='postcss'>
    div :global(h1) { @apply font-bold text-4xl mb-2; }
    div :global(h2) { @apply font-bold text-3xl mb-1.5; }
    div :global(h3) { @apply font-bold text-2xl mb-1; }
    div :global(h4) { @apply font-bold text-xl; }
    div :global(h5) { @apply font-bold text-lg; }
    div :global(h6) { @apply font-bold text-base; }
    div :global(b), :global(strong) { @apply font-bold; }
    div :global(i), :global(em), :global(cite) { @apply italic; }
    div :global(ul li) { @apply list-disc ml-5; }
    div :global(ol li) { @apply list-decimal ml-5; }
    div :global(i), :global(em), :global(cite) { @apply italic; }
    div :global(blockquote) { @apply p-3 mt-1 mb-2 rounded-md overflow-hidden bg-stone-300 box-border relative; }
    div :global(blockquote::before) { 
        content: '';
        @apply bg-stone-500 h-full w-2 block absolute inset-0; 
    }

    div :global(p::before) {
        content: '';
        margin-right: 1em;
    }
</style>