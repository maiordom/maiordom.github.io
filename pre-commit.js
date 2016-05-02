'use strict';

const shell = require('shelljs');
const _ = require('lodash');
const config = require('./package.json').config;
const jsPath = config.jsPath
    .replace('.', '\\.')
    .replace('/', '\/');

let result = shell.exec('git diff --cached --name-only --diff-filter=ACM', {silent: true});

if (!result.output) {
    shell.exit(0);
}

let files = _.compact(result.output.split('\n'));

files = files.filter(function(file) {
    return new RegExp(jsPath + '\/[^/]*\\.js$').test(file);
});

if (!files.length) {
    shell.exit(0);
}

files.forEach(function(file) {
    var result = shell.exec('eslint ' + __dirname + '/' + file);

    if (result.code === 0) {
        shell.exit(0);
    }
});
