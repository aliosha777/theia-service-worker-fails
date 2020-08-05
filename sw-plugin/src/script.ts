// @ts-ignore
if ('serviceWorker' in navigator) {
	// @ts-ignore
	navigator.serviceWorker.register('/sw.js').then(
		function (registration: any) {
			// Registration was successful
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		},
		function (err: any) {
			// registration failed
			console.log('ServiceWorker registration failed: ', err);
		}
	);
}