#!/usr/bin/env node

const shell = require('shelljs')
const yargs = require('yargs')
const argv = yargs
    .option('name', {
        type: 'string',
        describe: 'name test',
        alias: 'n'
    }).argv


// shell test
// shell.cp('./license.md', 'test.txt')
console.log('hello world', argv.name)

module.exports = {
    foo: function(){
        console.log('foo')
    }
}