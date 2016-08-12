'use strict';

// --------------------
// Module import
// --------------------
import { data } from './data';
import handleOptions from './handleOptions';


// --------------------
// Module export
// --------------------
module.exports = TwCitySelector; /* use browserify to build */
// export default TwCitySelector; /* use rollup to build */


// --------------------
// Define constructor
// --------------------
function TwCitySelector() {
  // Setting options
  var optionsCustom = arguments[0];
  var optionsRequired = ['el'];
  var optionsDefault = {
    countryClassName: 'country',
    countryFiledName: 'country',
    districtClassName: 'district',
    districtFieldName: 'district',
    zipcodeClassName: 'zipcode',
    zipcodeFiledName: 'zipcode',
    only: null, // array 只顯示哪些縣市
    showZipcode: false
  };

  this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);
  this.el = document.querySelector(this.options.el);
  this.country = null;
  this.district = null;
  this.zipcode = null;

  init.call(this);
};


// --------------------
// Public Methods
// --------------------
TwCitySelector.prototype.reset = function() {
  resetSelectors.call(this);
  return true;
};


// --------------------
// Private Methods
// --------------------
function init() {
  setElements.call(this);
  getElements.call(this);
  setCountryChanged.call(this);
  setDistrictChanged.call(this);
}

function setElements() {
  // 縣市選單
  var country = document.createElement('select');
  country.className = this.options.countryClassName;
  country.name = this.options.countryFiledName;
  country.innerHTML = getCountryOptions(this.options.only);
  this.el.appendChild(country);

  // 區域選單
  var district = document.createElement('select');
  district.className = this.options.districtClassName;
  district.name = this.options.districtFieldName;
  district.innerHTML = getDistrictOptions();
  this.el.appendChild(district);

  // 郵遞區號
  var zipcode = document.createElement('input');
  zipcode.className = this.options.zipcodeClassName;
  zipcode.name = this.options.zipcodeFieldName;
  zipcode.type = 'text';
  zipcode.style.width = '5em';
  zipcode.placeholder = "郵遞區號";
  zipcode.autocomplete = "off"
  zipcode.readOnly = true;
  this.el.appendChild(zipcode);

  if ( ! this.options.showZipcode) { zipcode.style.display = 'none'; }
}

function getElements() {
  // 縣市選單
  this.country = this.el.querySelector('.' + this.options.countryClassName);
  // 區域選單
  this.district = this.el.querySelector('.' + this.options.districtClassName);
  // 郵遞區號
  this.zipcode = this.el.querySelector('.' + this.options.zipcodeClassName);
}

function getCountryOptions(only) {
  var options = '<option value="">選擇縣市</option>';

  for (var i = 0, j = data.country.length; i < j; i++) {
    // 若有自訂顯示縣市，且不再自訂範圍中
    if (only && Array.isArray(only) && only.indexOf(data.country[i]) === -1) {
      continue;
    }
    // format: <option value="台北市" data-index="0">台北市</option>
    options += `<option value="${data.country[i]}" data-index="${i}">${data.country[i]}</option>`;
  }

  return options;
}

function getDistrictOptions(index) {
  if ( ! index) {
    return '<option value="" selected>---</option>';
  }

  var options = '<option value="" selected>選擇區域</option>';

  for(var i = 0, j = data.district[index][0].length - 1; i <= j; i++) {
    // format: <option value="中正區" data-zipcode="100">中正區</option>
    options += `
      <option value="${data.district[index][0][i]}" data-zipcode="${data.district[index][1][i]}">
        ${data.district[index][0][i]}
      </option>
    `;
  }

  return options;
}

function setCountryChanged() {
  var handler = function() {
    var index = this.country.querySelector('option:checked').dataset.index; // 取 dada-index
    this.district.innerHTML = getDistrictOptions(index);
    this.zipcode.value = '';
  }.bind(this);

  this.country.addEventListener('change', handler);
}

function setDistrictChanged() {
  var handler = function() {
    var zipcode = this.district.querySelector('option:checked').dataset.zipcode; // 取 dada-zipcode
    this.zipcode.value = zipcode;
  }.bind(this);

  this.district.addEventListener('change', handler);
}

function resetSelectors() {
  this.country.selectedIndex = 0;
  this.district.innerHTML = getDistrictOptions();
  this.zipcode.value = '';
}
