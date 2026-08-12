<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="about" class="section section-ink">
	<div class="wrap about-grid">
		<div use:reveal>
			<p class="eyebrow eyebrow-paper">About us</p>
			<h2>Practical finance, kept honest.</h2>
			<p class="about-copy">
				At Navnigarg CA &amp; Associates, we are committed to providing reliable and
				practical financial solutions. Our team combines technical expertise with
				industry knowledge to deliver high-quality services tailored to every
				client's needs. We believe in building long-term relationships based on
				trust and integrity.
			</p>
		</div>

		<div class="cards">
			<div class="card" use:reveal={{ delay: 80 }}>
				<span class="card-tab tabular">MISSION</span>
				<p>To simplify finance and compliance while helping clients grow with confidence.</p>
			</div>
			<div class="card" use:reveal={{ delay: 160 }}>
				<span class="card-tab tabular">VISION</span>
				<p>To become a trusted financial partner for businesses and individuals across India.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.section-ink {
		background: var(--ink);
		color: var(--paper);
		padding-block: clamp(3rem, 7vw, 5.5rem);
	}

	.section-ink h2 {
		color: var(--paper);
		font-size: clamp(1.6rem, 3.4vw, 2.3rem);
		margin-top: 0.7rem;
		max-width: 18ch;
	}

	.eyebrow-paper {
		color: var(--brass);
	}
	.eyebrow-paper::before {
		background: var(--brass);
	}

	.about-copy {
		margin-top: 1.3rem;
		color: rgba(239, 233, 216, 0.82);
		max-width: 46ch;
		font-size: 1.02rem;
	}

	.about-grid {
		display: grid;
		gap: 2.5rem;
	}

	.cards {
		display: grid;
		gap: 1.1rem;
	}

	.card {
		position: relative;
		background: var(--paper-raised);
		color: var(--ink);
		padding: 1.6rem 1.5rem 1.5rem;
		border-radius: 2px;
		border: 1px solid var(--rule);
	}

	.card-tab {
		display: inline-block;
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		color: var(--white);
		background: var(--brass);
		padding: 0.3em 0.65em;
		border-radius: 2px;
		margin-bottom: 0.85rem;
	}

	.card p {
		font-family: var(--font-display);
		font-size: 1.18rem;
		line-height: 1.4;
	}

	@media (min-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
	}
</style>
