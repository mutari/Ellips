const fs = require('fs');

/**
 * @link https://stackabuse.com/reading-and-writing-yaml-to-a-file-in-node-js-javascript/
 * @link https://yaml.org/spec/1.2/spec.html
 */
const yaml = require('js-yaml');

const settingManager = require('./settingManager');

class yamlManager 
{
    static async loadAll(path)
    {
        await this.storeSettingsForFile(path + '/route.yaml', 'routes');
        await this.storeSettingsForFile(path + '/ellips.yaml', 'ellips');
    }

    /**
     * loads a yaml config file
     * @param {String} path the pathe to yaml file to loade
     */
    static async loadYaml(path) 
    {
        let fileContents = await fs.readFileSync(path, 'utf8');
        let data = yaml.safeLoad(fileContents);
        return data;
    }

    static async storeSettingsForFile(path, name)
    {
        let settingsJSON = await this.loadYaml(path);
        settingManager.addSettingJSON(name, settingsJSON[name]);
    }
}
module.exports = yamlManager;