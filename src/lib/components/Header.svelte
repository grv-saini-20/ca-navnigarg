<script>
	import { firm } from '$lib/data.js';

	let menuOpen = $state(false);

	const links = [
		{ href: '#why-us', label: 'Why us' },
		{ href: '#about', label: 'About' },
		{ href: '#services', label: 'Services' },
		{ href: '#industries', label: 'Industries' },
		{ href: '#contact', label: 'Contact' }
	];

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="site-header">
	<div class="wrap bar">
		<a href="#top" class="brand" onclick={closeMenu}>
			<img src="/logo.png" alt="Navni Garg & Associates logo" class="brand-logo" width="48" height="48" />
			<span class="brand-text">
				<span class="brand-name">Navni Garg</span>
				<span class="brand-sub tabular">&amp; ASSOCIATES</span>
			</span>
		</a>

		<nav class="nav-desktop" aria-label="Primary">
			{#each links as link (link.href)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<div class="bar-actions">
			<a href={firm.phoneHref} class="phone-link tabular">{firm.phone}</a>
			<a href="#contact" class="btn btn-brass cta-desktop">Book consultation</a>
			<button
				class="menu-toggle"
				aria-expanded={menuOpen}
				aria-controls="mobile-nav"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="sr-only">Toggle menu</span>
				<span class="bar1" class:open={menuOpen}></span>
				<span class="bar2" class:open={menuOpen}></span>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav id="mobile-nav" class="nav-mobile" aria-label="Mobile">
			{#each links as link (link.href)}
				<a href={link.href} onclick={closeMenu}>{link.label}</a>
			{/each}
			<a href={firm.phoneHref} class="tabular">{firm.phone}</a>
			<a href="#contact" class="btn btn-brass cta-mobile" onclick={closeMenu}>Book consultation</a>
		</nav>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(15, 30, 48, 0.92);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--rule-on-ink);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 0.85rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		text-decoration: none;
		color: var(--paper);
		min-width: 0;
		flex: none;
	}

	.brand-logo {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		box-shadow: 0 0 0 1px rgba(194, 162, 89, 0.55);
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		line-height: 1.1;
	}

	.brand-name {
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--paper);
	}

	.brand-sub {
		font-size: 0.6rem;
		letter-spacing: 0.16em;
		color: var(--brass);
	}

	@media (max-width: 559px) {
		.brand-sub {
			display: none;
		}
	}

	.nav-desktop {
		display: none;
		align-items: center;
		gap: 1.6rem;
		font-size: 0.9rem;
		white-space: nowrap;
	}

	.nav-desktop a {
		text-decoration: none;
		color: var(--paper);
		opacity: 0.85;
		transition: opacity 0.15s ease;
	}

	.nav-desktop a:hover {
		opacity: 1;
	}

	.bar-actions {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		flex: none;
	}

	.phone-link {
		display: none;
		text-decoration: none;
		color: var(--paper);
		font-size: 0.85rem;
		opacity: 0.9;
		white-space: nowrap;
	}

	.cta-desktop {
		display: none;
		font-size: 0.76rem;
		padding: 0.7em 1.1em;
	}

	@media (min-width: 960px) {
		.cta-desktop {
			font-size: 0.85rem;
			padding: 0.85em 1.5em;
		}
	}

	.cta-mobile {
		width: 100%;
		margin-top: 0.3rem;
	}

	.menu-toggle {
		display: grid;
		place-items: center;
		gap: 5px;
		width: 38px;
		height: 38px;
		background: transparent;
		border: 1px solid var(--rule-on-ink);
		border-radius: 50%;
		cursor: pointer;
	}

	.bar1,
	.bar2 {
		display: block;
		width: 18px;
		height: 1.5px;
		background: var(--paper);
		transition: transform 0.2s ease;
	}

	.bar1.open {
		transform: translateY(3.25px) rotate(45deg);
	}

	.bar2.open {
		transform: translateY(-3.25px) rotate(-45deg);
	}

	.nav-mobile {
		display: flex;
		flex-direction: column;
		border-top: 1px solid var(--rule-on-ink);
		padding: 1rem var(--edge) 1.4rem;
		gap: 0.9rem;
	}

	.nav-mobile a {
		text-decoration: none;
		color: var(--paper);
		font-size: 1rem;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}

	@media (min-width: 480px) {
		.cta-desktop {
			display: inline-flex;
		}
		.cta-mobile {
			display: none;
		}
	}

	@media (min-width: 960px) {
		.nav-desktop {
			display: flex;
		}
		.menu-toggle {
			display: none;
		}
	}

	@media (min-width: 1200px) {
		.phone-link {
			display: inline-flex;
		}
	}
</style>
