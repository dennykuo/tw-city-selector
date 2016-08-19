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
  // --- Setting options ---
  var optionsCustom = arguments[0];
  var optionsRequired = arguments.length ? ['el'] : null; // 若無參數則不設必要參數
  var optionsDefault = {
    el: null,
    elCountry: null,
    elDistrict: null,
    elZipcode: null,
    countryClassName: 'country',
    countryFiledName: 'country',
    districtClassName: 'district',
    districtFieldName: 'district',
    zipcodeClassName: 'zipcode',
    zipcodeFieldName: 'zipcode',
    selectedCountry: null, // {boolean} 預設選擇的縣市
    selectedDistrict: null, //{boolean} 預設選擇的區域
    only: null, // {array} 限制顯示哪些縣市
    showZipcode: false // {boolean} 是否顯示郵遞區號欄位
  };
  
  // --- Setting properties ---
  this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);
  
  // 有指定 el 的初始化
  if (this.options.el) {
    this.el = getElements(this.options.el);
    this.elCountry = getElements(this.options.elCountry);
    this.elDistrict = getElements(this.options.elDistrict);
    this.elZipcode = getElements(this.options.elZipcode);
    init.call(this);

    return true;
  }

  // 無指定 el，使用符合設定的 data-role DOM 作為 el 
  var els = document.querySelectorAll('[data-role="tw-city-selector"]');
  els.forEach(function(el) {
    var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

    // 重置相關各 el 設定
    self.el = el;
    self.elCountry = null;
    self.elDistrict = null;
    self.elZipcode = null;

    // 重置限制顯示哪些縣市 & 預設選擇的縣市、區域
    var only = el.getAttribute('data-only');

    if (only) {
      only = el.getAttribute('data-only').replace(/\s/g, '').split(','); // 去除空白字元，轉陣列
      self.options.only = only;
    }

    console.log(self);

    init.call(self);
  }, this);

  return true;
};


// --------------------
// Public Methods
// --------------------
TwCitySelector.prototype.reset = function() {
  return resetSelectors.call(this);
};


// --------------------
// Private Methods
// --------------------
function init() {
  setElements.call(this);
  setCountryChanged.call(this);
  setDistrictChanged.call(this);

  if (this.options.selectedCountry) {
    setSelectedItem.call(this);
  }
}

function getElements(el) {
  if ( ! el) return null;
  return document.querySelector(el);
}

function setElements() {
  // 縣市選單
  if ( ! this.elCountry) {
    var country = document.createElement('select');
    this.elCountry = country;
    this.el.appendChild(country);
  }

  this.elCountry.innerHTML = getCountryOptions(this.options.only);
  this.elCountry.setAttribute('class', this.options.countryClassName);
  this.elCountry.name = this.options.countryFiledName;

  // 區域選單
  if ( ! this.elDistrict) {
    var district = document.createElement('select');
    this.elDistrict = district;
    this.el.appendChild(district);
  }

  this.elDistrict.innerHTML = getDistrictOptions();
  this.elDistrict.setAttribute('class', this.options.districtClassName);
  this.elDistrict.name = this.options.districtFieldName;

  // 郵遞區號
  if ( ! this.elZipcode) {
    var zipcode = document.createElement('input');
    this.elZipcode = zipcode;
    this.el.appendChild(zipcode);
  }

  this.elZipcode.setAttribute('class', this.options.zipcodeClassName);
  this.elZipcode.name = this.options.zipcodeFieldName;
  this.elZipcode.type = 'text';
  this.elZipcode.readOnly = true;
  this.elZipcode.autocomplete = "off";
  this.elZipcode.placeholder = "郵遞區號";
  this.elZipcode.style.width = '6em';
  this.elZipcode.style.display = this.options.showZipcode || 'none';
}

function getCountryOptions(only) {
  var options = '<option value="">選擇縣市</option>';

  for (var i = 0, j = data.country.length; i < j; i++) {
    // 若有設定限制顯示的縣市，且該項目不在自訂縣市中
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
    var index = this.elCountry.querySelector('option:checked')
      .getAttribute('data-index'); // 取 dada-index
    this.elDistrict.innerHTML = getDistrictOptions(index);
    this.elZipcode.value = '';
  }.bind(this);

  this.elCountry.addEventListener('change', handler);
}

function setDistrictChanged() {
  var handler = function() {
    var zipcode = this.elDistrict.querySelector('option:checked')
      .getAttribute('data-zipcode'); // 取 dada-zipcode
    this.elZipcode.value = zipcode;
  }.bind(this);

  this.elDistrict.addEventListener('change', handler);
}

function setSelectedItem() {
  var event = document.createEvent('Event');
  event.initEvent('change', true, true);

  this.elCountry.value = this.options.selectedCountry;
  this.elCountry.dispatchEvent(event);

  if (this.options.selectedDistrict) {
    this.elDistrict.value = this.options.selectedDistrict;
    this.elDistrict.dispatchEvent(event);
  }
}

function resetSelectors() {
  this.elCountry.selectedIndex = 0;
  this.elDistrict.innerHTML = getDistrictOptions();
  this.elZipcode.value = '';
  return true;
}
