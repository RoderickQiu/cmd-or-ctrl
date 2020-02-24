var cmdOrCtrl = require('./index.js');

console.log(cmdOrCtrl.cmdOrCtrl())// ctrl
console.log(cmdOrCtrl.cmdOrCtrl("short"))// ctrl
console.log(cmdOrCtrl.cmdOrCtrl("long"))// control
console.log(cmdOrCtrl.cmdOrCtrl("short", "pascal"))// Ctrl
console.log(cmdOrCtrl.cmdOrCtrl("long", "pascal"))// Control

console.log(cmdOrCtrl.os());// returns 'darwin' / 'linux' / 'win32' or other os name
console.log(cmdOrCtrl.os("name"));// returns 'macOS' / 'Linux' / 'Windows' or other os name