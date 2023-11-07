<script>
	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import './styles.css';

	export let data;
	let open = false;
</script>

<div class='h-full flex flex-col lg:text-base text-lg'>
	<Navbar bind:open/>
	<div class='flex lg:justify-start flex-grow justify-center gap-20 m-2 mb-0 h-max basis-5'>
		<div class='shrink-0 overflow-y-clip z-10 lg:visible
		  lg:m-0 lg:w-[max(20rem,26%)] lg:block lg:static lg:opacity-100 lg:-translate-y-0
		  fixed md:w-[25rem] w-[90%] transition {open ? '' : 'opacity-0 translate-y-5 invisible'}'>
			<Sidebar {data}/>
		</div>

		<main class="grow mb-2 lg:m-0 md:ml-20 md:mr-20 ml-2 mr-2 lg:blur-none {open ? 'blur-sm' : ''}"> <slot /> </main>
	</div>
</div>
