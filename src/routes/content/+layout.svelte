<div class='w-[60%] h-full'>
    <span>
        <slot />
    </span>
</div>

<style lang='postcss'>
    /* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

    div {
        font-family: 'Playfair Display', 'New York', 'Times New Roman', serif;
    } */

    span :global(h1) { @apply font-bold text-4xl mb-2; }
    span :global(h2) { @apply font-bold text-3xl mb-1.5; }
    span :global(h3) { @apply font-bold text-2xl mb-1; }
    span :global(h4) { @apply font-bold text-xl; }
    span :global(h5) { @apply font-bold text-lg; }
    span :global(h6) { @apply font-bold text-base; }
    span :global(b), :global(strong) { @apply font-bold; }
    span :global(i), :global(em), :global(cite) { @apply italic; }
    span :global(blockquote) { @apply p-3 mt-1 mb-2 rounded-md overflow-hidden bg-stone-300 box-border relative; }
    span :global(blockquote::before) { 
        content: '';
        @apply bg-stone-500 h-full w-2 block absolute inset-0; 
    }

    span :global(p::before) {
        content: '';
        margin-right: 1em;
    }
</style>