'use strict';

// ------------------------------
// Module import
// ------------------------------
import data from './data';
import HandleOptions from './handle-options';


// ------------------------------
// Module export
// ------------------------------
export default TwCitySelector; /* use webpack or rollup to build */
// module.exports = TwCitySelector; /* use browserify to build */


// ------------------------------
// Module Constructor
// ------------------------------
function TwCitySelector(options = {}) {

    this.VERSION = '2.0.0';
    this.ROLE_ATTR_NAME = 'tw-city-selector';

    // *** Setting options ***
    let optionsDefault = {
        // 作用目標 elements
        el: null, // {string | HTMLElement}
        elCounty: null, // {string | HTMLElement}
        elDistrict: null, // {string | HTMLElement}
        elZipcode: null, // {string | HTMLElement}

        // 元件的內容限制
        only: null, // {string | array} 限制可選擇的縣市
        disabled: false, // {boolean} 元件是否為 disabled 屬性
        hasZipcode: false, // {boolean} 是否創建郵遞區號欄位
        hiddenZipcode: false, // {boolean} 是否顯示郵遞區號欄位 (hasZipcode 為 true 時，才會生效)

        // 元件的預設選定值
        countyValue: null, // {string} 預設選擇的縣市
        districtValue: null, // {string} 預設選擇的區域

        // elements 屬性
        countyClassName: 'county', // {string}
        countyFieldName: 'county', // {string}
        districtClassName: 'district', // {string}
        districtFieldName: 'district', // {string}
        zipcodeClassName: 'zipcode', // {string}
        zipcodeFieldName: 'zipcode', // {string}

        // 其他設定
        standardWords: false, // {boolean} 使用「臺」的正體字，而非俗體字「台」
        bootstrapStyle: false // {boolean}
    };

    let optionsRequired = options.length ? ['el'] : []; // 設置必要參數，若無帶入任何參數則設不設置

    this.options = new HandleOptions(options, optionsRequired, optionsDefault);

    /**
     * Vue 等 framework 可能會 element 加載的時間差，而讓選單的事件監聽不在掛載的 element 上
     * 使用 window onload event 可解決，卻又會因可能使用 js 路由 (history api) 而失效，
     * 原本預期採用 DOMNodeInserted api 監聽 element 掛載，但語法已將被棄用，
     * 等瀏覽器較普遍接受 MutationObserver api 時，再使用 MutationObserver 監聽 element 掛載，
     * 目前設定 setTimeout 時間為 0 做為 trick 解法。
     */

    setTimeout(function () {
        createElements.call(this);
    }.bind(this), 0);

    return this;
};


// ------------------------------
// Public Methods
// ------------------------------

TwCitySelector.prototype.getVersion = function () {
    console.log('Your tw-city-selector.js is v' + this.VERSION);
    return this;
};

TwCitySelector.prototype.setValue = function (county = null, district = null) {
    setValue.call(this, county, district);
    return this;
};

TwCitySelector.prototype.reset = function () {
    reset.call(this);
    return this;
};


// ------------------------------
// Private Methods
// ------------------------------
function createElements() {

    // *** 有指定 elements 的初始化 ***
    if (this.options.el) {
        this.el = getElement(this.options.el);
        this.elCounty = getElement(this.options.elCounty, this.el);
        this.elDistrict = getElement(this.options.elDistrict, this.el);
        this.elZipcode = getElement(this.options.elZipcode, this.el);

        // 預設值，抓該 element 的 data-value
        if (this.elCounty && this.elCounty.dataset.value) {
            this.options.countyValue = this.elCounty.dataset.value;
            this.options.districtValue = this.elDistrict.dataset.value;
        }

        return init.call(this);
    }

    // *** 無指定 elements 的初始化，使用具有 role-attribute 的 elements 作為作用目標 ***
    let els = document.querySelectorAll('[role=' + this.ROLE_ATTR_NAME + ']');
    Array.prototype.forEach.call(els, function (el) {
        let self = JSON.parse(JSON.stringify(this)); // clone object 來用，因 object 會為參考

        // 因可能同時使用兩種初始化方式，需重置設定
        self.el = el;
        self.elCounty = null;
        self.elDistrict = null;
        self.elZipcode = null;
        // 加入 options
        self = getDataAttrOptions.call(self);

        return init.call(self);
    }, this);

    return els;
}

function getDataAttrOptions() {
    /**
     * 使用 role-attribute 加載時使用這邊抓設定值
     * element.getAttribute('data-xxx') 比 element.dataset.xxx 來得快
     */

    // *** 限制只顯示哪些縣市、區域 ***
    this.options.only = this.el.getAttribute('data-only')
                        ? this.el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
                        : null;
    // *** 預設的縣市選單值 ***
    this.options.countyValue = this.el.getAttribute('data-county-value');
    // *** 預設的區域選單值 ***
    this.options.districtValue = this.el.getAttribute('data-district-value');
    // *** 是否產生郵遞區號欄位 ***
    this.options.hasZipcode = this.el.getAttribute('data-has-zipcode') != null;
    // *** 是否顯示郵遞區號欄位 ***
    this.options.hiddenZipcode = this.el.getAttribute('data-hidden-zipcode') != null;
    // *** 元件是否為 disabled 屬性 ***
    this.options.disabled = this.el.getAttribute('data-disabled') != null;
    // *** 是否使用臺的正體字 ***
    this.options.standardWords = this.el.getAttribute('data-standard-words') != null;
    // *** 是否使用 bootstrap 樣式 ***
    this.options.bootstrapStyle = this.el.getAttribute('data-bootstrap-style') != null;

    return this;
}

function init() {
    // *** standardWords 是否使用正體字 (就算不使用，也要設定回復，以防資料源被使用過後，已非原始狀態) ***
    setStandardWords.call(this, this.options.standardWords);

    // *** 置入 elemnts ***
    setElements.call(this);

    // *** bootstrap 樣式套入 ***
    if (this.options.bootstrapStyle) setBootstrapStyle.call(this);

    // *** 監聽選單動作 ***
    listenCountyChanged.call(this);
    listenDistrictChanged.call(this);

    // *** 設定預設選定的縣市 ***
    setValue.call(this, this.options.countyValue, this.options.districtValue);

    return this;
}

function getElement(el, parent) {
    if ( ! el)
        return null;
    if (el && parent)
        return parent.querySelector(el);
    return document.querySelector(el);
}

function setElements() {
    // *** element 片段 ***
    let fragment = document.createDocumentFragment();

    // *** 縣市選單 ***
    if ( ! this.elCounty) {
        let county = document.createElement('select');
        this.elCounty = county;
        fragment.appendChild(this.elCounty);
    }
    // 縣市選單屬性
    this.elCounty.classList.add(this.options.countyClassName);
    this.elCounty.name = this.options.countyFieldName;
    if (this.options.disabled) this.elCounty.setAttribute('disabled', true);
    setCountyOptions.call(this);

    // *** 區域選單 ***
    if ( ! this.elDistrict) {
        let district = document.createElement('select');
        this.elDistrict = district;
        fragment.appendChild(this.elDistrict);
    }
    // 區域選單屬性
    this.elDistrict.classList.add(this.options.districtClassName);
    this.elDistrict.name = this.options.districtFieldName;
    if (this.options.disabled) this.elDistrict.setAttribute('disabled', true);
    setDistrictOptions.call(this);

    // *** 郵遞區號 ***
    if ( ! this.elZipcode && this.options.hasZipcode) {
        let zipcode = document.createElement('input');
        this.elZipcode = zipcode;
        fragment.appendChild(this.elZipcode);

        // 郵遞區號屬性設定
        this.elZipcode.type = this.options.hiddenZipcode ? 'hidden' : 'text';
        this.elZipcode.name = this.options.zipcodeFieldName;
        this.elZipcode.classList.add(this.options.zipcodeClassName);
        this.elZipcode.readOnly = true;
        this.elZipcode.placeholder = '郵遞區號';
        this.elZipcode.size = 3;
        // this.elZipcode.width = 3;
        this.elZipcode.autocomplete = 'off';
        if (this.options.disabled) this.elZipcode.setAttribute('disabled', true);
    }

    // *** element 片段置入 el ***
    this.el.appendChild(fragment);
}

function setCountyOptions() {
    let select = this.elCounty;

    select.options.add(new Option('選擇縣市', ''));

    let onlyItems = getCountyOnlyItems.call(this);
    for (let i = 0, j = data.counties.length; i < j; i++) {
        // 若有設定限制顯示的縣市，且該項目不在自訂縣市中，則不顯示
        if (onlyItems && onlyItems.indexOf(data.counties[i]) === -1)
            continue;

        // format: <option value="臺北市" data-index="0">臺北市</option>
        let _option = new Option(data.counties[i], data.counties[i]);
        _option.dataset.index = i;
        select.options.add(_option);
    }

    return true;
}

function setDistrictOptions(index = null) {
    let select = this.elDistrict;

    // 清空原有選項
    while (select.firstChild) select.removeChild(select.firstChild);

    select.options.add(new Option('選擇區域', ''));

    if ( ! index) return true;

    let onlyItems = getDistrictOnlyItems.call(this, this.elCounty.value);

    for (let i = 0, j = data.districts[index][0].length - 1; i <= j; i++) {
        // 若有設定限制顯示的區域，且該項目不在自訂區域中，則不顯示
        if (onlyItems && onlyItems.indexOf(data.districts[index][0][i]) === -1)
            continue;

        // format: <option value="中正區" data-zipcode="100">中正區</option>
        let _option = new Option(data.districts[index][0][i], data.districts[index][0][i]);
        _option.dataset.zipcode = data.districts[index][1][i];
        select.options.add(_option);
    }

    return true;
}

function getCountyOnlyItems() {
    let onlyItems = this.options.only;
    let isString = typeof onlyItems == 'string';

    if (isString) return onlyItems;

    if ( ! Array.isArray(onlyItems)) return null;

    // 取出縣市資料
    return onlyItems.map(function (item) {
        let index = item.indexOf('@');
        return index === -1 ? item : item.substring(0, index);
    });
}

function getDistrictOnlyItems(countyValue) {
    let onlyItems = this.options.only;
    let isString = typeof onlyItems == 'string';

    if ( ! isString && ! Array.isArray(onlyItems)) return null;

    if (isString)
        onlyItems = [onlyItems];

    // 取出區域資料
    let items = null;
    onlyItems.forEach(function (item) {
        if (item.indexOf(countyValue) === -1) return;

        let index = item.lastIndexOf('@');
        if (index !== -1) {
            return items = item.substring(index + 1).split('|'); // 轉陣列
        }
    });

    return items;
}

function listenCountyChanged() {
    let handler = function() {
        let _el = this.elCounty.querySelector('option:checked');
        // index 不使用 xx.selectedIndex 是因若有設限縣市選單時順序會錯
        let index = _el.getAttribute('data-index');
        setDistrictOptions.call(this, index);
        if (this.options.hasZipcode) this.elZipcode.value = '';
    }.bind(this);

    // this.elCounty.addEventListener('change', handler); // jquery trigger change 會失敗，改用此段
    this.elCounty.onchange = handler;
};

function listenDistrictChanged() {
    let handler = function () {
        let _el = this.elDistrict.querySelector('option:checked');
        let zipcode = _el.dataset.zipcode || '';
        if (this.options.hasZipcode || this.elZipcode) this.elZipcode.value = zipcode; // 有設定 hasZipcode 或有指定 elZipcode
    }.bind(this);

    // this.elDistrict.addEventListener('change', handler); // jquery trigger change 會失敗，改用此段
    this.elDistrict.onchange = handler;
}

function setValue(county = null, district = null) {
    let changeEvent = createEvent('change');

    if (county) {
        this.elCounty.value = county;
        this.elCounty.dispatchEvent(changeEvent);
    }

    if (district) {
        this.elDistrict.value = district;
        this.elDistrict.dispatchEvent(changeEvent);
    }
}

function reset() {
    this.elCounty.selectedIndex = 0;
    setDistrictOptions.call(this);
    if (this.options.hasZipcode) this.elZipcode.value = '';

    return this;
}

function setStandardWords(standard = false) {
    let str = standard ? '台' : '臺';
    let newStr = standard ? '臺' : '台';

    data.counties = data.counties.map(function (county) {
        if (county.includes(str))
            return county.replace(str, newStr);
        return county;
    });

    data.districts.forEach(function (current, i, districts) {
        districts[i][0] = current[0].map(function (district) {
            if (district.includes(str))
                return district.replace(str, newStr);
            return district;
        });
    });
}

function setBootstrapStyle() {
    let fieldClassName = 'form-control';
    let wrapperClassName = 'form-group';
    let fragment = document.createDocumentFragment();

    this.elCounty.setAttribute('class', fieldClassName);
    this.elDistrict.setAttribute('class', fieldClassName);
    if (this.options.hasZipcode) this.elZipcode.setAttribute('class', fieldClassName);

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', wrapperClassName);

    let elCounty = wrapper.cloneNode();
    elCounty.appendChild(this.elCounty);
    fragment.appendChild(elCounty);

    let elDistrict = wrapper.cloneNode();
    elDistrict.appendChild(this.elDistrict);
    fragment.appendChild(elDistrict);

    if (this.options.hasZipcode) {
        let elZipcode = wrapper.cloneNode();
        elZipcode.appendChild(this.elZipcode);
        fragment.appendChild(elZipcode);
    }

    this.el.appendChild(fragment);
}

function createEvent(eventName) {
    if (typeof (Event) === 'function')
        return new Event(eventName, {
            'bubbles': true,
            'cancelable': false
        });

    // Old IE
    event = document.createEvent('Event');
    event.initEvent(eventName, true, false);
    return event;
}
