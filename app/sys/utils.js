const fs = require('fs');
const glob = require('glob');

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
    // getDependencies: getDependencies,
    getFiles: getFiles,
    loadFiles: loadFiles,
    isFile: isFile,
    isDirectory: isDirectory,
    isArray: isArray,
    isObject: isObject,
    isString: isString,
    isFunction: isFunction,
    isPromise: isPromise,
    isDefined: isDefined,
    isUndefined: isUndefined
};