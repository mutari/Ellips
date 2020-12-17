const routeManager = require('./Managers/routeManager');

class Routing
{
    constructor() 
    {
        this.routeManager = new routeManager();
    }

    /**
     * What route to route to
     * @param {string} path request path
     * @param {string} method request method
     */
    routing(path, method) {
        path = path.split('?')[0];
        for(let route = 0; route < this.routeManager.routes.length; route++)
            if(this.matchRoute(path, this.routeManager.routes[route].path) && this.routeManager.routes[route].method == method) 
                return this.routeManager.routes[route];
        return this.routeManager.routes[0];
    }

    matchRoute(path, route) {
        path = path.split('/').slice(1);
        route = route.split('/').slice(1);
        if(path.length != route.length)
            return false;
        for(var i = 0; i < path.length; i++) {
            if(path[i] != this.ifParamTransParam(path[i], route[i]))
                return false;
        }
        return true;
    }

    ifParamTransParam(pathParam, routeParam) {
        if(routeParam.slice(0, 1) == ':')
            return pathParam;
        return routeParam;
    }
}

module.exports = Routing;