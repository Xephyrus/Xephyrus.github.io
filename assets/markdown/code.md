# Setting up Visual Studio Code

Getting up and running with Visual Studio Code is quick and easy. It is a small download so you can install in a matter of minutes and give VS Code a try.

## Cross platform

VS Code is a free code editor, which runs on the macOS, Linux, and Windows operating systems.

- [macOS](https://code.visualstudio.com/docs/setup/mac)
- [Linux](https://code.visualstudio.com/docs/setup/linux)
- [Windows](https://code.visualstudio.com/docs/setup/windows)

VS Code is lightweight and should run on most available hardware and platform versions. You can review the [System Requirements](https://code.visualstudio.com/docs/supporting/requirements) to check if your computer configuration is supported.

Update cadence

VS Code releases a new version [each month](https://code.visualstudio.com/updates) with new features and important bug fixes. Most platforms support auto updating and you will be prompted to install the new release when it becomes available. You can also manually check for updates by running **Help** > **Check for Updates** on Linux and Windows or running **Code** > **Check for Updates** on macOS.

> Note: Note: You can [disable auto-update](https://code.visualstudio.com/docs/supporting/faq#_how-do-i-opt-out-of-vs-code-autoupdates) if you prefer to update VS Code on your own schedule.

## Insiders nightly build

If you'd like to try our nightly builds to see new features early or verify bug fixes, you can install our [Insiders build](https://code.visualstudio.com/insiders/). The Insiders build installs side-by-side with the monthly Stable build and you can freely work with either on the same machine. The Insiders build is the same one the VS Code development team uses on a daily basis and we really appreciate people trying out new features and providing feedback.

## Portable mode

Visual Studio Code supports [Portable mode](https://en.wikipedia.org/wiki/Portable_application) installation. This mode enables all data created and maintained by VS Code to live near itself, so it can be moved around across environments, for example, on a USB drive. See the [VS Code Portable Mode](https://code.visualstudio.com/docs/editor/portable) documentation for details.

## Additional components

VS Code is an editor, first and foremost, and prides itself on a small footprint. Unlike traditional IDEs that tend to include everything but the kitchen sink, you can tune your installation to the development technologies you care about. Be sure to read the [Additional Components](https://code.visualstudio.com/docs/setup/additional-components) topic after reading the platform guides to learn about customizing your VS Code installation.

## Extensions

VS Code [extensions](https://code.visualstudio.com/docs/editor/extension-marketplace) let third parties add support for additional:

- Languages - [C++](https://code.visualstudio.com/docs/languages/cpp), [C#](https://code.visualstudio.com/docs/languages/csharp), [Go](https://code.visualstudio.com/docs/languages/go), [Java](https://code.visualstudio.com/docs/languages/java), [Python](https://code.visualstudio.com/docs/languages/python)
- Tools - [ESLint](https://marketplace.visualstudio.com/items/dbaeumer.vscode-eslint), [JSJint](https://marketplace.visualstudio.com/items/dbaeumer.jshint), [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell)
- Debuggers - [PHP XDebug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug)
- Keymaps - [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim), [Sublime Text](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings), [IntelliJ](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings), [Emacs](https://marketplace.visualstudio.com/items?itemName=hiro-sun.vscode-emacs), [Atom](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Brackets](https://marketplace.visualstudio.com/items?itemName=ms-vscode.brackets-keybindings), [Visual Studio](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings), [Eclipse](https://marketplace.visualstudio.com/items?itemName=alphabotsec.vscode-eclipse-keybindings)

Extensions integrate into VS Code's UI, commands, and task running systems so you'll find it easy to work with different technologies through VS Code's shared interface. Check out the VS Code extension [Marketplace](https://marketplace.visualstudio.com/vscode) to see what's available.

## Next steps

Once you have installed and set up VS Code, these topics will help you learn more about VS Code:

- [Additional Components](https://code.visualstudio.com/docs/setup/additional-components) - Learn how to install Git, Node.js, TypeScript, and tools like Yeoman.
- [User Interface](https://code.visualstudio.com/docs/getstarted/userinterface) - A quick orientation to VS Code.
- [Basic Editing](https://code.visualstudio.com/docs/editor/codebasics) - Learn about the powerful VS Code editor.
- [Code Navigation](https://code.visualstudio.com/docs/editor/editingevolved) - Move quickly through your source code.
- [Debugging](https://code.visualstudio.com/docs/editor/debugging) - Debug your source code directly in the VS Code editor.
- [Proxy Server Support](https://code.visualstudio.com/docs/setup/network) - Configure your proxy settings.

## Common questions

### What are the system requirements for VS Code?

We have a list of [System Requirements](https://code.visualstudio.com/docs/supporting/requirements).

### How big is VS Code?

VS Code is a small download (< 100 MB) and has a disk footprint of less than 200 MB, so you can quickly install VS Code and try it out.

### How do I create and run a new project?

VS Code doesn't include a traditional __File__ > __New Project__ dialog or pre-installed project templates. You'll need to add [additional components](https://code.visualstudio.com/docs/setup/additional-components) and scaffolders depending on your development interests. With scaffolding tools like [Yeoman](https://yeoman.io/) and the multitude of modules available through the [npm](https://www.npmjs.com/) package manager, you're sure to find appropriate templates and tools to create your projects.

### How do I know which version I'm running?
On Linux and Windows, choose __Help__ > __About__. On macOS, use __Code__ > __About Visual Studio Code__.

### Why is VS Code saying my installation is Unsupported?
VS Code has detected that some installation files have been modified, perhaps by an extension. Reinstalling VS Code will replace the affected files. See our [FAQ topic](https://code.visualstudio.com/docs/supporting/faq#_installation-appears-to-be-corrupt-unsupported) for more details.

### How can I do a 'clean' uninstall of VS Code?
If you want to remove all user data after [uninstalling](https://code.visualstudio.com/docs/setup/uninstall) VS Code, you can delete the user data folders `Code` and `.vscode`. This will return you to the state before you installed VS Code. This can also be used to reset all settings if you don't want to uninstall VS Code.

The folder locations will vary depending on your platform:

- __Windows__ - Delete `%APPDATA%\Code` and `%USERPROFILE%\.vscode.`
- __macOS__ - Delete `$HOME/Library/Application Support/Code` and `~/.vscode.`
- __Linux__ - Delete `$HOME/.config/Code` and `~/.vscode.`