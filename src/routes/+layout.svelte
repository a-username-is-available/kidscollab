<script>
	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import './styles.css';

	export let data;
</script>

<main class='h-full flex flex-col'>
	<Navbar />
	<div class='grid grid-cols-[1fr_2.5fr] gap-20 m-2 mb-0 h-full'>
		<Sidebar {data}/>
		<slot />
	</div>
</main>