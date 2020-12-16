const   http = require('http'),
        url = require('url'),
        fs = require('fs'),
        path = require('path');

const controllerManager = require('./Managers/controllerManager');
const settingManager = require('./Managers/settingManager');
const yamlManager = require('./Managers/yamlManager');

const Routing = require('./Routing');

class app 
{

    /**
     * Start a http web server
     * initing point of ellipc
     */
    constructor() 
    {

        /**
         * load all settings/config from yaml files
         */
        yamlManager.loadAll(__dirname + '/../src/config').then(() => {

            /**
             * set up all controllers
             */
            this.controller = new controllerManager();

            /**
             * initing routing
             */
            this.routing = new Routing();

            /**
             * start http server
             */
            this.httpServer = http.createServer((request, response) => {

                let route = this.routing.routing(request.url, request.method);
                route.request = request;
                route.response = response;
                if(route.path == '*')
                    return this.controller.call(route);

                return this.controller.call(route);

            }).listen(settingManager.getSettingJSON('ellips').port);

            console.log('Server started and running!')

        })
    }

}

module.exports = app;