export default class HandleOptions {

    constructor(options = {}, optionsRequired = [], optionsDefault = {}) {
        // Check options required
        if (optionsRequired.length)
            this.checkOptionsRequired(options, optionsRequired);

        // Extend options
        return this.setOptionsExtend(options, optionsDefault);
    }

    checkOptionsRequired(optionsCustom, optionsRequired) {
        let error = '';
        optionsCustom = optionsCustom || {};

        Object.keys(optionsRequired).forEach(function (property) {
            if (!optionsCustom.hasOwnProperty(property))
                error += property + ',';
        });

        if (error) throw '缺少參數: ' + error;
    }

    setOptionsExtend(optionsCustom, optionsDefault) {
        if (!optionsCustom)
            return optionsDefault;

        let property;
        for (property in optionsCustom) {
            optionsDefault[property] = optionsCustom[property];
        }

        return optionsDefault;
    }

}