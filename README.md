# cmd-or-ctrl

The main thing this package does is simply returning `command` or `control` based on the OS the user is using, and the another thing is to return the common names of OSs.

[**NPM Package**](https://www.npmjs.com/package/cmd-or-ctrl) | [**CNPM**](https://npm.taobao.org/package/cmd-or-ctrl)

## How to use

```shell
# npm
npm i cmd-or-ctrl

# yarn
yarn add cmd-or-ctrl
```

```javascript
var cmdOrCtrl = require('cmd-or-ctrl');

console.log(cmdOrCtrl.cmdOrCtrl())// ctrl / cmd
console.log(cmdOrCtrl.cmdOrCtrl("short"))// ctrl / cmd
console.log(cmdOrCtrl.cmdOrCtrl("long"))// control / command
console.log(cmdOrCtrl.cmdOrCtrl("short", "pascal"))// Ctrl / Cmd
console.log(cmdOrCtrl.cmdOrCtrl("long", "pascal"))// Control / Command
console.log(cmdOrCtrl._())// alternative of `cmdOrCtrl`, returns `ctrl`

console.log(cmdOrCtrl.os());// returns 'win32' or other os name
console.log(cmdOrCtrl.os("name"));// returns 'macOS' / 'Linux' / 'Windows' or other os name
```

## Copyright

Licensed under [MIT License](https://github.com/RoderickQiu/cmd-or-ctrl/blob/master/LICENSE).

**(c) 2020 [Roderick Qiu](https://r-q.name)**.
