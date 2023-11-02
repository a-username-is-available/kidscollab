<script>
	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import './styles.css';

	export let data;
	let shown = false;

	function toggleMenu() {
		shown = !shown;
	}
</script>

<main class='h-full flex flex-col lg:text-base text-lg'>
	<Navbar on:toggleMenu={toggleMenu}/>
	<div class='flex lg:justify-start justify-center gap-20 m-2 mb-0 h-max basis-5'>
		<div class='shrink-0 overflow-y-clip z-10
		  lg:m-0 lg:w-[max(20rem,26%)] lg:block lg:static lg:opacity-100 lg:translate-y-0
		  fixed w-1/2 transition {shown ? '' : 'opacity-0 translate-y-5'}'>
			<Sidebar {data}/>
		</div>

		<div class="grow mb-2 lg:m-0 md:ml-20 md:mr-20 ml-2 mr-2 lg:blur-none {shown ? 'blur-sm' : ''}"> <slot /> </div>
	</div>
</main>
