if ('serviceWorker' in navigator) {
    // This will load the service worker file from localhost:3000 and not from localhost:8081
    navigator.serviceWorker.register('/sw.js').then(
        function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        },
        function (err) {
            // registration failed
            console.log('ServiceWorker registration failed: ', err);
        }
    );
}