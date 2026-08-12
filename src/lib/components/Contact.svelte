<script>
	import { firm } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let service = $state('Income Tax Return (ITR) Filing');
	let message = $state('');

	const services = [
		'Income Tax Return (ITR) Filing',
		'GST Registration & Returns',
		'Company & LLP Registration',
		'Accounting & Bookkeeping',
		'Statutory & Tax Audit',
		'Business Advisory',
		'Something else'
	];

	function sendEnquiry(e) {
		e.preventDefault();
		const subject = `Free consultation request — ${service}`;
		const body = [
			`Name: ${name}`,
			`Phone: ${phone}`,
			`Email: ${email}`,
			`Service: ${service}`,
			'',
			message
		].join('\n');
		window.location.href = `${firm.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}
</script>

<section id="contact" class="section-contact">
	<div class="wrap contact-grid">
		<div use:reveal>
			<p class="eyebrow eyebrow-paper">Contact us</p>
			<h2>Let's build your financial success together.</h2>
			<p class="contact-copy">
				Whether you're an individual looking for tax assistance or a business
				seeking complete financial and compliance support, we're here to help.
				Book your free consultation today.
			</p>

			<div class="direct-links">
				<a href={firm.phoneHref} class="direct-link">
					<span class="direct-label">Call</span>
					<span class="tabular direct-value">{firm.phone}</span>
				</a>
				<a href={firm.emailHref} class="direct-link">
					<span class="direct-label">Email</span>
					<span class="tabular direct-value">{firm.email}</span>
				</a>
			</div>
		</div>

		<form class="enquiry" onsubmit={sendEnquiry} use:reveal={{ delay: 100 }}>
			<span class="card-tab tabular">FREE CONSULTATION</span>

			<label>
				<span>Full name</span>
				<input type="text" bind:value={name} required placeholder="Your name" />
			</label>

			<div class="row-2">
				<label>
					<span>Phone</span>
					<input type="tel" bind:value={phone} required placeholder="10-digit mobile" />
				</label>
				<label>
					<span>Email</span>
					<input type="email" bind:value={email} required placeholder="you@email.com" />
				</label>
			</div>

			<label>
				<span>Service you need</span>
				<select bind:value={service}>
					{#each services as s (s)}
						<option value={s}>{s}</option>
					{/each}
				</select>
			</label>

			<label>
				<span>Tell us briefly what you need</span>
				<textarea bind:value={message} rows="3" placeholder="A line or two is enough — we'll take it from there."
				></textarea>
			</label>

			<button type="submit" class="btn btn-brass submit-btn">Send enquiry</button>
			<p class="form-note">Opens your email app with these details filled in, addressed to {firm.email}.</p>
		</form>
	</div>
</section>

<style>
	.section-contact {
		background: var(--ink);
		color: var(--paper);
		padding-block: clamp(3rem, 7vw, 5.5rem);
	}

	h2 {
		color: var(--paper);
		font-size: clamp(1.6rem, 3.4vw, 2.3rem);
		margin-top: 0.7rem;
		max-width: 20ch;
	}

	.eyebrow-paper {
		color: var(--brass);
	}
	.eyebrow-paper::before {
		background: var(--brass);
	}

	.contact-copy {
		margin-top: 1.2rem;
		color: rgba(239, 233, 216, 0.82);
		max-width: 42ch;
	}

	.contact-grid {
		display: grid;
		gap: 2.5rem;
	}

	.direct-links {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		margin-top: 2.2rem;
	}

	.direct-link {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		text-decoration: none;
		color: var(--paper);
		border-top: 1px solid var(--rule-on-ink);
		padding-top: 0.8rem;
		width: fit-content;
		min-width: 220px;
	}

	.direct-label {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.65;
	}

	.direct-value {
		font-size: 1.05rem;
	}

	.enquiry {
		background: var(--paper-raised);
		color: var(--ink);
		border-radius: 3px;
		padding: 1.8rem 1.6rem;
		display: flex;
		flex-direction: column;
		gap: 1.05rem;
	}

	.card-tab {
		display: inline-block;
		width: fit-content;
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		color: var(--white);
		background: var(--brass);
		padding: 0.3em 0.65em;
		border-radius: 2px;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		font-size: 0.85rem;
		color: var(--ink-soft);
	}

	.row-2 {
		display: grid;
		gap: 1rem;
	}

	input,
	select,
	textarea {
		font-family: var(--font-body);
		font-size: 0.95rem;
		color: var(--ink);
		background: var(--white);
		border: 1px solid var(--rule);
		border-radius: 2px;
		padding: 0.65em 0.75em;
	}

	textarea {
		resize: vertical;
		font-family: var(--font-body);
	}

	.submit-btn {
		margin-top: 0.3rem;
		width: 100%;
	}

	.form-note {
		font-size: 0.76rem;
		color: var(--ink-soft);
		opacity: 0.8;
	}

	@media (min-width: 640px) {
		.row-2 {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 900px) {
		.contact-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
