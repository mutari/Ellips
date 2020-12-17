const fs = require('fs');

const settingManager = require('./../../Managers/settingManager');

class Response
{

    constructor(NodeResponse)
    {
        NodeResponse.sendFile = (path) => this.sendFile(NodeResponse, path);
    }

    sendFile(NodeResponse, p)
    {
        let path = `${__dirname}/../../../${settingManager.getSettingJSON('ellips').public.path}/${p}`;

        console.log(path)

        fs.readFile(path, 'utf8', (err, fileConetnt) => {
            console.log(fileConetnt)
            NodeResponse.end(fileConetnt);
        })
    }

    send()
    {

    }

    json()
    {

    }

}

module.exports = Response;