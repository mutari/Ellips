const fs = require('fs');

class controllerManager
{
    constructor() 
    {
        this.controlers = this.getControllers();
        console.log(this.controlers)
    }

    /**
     * get the names of all controlers
     * @return a array of all ther names
     */
    getControllers() 
    {
        var controllers = [];
        fs.readdirSync(__dirname + '/../src/controller').forEach(file => {
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