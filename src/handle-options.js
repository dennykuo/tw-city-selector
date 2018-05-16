export default handleOptions;

function handleOptions() {
    // Check options required
    if (arguments[1])
        checkRequired(arguments[0], arguments[1]);

    // Extend options
    return getOptionsExtend(arguments[0], arguments[2]);
}

function checkRequired(optionsCustom, optionsRequired) {
    var error = '';
    var length = optionsRequired.length;

    optionsCustom = optionsCustom || {};

    while (length--) {
        if ( ! optionsCustom.hasOwnProperty(optionsRequired[length]))
            error += optionsRequired[length] + ',';
    }

    if (error) throw '缺少參數: ' + error;
}

function getOptionsExtend(optionsCustom, optionsDefault) {
    if ( ! optionsCustom)
        return optionsDefault;

    var property;
    for (property in optionsCustom) {
        optionsDefault[property] = optionsCustom[property];
    }

    //
    // 拼字錯誤修正，更大版號後移除
    //
    if (optionsCustom['elCountry'])
        optionsDefault['elCounty'] = optionsCustom['elCountry'];

    if (optionsCustom['selectedCountry'])
        optionsDefault['selectedCounty'] = optionsCustom['selectedCountry'];

    if (optionsCustom['countryClassName'])
        optionsDefault['countyClassName'] = optionsCustom['countryClassName'];

    if (optionsCustom['countryFiledName'])
        optionsDefault['countyFiledName'] = optionsCustom['countryFiledName'];

    return optionsDefault;
}
