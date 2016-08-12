export default function handleOptions() {
  // Check options required
  getOptionsRequired(arguments[0], arguments[1]);
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
  
  return optionsDefault;
}