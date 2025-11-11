'use strict';

// ------------------------------
// Module import
// ------------------------------
import zhData from './data-zh';
import enData from './data-en';
import HandleOptions from './handle-options';
import installPolyfills from './polyfills';

// ------------------------------
// Constants
// ------------------------------
const VERSION = '3.0.0';
const ROLE_ATTR_NAME = 'tw-city-selector'; // 用於自動初始化的 role attribute 名稱
const LANG_ZH = 'zh-tw'; // 中文語言
const LANG_EN = 'en-us'; // 英文語言
const SEPARATOR_COUNTY_DISTRICT = '@'; // 分隔縣市與區域用
const SEPARATOR_DISTRICTS = '|'; // 分隔多個區域用

// 自訂事件名稱
const EVENT_CHANGE_COUNTY = 'change:county';
const EVENT_CHANGE_DISTRICT = 'change:district';
const EVENT_CHANGE_ZIPCODE = 'change:zipcode';

// ------------------------------
// Module export
// ------------------------------
export default class TwCitySelector {
  // ------------------------------
  // Constructor
  // ------------------------------
  constructor(options = {}) {

    // 元件參數預設值
    const optionsDefault = {
      // 作用目標 elements
      el: null, // {string | HTMLElement}
      elCounty: null, // {string | HTMLElement}
      elDistrict: null, // {string | HTMLElement}
      elZipcode: null, // {string | HTMLElement}

      // 選單設定
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

      // 語言設定
      lang: LANG_ZH, // {string} 語言代碼，支援 'zh-tw' 及 'en-us'

      // 其他設定
      standardWords: false // {boolean} 使用「臺」的正體字，而非異體字「台」
    };

    // 合併元件的預設參數與傳入參數
    const optionsRequired = options.length ? ['el'] : []; // 若有傳入 options，el 為必要參數
    this.options = new HandleOptions(options, optionsRequired, optionsDefault);

    // 使用 MutationObserver 或 setTimeout 來處理 DOM 準備就緒
    this.#initWhenReady();
  } // end constructor

  // ------------------------------
  // Public Methods
  // ------------------------------

  /**
   * 取得版本號並輸出到控制台
   * @public
   * @return {TwCitySelector} 返回實例以支援鏈式調用
   * @example
   * const selector = new TwCitySelector({ el: '#city-selector' });
   * selector.getVersion(); // 輸出: "Your tw-city-selector.js is v2.1.2"
   */
  getVersion() {
    console.log(`Your tw-city-selector.js is v${VERSION}`);
    return this;
  }

  /**
   * 設定縣市和區域的值
   * @public
   * @param {string|null} county - 縣市名稱（例如：'台北市'）
   * @param {string|null} district - 區域名稱（例如：'中正區'）
   * @return {TwCitySelector} 返回實例以支援鏈式調用
   * @example
   * selector.setValue('台北市', '中正區');
   */
  setValue(county = null, district = null) {
    this.#setValue(county, district);
    return this;
  }

  /**
   * 取得當前選擇的縣市和區域
   * @public
   * @return {{county: string, district: string, zipcode: string}} 包含縣市、區域和郵遞區號的物件
   * @example
   * const values = selector.getValue();
   * console.log(values); // { county: '台北市', district: '中正區', zipcode: '100' }
   */
  getValue() {
    if (! this.elCounty || ! this.elDistrict) {
      return { county: '', district: '', zipcode: '' };
    }

    return {
      county: this.elCounty.value || '',
      district: this.elDistrict.value || '',
      zipcode: this.elZipcode ? this.elZipcode.value || '' : ''
    };
  }

  /**
   * 取得當前的郵遞區號
   * @public
   * @return {string} 郵遞區號（例如：'100'）
   * @example
   * const zipcode = selector.getZipcode();
   * console.log(zipcode); // '100'
   */
  getZipcode() {
    if (! this.elZipcode) return '';
    return this.elZipcode.value || '';
  }

  /**
   * 重置選單到初始狀態
   * @public
   * @return {TwCitySelector} 返回實例以支援鏈式調用
   * @example
   * selector.reset();
   */
  reset() {
    this.#reset();
    return this;
  }

  /**
   * 停用選單（input 設為 disabled）
   * @public
   * @return {TwCitySelector} 返回實例以支援鏈式調用
   * @example
   * selector.disable();
   */
  disable() {
    [this.elCounty, this.elDistrict, this.elZipcode].forEach(el => {
      if (el) el.disabled = true;
    });
    return this;
  }

  /**
   * 啟用選單（移除 disabled）
   * @public
   * @return {TwCitySelector} 返回實例以支援鏈式調用
   * @example
   * selector.enable();
   */
  enable() {
    [this.elCounty, this.elDistrict, this.elZipcode].forEach(el => {
      if (el) el.disabled = false;
    });
    return this;
  }

  /**
   * 驗證當前選擇是否有效
   * @public
   * @return {{valid: boolean, errors: string[]}} 驗證結果物件
   * @example
   * const result = selector.validate();
   * if (!result.valid) {
   *   console.error('驗證失敗:', result.errors);
   * }
   */
  validate() {
    const errors = [];
    const values = this.getValue();

    if (! values.county) {
      errors.push('請選擇縣市');
    }

    if (!values.district) {
      errors.push('請選擇區域');
    }

    if (this.options.hasZipcode && ! values.zipcode) {
      errors.push('郵遞區號為空');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * 清理事件監聽器並移除元素（用於元件銷毀）
   * @public
   * @return {void}
   * @example
   * selector.destroy();
   */
  destroy() {
    // 移除事件監聽器
    if (this.elCounty) {
      this.elCounty.onchange = null;
    }
    if (this.elDistrict) {
      this.elDistrict.onchange = null;
    }

    // 清空參照
    this.el = null;
    this.elCounty = null;
    this.elDistrict = null;
    this.elZipcode = null;
    this.data = null;
  }

  // ------------------------------
  // Private Methods
  // ------------------------------
  /**
   * 使用 MutationObserver 或 setTimeout 初始化
   * @private
   */
  #initWhenReady() {
    // 使用 MutationObserver 監聽 DOM 準備就緒（現代瀏覽器）
    if (typeof MutationObserver !== 'undefined' && this.options.el) {
      // 如果 el 是字串，等待元素出現
      if (typeof this.options.el === 'string') {
        this.#waitForElement(this.options.el).then(() => {
          this.#createElements();
        });
      } else {
        // 如果 el 已經是 HTMLElement，直接初始化
        setTimeout(() => this.#createElements(), 0);
      }
    } else {
      // 降級方案：使用 setTimeout
      setTimeout(() => this.#createElements(), 0);
    }
  }

  /**
   * 等待元素出現在 DOM 中
   * @private
   * @param {string} selector - CSS 選擇器
   * @return {Promise<HTMLElement>}
   */
  #waitForElement(selector) {
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
  #createElements() {
    // 有指定 elements 的初始化
    if (this.options.el) {
      this.el = this.#getElement(this.options.el);

      if (!this.el) {
        console.warn(`TwCitySelector: Element not found for selector "${this.options.el}"`);
        return;
      }

      this.elCounty = this.#getElement(this.options.elCounty, this.el);
      this.elDistrict = this.#getElement(this.options.elDistrict, this.el);
      this.elZipcode = this.#getElement(this.options.elZipcode, this.el);

      // 預設值，抓該 element 的 data-value
      if (this.elCounty && this.elCounty.dataset.value) {
        this.options.countyValue = this.elCounty.dataset.value;
        this.options.districtValue = this.elDistrict?.dataset.value || null;
      }

      return this.#init();
    }

    // 無指定 elements 的初始化，使用具有 role-attribute 的 elements 作為作用目標
    const els = document.querySelectorAll(`[role="${ROLE_ATTR_NAME}"]`);

    Array.from(els).forEach((el) => {
      // 建立新實例而非使用深度複製
      const instanceOptions = this.#getDataAttrOptions(el);
      const instance = Object.create(Object.getPrototypeOf(this));

      // 初始化新實例
      instance.VERSION = VERSION;
      instance.ROLE_ATTR_NAME = ROLE_ATTR_NAME;
      instance.options = instanceOptions;
      instance.el = el;
      instance.elCounty = null;
      instance.elDistrict = null;
      instance.elZipcode = null;

      instance.#init();
    });
  }

  /**
   * 從 data attributes 取得選項
   * @private
   * @param {HTMLElement} el - DOM 元素
   * @return {Object} 選項物件
   */
  #getDataAttrOptions(el) {
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
  #init() {
    // 選擇資料來源 (zh/en)
    this.data = this.options.lang === LANG_EN ? enData : zhData;

    // 複製資料以避免修改原始資料
    this.data = {
      counties: [...this.data.counties],
      districts: this.data.districts.map(d => [[...d[0]], [...d[1]]])
    };

    // standardWords 是否使用正體字
    this.#setStandardWords(this.options.standardWords);

    // 置入 elements
    this.#setElements();

    // 監聽選單動作
    this.#listenCountyChanged();
    this.#listenDistrictChanged();

    // 設定預設選定的縣市
    this.#setValue(this.options.countyValue, this.options.districtValue);

    return this;
  }

  /**
   * 取得 DOM 元素
   * @private
   * @param {string|HTMLElement|null} el - 元素或選擇器
   * @param {HTMLElement} [parent] - 父元素
   * @return {HTMLElement|null}
   */
  #getElement(el, parent) {
    if (! el) return null;

    if (typeof el === 'string') {
      return parent ? parent.querySelector(el) : document.querySelector(el);
    }

    return el;
  }

  /**
   * 設定元素和屬性
   * @private
   */
  #setElements() {
    const fragment = document.createDocumentFragment();

    // 縣市選單
    if (! this.elCounty) {
      this.elCounty = document.createElement('select');
      fragment.appendChild(this.elCounty);
    }

    this.#setElementAttributes(this.elCounty, {
      className: this.options.countyClassName,
      name: this.options.countyFieldName,
      disabled: this.options.disabled
    });

    this.#setCountyOptions();

    // 區域選單
    if (! this.elDistrict) {
      this.elDistrict = document.createElement('select');
      fragment.appendChild(this.elDistrict);
    }

    this.#setElementAttributes(this.elDistrict, {
      className: this.options.districtClassName,
      name: this.options.districtFieldName,
      disabled: this.options.disabled
    });

    this.#setDistrictOptions();

    // 郵遞區號
    if (! this.elZipcode && this.options.hasZipcode) {
      this.elZipcode = document.createElement('input');
      fragment.appendChild(this.elZipcode);

      this.elZipcode.type = this.options.hiddenZipcode ? 'hidden' : 'text';
      this.elZipcode.readOnly = true;
      this.elZipcode.size = 3;
      this.elZipcode.autocomplete = 'off';
      this.elZipcode.placeholder = this.options.lang === LANG_EN ? 'ZIP code' : '郵遞區號';

      this.#setElementAttributes(this.elZipcode, {
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
  #setElementAttributes(element, attrs) {
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
  #setCountyOptions() {
    if (! this.elCounty) return;

    const select = this.elCounty;
    const isEnglish = this.options.lang === LANG_EN;

    select.options.add(new Option(
      isEnglish ? 'Select County/City' : '選擇縣市',
      ''
    ));

    const onlyItems = this.#getCountyOnlyItems();
    const exceptItems = this.#getCountyExceptItems();

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
  #setDistrictOptions(index = null) {
    if (! this.elDistrict) return;

    const select = this.elDistrict;
    const isEnglish = this.options.lang === LANG_EN;

    // 清空原有選項
    select.replaceChildren();

    select.options.add(new Option(
      isEnglish ? 'Select District' : '選擇區域',
      ''
    ));

    if (! index) return true;

    const onlyItems = this.#getDistrictOnlyItems(this.elCounty.value);
    const exceptItems = this.#getDistrictExceptItems(this.elCounty.value);
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
   * @return {Array|null}
   */
  #normalizeFilterItems(items) {
    if (! items) return null;
    if (typeof items === 'string') return [items];
    if (Array.isArray(items)) return items;
    return null;
  }

  /**
   * 從項目中提取縣市名稱
   * @private
   * @param {string} item - 項目字串（可能包含 @ 分隔符）
   * @return {string}
   */
  #extractCountyFromItem(item) {
    const index = item.indexOf(SEPARATOR_COUNTY_DISTRICT);
    return index === -1 ? item : item.substring(0, index);
  }

  /**
   * 從項目中提取區域清單
   * @private
   * @param {string} item - 項目字串
   * @param {string} countyValue - 縣市名稱
   * @return {Array|null}
   */
  #extractDistrictsFromItem(item, countyValue) {
    if (! item.includes(countyValue)) return null;

    const index = item.lastIndexOf(SEPARATOR_COUNTY_DISTRICT);
    if (index === -1) return null;

    return item.substring(index + 1).split(SEPARATOR_DISTRICTS);
  }

  /**
   * 取得限制顯示的縣市清單
   * @private
   * @return {Array|null}
   */
  #getCountyOnlyItems() {
    const items = this.#normalizeFilterItems(this.options.only);
    if (! items) return null;
    if (typeof this.options.only === 'string') return this.options.only;

    return items.map(item => this.#extractCountyFromItem(item));
  }

  /**
   * 取得排除顯示的縣市清單
   * @private
   * @return {Array|null}
   */
  #getCountyExceptItems() {
    const items = this.#normalizeFilterItems(this.options.except);
    if (! items) return null;
    if (typeof this.options.except === 'string') return this.options.except;

    // 只排除區域則不列入回傳
    return items.filter(item => !item.includes(SEPARATOR_COUNTY_DISTRICT));
  }

  /**
   * 取得限制顯示的區域清單
   * @private
   * @param {string} countyValue - 縣市名稱
   * @return {Array|null}
   */
  #getDistrictOnlyItems(countyValue) {
    const items = this.#normalizeFilterItems(this.options.only);
    if (! items) return null;

    for (const item of items) {
      const districts = this.#extractDistrictsFromItem(item, countyValue);
      if (districts) return districts;
    }

    return null;
  }

  /**
   * 取得排除顯示的區域清單
   * @private
   * @param {string} countyValue - 縣市名稱
   * @return {Array|null}
   */
  #getDistrictExceptItems(countyValue) {
    const items = this.#normalizeFilterItems(this.options.except);
    if (! items) return null;

    for (const item of items) {
      const districts = this.#extractDistrictsFromItem(item, countyValue);
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
  #listenCountyChanged() {
    if (! this.elCounty) return;

    // 使用 onchange 而非 addEventListener 以支援 jQuery trigger
    this.elCounty.onchange = () => {
      const selectedOption = this.elCounty.querySelector('option:checked');

      // 空值檢查
      if (! selectedOption) return;

      // index 不使用 xx.selectedIndex 是因若有設限縣市選單時順序會錯
      const index = selectedOption.getAttribute('data-index');
      this.#setDistrictOptions(index);

      if (this.options.hasZipcode && this.elZipcode) {
        this.elZipcode.value = '';
        // 觸發郵遞區號變更事件
        this.#dispatchCustomEvent(EVENT_CHANGE_ZIPCODE, {zipcode: ''});
      }

      // 觸發縣市變更事件
      this.#dispatchCustomEvent(EVENT_CHANGE_COUNTY, {
        county: this.elCounty.value
      });
    };
  }

  /**
   * 監聽區域選單變更
   * @private
   */
  #listenDistrictChanged() {
    if (! this.elDistrict) return;

    // 使用 onchange 而非 addEventListener 以支援 jQuery trigger
    this.elDistrict.onchange = () => {
      const selectedOption = this.elDistrict.querySelector('option:checked');

      // 空值檢查
      if (! selectedOption) return;

      const zipcode = selectedOption.dataset.zipcode || '';

      if ((this.options.hasZipcode || this.elZipcode) && this.elZipcode) {
        this.elZipcode.value = zipcode;
        // 觸發郵遞區號變更事件
        this.#dispatchCustomEvent(EVENT_CHANGE_ZIPCODE, {zipcode});
      }

      // 觸發區域變更事件
      this.#dispatchCustomEvent(EVENT_CHANGE_DISTRICT, {
        county: this.elCounty.value,
        district: this.elDistrict.value,
        zipcode
      });
    };
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
  #setValue(county = null, district = null) {
      if (! this.elCounty || !this.elDistrict) return;

      const event = this.#createEvent('change');

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
  #reset() {
    if (! this.elCounty) return;

    this.elCounty.selectedIndex = 0;
    this.#setDistrictOptions();

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
  #setStandardWords(standard = false) {
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
   * @return {Event}
   */
  #createEvent(eventName) {
    if (typeof Event === 'function') {
      // 現代瀏覽器相容
      return new Event(eventName, {
        bubbles: true,
        cancelable: false
      });
    }

    // IE 11 相容
    const event = document.createEvent('Event');
    event.initEvent(eventName, true, false);
    return event;
  }

  /**
   * 觸發自訂事件
   * @private
   * @param {string} eventName - 事件名稱
   * @param {Object} detail - 事件詳細資料
   */
  #dispatchCustomEvent(eventName, detail = {}) {
    if (! this.el) return;

    let event;

    if (typeof CustomEvent === 'function') {
      // 現代瀏覽器相容
      event = new CustomEvent(eventName, {
        detail,
        bubbles: true,
        cancelable: false
      });
    } else {
      // IE 11 相容
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, false, detail);
    }

    this.el.dispatchEvent(event);
  }
}

// ------------------------------
// 支援 IE 11 等舊版瀏覽器
// ------------------------------
if (! String.prototype.includes) {
  installPolyfills();
}
