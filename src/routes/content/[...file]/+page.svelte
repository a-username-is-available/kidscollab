<script lang="ts">
    export let data;
</script>

{@html data.content}
<br>

<style lang='postcss'>
    h1 { @apply font-bold text-4xl mb-2; }
    h2 { @apply font-bold text-3xl mb-1.5; }
    h3 { @apply font-bold text-2xl mb-1; }
    h4 { @apply font-bold text-xl; }
    h5 { @apply font-bold text-lg; }
    h6 { @apply font-bold text-base; }
    ul li { @apply list-disc ml-5; }
    ol li { @apply list-decimal ml-5; }
    b, strong { @apply font-bold; }
    i, em, cite { @apply italic; }
    blockquote { @apply p-3 mt-1 mb-2 rounded-md overflow-hidden bg-stone-300 box-border relative; }

    blockquote::before { 
        content: '';
        @apply bg-stone-500 h-full w-2 block absolute inset-0; 
    }

    p::before {
        content: '';
        margin-right: 1em;
    }
</style>