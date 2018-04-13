const fs = require('fs');
const glob = require('glob');
const uuid = require('uuid/v1');
const crypto = require('crypto');
const dateformat = require('dateformat');

function getMD5(data)
{
    return crypto.createHash('md5').update(data).digest("hex");
}

function getUUID()
{
    return uuid();
}

function getFiles(path, realpath) {
    return glob.sync(path, {
        cwd: require('path').join(__dirname, '..'),
        nodir: true,
        realpath: realpath
    });
};

function loadFiles(path) {
    return getFiles(path, true).map(function(file) {
        return require(file);
    });
};

function isFile(path) {
    try {
        var check = fs.lstatSync(path).isFile();
    } catch(e) {
        throw e;
        return false;
    }
    return check;
};

function isDirectory(path) {
    return !isFile(path);
};

const isArray = Array.isArray;

function isObject(arg) {
    return arg !== null && typeof arg === 'object';
};

function isString(arg) {
    return typeof arg === 'string';
};

function isFunction(arg) {
    return typeof arg === 'function';
};

function isPromise(arg) {
    return isObject(arg) && isFunction(arg.then);
};

function isDefined(arg) {
    return typeof arg !== 'undefined';
};

function isUndefined(arg) {
    return typeof arg === 'undefined';
};

module.exports = {
    getMD5,
    getUUID,
    getFiles,
    loadFiles,
    isFile,
    isDirectory,
    isArray,
    isObject,
    isString,
    isFunction,
    isPromise,
    isDefined,
    isUndefined,
    dateformat
};