<script lang='ts'>
    export let open: boolean = false;
</script>

<button class="transition-all {open ? '' : '-rotate-90'} bottom-0.5 relative" on:click={() => open = !open}>
    <svg width="9" height="8" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.56768L1.50054 0L0 0.908555L6 11L12 0.908555L10.4995 0L6 7.56768Z" fill="black"/>
    </svg>
</button>
