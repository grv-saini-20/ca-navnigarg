<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" type="image/png" />
	<title>Navnigarg CA & Associates — Chartered Accountants</title>
</svelte:head>

{@render children()}
