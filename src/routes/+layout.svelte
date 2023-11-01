<script>
	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import './styles.css';

	export let data;
	let shown = false;
</script>

<main class='h-full flex flex-col'>
	<Navbar />
	<div class='flex lg:justify-start justify-center gap-20 m-2 mb-0 h-max basis-5'>
		<div class='shrink-0 w-[max(20rem,26%)] overflow-y-clip'> <Sidebar {data}/> </div>
		<div class="mb-2 flex-grow-0"> <slot /> </div>
	</div>
</main>