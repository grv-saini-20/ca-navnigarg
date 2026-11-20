<script>
	import { firm } from '$lib/data.js';
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="wrap footer-grid">
		<div class="footer-brand">
			<img src="/logo.png" alt="" width="56" height="56" class="footer-logo" />
			<span>{firm.name}</span>
		</div>

		<nav class="footer-links" aria-label="Footer">
			<a href="#why-us">Why us</a>
			<a href="#services">Services</a>
			<a href="#industries">Industries</a>
			<a href="#contact">Contact</a>
		</nav>

		<div class="footer-contact tabular">
			<a href={firm.phoneHref}>{firm.phone}</a>
			<a href={firm.emailHref}>{firm.email}</a>
		</div>
	</div>
	<hr class="ledger-rule footer-rule" />
	<p class="wrap copyright tabular">© {year} {firm.name}. All rights reserved.</p>
</footer>

<style>
	.site-footer {
		background: var(--ink);
		color: var(--paper);
		padding-top: 2.5rem;
	}

	.footer-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1.5rem;
		padding-bottom: 2rem;
	}

	.footer-brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-display);
		font-weight: 600;
	}

	.footer-logo {
		border-radius: 50%;
		box-shadow: 0 0 0 1px rgba(194, 162, 89, 0.55);
	}

	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.4rem;
		font-size: 0.88rem;
	}

	.footer-links a,
	.footer-contact a {
		text-decoration: none;
		color: var(--paper);
		opacity: 0.8;
	}

	.footer-links a:hover,
	.footer-contact a:hover {
		opacity: 1;
	}

	.footer-contact {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.85rem;
		text-align: right;
	}

	.footer-rule {
		border-top-color: var(--rule-on-ink);
	}

	.copyright {
		font-size: 0.76rem;
		opacity: 0.65;
		padding-block: 1.2rem;
	}
</style>
