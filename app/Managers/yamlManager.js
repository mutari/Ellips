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
        await this.storeSettingsForFile(path + '/ellips.yaml');
        await this.storeSettingsForFile(path + '/routes.yaml');
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

    /**
     * loades yaml config file and stores ass json in settingManager
     * @param {string} path path of yaml config file
     * @param {string} name name of yaml head
     */
    static async storeSettingsForFile(path)
    {
        let settingsJSON = await this.loadYaml(path);
        Object.keys(settingsJSON).forEach(element => {
            settingManager.addSettingJSON(element, settingsJSON[element]);
        });
    }
}
module.exports = yamlManager;