<script lang='ts'>
    export let open: boolean = false;
    export let category: string = '';
    
    let margin: number = 0;
</script>

<button class='block lg:mt-0 mt-0.5' on:click={() => open = !open}>
    <svg class="transition-all {open ? '' : '-rotate-90'} relative bottom-0.5 inline" 
         width="9" height="8" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.56768L1.50054 0L0 0.908555L6 11L12 0.908555L10.4995 0L6 7.56768Z" fill="black"/>
    </svg>
    { category }
</button>

<div class="relative">
    <div class='ml-6 mr-1 [&>a]:block [&>a]:leading-[1.1em] absolute transition-all-250ms
      {open ? '': '-translate-y-3 opacity-0 invisible'}' role="list" bind:clientHeight={margin} >
        <slot />
    </div>
</div>

<div style='{open ? `margin-bottom: calc(${margin}px + 0.3rem)` : ''};' class='transition-all-250ms'></div>