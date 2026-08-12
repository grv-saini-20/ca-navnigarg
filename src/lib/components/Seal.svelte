<script>
	let { size = 168 } = $props();
</script>

<div class="seal-wrap" style="--size: {size}px">
	<svg viewBox="0 0 200 200" width={size} height={size} class="seal" role="img" aria-label="Certified seal of Navnigarg CA & Associates">
		<defs>
			<path id="sealring" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
		</defs>

		<circle cx="100" cy="100" r="96" class="seal-halo" />
		<circle cx="100" cy="100" r="90" fill="var(--ink)" />
		<circle cx="100" cy="100" r="90" fill="none" stroke="var(--brass)" stroke-width="1.5" />
		<circle cx="100" cy="100" r="78" fill="none" stroke="var(--brass)" stroke-width="1" stroke-dasharray="1 4.5" />

		<text class="seal-text">
			<textPath href="#sealring" startOffset="2%">NAVNIGARG&nbsp;&nbsp;·&nbsp;&nbsp;CA & ASSOCIATES&nbsp;&nbsp;·&nbsp;&nbsp;</textPath>
		</text>

		<circle cx="100" cy="100" r="52" fill="none" stroke="var(--brass)" stroke-width="1.5" />
		<path
			d="M77 101 L92 116 L124 82"
			fill="none"
			stroke="var(--brass)"
			stroke-width="7"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="seal-check"
		/>
		<text x="100" y="146" text-anchor="middle" class="seal-caption">CHARTERED ACCOUNTANTS</text>
	</svg>
</div>

<style>
	.seal-wrap {
		width: var(--size);
		height: var(--size);
		flex: none;
	}

	.seal {
		display: block;
		filter: drop-shadow(0 10px 18px rgba(19, 34, 66, 0.28));
		animation: press 1.1s cubic-bezier(0.2, 0.9, 0.25, 1) both;
		animation-delay: 0.15s;
		transform-origin: 50% 40%;
	}

	.seal-halo {
		fill: var(--brass);
		opacity: 0;
		animation: halo 1.1s ease-out both;
		animation-delay: 0.15s;
	}

	.seal-check {
		stroke-dasharray: 64;
		stroke-dashoffset: 64;
		animation: draw 0.5s ease-out both;
		animation-delay: 0.85s;
	}

	.seal-text {
		font-family: var(--font-mono);
		font-size: 9.2px;
		letter-spacing: 0.12em;
		fill: var(--paper);
	}

	.seal-caption {
		font-family: var(--font-mono);
		font-size: 7.4px;
		letter-spacing: 0.1em;
		fill: var(--paper);
		opacity: 0.75;
	}

	@keyframes press {
		0% {
			opacity: 0;
			transform: translateY(-46px) rotate(-16deg) scale(1.3);
		}
		55% {
			opacity: 1;
			transform: translateY(4px) rotate(2deg) scale(0.97);
		}
		75% {
			transform: translateY(-2px) rotate(-1deg) scale(1.01);
		}
		100% {
			opacity: 1;
			transform: translateY(0) rotate(-6deg) scale(1);
		}
	}

	@keyframes halo {
		0% {
			opacity: 0;
			transform: scale(0.6);
		}
		55% {
			opacity: 0.35;
			transform: scale(1.18);
		}
		100% {
			opacity: 0;
			transform: scale(1.4);
		}
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.seal,
		.seal-halo,
		.seal-check {
			animation: none;
		}
		.seal {
			transform: rotate(-6deg);
		}
		.seal-halo {
			opacity: 0;
		}
		.seal-check {
			stroke-dashoffset: 0;
		}
	}
</style>
