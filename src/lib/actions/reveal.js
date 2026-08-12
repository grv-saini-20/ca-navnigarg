/**
 * Svelte action: fades/lifts an element in once it enters the viewport.
 * Usage: <div use:reveal>
 * Pairs with the [data-reveal] CSS in app.css.
 */
export function reveal(node, options = {}) {
	const { threshold = 0.2, delay = 0 } = options;

	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	node.setAttribute('data-reveal', '');

	if (prefersReduced) {
		node.setAttribute('data-reveal', 'in');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					window.setTimeout(() => {
						node.setAttribute('data-reveal', 'in');
					}, delay);
					observer.unobserve(node);
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
