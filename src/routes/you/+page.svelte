<script>
	import Switch from "$lib/components/Switch.svelte";

    let selected = 0;
</script>

<div class='lg:w-2/3 w-full'>
    <h1 class="text-black text-4xl font-bold mb-2">You</h1>

    <Switch options={['Sign In', 'Sign Up']} {selected}/>

    <form class="flex flex-col gap-2 mt-3" action="/signup">
        <input class="bg-[#F5EEE9] outline-none border-2 border-black rounded-full w-full px-2 py-1" name="username" placeholder="username">
        <input class="bg-[#F5EEE9] outline-none border-2 border-black rounded-full w-full px-2 py-1" name="password" placeholder="password" type="password">
    </form>
</div>