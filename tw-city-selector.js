(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.TwCitySelector = factory());
}(this, (function () { 'use strict';

var data$1 = {
  // 縣市
  country: ['台北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '台南市', '高雄市', '澎湖縣', '屏東縣', '台東縣', '花蓮縣', '金門縣', '連江縣', '南海諸島', '釣魚台列嶼'],

  // 區域
  district: [
  // 台北市
  [['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'], ['100', '103', '104', '105', '106', '108', '110', '111', '112', '114', '115', '116']],
  // 基隆市
  [['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'], ['200', '201', '202', '203', '204', '205', '206']],
  // 新北市
  [['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽鎮', '樹林區', '鶯歌鎮', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水鎮', '三芝區', '石門區'], ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228', '231', '232', '233', '234', '235', '236', '237', '238', '239', '241', '242', '243', '244', '247', '248', '249', '251', '252', '253']],
  // 宜蘭縣
  [['宜蘭市', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '羅東鎮', '三星鄉', '大同鄉', '五結鄉', '冬山鄉', '蘇澳鎮', '南澳鄉'], ['260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '272']],
  // 桃園市
  [['中壢區', '平鎮區', '龍潭區', '楊梅區', '新屋區', '觀音區', '桃園區', '龜山區', '八德區', '大溪區', '復興區', '大園區', '蘆竹區'], ['320', '324', '325', '326', '327', '328', '330', '333', '334', '335', '336', '337', '338']],
  // 新竹市
  [['東區', '北區', '香山區'], ['300', '300', '300'] // 我沒騙人...
  ],
  // 新竹縣
  [['竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'], ['302', '303', '304', '305', '306', '307', '308', '310', '311', '312', '313', '314', '315']],
  // 苗栗縣
  [['竹南鎮', '頭份鎮', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮', '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉', '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'], ['350', '351', '352', '353', '354', '356', '357', '358', '360', '361', '362', '363', '364', '365', '366', '367', '368', '369']],
  // 台中市
  [['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'], ['400', '401', '402', '403', '404', '406', '407', '408', '411', '412', '413', '414', '420', '421', '422', '423', '424', '426', '427', '428', '429', '432', '433', '434', '435', '436', '437', '438', '439']],
  // 彰化縣
  [['彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '鹿港鎮', '福興鄉', '線西鄉', '和美鎮', '伸港鄉', '員林鎮', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉', '埔鹽鄉', '田中鎮', '北斗鎮', '田尾鄉', '埤頭鄉', '溪州鄉', '竹塘鄉', '二林鎮', '大城鄉', '芳苑鄉', '二水鄉'], ['500', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '520', '521', '522', '523', '524', '525', '526', '527', '528', '530']],
  // 南投縣
  [['南投市', '中寮鄉', '草屯鎮', '國姓鄉', '埔里鎮', '仁愛鄉', '名間鄉', '集集鎮', '水里鄉', '魚池鄉', '信義鄉', '竹山鎮', '鹿谷鄉'], ['540', '541', '542', '544', '545', '546', '551', '552', '553', '555', '556', '557', '558']],
  // 嘉義市
  [['東區', '西區'], ['600', '600'] // 我沒騙人...
  ],
  // 嘉義縣
  [['番路鄉', '梅山鄉', '竹崎鄉', '阿里山', '中埔鄉', '大埔鄉', '水上鄉', '鹿草鄉', '太保市', '朴子市', '東石鄉', '六腳鄉', '新港鄉', '民雄鄉', '大林鎮', '溪口鄉', '義竹鄉', '布袋鎮'], ['602', '603', '604', '605', '606', '607', '608', '611', '612', '613', '614', '615', '616', '621', '622', '623', '624', '625']],
  // 雲林縣
  [['斗南鎮', '大埤鄉', '虎尾鎮', '土庫鎮', '褒忠鄉', '東勢鄉', '台西鄉', '崙背鄉', '麥寮鄉', '斗六市', '林內鄉', '古坑鄉', '莿桐鄉', '西螺鎮', '二崙鄉', '北港鎮', '水林鄉', '口湖鄉', '四湖鄉', '元長鄉'], ['630', '631', '632', '633', '634', '635', '636', '637', '638', '640', '643', '646', '647', '648', '649', '651', '652', '653', '654', '655']],
  // 台南市
  [['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'], ['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741', '742', '743', '744', '745']],
  // 高雄市
  [['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區', '大社區', '岡山區', '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區', '湖內區', '鳳山市', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區', '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'], ['800', '801', '802', '803', '804', '805', '806', '807', '811', '812', '813', '814', '815', '820', '821', '822', '823', '824', '825', '826', '827', '828', '829', '830', '831', '832', '833', '840', '842', '843', '844', '845', '846', '847', '848', '849', '851', '852']],
  // 澎湖縣
  [['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'], ['880', '881', '882', '883', '884', '885']],
  // 屏東縣
  [['屏東市', '三地門', '霧台鄉', '瑪家鄉', '九如鄉', '里港鄉', '高樹鄉', '鹽埔鄉', '長治鄉', '麟洛鄉', '竹田鄉', '內埔鄉', '萬丹鄉', '潮州鎮', '泰武鄉', '來義鄉', '萬巒鄉', '崁頂鄉', '新埤鄉', '南州鄉', '林邊鄉', '東港鎮', '琉球鄉', '佳冬鄉', '新園鄉', '枋寮鄉', '枋山鄉', '春日鄉', '獅子鄉', '車城鄉', '牡丹鄉', '恆春鎮', '滿州鄉'], ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '911', '912', '913', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '931', '932', '940', '941', '942', '943', '944', '945', '946', '947']],
  // 台東縣
  [['台東市', '綠島鄉', '蘭嶼鄉', '延平鄉', '卑南鄉', '鹿野鄉', '關山鎮', '海端鄉', '池上鄉', '東河鄉', '成功鎮', '長濱鄉', '太麻里', '金峰鄉', '大武鄉', '達仁鄉'], ['950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '961', '962', '963', '964', '965', '966']],
  // 花蓮縣
  [['花蓮市', '新城鄉', '秀林鄉', '吉安鄉', '壽豐鄉', '鳳林鎮', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '玉里鎮', '卓溪鄉', '富里鄉'], ['970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '981', '982', '983']],
  // 金門縣
  [['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'], ['890', '891', '892', '893', '894', '896']],
  // 連江縣
  [['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'], ['209', '210', '211', '212']],
  // 南海諸島
  [['東沙', '南沙'], ['817', '819']],
  // 釣魚台列嶼
  [['釣魚台列嶼'], ['290']]]

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

  // 無指定 el，使用符合的 data-role DOM 作為 el
  var els = document.querySelectorAll('[role="tw-city-selector"]');
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

  this.elCountry.innerHTML = getCountryOptions(this.options.only);
  this.elCountry.setAttribute('class', this.options.countryClassName);
  this.elCountry.name = this.options.countryFiledName;

  // 區域選單
  if (!this.elDistrict) {
    var district = document.createElement('select');
    this.elDistrict = district;
    this.el.appendChild(district);
  }

  this.elDistrict.innerHTML = getDistrictOptions();
  this.elDistrict.setAttribute('class', this.options.districtClassName);
  this.elDistrict.name = this.options.districtFieldName;

  // 郵遞區號
  if (!this.elZipcode) {
    var zipcode = document.createElement('input');
    this.elZipcode = zipcode;
    this.el.appendChild(zipcode);
  }

  this.elZipcode.setAttribute('class', this.options.zipcodeClassName);
  this.elZipcode.name = this.options.zipcodeFieldName;
  this.elZipcode.type = 'text';
  this.elZipcode.readOnly = true;
  this.elZipcode.autocomplete = 'off';
  this.elZipcode.placeholder = '郵遞區號';
  this.elZipcode.style.width = '6em';
  this.elZipcode.style.display = this.options.showZipcode || 'none';
}

function getCountryOptions(only) {
  var options = '<option value="">選擇縣市</option>';

  for (var i = 0, j = data$1.country.length; i < j; i++) {
    // 若有設定限制顯示的縣市，且該項目不在自訂縣市中
    if (only && Array.isArray(only) && only.indexOf(data$1.country[i]) === -1) {
      continue;
    }

    // format: <option value="台北市" data-index="0">台北市</option>
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

return TwCitySelector$1;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCIvVXNlcnMvZGVubnkvRHJvcGJveC8wMS3ntrLnq5nlsIjmoYgvZGstcGx1Z2lucy90dy1jaXR5LXNlbGVjdG9yL3NyYy9oYW5kbGVPcHRpb25zLmpzIiwiL1VzZXJzL2Rlbm55L0Ryb3Bib3gvMDEt57ay56uZ5bCI5qGIL2RrLXBsdWdpbnMvdHctY2l0eS1zZWxlY3Rvci9zcmMvdHctY2l0eS1zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBkYXRhO1xuXG52YXIgZGF0YSA9IHtcbiAgICAvLyDnuKPluIJcbiAgICBjb3VudHJ5OiBbXG4gICAgICAgICflj7DljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOerueW4gicsICfmlrDnq7nnuKMnLCAn6IuX5qCX57ijJyxcbiAgICAgICAgJ+WPsOS4reW4gicsICflvbDljJbnuKMnLCAn5Y2X5oqV57ijJywgJ+WYiee+qeW4gicsICflmInnvqnnuKMnLCAn6Zuy5p6X57ijJywgJ+WPsOWNl+W4gicsICfpq5jpm4TluIInLFxuICAgICAgICAn5r6O5rmW57ijJywgJ+Wxj+adsee4oycsICflj7DmnbHnuKMnLCAn6Iqx6JOu57ijJywgJ+mHkemWgOe4oycsICfpgKPmsZ/nuKMnLCAn5Y2X5rW36Ku45bO2JywgJ+mHo+mtmuWPsOWIl+W2vCdcbiAgICBdLFxuXG4gICAgLy8g5Y2A5Z+fXG4gICAgZGlzdHJpY3Q6IFtcbiAgICAgICAgLy8g5Y+w5YyX5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit5q2j5Y2AJywgJ+Wkp+WQjOWNgCcsICfkuK3lsbHljYAnLCAn5p2+5bGx5Y2AJywgJ+Wkp+WuieWNgCcsICfokKzoj6/ljYAnLCAn5L+h576p5Y2AJyxcbiAgICAgICAgICAgICflo6vmnpfljYAnLCfljJfmipXljYAnLCAn5YWn5rmW5Y2AJywgJ+WNl+a4r+WNgCcsICfmloflsbHljYAnXSxcblxuICAgICAgICAgICAgWycxMDAnLCAnMTAzJywgJzEwNCcsICcxMDUnLCAnMTA2JywgJzEwOCcsICcxMTAnLCAnMTExJywgJzExMicsICcxMTQnLCAnMTE1JywgJzExNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWfuumahuW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S7geaEm+WNgCcsICfkv6HnvqnljYAnLCAn5Lit5q2j5Y2AJywgJ+S4reWxseWNgCcsICflronmqILljYAnLCAn5pqW5pqW5Y2AJywgJ+S4g+WgteWNgCddLFxuXG4gICAgICAgICAgICBbJzIwMCcsICcyMDEnLCAnMjAyJywgJzIwMycsICcyMDQnLCAnMjA1JywgJzIwNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOaWsOWMl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+iQrOmHjOWNgCcsICfph5HlsbHljYAnLCAn5p2/5qmL5Y2AJywgJ+axkOatouWNgCcsICfmt7HlnZHljYAnLCAn55+z56KH5Y2AJywgJ+eRnuiKs+WNgCcsICflubPmuqrljYAnLFxuICAgICAgICAgICAgJ+mbmea6quWNgCcsICfosqLlr67ljYAnLCAn5paw5bqX5Y2AJywgJ+Wdquael+WNgCcsICfng4/kvobljYAnLCAn5rC45ZKM5Y2AJywgJ+S4reWSjOWNgCcsICflnJ/ln47ljYAnLFxuICAgICAgICAgICAgJ+S4ieWzvemOricsICfmqLnmnpfljYAnLCAn6bav5q2M6Y6uJywgJ+S4iemHjeWNgCcsICfmlrDojorljYAnLCAn5rOw5bGx5Y2AJywgJ+ael+WPo+WNgCcsICfomIbmtLLljYAnLFxuICAgICAgICAgICAgJ+S6lOiCoeWNgCcsICflhavph4zljYAnLCAn5reh5rC06Y6uJywgJ+S4ieiKneWNgCcsICfnn7PploDljYAnXSxcblxuICAgICAgICAgICAgWycyMDcnLCAnMjA4JywgJzIyMCcsICcyMjEnLCAnMjIyJywgJzIyMycsICcyMjQnLCAnMjI2JywgJzIyNycsICcyMjgnLFxuICAgICAgICAgICAgJzIzMScsICcyMzInLCAnMjMzJywgJzIzNCcsICcyMzUnLCAnMjM2JywgJzIzNycsICcyMzgnLCAnMjM5JywgJzI0MScsXG4gICAgICAgICAgICAnMjQyJywgJzI0MycsICcyNDQnLCAnMjQ3JywgJzI0OCcsICcyNDknLCAnMjUxJywgJzI1MicsICcyNTMnXG4gICAgICAgIF1cbiAgICBdLFxuICAgIC8vIOWunOiYree4o1xuICAgIFtcbiAgICAgICAgWyflrpzomK3luIInLCAn6aCt5Z+O6Y6uJywgJ+ekgea6qumEiScsICflo6/lnI3phIknLCAn5ZOh5bGx6YSJJywgJ+e+headsemOricsICfkuInmmJ/phIknLCAn5aSn5ZCM6YSJJyxcbiAgICAgICAgJ+S6lOe1kOmEiScsICflhqzlsbHphIknLCAn6JiH5r6z6Y6uJywgJ+WNl+a+s+mEiSddLFxuXG4gICAgICAgIFsnMjYwJywgJzI2MScsICcyNjInLCAnMjYzJywgJzI2NCcsICcyNjUnLCAnMjY2JywgJzI2NycsICcyNjgnLCAnMjY5JyxcbiAgICAgICAgJzI3MCcsICcyNzInXVxuICAgIF0sXG4gICAgLy8g5qGD5ZyS5biCXG5cdFtcblx0XHRbJ+S4reWjouWNgCcsICflubPpjq7ljYAnLCAn6b6N5r2t5Y2AJywgJ+aliuaiheWNgCcsICfmlrDlsYvljYAnLCAn6KeA6Z+z5Y2AJywgJ+ahg+WckuWNgCcsICfpvpzlsbHljYAnLFxuXHRcdCflhavlvrfljYAnLCAn5aSn5rqq5Y2AJywgJ+W+qeiIiOWNgCcsICflpKflnJLljYAnLCAn6JiG56u55Y2AJ10sXG5cblx0XHRbJzMyMCcsICczMjQnLCAnMzI1JywgJzMyNicsICczMjcnLCAnMzI4JywgJzMzMCcsICczMzMnLCAnMzM0JywgJzMzNScsXG5cdFx0JzMzNicsICczMzcnLCAnMzM4J11cbiAgICBdLFxuICAgIC8vIOaWsOerueW4glxuICAgIFtcbiAgICAgICAgWyfmnbHljYAnLCAn5YyX5Y2AJywgJ+mmmeWxseWNgCddLFxuXHRcdFxuICAgICAgICBbJzMwMCcsICczMDAnLCAnMzAwJ10gLy8g5oiR5rKS6aiZ5Lq6Li4uXG4gICAgXSxcbiAgICAvLyDmlrDnq7nnuKNcbiAgICBbXG4gICAgICAgIFsn56u55YyX5biCJywgJ+a5luWPo+mEiScsICfmlrDosZDphIknLCAn5paw5Z+U6Y6uJywgJ+mXnOilv+mOricsICfoio7mnpfphIknLCAn5a+25bGx6YSJJyxcbiAgICAgICAgJ+erueadsemOricsICfkupTls7DphIknLCAn5qmr5bGx6YSJJywgJ+Wwluefs+mEiScsICfljJfln5TphIknLCAn5bOo55yJ6YSJJ10sXG5cbiAgICAgICAgWyczMDInLCAnMzAzJywgJzMwNCcsICczMDUnLCAnMzA2JywgJzMwNycsICczMDgnLCAnMzEwJywgJzMxMScsXG4gICAgICAgICczMTInLCAnMzEzJywgJzMxNCcsICczMTUnXVxuICAgIF0sXG4gICAgLy8g6IuX5qCX57ijXG4gICAgW1xuICAgICAgWyfnq7nljZfpjq4nLCAn6aCt5Lu96Y6uJywgJ+S4ieeBo+mEiScsICfljZfluoTphIknLCAn542F5r2t6YSJJywgJ+W+jOm+jemOricsICfpgJrpnITpjq4nLCAn6IuR6KOh6Y6uJyxcbiAgICAgICAgJ+iLl+agl+W4gicsICfpgKDmqYvphIknLCAn6aCt5bGL6YSJJywgJ+WFrOmkqOmEiScsICflpKfmuZbphIknLCAn5rOw5a6J6YSJJyxcbiAgICAgICAgJ+mKhemRvOmEiScsICfkuInnvqnphIknLCAn6KW/5rmW6YSJJywgJ+WNk+iYremOridcbiAgICAgIF0sXG4gICAgICBbJzM1MCcsICczNTEnLCAnMzUyJywgJzM1MycsICczNTQnLCAnMzU2JywgJzM1NycsICczNTgnLCAnMzYwJywgJzM2MScsXG4gICAgICAgICczNjInLCAnMzYzJywgJzM2NCcsICczNjUnLCAnMzY2JywgJzM2NycsICczNjgnLCAnMzY5J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5Y+w5Lit5biCXG4gICAgW1xuICAgICAgWyfkuK3ljYAnLCAn5p2x5Y2AJywgJ+WNl+WNgCcsICfopb/ljYAnLCAn5YyX5Y2AJywgJ+WMl+Wxr+WNgCcsICfopb/lsa/ljYAnLCAn5Y2X5bGv5Y2AJywgJ+WkquW5s+WNgCcsXG4gICAgICAgICflpKfph4zljYAnLCAn6Zyn5bOw5Y2AJywgJ+eDj+aXpeWNgCcsICfosZDljp/ljYAnLCAn5ZCO6YeM5Y2AJywgJ+efs+WyoeWNgCcsICfmnbHli6LljYAnLCAn5ZKM5bmz5Y2AJyxcbiAgICAgICAgJ+aWsOekvuWNgCcsICfmva3lrZDljYAnLCAn5aSn6ZuF5Y2AJywgJ+elnuWyoeWNgCcsICflpKfogprljYAnLCAn5rKZ6bm/5Y2AJywgJ+m+jeS6leWNgCcsICfmoqfmo7LljYAnLFxuICAgICAgICAn5riF5rC05Y2AJywgJ+Wkp+eUsuWNgCcsICflpJbln5TljYAnLCAn5aSn5a6J5Y2AJ1xuICAgICAgXSxcbiAgICAgIFsnNDAwJywgJzQwMScsICc0MDInLCAnNDAzJywgJzQwNCcsICc0MDYnLCAnNDA3JywgJzQwOCcsICc0MTEnLCAnNDEyJyxcbiAgICAgICAgJzQxMycsICc0MTQnLCAnNDIwJywgJzQyMScsICc0MjInLCAnNDIzJywgJzQyNCcsICc0MjYnLCAnNDI3JywgJzQyOCcsXG4gICAgICAgICc0MjknLCAnNDMyJywgJzQzMycsICc0MzQnLCAnNDM1JywgJzQzNicsICc0MzcnLCAnNDM4JywgJzQzOSdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOW9sOWMlue4o1xuICAgIFtcbiAgICAgIFsn5b2w5YyW5biCJywgJ+iKrOWckumEiScsICfoirHlo4fphIknLCAn56eA5rC06YSJJywgJ+m5v+a4r+mOricsICfnpo/oiIjphIknLCAn57ea6KW/6YSJJywgJ+WSjOe+jumOricsXG4gICAgICAgICfkvLjmuK/phIknLCAn5ZOh5p6X6Y6uJywgJ+ekvumgremEiScsICfmsLjpnZbphIknLCAn5Z+U5b+D6YSJJywgJ+a6qua5lumOricsICflpKfmnZHphIknLCAn5Z+U6bm96YSJJyxcbiAgICAgICAgJ+eUsOS4remOricsICfljJfmlpfpjq4nLCAn55Sw5bC+6YSJJywgJ+WfpOmgremEiScsICfmuqrlt57phIknLCAn56u55aGY6YSJJywgJ+S6jOael+mOricsICflpKfln47phIknLFxuICAgICAgICAn6Iqz6IuR6YSJJywgJ+S6jOawtOmEiSdcbiAgICAgIF0sXG4gICAgICBbJzUwMCcsICc1MDInLCAnNTAzJywgJzUwNCcsICc1MDUnLCAnNTA2JywgJzUwNycsICc1MDgnLCAnNTA5JywgJzUxMCcsXG4gICAgICAgICc1MTEnLCAnNTEyJywgJzUxMycsICc1MTQnLCAnNTE1JywgJzUxNicsICc1MjAnLCAnNTIxJywgJzUyMicsICc1MjMnLFxuICAgICAgICAnNTI0JywgJzUyNScsICc1MjYnLCAnNTI3JywgJzUyOCcsICc1MzAnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDljZfmipXnuKNcbiAgICBbXG4gICAgICBbJ+WNl+aKleW4gicsICfkuK3lr67phIknLCAn6I2J5bGv6Y6uJywgJ+Wci+Wnk+mEiScsICfln5Tph4zpjq4nLCAn5LuB5oSb6YSJJywgJ+WQjemWk+mEiScsICfpm4bpm4bpjq4nLFxuICAgICAgICAn5rC06YeM6YSJJywgJ+mtmuaxoOmEiScsICfkv6HnvqnphIknLCAn56u55bGx6Y6uJywgJ+m5v+iwt+mEiSdcbiAgICAgIF0sXG4gICAgICBbJzU0MCcsICc1NDEnLCAnNTQyJywgJzU0NCcsICc1NDUnLCAnNTQ2JywgJzU1MScsICc1NTInLCAnNTUzJywgJzU1NScsXG4gICAgICAgICc1NTYnLCAnNTU3JywgJzU1OCdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOWYiee+qeW4glxuICAgIFtcbiAgICAgICAgWyfmnbHljYAnLCAn6KW/5Y2AJ10sXG5cbiAgICAgICAgWyc2MDAnLCAnNjAwJ10gLy8g5oiR5rKS6aiZ5Lq6Li4uXG4gICAgXSxcbiAgICAvLyDlmInnvqnnuKNcbiAgICBbXG4gICAgICBbJ+eVqui3r+mEiScsICfmooXlsbHphIknLCAn56u55bSO6YSJJywgJ+mYv+mHjOWxsScsICfkuK3ln5TphIknLCAn5aSn5Z+U6YSJJywgJ+awtOS4iumEiScsXG4gICAgICAgICfpub/ojYnphIknLCAn5aSq5L+d5biCJywgJ+actOWtkOW4gicsICfmnbHnn7PphIknLCAn5YWt6IWz6YSJJywgJ+aWsOa4r+mEiScsICfmsJHpm4TphIknLCAn5aSn5p6X6Y6uJyxcbiAgICAgICAgJ+a6quWPo+mEiScsICfnvqnnq7nphIknLCAn5biD6KKL6Y6uJ10sXG5cbiAgICAgIFsnNjAyJywgJzYwMycsICc2MDQnLCAnNjA1JywgJzYwNicsICc2MDcnLCAnNjA4JywgJzYxMScsICc2MTInLFxuICAgICAgICAnNjEzJywgJzYxNCcsICc2MTUnLCAnNjE2JywgJzYyMScsICc2MjInLCAnNjIzJywgJzYyNCcsICc2MjUnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDpm7LmnpfnuKNcbiAgICBbXG4gICAgICBbJ+aWl+WNl+mOricsICflpKfln6TphIknLCAn6JmO5bC+6Y6uJywgJ+Wcn+W6q+mOricsICfopJLlv6DphIknLCAn5p2x5Yui6YSJJywgJ+WPsOilv+mEiScsICfltJnog4zphIknLFxuICAgICAgICAn6bql5a+u6YSJJywgJ+aWl+WFreW4gicsICfmnpflhafphIknLCAn5Y+k5Z2R6YSJJywgJ+iOv+ahkOmEiScsICfopb/onrrpjq4nLCAn5LqM5bSZ6YSJJywgJ+WMl+a4r+mOricsXG4gICAgICAgICfmsLTmnpfphIknLCAn5Y+j5rmW6YSJJywgJ+Wbm+a5lumEiScsICflhYPplbfphIknXG4gICAgICBdLFxuICAgICAgWyc2MzAnLCAnNjMxJywgJzYzMicsICc2MzMnLCAnNjM0JywgJzYzNScsICc2MzYnLCAnNjM3JywgJzYzOCcsICc2NDAnLCAnNjQzJyxcbiAgICAgICAgJzY0NicsICc2NDcnLCAnNjQ4JywgJzY0OScsICc2NTEnLCAnNjUyJywgJzY1MycsICc2NTQnLCAnNjU1J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5Y+w5Y2X5biCXG4gICAgW1xuICAgICAgWyfkuK3opb/ljYAnLCAn5p2x5Y2AJywgJ+WNl+WNgCcsICfljJfljYAnLCAn5a6J5bmz5Y2AJywgJ+WuieWNl+WNgCcsICfmsLjlurfljYAnLCAn5q245LuB5Y2AJywgJ+aWsOWMluWNgCcsXG4gICAgICAgICflt6bpjq7ljYAnLCAn546J5LqV5Y2AJywgJ+aloOilv+WNgCcsICfljZfljJbljYAnLCAn5LuB5b635Y2AJywgJ+mXnOW7n+WNgCcsICfpvo3ltI7ljYAnLCAn5a6Y55Sw5Y2AJyxcbiAgICAgICAgJ+m6u+ixhuWNgCcsICfkvbPph4zljYAnLCAn6KW/5riv5Y2AJywgJ+S4g+iCoeWNgCcsICflsIfou43ljYAnLCAn5a2455Sy5Y2AJywgJ+WMl+mWgOWNgCcsICfmlrDnh5/ljYAnLFxuICAgICAgICAn5b6M5aOB5Y2AJywgJ+eZveays+WNgCcsICfmnbHlsbHljYAnLCAn5YWt55Sy5Y2AJywgJ+S4i+eHn+WNgCcsICfmn7Pnh5/ljYAnLCAn6bm95rC05Y2AJywgJ+WWhOWMluWNgCcsXG4gICAgICAgICflpKflhafljYAnLCAn5bGx5LiK5Y2AJywgJ+aWsOW4guWNgCcsICflronlrprljYAnXG4gICAgICBdLFxuICAgICAgWyc3MDAnLCAnNzAxJywgJzcwMicsICc3MDQnLCAnNzA4JywgJzcwOScsICc3MTAnLCAnNzExJywgJzcxMicsICc3MTMnLCAnNzE0JyxcbiAgICAgICAgJzcxNScsICc3MTYnLCAnNzE3JywgJzcxOCcsICc3MTknLCAnNzIwJywgJzcyMScsICc3MjInLCAnNzIzJywgJzcyNCcsICc3MjUnLFxuICAgICAgICAnNzI2JywgJzcyNycsICc3MzAnLCAnNzMxJywgJzczMicsICc3MzMnLCAnNzM0JywgJzczNScsICc3MzYnLCAnNzM3JywgJzc0MScsXG4gICAgICAgICc3NDInLCAnNzQzJywgJzc0NCcsICc3NDUnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDpq5jpm4TluIJcbiAgICBbXG4gICAgICBbJ+aWsOiIiOWNgCcsICfliY3ph5HljYAnLCAn6IuT6ZuF5Y2AJywgJ+m5veWfleWNgCcsICfpvJPlsbHljYAnLCAn5peX5rSl5Y2AJywgJ+WJjemOruWNgCcsICfkuInmsJHljYAnLFxuICAgICAgICAn5qWg5qKT5Y2AJywgJ+Wwj+a4r+WNgCcsICflt6bnh5/ljYAnLCAn5LuB5q2m5Y2AJywgJ+Wkp+ekvuWNgCcsICflsqHlsbHljYAnLCAn6Lev56u55Y2AJywgJ+mYv+iTruWNgCcsXG4gICAgICAgICfnlLDlr67ljYAnLCAn54eV5bei5Y2AJywgJ+api+mgreWNgCcsICfmopPlrpjljYAnLCAn5b2M6ZmA5Y2AJywgJ+awuOWuieWNgCcsICfmuZblhafljYAnLCAn6bOz5bGx5biCJyxcbiAgICAgICAgJ+Wkp+WvruWNgCcsICfmnpflnJLljYAnLCAn6bOl5p2+5Y2AJywgJ+Wkp+aoueWNgCcsICfml5flsbHljYAnLCAn576O5r+D5Y2AJywgJ+WFrem+nOWNgCcsICflhafploDljYAnLFxuICAgICAgICAn5p2J5p6X5Y2AJywgJ+eUsuS7meWNgCcsICfmoYPmupDljYAnLCAn6YKj55Gq5aSP5Y2AJywgJ+iMguael+WNgCcsICfojITokKPljYAnXG4gICAgICBdLFxuICAgICAgWyc4MDAnLCAnODAxJywgJzgwMicsICc4MDMnLCAnODA0JywgJzgwNScsICc4MDYnLCAnODA3JywgJzgxMScsICc4MTInLCAnODEzJyxcbiAgICAgICAgJzgxNCcsICc4MTUnLCAnODIwJywgJzgyMScsICc4MjInLCAnODIzJywgJzgyNCcsICc4MjUnLCAnODI2JywgJzgyNycsICc4MjgnLFxuICAgICAgICAnODI5JywgJzgzMCcsICc4MzEnLCAnODMyJywgJzgzMycsICc4NDAnLCAnODQyJywgJzg0MycsICc4NDQnLCAnODQ1JywgJzg0NicsXG4gICAgICAgICc4NDcnLCAnODQ4JywgJzg0OScsICc4NTEnLCAnODUyJ1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5r6O5rmW57ijXG4gICAgW1xuICAgICAgWyfppqzlhazluIInLCAn6KW/5ba86YSJJywgJ+acm+WuiemEiScsICfkuIPnvo7phIknLCAn55m95rKZ6YSJJywgJ+a5luilv+mEiSddLFxuICAgICAgWyc4ODAnLCAnODgxJywgJzg4MicsICc4ODMnLCAnODg0JywgJzg4NSddXG4gICAgXSxcbiAgICAvLyDlsY/mnbHnuKNcbiAgICBbXG4gICAgICBbJ+Wxj+adseW4gicsICfkuInlnLDploAnLCAn6Zyn5Y+w6YSJJywgJ+eRquWutumEiScsICfkuZ3lpoLphIknLCAn6YeM5riv6YSJJywgJ+mrmOaouemEiScsICfpub3ln5TphIknLFxuICAgICAgICAn6ZW35rK76YSJJywgJ+m6n+a0m+mEiScsICfnq7nnlLDphIknLCAn5YWn5Z+U6YSJJywgJ+iQrOS4uemEiScsICfmva7lt57pjq4nLCAn5rOw5q2m6YSJJywgJ+S+hue+qemEiScsXG4gICAgICAgICfokKzlt5LphIknLCAn5bSB6aCC6YSJJywgJ+aWsOWfpOmEiScsICfljZflt57phIknLCAn5p6X6YKK6YSJJywgJ+adsea4r+mOricsICfnkInnkIPphIknLCAn5L2z5Yas6YSJJyxcbiAgICAgICAgJ+aWsOWckumEiScsICfmnovlr67phIknLCAn5p6L5bGx6YSJJywgJ+aYpeaXpemEiScsICfnjYXlrZDphIknLCAn6LuK5Z+O6YSJJywgJ+eJoeS4uemEiScsICfmgYbmmKXpjq4nLFxuICAgICAgICAn5ru/5bee6YSJJ1xuICAgICAgXSxcbiAgICAgIFsnOTAwJywgJzkwMScsICc5MDInLCAnOTAzJywgJzkwNCcsICc5MDUnLCAnOTA2JywgJzkwNycsICc5MDgnLCAnOTA5JywgJzkxMScsXG4gICAgICAgICc5MTInLCAnOTEzJywgJzkyMCcsICc5MjEnLCAnOTIyJywgJzkyMycsICc5MjQnLCAnOTI1JywgJzkyNicsICc5MjcnLCAnOTI4JyxcbiAgICAgICAgJzkyOScsICc5MzEnLCAnOTMyJywgJzk0MCcsICc5NDEnLCAnOTQyJywgJzk0MycsICc5NDQnLCAnOTQ1JywgJzk0NicsICc5NDcnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDlj7DmnbHnuKNcbiAgICBbXG4gICAgICBbJ+WPsOadseW4gicsICfntqDls7bphIknLCAn6Jit5ba86YSJJywgJ+W7tuW5s+mEiScsICfljZHljZfphIknLCAn6bm/6YeO6YSJJywgJ+mXnOWxsemOricsICfmtbfnq6/phIknLFxuICAgICAgICAn5rGg5LiK6YSJJywgJ+adseays+mEiScsICfmiJDlip/pjq4nLCAn6ZW35r+x6YSJJywgJ+Wkqum6u+mHjCcsICfph5Hls7DphIknLCAn5aSn5q2m6YSJJywgJ+mBlOS7gemEiSdcbiAgICAgIF0sXG4gICAgICBbJzk1MCcsICc5NTEnLCAnOTUyJywgJzk1MycsICc5NTQnLCAnOTU1JywgJzk1NicsICc5NTcnLCAnOTU4JywgJzk1OScsICc5NjEnLFxuICAgICAgICAnOTYyJywgJzk2MycsICc5NjQnLCAnOTY1JywgJzk2NidcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOiKseiTrue4o1xuICAgIFtcbiAgICAgIFsn6Iqx6JOu5biCJywgJ+aWsOWfjumEiScsICfnp4DmnpfphIknLCAn5ZCJ5a6J6YSJJywgJ+WjveixkOmEiScsICfps7Pmnpfpjq4nLCAn5YWJ5b6p6YSJJywgJ+ixkOa/semEiScsXG4gICAgICAgICfnkZ7nqZfphIknLCAn6JCs5qau6YSJJywgJ+eOiemHjOmOricsICfljZPmuqrphIknLCAn5a+M6YeM6YSJJ1xuICAgICAgXSxcbiAgICAgIFsnOTcwJywgJzk3MScsICc5NzInLCAnOTczJywgJzk3NCcsICc5NzUnLCAnOTc2JywgJzk3NycsICc5NzgnLCAnOTc5JywgJzk4MScsXG4gICAgICAgICc5ODInLCAnOTgzJ1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g6YeR6ZaA57ijXG4gICAgW1xuICAgICAgWyfph5Hmspnpjq4nLCAn6YeR5rmW6Y6uJywgJ+mHkeWvp+mEiScsICfph5Hln47pjq4nLCAn54OI5ba86YSJJywgJ+eDj+WdtemEiSddLFxuICAgICAgWyc4OTAnLCAnODkxJywgJzg5MicsICc4OTMnLCAnODk0JywgJzg5NiddXG4gICAgXSxcbiAgICAvLyDpgKPmsZ/nuKNcbiAgICBbXG4gICAgICBbJ+WNl+erv+mEiScsICfljJfnq7/phIknLCAn6I6S5YWJ6YSJJywgJ+adseW8lemEiSddLFxuICAgICAgWycyMDknLCAnMjEwJywgJzIxMScsICcyMTInXVxuICAgIF0sXG4gICAgLy8g5Y2X5rW36Ku45bO2XG4gICAgW1xuICAgICAgWyfmnbHmspknLCAn5Y2X5rKZJ10sXG4gICAgICBbJzgxNycsICc4MTknXVxuICAgIF0sXG4gICAgLy8g6Yej6a2a5Y+w5YiX5ba8XG4gICAgW1xuICAgICAgWyfph6PprZrlj7DliJfltrwnXSxcbiAgICAgIFsnMjkwJ11cbiAgICBdXG4gIF1cblxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZU9wdGlvbnMoKSB7XG4gIC8vIENoZWNrIG9wdGlvbnMgcmVxdWlyZWRcbiAgaWYgKGFyZ3VtZW50c1sxXSkge1xuICAgIGdldE9wdGlvbnNSZXF1aXJlZChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbiAgXG4gIC8vIEV4dGVuZCBvcHRpb25zXG4gIHJldHVybiBnZXRPcHRpb25zRXh0ZW5kKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzJdKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc1JlcXVpcmVkKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNSZXF1aXJlZCkge1xuICB2YXIgZXJyb3IgPSAnJztcbiAgdmFyIGxlbmd0aCA9IG9wdGlvbnNSZXF1aXJlZC5sZW5ndGg7XG4gIG9wdGlvbnNDdXN0b20gPSBvcHRpb25zQ3VzdG9tIHx8IHt9O1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmICggISBvcHRpb25zQ3VzdG9tLmhhc093blByb3BlcnR5KG9wdGlvbnNSZXF1aXJlZFtsZW5ndGhdKSkgICAgICAgICAgXG4gICAgICBlcnJvciArPSBvcHRpb25zUmVxdWlyZWRbbGVuZ3RoXSArICcsJztcbiAgfVxuICBcbiAgaWYgKGVycm9yKSB0aHJvdyAn57y65bCR5Y+D5pW4OiAnICsgZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNFeHRlbmQob3B0aW9uc0N1c3RvbSwgb3B0aW9uc0RlZmF1bHQpIHtcbiAgaWYgKCAhIG9wdGlvbnNDdXN0b20pIHtcbiAgICByZXR1cm4gb3B0aW9uc0RlZmF1bHQ7XG4gIH1cbiAgXG4gIHZhciBwcm9wZXJ0eTtcbiAgZm9yIChwcm9wZXJ0eSBpbiBvcHRpb25zQ3VzdG9tKSB7XG4gICAgb3B0aW9uc0RlZmF1bHRbcHJvcGVydHldID0gb3B0aW9uc0N1c3RvbVtwcm9wZXJ0eV07XG4gIH1cbiAgXG4gIHJldHVybiBvcHRpb25zRGVmYXVsdDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNb2R1bGUgaW1wb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJztcbmltcG9ydCBoYW5kbGVPcHRpb25zIGZyb20gJy4vaGFuZGxlT3B0aW9ucyc7XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZHVsZSBleHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIHJvbGx1cCB0byBidWlsZCAqL1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIGJyb3dzZXJpZnkgdG8gYnVpbGQgKi9cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29uc3RydWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBUd0NpdHlTZWxlY3RvcigpIHtcbiAgLy8gLS0tIFNldHRpbmcgb3B0aW9ucyAtLS1cbiAgdmFyIG9wdGlvbnNDdXN0b20gPSBhcmd1bWVudHNbMF07XG4gIHZhciBvcHRpb25zUmVxdWlyZWQgPSBhcmd1bWVudHMubGVuZ3RoID8gWydlbCddIDogbnVsbDsgLy8g6Iul54Sh5Y+D5pW45YmH5LiN6Kit5b+F6KaB5Y+D5pW4XG4gIHZhciBvcHRpb25zRGVmYXVsdCA9IHtcbiAgICBlbDogbnVsbCxcbiAgICBlbENvdW50cnk6IG51bGwsXG4gICAgZWxEaXN0cmljdDogbnVsbCxcbiAgICBlbFppcGNvZGU6IG51bGwsXG4gICAgc2VsZWN0ZWRDb3VudHJ5OiBudWxsLCAvLyB7Ym9vbGVhbn0g6aCQ6Kit6YG45pOH55qE57ij5biCXG4gICAgc2VsZWN0ZWREaXN0cmljdDogbnVsbCwgLy97Ym9vbGVhbn0g6aCQ6Kit6YG45pOH55qE5Y2A5Z+fXG4gICAgb25seTogbnVsbCwgLy8ge2FycmF5fSDpmZDliLbpoa/npLrlk6rkupvnuKPluIJcbiAgICBzaG93WmlwY29kZTogZmFsc2UsIC8vIHtib29sZWFufSDmmK/lkKbpoa/npLrpg7XpgZ7ljYDomZ/mrITkvY1cbiAgICBjb3VudHJ5Q2xhc3NOYW1lOiAnY291bnRyeScsXG4gICAgY291bnRyeUZpbGVkTmFtZTogJ2NvdW50cnknLFxuICAgIGRpc3RyaWN0Q2xhc3NOYW1lOiAnZGlzdHJpY3QnLFxuICAgIGRpc3RyaWN0RmllbGROYW1lOiAnZGlzdHJpY3QnLFxuICAgIHppcGNvZGVDbGFzc05hbWU6ICd6aXBjb2RlJyxcbiAgICB6aXBjb2RlRmllbGROYW1lOiAnemlwY29kZSdcbiAgfTtcblxuICAvLyAtLS0gU2V0dGluZyBwcm9wZXJ0aWVzIC0tLVxuICB0aGlzLm9wdGlvbnMgPSBoYW5kbGVPcHRpb25zKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNSZXF1aXJlZCwgb3B0aW9uc0RlZmF1bHQpO1xuXG4gIC8vIOacieaMh+WumiBlbCDnmoTliJ3lp4vljJZcbiAgaWYgKHRoaXMub3B0aW9ucy5lbCkge1xuICAgIHRoaXMuZWwgPSBnZXRFbGVtZW50cyh0aGlzLm9wdGlvbnMuZWwpO1xuICAgIHRoaXMuZWxDb3VudHJ5ID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsQ291bnRyeSk7XG4gICAgdGhpcy5lbERpc3RyaWN0ID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsRGlzdHJpY3QpO1xuICAgIHRoaXMuZWxaaXBjb2RlID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsWmlwY29kZSk7XG4gICAgaW5pdC5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8g54Sh5oyH5a6aIGVs77yM5L2/55So56ym5ZCI55qEIGRhdGEtcm9sZSBET00g5L2c54K6IGVsXG4gIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInR3LWNpdHktc2VsZWN0b3JcIl0nKTtcbiAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICB2YXIgc2VsZiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpOyAvLyBjbG9uZSBvYmplY3TvvIzlm6Agb2JqZWN0IOeCuuWPg+iAg1xuXG4gICAgLy8g6YeN572u55u46Zec5ZCEIGVsIOioreWumlxuICAgIHNlbGYuZWwgPSBlbDtcbiAgICBzZWxmLmVsQ291bnRyeSA9IG51bGw7XG4gICAgc2VsZi5lbERpc3RyaWN0ID0gbnVsbDtcbiAgICBzZWxmLmVsWmlwY29kZSA9IG51bGw7XG5cbiAgICAvLyDpmZDliLbpoa/npLrlk6rkupvnuKPluIJcbiAgICBzZWxmLm9wdGlvbnMub25seSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5JylcbiAgICAgID8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHknKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykgLy8g5Y676Zmk56m655m95a2X5YWD77yM6L2J6Zmj5YiXXG4gICAgICA6IG51bGw7XG5cbiAgICAvLyDpoJDoqK3pgbjmk4fnmoTnuKPluIJcbiAgICBzZWxmLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHJ5ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkLWNvdW50cnknKTtcblxuICAgIC8vIOmgkOioremBuOaTh+eahOWNgOWfn1xuICAgIHNlbGYub3B0aW9ucy5zZWxlY3RlZERpc3RyaWN0ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkLWRpc3RyaWN0Jyk7XG5cbiAgICAvLyDmmK/lkKbpoa/npLrpg7XpgZ7ljYDomZ9cbiAgICBzZWxmLm9wdGlvbnMuc2hvd1ppcGNvZGUgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNob3ctemlwY29kZScpICE9IG51bGwpO1xuXG4gICAgaW5pdC5jYWxsKHNlbGYpO1xuICB9LCB0aGlzKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1YmxpYyBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuVHdDaXR5U2VsZWN0b3IucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXNldFNlbGVjdG9ycy5jYWxsKHRoaXMpO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHJpdmF0ZSBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgc2V0RWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgc2V0Q291bnRyeUNoYW5nZWQuY2FsbCh0aGlzKTtcbiAgc2V0RGlzdHJpY3RDaGFuZ2VkLmNhbGwodGhpcyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RlZENvdW50cnkpIHtcbiAgICBzZXRTZWxlY3RlZEl0ZW0uY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50cyhlbCkge1xuICBpZiAoICEgZWwpIHJldHVybiBudWxsO1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnRzKCkge1xuICAvLyDnuKPluILpgbjllq5cbiAgaWYgKCAhIHRoaXMuZWxDb3VudHJ5KSB7XG4gICAgdmFyIGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLmVsQ291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjb3VudHJ5KTtcbiAgfVxuXG4gIHRoaXMuZWxDb3VudHJ5LmlubmVySFRNTCA9IGdldENvdW50cnlPcHRpb25zKHRoaXMub3B0aW9ucy5vbmx5KTtcbiAgdGhpcy5lbENvdW50cnkuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5jb3VudHJ5Q2xhc3NOYW1lKTtcbiAgdGhpcy5lbENvdW50cnkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHJ5RmlsZWROYW1lO1xuXG4gIC8vIOWNgOWfn+mBuOWWrlxuICBpZiAoICEgdGhpcy5lbERpc3RyaWN0KSB7XG4gICAgdmFyIGRpc3RyaWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdGhpcy5lbERpc3RyaWN0ID0gZGlzdHJpY3Q7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChkaXN0cmljdCk7XG4gIH1cblxuICB0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zKCk7XG4gIHRoaXMuZWxEaXN0cmljdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmRpc3RyaWN0Q2xhc3NOYW1lKTtcbiAgdGhpcy5lbERpc3RyaWN0Lm5hbWUgPSB0aGlzLm9wdGlvbnMuZGlzdHJpY3RGaWVsZE5hbWU7XG5cbiAgLy8g6YO16YGe5Y2A6JmfXG4gIGlmICggISB0aGlzLmVsWmlwY29kZSkge1xuICAgIHZhciB6aXBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLmVsWmlwY29kZSA9IHppcGNvZGU7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh6aXBjb2RlKTtcbiAgfVxuXG4gIHRoaXMuZWxaaXBjb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuemlwY29kZUNsYXNzTmFtZSk7XG4gIHRoaXMuZWxaaXBjb2RlLm5hbWUgPSB0aGlzLm9wdGlvbnMuemlwY29kZUZpZWxkTmFtZTtcbiAgdGhpcy5lbFppcGNvZGUudHlwZSA9ICd0ZXh0JztcbiAgdGhpcy5lbFppcGNvZGUucmVhZE9ubHkgPSB0cnVlO1xuICB0aGlzLmVsWmlwY29kZS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgdGhpcy5lbFppcGNvZGUucGxhY2Vob2xkZXIgPSAn6YO16YGe5Y2A6JmfJztcbiAgdGhpcy5lbFppcGNvZGUuc3R5bGUud2lkdGggPSAnNmVtJztcbiAgdGhpcy5lbFppcGNvZGUuc3R5bGUuZGlzcGxheSA9IHRoaXMub3B0aW9ucy5zaG93WmlwY29kZSB8fCAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50cnlPcHRpb25zKG9ubHkpIHtcbiAgdmFyIG9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPumBuOaTh+e4o+W4gjwvb3B0aW9uPic7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBkYXRhLmNvdW50cnkubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgLy8g6Iul5pyJ6Kit5a6a6ZmQ5Yi26aGv56S655qE57ij5biC77yM5LiU6Kmy6aCF55uu5LiN5Zyo6Ieq6KiC57ij5biC5LitXG4gICAgaWYgKG9ubHkgJiYgQXJyYXkuaXNBcnJheShvbmx5KSAmJiBvbmx5LmluZGV4T2YoZGF0YS5jb3VudHJ5W2ldKSA9PT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGZvcm1hdDogPG9wdGlvbiB2YWx1ZT1cIuWPsOWMl+W4glwiIGRhdGEtaW5kZXg9XCIwXCI+5Y+w5YyX5biCPC9vcHRpb24+XG4gICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7ZGF0YS5jb3VudHJ5W2ldfVwiIGRhdGEtaW5kZXg9XCIke2l9XCI+JHtkYXRhLmNvdW50cnlbaV19PC9vcHRpb24+YDtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXREaXN0cmljdE9wdGlvbnMoaW5kZXgpIHtcbiAgaWYgKCAhIGluZGV4KSB7XG4gICAgcmV0dXJuICc8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ+LS0tPC9vcHRpb24+JztcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD7pgbjmk4fljYDln588L29wdGlvbj4nO1xuXG4gIGZvcih2YXIgaSA9IDAsIGogPSBkYXRhLmRpc3RyaWN0W2luZGV4XVswXS5sZW5ndGggLSAxOyBpIDw9IGo7IGkrKykge1xuICAgIC8vIGZvcm1hdDogPG9wdGlvbiB2YWx1ZT1cIuS4reato+WNgFwiIGRhdGEtemlwY29kZT1cIjEwMFwiPuS4reato+WNgDwvb3B0aW9uPlxuICAgIG9wdGlvbnMgKz0gYFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7ZGF0YS5kaXN0cmljdFtpbmRleF1bMF1baV19XCIgZGF0YS16aXBjb2RlPVwiJHtkYXRhLmRpc3RyaWN0W2luZGV4XVsxXVtpXX1cIj5cbiAgICAgICAgJHtkYXRhLmRpc3RyaWN0W2luZGV4XVswXVtpXX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIGA7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0Q291bnRyeUNoYW5nZWQoKSB7XG4gIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5lbENvdW50cnkucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKVxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpOyAvLyDlj5YgZGFkYS1pbmRleFxuICAgIHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoaW5kZXgpO1xuICAgIHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gJyc7XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLmVsQ291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0RGlzdHJpY3RDaGFuZ2VkKCkge1xuICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB6aXBjb2RlID0gdGhpcy5lbERpc3RyaWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJylcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtemlwY29kZScpOyAvLyDlj5YgZGFkYS16aXBjb2RlXG4gICAgICBcbiAgICB0aGlzLmVsWmlwY29kZS52YWx1ZSA9IHppcGNvZGU7XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLmVsRGlzdHJpY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGVkSXRlbSgpIHtcbiAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG5cbiAgdGhpcy5lbENvdW50cnkudmFsdWUgPSB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHJ5O1xuICB0aGlzLmVsQ291bnRyeS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkRGlzdHJpY3QpIHtcbiAgICB0aGlzLmVsRGlzdHJpY3QudmFsdWUgPSB0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdDtcbiAgICB0aGlzLmVsRGlzdHJpY3QuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRTZWxlY3RvcnMoKSB7XG4gIHRoaXMuZWxDb3VudHJ5LnNlbGVjdGVkSW5kZXggPSAwO1xuICB0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zKCk7XG4gIHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gJyc7XG4gIHJldHVybiB0aGlzO1xufVxuIl0sIm5hbWVzIjpbImRhdGEiLCJUd0NpdHlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSUEsU0FBTzs7V0FFRSxD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