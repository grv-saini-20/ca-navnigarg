<script>
	import { whyChooseUs } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="why-us" class="section">
	<div class="wrap">
		<p class="eyebrow">Why choose us</p>
		<h2>Run the way a compliance ledger should be run.</h2>

		<div class="ledger">
			{#each whyChooseUs as item, i (item.title)}
				<div class="ledger-row" use:reveal={{ delay: i * 70 }}>
					<span class="stamp" aria-hidden="true">
						<svg viewBox="0 0 24 24" width="18" height="18">
							<path d="M4 12.5 L9.5 18 L20 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
					<div class="ledger-text">
						<h3>{item.title}</h3>
						<p>{item.detail}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding-top: clamp(1.75rem, 4vw, 2.75rem);
		padding-bottom: clamp(3rem, 7vw, 5rem);
	}

	h2 {
		font-size: clamp(1.6rem, 3.4vw, 2.3rem);
		margin-top: 0.7rem;
		max-width: 30ch;
	}

	.ledger {
		margin-top: 2.5rem;
		border-top: 1px solid var(--rule);
	}

	.ledger-row {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1.1rem;
		align-items: start;
		padding-block: 1.35rem;
		border-bottom: 1px solid var(--rule);
	}

	.stamp {
		display: grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 1.5px solid var(--verified);
		color: var(--verified);
		margin-top: 0.15rem;
	}

	.ledger-text h3 {
		font-size: 1.08rem;
		font-weight: 600;
	}

	.ledger-text p {
		margin-top: 0.35rem;
		color: var(--ink-soft);
		max-width: 56ch;
	}

	@media (min-width: 720px) {
		.ledger-row {
			grid-template-columns: 34px 1fr;
		}
	}
</style>
