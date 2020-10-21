class settingManager 
{

    static addSettingJSON(path, value) 
    {
        this.checkForStaticVar() 
        settingManager.setting[path] = value;
    }

    static getSettingJSON(path)
    {   
        this.checkForStaticVar() 
        return settingManager.setting[path]
    }

    static addSetting(path, name, value)
    {
        this.checkForStaticVar() 
        settingManager.setting[path][name] = value;
    }

    static getSetting(path, name)
    {
        this.checkForStaticVar() 
        return settingManager.setting[path][name]
    }

    static checkForStaticVar() 
    {
        if(typeof settingManager.setting == 'undefined') settingManager.setting = {}
    }

}

module.exports = settingManager;