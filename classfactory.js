export function factoriable(constructor) {
	return new Proxy(constructor, {
		apply(target, thiss, args) {
			return new target(...args);
		},
	});
}