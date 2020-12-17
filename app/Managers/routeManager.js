const settingManager = require('./settingManager')

class routeManager
{

    constructor()
    {
        this.routes = this.loadRoutes();
    }

    /**
     * load all routes from yaml config file
     */
    loadRoutes()
    {
        let allRoutes = []
        let routeYaml = settingManager.getSettingJSON('routes');
        Object.keys(routeYaml).forEach(route => {
            allRoutes.push({
                method: routeYaml[route].method,
                path: routeYaml[route].path,
                call: routeYaml[route].call,
                controller: routeYaml[route].controller
            });
        })
        return allRoutes;
    }

}

module.exports = routeManager;