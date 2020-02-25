var cmdOrCtrl = require('./index.js');

console.log(cmdOrCtrl.cmdOrCtrl())// ctrl / cmd
console.log(cmdOrCtrl.cmdOrCtrl("short"))// ctrl / cmd
console.log(cmdOrCtrl.cmdOrCtrl("long"))// control / command
console.log(cmdOrCtrl.cmdOrCtrl("short", "pascal"))// Ctrl / Cmd
console.log(cmdOrCtrl.cmdOrCtrl("long", "pascal"))// Control / Command
console.log(cmdOrCtrl._())// alternative of `cmdOrCtrl`, returns `ctrl`

console.log(cmdOrCtrl.os());// returns 'win32' or other os name
console.log(cmdOrCtrl.os("name"));// returns 'macOS' / 'Linux' / 'Windows' or other os name