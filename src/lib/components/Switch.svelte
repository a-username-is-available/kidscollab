<script lang='ts'>
	import Button from "$lib/components/Button.svelte";

    export let options: string[];
    export let selected: number;

    const select = (i: number) => selected = i;
</script>

<div class="bg-[#F5EEE9] p-1 border-2 border-black rounded-full flex gap-3">
    {#each options as option, i (i)}
        <Button type={selected === i ? 'filled' : 'outline'} click={() => select(i)}>
            {option}
        </Button>
    {/each}
</div>