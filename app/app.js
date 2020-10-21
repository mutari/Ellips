const { triggerAsyncId } = require('async_hooks');
const { settings } = require('cluster');
const   http = require('http'),
        url = require('url'),
        fs = require('fs'),
        path = require('path');

const controllerManager = require('./controllerManager');
const settingManager = require('./settingManager');
const yamlManager = require('./yamlManager');

class app 
{

    /**
     * Start a http web server
     * initing point of ellipc
     */
    constructor() 
    {
        this.controller = new controllerManager();

        this.httpServer = http.createServer((request, response) => {
            console.log("sombody connected");
        });

        yamlManager.loadAll(__dirname + '/../src/config').then(() => {
            console.log(settingManager.setting)
        })
    }

}

module.exports = app;