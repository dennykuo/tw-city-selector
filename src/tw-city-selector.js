'use strict';

// --------------------
// Module import
// --------------------
import data from './data';
import handleOptions from './handle-options';


// --------------------
// Module export
// --------------------
export default TwCitySelector; /* use webpack or rollup to build */
// module.exports = TwCitySelector; /* use browserify to build */


// --------------------
// Constructor
// --------------------
function TwCitySelector(options = {}) {

	this.elRoleAttrName = 'tw-city-selector';

	// Setting options
	var optionsDefault = {
        // *** 作用目標
		el: null, // {string | HTMLElement}
		elCounty: null, // {string | HTMLElement}
		elDistrict: null, // {string | HTMLElement}
		elZipcode: null, // {string | HTMLElement}

        // *** 元件的內容限制
        only: null, // {array} 限制可選擇的縣市
        // onlyCity: null, // {array} 限制顯示哪些縣市 @封存
        showZipcode: false, // {boolean} 是否顯示郵遞區號欄位

        // *** 元件的預設選定值
		selectedCounty: null, // {string} 預設選擇的縣市
		selectedDistrict: null, // {string} 預設選擇的區域

        // *** 元件 tag 屬性
		countyClassName: 'county', // {string}
		countyFiledName: 'county', // {string}
		districtClassName: 'district', // {string}
		districtFieldName: 'district', // {string}
		zipcodeClassName: 'zipcode', // {string}
		zipcodeFieldName: 'zipcode', // {string}

        // *** 其他
        bootstrapStyle: false // {boolean}
	};

    var optionsCustom = options;
	var optionsRequired = options.length ? ['el'] : null; // 設置必要參數，若無帶入任何參數則設不設置
	this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);

    // Setup
	elSetup.call(this);

	return this;
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
		this.elCounty = getElement(this.options.elCounty, this.el);
		this.elDistrict = getElement(this.options.elDistrict, this.el);
		this.elZipcode = getElement(this.options.elZipcode, this.el);

		return init.call(this);
	}

	// 無指定 element 的初始化，使用 role-attribute element 作為預設 elements
	var els = document.querySelectorAll('[role='+ this.elRoleAttrName +']');
	Array.prototype.forEach.call(els, function(el) {
		var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

		// 因可能同時使用兩種初始化方式，需重置設定
		self.el = el;
		self.elCounty = null;
		self.elDistrict = null;
		self.elZipcode = null;

		// 限制只顯示哪些縣市、區域
		self.options.only = el.getAttribute('data-only')
			? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
			: null;

        // 限制顯示哪些縣市 @封存
    	// self.options.onlyCity = el.getAttribute('data-only-city')
		// 	? el.getAttribute('data-only-city').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
		// 	: null;

		// 預設選擇的縣市
		self.options.selectedCounty = el.getAttribute('data-selected-county') || el.getAttribute('data-selected-country'); // 拼字錯誤

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
	listenCountyChanged.call(this);
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
	if ( ! this.elCounty) {
		var county = document.createElement('select');
		this.elCounty = county;
		fragment.appendChild(county);
	}

	// 縣市選單屬性
	this.elCounty.innerHTML = getCountyOptions.call(this);
	this.elCounty.setAttribute('class', this.options.countyClassName);
	this.elCounty.name = this.options.countyFiledName;

	// 區域選單
	if ( ! this.elDistrict) {
		var district = document.createElement('select');
		this.elDistrict = district;
		fragment.appendChild(district);
	}

	// 區域選單屬性
	this.elDistrict.innerHTML = getDistrictOptions.call(this);
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

function setCountyElement() {
    // 縣市選單
	if ( ! this.elCounty) {
		var county = document.createElement('select');
		this.elCounty = county;
		fragment.appendChild(county);
	}

	// 縣市選單屬性
	this.elCounty.innerHTML = getCountyOptions.call(this);
	this.elCounty.setAttribute('class', this.options.countyClassName);
	this.elCounty.name = this.options.countyFiledName;
}

function getCountyOptions() {
	var elOptions = '<option value="">選擇縣市</option>';
    var onlyItems = getCountyOnlyItems.call(this);

	for (var i = 0, j = data.counties.length; i < j; i++) {
		// 若有設定限制顯示的縣市，且該項目不在自訂縣市中，則不顯示
		if (onlyItems && onlyItems.indexOf(data.counties[i]) === -1) {
			continue;
		}

		// format: <option value="臺北市" data-index="0">臺北市</option>
		elOptions += `<option value="${data.counties[i]}" data-index="${i}">${data.counties[i]}</option>`;
	}

	return elOptions;
}

function getDistrictOptions(index) {
    var elOptions = '<option value="" selected>選擇區域</option>';

	if ( ! index) return elOptions;

    var countyValue = this.elCounty.value;
    var onlyItems = getDistrictOnlyItems.call(this, countyValue);
    // console.log(onlyItems);

	for(var i = 0, j = data.districts[index][0].length - 1; i <= j; i++) {
        // 若有設定限制顯示的區域，且該項目不在自訂區域中，則不顯示
        if (onlyItems && onlyItems.indexOf(data.districts[index][0][i]) === -1) {
            continue;
        }

		// format: <option value="中正區" data-zipcode="100">中正區</option>
		elOptions += `<option value="${data.districts[index][0][i]}"
                              data-zipcode="${data.districts[index][1][i]}"
                      >
		                  ${data.districts[index][0][i]}
		              </option>`;
	}

	return elOptions;
}

function getCountyOnlyItems() {
    var onlyItems = this.options.only;
    if ( ! Array.isArray(onlyItems)) return null;

    // 取出縣市資料
    return onlyItems.map(function(item) {
        var index = item.indexOf('@');
        return index === -1 ? item : item.substring(0, index);
    });
}

function getDistrictOnlyItems(county) {
    var onlyItems = this.options.only;
    if ( ! Array.isArray(onlyItems)) return null;

    // 取出區域資料
    var items = null;
    onlyItems.forEach(function(item) {
        if (item.indexOf(county) === -1) return;

        var index = item.lastIndexOf('@');
        if (index !== -1) {
            return items = item.substring(index + 1).split('|'); // 轉陣列
        }
    });

    return items;
}

function listenCountyChanged() {
	var handler = function() {
		var index = this.elCounty.querySelector('option:checked').dataset.index;
		this.elDistrict.innerHTML = getDistrictOptions.call(this, index);
		this.elZipcode.value = '';
	}.bind(this);

	this.elCounty.addEventListener('change', handler);
}

function listenDistrictChanged() {
	var handler = function() {
		var zipcode = this.elDistrict.querySelector('option:checked').dataset.zipcode || '';
		this.elZipcode.value = zipcode;
	}.bind(this);

	this.elDistrict.addEventListener('change', handler);
}

function setSelectedItem() {
    if (this.options.selectedCounty) {
        var event = document.createEvent('Event');
    	event.initEvent('change', true, true);

    	this.elCounty.value = this.options.selectedCounty;
    	this.elCounty.dispatchEvent(event);
    }

	if (this.options.selectedDistrict) {
		this.elDistrict.value = this.options.selectedDistrict;
		this.elDistrict.dispatchEvent(event);
	}
}

function resetSelectors() {
	this.elCounty.selectedIndex = 0;
	this.elDistrict.innerHTML = getDistrictOptions.call(this);
	this.elZipcode.value = '';

	return this;
}

function setBootstrapStyle() {
	var fieldClassName = 'form-control';
    var wrapperClassName = 'form-group';
	var fragment = document.createDocumentFragment();

	this.elCounty.setAttribute('class', fieldClassName);
	this.elDistrict.setAttribute('class', fieldClassName);
	this.elZipcode.setAttribute('class', fieldClassName);

    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', wrapperClassName);

	var elCounty = wrapper.cloneNode();
	elCounty.appendChild(this.elCounty);
	fragment.appendChild(elCounty);

	var elDistrict = wrapper.cloneNode();
	elDistrict.appendChild(this.elDistrict);
	fragment.appendChild(elDistrict);

	var elZipcode = wrapper.cloneNode();
	elZipcode.appendChild(this.elZipcode);
	fragment.appendChild(elZipcode);

	this.el.appendChild(fragment);
}
