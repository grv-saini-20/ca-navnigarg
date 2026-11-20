<script>
</script>

<section class="hero" id="top">
	<div class="wrap hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">Taxation · Accounting · Audit · GST · Advisory</p>
			<h1>
				Compliance you can <span class="ink-highlight">sign off on</span>,
				every single filing.
			</h1>
			<p class="hero-lede">
				Navnigarg CA &amp; Associates is a chartered accountancy practice for individuals,
				startups, SMEs and corporations who want their books, taxes and filings handled
				with accuracy — and no surprises.
			</p>
			<div class="hero-actions">
				<a href="#contact" class="btn btn-brass">Book your free consultation</a>
				<a href="#services" class="btn btn-outline">See our services</a>
			</div>
			<dl class="hero-facts">
				<div>
					<dt>Turnaround</dt>
					<dd class="tabular">Fast, tracked</dd>
				</div>
				<div>
					<dt>Confidentiality</dt>
					<dd class="tabular">100%</dd>
				</div>
				<div>
					<dt>Consults</dt>
					<dd class="tabular">Online / in-person</dd>
				</div>
			</dl>
		</div>

		<div class="hero-seal">
			<img src="/logo.png" alt="Navnigarg & Associates" class="hero-logo" width="320" height="320" />
			<p class="hero-seal-caption tabular">Certified · Confidential · On time</p>
		</div>
	</div>
</section>

<style>
	.hero {
		padding-top: clamp(2.5rem, 6vw, 4.5rem);
		background:
			radial-gradient(900px 480px at 85% 30%, rgba(194, 162, 89, 0.22), transparent 60%),
			linear-gradient(160deg, #0b1827 0%, #12273f 100%);
		color: var(--paper);
	}

	.hero-logo {
		width: clamp(220px, 28vw, 340px);
		height: auto;
		border-radius: 50%;
		box-shadow:
			0 0 0 1px rgba(194, 162, 89, 0.5),
			0 30px 70px -20px rgba(0, 0, 0, 0.6),
			0 0 80px -10px rgba(194, 162, 89, 0.25);
	}

	.hero-grid {
		display: grid;
		gap: 2.75rem;
		align-items: center;
		padding-bottom: clamp(2.75rem, 6vw, 4.25rem);
	}

	.hero-copy h1 {
		font-size: clamp(2.1rem, 5vw, 3.4rem);
		margin-top: 0.9rem;
		color: var(--white);
		max-width: 17ch;
		text-wrap: balance;
	}

	.ink-highlight {
		color: var(--brass);
		font-style: italic;
	}

	.hero-lede {
		margin-top: 1.4rem;
		max-width: 46ch;
		font-size: 1.05rem;
		color: rgba(247, 244, 237, 0.78);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		margin-top: 1.9rem;
	}

	.hero-facts {
		display: flex;
		flex-wrap: wrap;
		gap: 1.75rem;
		margin: 2.5rem 0 0;
		padding-top: 1.5rem;
		border-top: 1px solid var(--rule-on-ink);
	}

	.hero-facts dt {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--brass);
		opacity: 0.9;
	}

	.hero-facts dd {
		margin: 0.3rem 0 0;
		color: var(--white);
		font-size: 0.95rem;
		font-weight: 500;
	}

	.hero-seal {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-self: center;
		gap: 1rem;
	}

	.hero-seal-caption {
		font-size: 0.7rem;
		letter-spacing: 0.08em;
		color: var(--brass);
		text-transform: uppercase;
	}

	@media (min-width: 900px) {
		.hero-grid {
			grid-template-columns: 1.3fr 0.7fr;
		}
	}
</style>
