<script>
	import { industries } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="industries" class="section">
	<div class="wrap">
		<p class="eyebrow">Who we work with</p>
		<h2>Industries we serve</h2>

		<ul class="tags" use:reveal>
			{#each industries as industry (industry)}
				<li>{industry}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.section {
		padding-block: clamp(3rem, 7vw, 5rem);
	}

	h2 {
		font-size: clamp(1.6rem, 3.4vw, 2.3rem);
		margin-top: 0.7rem;
	}

	.tags {
		list-style: none;
		margin: 2.2rem 0 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
	}

	.tags li {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		letter-spacing: 0.02em;
		border: 1px solid var(--ink);
		border-radius: 999px;
		padding: 0.55em 1.1em;
		color: var(--ink);
	}
</style>
