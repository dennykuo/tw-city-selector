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
  [['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水區', '三芝區', '石門區'], ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228', '231', '232', '233', '234', '235', '236', '237', '238', '239', '241', '242', '243', '244', '247', '248', '249', '251', '252', '253']],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCIvVXNlcnMvZGVubnkvRHJvcGJveC8wMS3ntrLnq5nlsIjmoYgvZGstcGx1Z2lucy90dy1jaXR5LXNlbGVjdG9yL3NyYy9oYW5kbGVPcHRpb25zLmpzIiwiL1VzZXJzL2Rlbm55L0Ryb3Bib3gvMDEt57ay56uZ5bCI5qGIL2RrLXBsdWdpbnMvdHctY2l0eS1zZWxlY3Rvci9zcmMvdHctY2l0eS1zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBkYXRhO1xuXG52YXIgZGF0YSA9IHtcbiAgICAvLyDnuKPluIJcbiAgICBjb3VudHJ5OiBbXG4gICAgICAgICflj7DljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOerueW4gicsICfmlrDnq7nnuKMnLCAn6IuX5qCX57ijJyxcbiAgICAgICAgJ+WPsOS4reW4gicsICflvbDljJbnuKMnLCAn5Y2X5oqV57ijJywgJ+WYiee+qeW4gicsICflmInnvqnnuKMnLCAn6Zuy5p6X57ijJywgJ+WPsOWNl+W4gicsICfpq5jpm4TluIInLFxuICAgICAgICAn5r6O5rmW57ijJywgJ+Wxj+adsee4oycsICflj7DmnbHnuKMnLCAn6Iqx6JOu57ijJywgJ+mHkemWgOe4oycsICfpgKPmsZ/nuKMnLCAn5Y2X5rW36Ku45bO2JywgJ+mHo+mtmuWPsOWIl+W2vCdcbiAgICBdLFxuXG4gICAgLy8g5Y2A5Z+fXG4gICAgZGlzdHJpY3Q6IFtcbiAgICAgICAgLy8g5Y+w5YyX5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit5q2j5Y2AJywgJ+Wkp+WQjOWNgCcsICfkuK3lsbHljYAnLCAn5p2+5bGx5Y2AJywgJ+Wkp+WuieWNgCcsICfokKzoj6/ljYAnLCAn5L+h576p5Y2AJyxcbiAgICAgICAgICAgICflo6vmnpfljYAnLCfljJfmipXljYAnLCAn5YWn5rmW5Y2AJywgJ+WNl+a4r+WNgCcsICfmloflsbHljYAnXSxcblxuICAgICAgICAgICAgWycxMDAnLCAnMTAzJywgJzEwNCcsICcxMDUnLCAnMTA2JywgJzEwOCcsICcxMTAnLCAnMTExJywgJzExMicsICcxMTQnLCAnMTE1JywgJzExNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWfuumahuW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S7geaEm+WNgCcsICfkv6HnvqnljYAnLCAn5Lit5q2j5Y2AJywgJ+S4reWxseWNgCcsICflronmqILljYAnLCAn5pqW5pqW5Y2AJywgJ+S4g+WgteWNgCddLFxuXG4gICAgICAgICAgICBbJzIwMCcsICcyMDEnLCAnMjAyJywgJzIwMycsICcyMDQnLCAnMjA1JywgJzIwNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOaWsOWMl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+iQrOmHjOWNgCcsICfph5HlsbHljYAnLCAn5p2/5qmL5Y2AJywgJ+axkOatouWNgCcsICfmt7HlnZHljYAnLCAn55+z56KH5Y2AJywgJ+eRnuiKs+WNgCcsICflubPmuqrljYAnLFxuICAgICAgICAgICAgJ+mbmea6quWNgCcsICfosqLlr67ljYAnLCAn5paw5bqX5Y2AJywgJ+Wdquael+WNgCcsICfng4/kvobljYAnLCAn5rC45ZKM5Y2AJywgJ+S4reWSjOWNgCcsICflnJ/ln47ljYAnLFxuICAgICAgICAgICAgJ+S4ieWzveWNgCcsICfmqLnmnpfljYAnLCAn6bav5q2M5Y2AJywgJ+S4iemHjeWNgCcsICfmlrDojorljYAnLCAn5rOw5bGx5Y2AJywgJ+ael+WPo+WNgCcsICfomIbmtLLljYAnLFxuICAgICAgICAgICAgJ+S6lOiCoeWNgCcsICflhavph4zljYAnLCAn5reh5rC05Y2AJywgJ+S4ieiKneWNgCcsICfnn7PploDljYAnXSxcblxuICAgICAgICAgICAgWycyMDcnLCAnMjA4JywgJzIyMCcsICcyMjEnLCAnMjIyJywgJzIyMycsICcyMjQnLCAnMjI2JywgJzIyNycsICcyMjgnLFxuICAgICAgICAgICAgJzIzMScsICcyMzInLCAnMjMzJywgJzIzNCcsICcyMzUnLCAnMjM2JywgJzIzNycsICcyMzgnLCAnMjM5JywgJzI0MScsXG4gICAgICAgICAgICAnMjQyJywgJzI0MycsICcyNDQnLCAnMjQ3JywgJzI0OCcsICcyNDknLCAnMjUxJywgJzI1MicsICcyNTMnXG4gICAgICAgIF1cbiAgICBdLFxuICAgIC8vIOWunOiYree4o1xuICAgIFtcbiAgICAgICAgWyflrpzomK3luIInLCAn6aCt5Z+O6Y6uJywgJ+ekgea6qumEiScsICflo6/lnI3phIknLCAn5ZOh5bGx6YSJJywgJ+e+headsemOricsICfkuInmmJ/phIknLCAn5aSn5ZCM6YSJJyxcbiAgICAgICAgJ+S6lOe1kOmEiScsICflhqzlsbHphIknLCAn6JiH5r6z6Y6uJywgJ+WNl+a+s+mEiSddLFxuXG4gICAgICAgIFsnMjYwJywgJzI2MScsICcyNjInLCAnMjYzJywgJzI2NCcsICcyNjUnLCAnMjY2JywgJzI2NycsICcyNjgnLCAnMjY5JyxcbiAgICAgICAgJzI3MCcsICcyNzInXVxuICAgIF0sXG4gICAgLy8g5qGD5ZyS5biCXG5cdFtcblx0XHRbJ+S4reWjouWNgCcsICflubPpjq7ljYAnLCAn6b6N5r2t5Y2AJywgJ+aliuaiheWNgCcsICfmlrDlsYvljYAnLCAn6KeA6Z+z5Y2AJywgJ+ahg+WckuWNgCcsICfpvpzlsbHljYAnLFxuXHRcdCflhavlvrfljYAnLCAn5aSn5rqq5Y2AJywgJ+W+qeiIiOWNgCcsICflpKflnJLljYAnLCAn6JiG56u55Y2AJ10sXG5cblx0XHRbJzMyMCcsICczMjQnLCAnMzI1JywgJzMyNicsICczMjcnLCAnMzI4JywgJzMzMCcsICczMzMnLCAnMzM0JywgJzMzNScsXG5cdFx0JzMzNicsICczMzcnLCAnMzM4J11cbiAgICBdLFxuICAgIC8vIOaWsOerueW4glxuICAgIFtcbiAgICAgICAgWyfmnbHljYAnLCAn5YyX5Y2AJywgJ+mmmeWxseWNgCddLFxuXG4gICAgICAgIFsnMzAwJywgJzMwMCcsICczMDAnXSAvLyDmiJHmspLpqJnkurouLi5cbiAgICBdLFxuICAgIC8vIOaWsOeruee4o1xuICAgIFtcbiAgICAgICAgWyfnq7nljJfluIInLCAn5rmW5Y+j6YSJJywgJ+aWsOixkOmEiScsICfmlrDln5Tpjq4nLCAn6Zec6KW/6Y6uJywgJ+iKjuael+mEiScsICflr7blsbHphIknLFxuICAgICAgICAn56u55p2x6Y6uJywgJ+S6lOWzsOmEiScsICfmqavlsbHphIknLCAn5bCW55+z6YSJJywgJ+WMl+WflOmEiScsICfls6jnnInphIknXSxcblxuICAgICAgICBbJzMwMicsICczMDMnLCAnMzA0JywgJzMwNScsICczMDYnLCAnMzA3JywgJzMwOCcsICczMTAnLCAnMzExJyxcbiAgICAgICAgJzMxMicsICczMTMnLCAnMzE0JywgJzMxNSddXG4gICAgXSxcbiAgICAvLyDoi5fmoJfnuKNcbiAgICBbXG4gICAgICBbJ+erueWNl+mOricsICfpoK3ku73pjq4nLCAn5LiJ54Gj6YSJJywgJ+WNl+W6hOmEiScsICfnjYXmva3phIknLCAn5b6M6b6N6Y6uJywgJ+mAmumchOmOricsICfoi5Hoo6Hpjq4nLFxuICAgICAgICAn6IuX5qCX5biCJywgJ+mAoOapi+mEiScsICfpoK3lsYvphIknLCAn5YWs6aSo6YSJJywgJ+Wkp+a5lumEiScsICfms7DlronphIknLFxuICAgICAgICAn6YqF6ZG86YSJJywgJ+S4iee+qemEiScsICfopb/muZbphIknLCAn5Y2T6Jit6Y6uJ1xuICAgICAgXSxcbiAgICAgIFsnMzUwJywgJzM1MScsICczNTInLCAnMzUzJywgJzM1NCcsICczNTYnLCAnMzU3JywgJzM1OCcsICczNjAnLCAnMzYxJyxcbiAgICAgICAgJzM2MicsICczNjMnLCAnMzY0JywgJzM2NScsICczNjYnLCAnMzY3JywgJzM2OCcsICczNjknXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDlj7DkuK3luIJcbiAgICBbXG4gICAgICBbJ+S4reWNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+ilv+WNgCcsICfljJfljYAnLCAn5YyX5bGv5Y2AJywgJ+ilv+Wxr+WNgCcsICfljZflsa/ljYAnLCAn5aSq5bmz5Y2AJyxcbiAgICAgICAgJ+Wkp+mHjOWNgCcsICfpnKfls7DljYAnLCAn54OP5pel5Y2AJywgJ+ixkOWOn+WNgCcsICflkI7ph4zljYAnLCAn55+z5bKh5Y2AJywgJ+adseWLouWNgCcsICflkozlubPljYAnLFxuICAgICAgICAn5paw56S+5Y2AJywgJ+a9reWtkOWNgCcsICflpKfpm4XljYAnLCAn56We5bKh5Y2AJywgJ+Wkp+iCmuWNgCcsICfmspnpub/ljYAnLCAn6b6N5LqV5Y2AJywgJ+aip+ajsuWNgCcsXG4gICAgICAgICfmuIXmsLTljYAnLCAn5aSn55Sy5Y2AJywgJ+WkluWflOWNgCcsICflpKflronljYAnXG4gICAgICBdLFxuICAgICAgWyc0MDAnLCAnNDAxJywgJzQwMicsICc0MDMnLCAnNDA0JywgJzQwNicsICc0MDcnLCAnNDA4JywgJzQxMScsICc0MTInLFxuICAgICAgICAnNDEzJywgJzQxNCcsICc0MjAnLCAnNDIxJywgJzQyMicsICc0MjMnLCAnNDI0JywgJzQyNicsICc0MjcnLCAnNDI4JyxcbiAgICAgICAgJzQyOScsICc0MzInLCAnNDMzJywgJzQzNCcsICc0MzUnLCAnNDM2JywgJzQzNycsICc0MzgnLCAnNDM5J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5b2w5YyW57ijXG4gICAgW1xuICAgICAgWyflvbDljJbluIInLCAn6Iqs5ZyS6YSJJywgJ+iKseWjh+mEiScsICfnp4DmsLTphIknLCAn6bm/5riv6Y6uJywgJ+emj+iIiOmEiScsICfnt5ropb/phIknLCAn5ZKM576O6Y6uJyxcbiAgICAgICAgJ+S8uOa4r+mEiScsICflk6Hmnpfpjq4nLCAn56S+6aCt6YSJJywgJ+awuOmdlumEiScsICfln5Tlv4PphIknLCAn5rqq5rmW6Y6uJywgJ+Wkp+adkemEiScsICfln5Tpub3phIknLFxuICAgICAgICAn55Sw5Lit6Y6uJywgJ+WMl+aWl+mOricsICfnlLDlsL7phIknLCAn5Z+k6aCt6YSJJywgJ+a6quW3numEiScsICfnq7nloZjphIknLCAn5LqM5p6X6Y6uJywgJ+Wkp+WfjumEiScsXG4gICAgICAgICfoirPoi5HphIknLCAn5LqM5rC06YSJJ1xuICAgICAgXSxcbiAgICAgIFsnNTAwJywgJzUwMicsICc1MDMnLCAnNTA0JywgJzUwNScsICc1MDYnLCAnNTA3JywgJzUwOCcsICc1MDknLCAnNTEwJyxcbiAgICAgICAgJzUxMScsICc1MTInLCAnNTEzJywgJzUxNCcsICc1MTUnLCAnNTE2JywgJzUyMCcsICc1MjEnLCAnNTIyJywgJzUyMycsXG4gICAgICAgICc1MjQnLCAnNTI1JywgJzUyNicsICc1MjcnLCAnNTI4JywgJzUzMCdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOWNl+aKlee4o1xuICAgIFtcbiAgICAgIFsn5Y2X5oqV5biCJywgJ+S4reWvrumEiScsICfojYnlsa/pjq4nLCAn5ZyL5aeT6YSJJywgJ+WflOmHjOmOricsICfku4HmhJvphIknLCAn5ZCN6ZaT6YSJJywgJ+mbhumbhumOricsXG4gICAgICAgICfmsLTph4zphIknLCAn6a2a5rGg6YSJJywgJ+S/oee+qemEiScsICfnq7nlsbHpjq4nLCAn6bm/6LC36YSJJ1xuICAgICAgXSxcbiAgICAgIFsnNTQwJywgJzU0MScsICc1NDInLCAnNTQ0JywgJzU0NScsICc1NDYnLCAnNTUxJywgJzU1MicsICc1NTMnLCAnNTU1JyxcbiAgICAgICAgJzU1NicsICc1NTcnLCAnNTU4J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5ZiJ576p5biCXG4gICAgW1xuICAgICAgICBbJ+adseWNgCcsICfopb/ljYAnXSxcblxuICAgICAgICBbJzYwMCcsICc2MDAnXSAvLyDmiJHmspLpqJnkurouLi5cbiAgICBdLFxuICAgIC8vIOWYiee+qee4o1xuICAgIFtcbiAgICAgIFsn55Wq6Lev6YSJJywgJ+aiheWxsemEiScsICfnq7nltI7phIknLCAn6Zi/6YeM5bGxJywgJ+S4reWflOmEiScsICflpKfln5TphIknLCAn5rC05LiK6YSJJyxcbiAgICAgICAgJ+m5v+iNiemEiScsICflpKrkv53luIInLCAn5py05a2Q5biCJywgJ+adseefs+mEiScsICflha3ohbPphIknLCAn5paw5riv6YSJJywgJ+awkembhOmEiScsICflpKfmnpfpjq4nLFxuICAgICAgICAn5rqq5Y+j6YSJJywgJ+e+qeeruemEiScsICfluIPooovpjq4nXSxcblxuICAgICAgWyc2MDInLCAnNjAzJywgJzYwNCcsICc2MDUnLCAnNjA2JywgJzYwNycsICc2MDgnLCAnNjExJywgJzYxMicsXG4gICAgICAgICc2MTMnLCAnNjE0JywgJzYxNScsICc2MTYnLCAnNjIxJywgJzYyMicsICc2MjMnLCAnNjI0JywgJzYyNSdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOmbsuael+e4o1xuICAgIFtcbiAgICAgIFsn5paX5Y2X6Y6uJywgJ+Wkp+WfpOmEiScsICfomY7lsL7pjq4nLCAn5Zyf5bqr6Y6uJywgJ+ikkuW/oOmEiScsICfmnbHli6LphIknLCAn5Y+w6KW/6YSJJywgJ+W0meiDjOmEiScsXG4gICAgICAgICfpuqXlr67phIknLCAn5paX5YWt5biCJywgJ+ael+WFp+mEiScsICflj6TlnZHphIknLCAn6I6/5qGQ6YSJJywgJ+ilv+ieuumOricsICfkuozltJnphIknLCAn5YyX5riv6Y6uJyxcbiAgICAgICAgJ+awtOael+mEiScsICflj6PmuZbphIknLCAn5Zub5rmW6YSJJywgJ+WFg+mVt+mEiSdcbiAgICAgIF0sXG4gICAgICBbJzYzMCcsICc2MzEnLCAnNjMyJywgJzYzMycsICc2MzQnLCAnNjM1JywgJzYzNicsICc2MzcnLCAnNjM4JywgJzY0MCcsICc2NDMnLFxuICAgICAgICAnNjQ2JywgJzY0NycsICc2NDgnLCAnNjQ5JywgJzY1MScsICc2NTInLCAnNjUzJywgJzY1NCcsICc2NTUnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDlj7DljZfluIJcbiAgICBbXG4gICAgICBbJ+S4reilv+WNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+WMl+WNgCcsICflronlubPljYAnLCAn5a6J5Y2X5Y2AJywgJ+awuOW6t+WNgCcsICfmrbjku4HljYAnLCAn5paw5YyW5Y2AJyxcbiAgICAgICAgJ+W3pumOruWNgCcsICfnjonkupXljYAnLCAn5qWg6KW/5Y2AJywgJ+WNl+WMluWNgCcsICfku4HlvrfljYAnLCAn6Zec5buf5Y2AJywgJ+m+jeW0juWNgCcsICflrpjnlLDljYAnLFxuICAgICAgICAn6bq76LGG5Y2AJywgJ+S9s+mHjOWNgCcsICfopb/muK/ljYAnLCAn5LiD6IKh5Y2AJywgJ+Wwh+i7jeWNgCcsICflrbjnlLLljYAnLCAn5YyX6ZaA5Y2AJywgJ+aWsOeHn+WNgCcsXG4gICAgICAgICflvozlo4HljYAnLCAn55m95rKz5Y2AJywgJ+adseWxseWNgCcsICflha3nlLLljYAnLCAn5LiL54ef5Y2AJywgJ+afs+eHn+WNgCcsICfpub3msLTljYAnLCAn5ZaE5YyW5Y2AJyxcbiAgICAgICAgJ+Wkp+WFp+WNgCcsICflsbHkuIrljYAnLCAn5paw5biC5Y2AJywgJ+WuieWumuWNgCdcbiAgICAgIF0sXG4gICAgICBbJzcwMCcsICc3MDEnLCAnNzAyJywgJzcwNCcsICc3MDgnLCAnNzA5JywgJzcxMCcsICc3MTEnLCAnNzEyJywgJzcxMycsICc3MTQnLFxuICAgICAgICAnNzE1JywgJzcxNicsICc3MTcnLCAnNzE4JywgJzcxOScsICc3MjAnLCAnNzIxJywgJzcyMicsICc3MjMnLCAnNzI0JywgJzcyNScsXG4gICAgICAgICc3MjYnLCAnNzI3JywgJzczMCcsICc3MzEnLCAnNzMyJywgJzczMycsICc3MzQnLCAnNzM1JywgJzczNicsICc3MzcnLCAnNzQxJyxcbiAgICAgICAgJzc0MicsICc3NDMnLCAnNzQ0JywgJzc0NSdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOmrmOmbhOW4glxuICAgIFtcbiAgICAgIFsn5paw6IiI5Y2AJywgJ+WJjemHkeWNgCcsICfoi5Ppm4XljYAnLCAn6bm95Z+V5Y2AJywgJ+m8k+WxseWNgCcsICfml5fmtKXljYAnLCAn5YmN6Y6u5Y2AJywgJ+S4ieawkeWNgCcsXG4gICAgICAgICfmpaDmopPljYAnLCAn5bCP5riv5Y2AJywgJ+W3pueHn+WNgCcsICfku4HmrabljYAnLCAn5aSn56S+5Y2AJywgJ+WyoeWxseWNgCcsICfot6/nq7nljYAnLCAn6Zi/6JOu5Y2AJyxcbiAgICAgICAgJ+eUsOWvruWNgCcsICfnh5Xlt6LljYAnLCAn5qmL6aCt5Y2AJywgJ+aik+WumOWNgCcsICflvYzpmYDljYAnLCAn5rC45a6J5Y2AJywgJ+a5luWFp+WNgCcsICfps7PlsbHluIInLFxuICAgICAgICAn5aSn5a+u5Y2AJywgJ+ael+WckuWNgCcsICfps6Xmnb7ljYAnLCAn5aSn5qi55Y2AJywgJ+aXl+WxseWNgCcsICfnvo7mv4PljYAnLCAn5YWt6b6c5Y2AJywgJ+WFp+mWgOWNgCcsXG4gICAgICAgICfmnYnmnpfljYAnLCAn55Sy5LuZ5Y2AJywgJ+ahg+a6kOWNgCcsICfpgqPnkarlpI/ljYAnLCAn6IyC5p6X5Y2AJywgJ+iMhOiQo+WNgCdcbiAgICAgIF0sXG4gICAgICBbJzgwMCcsICc4MDEnLCAnODAyJywgJzgwMycsICc4MDQnLCAnODA1JywgJzgwNicsICc4MDcnLCAnODExJywgJzgxMicsICc4MTMnLFxuICAgICAgICAnODE0JywgJzgxNScsICc4MjAnLCAnODIxJywgJzgyMicsICc4MjMnLCAnODI0JywgJzgyNScsICc4MjYnLCAnODI3JywgJzgyOCcsXG4gICAgICAgICc4MjknLCAnODMwJywgJzgzMScsICc4MzInLCAnODMzJywgJzg0MCcsICc4NDInLCAnODQzJywgJzg0NCcsICc4NDUnLCAnODQ2JyxcbiAgICAgICAgJzg0NycsICc4NDgnLCAnODQ5JywgJzg1MScsICc4NTInXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDmvo7muZbnuKNcbiAgICBbXG4gICAgICBbJ+mmrOWFrOW4gicsICfopb/ltrzphIknLCAn5pyb5a6J6YSJJywgJ+S4g+e+jumEiScsICfnmb3mspnphIknLCAn5rmW6KW/6YSJJ10sXG4gICAgICBbJzg4MCcsICc4ODEnLCAnODgyJywgJzg4MycsICc4ODQnLCAnODg1J11cbiAgICBdLFxuICAgIC8vIOWxj+adsee4o1xuICAgIFtcbiAgICAgIFsn5bGP5p2x5biCJywgJ+S4ieWcsOmWgCcsICfpnKflj7DphIknLCAn55Gq5a626YSJJywgJ+S5neWmgumEiScsICfph4zmuK/phIknLCAn6auY5qi56YSJJywgJ+m5veWflOmEiScsXG4gICAgICAgICfplbfmsrvphIknLCAn6bqf5rSb6YSJJywgJ+erueeUsOmEiScsICflhafln5TphIknLCAn6JCs5Li56YSJJywgJ+a9ruW3numOricsICfms7DmrabphIknLCAn5L6G576p6YSJJyxcbiAgICAgICAgJ+iQrOW3kumEiScsICfltIHpoILphIknLCAn5paw5Z+k6YSJJywgJ+WNl+W3numEiScsICfmnpfpgorphIknLCAn5p2x5riv6Y6uJywgJ+eQieeQg+mEiScsICfkvbPlhqzphIknLFxuICAgICAgICAn5paw5ZyS6YSJJywgJ+aei+WvrumEiScsICfmnovlsbHphIknLCAn5pil5pel6YSJJywgJ+eNheWtkOmEiScsICfou4rln47phIknLCAn54mh5Li56YSJJywgJ+aBhuaYpemOricsXG4gICAgICAgICfmu7/lt57phIknXG4gICAgICBdLFxuICAgICAgWyc5MDAnLCAnOTAxJywgJzkwMicsICc5MDMnLCAnOTA0JywgJzkwNScsICc5MDYnLCAnOTA3JywgJzkwOCcsICc5MDknLCAnOTExJyxcbiAgICAgICAgJzkxMicsICc5MTMnLCAnOTIwJywgJzkyMScsICc5MjInLCAnOTIzJywgJzkyNCcsICc5MjUnLCAnOTI2JywgJzkyNycsICc5MjgnLFxuICAgICAgICAnOTI5JywgJzkzMScsICc5MzInLCAnOTQwJywgJzk0MScsICc5NDInLCAnOTQzJywgJzk0NCcsICc5NDUnLCAnOTQ2JywgJzk0NydcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOWPsOadsee4o1xuICAgIFtcbiAgICAgIFsn5Y+w5p2x5biCJywgJ+e2oOWztumEiScsICfomK3ltrzphIknLCAn5bu25bmz6YSJJywgJ+WNkeWNl+mEiScsICfpub/ph47phIknLCAn6Zec5bGx6Y6uJywgJ+a1t+err+mEiScsXG4gICAgICAgICfmsaDkuIrphIknLCAn5p2x5rKz6YSJJywgJ+aIkOWKn+mOricsICfplbfmv7HphIknLCAn5aSq6bq76YeMJywgJ+mHkeWzsOmEiScsICflpKfmrabphIknLCAn6YGU5LuB6YSJJ1xuICAgICAgXSxcbiAgICAgIFsnOTUwJywgJzk1MScsICc5NTInLCAnOTUzJywgJzk1NCcsICc5NTUnLCAnOTU2JywgJzk1NycsICc5NTgnLCAnOTU5JywgJzk2MScsXG4gICAgICAgICc5NjInLCAnOTYzJywgJzk2NCcsICc5NjUnLCAnOTY2J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g6Iqx6JOu57ijXG4gICAgW1xuICAgICAgWyfoirHok67luIInLCAn5paw5Z+O6YSJJywgJ+engOael+mEiScsICflkInlronphIknLCAn5aO96LGQ6YSJJywgJ+mzs+ael+mOricsICflhYnlvqnphIknLCAn6LGQ5r+x6YSJJyxcbiAgICAgICAgJ+eRnuepl+mEiScsICfokKzmpq7phIknLCAn546J6YeM6Y6uJywgJ+WNk+a6qumEiScsICflr4zph4zphIknXG4gICAgICBdLFxuICAgICAgWyc5NzAnLCAnOTcxJywgJzk3MicsICc5NzMnLCAnOTc0JywgJzk3NScsICc5NzYnLCAnOTc3JywgJzk3OCcsICc5NzknLCAnOTgxJyxcbiAgICAgICAgJzk4MicsICc5ODMnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDph5HploDnuKNcbiAgICBbXG4gICAgICBbJ+mHkeaymemOricsICfph5HmuZbpjq4nLCAn6YeR5a+n6YSJJywgJ+mHkeWfjumOricsICfng4jltrzphIknLCAn54OP5Z216YSJJ10sXG4gICAgICBbJzg5MCcsICc4OTEnLCAnODkyJywgJzg5MycsICc4OTQnLCAnODk2J11cbiAgICBdLFxuICAgIC8vIOmAo+axn+e4o1xuICAgIFtcbiAgICAgIFsn5Y2X56u/6YSJJywgJ+WMl+erv+mEiScsICfojpLlhYnphIknLCAn5p2x5byV6YSJJ10sXG4gICAgICBbJzIwOScsICcyMTAnLCAnMjExJywgJzIxMiddXG4gICAgXSxcbiAgICAvLyDljZfmtbfoq7jls7ZcbiAgICBbXG4gICAgICBbJ+adseaymScsICfljZfmspknXSxcbiAgICAgIFsnODE3JywgJzgxOSddXG4gICAgXSxcbiAgICAvLyDph6PprZrlj7DliJfltrxcbiAgICBbXG4gICAgICBbJ+mHo+mtmuWPsOWIl+W2vCddLFxuICAgICAgWycyOTAnXVxuICAgIF1cbiAgXVxuXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlT3B0aW9ucygpIHtcbiAgLy8gQ2hlY2sgb3B0aW9ucyByZXF1aXJlZFxuICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgZ2V0T3B0aW9uc1JlcXVpcmVkKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuICBcbiAgLy8gRXh0ZW5kIG9wdGlvbnNcbiAgcmV0dXJuIGdldE9wdGlvbnNFeHRlbmQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMl0pO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zUmVxdWlyZWQob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkKSB7XG4gIHZhciBlcnJvciA9ICcnO1xuICB2YXIgbGVuZ3RoID0gb3B0aW9uc1JlcXVpcmVkLmxlbmd0aDtcbiAgb3B0aW9uc0N1c3RvbSA9IG9wdGlvbnNDdXN0b20gfHwge307XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKCAhIG9wdGlvbnNDdXN0b20uaGFzT3duUHJvcGVydHkob3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0pKSAgICAgICAgICBcbiAgICAgIGVycm9yICs9IG9wdGlvbnNSZXF1aXJlZFtsZW5ndGhdICsgJywnO1xuICB9XG4gIFxuICBpZiAoZXJyb3IpIHRocm93ICfnvLrlsJHlj4Pmlbg6ICcgKyBlcnJvcjtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0V4dGVuZChvcHRpb25zQ3VzdG9tLCBvcHRpb25zRGVmYXVsdCkge1xuICBpZiAoICEgb3B0aW9uc0N1c3RvbSkge1xuICAgIHJldHVybiBvcHRpb25zRGVmYXVsdDtcbiAgfVxuICBcbiAgdmFyIHByb3BlcnR5O1xuICBmb3IgKHByb3BlcnR5IGluIG9wdGlvbnNDdXN0b20pIHtcbiAgICBvcHRpb25zRGVmYXVsdFtwcm9wZXJ0eV0gPSBvcHRpb25zQ3VzdG9tW3Byb3BlcnR5XTtcbiAgfVxuICBcbiAgcmV0dXJuIG9wdGlvbnNEZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZHVsZSBpbXBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGhhbmRsZU9wdGlvbnMgZnJvbSAnLi9oYW5kbGVPcHRpb25zJztcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kdWxlIGV4cG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBkZWZhdWx0IFR3Q2l0eVNlbGVjdG9yOyAvKiB1c2Ugcm9sbHVwIHRvIGJ1aWxkICovXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFR3Q2l0eVNlbGVjdG9yOyAvKiB1c2UgYnJvd3NlcmlmeSB0byBidWlsZCAqL1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb25zdHJ1Y3RvclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIFR3Q2l0eVNlbGVjdG9yKCkge1xuICAvLyAtLS0gU2V0dGluZyBvcHRpb25zIC0tLVxuICB2YXIgb3B0aW9uc0N1c3RvbSA9IGFyZ3VtZW50c1swXTtcbiAgdmFyIG9wdGlvbnNSZXF1aXJlZCA9IGFyZ3VtZW50cy5sZW5ndGggPyBbJ2VsJ10gOiBudWxsOyAvLyDoi6XnhKHlj4PmlbjliYfkuI3oqK3lv4XopoHlj4PmlbhcbiAgdmFyIG9wdGlvbnNEZWZhdWx0ID0ge1xuICAgIGVsOiBudWxsLFxuICAgIGVsQ291bnRyeTogbnVsbCxcbiAgICBlbERpc3RyaWN0OiBudWxsLFxuICAgIGVsWmlwY29kZTogbnVsbCxcbiAgICBzZWxlY3RlZENvdW50cnk6IG51bGwsIC8vIHtib29sZWFufSDpoJDoqK3pgbjmk4fnmoTnuKPluIJcbiAgICBzZWxlY3RlZERpc3RyaWN0OiBudWxsLCAvL3tib29sZWFufSDpoJDoqK3pgbjmk4fnmoTljYDln59cbiAgICBvbmx5OiBudWxsLCAvLyB7YXJyYXl9IOmZkOWItumhr+ekuuWTquS6m+e4o+W4glxuICAgIHNob3daaXBjb2RlOiBmYWxzZSwgLy8ge2Jvb2xlYW59IOaYr+WQpumhr+ekuumDtemBnuWNgOiZn+ashOS9jVxuICAgIGNvdW50cnlDbGFzc05hbWU6ICdjb3VudHJ5JyxcbiAgICBjb3VudHJ5RmlsZWROYW1lOiAnY291bnRyeScsXG4gICAgZGlzdHJpY3RDbGFzc05hbWU6ICdkaXN0cmljdCcsXG4gICAgZGlzdHJpY3RGaWVsZE5hbWU6ICdkaXN0cmljdCcsXG4gICAgemlwY29kZUNsYXNzTmFtZTogJ3ppcGNvZGUnLFxuICAgIHppcGNvZGVGaWVsZE5hbWU6ICd6aXBjb2RlJ1xuICB9O1xuXG4gIC8vIC0tLSBTZXR0aW5nIHByb3BlcnRpZXMgLS0tXG4gIHRoaXMub3B0aW9ucyA9IGhhbmRsZU9wdGlvbnMob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkLCBvcHRpb25zRGVmYXVsdCk7XG5cbiAgLy8g5pyJ5oyH5a6aIGVsIOeahOWIneWni+WMllxuICBpZiAodGhpcy5vcHRpb25zLmVsKSB7XG4gICAgdGhpcy5lbCA9IGdldEVsZW1lbnRzKHRoaXMub3B0aW9ucy5lbCk7XG4gICAgdGhpcy5lbENvdW50cnkgPSBnZXRFbGVtZW50cyh0aGlzLm9wdGlvbnMuZWxDb3VudHJ5KTtcbiAgICB0aGlzLmVsRGlzdHJpY3QgPSBnZXRFbGVtZW50cyh0aGlzLm9wdGlvbnMuZWxEaXN0cmljdCk7XG4gICAgdGhpcy5lbFppcGNvZGUgPSBnZXRFbGVtZW50cyh0aGlzLm9wdGlvbnMuZWxaaXBjb2RlKTtcbiAgICBpbml0LmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyDnhKHmjIflrpogZWzvvIzkvb/nlKjnrKblkIjnmoQgZGF0YS1yb2xlIERPTSDkvZzngrogZWxcbiAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidHctY2l0eS1zZWxlY3RvclwiXScpO1xuICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgIHZhciBzZWxmID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7IC8vIGNsb25lIG9iamVjdO+8jOWboCBvYmplY3Qg54K65Y+D6ICDXG5cbiAgICAvLyDph43nva7nm7jpl5zlkIQgZWwg6Kit5a6aXG4gICAgc2VsZi5lbCA9IGVsO1xuICAgIHNlbGYuZWxDb3VudHJ5ID0gbnVsbDtcbiAgICBzZWxmLmVsRGlzdHJpY3QgPSBudWxsO1xuICAgIHNlbGYuZWxaaXBjb2RlID0gbnVsbDtcblxuICAgIC8vIOmZkOWItumhr+ekuuWTquS6m+e4o+W4glxuICAgIHNlbGYub3B0aW9ucy5vbmx5ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHknKVxuICAgICAgPyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seScpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKSAvLyDljrvpmaTnqbrnmb3lrZflhYPvvIzovYnpmaPliJdcbiAgICAgIDogbnVsbDtcblxuICAgIC8vIOmgkOioremBuOaTh+eahOe4o+W4glxuICAgIHNlbGYub3B0aW9ucy5zZWxlY3RlZENvdW50cnkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtY291bnRyeScpO1xuXG4gICAgLy8g6aCQ6Kit6YG45pOH55qE5Y2A5Z+fXG4gICAgc2VsZi5vcHRpb25zLnNlbGVjdGVkRGlzdHJpY3QgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtZGlzdHJpY3QnKTtcblxuICAgIC8vIOaYr+WQpumhr+ekuumDtemBnuWNgOiZn1xuICAgIHNlbGYub3B0aW9ucy5zaG93WmlwY29kZSA9IChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvdy16aXBjb2RlJykgIT0gbnVsbCk7XG5cbiAgICBpbml0LmNhbGwoc2VsZik7XG4gIH0sIHRoaXMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHVibGljIE1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5Ud0NpdHlTZWxlY3Rvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlc2V0U2VsZWN0b3JzLmNhbGwodGhpcyk7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQcml2YXRlIE1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBpbml0KCkge1xuICBzZXRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICBzZXRDb3VudHJ5Q2hhbmdlZC5jYWxsKHRoaXMpO1xuICBzZXREaXN0cmljdENoYW5nZWQuY2FsbCh0aGlzKTtcblxuICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkQ291bnRyeSkge1xuICAgIHNldFNlbGVjdGVkSXRlbS5jYWxsKHRoaXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzKGVsKSB7XG4gIGlmICggISBlbCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudHMoKSB7XG4gIC8vIOe4o+W4gumBuOWWrlxuICBpZiAoICEgdGhpcy5lbENvdW50cnkpIHtcbiAgICB2YXIgY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHRoaXMuZWxDb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGNvdW50cnkpO1xuICB9XG5cbiAgdGhpcy5lbENvdW50cnkuaW5uZXJIVE1MID0gZ2V0Q291bnRyeU9wdGlvbnModGhpcy5vcHRpb25zLm9ubHkpO1xuICB0aGlzLmVsQ291bnRyeS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmNvdW50cnlDbGFzc05hbWUpO1xuICB0aGlzLmVsQ291bnRyeS5uYW1lID0gdGhpcy5vcHRpb25zLmNvdW50cnlGaWxlZE5hbWU7XG5cbiAgLy8g5Y2A5Z+f6YG45ZauXG4gIGlmICggISB0aGlzLmVsRGlzdHJpY3QpIHtcbiAgICB2YXIgZGlzdHJpY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLmVsRGlzdHJpY3QgPSBkaXN0cmljdDtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGRpc3RyaWN0KTtcbiAgfVxuXG4gIHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoKTtcbiAgdGhpcy5lbERpc3RyaWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuZGlzdHJpY3RDbGFzc05hbWUpO1xuICB0aGlzLmVsRGlzdHJpY3QubmFtZSA9IHRoaXMub3B0aW9ucy5kaXN0cmljdEZpZWxkTmFtZTtcblxuICAvLyDpg7XpgZ7ljYDomZ9cbiAgaWYgKCAhIHRoaXMuZWxaaXBjb2RlKSB7XG4gICAgdmFyIHppcGNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuZWxaaXBjb2RlID0gemlwY29kZTtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHppcGNvZGUpO1xuICB9XG5cbiAgdGhpcy5lbFppcGNvZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy56aXBjb2RlQ2xhc3NOYW1lKTtcbiAgdGhpcy5lbFppcGNvZGUubmFtZSA9IHRoaXMub3B0aW9ucy56aXBjb2RlRmllbGROYW1lO1xuICB0aGlzLmVsWmlwY29kZS50eXBlID0gJ3RleHQnO1xuICB0aGlzLmVsWmlwY29kZS5yZWFkT25seSA9IHRydWU7XG4gIHRoaXMuZWxaaXBjb2RlLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICB0aGlzLmVsWmlwY29kZS5wbGFjZWhvbGRlciA9ICfpg7XpgZ7ljYDomZ8nO1xuICB0aGlzLmVsWmlwY29kZS5zdHlsZS53aWR0aCA9ICc2ZW0nO1xuICB0aGlzLmVsWmlwY29kZS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcHRpb25zLnNob3daaXBjb2RlIHx8ICdub25lJztcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRyeU9wdGlvbnMob25seSkge1xuICB2YXIgb3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+6YG45pOH57ij5biCPC9vcHRpb24+JztcblxuICBmb3IgKHZhciBpID0gMCwgaiA9IGRhdGEuY291bnRyeS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAvLyDoi6XmnInoqK3lrprpmZDliLbpoa/npLrnmoTnuKPluILvvIzkuJToqbLpoIXnm67kuI3lnKjoh6roqILnuKPluILkuK1cbiAgICBpZiAob25seSAmJiBBcnJheS5pc0FycmF5KG9ubHkpICYmIG9ubHkuaW5kZXhPZihkYXRhLmNvdW50cnlbaV0pID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi5Y+w5YyX5biCXCIgZGF0YS1pbmRleD1cIjBcIj7lj7DljJfluII8L29wdGlvbj5cbiAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmNvdW50cnlbaV19XCIgZGF0YS1pbmRleD1cIiR7aX1cIj4ke2RhdGEuY291bnRyeVtpXX08L29wdGlvbj5gO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCkge1xuICBpZiAoICEgaW5kZXgpIHtcbiAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD4tLS08L29wdGlvbj4nO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPumBuOaTh+WNgOWfnzwvb3B0aW9uPic7XG5cbiAgZm9yKHZhciBpID0gMCwgaiA9IGRhdGEuZGlzdHJpY3RbaW5kZXhdWzBdLmxlbmd0aCAtIDE7IGkgPD0gajsgaSsrKSB7XG4gICAgLy8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi5Lit5q2j5Y2AXCIgZGF0YS16aXBjb2RlPVwiMTAwXCI+5Lit5q2j5Y2APC9vcHRpb24+XG4gICAgb3B0aW9ucyArPSBgXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmRpc3RyaWN0W2luZGV4XVswXVtpXX1cIiBkYXRhLXppcGNvZGU9XCIke2RhdGEuZGlzdHJpY3RbaW5kZXhdWzFdW2ldfVwiPlxuICAgICAgICAke2RhdGEuZGlzdHJpY3RbaW5kZXhdWzBdW2ldfVxuICAgICAgPC9vcHRpb24+XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRDb3VudHJ5Q2hhbmdlZCgpIHtcbiAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmVsQ291bnRyeS5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7IC8vIOWPliBkYWRhLWluZGV4XG4gICAgdGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCk7XG4gICAgdGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuZWxDb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBzZXREaXN0cmljdENoYW5nZWQoKSB7XG4gIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHppcGNvZGUgPSB0aGlzLmVsRGlzdHJpY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKVxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS16aXBjb2RlJyk7IC8vIOWPliBkYWRhLXppcGNvZGVcbiAgICAgIFxuICAgIHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gemlwY29kZTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuZWxEaXN0cmljdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRJdGVtKCkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcblxuICB0aGlzLmVsQ291bnRyeS52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZENvdW50cnk7XG4gIHRoaXMuZWxDb3VudHJ5LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCkge1xuICAgIHRoaXMuZWxEaXN0cmljdC52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZERpc3RyaWN0O1xuICAgIHRoaXMuZWxEaXN0cmljdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFNlbGVjdG9ycygpIHtcbiAgdGhpcy5lbENvdW50cnkuc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoKTtcbiAgdGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcbiAgcmV0dXJuIHRoaXM7XG59XG4iXSwibmFtZXMiOlsiZGF0YSIsIlR3Q2l0eVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFJQSxTQUFPOztXQUVFLENBQ0wsS0FESyxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBRUwsS0FGSyxFQUVFLEtBRkYsRUFFUyxLQUZULEVBRWdCLEtBRmhCLEVBRXVCLEtBRnZCLEVBRThCLEtBRjlCLEVBRXFDLEtBRnJDLEVBRTRDLEtBRjVDLEVBR0wsS0FISyxFQUdFLEtBSEYsRUFHUyxLQUhULEVBR2dCLEtBSGhCLEVBR3VCLEtBSHZCLEVBRzhCLEtBSDlCLEVBR3FDLE1BSHJDLEVBRzZDLE9BSDdDLENBRkY7OztZQVNHOztHQUdGLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQ0EsS0FEQSxFQUNNLEtBRE4sRUFDYSxLQURiLEVBQ29CLEtBRHBCLEVBQzJCLEtBRDNCLENBREosRUFJSSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUE4RSxLQUE5RSxDQUpKLENBRk07O0dBVUYsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsQ0FESixFQUdJLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLENBSEosQ0FUTTs7R0FnQkYsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDQSxLQURBLEVBQ08sS0FEUCxFQUNjLEtBRGQsRUFDcUIsS0FEckIsRUFDNEIsS0FENUIsRUFDbUMsS0FEbkMsRUFDMEMsS0FEMUMsRUFDaUQsS0FEakQsRUFFQSxLQUZBLEVBRU8sS0FGUCxFQUVjLEtBRmQsRUFFcUIsS0FGckIsRUFFNEIsS0FGNUIsRUFFbUMsS0FGbkMsRUFFMEMsS0FGMUMsRUFFaUQsS0FGakQsRUFHQSxLQUhBLEVBR08sS0FIUCxFQUdjLEtBSGQsRUFHcUIsS0FIckIsRUFHNEIsS0FINUIsQ0FESixFQU1JLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQ0EsS0FEQSxFQUNPLEtBRFAsRUFDYyxLQURkLEVBQ3FCLEtBRHJCLEVBQzRCLEtBRDVCLEVBQ21DLEtBRG5DLEVBQzBDLEtBRDFDLEVBQ2lELEtBRGpELEVBQ3dELEtBRHhELEVBQytELEtBRC9ELEVBRUEsS0FGQSxFQUVPLEtBRlAsRUFFYyxLQUZkLEVBRXFCLEtBRnJCLEVBRTRCLEtBRjVCLEVBRW1DLEtBRm5DLEVBRTBDLEtBRjFDLEVBRWlELEtBRmpELEVBRXdELEtBRnhELENBTkosQ0FmTTs7R0E0Qk4sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDQSxLQURBLEVBQ08sS0FEUCxFQUNjLEtBRGQsRUFDcUIsS0FEckIsQ0FESixFQUlJLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQ0EsS0FEQSxFQUNPLEtBRFAsQ0FKSixDQTNCVTs7R0FvQ1osQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDQSxLQURBLEVBQ08sS0FEUCxFQUNjLEtBRGQsRUFDcUIsS0FEckIsRUFDNEIsS0FENUIsQ0FERCxFQUlDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQ0EsS0FEQSxFQUNPLEtBRFAsRUFDYyxLQURkLENBSkQsQ0FuQ2E7O0dBNENOLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBREosRUFHSSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUhKO0dBM0NVOztHQWtETixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUNBLEtBREEsRUFDTyxLQURQLEVBQ2MsS0FEZCxFQUNxQixLQURyQixFQUM0QixLQUQ1QixFQUNtQyxLQURuQyxDQURKLEVBSUksQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFDQSxLQURBLEVBQ08sS0FEUCxFQUNjLEtBRGQsRUFDcUIsS0FEckIsQ0FKSixDQWpEVTs7R0EwRFIsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixFQUNxQyxLQURyQyxFQUVFLEtBRkYsRUFFUyxLQUZULEVBRWdCLEtBRmhCLEVBRXVCLEtBRnZCLENBREYsRUFLRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELENBTEYsQ0F6RFU7O0dBb0VSLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELEVBQ0UsS0FERixFQUNTLEtBRFQsRUFDZ0IsS0FEaEIsRUFDdUIsS0FEdkIsRUFDOEIsS0FEOUIsRUFDcUMsS0FEckMsRUFDNEMsS0FENUMsRUFDbUQsS0FEbkQsRUFFRSxLQUZGLEVBRVMsS0FGVCxFQUVnQixLQUZoQixFQUV1QixLQUZ2QixFQUU4QixLQUY5QixFQUVxQyxLQUZyQyxFQUU0QyxLQUY1QyxFQUVtRCxLQUZuRCxFQUdFLEtBSEYsRUFHUyxLQUhULEVBR2dCLEtBSGhCLEVBR3VCLEtBSHZCLENBREYsRUFNRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELEVBQzBELEtBRDFELEVBQ2lFLEtBRGpFLEVBRUUsS0FGRixFQUVTLEtBRlQsRUFFZ0IsS0FGaEIsRUFFdUIsS0FGdkIsRUFFOEIsS0FGOUIsRUFFcUMsS0FGckMsRUFFNEMsS0FGNUMsRUFFbUQsS0FGbkQsRUFFMEQsS0FGMUQsQ0FORixDQW5FVTs7R0FnRlIsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixFQUNxQyxLQURyQyxFQUM0QyxLQUQ1QyxFQUNtRCxLQURuRCxFQUVFLEtBRkYsRUFFUyxLQUZULEVBRWdCLEtBRmhCLEVBRXVCLEtBRnZCLEVBRThCLEtBRjlCLEVBRXFDLEtBRnJDLEVBRTRDLEtBRjVDLEVBRW1ELEtBRm5ELEVBR0UsS0FIRixFQUdTLEtBSFQsQ0FERixFQU1FLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQ0UsS0FERixFQUNTLEtBRFQsRUFDZ0IsS0FEaEIsRUFDdUIsS0FEdkIsRUFDOEIsS0FEOUIsRUFDcUMsS0FEckMsRUFDNEMsS0FENUMsRUFDbUQsS0FEbkQsRUFDMEQsS0FEMUQsRUFDaUUsS0FEakUsRUFFRSxLQUZGLEVBRVMsS0FGVCxFQUVnQixLQUZoQixFQUV1QixLQUZ2QixFQUU4QixLQUY5QixFQUVxQyxLQUZyQyxDQU5GLENBL0VVOztHQTRGUixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLENBREYsRUFJRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLENBSkYsQ0EzRlU7O0dBcUdOLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FESixFQUdJLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FISjtHQXBHVTs7R0EyR1IsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixFQUNxQyxLQURyQyxFQUM0QyxLQUQ1QyxFQUNtRCxLQURuRCxFQUVFLEtBRkYsRUFFUyxLQUZULEVBRWdCLEtBRmhCLENBREYsRUFLRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELEVBQzBELEtBRDFELENBTEYsQ0ExR1U7O0dBcUhSLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQ0UsS0FERixFQUNTLEtBRFQsRUFDZ0IsS0FEaEIsRUFDdUIsS0FEdkIsRUFDOEIsS0FEOUIsRUFDcUMsS0FEckMsRUFDNEMsS0FENUMsRUFDbUQsS0FEbkQsRUFFRSxLQUZGLEVBRVMsS0FGVCxFQUVnQixLQUZoQixFQUV1QixLQUZ2QixDQURGLEVBS0UsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsS0FBaEUsRUFBdUUsS0FBdkUsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixFQUNxQyxLQURyQyxFQUM0QyxLQUQ1QyxFQUNtRCxLQURuRCxFQUMwRCxLQUQxRCxDQUxGLENBcEhVOztHQStIUixDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFpQyxLQUFqQyxFQUF3QyxLQUF4QyxFQUErQyxLQUEvQyxFQUFzRCxLQUF0RCxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELEVBRUUsS0FGRixFQUVTLEtBRlQsRUFFZ0IsS0FGaEIsRUFFdUIsS0FGdkIsRUFFOEIsS0FGOUIsRUFFcUMsS0FGckMsRUFFNEMsS0FGNUMsRUFFbUQsS0FGbkQsRUFHRSxLQUhGLEVBR1MsS0FIVCxFQUdnQixLQUhoQixFQUd1QixLQUh2QixFQUc4QixLQUg5QixFQUdxQyxLQUhyQyxFQUc0QyxLQUg1QyxFQUdtRCxLQUhuRCxFQUlFLEtBSkYsRUFJUyxLQUpULEVBSWdCLEtBSmhCLEVBSXVCLEtBSnZCLENBREYsRUFPRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELEVBQzBELEtBRDFELEVBQ2lFLEtBRGpFLEVBQ3dFLEtBRHhFLEVBRUUsS0FGRixFQUVTLEtBRlQsRUFFZ0IsS0FGaEIsRUFFdUIsS0FGdkIsRUFFOEIsS0FGOUIsRUFFcUMsS0FGckMsRUFFNEMsS0FGNUMsRUFFbUQsS0FGbkQsRUFFMEQsS0FGMUQsRUFFaUUsS0FGakUsRUFFd0UsS0FGeEUsRUFHRSxLQUhGLEVBR1MsS0FIVCxFQUdnQixLQUhoQixFQUd1QixLQUh2QixDQVBGLENBOUhVOztHQTZJUixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELEVBRUUsS0FGRixFQUVTLEtBRlQsRUFFZ0IsS0FGaEIsRUFFdUIsS0FGdkIsRUFFOEIsS0FGOUIsRUFFcUMsS0FGckMsRUFFNEMsS0FGNUMsRUFFbUQsS0FGbkQsRUFHRSxLQUhGLEVBR1MsS0FIVCxFQUdnQixLQUhoQixFQUd1QixLQUh2QixFQUc4QixLQUg5QixFQUdxQyxLQUhyQyxFQUc0QyxLQUg1QyxFQUdtRCxLQUhuRCxFQUlFLEtBSkYsRUFJUyxLQUpULEVBSWdCLEtBSmhCLEVBSXVCLE1BSnZCLEVBSStCLEtBSi9CLEVBSXNDLEtBSnRDLENBREYsRUFPRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELEVBQzBELEtBRDFELEVBQ2lFLEtBRGpFLEVBQ3dFLEtBRHhFLEVBRUUsS0FGRixFQUVTLEtBRlQsRUFFZ0IsS0FGaEIsRUFFdUIsS0FGdkIsRUFFOEIsS0FGOUIsRUFFcUMsS0FGckMsRUFFNEMsS0FGNUMsRUFFbUQsS0FGbkQsRUFFMEQsS0FGMUQsRUFFaUUsS0FGakUsRUFFd0UsS0FGeEUsRUFHRSxLQUhGLEVBR1MsS0FIVCxFQUdnQixLQUhoQixFQUd1QixLQUh2QixFQUc4QixLQUg5QixDQVBGLENBNUlVOztHQTJKUixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQURGLEVBRUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FGRixDQTFKVTs7R0FnS1IsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixFQUNxQyxLQURyQyxFQUM0QyxLQUQ1QyxFQUNtRCxLQURuRCxFQUVFLEtBRkYsRUFFUyxLQUZULEVBRWdCLEtBRmhCLEVBRXVCLEtBRnZCLEVBRThCLEtBRjlCLEVBRXFDLEtBRnJDLEVBRTRDLEtBRjVDLEVBRW1ELEtBRm5ELEVBR0UsS0FIRixFQUdTLEtBSFQsRUFHZ0IsS0FIaEIsRUFHdUIsS0FIdkIsRUFHOEIsS0FIOUIsRUFHcUMsS0FIckMsRUFHNEMsS0FINUMsRUFHbUQsS0FIbkQsRUFJRSxLQUpGLENBREYsRUFPRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLEVBQ3FDLEtBRHJDLEVBQzRDLEtBRDVDLEVBQ21ELEtBRG5ELEVBQzBELEtBRDFELEVBQ2lFLEtBRGpFLEVBQ3dFLEtBRHhFLEVBRUUsS0FGRixFQUVTLEtBRlQsRUFFZ0IsS0FGaEIsRUFFdUIsS0FGdkIsRUFFOEIsS0FGOUIsRUFFcUMsS0FGckMsRUFFNEMsS0FGNUMsRUFFbUQsS0FGbkQsRUFFMEQsS0FGMUQsRUFFaUUsS0FGakUsRUFFd0UsS0FGeEUsQ0FQRixDQS9KVTs7R0E2S1IsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixFQUNxQyxLQURyQyxFQUM0QyxLQUQ1QyxFQUNtRCxLQURuRCxDQURGLEVBSUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsS0FBaEUsRUFBdUUsS0FBdkUsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixFQUM4QixLQUQ5QixDQUpGLENBNUtVOztHQXNMUixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUNFLEtBREYsRUFDUyxLQURULEVBQ2dCLEtBRGhCLEVBQ3VCLEtBRHZCLEVBQzhCLEtBRDlCLENBREYsRUFJRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUNFLEtBREYsRUFDUyxLQURULENBSkYsQ0FyTFU7O0dBK0xSLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBREYsRUFFRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQUZGLENBOUxVOztHQW9NUixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixDQURGLEVBRUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsQ0FGRixDQW5NVTs7R0F5TVIsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQURGLEVBRUUsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUZGLENBeE1VOztHQThNUixDQUFDLE9BQUQsQ0FERixFQUVFLENBQUMsS0FBRCxDQUZGLENBN01VOztDQVRkOztBQ0ZlLFNBQVMsYUFBVCxHQUF5Qjs7TUFFbEMsVUFBVSxDQUFWLENBQUosRUFBa0I7dUJBQ0csVUFBVSxDQUFWLENBQW5CLEVBQWlDLFVBQVUsQ0FBVixDQUFqQzs7OztTQUlLLGlCQUFpQixVQUFVLENBQVYsQ0FBakIsRUFBK0IsVUFBVSxDQUFWLENBQS9CLENBQVA7OztBQUdGLFNBQVMsa0JBQVQsQ0FBNEIsYUFBNUIsRUFBMkMsZUFBM0MsRUFBNEQ7TUFDdEQsUUFBUSxFQUFaO01BQ0ksU0FBUyxnQkFBZ0IsTUFBN0I7a0JBQ2dCLGlCQUFpQixFQUFqQzs7U0FFTyxRQUFQLEVBQWlCO1FBQ1YsQ0FBRSxjQUFjLGNBQWQsQ0FBNkIsZ0JBQWdCLE1BQWhCLENBQTdCLENBQVAsRUFDRSxTQUFTLGdCQUFnQixNQUFoQixJQUEwQixHQUFuQzs7O01BR0EsS0FBSixFQUFXLE1BQU0sV0FBVyxLQUFqQjs7O0FBR2IsU0FBUyxnQkFBVCxDQUEwQixhQUExQixFQUF5QyxjQUF6QyxFQUF5RDtNQUNsRCxDQUFFLGFBQVAsRUFBc0I7V0FDYixjQUFQOzs7TUFHRSxRQUFKO09BQ0ssUUFBTCxJQUFpQixhQUFqQixFQUFnQzttQkFDZixRQUFmLElBQTJCLGNBQWMsUUFBZCxDQUEzQjs7O1NBR0ssY0FBUDs7O0FDL0JGOzs7O0FBR0EsQUFDQSxBQUdBLEFBSUE7Ozs7OztBQU1BLFNBQVNDLGdCQUFULEdBQTBCOztNQUVwQixnQkFBZ0IsVUFBVSxDQUFWLENBQXBCO01BQ0ksa0JBQWtCLFVBQVUsTUFBVixHQUFtQixDQUFDLElBQUQsQ0FBbkIsR0FBNEIsSUFBbEQsQ0FId0I7TUFJcEIsaUJBQWlCO1FBQ2YsSUFEZTtlQUVSLElBRlE7Z0JBR1AsSUFITztlQUlSLElBSlE7cUJBS0YsSUFMRTtzQkFNRCxJQU5DO1VBT2IsSUFQYTtpQkFRTixLQVJNO3NCQVNELFNBVEM7c0JBVUQsU0FWQzt1QkFXQSxVQVhBO3VCQVlBLFVBWkE7c0JBYUQsU0FiQztzQkFjRDtHQWRwQjs7O09Ba0JLLE9BQUwsR0FBZSxjQUFjLGFBQWQsRUFBNkIsZUFBN0IsRUFBOEMsY0FBOUMsQ0FBZjs7O01BR0ksS0FBSyxPQUFMLENBQWEsRUFBakIsRUFBcUI7U0FDZCxFQUFMLEdBQVUsWUFBWSxLQUFLLE9BQUwsQ0FBYSxFQUF6QixDQUFWO1NBQ0ssU0FBTCxHQUFpQixZQUFZLEtBQUssT0FBTCxDQUFhLFNBQXpCLENBQWpCO1NBQ0ssVUFBTCxHQUFrQixZQUFZLEtBQUssT0FBTCxDQUFhLFVBQXpCLENBQWxCO1NBQ0ssU0FBTCxHQUFpQixZQUFZLEtBQUssT0FBTCxDQUFhLFNBQXpCLENBQWpCO1NBQ0ssSUFBTCxDQUFVLElBQVY7V0FDTyxJQUFQOzs7O01BSUUsTUFBTSxTQUFTLGdCQUFULENBQTBCLDJCQUExQixDQUFWO01BQ0ksT0FBSixDQUFZLFVBQVMsRUFBVCxFQUFhO1FBQ25CLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFYLENBQVgsQ0FEdUI7OztTQUlsQixFQUFMLEdBQVUsRUFBVjtTQUNLLFNBQUwsR0FBaUIsSUFBakI7U0FDSyxVQUFMLEdBQWtCLElBQWxCO1NBQ0ssU0FBTCxHQUFpQixJQUFqQjs7O1NBR0ssT0FBTCxDQUFhLElBQWIsR0FBb0IsR0FBRyxZQUFILENBQWdCLFdBQWhCLElBQ2hCLEdBQUcsWUFBSCxDQUFnQixXQUFoQixFQUE2QixPQUE3QixDQUFxQyxLQUFyQyxFQUE0QyxFQUE1QyxFQUFnRCxLQUFoRCxDQUFzRCxHQUF0RCxDQURnQjtNQUVoQixJQUZKOzs7U0FLSyxPQUFMLENBQWEsZUFBYixHQUErQixHQUFHLFlBQUgsQ0FBZ0IsdUJBQWhCLENBQS9COzs7U0FHSyxPQUFMLENBQWEsZ0JBQWIsR0FBZ0MsR0FBRyxZQUFILENBQWdCLHdCQUFoQixDQUFoQzs7O1NBR0ssT0FBTCxDQUFhLFdBQWIsR0FBNEIsR0FBRyxZQUFILENBQWdCLG1CQUFoQixLQUF3QyxJQUFwRTs7U0FFSyxJQUFMLENBQVUsSUFBVjtHQXZCRixFQXdCRyxJQXhCSDs7U0EwQk8sSUFBUDs7Ozs7O0FBT0ZBLGlCQUFlLFNBQWYsQ0FBeUIsS0FBekIsR0FBaUMsWUFBVztTQUNuQyxlQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FBUDtDQURGOzs7OztBQVFBLFNBQVMsSUFBVCxHQUFnQjtjQUNGLElBQVosQ0FBaUIsSUFBakI7b0JBQ2tCLElBQWxCLENBQXVCLElBQXZCO3FCQUNtQixJQUFuQixDQUF3QixJQUF4Qjs7TUFFSSxLQUFLLE9BQUwsQ0FBYSxlQUFqQixFQUFrQztvQkFDaEIsSUFBaEIsQ0FBcUIsSUFBckI7Ozs7QUFJSixTQUFTLFdBQVQsQ0FBcUIsRUFBckIsRUFBeUI7TUFDbEIsQ0FBRSxFQUFQLEVBQVcsT0FBTyxJQUFQO1NBQ0osU0FBUyxhQUFULENBQXVCLEVBQXZCLENBQVA7OztBQUdGLFNBQVMsV0FBVCxHQUF1Qjs7TUFFaEIsQ0FBRSxLQUFLLFNBQVosRUFBdUI7UUFDakIsVUFBVSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtTQUNLLFNBQUwsR0FBaUIsT0FBakI7U0FDSyxFQUFMLENBQVEsV0FBUixDQUFvQixPQUFwQjs7O09BR0csU0FBTCxDQUFlLFNBQWYsR0FBMkIsa0JBQWtCLEtBQUssT0FBTCxDQUFhLElBQS9CLENBQTNCO09BQ0ssU0FBTCxDQUFlLFlBQWYsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBSyxPQUFMLENBQWEsZ0JBQWxEO09BQ0ssU0FBTCxDQUFlLElBQWYsR0FBc0IsS0FBSyxPQUFMLENBQWEsZ0JBQW5DOzs7TUFHSyxDQUFFLEtBQUssVUFBWixFQUF3QjtRQUNsQixXQUFXLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFmO1NBQ0ssVUFBTCxHQUFrQixRQUFsQjtTQUNLLEVBQUwsQ0FBUSxXQUFSLENBQW9CLFFBQXBCOzs7T0FHRyxVQUFMLENBQWdCLFNBQWhCLEdBQTRCLG9CQUE1QjtPQUNLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBSyxPQUFMLENBQWEsaUJBQW5EO09BQ0ssVUFBTCxDQUFnQixJQUFoQixHQUF1QixLQUFLLE9BQUwsQ0FBYSxpQkFBcEM7OztNQUdLLENBQUUsS0FBSyxTQUFaLEVBQXVCO1FBQ2pCLFVBQVUsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQWQ7U0FDSyxTQUFMLEdBQWlCLE9BQWpCO1NBQ0ssRUFBTCxDQUFRLFdBQVIsQ0FBb0IsT0FBcEI7OztPQUdHLFNBQUwsQ0FBZSxZQUFmLENBQTRCLE9BQTVCLEVBQXFDLEtBQUssT0FBTCxDQUFhLGdCQUFsRDtPQUNLLFNBQUwsQ0FBZSxJQUFmLEdBQXNCLEtBQUssT0FBTCxDQUFhLGdCQUFuQztPQUNLLFNBQUwsQ0FBZSxJQUFmLEdBQXNCLE1BQXRCO09BQ0ssU0FBTCxDQUFlLFFBQWYsR0FBMEIsSUFBMUI7T0FDSyxTQUFMLENBQWUsWUFBZixHQUE4QixLQUE5QjtPQUNLLFNBQUwsQ0FBZSxXQUFmLEdBQTZCLE1BQTdCO09BQ0ssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsS0FBckIsR0FBNkIsS0FBN0I7T0FDSyxTQUFMLENBQWUsS0FBZixDQUFxQixPQUFyQixHQUErQixLQUFLLE9BQUwsQ0FBYSxXQUFiLElBQTRCLE1BQTNEOzs7QUFHRixTQUFTLGlCQUFULENBQTJCLElBQTNCLEVBQWlDO01BQzNCLFVBQVUsZ0NBQWQ7O09BRUssSUFBSSxJQUFJLENBQVIsRUFBVyxJQUFJRCxPQUFLLE9BQUwsQ0FBYSxNQUFqQyxFQUF5QyxJQUFJLENBQTdDLEVBQWdELEdBQWhELEVBQXFEOztRQUUvQyxRQUFRLE1BQU0sT0FBTixDQUFjLElBQWQsQ0FBUixJQUErQixLQUFLLE9BQUwsQ0FBYUEsT0FBSyxPQUFMLENBQWEsQ0FBYixDQUFiLE1BQWtDLENBQUMsQ0FBdEUsRUFBeUU7Ozs7O21DQUs1Q0EsT0FBSyxPQUFMLENBQWEsQ0FBYixDQUE3QixzQkFBNkQsQ0FBN0QsVUFBbUVBLE9BQUssT0FBTCxDQUFhLENBQWIsQ0FBbkU7OztTQUdLLE9BQVA7OztBQUdGLFNBQVMsa0JBQVQsQ0FBNEIsS0FBNUIsRUFBbUM7TUFDNUIsQ0FBRSxLQUFQLEVBQWM7V0FDTCx3Q0FBUDs7O01BR0UsVUFBVSx5Q0FBZDs7T0FFSSxJQUFJLElBQUksQ0FBUixFQUFXLElBQUlBLE9BQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0IsTUFBeEIsR0FBaUMsQ0FBcEQsRUFBdUQsS0FBSyxDQUE1RCxFQUErRCxHQUEvRCxFQUFvRTs7MkNBRy9DQSxPQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBRG5CLHdCQUNnRUEsT0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQURoRSxvQkFFTUEsT0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUZOOzs7U0FPSyxPQUFQOzs7QUFHRixTQUFTLGlCQUFULEdBQTZCO01BQ3ZCLFVBQVUsWUFBVztRQUNuQixRQUFRLEtBQUssU0FBTCxDQUFlLGFBQWYsQ0FBNkIsZ0JBQTdCLEVBQ1QsWUFEUyxDQUNJLFlBREosQ0FBWixDQUR1QjtTQUdsQixVQUFMLENBQWdCLFNBQWhCLEdBQTRCLG1CQUFtQixLQUFuQixDQUE1QjtTQUNLLFNBQUwsQ0FBZSxLQUFmLEdBQXVCLEVBQXZCO0dBSlksQ0FLWixJQUxZLENBS1AsSUFMTyxDQUFkOztPQU9LLFNBQUwsQ0FBZSxnQkFBZixDQUFnQyxRQUFoQyxFQUEwQyxPQUExQzs7O0FBR0YsU0FBUyxrQkFBVCxHQUE4QjtNQUN4QixVQUFVLFlBQVc7UUFDbkIsVUFBVSxLQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBOEIsZ0JBQTlCLEVBQ1gsWUFEVyxDQUNFLGNBREYsQ0FBZCxDQUR1Qjs7U0FJbEIsU0FBTCxDQUFlLEtBQWYsR0FBdUIsT0FBdkI7R0FKWSxDQUtaLElBTFksQ0FLUCxJQUxPLENBQWQ7O09BT0ssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMkMsT0FBM0M7OztBQUdGLFNBQVMsZUFBVCxHQUEyQjtNQUNyQixRQUFRLFNBQVMsV0FBVCxDQUFxQixPQUFyQixDQUFaO1FBQ00sU0FBTixDQUFnQixRQUFoQixFQUEwQixJQUExQixFQUFnQyxJQUFoQzs7T0FFSyxTQUFMLENBQWUsS0FBZixHQUF1QixLQUFLLE9BQUwsQ0FBYSxlQUFwQztPQUNLLFNBQUwsQ0FBZSxhQUFmLENBQTZCLEtBQTdCOztNQUVJLEtBQUssT0FBTCxDQUFhLGdCQUFqQixFQUFtQztTQUM1QixVQUFMLENBQWdCLEtBQWhCLEdBQXdCLEtBQUssT0FBTCxDQUFhLGdCQUFyQztTQUNLLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBOEIsS0FBOUI7Ozs7QUFJSixTQUFTLGNBQVQsR0FBMEI7T0FDbkIsU0FBTCxDQUFlLGFBQWYsR0FBK0IsQ0FBL0I7T0FDSyxVQUFMLENBQWdCLFNBQWhCLEdBQTRCLG9CQUE1QjtPQUNLLFNBQUwsQ0FBZSxLQUFmLEdBQXVCLEVBQXZCO1NBQ08sSUFBUDs7Ozs7In0=