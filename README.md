# vscode-snyk
> Visual Studio Code extension for Snyk.io

Check your Node.JS and Ruby dependencies against [Snyk.io](https://snyk.io/) vulnerability database.

![feature X](images/vscode-snyk-screenshot.png)

Note: This extension requires internet access to [https://snyk.io/vuln/](https://snyk.io/vuln/) and will not currently work offline.

## Demo

![vscode-snyk demo](images/vscode-snyk-demo.gif)

## Usage

This extension adds the `Snyk Test` command to check your `package.json`, `npm-shrinkwrap`, or `Gemfile` against the Snyk.io VulnDB inventory of known vulnerabilities.

In the command palette (<kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>), type `Snyk Test`.

## Features
- If vulnerabilities are found, display an error with a count of vulnerable dependencies
  ![vuln count](images/vuln-count.png)
- If no vulnerabilities are found, display an info message
  ![no vulns](images/no-vuln.png)
- Detailed summary of vulnerable dependencies
  ![vuln details](images/vuln-details.png)
- Hyperlinked URLs directly to Snyk.io [VulnDB](https://snyk.io/vuln/) for more information on remediation.

## Release Notes

See [CHANGELOG.md](CHANGELOG.md).

### For more information

- [Snyk.io](https://snyk.io)
- [VulnDB](https://snyk.io/vuln/)
- [Docs](https://snyk.io/docs/)
