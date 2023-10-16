<div class='w-[60%] h-full'>
    <span class='h'>
        <slot />
    </span>
</div>

<style>
    /* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

    div {
        font-family: 'Playfair Display', 'New York', 'Times New Roman', serif;
    } */

    section p::before {
        content: '';
        margin-right: 1em;
    }
</style>