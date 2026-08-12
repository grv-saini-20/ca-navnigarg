<script>
	import { trustPoints } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section class="section-trust" use:reveal>
	<div class="wrap trust-grid">
		<p class="eyebrow eyebrow-paper">Why clients trust us</p>
		{#each trustPoints as point (point.label)}
			<div class="trust-item">
				<span class="trust-stat tabular">{point.stat}</span>
				<span class="trust-label">{point.label}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.section-trust {
		background: var(--verified);
		color: var(--white);
		padding-block: clamp(2.2rem, 5vw, 3rem);
	}

	.eyebrow-paper {
		color: var(--white);
		opacity: 0.85;
		grid-column: 1 / -1;
	}
	.eyebrow-paper::before {
		background: var(--white);
	}

	.trust-grid {
		display: grid;
		gap: 1.6rem 1rem;
	}

	.trust-item {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		border-top: 1px solid rgba(255, 255, 255, 0.3);
		padding-top: 0.9rem;
	}

	.trust-stat {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.trust-label {
		font-size: 0.82rem;
		opacity: 0.85;
	}

	@media (min-width: 720px) {
		.trust-grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}
</style>
