#!/usr/bin/env node

const yargs = require('yargs')
const log = require('chalk-log')
const argv = yargs
    .option('name', {
        type: 'string',
        describe: 'name test',
        alias: 'n'
    }).argv


// const shell = require('shelljs')
// shell test
// shell.cp('./license.md', 'test.txt')
// log.note('hello world' + argv.name)

module.exports = {
    foo: function(){
        log.error('foo')
    }
}

// use config

let config = require('config')
let dbConfig = config.get('Customer.dbConfig')

// command run: export NODE_ENV=production && nhw
log.note(`host:${dbConfig.host}`)

const opn = require('opn')

// opn('http://kaola.com', {app: ['google chrome', '--incognito']});
opn('http://kaola.com', {app: 'firefox'})
