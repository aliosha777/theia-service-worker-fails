# theia-service-worker-fails
This is a sample project to show how service worker registration from a webview fails in theia.

It has three components: Theia, the plugin that loads a script that registers a service worker and the server that serves the aforementioned script.

To launch do the following:

From `/sw-plugin`:

`yarn`

`yarn package`

copy the .vsix file to `/theia/plugins`

From `/theia`:

`yarn`

`yarn build`

`yarn start`

From `/script-server`:

`npm install`

`node server.js`

Theia runs at http://localhost:3000
Run the command SW Plugin to activate the plugin
Observe the console output. It should say `ServiceWorker registration failed:  DOMException: Failed to register a ServiceWorker: The document is in an invalid state.`

# Note:
The service worker file sw.js does not exist in the project. This does not affect the issue that we're trying to solve because the error is thrown before the browser attempts to load the service worker file. For the purpose of this project, a 404 on sw.js insteadf of the current error is enough to consider it working.

