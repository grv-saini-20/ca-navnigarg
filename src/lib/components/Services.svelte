<script>
	import { serviceGroups } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="services" class="section">
	<div class="wrap">
		<p class="eyebrow">What we file, manage &amp; advise on</p>
		<h2>Our services</h2>
		<p class="section-lede">
			Fourteen services across three groups — the way they actually show up in a
			client's compliance calendar, from first registration through to the audit
			sign-off.
		</p>

		<div class="groups">
			{#each serviceGroups as group, gi (group.category)}
				<div class="group" use:reveal={{ delay: gi * 60 }}>
					<h3 class="group-title">
						<span class="tabular group-index">0{gi + 1}</span>
						{group.category}
					</h3>
					<ul class="group-list">
						{#each group.items as item (item.name)}
							<li>
								<span class="item-name">{item.name}</span>
								<span class="item-detail">{item.detail}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
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

	.section-lede {
		margin-top: 1rem;
		max-width: 60ch;
		color: var(--ink-soft);
	}

	.groups {
		margin-top: 2.5rem;
		display: grid;
		gap: 1.5rem;
		align-items: start;
	}

	.group {
		background: var(--paper-raised);
		border: 1px solid var(--rule);
		border-radius: 3px;
		padding: 1.6rem 1.6rem 0.4rem;
	}

	.group-title {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
		font-size: 1.05rem;
		font-weight: 600;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--rule);
	}

	.group-index {
		color: var(--brass-deep);
		font-size: 0.8rem;
	}

	.group-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.group-list li {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding-block: 0.95rem;
		border-bottom: 1px solid var(--rule);
	}

	.group-list li:last-child {
		border-bottom: none;
	}

	.item-name {
		font-weight: 500;
	}

	.item-detail {
		font-size: 0.88rem;
		color: var(--ink-soft);
	}

	@media (min-width: 720px) {
		.groups {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1080px) {
		.groups {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
