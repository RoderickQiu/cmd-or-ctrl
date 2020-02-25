/****
 * @module cmd-or-ctrl
 * @copyright Roderick Qiu
 * @version 0.3.1
 */

'use strict';

/**
 * Return Command or Control for the right time, right system
 * @param {String} shortOrLong (optional) return short version or the long version
 * @param {String} pascalOrNot (optional) capitalize the first letter or not
 * @returns {String} The thing you want to get.
 */
function cmdOrCtrl(shortOrLong, pascalOrNot) {
    if (typeof shortOrLong == "undefined" && typeof pascalOrNot == "undefined")
        return process.platform == "darwin" ? "cmd" : "ctrl";
    else if (shortOrLong != "long" && pascalOrNot != "pascal")
        return process.platform == "darwin" ? "cmd" : "ctrl";
    else if (shortOrLong == "long" && pascalOrNot != "pascal")
        return process.platform == "darwin" ? "command" : "control";
    else if (shortOrLong == "long" && pascalOrNot == "pascal")
        return process.platform == "darwin" ? "Command" : "Control";
    else if (shortOrLong != "long" && pascalOrNot == "pascal")
        return process.platform == "darwin" ? "Cmd" : "Ctrl";
}

exports.cmdOrCtrl = cmdOrCtrl;
exports._ = cmdOrCtrl;

/**
 * Return the current os name.
 * @param {String} mode (optional) When `(mode == 'name')`, we return a well-known version of the os. Example: We'll return `Windows` rather than `win32`.
 * @returns {String} The thing you want to get.
 */
function os(mode) {
    if (mode != "name")
        return process.platform;
    else {
        switch (process.platform) {
            case "win32": return "Windows";
            case "darwin": return "macOS";
            case "linux": return "Linux";
            case "aix": return "AIX";
            case "openbsd": return "OpenBSD";
            case "freebsd": return "FreeBSD";
            case "sunos": return "SunOS";
            case "android": return "Android";
            default: return process.platform;
        }
    }
}

exports.os = os;