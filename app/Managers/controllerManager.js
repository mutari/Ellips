const fs = require('fs');

const settingsManager = require('./settingManager');

class controllerManager
{
    constructor() 
    {
        this.controllerNames = this.getControllers();
        this.controllers = this.loadControllers(this.controllerNames);
    }

    call(route)
    {
        this.controllers.forEach(controller => {
            if(controller.name == route.controller+'.js')
                this.doFunctions(controller, route)
        })
    }

    doFunctions(controller, route)
    {   
        //console.log(Object.getOwnPropertyNames(controller.controller.prototype))
        controller.controller.prototype[route.call](route.request, route.response);
    }

    /**
     * requires all the controllers
     * @param {array[string]} controllers array of filenames of all the controlers to load
     */
    loadControllers(controllerNames) 
    {
        let path = settingsManager.getSettingJSON('ellips').controllers.path;

        let controllers = [];

        controllerNames.forEach(c => {
            controllers.push({
                name: c,
                controller: new require(`${__dirname}/../../${path}/${c}`)
            });
        })
        return controllers;
    }

    /**
     * get the names of all controlers
     * @return a array of all ther names
     */
    getControllers() 
    {
        let path = settingsManager.getSettingJSON('ellips').controllers.path;

        var controllers = [];
        fs.readdirSync(__dirname + '/../../src/controller').forEach(file => {
            /**
             * only save files that ends with controller.js
             */
            if(file.match(/.*Controller.js/g)) {
                controllers.push(file);
            }
        })
        return controllers;
    }

}


module.exports = controllerManager;