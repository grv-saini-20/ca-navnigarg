<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" type="image/png" />
	<title>Navni Garg & Associates — Chartered Accountants</title>
</svelte:head>

{@render children()}
