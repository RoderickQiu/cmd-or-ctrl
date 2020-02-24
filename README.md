# cmd-or-ctrl

The main thing this package does is simply returning 'command' or 'control' based on the OS the user is using, and the another things is to return the common names of OSs.

[**NPM Package**](https://www.npmjs.com/package/cmd-or-ctrl) | [**CNPM**](https://npm.taobao.org/package/cmd-or-ctrl)

## How to use

```shell
# npm
npm i cmd-or-ctrl

# yarn
yarn cmd-or-ctrl
```

```javascript
var cmdOrCtrl = require('cmd-or-ctrl');

console.log(cmdOrCtrl.cmdOrCtrl())// ctrl
console.log(cmdOrCtrl.cmdOrCtrl("short"))// ctrl
console.log(cmdOrCtrl.cmdOrCtrl("long"))// control
console.log(cmdOrCtrl.cmdOrCtrl("short", "pascal"))// Ctrl
console.log(cmdOrCtrl.cmdOrCtrl("long", "pascal"))// Control

console.log(cmdOrCtrl.os());// returns 'darwin' / 'linux' / 'win32' or other os name
console.log(cmdOrCtrl.os("name"));// returns 'macOS' / 'Linux' / 'Windows' or other os name
```
