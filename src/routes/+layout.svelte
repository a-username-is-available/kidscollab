<script>
	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import './styles.css';

	export let data;
	let shown = false;
</script>

<main class='h-full flex flex-col lg:text-base text-lg'>
	<Navbar />
	<div class='flex lg:justify-start justify-center gap-20 m-2 mb-0 h-max basis-5'>
		<div class='shrink-0 w-[max(20rem,26%)] overflow-y-clip lg:block hidden'> <Sidebar {data}/> </div>
		<div class="mb-2 lg:m-0 md:ml-20 md:mr-20 ml-2 mr-2"> <slot /> </div>
	</div>
</main>