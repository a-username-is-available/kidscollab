<script lang='ts'>
	import Button from "$lib/components/Button.svelte";
    import Panel from "$lib/components/Panel.svelte";
    import Switch from "$lib/components/Switch.svelte";

    export let data: { supabase: any };
    const { supabase } = data;

    let selected = 0;
    let email = '';
    let password = '';

    async function submit() {
        fetch('/you', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
        })
    }
</script>

<div class='lg:w-2/3 w-full'>
    <h1 class="text-black text-4xl font-bold mb-2">You</h1>

    <Switch options={['Sign In', 'Sign Up']} {selected}/>

    <Panel>
        <form class="flex flex-col gap-2" on:submit|preventDefault={submit}>
            <input bind:value={email} name="email" placeholder="email" type="email">
            <input bind:value={password} name="password" placeholder="password" type="password">

            <div class="self-start"><Button type='filled'>Submit</Button></div>
        </form>
    </Panel>
</div>

<style lang='postcss'>
    input::placeholder {
        @apply text-darken;
    }

    input {
        @apply bg-transparent outline-none border-2 border-black rounded-full w-full px-3 py-1;
    }
</style>