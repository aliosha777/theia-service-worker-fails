import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "service-worker-sample" is now active!');

	const disposable = vscode.commands.registerCommand('extension.SWPlugin', () => {

		// Display a message box to the user
		vscode.window.showInformationMessage('Service worker sample plugin activated!');

		const panel = vscode.window.createWebviewPanel(
            'swPluginWebview',
            'SW Plugin',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
            }
        );

        panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SW Plugin</title>
        <script type="application/javascript">
            console.log("loading script in webview header");
        </script>
        <script src="http://localhost:8081/script.js"></script>
    </head>
    <body>
        <h3>SW Plugin</h3>
    </body>
  </html>`;
}
