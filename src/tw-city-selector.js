'use strict';

// --------------------
// Module import
// --------------------
import data from './data';
import handleOptions from './handle-options';


// --------------------
// Module export
// --------------------
export default TwCitySelector; /* use rollup to build */
// module.exports = TwCitySelector; /* use browserify to build */


// --------------------
// Constructor
// --------------------
function TwCitySelector() {

	this.elRoleName = 'tw-city-selector';

	// Setting options
	var optionsDefault = {
		el: null,
		elCountry: null,
		elDistrict: null,
		elZipcode: null,
		selectedCountry: null, // {boolean} 預設選擇的縣市
		selectedDistrict: null, // {boolean} 預設選擇的區域
		only: null, // {array} 限制顯示哪些縣市 (下個版本棄用)
        onlyCity: null, // {array} 限制顯示哪些縣市
		showZipcode: false, // {boolean} 是否顯示郵遞區號欄位
		bootstrapStyle: false,
		countryClassName: 'country',
		countryFiledName: 'country',
		districtClassName: 'district',
		districtFieldName: 'district',
		zipcodeClassName: 'zipcode',
		zipcodeFieldName: 'zipcode'
	};

    var optionsCustom = arguments[0];
	var optionsRequired = arguments.length ? ['el'] : null; // 設置必要參數，若無帶入任何參數則設不設置
	this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);

    // Setup
	elSetup.call(this);

	// return this;
};


// --------------------
// Public Methods
// --------------------
// TwCitySelector.prototype.init = function() {
// 	return init.call(this);
// };

TwCitySelector.prototype.reset = function() {
	return resetSelectors.call(this);
};


// --------------------
// Private Methods
// --------------------
function elSetup() {
    // 有指定 element 的初始化
	if (this.options.el) {
		this.el = getElement(this.options.el);
		this.elCountry = getElement(this.options.elCountry, this.el);
		this.elDistrict = getElement(this.options.elDistrict, this.el);
		this.elZipcode = getElement(this.options.elZipcode, this.el);

		return init.call(this);
	}

	// 無指定 element 的初始化，使用 role-attribute element 作為預設 elements
	var els = document.querySelectorAll('[role='+ this.elRoleName +']');
	Array.prototype.forEach.call(els, function(el) {
		var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

		// 重置設定
		self.el = el;
		self.elCountry = null;
		self.elDistrict = null;
		self.elZipcode = null;

		// 限制顯示哪些縣市 (下個版本棄用)
		self.options.only = el.getAttribute('data-only')
			? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
			: null;

        // 限制顯示哪些縣市
    	self.options.onlyCity = el.getAttribute('data-only-city')
			? el.getAttribute('data-only-city').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
			: null;

		// 預設選擇的縣市
		self.options.selectedCountry = el.getAttribute('data-selected-country');

		// 預設選擇的區域
		self.options.selectedDistrict = el.getAttribute('data-selected-district');

        // 是否使用 bootstrap 樣式
		self.options.bootstrapStyle = (el.getAttribute('data-bootstrap-style') != null);

        // 是否顯示郵遞區號
		self.options.showZipcode = (el.getAttribute('data-show-zipcode') != null);

		return init.call(self);
	}, this);

    return els;
}

function init() {
	setElements.call(this);

    // 監聽選單動作
	listenCountryChanged.call(this);
	listenDistrictChanged.call(this);

	// 設定預設選定的縣市
	setSelectedItem.call(this);

	// bootstrap 樣式套入
	if (this.options.bootstrapStyle) {
		setBootstrapStyle.call(this);
	}

	return this;
}

function getElement(el, parent) {
    if ( ! el)
        return null;
    if (parent)
        return parent.querySelector(el);
	return document.querySelector(el);
}

function setElements() {
	var fragment = document.createDocumentFragment();

	// 縣市選單
	if ( ! this.elCountry) {
		var country = document.createElement('select');
		this.elCountry = country;
		fragment.appendChild(country);
	}

	// 縣市選單屬性
	this.elCountry.innerHTML = getCountryOptions.call(this);
	this.elCountry.setAttribute('class', this.options.countryClassName);
	this.elCountry.name = this.options.countryFiledName;

	// 區域選單
	if ( ! this.elDistrict) {
		var district = document.createElement('select');
		this.elDistrict = district;
		fragment.appendChild(district);
	}

	// 區域選單屬性
	this.elDistrict.innerHTML = getDistrictOptions();
	this.elDistrict.setAttribute('class', this.options.districtClassName);
	this.elDistrict.name = this.options.districtFieldName;

	// 郵遞區號
	if ( ! this.elZipcode) {
		var zipcode = document.createElement('input');
		this.elZipcode = zipcode;
		fragment.appendChild(zipcode);

        // 郵遞區號屬性設定
        this.elZipcode.style.display = this.options.showZipcode || 'none';
        this.elZipcode.style.width = '6em';
        this.elZipcode.readOnly = true;
        this.elZipcode.type = 'text';
        this.elZipcode.placeholder = '郵遞區號';
        this.elZipcode.name = this.options.zipcodeFieldName;
        this.elZipcode.setAttribute('class', this.options.zipcodeClassName);
        this.elZipcode.autocomplete = 'off';
	}

	// element 片段塞入 el
	this.el.appendChild(fragment);
}

function setCountryElement() {
    // 縣市選單
	if ( ! this.elCountry) {
		var country = document.createElement('select');
		this.elCountry = country;
		fragment.appendChild(country);
	}

	// 縣市選單屬性
	this.elCountry.innerHTML = getCountryOptions.call(this);
	this.elCountry.setAttribute('class', this.options.countryClassName);
	this.elCountry.name = this.options.countryFiledName;
}

function getCountryOptions() {
	var elOptions = '<option value="">選擇縣市</option>';
    var onlyCity = this.options.only || this.options.onlyCity; // this.options.only 下個版本棄用

	for (var i = 0, j = data.countries.length; i < j; i++) {
		// 若有設定限制顯示的縣市，且該項目不在自訂縣市中
		if (onlyCity && Array.isArray(onlyCity) && onlyCity.indexOf(data.countries[i]) === -1) {
			continue;
		}

		// format: <option value="臺北市" data-index="0">臺北市</option>
		elOptions += `<option value="${data.countries[i]}" data-index="${i}">${data.countries[i]}</option>`;
	}

	return elOptions;
}

function getDistrictOptions(index) {
	if ( ! index) {
		return '<option value="" selected>---</option>';
	}

	var elOptions = '<option value="" selected>選擇區域</option>';

	for(var i = 0, j = data.districts[index][0].length - 1; i <= j; i++) {
		// format: <option value="中正區" data-zipcode="100">中正區</option>
		elOptions += `<option value="${data.districts[index][0][i]}"
                            data-zipcode="${data.districts[index][1][i]}">
		                ${data.districts[index][0][i]}
		            </option>`;
	}

	return elOptions;
}

function listenCountryChanged() {
	var handler = function() {
		var index = this.elCountry.querySelector('option:checked').dataset.index;
		this.elDistrict.innerHTML = getDistrictOptions(index);
		this.elZipcode.value = '';
	}.bind(this);

	this.elCountry.addEventListener('change', handler);
}

function listenDistrictChanged() {
	var handler = function() {
		var zipcode = this.elDistrict.querySelector('option:checked').dataset.zipcode || '';
		this.elZipcode.value = zipcode;
	}.bind(this);

	this.elDistrict.addEventListener('change', handler);
}

function setSelectedItem() {
    if (this.options.selectedCountry) {
        var event = document.createEvent('Event');
    	event.initEvent('change', true, true);

    	this.elCountry.value = this.options.selectedCountry;
    	this.elCountry.dispatchEvent(event);
    }

	if (this.options.selectedDistrict) {
		this.elDistrict.value = this.options.selectedDistrict;
		this.elDistrict.dispatchEvent(event);
	}
}

function resetSelectors() {
	this.elCountry.selectedIndex = 0;
	this.elDistrict.innerHTML = getDistrictOptions();
	this.elZipcode.value = '';

	return this;
}

function setBootstrapStyle() {
	var fieldClassName = 'form-control';
    var wrapperClassName = 'form-group';
	var fragment = document.createDocumentFragment();

	this.elCountry.setAttribute('class', fieldClassName);
	this.elDistrict.setAttribute('class', fieldClassName);
	this.elZipcode.setAttribute('class', fieldClassName);

    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', wrapperClassName);

	var elCountry = wrapper.cloneNode();
	elCountry.appendChild(this.elCountry);
	fragment.appendChild(elCountry);

	var elDistrict = wrapper.cloneNode();
	elDistrict.appendChild(this.elDistrict);
	fragment.appendChild(elDistrict);

	var elZipcode = wrapper.cloneNode();
	elZipcode.appendChild(this.elZipcode);
	fragment.appendChild(elZipcode);

	this.el.appendChild(fragment);
}
