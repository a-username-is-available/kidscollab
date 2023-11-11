<script>
	import Panel from "$lib/components/Panel.svelte";
import Switch from "$lib/components/Switch.svelte";

    let selected = 0;
</script>

<div class='lg:w-2/3 w-full'>
    <h1 class="text-black text-4xl font-bold mb-2">You</h1>

    <Switch options={['Sign In', 'Sign Up']} {selected}/>

    <Panel>
        <form class="flex flex-col gap-2" action="/signup">
            <input class="bg-transparent outline-none border-2 border-black rounded-full w-full px-2 py-1" name="username" placeholder="username">
            <input class="bg-transparent outline-none border-2 border-black rounded-full w-full px-2 py-1" name="password" placeholder="password" type="password">
        </form>
    </Panel>
</div>