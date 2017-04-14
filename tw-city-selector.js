(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.TwCitySelector = factory());
}(this, (function () { 'use strict';

var data$1 = {
    // 縣市
    country: ['臺北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '臺南市', '高雄市', '澎湖縣', '金門縣', '屏東縣', '臺東縣', '花蓮縣', '連江縣'],

    // 區域
    district: [
    // 臺北市
    [['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'], ['100', '103', '104', '105', '106', '108', '110', '111', '112', '114', '115', '116']],
    // 基隆市
    [['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'], ['200', '201', '202', '203', '204', '205', '206']],
    // 新北市
    [['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水區', '三芝區', '石門區'], ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228', '231', '232', '233', '234', '235', '236', '237', '238', '239', '241', '242', '243', '244', '247', '248', '249', '251', '252', '253']],
    // 宜蘭縣
    [['宜蘭市', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '羅東鎮', '三星鄉', '大同鄉', '五結鄉', '冬山鄉', '蘇澳鎮', '南澳鄉', '釣魚臺'], ['260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '272', '290']],
    // 桃園市
    [['中壢區', '平鎮區', '龍潭區', '楊梅區', '新屋區', '觀音區', '桃園區', '龜山區', '八德區', '大溪區', '復興區', '大園區', '蘆竹區'], ['320', '324', '325', '326', '327', '328', '330', '333', '334', '335', '336', '337', '338']],
    // 新竹市
    [['東區', '北區', '香山區'], ['300', '300', '300']],
    // 新竹縣
    [['竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'], ['302', '303', '304', '305', '306', '307', '308', '310', '311', '312', '313', '314', '315']],
    // 苗栗縣
    [['竹南鎮', '頭份市', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮', '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉', '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'], ['350', '351', '352', '353', '354', '356', '357', '358', '360', '361', '362', '363', '364', '365', '366', '367', '368', '369']],
    // 臺中市
    [['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'], ['400', '401', '402', '403', '404', '406', '407', '408', '411', '412', '413', '414', '420', '421', '422', '423', '424', '426', '427', '428', '429', '432', '433', '434', '435', '436', '437', '438', '439']],
    // 彰化縣
    [['彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '鹿港鎮', '福興鄉', '線西鄉', '和美鎮', '伸港鄉', '員林市', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉', '埔鹽鄉', '田中鎮', '北斗鎮', '田尾鄉', '埤頭鄉', '溪州鄉', '竹塘鄉', '二林鎮', '大城鄉', '芳苑鄉', '二水鄉'], ['500', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '520', '521', '522', '523', '524', '525', '526', '527', '528', '530']],
    // 南投縣
    [['南投市', '中寮鄉', '草屯鎮', '國姓鄉', '埔里鎮', '仁愛鄉', '名間鄉', '集集鎮', '水里鄉', '魚池鄉', '信義鄉', '竹山鎮', '鹿谷鄉'], ['540', '541', '542', '544', '545', '546', '551', '552', '553', '555', '556', '557', '558']],
    // 嘉義市
    [['東區', '西區'], ['600', '600']],
    // 嘉義縣
    [['番路鄉', '梅山鄉', '竹崎鄉', '阿里山', '中埔鄉', '大埔鄉', '水上鄉', '鹿草鄉', '太保市', '朴子市', '東石鄉', '六腳鄉', '新港鄉', '民雄鄉', '大林鎮', '溪口鄉', '義竹鄉', '布袋鎮'], ['602', '603', '604', '605', '606', '607', '608', '611', '612', '613', '614', '615', '616', '621', '622', '623', '624', '625']],
    // 雲林縣
    [['斗南鎮', '大埤鄉', '虎尾鎮', '土庫鎮', '褒忠鄉', '東勢鄉', '臺西鄉', '崙背鄉', '麥寮鄉', '斗六市', '林內鄉', '古坑鄉', '莿桐鄉', '西螺鎮', '二崙鄉', '北港鎮', '水林鄉', '口湖鄉', '四湖鄉', '元長鄉'], ['630', '631', '632', '633', '634', '635', '636', '637', '638', '640', '643', '646', '647', '648', '649', '651', '652', '653', '654', '655']],
    // 臺南市
    [['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'], ['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741', '742', '743', '744', '745']],
    // 高雄市
    [['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區', '大社區', '東沙群島', '南沙群島', '岡山區', '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區', '湖內區', '鳳山市', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區', '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'], ['800', '801', '802', '803', '804', '805', '806', '807', '811', '812', '813', '814', '815', '817', '819', '820', '821', '822', '823', '824', '825', '826', '827', '828', '829', '830', '831', '832', '833', '840', '842', '843', '844', '845', '846', '847', '848', '849', '851', '852']],
    // 澎湖縣
    [['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'], ['880', '881', '882', '883', '884', '885']],
    // 金門縣
    [['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'], ['890', '891', '892', '893', '894', '896']],
    // 屏東縣
    [['屏東市', '三地門鄉', '霧臺鄉', '瑪家鄉', '九如鄉', '里港鄉', '高樹鄉', '鹽埔鄉', '長治鄉', '麟洛鄉', '竹田鄉', '內埔鄉', '萬丹鄉', '潮州鎮', '泰武鄉', '來義鄉', '萬巒鄉', '崁頂鄉', '新埤鄉', '南州鄉', '林邊鄉', '東港鎮', '琉球鄉', '佳冬鄉', '新園鄉', '枋寮鄉', '枋山鄉', '春日鄉', '獅子鄉', '車城鄉', '牡丹鄉', '恆春鎮', '滿州鄉'], ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '911', '912', '913', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '931', '932', '940', '941', '942', '943', '944', '945', '946', '947']],
    // 臺東縣
    [['臺東市', '綠島鄉', '蘭嶼鄉', '延平鄉', '卑南鄉', '鹿野鄉', '關山鎮', '海端鄉', '池上鄉', '東河鄉', '成功鎮', '長濱鄉', '太麻里', '金峰鄉', '大武鄉', '達仁鄉'], ['950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '961', '962', '963', '964', '965', '966']],
    // 花蓮縣
    [['花蓮市', '新城鄉', '秀林鄉', '吉安鄉', '壽豐鄉', '鳳林鎮', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '玉里鎮', '卓溪鄉', '富里鄉'], ['970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '981', '982', '983']],
    // 連江縣
    [['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'], ['209', '210', '211', '212']]]
};

function handleOptions() {
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
    if (!optionsCustom.hasOwnProperty(optionsRequired[length])) error += optionsRequired[length] + ',';
  }

  if (error) throw '缺少參數: ' + error;
}

function getOptionsExtend(optionsCustom, optionsDefault) {
  if (!optionsCustom) {
    return optionsDefault;
  }

  var property;
  for (property in optionsCustom) {
    optionsDefault[property] = optionsCustom[property];
  }

  return optionsDefault;
}

// --------------------
// Module import
// --------------------

// module.exports = TwCitySelector; /* use browserify to build */


// --------------------
// Constructor
// --------------------
function TwCitySelector$1() {

  var tagRoleName = 'tw-city-selector';

  // --- Setting options ---
  var optionsCustom = arguments[0];
  var optionsRequired = arguments.length ? ['el'] : null; // 若無參數則不設必要參數
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

  // --- Setting properties ---
  this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);

  // 有指定 el 的初始化
  if (this.options.el) {
    this.el = getElements(this.options.el);
    this.elCountry = getElements(this.options.elCountry);
    this.elDistrict = getElements(this.options.elDistrict);
    this.elZipcode = getElements(this.options.elZipcode);
    init.call(this);
    return this;
  }

  // 無指定 el 的初始化，使用符合的 data-role DOM 作為 el
  var els = document.querySelectorAll('[role=' + tagRoleName + ']');
  els.forEach(function (el) {
    var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

    // 重置相關各 el 設定
    self.el = el;
    self.elCountry = null;
    self.elDistrict = null;
    self.elZipcode = null;

    // 限制顯示哪些縣市
    self.options.only = el.getAttribute('data-only') ? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
    : null;

    // 預設選擇的縣市
    self.options.selectedCountry = el.getAttribute('data-selected-country');

    // 預設選擇的區域
    self.options.selectedDistrict = el.getAttribute('data-selected-district');

    // 是否使用 bootstrap 樣式
    self.options.bootstrapStyle = el.getAttribute('data-bootstrap-style') != null;

    // 是否顯示郵遞區號
    self.options.showZipcode = el.getAttribute('data-show-zipcode') != null;

    init.call(self);
  }, this);

  return this;
}

// --------------------
// Public Methods
// --------------------
TwCitySelector$1.prototype.reset = function () {
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
  if (!el) return null;
  return document.querySelector(el);
}

function setElements() {
  // 縣市選單
  if (!this.elCountry) {
    var country = document.createElement('select');
    this.elCountry = country;
    this.el.appendChild(country);
  }

  // 縣市選單屬性
  this.elCountry.innerHTML = getCountryOptions(this.options.only);
  this.elCountry.setAttribute('class', this.options.countryClassName);

  // 區域選單
  if (!this.elDistrict) {
    var district = document.createElement('select');
    this.elDistrict = district;
    this.el.appendChild(district);
  }

  // 區域選單屬性
  this.elDistrict.innerHTML = getDistrictOptions();
  this.elDistrict.setAttribute('class', this.options.districtClassName);
  this.elDistrict.name = this.options.districtFieldName;

  // 郵遞區號
  if (!this.elZipcode) {
    var zipcode = document.createElement('input');
    this.elZipcode = zipcode;
    this.el.appendChild(zipcode);
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

  // bootstrap 樣式套入
  if (this.options.bootstrapStyle) {
    setBootstrapStyle.call(this);
  }
}

function getCountryOptions(only) {
  var options = '<option value="">選擇縣市</option>';

  for (var i = 0, j = data$1.country.length; i < j; i++) {
    // 若有設定限制顯示的縣市，且該項目不在自訂縣市中
    if (only && Array.isArray(only) && only.indexOf(data$1.country[i]) === -1) {
      continue;
    }

    // format: <option value="臺北市" data-index="0">臺北市</option>
    options += '<option value="' + data$1.country[i] + '" data-index="' + i + '">' + data$1.country[i] + '</option>';
  }

  return options;
}

function getDistrictOptions(index) {
  if (!index) {
    return '<option value="" selected>---</option>';
  }

  var options = '<option value="" selected>選擇區域</option>';

  for (var i = 0, j = data$1.district[index][0].length - 1; i <= j; i++) {
    // format: <option value="中正區" data-zipcode="100">中正區</option>
    options += '\n      <option value="' + data$1.district[index][0][i] + '" data-zipcode="' + data$1.district[index][1][i] + '">\n        ' + data$1.district[index][0][i] + '\n      </option>\n    ';
  }

  return options;
}

function setCountryChanged() {
  var handler = function () {
    var index = this.elCountry.querySelector('option:checked').getAttribute('data-index'); // 取 dada-index
    this.elDistrict.innerHTML = getDistrictOptions(index);
    this.elZipcode.value = '';
  }.bind(this);

  this.elCountry.addEventListener('change', handler);
}

function setDistrictChanged() {
  var handler = function () {
    var zipcode = this.elDistrict.querySelector('option:checked').getAttribute('data-zipcode'); // 取 dada-zipcode

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
  var _className = 'form-control';
  var _wrapperClassName = 'form-group';

  this.elCountry.setAttribute('class', _className);
  var countryWrapper = document.createElement('div');
  countryWrapper.setAttribute('class', _wrapperClassName);
  this.el.insertBefore(countryWrapper, this.el.childNodes[0]);
  countryWrapper.appendChild(this.elCountry);

  this.elDistrict.setAttribute('class', _className);
  var countryWrapper = document.createElement('div');
  countryWrapper.setAttribute('class', _wrapperClassName);
  this.el.insertBefore(countryWrapper, this.el.childNodes[1]);
  countryWrapper.appendChild(this.elDistrict);

  this.elZipcode.setAttribute('class', _className);
  var countryWrapper = document.createElement('div');
  countryWrapper.setAttribute('class', _wrapperClassName);
  this.el.insertBefore(countryWrapper, this.el.childNodes[2]);
  countryWrapper.appendChild(this.elZipcode);
}

return TwCitySelector$1;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCIvVXNlcnMvZGVubnkvRHJvcGJveC8wMS3ntrLnq5nlsIjmoYgvZGstcGx1Z2lucy90dy1jaXR5LXNlbGVjdG9yL3NyYy9oYW5kbGVPcHRpb25zLmpzIiwiL1VzZXJzL2Rlbm55L0Ryb3Bib3gvMDEt57ay56uZ5bCI5qGIL2RrLXBsdWdpbnMvdHctY2l0eS1zZWxlY3Rvci9zcmMvdHctY2l0eS1zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBkYXRhO1xuXG52YXIgZGF0YSA9IHtcbiAgICAvLyDnuKPluIJcbiAgICBjb3VudHJ5OiBbXG4gICAgICAgICfoh7rljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOerueW4gicsICfmlrDnq7nnuKMnLCAn6IuX5qCX57ijJyxcbiAgICAgICAgJ+iHuuS4reW4gicsICflvbDljJbnuKMnLCAn5Y2X5oqV57ijJywgJ+WYiee+qeW4gicsICflmInnvqnnuKMnLCAn6Zuy5p6X57ijJywgJ+iHuuWNl+W4gicsICfpq5jpm4TluIInLFxuICAgICAgICAn5r6O5rmW57ijJywgJ+mHkemWgOe4oycsICflsY/mnbHnuKMnLCAn6Ie65p2x57ijJywgJ+iKseiTrue4oycsICfpgKPmsZ/nuKMnXG4gICAgXSxcblxuICAgIC8vIOWNgOWfn1xuICAgIGRpc3RyaWN0OiBbXG4gICAgICAgIC8vIOiHuuWMl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S4reato+WNgCcsICflpKflkIzljYAnLCAn5Lit5bGx5Y2AJywgJ+advuWxseWNgCcsICflpKflronljYAnLCAn6JCs6I+v5Y2AJywgJ+S/oee+qeWNgCcsXG4gICAgICAgICAgICAn5aOr5p6X5Y2AJywgJ+WMl+aKleWNgCcsICflhafmuZbljYAnLCAn5Y2X5riv5Y2AJywgJ+aWh+WxseWNgCddLFxuXG4gICAgICAgICAgICBbJzEwMCcsICcxMDMnLCAnMTA0JywgJzEwNScsICcxMDYnLCAnMTA4JywgJzExMCcsICcxMTEnLCAnMTEyJywgJzExNCcsICcxMTUnLCAnMTE2J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5Z+66ZqG5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5LuB5oSb5Y2AJywgJ+S/oee+qeWNgCcsICfkuK3mraPljYAnLCAn5Lit5bGx5Y2AJywgJ+WuieaoguWNgCcsICfmmpbmmpbljYAnLCAn5LiD5aC15Y2AJ10sXG5cbiAgICAgICAgICAgIFsnMjAwJywgJzIwMScsICcyMDInLCAnMjAzJywgJzIwNCcsICcyMDUnLCAnMjA2J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw5YyX5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6JCs6YeM5Y2AJywgJ+mHkeWxseWNgCcsICfmnb/mqYvljYAnLCAn5rGQ5q2i5Y2AJywgJ+a3seWdkeWNgCcsICfnn7PnoofljYAnLCAn55Ge6Iqz5Y2AJywgJ+W5s+a6quWNgCcsXG4gICAgICAgICAgICAn6ZuZ5rqq5Y2AJywgJ+iyouWvruWNgCcsICfmlrDlupfljYAnLCAn5Z2q5p6X5Y2AJywgJ+eDj+S+huWNgCcsICfmsLjlkozljYAnLCAn5Lit5ZKM5Y2AJywgJ+Wcn+WfjuWNgCcsXG4gICAgICAgICAgICAn5LiJ5bO95Y2AJywgJ+aoueael+WNgCcsICfptq/mrYzljYAnLCAn5LiJ6YeN5Y2AJywgJ+aWsOiOiuWNgCcsICfms7DlsbHljYAnLCAn5p6X5Y+j5Y2AJywgJ+iYhua0suWNgCcsXG4gICAgICAgICAgICAn5LqU6IKh5Y2AJywgJ+WFq+mHjOWNgCcsICfmt6HmsLTljYAnLCAn5LiJ6Iqd5Y2AJywgJ+efs+mWgOWNgCddLFxuXG4gICAgICAgICAgICBbJzIwNycsICcyMDgnLCAnMjIwJywgJzIyMScsICcyMjInLCAnMjIzJywgJzIyNCcsICcyMjYnLCAnMjI3JywgJzIyOCcsXG4gICAgICAgICAgICAnMjMxJywgJzIzMicsICcyMzMnLCAnMjM0JywgJzIzNScsICcyMzYnLCAnMjM3JywgJzIzOCcsICcyMzknLCAnMjQxJyxcbiAgICAgICAgICAgICcyNDInLCAnMjQzJywgJzI0NCcsICcyNDcnLCAnMjQ4JywgJzI0OScsICcyNTEnLCAnMjUyJywgJzI1MyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWunOiYree4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+WunOiYreW4gicsICfpoK3ln47pjq4nLCAn56SB5rqq6YSJJywgJ+Wjr+WcjemEiScsICflk6HlsbHphIknLCAn576F5p2x6Y6uJywgJ+S4ieaYn+mEiScsICflpKflkIzphIknLFxuICAgICAgICAgICAgJ+S6lOe1kOmEiScsICflhqzlsbHphIknLCAn6JiH5r6z6Y6uJywgJ+WNl+a+s+mEiScsICfph6PprZroh7onXSxcblxuICAgICAgICAgICAgWycyNjAnLCAnMjYxJywgJzI2MicsICcyNjMnLCAnMjY0JywgJzI2NScsICcyNjYnLCAnMjY3JywgJzI2OCcsICcyNjknLFxuICAgICAgICAgICAgJzI3MCcsICcyNzInLCAnMjkwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5qGD5ZyS5biCXG4gICAgXHRbXG4gICAgXHRcdFsn5Lit5aOi5Y2AJywgJ+W5s+mOruWNgCcsICfpvo3mva3ljYAnLCAn5qWK5qKF5Y2AJywgJ+aWsOWxi+WNgCcsICfop4Dpn7PljYAnLCAn5qGD5ZyS5Y2AJywgJ+m+nOWxseWNgCcsXG4gICAgXHRcdCflhavlvrfljYAnLCAn5aSn5rqq5Y2AJywgJ+W+qeiIiOWNgCcsICflpKflnJLljYAnLCAn6JiG56u55Y2AJ10sXG5cbiAgICBcdFx0WyczMjAnLCAnMzI0JywgJzMyNScsICczMjYnLCAnMzI3JywgJzMyOCcsICczMzAnLCAnMzMzJywgJzMzNCcsICczMzUnLFxuICAgIFx0XHQnMzM2JywgJzMzNycsICczMzgnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDmlrDnq7nluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmnbHljYAnLCAn5YyX5Y2AJywgJ+mmmeWxseWNgCddLFxuXG4gICAgICAgICAgICBbJzMwMCcsICczMDAnLCAnMzAwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw56u557ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn56u55YyX5biCJywgJ+a5luWPo+mEiScsICfmlrDosZDphIknLCAn5paw5Z+U6Y6uJywgJ+mXnOilv+mOricsICfoio7mnpfphIknLCAn5a+25bGx6YSJJyxcbiAgICAgICAgICAgICfnq7nmnbHpjq4nLCAn5LqU5bOw6YSJJywgJ+apq+WxsemEiScsICflsJbnn7PphIknLCAn5YyX5Z+U6YSJJywgJ+WzqOeciemEiSddLFxuXG4gICAgICAgICAgICBbJzMwMicsICczMDMnLCAnMzA0JywgJzMwNScsICczMDYnLCAnMzA3JywgJzMwOCcsICczMTAnLCAnMzExJyxcbiAgICAgICAgICAgICczMTInLCAnMzEzJywgJzMxNCcsICczMTUnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoi5fmoJfnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfnq7nljZfpjq4nLCAn6aCt5Lu95biCJywgJ+S4ieeBo+mEiScsICfljZfluoTphIknLCAn542F5r2t6YSJJywgJ+W+jOm+jemOricsICfpgJrpnITpjq4nLCAn6IuR6KOh6Y6uJyxcbiAgICAgICAgICAgICfoi5fmoJfluIInLCAn6YCg5qmL6YSJJywgJ+mgreWxi+mEiScsICflhazppKjphIknLCAn5aSn5rmW6YSJJywgJ+azsOWuiemEiScsXG4gICAgICAgICAgICAn6YqF6ZG86YSJJywgJ+S4iee+qemEiScsICfopb/muZbphIknLCAn5Y2T6Jit6Y6uJ10sXG5cbiAgICAgICAgICAgIFsnMzUwJywgJzM1MScsICczNTInLCAnMzUzJywgJzM1NCcsICczNTYnLCAnMzU3JywgJzM1OCcsICczNjAnLCAnMzYxJyxcbiAgICAgICAgICAgICczNjInLCAnMzYzJywgJzM2NCcsICczNjUnLCAnMzY2JywgJzM2NycsICczNjgnLCAnMzY5J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6Ie65Lit5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit5Y2AJywgJ+adseWNgCcsICfljZfljYAnLCAn6KW/5Y2AJywgJ+WMl+WNgCcsICfljJflsa/ljYAnLCAn6KW/5bGv5Y2AJywgJ+WNl+Wxr+WNgCcsICflpKrlubPljYAnLFxuICAgICAgICAgICAgJ+Wkp+mHjOWNgCcsICfpnKfls7DljYAnLCAn54OP5pel5Y2AJywgJ+ixkOWOn+WNgCcsICflkI7ph4zljYAnLCAn55+z5bKh5Y2AJywgJ+adseWLouWNgCcsICflkozlubPljYAnLFxuICAgICAgICAgICAgJ+aWsOekvuWNgCcsICfmva3lrZDljYAnLCAn5aSn6ZuF5Y2AJywgJ+elnuWyoeWNgCcsICflpKfogprljYAnLCAn5rKZ6bm/5Y2AJywgJ+m+jeS6leWNgCcsICfmoqfmo7LljYAnLFxuICAgICAgICAgICAgJ+a4heawtOWNgCcsICflpKfnlLLljYAnLCAn5aSW5Z+U5Y2AJywgJ+Wkp+WuieWNgCddLFxuXG4gICAgICAgICAgICBbJzQwMCcsICc0MDEnLCAnNDAyJywgJzQwMycsICc0MDQnLCAnNDA2JywgJzQwNycsICc0MDgnLCAnNDExJywgJzQxMicsXG4gICAgICAgICAgICAnNDEzJywgJzQxNCcsICc0MjAnLCAnNDIxJywgJzQyMicsICc0MjMnLCAnNDI0JywgJzQyNicsICc0MjcnLCAnNDI4JyxcbiAgICAgICAgICAgICc0MjknLCAnNDMyJywgJzQzMycsICc0MzQnLCAnNDM1JywgJzQzNicsICc0MzcnLCAnNDM4JywgJzQzOSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOW9sOWMlue4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+W9sOWMluW4gicsICfoiqzlnJLphIknLCAn6Iqx5aOH6YSJJywgJ+engOawtOmEiScsICfpub/muK/pjq4nLCAn56aP6IiI6YSJJywgJ+e3muilv+mEiScsICflkoznvo7pjq4nLFxuICAgICAgICAgICAgJ+S8uOa4r+mEiScsICflk6HmnpfluIInLCAn56S+6aCt6YSJJywgJ+awuOmdlumEiScsICfln5Tlv4PphIknLCAn5rqq5rmW6Y6uJywgJ+Wkp+adkemEiScsICfln5Tpub3phIknLFxuICAgICAgICAgICAgJ+eUsOS4remOricsICfljJfmlpfpjq4nLCAn55Sw5bC+6YSJJywgJ+WfpOmgremEiScsICfmuqrlt57phIknLCAn56u55aGY6YSJJywgJ+S6jOael+mOricsICflpKfln47phIknLFxuICAgICAgICAgICAgJ+iKs+iLkemEiScsICfkuozmsLTphIknXSxcblxuICAgICAgICAgICAgWyc1MDAnLCAnNTAyJywgJzUwMycsICc1MDQnLCAnNTA1JywgJzUwNicsICc1MDcnLCAnNTA4JywgJzUwOScsICc1MTAnLFxuICAgICAgICAgICAgJzUxMScsICc1MTInLCAnNTEzJywgJzUxNCcsICc1MTUnLCAnNTE2JywgJzUyMCcsICc1MjEnLCAnNTIyJywgJzUyMycsXG4gICAgICAgICAgICAnNTI0JywgJzUyNScsICc1MjYnLCAnNTI3JywgJzUyOCcsICc1MzAnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDljZfmipXnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfljZfmipXluIInLCAn5Lit5a+u6YSJJywgJ+iNieWxr+mOricsICflnIvlp5PphIknLCAn5Z+U6YeM6Y6uJywgJ+S7geaEm+mEiScsICflkI3plpPphIknLCAn6ZuG6ZuG6Y6uJyxcbiAgICAgICAgICAgICfmsLTph4zphIknLCAn6a2a5rGg6YSJJywgJ+S/oee+qemEiScsICfnq7nlsbHpjq4nLCAn6bm/6LC36YSJJ10sXG5cbiAgICAgICAgICAgIFsnNTQwJywgJzU0MScsICc1NDInLCAnNTQ0JywgJzU0NScsICc1NDYnLCAnNTUxJywgJzU1MicsICc1NTMnLCAnNTU1JyxcbiAgICAgICAgICAgICc1NTYnLCAnNTU3JywgJzU1OCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWYiee+qeW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+adseWNgCcsICfopb/ljYAnXSxcblxuICAgICAgICAgICAgWyc2MDAnLCAnNjAwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5ZiJ576p57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn55Wq6Lev6YSJJywgJ+aiheWxsemEiScsICfnq7nltI7phIknLCAn6Zi/6YeM5bGxJywgJ+S4reWflOmEiScsICflpKfln5TphIknLCAn5rC05LiK6YSJJyxcbiAgICAgICAgICAgICfpub/ojYnphIknLCAn5aSq5L+d5biCJywgJ+actOWtkOW4gicsICfmnbHnn7PphIknLCAn5YWt6IWz6YSJJywgJ+aWsOa4r+mEiScsICfmsJHpm4TphIknLCAn5aSn5p6X6Y6uJyxcbiAgICAgICAgICAgICfmuqrlj6PphIknLCAn576p56u56YSJJywgJ+W4g+iii+mOriddLFxuXG4gICAgICAgICAgICBbJzYwMicsICc2MDMnLCAnNjA0JywgJzYwNScsICc2MDYnLCAnNjA3JywgJzYwOCcsICc2MTEnLCAnNjEyJyxcbiAgICAgICAgICAgICc2MTMnLCAnNjE0JywgJzYxNScsICc2MTYnLCAnNjIxJywgJzYyMicsICc2MjMnLCAnNjI0JywgJzYyNSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmbsuael+e4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+aWl+WNl+mOricsICflpKfln6TphIknLCAn6JmO5bC+6Y6uJywgJ+Wcn+W6q+mOricsICfopJLlv6DphIknLCAn5p2x5Yui6YSJJywgJ+iHuuilv+mEiScsICfltJnog4zphIknLFxuICAgICAgICAgICAgJ+m6peWvrumEiScsICfmlpflha3luIInLCAn5p6X5YWn6YSJJywgJ+WPpOWdkemEiScsICfojr/moZDphIknLCAn6KW/6J666Y6uJywgJ+S6jOW0memEiScsICfljJfmuK/pjq4nLFxuICAgICAgICAgICAgJ+awtOael+mEiScsICflj6PmuZbphIknLCAn5Zub5rmW6YSJJywgJ+WFg+mVt+mEiSddLFxuXG4gICAgICAgICAgICBbJzYzMCcsICc2MzEnLCAnNjMyJywgJzYzMycsICc2MzQnLCAnNjM1JywgJzYzNicsICc2MzcnLCAnNjM4JywgJzY0MCcsICc2NDMnLFxuICAgICAgICAgICAgJzY0NicsICc2NDcnLCAnNjQ4JywgJzY0OScsICc2NTEnLCAnNjUyJywgJzY1MycsICc2NTQnLCAnNjU1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6Ie65Y2X5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit6KW/5Y2AJywgJ+adseWNgCcsICfljZfljYAnLCAn5YyX5Y2AJywgJ+WuieW5s+WNgCcsICflronljZfljYAnLCAn5rC45bq35Y2AJywgJ+atuOS7geWNgCcsICfmlrDljJbljYAnLFxuICAgICAgICAgICAgJ+W3pumOruWNgCcsICfnjonkupXljYAnLCAn5qWg6KW/5Y2AJywgJ+WNl+WMluWNgCcsICfku4HlvrfljYAnLCAn6Zec5buf5Y2AJywgJ+m+jeW0juWNgCcsICflrpjnlLDljYAnLFxuICAgICAgICAgICAgJ+m6u+ixhuWNgCcsICfkvbPph4zljYAnLCAn6KW/5riv5Y2AJywgJ+S4g+iCoeWNgCcsICflsIfou43ljYAnLCAn5a2455Sy5Y2AJywgJ+WMl+mWgOWNgCcsICfmlrDnh5/ljYAnLFxuICAgICAgICAgICAgJ+W+jOWjgeWNgCcsICfnmb3msrPljYAnLCAn5p2x5bGx5Y2AJywgJ+WFreeUsuWNgCcsICfkuIvnh5/ljYAnLCAn5p+z54ef5Y2AJywgJ+m5veawtOWNgCcsICflloTljJbljYAnLFxuICAgICAgICAgICAgJ+Wkp+WFp+WNgCcsICflsbHkuIrljYAnLCAn5paw5biC5Y2AJywgJ+WuieWumuWNgCddLFxuXG4gICAgICAgICAgICBbJzcwMCcsICc3MDEnLCAnNzAyJywgJzcwNCcsICc3MDgnLCAnNzA5JywgJzcxMCcsICc3MTEnLCAnNzEyJywgJzcxMycsICc3MTQnLFxuICAgICAgICAgICAgJzcxNScsICc3MTYnLCAnNzE3JywgJzcxOCcsICc3MTknLCAnNzIwJywgJzcyMScsICc3MjInLCAnNzIzJywgJzcyNCcsICc3MjUnLFxuICAgICAgICAgICAgJzcyNicsICc3MjcnLCAnNzMwJywgJzczMScsICc3MzInLCAnNzMzJywgJzczNCcsICc3MzUnLCAnNzM2JywgJzczNycsICc3NDEnLFxuICAgICAgICAgICAgJzc0MicsICc3NDMnLCAnNzQ0JywgJzc0NSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmrmOmbhOW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+aWsOiIiOWNgCcsICfliY3ph5HljYAnLCAn6IuT6ZuF5Y2AJywgJ+m5veWfleWNgCcsICfpvJPlsbHljYAnLCAn5peX5rSl5Y2AJywgJ+WJjemOruWNgCcsICfkuInmsJHljYAnLFxuICAgICAgICAgICAgJ+aloOaik+WNgCcsICflsI/muK/ljYAnLCAn5bem54ef5Y2AJywgJ+S7geatpuWNgCcsICflpKfnpL7ljYAnLCAn5p2x5rKZ576k5bO2JywgJ+WNl+aymee+pOWzticsICflsqHlsbHljYAnLFxuICAgICAgICAgICAgJ+i3r+erueWNgCcsICfpmL/ok67ljYAnLCAn55Sw5a+u5Y2AJywgJ+eHleW3ouWNgCcsICfmqYvpoK3ljYAnLCAn5qKT5a6Y5Y2AJywgJ+W9jOmZgOWNgCcsICfmsLjlronljYAnLFxuICAgICAgICAgICAgJ+a5luWFp+WNgCcsICfps7PlsbHluIInLCAn5aSn5a+u5Y2AJywgJ+ael+WckuWNgCcsICfps6Xmnb7ljYAnLCAn5aSn5qi55Y2AJywgJ+aXl+WxseWNgCcsICfnvo7mv4PljYAnLFxuICAgICAgICAgICAgJ+WFrem+nOWNgCcsICflhafploDljYAnLCAn5p2J5p6X5Y2AJywgJ+eUsuS7meWNgCcsICfmoYPmupDljYAnLCAn6YKj55Gq5aSP5Y2AJywgJ+iMguael+WNgCcsICfojITokKPljYAnXSxcblxuICAgICAgICAgICAgWyc4MDAnLCAnODAxJywgJzgwMicsICc4MDMnLCAnODA0JywgJzgwNScsICc4MDYnLCAnODA3JywgJzgxMScsICc4MTInLCAnODEzJyxcbiAgICAgICAgICAgICc4MTQnLCAnODE1JywgJzgxNycsICc4MTknLCAnODIwJywgJzgyMScsICc4MjInLCAnODIzJywgJzgyNCcsICc4MjUnLCAnODI2JywgJzgyNycsICc4MjgnLFxuICAgICAgICAgICAgJzgyOScsICc4MzAnLCAnODMxJywgJzgzMicsICc4MzMnLCAnODQwJywgJzg0MicsICc4NDMnLCAnODQ0JywgJzg0NScsICc4NDYnLFxuICAgICAgICAgICAgJzg0NycsICc4NDgnLCAnODQ5JywgJzg1MScsICc4NTInXVxuICAgICAgICBdLFxuICAgICAgICAvLyDmvo7muZbnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfppqzlhazluIInLCAn6KW/5ba86YSJJywgJ+acm+WuiemEiScsICfkuIPnvo7phIknLCAn55m95rKZ6YSJJywgJ+a5luilv+mEiSddLFxuXG4gICAgICAgICAgICBbJzg4MCcsICc4ODEnLCAnODgyJywgJzg4MycsICc4ODQnLCAnODg1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6YeR6ZaA57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6YeR5rKZ6Y6uJywgJ+mHkea5lumOricsICfph5Hlr6fphIknLCAn6YeR5Z+O6Y6uJywgJ+eDiOW2vOmEiScsICfng4/lnbXphIknXSxcblxuICAgICAgICAgICAgWyc4OTAnLCAnODkxJywgJzg5MicsICc4OTMnLCAnODk0JywgJzg5NiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWxj+adsee4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+Wxj+adseW4gicsICfkuInlnLDploDphIknLCAn6Zyn6Ie66YSJJywgJ+eRquWutumEiScsICfkuZ3lpoLphIknLCAn6YeM5riv6YSJJywgJ+mrmOaouemEiScsICfpub3ln5TphIknLFxuICAgICAgICAgICAgJ+mVt+ayu+mEiScsICfpup/mtJvphIknLCAn56u555Sw6YSJJywgJ+WFp+WflOmEiScsICfokKzkuLnphIknLCAn5r2u5bee6Y6uJywgJ+azsOatpumEiScsICfkvobnvqnphIknLFxuICAgICAgICAgICAgJ+iQrOW3kumEiScsICfltIHpoILphIknLCAn5paw5Z+k6YSJJywgJ+WNl+W3numEiScsICfmnpfpgorphIknLCAn5p2x5riv6Y6uJywgJ+eQieeQg+mEiScsICfkvbPlhqzphIknLFxuICAgICAgICAgICAgJ+aWsOWckumEiScsICfmnovlr67phIknLCAn5p6L5bGx6YSJJywgJ+aYpeaXpemEiScsICfnjYXlrZDphIknLCAn6LuK5Z+O6YSJJywgJ+eJoeS4uemEiScsICfmgYbmmKXpjq4nLFxuICAgICAgICAgICAgJ+a7v+W3numEiSddLFxuXG4gICAgICAgICAgICBbJzkwMCcsICc5MDEnLCAnOTAyJywgJzkwMycsICc5MDQnLCAnOTA1JywgJzkwNicsICc5MDcnLCAnOTA4JywgJzkwOScsICc5MTEnLFxuICAgICAgICAgICAgJzkxMicsICc5MTMnLCAnOTIwJywgJzkyMScsICc5MjInLCAnOTIzJywgJzkyNCcsICc5MjUnLCAnOTI2JywgJzkyNycsICc5MjgnLFxuICAgICAgICAgICAgJzkyOScsICc5MzEnLCAnOTMyJywgJzk0MCcsICc5NDEnLCAnOTQyJywgJzk0MycsICc5NDQnLCAnOTQ1JywgJzk0NicsICc5NDcnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoh7rmnbHnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfoh7rmnbHluIInLCAn57ag5bO26YSJJywgJ+iYreW2vOmEiScsICflu7blubPphIknLCAn5Y2R5Y2X6YSJJywgJ+m5v+mHjumEiScsICfpl5zlsbHpjq4nLCAn5rW356uv6YSJJyxcbiAgICAgICAgICAgICfmsaDkuIrphIknLCAn5p2x5rKz6YSJJywgJ+aIkOWKn+mOricsICfplbfmv7HphIknLCAn5aSq6bq76YeMJywgJ+mHkeWzsOmEiScsICflpKfmrabphIknLCAn6YGU5LuB6YSJJ10sXG5cbiAgICAgICAgICAgIFsnOTUwJywgJzk1MScsICc5NTInLCAnOTUzJywgJzk1NCcsICc5NTUnLCAnOTU2JywgJzk1NycsICc5NTgnLCAnOTU5JywgJzk2MScsXG4gICAgICAgICAgICAnOTYyJywgJzk2MycsICc5NjQnLCAnOTY1JywgJzk2NiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOiKseiTrue4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+iKseiTruW4gicsICfmlrDln47phIknLCAn56eA5p6X6YSJJywgJ+WQieWuiemEiScsICflo73osZDphIknLCAn6bOz5p6X6Y6uJywgJ+WFieW+qemEiScsICfosZDmv7HphIknLFxuICAgICAgICAgICAgJ+eRnuepl+mEiScsICfokKzmpq7phIknLCAn546J6YeM6Y6uJywgJ+WNk+a6qumEiScsICflr4zph4zphIknXSxcblxuICAgICAgICAgICAgWyc5NzAnLCAnOTcxJywgJzk3MicsICc5NzMnLCAnOTc0JywgJzk3NScsICc5NzYnLCAnOTc3JywgJzk3OCcsICc5NzknLCAnOTgxJyxcbiAgICAgICAgICAgICc5ODInLCAnOTgzJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6YCj5rGf57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Y2X56u/6YSJJywgJ+WMl+erv+mEiScsICfojpLlhYnphIknLCAn5p2x5byV6YSJJ10sXG5cbiAgICAgICAgICAgIFsnMjA5JywgJzIxMCcsICcyMTEnLCAnMjEyJ11cbiAgICAgICAgXVxuICAgIF1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVPcHRpb25zKCkge1xuICAvLyBDaGVjayBvcHRpb25zIHJlcXVpcmVkXG4gIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICBnZXRPcHRpb25zUmVxdWlyZWQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICB9XG4gIFxuICAvLyBFeHRlbmQgb3B0aW9uc1xuICByZXR1cm4gZ2V0T3B0aW9uc0V4dGVuZChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1syXSk7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNSZXF1aXJlZChvcHRpb25zQ3VzdG9tLCBvcHRpb25zUmVxdWlyZWQpIHtcbiAgdmFyIGVycm9yID0gJyc7XG4gIHZhciBsZW5ndGggPSBvcHRpb25zUmVxdWlyZWQubGVuZ3RoO1xuICBvcHRpb25zQ3VzdG9tID0gb3B0aW9uc0N1c3RvbSB8fCB7fTtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoICEgb3B0aW9uc0N1c3RvbS5oYXNPd25Qcm9wZXJ0eShvcHRpb25zUmVxdWlyZWRbbGVuZ3RoXSkpICAgICAgICAgIFxuICAgICAgZXJyb3IgKz0gb3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0gKyAnLCc7XG4gIH1cbiAgXG4gIGlmIChlcnJvcikgdGhyb3cgJ+e8uuWwkeWPg+aVuDogJyArIGVycm9yO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zRXh0ZW5kKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNEZWZhdWx0KSB7XG4gIGlmICggISBvcHRpb25zQ3VzdG9tKSB7XG4gICAgcmV0dXJuIG9wdGlvbnNEZWZhdWx0O1xuICB9XG4gIFxuICB2YXIgcHJvcGVydHk7XG4gIGZvciAocHJvcGVydHkgaW4gb3B0aW9uc0N1c3RvbSkge1xuICAgIG9wdGlvbnNEZWZhdWx0W3Byb3BlcnR5XSA9IG9wdGlvbnNDdXN0b21bcHJvcGVydHldO1xuICB9XG4gIFxuICByZXR1cm4gb3B0aW9uc0RlZmF1bHQ7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kdWxlIGltcG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgaGFuZGxlT3B0aW9ucyBmcm9tICcuL2hhbmRsZU9wdGlvbnMnO1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNb2R1bGUgZXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgVHdDaXR5U2VsZWN0b3I7IC8qIHVzZSByb2xsdXAgdG8gYnVpbGQgKi9cbi8vIG1vZHVsZS5leHBvcnRzID0gVHdDaXR5U2VsZWN0b3I7IC8qIHVzZSBicm93c2VyaWZ5IHRvIGJ1aWxkICovXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvbnN0cnVjdG9yXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gVHdDaXR5U2VsZWN0b3IoKSB7XG5cbiAgdmFyIHRhZ1JvbGVOYW1lID0gJ3R3LWNpdHktc2VsZWN0b3InO1xuXG4gIC8vIC0tLSBTZXR0aW5nIG9wdGlvbnMgLS0tXG4gIHZhciBvcHRpb25zQ3VzdG9tID0gYXJndW1lbnRzWzBdO1xuICB2YXIgb3B0aW9uc1JlcXVpcmVkID0gYXJndW1lbnRzLmxlbmd0aCA/IFsnZWwnXSA6IG51bGw7IC8vIOiLpeeEoeWPg+aVuOWJh+S4jeioreW/heimgeWPg+aVuFxuICB2YXIgb3B0aW9uc0RlZmF1bHQgPSB7XG4gICAgZWw6IG51bGwsXG4gICAgZWxDb3VudHJ5OiBudWxsLFxuICAgIGVsRGlzdHJpY3Q6IG51bGwsXG4gICAgZWxaaXBjb2RlOiBudWxsLFxuICAgIHNlbGVjdGVkQ291bnRyeTogbnVsbCwgLy8ge2Jvb2xlYW59IOmgkOioremBuOaTh+eahOe4o+W4glxuICAgIHNlbGVjdGVkRGlzdHJpY3Q6IG51bGwsIC8ve2Jvb2xlYW59IOmgkOioremBuOaTh+eahOWNgOWfn1xuICAgIG9ubHk6IG51bGwsIC8vIHthcnJheX0g6ZmQ5Yi26aGv56S65ZOq5Lqb57ij5biCXG4gICAgc2hvd1ppcGNvZGU6IGZhbHNlLCAvLyB7Ym9vbGVhbn0g5piv5ZCm6aGv56S66YO16YGe5Y2A6Jmf5qyE5L2NXG5cdGJvb3RzdHJhcFN0eWxlOiBmYWxzZSxcbiAgICBjb3VudHJ5Q2xhc3NOYW1lOiAnY291bnRyeScsXG4gICAgY291bnRyeUZpbGVkTmFtZTogJ2NvdW50cnknLFxuICAgIGRpc3RyaWN0Q2xhc3NOYW1lOiAnZGlzdHJpY3QnLFxuICAgIGRpc3RyaWN0RmllbGROYW1lOiAnZGlzdHJpY3QnLFxuICAgIHppcGNvZGVDbGFzc05hbWU6ICd6aXBjb2RlJyxcbiAgICB6aXBjb2RlRmllbGROYW1lOiAnemlwY29kZSdcbiAgfTtcblxuICAvLyAtLS0gU2V0dGluZyBwcm9wZXJ0aWVzIC0tLVxuICB0aGlzLm9wdGlvbnMgPSBoYW5kbGVPcHRpb25zKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNSZXF1aXJlZCwgb3B0aW9uc0RlZmF1bHQpO1xuXG4gIC8vIOacieaMh+WumiBlbCDnmoTliJ3lp4vljJZcbiAgaWYgKHRoaXMub3B0aW9ucy5lbCkge1xuICAgIHRoaXMuZWwgPSBnZXRFbGVtZW50cyh0aGlzLm9wdGlvbnMuZWwpO1xuICAgIHRoaXMuZWxDb3VudHJ5ID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsQ291bnRyeSk7XG4gICAgdGhpcy5lbERpc3RyaWN0ID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsRGlzdHJpY3QpO1xuICAgIHRoaXMuZWxaaXBjb2RlID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsWmlwY29kZSk7XG4gICAgaW5pdC5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8g54Sh5oyH5a6aIGVsIOeahOWIneWni+WMlu+8jOS9v+eUqOespuWQiOeahCBkYXRhLXJvbGUgRE9NIOS9nOeCuiBlbFxuICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9JysgdGFnUm9sZU5hbWUgKyddJyk7XG4gIGVscy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgdmFyIHNlbGYgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKTsgLy8gY2xvbmUgb2JqZWN077yM5ZugIG9iamVjdCDngrrlj4PogINcblxuICAgIC8vIOmHjee9ruebuOmXnOWQhCBlbCDoqK3lrppcbiAgICBzZWxmLmVsID0gZWw7XG4gICAgc2VsZi5lbENvdW50cnkgPSBudWxsO1xuICAgIHNlbGYuZWxEaXN0cmljdCA9IG51bGw7XG4gICAgc2VsZi5lbFppcGNvZGUgPSBudWxsO1xuXG4gICAgLy8g6ZmQ5Yi26aGv56S65ZOq5Lqb57ij5biCXG4gICAgc2VsZi5vcHRpb25zLm9ubHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seScpXG4gICAgICA/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5JykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpIC8vIOWOu+mZpOepuueZveWtl+WFg++8jOi9iemZo+WIl1xuICAgICAgOiBudWxsO1xuXG4gICAgLy8g6aCQ6Kit6YG45pOH55qE57ij5biCXG4gICAgc2VsZi5vcHRpb25zLnNlbGVjdGVkQ291bnRyeSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1jb3VudHJ5Jyk7XG5cbiAgICAvLyDpoJDoqK3pgbjmk4fnmoTljYDln59cbiAgICBzZWxmLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1kaXN0cmljdCcpO1xuXG5cdC8vIOaYr+WQpuS9v+eUqCBib290c3RyYXAg5qij5byPXG5cdHNlbGYub3B0aW9ucy5ib290c3RyYXBTdHlsZSA9IChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYm9vdHN0cmFwLXN0eWxlJykgIT0gbnVsbCk7XG5cbiAgICAvLyDmmK/lkKbpoa/npLrpg7XpgZ7ljYDomZ9cbiAgICBzZWxmLm9wdGlvbnMuc2hvd1ppcGNvZGUgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNob3ctemlwY29kZScpICE9IG51bGwpO1xuXG4gICAgaW5pdC5jYWxsKHNlbGYpO1xuICB9LCB0aGlzKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1YmxpYyBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuVHdDaXR5U2VsZWN0b3IucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXNldFNlbGVjdG9ycy5jYWxsKHRoaXMpO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHJpdmF0ZSBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgc2V0RWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgc2V0Q291bnRyeUNoYW5nZWQuY2FsbCh0aGlzKTtcbiAgc2V0RGlzdHJpY3RDaGFuZ2VkLmNhbGwodGhpcyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RlZENvdW50cnkpIHtcbiAgICBzZXRTZWxlY3RlZEl0ZW0uY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50cyhlbCkge1xuICBpZiAoICEgZWwpIHJldHVybiBudWxsO1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnRzKCkge1xuICAvLyDnuKPluILpgbjllq5cbiAgaWYgKCAhIHRoaXMuZWxDb3VudHJ5KSB7XG4gICAgdmFyIGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLmVsQ291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjb3VudHJ5KTtcbiAgfVxuXG4gIC8vIOe4o+W4gumBuOWWruWxrOaAp1xuICB0aGlzLmVsQ291bnRyeS5pbm5lckhUTUwgPSBnZXRDb3VudHJ5T3B0aW9ucyh0aGlzLm9wdGlvbnMub25seSk7XG4gIHRoaXMuZWxDb3VudHJ5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuY291bnRyeUNsYXNzTmFtZSk7XG5cbiAgLy8g5Y2A5Z+f6YG45ZauXG4gIGlmICggISB0aGlzLmVsRGlzdHJpY3QpIHtcbiAgICB2YXIgZGlzdHJpY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLmVsRGlzdHJpY3QgPSBkaXN0cmljdDtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGRpc3RyaWN0KTtcbiAgfVxuXG4gIC8vIOWNgOWfn+mBuOWWruWxrOaAp1xuICB0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zKCk7XG4gIHRoaXMuZWxEaXN0cmljdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmRpc3RyaWN0Q2xhc3NOYW1lKTtcbiAgdGhpcy5lbERpc3RyaWN0Lm5hbWUgPSB0aGlzLm9wdGlvbnMuZGlzdHJpY3RGaWVsZE5hbWU7XG5cbiAgLy8g6YO16YGe5Y2A6JmfXG4gIGlmICggISB0aGlzLmVsWmlwY29kZSkge1xuICAgIHZhciB6aXBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLmVsWmlwY29kZSA9IHppcGNvZGU7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh6aXBjb2RlKTtcbiAgfVxuXG4gIC8vIOmDtemBnuWNgOiZn+WxrOaAp+ioreWumlxuICB0aGlzLmVsWmlwY29kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLnppcGNvZGVDbGFzc05hbWUpO1xuICB0aGlzLmVsWmlwY29kZS5uYW1lID0gdGhpcy5vcHRpb25zLnppcGNvZGVGaWVsZE5hbWU7XG4gIHRoaXMuZWxaaXBjb2RlLnR5cGUgPSAndGV4dCc7XG4gIHRoaXMuZWxaaXBjb2RlLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgdGhpcy5lbFppcGNvZGUuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gIHRoaXMuZWxaaXBjb2RlLnBsYWNlaG9sZGVyID0gJ+mDtemBnuWNgOiZnyc7XG4gIHRoaXMuZWxaaXBjb2RlLnN0eWxlLndpZHRoID0gJzZlbSc7XG4gIHRoaXMuZWxaaXBjb2RlLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9wdGlvbnMuc2hvd1ppcGNvZGUgfHwgJ25vbmUnO1xuXG4gIC8vIGJvb3RzdHJhcCDmqKPlvI/lpZflhaVcbiAgaWYgKHRoaXMub3B0aW9ucy5ib290c3RyYXBTdHlsZSkge1xuICAgIHNldEJvb3RzdHJhcFN0eWxlLmNhbGwodGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRyeU9wdGlvbnMob25seSkge1xuICB2YXIgb3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+6YG45pOH57ij5biCPC9vcHRpb24+JztcblxuICBmb3IgKHZhciBpID0gMCwgaiA9IGRhdGEuY291bnRyeS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAvLyDoi6XmnInoqK3lrprpmZDliLbpoa/npLrnmoTnuKPluILvvIzkuJToqbLpoIXnm67kuI3lnKjoh6roqILnuKPluILkuK1cbiAgICBpZiAob25seSAmJiBBcnJheS5pc0FycmF5KG9ubHkpICYmIG9ubHkuaW5kZXhPZihkYXRhLmNvdW50cnlbaV0pID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi6Ie65YyX5biCXCIgZGF0YS1pbmRleD1cIjBcIj7oh7rljJfluII8L29wdGlvbj5cbiAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmNvdW50cnlbaV19XCIgZGF0YS1pbmRleD1cIiR7aX1cIj4ke2RhdGEuY291bnRyeVtpXX08L29wdGlvbj5gO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCkge1xuICBpZiAoICEgaW5kZXgpIHtcbiAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD4tLS08L29wdGlvbj4nO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPumBuOaTh+WNgOWfnzwvb3B0aW9uPic7XG5cbiAgZm9yKHZhciBpID0gMCwgaiA9IGRhdGEuZGlzdHJpY3RbaW5kZXhdWzBdLmxlbmd0aCAtIDE7IGkgPD0gajsgaSsrKSB7XG4gICAgLy8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi5Lit5q2j5Y2AXCIgZGF0YS16aXBjb2RlPVwiMTAwXCI+5Lit5q2j5Y2APC9vcHRpb24+XG4gICAgb3B0aW9ucyArPSBgXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmRpc3RyaWN0W2luZGV4XVswXVtpXX1cIiBkYXRhLXppcGNvZGU9XCIke2RhdGEuZGlzdHJpY3RbaW5kZXhdWzFdW2ldfVwiPlxuICAgICAgICAke2RhdGEuZGlzdHJpY3RbaW5kZXhdWzBdW2ldfVxuICAgICAgPC9vcHRpb24+XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRDb3VudHJ5Q2hhbmdlZCgpIHtcbiAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmVsQ291bnRyeS5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7IC8vIOWPliBkYWRhLWluZGV4XG4gICAgdGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCk7XG4gICAgdGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuZWxDb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBzZXREaXN0cmljdENoYW5nZWQoKSB7XG4gIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHppcGNvZGUgPSB0aGlzLmVsRGlzdHJpY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKVxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS16aXBjb2RlJyk7IC8vIOWPliBkYWRhLXppcGNvZGVcblxuICAgIHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gemlwY29kZTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuZWxEaXN0cmljdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRJdGVtKCkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcblxuICB0aGlzLmVsQ291bnRyeS52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZENvdW50cnk7XG4gIHRoaXMuZWxDb3VudHJ5LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCkge1xuICAgIHRoaXMuZWxEaXN0cmljdC52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZERpc3RyaWN0O1xuICAgIHRoaXMuZWxEaXN0cmljdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFNlbGVjdG9ycygpIHtcbiAgdGhpcy5lbENvdW50cnkuc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoKTtcbiAgdGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHNldEJvb3RzdHJhcFN0eWxlKCkge1xuXHR2YXIgX2NsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICAgIHZhciBfd3JhcHBlckNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwJztcblxuXHR0aGlzLmVsQ291bnRyeS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgX2NsYXNzTmFtZSk7XG4gICAgdmFyIGNvdW50cnlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291bnRyeVdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIF93cmFwcGVyQ2xhc3NOYW1lKTtcblx0dGhpcy5lbC5pbnNlcnRCZWZvcmUoY291bnRyeVdyYXBwZXIsIHRoaXMuZWwuY2hpbGROb2Rlc1swXSk7XG5cdGNvdW50cnlXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxDb3VudHJ5KTtcblxuXHR0aGlzLmVsRGlzdHJpY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIF9jbGFzc05hbWUpO1xuICAgIHZhciBjb3VudHJ5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdW50cnlXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBfd3JhcHBlckNsYXNzTmFtZSk7XG5cdHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGNvdW50cnlXcmFwcGVyLCB0aGlzLmVsLmNoaWxkTm9kZXNbMV0pO1xuXHRjb3VudHJ5V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsRGlzdHJpY3QpO1xuXG5cdHRoaXMuZWxaaXBjb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBfY2xhc3NOYW1lKTtcbiAgICB2YXIgY291bnRyeVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3VudHJ5V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgX3dyYXBwZXJDbGFzc05hbWUpO1xuXHR0aGlzLmVsLmluc2VydEJlZm9yZShjb3VudHJ5V3JhcHBlciwgdGhpcy5lbC5jaGlsZE5vZGVzWzJdKTtcblx0Y291bnRyeVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbFppcGNvZGUpO1xufVxuIl0sIm5hbWVzIjpbImRhdGEiLCJUd0NpdHlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSUEsU0FBTzs7YUFFRSxDQUNMLEtBREssRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixFQUNxQyxLQURyQyxFQUM0QyxLQUQ1QyxFQUVMLEtBRkssRUFFRSxLQUZGLEVBRVMsS0FGVCxFQUVnQixLQUZoQixFQUV1QixLQUZ2QixFQUU4QixLQUY5QixFQUVxQyxLQUZyQyxFQUU0QyxLQUY1QyxF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