'use strict';

// --------------------
// Module import
// --------------------
import data from './data';
import handleOptions from './handleOptions';


// --------------------
// Module export
// --------------------
export default TwCitySelector; /* use rollup to build */
// module.exports = TwCitySelector; /* use browserify to build */


// --------------------
// Constructor
// --------------------
function TwCitySelector() {

	var elRoleName = 'tw-city-selector';

	// --- Setting options ---
	var optionsCustom = arguments[0];
	var optionsRequired = arguments.length ? ['el'] : null; // 設置必要參數，若無帶入任何參數則設不設置
	var optionsDefault = {
		el: null,
		elCountry: null,
		elDistrict: null,
		elZipcode: null,
		selectedCountry: null, // {boolean} 預設選擇的縣市
		selectedDistrict: null, //{boolean} 預設選擇的區域
		only: null, // {array} 限制顯示哪些縣市
		showZipcode: false, // {boolean} 是否顯示郵遞區號欄位
		bootstrapStyle: false,
		countryClassName: 'country',
		countryFiledName: 'country',
		districtClassName: 'district',
		districtFieldName: 'district',
		zipcodeClassName: 'zipcode',
		zipcodeFieldName: 'zipcode'
	};

	this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);

	// 有指定 element 的初始化
	if (this.options.el) {
		this.el = getElement(this.options.el);
		this.elCountry = getElement(this.options.elCountry);
		this.elDistrict = getElement(this.options.elDistrict);
		this.elZipcode = getElement(this.options.elZipcode);

		init.call(this);

		return this;
	}

	// 無指定 element 的初始化，使用 role-attribute element 作為預設 elements
	var els = document.querySelectorAll('[role='+ elRoleName +']');
	Array.prototype.forEach.call(els, function(el) {
		var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

		// 重置設定
		self.el = el;
		self.elCountry = null;
		self.elDistrict = null;
		self.elZipcode = null;

		// 限制顯示哪些縣市
		self.options.only = el.getAttribute('data-only')
			? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
			: null;

		// 預設選擇的縣市
		self.options.selectedCountry = el.getAttribute('data-selected-country');

		// 預設選擇的區域
		self.options.selectedDistrict = el.getAttribute('data-selected-district');

		// 是否使用 bootstrap 樣式
		self.options.bootstrapStyle = (el.getAttribute('data-bootstrap-style') != null);

		// 是否顯示郵遞區號
		self.options.showZipcode = (el.getAttribute('data-show-zipcode') != null);

		init.call(self);
	}, this);

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
function init() {
	setElements.call(this);
	listenCountryChanged.call(this);
	listenDistrictChanged.call(this);

	// 有設定預設選定的縣市
	if (this.options.selectedCountry) {
		setSelectedItem.call(this);
	}

	// bootstrap 樣式套入
	if (this.options.bootstrapStyle) {
		setBootstrapStyle.call(this);
	}

	return this;
}

function getElement(el) {
	return el ? document.querySelector(el) : null;
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
	this.elCountry.innerHTML = getCountryOptions(this.options.only);
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
	}

	// 郵遞區號屬性設定
	this.elZipcode.setAttribute('class', this.options.zipcodeClassName);
	this.elZipcode.name = this.options.zipcodeFieldName;
	this.elZipcode.type = 'text';
	this.elZipcode.readOnly = true;
	this.elZipcode.autocomplete = 'off';
	this.elZipcode.placeholder = '郵遞區號';
	this.elZipcode.style.width = '6em';
	this.elZipcode.style.display = this.options.showZipcode || 'none';

	// element 片段塞入 el
	this.el.appendChild(fragment);
}

function getCountryOptions(only) {
	var options = '<option value="">選擇縣市</option>';

	for (var i = 0, j = data.countries.length; i < j; i++) {
		// 若有設定限制顯示的縣市，且該項目不在自訂縣市中
		if (only && Array.isArray(only) && only.indexOf(data.countries[i]) === -1) {
			continue;
		}

		// format: <option value="臺北市" data-index="0">臺北市</option>
		options += `<option value="${data.countries[i]}" data-index="${i}">${data.countries[i]}</option>`;
	}

	return options;
}

function getDistrictOptions(index) {
	if ( ! index) {
		return '<option value="" selected>---</option>';
	}

	var options = '<option value="" selected>選擇區域</option>';

	for(var i = 0, j = data.districts[index][0].length - 1; i <= j; i++) {
		// format: <option value="中正區" data-zipcode="100">中正區</option>
		options += `<option value="${data.districts[index][0][i]}"
                            data-zipcode="${data.districts[index][1][i]}">
		                ${data.districts[index][0][i]}
		            </option>`;
	}

	return options;
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
		var zipcode = this.elDistrict.querySelector('option:checked').dataset.zipcode;
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
