var snyk = require('snyk');
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.snykTest', function () {
        var outputChannel = vscode.window.createOutputChannel('snyk');
        // rootPath of current directory.
        // If no directory, returns undefined
        var rootPath = vscode.workspace.rootPath;
        if (rootPath === undefined) vscode.window.showErrorMessage('Must be in a folder/project before running Snyk Test');
        
        snyk.test(rootPath)
            .then(results => {
                if (results.vulnerabilities.length === 0) return vscode.window.showInformationMessage(results.summary);
                else return Promise.resolve(results);
            })
            .then(results => {
                outputChannel.show();
                outputChannel.appendLine("Scanned: " + results.packageManager);
                outputChannel.appendLine("Summary: " + results.summary);
                outputChannel.appendLine("Dependency Count: " + results.dependencyCount);
                outputChannel.append("Vulnerabilities:");
                results.vulnerabilities.forEach(vuln => outputChannel.appendLine(`
    Title:        ${vuln.title}
    Severity:     ${vuln.severity.toUpperCase()}
    Package Name: ${vuln.packageName}
    Module Name:  ${vuln.moduleName}
    Version:      ${vuln.version}
    Upgradeable:  ${vuln.isUpgradable}
    Patchable:    ${vuln.isPatchable}
    More Info:    https://snyk.io/vuln/${vuln.packageManager}:${vuln.moduleName}`))
                vscode.window.showErrorMessage(results.summary);
            })
            .catch(err => vscode.window.showErrorMessage(err));
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;