'use strict';

// ------------------------------
// Module import
// ------------------------------
import zhData from './data-zh';
import enData from './data-en';
import HandleOptions from './handle-options';

// ------------------------------
// Constants
// ------------------------------
const LANG_ZH = 'zh-tw';
const LANG_EN = 'en-us';
const SEPARATOR_COUNTY_DISTRICT = '@';
const SEPARATOR_DISTRICTS = '|';

// ------------------------------
// Module export
// ------------------------------
export default class TwCitySelector {
    // ------------------------------
    // Constructor
    // ------------------------------
    constructor(options = {}) {
        this.VERSION = '2.1.2';
        this.ROLE_ATTR_NAME = 'tw-city-selector';

        // 設定選項
        const optionsDefault = {
            // 作用目標 elements
            el: null, // {string | HTMLElement}
            elCounty: null, // {string | HTMLElement}
            elDistrict: null, // {string | HTMLElement}
            elZipcode: null, // {string | HTMLElement}

            // 元件的內容限制
            only: null, // {string | array} 限制可選擇的縣市及區域
            except: null, // {string | array} 排除縣市及區域
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

            lang: LANG_ZH,

            // 其他設定
            standardWords: false // {boolean} 使用「臺」的正體字，而非異體字「台」
        };

        const optionsRequired = options.length ? ['el'] : [];
        this.options = new HandleOptions(options, optionsRequired, optionsDefault);

        // 使用 MutationObserver 或 setTimeout 來處理 DOM 準備就緒
        this._initializeWhenReady();
    }

    // ------------------------------
    // Public Methods
    // ------------------------------

    /**
     * 取得版本號
     * @returns {TwCitySelector}
     */
    getVersion() {
        console.log(`Your tw-city-selector.js is v${this.VERSION}`);
        return this;
    }

    /**
     * 設定縣市和區域的值
     * @param {string|null} county - 縣市名稱
     * @param {string|null} district - 區域名稱
     * @returns {TwCitySelector}
     */
    setValue(county = null, district = null) {
        this._setValue(county, district);
        return this;
    }

    /**
     * 重置選單
     * @returns {TwCitySelector}
     */
    reset() {
        this._reset();
        return this;
    }

    // ------------------------------
    // Private Methods - Initialization
    // ------------------------------

    /**
     * 使用 MutationObserver 或 setTimeout 初始化
     * @private
     */
    _initializeWhenReady() {
        // 使用 MutationObserver 監聽 DOM 準備就緒（現代瀏覽器）
        if (typeof MutationObserver !== 'undefined' && this.options.el) {
            // 如果 el 是字串，等待元素出現
            if (typeof this.options.el === 'string') {
                this._waitForElement(this.options.el).then(() => {
                    this._createElements();
                });
            } else {
                // 如果 el 已經是 HTMLElement，直接初始化
                setTimeout(() => this._createElements(), 0);
            }
        } else {
            // 降級方案：使用 setTimeout
            setTimeout(() => this._createElements(), 0);
        }
    }

    /**
     * 等待元素出現在 DOM 中
     * @private
     * @param {string} selector - CSS 選擇器
     * @returns {Promise<HTMLElement>}
     */
    _waitForElement(selector) {
        return new Promise((resolve) => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                return;
            }

            const observer = new MutationObserver(() => {
                const element = document.querySelector(selector);
                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    /**
     * 建立元件
     * @private
     */
    _createElements() {
        // 有指定 elements 的初始化
        if (this.options.el) {
            this.el = this._getElement(this.options.el);

            if (!this.el) {
                console.warn(`TwCitySelector: Element not found for selector "${this.options.el}"`);
                return;
            }

            this.elCounty = this._getElement(this.options.elCounty, this.el);
            this.elDistrict = this._getElement(this.options.elDistrict, this.el);
            this.elZipcode = this._getElement(this.options.elZipcode, this.el);

            // 預設值，抓該 element 的 data-value
            if (this.elCounty && this.elCounty.dataset.value) {
                this.options.countyValue = this.elCounty.dataset.value;
                this.options.districtValue = this.elDistrict?.dataset.value || null;
            }

            return this._init();
        }

        // 無指定 elements 的初始化，使用具有 role-attribute 的 elements 作為作用目標
        const els = document.querySelectorAll(`[role="${this.ROLE_ATTR_NAME}"]`);

        Array.from(els).forEach((el) => {
            // 建立新實例而非使用深度複製
            const instanceOptions = this._getDataAttrOptions(el);
            const instance = Object.create(Object.getPrototypeOf(this));

            // 初始化新實例
            instance.VERSION = this.VERSION;
            instance.ROLE_ATTR_NAME = this.ROLE_ATTR_NAME;
            instance.options = instanceOptions;
            instance.el = el;
            instance.elCounty = null;
            instance.elDistrict = null;
            instance.elZipcode = null;

            instance._init();
        });
    }

    /**
     * 從 data attributes 取得選項
     * @private
     * @param {HTMLElement} el - DOM 元素
     * @returns {Object} 選項物件
     */
    _getDataAttrOptions(el) {
        const options = { ...this.options };
        const { dataset } = el;

        // 使用 dataset API 並減少重複調用
        const attrs = {
            only: el.getAttribute('data-only'),
            except: el.getAttribute('data-except'),
            countyValue: el.getAttribute('data-county-value'),
            districtValue: el.getAttribute('data-district-value'),
            hasZipcode: el.hasAttribute('data-has-zipcode'),
            hiddenZipcode: el.hasAttribute('data-hidden-zipcode'),
            disabled: el.hasAttribute('data-disabled'),
            standardWords: el.hasAttribute('data-standard-words')
        };

        // 限制只顯示哪些縣市、區域
        options.only = attrs.only ? attrs.only.replace(/\s/g, '').split(',') : null;

        // 排除哪些縣市、區域
        options.except = attrs.except ? attrs.except.replace(/\s/g, '').split(',') : null;

        // 預設的縣市選單值
        options.countyValue = attrs.countyValue;

        // 預設的區域選單值
        options.districtValue = attrs.districtValue;

        // 布林值選項
        options.hasZipcode = attrs.hasZipcode;
        options.hiddenZipcode = attrs.hiddenZipcode;
        options.disabled = attrs.disabled;
        options.standardWords = attrs.standardWords;

        return options;
    }

    /**
     * 初始化元件
     * @private
     */
    _init() {
        // 選擇資料來源 (zh/en)
        this.data = this.options.lang === LANG_EN ? enData : zhData;

        // 複製資料以避免修改原始資料
        this.data = {
            counties: [...this.data.counties],
            districts: this.data.districts.map(d => [[...d[0]], [...d[1]]])
        };

        // standardWords 是否使用正體字
        this._setStandardWords(this.options.standardWords);

        // 置入 elements
        this._setElements();

        // 監聽選單動作
        this._listenCountyChanged();
        this._listenDistrictChanged();

        // 設定預設選定的縣市
        this._setValue(this.options.countyValue, this.options.districtValue);

        return this;
    }

    /**
     * 取得 DOM 元素
     * @private
     * @param {string|HTMLElement|null} el - 元素或選擇器
     * @param {HTMLElement} [parent] - 父元素
     * @returns {HTMLElement|null}
     */
    _getElement(el, parent) {
        if (!el) return null;

        if (typeof el === 'string') {
            return parent ? parent.querySelector(el) : document.querySelector(el);
        }

        return el;
    }

    /**
     * 設定元素和屬性
     * @private
     */
    _setElements() {
        const fragment = document.createDocumentFragment();

        // 縣市選單
        if (!this.elCounty) {
            this.elCounty = document.createElement('select');
            fragment.appendChild(this.elCounty);
        }
        this._setElementAttributes(this.elCounty, {
            className: this.options.countyClassName,
            name: this.options.countyFieldName,
            disabled: this.options.disabled
        });
        this._setCountyOptions();

        // 區域選單
        if (!this.elDistrict) {
            this.elDistrict = document.createElement('select');
            fragment.appendChild(this.elDistrict);
        }
        this._setElementAttributes(this.elDistrict, {
            className: this.options.districtClassName,
            name: this.options.districtFieldName,
            disabled: this.options.disabled
        });
        this._setDistrictOptions();

        // 郵遞區號
        if (!this.elZipcode && this.options.hasZipcode) {
            this.elZipcode = document.createElement('input');
            fragment.appendChild(this.elZipcode);

            this.elZipcode.type = this.options.hiddenZipcode ? 'hidden' : 'text';
            this.elZipcode.readOnly = true;
            this.elZipcode.size = 3;
            this.elZipcode.autocomplete = 'off';
            this.elZipcode.placeholder = this.options.lang === LANG_EN ? 'ZIP code' : '郵遞區號';

            this._setElementAttributes(this.elZipcode, {
                className: this.options.zipcodeClassName,
                name: this.options.zipcodeFieldName,
                disabled: this.options.disabled
            });
        }

        // element 片段置入 el
        if (fragment.hasChildNodes()) {
            this.el.appendChild(fragment);
        }
    }

    /**
     * 設定元素屬性
     * @private
     * @param {HTMLElement} element - DOM 元素
     * @param {Object} attrs - 屬性物件
     */
    _setElementAttributes(element, attrs) {
        if (attrs.className) {
            element.classList.add(attrs.className);
        }
        if (attrs.name) {
            element.name = attrs.name;
        }
        if (attrs.disabled) {
            element.setAttribute('disabled', true);
        }
    }

    /**
     * 設定縣市選項
     * @private
     */
    _setCountyOptions() {
        if (!this.elCounty) return;

        const select = this.elCounty;
        const isEnglish = this.options.lang === LANG_EN;

        select.options.add(new Option(
            isEnglish ? 'Select County/City' : '選擇縣市',
            ''
        ));

        const onlyItems = this._getCountyOnlyItems();
        const exceptItems = this._getCountyExceptItems();

        this.data.counties.forEach((county, index) => {
            // 若有設定「限制顯示」的縣市，且該項目不在自訂縣市中，則不顯示
            if (onlyItems && !onlyItems.includes(county)) return;

            // 若有設定「排除顯示」的縣市，且該項目在自訂縣市中，則不顯示
            if (exceptItems && exceptItems.includes(county)) return;

            // format: <option value="臺北市" data-index="0">臺北市</option>
            const option = new Option(county, county);
            option.dataset.index = index;
            select.options.add(option);
        });

        return true;
    }

    /**
     * 設定區域選項
     * @private
     * @param {number|string|null} index - 縣市索引
     */
    _setDistrictOptions(index = null) {
        if (!this.elDistrict) return;

        const select = this.elDistrict;
        const isEnglish = this.options.lang === LANG_EN;

        // 清空原有選項
        select.replaceChildren();

        select.options.add(new Option(
            isEnglish ? 'Select District' : '選擇區域',
            ''
        ));

        if (!index) return true;

        const onlyItems = this._getDistrictOnlyItems(this.elCounty.value);
        const exceptItems = this._getDistrictExceptItems(this.elCounty.value);
        const districts = this.data.districts[index][0];
        const zipcodes = this.data.districts[index][1];

        districts.forEach((district, i) => {
            // 若有設定「限制顯示」的區域，且該項目不在自訂區域中，則不顯示
            if (onlyItems && !onlyItems.includes(district)) return;

            // 若有設定「排除顯示」的區域，且該項目在自訂區域中，則不顯示
            if (exceptItems && exceptItems.includes(district)) return;

            // format: <option value="中正區" data-zipcode="100">中正區</option>
            const option = new Option(district, district);
            option.dataset.zipcode = zipcodes[i];
            select.options.add(option);
        });

        return true;
    }

    // ------------------------------
    // Private Methods - Filters
    // ------------------------------

    /**
     * 標準化過濾項目為陣列
     * @private
     * @param {string|Array|null} items - 過濾項目
     * @returns {Array|null}
     */
    _normalizeFilterItems(items) {
        if (!items) return null;
        if (typeof items === 'string') return [items];
        if (Array.isArray(items)) return items;
        return null;
    }

    /**
     * 從項目中提取縣市名稱
     * @private
     * @param {string} item - 項目字串（可能包含 @ 分隔符）
     * @returns {string}
     */
    _extractCountyFromItem(item) {
        const index = item.indexOf(SEPARATOR_COUNTY_DISTRICT);
        return index === -1 ? item : item.substring(0, index);
    }

    /**
     * 從項目中提取區域清單
     * @private
     * @param {string} item - 項目字串
     * @param {string} countyValue - 縣市名稱
     * @returns {Array|null}
     */
    _extractDistrictsFromItem(item, countyValue) {
        if (!item.includes(countyValue)) return null;

        const index = item.lastIndexOf(SEPARATOR_COUNTY_DISTRICT);
        if (index === -1) return null;

        return item.substring(index + 1).split(SEPARATOR_DISTRICTS);
    }

    /**
     * 取得限制顯示的縣市清單
     * @private
     * @returns {Array|null}
     */
    _getCountyOnlyItems() {
        const items = this._normalizeFilterItems(this.options.only);
        if (!items) return null;
        if (typeof this.options.only === 'string') return this.options.only;

        return items.map(item => this._extractCountyFromItem(item));
    }

    /**
     * 取得排除顯示的縣市清單
     * @private
     * @returns {Array|null}
     */
    _getCountyExceptItems() {
        const items = this._normalizeFilterItems(this.options.except);
        if (!items) return null;
        if (typeof this.options.except === 'string') return this.options.except;

        // 只排除區域則不列入回傳
        return items.filter(item => !item.includes(SEPARATOR_COUNTY_DISTRICT));
    }

    /**
     * 取得限制顯示的區域清單
     * @private
     * @param {string} countyValue - 縣市名稱
     * @returns {Array|null}
     */
    _getDistrictOnlyItems(countyValue) {
        const items = this._normalizeFilterItems(this.options.only);
        if (!items) return null;

        for (const item of items) {
            const districts = this._extractDistrictsFromItem(item, countyValue);
            if (districts) return districts;
        }

        return null;
    }

    /**
     * 取得排除顯示的區域清單
     * @private
     * @param {string} countyValue - 縣市名稱
     * @returns {Array|null}
     */
    _getDistrictExceptItems(countyValue) {
        const items = this._normalizeFilterItems(this.options.except);
        if (!items) return null;

        for (const item of items) {
            const districts = this._extractDistrictsFromItem(item, countyValue);
            if (districts) return districts;
        }

        return null;
    }

    // ------------------------------
    // Private Methods - Event Listeners
    // ------------------------------

    /**
     * 監聽縣市選單變更
     * @private
     */
    _listenCountyChanged() {
        if (!this.elCounty) return;

        const handler = () => {
            const selectedOption = this.elCounty.querySelector('option:checked');

            // 空值檢查
            if (!selectedOption) return;

            // index 不使用 xx.selectedIndex 是因若有設限縣市選單時順序會錯
            const index = selectedOption.getAttribute('data-index');
            this._setDistrictOptions(index);

            if (this.options.hasZipcode && this.elZipcode) {
                this.elZipcode.value = '';
            }
        };

        // 使用 onchange 而非 addEventListener 以支援 jQuery trigger
        this.elCounty.onchange = handler;
    }

    /**
     * 監聽區域選單變更
     * @private
     */
    _listenDistrictChanged() {
        if (!this.elDistrict) return;

        const handler = () => {
            const selectedOption = this.elDistrict.querySelector('option:checked');

            // 空值檢查
            if (!selectedOption) return;

            const zipcode = selectedOption.dataset.zipcode || '';

            if ((this.options.hasZipcode || this.elZipcode) && this.elZipcode) {
                this.elZipcode.value = zipcode;
            }
        };

        // 使用 onchange 而非 addEventListener 以支援 jQuery trigger
        this.elDistrict.onchange = handler;
    }

    // ------------------------------
    // Private Methods - Utilities
    // ------------------------------

    /**
     * 設定縣市和區域的值
     * @private
     * @param {string|null} county - 縣市名稱
     * @param {string|null} district - 區域名稱
     */
    _setValue(county = null, district = null) {
        if (!this.elCounty || !this.elDistrict) return;

        const event = this._createEvent('change');

        if (county) {
            this.elCounty.value = county;
            this.elCounty.dispatchEvent(event);
        }

        if (district) {
            this.elDistrict.value = district;
            this.elDistrict.dispatchEvent(event);
        }
    }

    /**
     * 重置選單
     * @private
     */
    _reset() {
        if (!this.elCounty) return;

        this.elCounty.selectedIndex = 0;
        this._setDistrictOptions();

        if (this.options.hasZipcode && this.elZipcode) {
            this.elZipcode.value = '';
        }

        return this;
    }

    /**
     * 設定使用正體字或異體字
     * @private
     * @param {boolean} standard - 是否使用正體字「臺」
     */
    _setStandardWords(standard = false) {
        const from = standard ? '台' : '臺';
        const to = standard ? '臺' : '台';

        this.data.counties = this.data.counties.map(county =>
            county.includes(from) ? county.replace(from, to) : county
        );

        this.data.districts.forEach((current, i) => {
            this.data.districts[i][0] = current[0].map(district =>
                district.includes(from) ? district.replace(from, to) : district
            );
        });
    }

    /**
     * 建立事件物件
     * @private
     * @param {string} eventName - 事件名稱
     * @returns {Event}
     */
    _createEvent(eventName) {
        if (typeof Event === 'function') {
            return new Event(eventName, {
                bubbles: true,
                cancelable: false
            });
        }

        // Old IE 相容
        const event = document.createEvent('Event');
        event.initEvent(eventName, true, false);
        return event;
    }
}

// ------------------------------
// Polyfill for legacy browsers (IE11)
// ------------------------------
// 注意：IE11 已於 2022 年停止支援
// 如果您的專案不需要支援 IE11，可以移除以下 polyfill
// 或將其移至單獨的 polyfill 檔案中按需載入

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }

        if (start === undefined) {
            start = 0;
        }

        return this.indexOf(search, start) !== -1;
    };
}
