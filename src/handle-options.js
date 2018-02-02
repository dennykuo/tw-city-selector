export default function handleOptions() {
  // Check options required
  if (arguments[1]) {
    getOptionsRequired(arguments[0], arguments[1]);
  }

  // Extend options
  return getOptionsExtend(arguments[0], arguments[2]);
}

function getOptionsRequired(optionsCustom, optionsRequired) {
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
    if ( ! optionsCustom) {
        return optionsDefault;
    }

    var property;
    for (property in optionsCustom) {
        optionsDefault[property] = optionsCustom[property];
    }

    if (optionsCustom['elCountry']) { // 拼字錯誤修正
        optionsDefault['elCounty'] = optionsCustom['elCountry'];
    }

    if (optionsCustom['selectedCountry']) { // 拼字錯誤修正
        optionsDefault['selectedCounty'] = optionsCustom['selectedCountry'];
    }

    if (optionsCustom['countryClassName']) { // 拼字錯誤修正
        optionsDefault['countyClassName'] = optionsCustom['countryClassName'];
    }

    if (optionsCustom['countryFiledName']) { // 拼字錯誤修正
        optionsDefault['countyFiledName'] = optionsCustom['countryFiledName'];
    }

    return optionsDefault;
}
