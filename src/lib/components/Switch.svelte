<script lang='ts'>
	import Button from "$lib/components/Button.svelte";
	import Pill from "./Pill.svelte";

    export let options: string[];
    export let selected: number;

    const select = (i: number) => { selected = i; };
</script>

<Pill>
    {#each options as option, i}
        <Button type={selected === i ? 'filled' : 'outline'} click={() => select(i)}>
            {option}
        </Button>
    {/each}
</Pill>