(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.TwCitySelector = factory());
}(this, (function () { 'use strict';

var data$1 = {
    // 縣市
    counties: ['臺北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '臺南市', '高雄市', '澎湖縣', '金門縣', '屏東縣', '臺東縣', '花蓮縣', '連江縣'],

    // 區域
    districts: [
    // 臺北市
    [['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'], ['100', '103', '104', '105', '106', '108', '110', '111', '112', '114', '115', '116']],
    // 基隆市
    [['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'], ['200', '201', '202', '203', '204', '205', '206']],
    // 新北市
    [['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水區', '三芝區', '石門區'], ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228', '231', '232', '233', '234', '235', '236', '237', '238', '239', '241', '242', '243', '244', '247', '248', '249', '251', '252', '253']],
    // 宜蘭縣
    [['宜蘭市', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '羅東鎮', '三星鄉', '大同鄉', '五結鄉', '冬山鄉', '蘇澳鎮', '南澳鄉', '釣魚台'], ['260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '272', '290']],
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
    [['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區', '大社區', '東沙群島', '南沙群島', '岡山區', '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區', '湖內區', '鳳山區', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區', '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'], ['800', '801', '802', '803', '804', '805', '806', '807', '811', '812', '813', '814', '815', '817', '819', '820', '821', '822', '823', '824', '825', '826', '827', '828', '829', '830', '831', '832', '833', '840', '842', '843', '844', '845', '846', '847', '848', '849', '851', '852']],
    // 澎湖縣
    [['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'], ['880', '881', '882', '883', '884', '885']],
    // 金門縣
    [['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'], ['890', '891', '892', '893', '894', '896']],
    // 屏東縣
    [['屏東市', '三地門鄉', '霧台鄉', '瑪家鄉', '九如鄉', '里港鄉', '高樹鄉', '鹽埔鄉', '長治鄉', '麟洛鄉', '竹田鄉', '內埔鄉', '萬丹鄉', '潮州鎮', '泰武鄉', '來義鄉', '萬巒鄉', '崁頂鄉', '新埤鄉', '南州鄉', '林邊鄉', '東港鎮', '琉球鄉', '佳冬鄉', '新園鄉', '枋寮鄉', '枋山鄉', '春日鄉', '獅子鄉', '車城鄉', '牡丹鄉', '恆春鎮', '滿州鄉'], ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '911', '912', '913', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '931', '932', '940', '941', '942', '943', '944', '945', '946', '947']],
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

  if (optionsCustom['elCountry']) {
    // 拼字錯誤修正
    optionsDefault['elCounty'] = optionsCustom['elCountry'];
  }

  if (optionsCustom['selectedCountry']) {
    // 拼字錯誤修正
    optionsDefault['selectedCounty'] = optionsCustom['selectedCountry'];
  }

  if (optionsCustom['countryClassName']) {
    // 拼字錯誤修正
    optionsDefault['countyClassName'] = optionsCustom['countryClassName'];
  }

  if (optionsCustom['countryFiledName']) {
    // 拼字錯誤修正
    optionsDefault['countyFiledName'] = optionsCustom['countryFiledName'];
  }

  return optionsDefault;
}

'use strict';

// --------------------
// Module import
// --------------------

// module.exports = TwCitySelector; /* use browserify to build */


// --------------------
// Constructor
// --------------------
function TwCitySelector$1() {

	this.elRoleName = 'tw-city-selector';

	// Setting options
	var optionsDefault = {
		el: null,
		elCounty: null,
		elDistrict: null,
		elZipcode: null,
		selectedCounty: null, // 預設選擇的縣市名稱
		selectedDistrict: null, // 預設選擇的區域名稱
		only: null, // {array} 限制顯示哪些縣市及區域
		// onlyCity: null, // {array} 限制顯示哪些縣市 @封存
		showZipcode: false, // {boolean} 是否顯示郵遞區號欄位
		bootstrapStyle: false,
		countyClassName: 'county',
		countyFiledName: 'county',
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
}

// --------------------
// Public Methods
// --------------------
// TwCitySelector.prototype.init = function() {
// 	return init.call(this);
// };

TwCitySelector$1.prototype.reset = function () {
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
	var els = document.querySelectorAll('[role=' + this.elRoleName + ']');
	Array.prototype.forEach.call(els, function (el) {
		var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

		// 因可能同時使用兩種初始化方式，需重置設定
		self.el = el;
		self.elCounty = null;
		self.elDistrict = null;
		self.elZipcode = null;

		// 限制只顯示哪些縣市、區域
		self.options.only = el.getAttribute('data-only') ? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
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
		self.options.bootstrapStyle = el.getAttribute('data-bootstrap-style') != null;

		// 是否顯示郵遞區號
		self.options.showZipcode = el.getAttribute('data-show-zipcode') != null;

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
	if (!el) return null;
	if (parent) return parent.querySelector(el);
	return document.querySelector(el);
}

function setElements() {
	var fragment = document.createDocumentFragment();

	// 縣市選單
	if (!this.elCounty) {
		var county = document.createElement('select');
		this.elCounty = county;
		fragment.appendChild(county);
	}

	// 縣市選單屬性
	this.elCounty.innerHTML = getCountyOptions.call(this);
	this.elCounty.setAttribute('class', this.options.countyClassName);
	this.elCounty.name = this.options.countyFiledName;

	// 區域選單
	if (!this.elDistrict) {
		var district = document.createElement('select');
		this.elDistrict = district;
		fragment.appendChild(district);
	}

	// 區域選單屬性
	this.elDistrict.innerHTML = getDistrictOptions.call(this);
	this.elDistrict.setAttribute('class', this.options.districtClassName);
	this.elDistrict.name = this.options.districtFieldName;

	// 郵遞區號
	if (!this.elZipcode) {
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

function getCountyOptions() {
	var elOptions = '<option value="">選擇縣市</option>';
	var onlyItems = getCountyOnlyItems.call(this);

	for (var i = 0, j = data$1.counties.length; i < j; i++) {
		// 若有設定限制顯示的縣市，且該項目不在自訂縣市中，則不顯示
		if (onlyItems && onlyItems.indexOf(data$1.counties[i]) === -1) {
			continue;
		}

		// format: <option value="臺北市" data-index="0">臺北市</option>
		elOptions += '<option value="' + data$1.counties[i] + '" data-index="' + i + '">' + data$1.counties[i] + '</option>';
	}

	return elOptions;
}

function getDistrictOptions(index) {
	if (!index) return '<option value="" selected>---</option>';

	var elOptions = '<option value="" selected>選擇區域</option>';
	var countyValue = this.elCounty.value;
	var onlyItems = getDistrictOnlyItems.call(this, countyValue);
	// console.log(onlyItems);

	for (var i = 0, j = data$1.districts[index][0].length - 1; i <= j; i++) {
		// 若有設定限制顯示的區域，且該項目不在自訂區域中，則不顯示
		if (onlyItems && onlyItems.indexOf(data$1.districts[index][0][i]) === -1) {
			continue;
		}

		// format: <option value="中正區" data-zipcode="100">中正區</option>
		elOptions += '<option value="' + data$1.districts[index][0][i] + '"\n                              data-zipcode="' + data$1.districts[index][1][i] + '"\n                      >\n\t\t                  ' + data$1.districts[index][0][i] + '\n\t\t              </option>';
	}

	return elOptions;
}

function getCountyOnlyItems() {
	var onlyItems = this.options.only;
	if (!Array.isArray(onlyItems)) return null;

	// 取出縣市資料
	return onlyItems.map(function (item) {
		var index = item.indexOf('@');
		return index === -1 ? item : item.substring(0, index);
	});
}

function getDistrictOnlyItems(county) {
	var onlyItems = this.options.only;
	if (!Array.isArray(onlyItems)) return null;

	// 取出區域資料
	var items = null;
	onlyItems.forEach(function (item) {
		if (item.indexOf(county) === -1) return;

		var index = item.lastIndexOf('@');
		if (index !== -1) {
			return items = item.substring(index + 1).split('|'); // 轉陣列
		}
	});

	return items;
}

function listenCountyChanged() {
	var handler = function () {
		var index = this.elCounty.querySelector('option:checked').dataset.index;
		this.elDistrict.innerHTML = getDistrictOptions.call(this, index);
		this.elZipcode.value = '';
	}.bind(this);

	this.elCounty.addEventListener('change', handler);
}

function listenDistrictChanged() {
	var handler = function () {
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

return TwCitySelector$1;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCIvVXNlcnMvZGVubnkvRHJvcGJveC8wMS3ntrLnq5nlsIjmoYgvZGstcGx1Z2lucy90dy1jaXR5LXNlbGVjdG9yL3NyYy9oYW5kbGUtb3B0aW9ucy5qcyIsIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL3R3LWNpdHktc2VsZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZGF0YTtcblxudmFyIGRhdGEgPSB7XG4gICAgLy8g57ij5biCXG4gICAgY291bnRpZXM6IFtcbiAgICAgICAgJ+iHuuWMl+W4gicsICfln7rpmobluIInLCAn5paw5YyX5biCJywgJ+WunOiYree4oycsICfmoYPlnJLluIInLCAn5paw56u55biCJywgJ+aWsOeruee4oycsICfoi5fmoJfnuKMnLFxuICAgICAgICAn6Ie65Lit5biCJywgJ+W9sOWMlue4oycsICfljZfmipXnuKMnLCAn5ZiJ576p5biCJywgJ+WYiee+qee4oycsICfpm7LmnpfnuKMnLCAn6Ie65Y2X5biCJywgJ+mrmOmbhOW4gicsXG4gICAgICAgICfmvo7muZbnuKMnLCAn6YeR6ZaA57ijJywgJ+Wxj+adsee4oycsICfoh7rmnbHnuKMnLCAn6Iqx6JOu57ijJywgJ+mAo+axn+e4oydcbiAgICBdLFxuXG4gICAgLy8g5Y2A5Z+fXG4gICAgZGlzdHJpY3RzOiBbXG4gICAgICAgIC8vIOiHuuWMl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S4reato+WNgCcsICflpKflkIzljYAnLCAn5Lit5bGx5Y2AJywgJ+advuWxseWNgCcsICflpKflronljYAnLCAn6JCs6I+v5Y2AJywgJ+S/oee+qeWNgCcsXG4gICAgICAgICAgICAn5aOr5p6X5Y2AJywgJ+WMl+aKleWNgCcsICflhafmuZbljYAnLCAn5Y2X5riv5Y2AJywgJ+aWh+WxseWNgCddLFxuXG4gICAgICAgICAgICBbJzEwMCcsICcxMDMnLCAnMTA0JywgJzEwNScsICcxMDYnLCAnMTA4JywgJzExMCcsICcxMTEnLCAnMTEyJywgJzExNCcsICcxMTUnLCAnMTE2J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5Z+66ZqG5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5LuB5oSb5Y2AJywgJ+S/oee+qeWNgCcsICfkuK3mraPljYAnLCAn5Lit5bGx5Y2AJywgJ+WuieaoguWNgCcsICfmmpbmmpbljYAnLCAn5LiD5aC15Y2AJ10sXG5cbiAgICAgICAgICAgIFsnMjAwJywgJzIwMScsICcyMDInLCAnMjAzJywgJzIwNCcsICcyMDUnLCAnMjA2J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw5YyX5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6JCs6YeM5Y2AJywgJ+mHkeWxseWNgCcsICfmnb/mqYvljYAnLCAn5rGQ5q2i5Y2AJywgJ+a3seWdkeWNgCcsICfnn7PnoofljYAnLCAn55Ge6Iqz5Y2AJywgJ+W5s+a6quWNgCcsXG4gICAgICAgICAgICAn6ZuZ5rqq5Y2AJywgJ+iyouWvruWNgCcsICfmlrDlupfljYAnLCAn5Z2q5p6X5Y2AJywgJ+eDj+S+huWNgCcsICfmsLjlkozljYAnLCAn5Lit5ZKM5Y2AJywgJ+Wcn+WfjuWNgCcsXG4gICAgICAgICAgICAn5LiJ5bO95Y2AJywgJ+aoueael+WNgCcsICfptq/mrYzljYAnLCAn5LiJ6YeN5Y2AJywgJ+aWsOiOiuWNgCcsICfms7DlsbHljYAnLCAn5p6X5Y+j5Y2AJywgJ+iYhua0suWNgCcsXG4gICAgICAgICAgICAn5LqU6IKh5Y2AJywgJ+WFq+mHjOWNgCcsICfmt6HmsLTljYAnLCAn5LiJ6Iqd5Y2AJywgJ+efs+mWgOWNgCddLFxuXG4gICAgICAgICAgICBbJzIwNycsICcyMDgnLCAnMjIwJywgJzIyMScsICcyMjInLCAnMjIzJywgJzIyNCcsICcyMjYnLCAnMjI3JywgJzIyOCcsXG4gICAgICAgICAgICAnMjMxJywgJzIzMicsICcyMzMnLCAnMjM0JywgJzIzNScsICcyMzYnLCAnMjM3JywgJzIzOCcsICcyMzknLCAnMjQxJyxcbiAgICAgICAgICAgICcyNDInLCAnMjQzJywgJzI0NCcsICcyNDcnLCAnMjQ4JywgJzI0OScsICcyNTEnLCAnMjUyJywgJzI1MyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWunOiYree4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+WunOiYreW4gicsICfpoK3ln47pjq4nLCAn56SB5rqq6YSJJywgJ+Wjr+WcjemEiScsICflk6HlsbHphIknLCAn576F5p2x6Y6uJywgJ+S4ieaYn+mEiScsICflpKflkIzphIknLFxuICAgICAgICAgICAgJ+S6lOe1kOmEiScsICflhqzlsbHphIknLCAn6JiH5r6z6Y6uJywgJ+WNl+a+s+mEiScsICfph6PprZrlj7AnXSxcblxuICAgICAgICAgICAgWycyNjAnLCAnMjYxJywgJzI2MicsICcyNjMnLCAnMjY0JywgJzI2NScsICcyNjYnLCAnMjY3JywgJzI2OCcsICcyNjknLFxuICAgICAgICAgICAgJzI3MCcsICcyNzInLCAnMjkwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5qGD5ZyS5biCXG4gICAgXHRbXG4gICAgXHRcdFsn5Lit5aOi5Y2AJywgJ+W5s+mOruWNgCcsICfpvo3mva3ljYAnLCAn5qWK5qKF5Y2AJywgJ+aWsOWxi+WNgCcsICfop4Dpn7PljYAnLCAn5qGD5ZyS5Y2AJywgJ+m+nOWxseWNgCcsXG4gICAgXHRcdCflhavlvrfljYAnLCAn5aSn5rqq5Y2AJywgJ+W+qeiIiOWNgCcsICflpKflnJLljYAnLCAn6JiG56u55Y2AJ10sXG5cbiAgICBcdFx0WyczMjAnLCAnMzI0JywgJzMyNScsICczMjYnLCAnMzI3JywgJzMyOCcsICczMzAnLCAnMzMzJywgJzMzNCcsICczMzUnLFxuICAgIFx0XHQnMzM2JywgJzMzNycsICczMzgnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDmlrDnq7nluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmnbHljYAnLCAn5YyX5Y2AJywgJ+mmmeWxseWNgCddLFxuXG4gICAgICAgICAgICBbJzMwMCcsICczMDAnLCAnMzAwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw56u557ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn56u55YyX5biCJywgJ+a5luWPo+mEiScsICfmlrDosZDphIknLCAn5paw5Z+U6Y6uJywgJ+mXnOilv+mOricsICfoio7mnpfphIknLCAn5a+25bGx6YSJJyxcbiAgICAgICAgICAgICfnq7nmnbHpjq4nLCAn5LqU5bOw6YSJJywgJ+apq+WxsemEiScsICflsJbnn7PphIknLCAn5YyX5Z+U6YSJJywgJ+WzqOeciemEiSddLFxuXG4gICAgICAgICAgICBbJzMwMicsICczMDMnLCAnMzA0JywgJzMwNScsICczMDYnLCAnMzA3JywgJzMwOCcsICczMTAnLCAnMzExJyxcbiAgICAgICAgICAgICczMTInLCAnMzEzJywgJzMxNCcsICczMTUnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoi5fmoJfnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfnq7nljZfpjq4nLCAn6aCt5Lu95biCJywgJ+S4ieeBo+mEiScsICfljZfluoTphIknLCAn542F5r2t6YSJJywgJ+W+jOm+jemOricsICfpgJrpnITpjq4nLCAn6IuR6KOh6Y6uJyxcbiAgICAgICAgICAgICfoi5fmoJfluIInLCAn6YCg5qmL6YSJJywgJ+mgreWxi+mEiScsICflhazppKjphIknLCAn5aSn5rmW6YSJJywgJ+azsOWuiemEiScsXG4gICAgICAgICAgICAn6YqF6ZG86YSJJywgJ+S4iee+qemEiScsICfopb/muZbphIknLCAn5Y2T6Jit6Y6uJ10sXG5cbiAgICAgICAgICAgIFsnMzUwJywgJzM1MScsICczNTInLCAnMzUzJywgJzM1NCcsICczNTYnLCAnMzU3JywgJzM1OCcsICczNjAnLCAnMzYxJyxcbiAgICAgICAgICAgICczNjInLCAnMzYzJywgJzM2NCcsICczNjUnLCAnMzY2JywgJzM2NycsICczNjgnLCAnMzY5J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6Ie65Lit5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit5Y2AJywgJ+adseWNgCcsICfljZfljYAnLCAn6KW/5Y2AJywgJ+WMl+WNgCcsICfljJflsa/ljYAnLCAn6KW/5bGv5Y2AJywgJ+WNl+Wxr+WNgCcsICflpKrlubPljYAnLFxuICAgICAgICAgICAgJ+Wkp+mHjOWNgCcsICfpnKfls7DljYAnLCAn54OP5pel5Y2AJywgJ+ixkOWOn+WNgCcsICflkI7ph4zljYAnLCAn55+z5bKh5Y2AJywgJ+adseWLouWNgCcsICflkozlubPljYAnLFxuICAgICAgICAgICAgJ+aWsOekvuWNgCcsICfmva3lrZDljYAnLCAn5aSn6ZuF5Y2AJywgJ+elnuWyoeWNgCcsICflpKfogprljYAnLCAn5rKZ6bm/5Y2AJywgJ+m+jeS6leWNgCcsICfmoqfmo7LljYAnLFxuICAgICAgICAgICAgJ+a4heawtOWNgCcsICflpKfnlLLljYAnLCAn5aSW5Z+U5Y2AJywgJ+Wkp+WuieWNgCddLFxuXG4gICAgICAgICAgICBbJzQwMCcsICc0MDEnLCAnNDAyJywgJzQwMycsICc0MDQnLCAnNDA2JywgJzQwNycsICc0MDgnLCAnNDExJywgJzQxMicsXG4gICAgICAgICAgICAnNDEzJywgJzQxNCcsICc0MjAnLCAnNDIxJywgJzQyMicsICc0MjMnLCAnNDI0JywgJzQyNicsICc0MjcnLCAnNDI4JyxcbiAgICAgICAgICAgICc0MjknLCAnNDMyJywgJzQzMycsICc0MzQnLCAnNDM1JywgJzQzNicsICc0MzcnLCAnNDM4JywgJzQzOSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOW9sOWMlue4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+W9sOWMluW4gicsICfoiqzlnJLphIknLCAn6Iqx5aOH6YSJJywgJ+engOawtOmEiScsICfpub/muK/pjq4nLCAn56aP6IiI6YSJJywgJ+e3muilv+mEiScsICflkoznvo7pjq4nLFxuICAgICAgICAgICAgJ+S8uOa4r+mEiScsICflk6HmnpfluIInLCAn56S+6aCt6YSJJywgJ+awuOmdlumEiScsICfln5Tlv4PphIknLCAn5rqq5rmW6Y6uJywgJ+Wkp+adkemEiScsICfln5Tpub3phIknLFxuICAgICAgICAgICAgJ+eUsOS4remOricsICfljJfmlpfpjq4nLCAn55Sw5bC+6YSJJywgJ+WfpOmgremEiScsICfmuqrlt57phIknLCAn56u55aGY6YSJJywgJ+S6jOael+mOricsICflpKfln47phIknLFxuICAgICAgICAgICAgJ+iKs+iLkemEiScsICfkuozmsLTphIknXSxcblxuICAgICAgICAgICAgWyc1MDAnLCAnNTAyJywgJzUwMycsICc1MDQnLCAnNTA1JywgJzUwNicsICc1MDcnLCAnNTA4JywgJzUwOScsICc1MTAnLFxuICAgICAgICAgICAgJzUxMScsICc1MTInLCAnNTEzJywgJzUxNCcsICc1MTUnLCAnNTE2JywgJzUyMCcsICc1MjEnLCAnNTIyJywgJzUyMycsXG4gICAgICAgICAgICAnNTI0JywgJzUyNScsICc1MjYnLCAnNTI3JywgJzUyOCcsICc1MzAnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDljZfmipXnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfljZfmipXluIInLCAn5Lit5a+u6YSJJywgJ+iNieWxr+mOricsICflnIvlp5PphIknLCAn5Z+U6YeM6Y6uJywgJ+S7geaEm+mEiScsICflkI3plpPphIknLCAn6ZuG6ZuG6Y6uJyxcbiAgICAgICAgICAgICfmsLTph4zphIknLCAn6a2a5rGg6YSJJywgJ+S/oee+qemEiScsICfnq7nlsbHpjq4nLCAn6bm/6LC36YSJJ10sXG5cbiAgICAgICAgICAgIFsnNTQwJywgJzU0MScsICc1NDInLCAnNTQ0JywgJzU0NScsICc1NDYnLCAnNTUxJywgJzU1MicsICc1NTMnLCAnNTU1JyxcbiAgICAgICAgICAgICc1NTYnLCAnNTU3JywgJzU1OCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWYiee+qeW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+adseWNgCcsICfopb/ljYAnXSxcblxuICAgICAgICAgICAgWyc2MDAnLCAnNjAwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5ZiJ576p57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn55Wq6Lev6YSJJywgJ+aiheWxsemEiScsICfnq7nltI7phIknLCAn6Zi/6YeM5bGxJywgJ+S4reWflOmEiScsICflpKfln5TphIknLCAn5rC05LiK6YSJJyxcbiAgICAgICAgICAgICfpub/ojYnphIknLCAn5aSq5L+d5biCJywgJ+actOWtkOW4gicsICfmnbHnn7PphIknLCAn5YWt6IWz6YSJJywgJ+aWsOa4r+mEiScsICfmsJHpm4TphIknLCAn5aSn5p6X6Y6uJyxcbiAgICAgICAgICAgICfmuqrlj6PphIknLCAn576p56u56YSJJywgJ+W4g+iii+mOriddLFxuXG4gICAgICAgICAgICBbJzYwMicsICc2MDMnLCAnNjA0JywgJzYwNScsICc2MDYnLCAnNjA3JywgJzYwOCcsICc2MTEnLCAnNjEyJyxcbiAgICAgICAgICAgICc2MTMnLCAnNjE0JywgJzYxNScsICc2MTYnLCAnNjIxJywgJzYyMicsICc2MjMnLCAnNjI0JywgJzYyNSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmbsuael+e4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+aWl+WNl+mOricsICflpKfln6TphIknLCAn6JmO5bC+6Y6uJywgJ+Wcn+W6q+mOricsICfopJLlv6DphIknLCAn5p2x5Yui6YSJJywgJ+iHuuilv+mEiScsICfltJnog4zphIknLFxuICAgICAgICAgICAgJ+m6peWvrumEiScsICfmlpflha3luIInLCAn5p6X5YWn6YSJJywgJ+WPpOWdkemEiScsICfojr/moZDphIknLCAn6KW/6J666Y6uJywgJ+S6jOW0memEiScsICfljJfmuK/pjq4nLFxuICAgICAgICAgICAgJ+awtOael+mEiScsICflj6PmuZbphIknLCAn5Zub5rmW6YSJJywgJ+WFg+mVt+mEiSddLFxuXG4gICAgICAgICAgICBbJzYzMCcsICc2MzEnLCAnNjMyJywgJzYzMycsICc2MzQnLCAnNjM1JywgJzYzNicsICc2MzcnLCAnNjM4JywgJzY0MCcsICc2NDMnLFxuICAgICAgICAgICAgJzY0NicsICc2NDcnLCAnNjQ4JywgJzY0OScsICc2NTEnLCAnNjUyJywgJzY1MycsICc2NTQnLCAnNjU1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6Ie65Y2X5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit6KW/5Y2AJywgJ+adseWNgCcsICfljZfljYAnLCAn5YyX5Y2AJywgJ+WuieW5s+WNgCcsICflronljZfljYAnLCAn5rC45bq35Y2AJywgJ+atuOS7geWNgCcsICfmlrDljJbljYAnLFxuICAgICAgICAgICAgJ+W3pumOruWNgCcsICfnjonkupXljYAnLCAn5qWg6KW/5Y2AJywgJ+WNl+WMluWNgCcsICfku4HlvrfljYAnLCAn6Zec5buf5Y2AJywgJ+m+jeW0juWNgCcsICflrpjnlLDljYAnLFxuICAgICAgICAgICAgJ+m6u+ixhuWNgCcsICfkvbPph4zljYAnLCAn6KW/5riv5Y2AJywgJ+S4g+iCoeWNgCcsICflsIfou43ljYAnLCAn5a2455Sy5Y2AJywgJ+WMl+mWgOWNgCcsICfmlrDnh5/ljYAnLFxuICAgICAgICAgICAgJ+W+jOWjgeWNgCcsICfnmb3msrPljYAnLCAn5p2x5bGx5Y2AJywgJ+WFreeUsuWNgCcsICfkuIvnh5/ljYAnLCAn5p+z54ef5Y2AJywgJ+m5veawtOWNgCcsICflloTljJbljYAnLFxuICAgICAgICAgICAgJ+Wkp+WFp+WNgCcsICflsbHkuIrljYAnLCAn5paw5biC5Y2AJywgJ+WuieWumuWNgCddLFxuXG4gICAgICAgICAgICBbJzcwMCcsICc3MDEnLCAnNzAyJywgJzcwNCcsICc3MDgnLCAnNzA5JywgJzcxMCcsICc3MTEnLCAnNzEyJywgJzcxMycsICc3MTQnLFxuICAgICAgICAgICAgJzcxNScsICc3MTYnLCAnNzE3JywgJzcxOCcsICc3MTknLCAnNzIwJywgJzcyMScsICc3MjInLCAnNzIzJywgJzcyNCcsICc3MjUnLFxuICAgICAgICAgICAgJzcyNicsICc3MjcnLCAnNzMwJywgJzczMScsICc3MzInLCAnNzMzJywgJzczNCcsICc3MzUnLCAnNzM2JywgJzczNycsICc3NDEnLFxuICAgICAgICAgICAgJzc0MicsICc3NDMnLCAnNzQ0JywgJzc0NSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmrmOmbhOW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+aWsOiIiOWNgCcsICfliY3ph5HljYAnLCAn6IuT6ZuF5Y2AJywgJ+m5veWfleWNgCcsICfpvJPlsbHljYAnLCAn5peX5rSl5Y2AJywgJ+WJjemOruWNgCcsICfkuInmsJHljYAnLFxuICAgICAgICAgICAgJ+aloOaik+WNgCcsICflsI/muK/ljYAnLCAn5bem54ef5Y2AJywgJ+S7geatpuWNgCcsICflpKfnpL7ljYAnLCAn5p2x5rKZ576k5bO2JywgJ+WNl+aymee+pOWzticsICflsqHlsbHljYAnLFxuICAgICAgICAgICAgJ+i3r+erueWNgCcsICfpmL/ok67ljYAnLCAn55Sw5a+u5Y2AJywgJ+eHleW3ouWNgCcsICfmqYvpoK3ljYAnLCAn5qKT5a6Y5Y2AJywgJ+W9jOmZgOWNgCcsICfmsLjlronljYAnLFxuICAgICAgICAgICAgJ+a5luWFp+WNgCcsICfps7PlsbHljYAnLCAn5aSn5a+u5Y2AJywgJ+ael+WckuWNgCcsICfps6Xmnb7ljYAnLCAn5aSn5qi55Y2AJywgJ+aXl+WxseWNgCcsICfnvo7mv4PljYAnLFxuICAgICAgICAgICAgJ+WFrem+nOWNgCcsICflhafploDljYAnLCAn5p2J5p6X5Y2AJywgJ+eUsuS7meWNgCcsICfmoYPmupDljYAnLCAn6YKj55Gq5aSP5Y2AJywgJ+iMguael+WNgCcsICfojITokKPljYAnXSxcblxuICAgICAgICAgICAgWyc4MDAnLCAnODAxJywgJzgwMicsICc4MDMnLCAnODA0JywgJzgwNScsICc4MDYnLCAnODA3JywgJzgxMScsICc4MTInLCAnODEzJyxcbiAgICAgICAgICAgICc4MTQnLCAnODE1JywgJzgxNycsICc4MTknLCAnODIwJywgJzgyMScsICc4MjInLCAnODIzJywgJzgyNCcsICc4MjUnLCAnODI2JywgJzgyNycsICc4MjgnLFxuICAgICAgICAgICAgJzgyOScsICc4MzAnLCAnODMxJywgJzgzMicsICc4MzMnLCAnODQwJywgJzg0MicsICc4NDMnLCAnODQ0JywgJzg0NScsICc4NDYnLFxuICAgICAgICAgICAgJzg0NycsICc4NDgnLCAnODQ5JywgJzg1MScsICc4NTInXVxuICAgICAgICBdLFxuICAgICAgICAvLyDmvo7muZbnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfppqzlhazluIInLCAn6KW/5ba86YSJJywgJ+acm+WuiemEiScsICfkuIPnvo7phIknLCAn55m95rKZ6YSJJywgJ+a5luilv+mEiSddLFxuXG4gICAgICAgICAgICBbJzg4MCcsICc4ODEnLCAnODgyJywgJzg4MycsICc4ODQnLCAnODg1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6YeR6ZaA57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6YeR5rKZ6Y6uJywgJ+mHkea5lumOricsICfph5Hlr6fphIknLCAn6YeR5Z+O6Y6uJywgJ+eDiOW2vOmEiScsICfng4/lnbXphIknXSxcblxuICAgICAgICAgICAgWyc4OTAnLCAnODkxJywgJzg5MicsICc4OTMnLCAnODk0JywgJzg5NiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWxj+adsee4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+Wxj+adseW4gicsICfkuInlnLDploDphIknLCAn6Zyn5Y+w6YSJJywgJ+eRquWutumEiScsICfkuZ3lpoLphIknLCAn6YeM5riv6YSJJywgJ+mrmOaouemEiScsICfpub3ln5TphIknLFxuICAgICAgICAgICAgJ+mVt+ayu+mEiScsICfpup/mtJvphIknLCAn56u555Sw6YSJJywgJ+WFp+WflOmEiScsICfokKzkuLnphIknLCAn5r2u5bee6Y6uJywgJ+azsOatpumEiScsICfkvobnvqnphIknLFxuICAgICAgICAgICAgJ+iQrOW3kumEiScsICfltIHpoILphIknLCAn5paw5Z+k6YSJJywgJ+WNl+W3numEiScsICfmnpfpgorphIknLCAn5p2x5riv6Y6uJywgJ+eQieeQg+mEiScsICfkvbPlhqzphIknLFxuICAgICAgICAgICAgJ+aWsOWckumEiScsICfmnovlr67phIknLCAn5p6L5bGx6YSJJywgJ+aYpeaXpemEiScsICfnjYXlrZDphIknLCAn6LuK5Z+O6YSJJywgJ+eJoeS4uemEiScsICfmgYbmmKXpjq4nLFxuICAgICAgICAgICAgJ+a7v+W3numEiSddLFxuXG4gICAgICAgICAgICBbJzkwMCcsICc5MDEnLCAnOTAyJywgJzkwMycsICc5MDQnLCAnOTA1JywgJzkwNicsICc5MDcnLCAnOTA4JywgJzkwOScsICc5MTEnLFxuICAgICAgICAgICAgJzkxMicsICc5MTMnLCAnOTIwJywgJzkyMScsICc5MjInLCAnOTIzJywgJzkyNCcsICc5MjUnLCAnOTI2JywgJzkyNycsICc5MjgnLFxuICAgICAgICAgICAgJzkyOScsICc5MzEnLCAnOTMyJywgJzk0MCcsICc5NDEnLCAnOTQyJywgJzk0MycsICc5NDQnLCAnOTQ1JywgJzk0NicsICc5NDcnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoh7rmnbHnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfoh7rmnbHluIInLCAn57ag5bO26YSJJywgJ+iYreW2vOmEiScsICflu7blubPphIknLCAn5Y2R5Y2X6YSJJywgJ+m5v+mHjumEiScsICfpl5zlsbHpjq4nLCAn5rW356uv6YSJJyxcbiAgICAgICAgICAgICfmsaDkuIrphIknLCAn5p2x5rKz6YSJJywgJ+aIkOWKn+mOricsICfplbfmv7HphIknLCAn5aSq6bq76YeMJywgJ+mHkeWzsOmEiScsICflpKfmrabphIknLCAn6YGU5LuB6YSJJ10sXG5cbiAgICAgICAgICAgIFsnOTUwJywgJzk1MScsICc5NTInLCAnOTUzJywgJzk1NCcsICc5NTUnLCAnOTU2JywgJzk1NycsICc5NTgnLCAnOTU5JywgJzk2MScsXG4gICAgICAgICAgICAnOTYyJywgJzk2MycsICc5NjQnLCAnOTY1JywgJzk2NiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOiKseiTrue4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+iKseiTruW4gicsICfmlrDln47phIknLCAn56eA5p6X6YSJJywgJ+WQieWuiemEiScsICflo73osZDphIknLCAn6bOz5p6X6Y6uJywgJ+WFieW+qemEiScsICfosZDmv7HphIknLFxuICAgICAgICAgICAgJ+eRnuepl+mEiScsICfokKzmpq7phIknLCAn546J6YeM6Y6uJywgJ+WNk+a6qumEiScsICflr4zph4zphIknXSxcblxuICAgICAgICAgICAgWyc5NzAnLCAnOTcxJywgJzk3MicsICc5NzMnLCAnOTc0JywgJzk3NScsICc5NzYnLCAnOTc3JywgJzk3OCcsICc5NzknLCAnOTgxJyxcbiAgICAgICAgICAgICc5ODInLCAnOTgzJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6YCj5rGf57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Y2X56u/6YSJJywgJ+WMl+erv+mEiScsICfojpLlhYnphIknLCAn5p2x5byV6YSJJ10sXG5cbiAgICAgICAgICAgIFsnMjA5JywgJzIxMCcsICcyMTEnLCAnMjEyJ11cbiAgICAgICAgXVxuICAgIF1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVPcHRpb25zKCkge1xuICAvLyBDaGVjayBvcHRpb25zIHJlcXVpcmVkXG4gIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICBnZXRPcHRpb25zUmVxdWlyZWQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgLy8gRXh0ZW5kIG9wdGlvbnNcbiAgcmV0dXJuIGdldE9wdGlvbnNFeHRlbmQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMl0pO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zUmVxdWlyZWQob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkKSB7XG4gIHZhciBlcnJvciA9ICcnO1xuICB2YXIgbGVuZ3RoID0gb3B0aW9uc1JlcXVpcmVkLmxlbmd0aDtcbiAgb3B0aW9uc0N1c3RvbSA9IG9wdGlvbnNDdXN0b20gfHwge307XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKCAhIG9wdGlvbnNDdXN0b20uaGFzT3duUHJvcGVydHkob3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0pKVxuICAgICAgZXJyb3IgKz0gb3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0gKyAnLCc7XG4gIH1cblxuICBpZiAoZXJyb3IpIHRocm93ICfnvLrlsJHlj4Pmlbg6ICcgKyBlcnJvcjtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0V4dGVuZChvcHRpb25zQ3VzdG9tLCBvcHRpb25zRGVmYXVsdCkge1xuICBpZiAoICEgb3B0aW9uc0N1c3RvbSkge1xuICAgIHJldHVybiBvcHRpb25zRGVmYXVsdDtcbiAgfVxuXG4gIHZhciBwcm9wZXJ0eTtcbiAgZm9yIChwcm9wZXJ0eSBpbiBvcHRpb25zQ3VzdG9tKSB7XG4gICAgb3B0aW9uc0RlZmF1bHRbcHJvcGVydHldID0gb3B0aW9uc0N1c3RvbVtwcm9wZXJ0eV07XG4gIH1cblxuICBpZiAob3B0aW9uc0N1c3RvbVsnZWxDb3VudHJ5J10pIHsgLy8g5ou85a2X6Yyv6Kqk5L+u5q2jXG4gICAgICBvcHRpb25zRGVmYXVsdFsnZWxDb3VudHknXSA9IG9wdGlvbnNDdXN0b21bJ2VsQ291bnRyeSddO1xuICB9XG5cbiAgaWYgKG9wdGlvbnNDdXN0b21bJ3NlbGVjdGVkQ291bnRyeSddKSB7IC8vIOaLvOWtl+mMr+iqpOS/ruato1xuICAgICAgb3B0aW9uc0RlZmF1bHRbJ3NlbGVjdGVkQ291bnR5J10gPSBvcHRpb25zQ3VzdG9tWydzZWxlY3RlZENvdW50cnknXTtcbiAgfVxuXG4gIGlmIChvcHRpb25zQ3VzdG9tWydjb3VudHJ5Q2xhc3NOYW1lJ10pIHsgLy8g5ou85a2X6Yyv6Kqk5L+u5q2jXG4gICAgICBvcHRpb25zRGVmYXVsdFsnY291bnR5Q2xhc3NOYW1lJ10gPSBvcHRpb25zQ3VzdG9tWydjb3VudHJ5Q2xhc3NOYW1lJ107XG4gIH1cblxuICBpZiAob3B0aW9uc0N1c3RvbVsnY291bnRyeUZpbGVkTmFtZSddKSB7IC8vIOaLvOWtl+mMr+iqpOS/ruato1xuICAgICAgb3B0aW9uc0RlZmF1bHRbJ2NvdW50eUZpbGVkTmFtZSddID0gb3B0aW9uc0N1c3RvbVsnY291bnRyeUZpbGVkTmFtZSddO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnNEZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kdWxlIGltcG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgaGFuZGxlT3B0aW9ucyBmcm9tICcuL2hhbmRsZS1vcHRpb25zJztcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kdWxlIGV4cG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBkZWZhdWx0IFR3Q2l0eVNlbGVjdG9yOyAvKiB1c2Ugcm9sbHVwIHRvIGJ1aWxkICovXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFR3Q2l0eVNlbGVjdG9yOyAvKiB1c2UgYnJvd3NlcmlmeSB0byBidWlsZCAqL1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb25zdHJ1Y3RvclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIFR3Q2l0eVNlbGVjdG9yKCkge1xuXG5cdHRoaXMuZWxSb2xlTmFtZSA9ICd0dy1jaXR5LXNlbGVjdG9yJztcblxuXHQvLyBTZXR0aW5nIG9wdGlvbnNcblx0dmFyIG9wdGlvbnNEZWZhdWx0ID0ge1xuXHRcdGVsOiBudWxsLFxuXHRcdGVsQ291bnR5OiBudWxsLFxuXHRcdGVsRGlzdHJpY3Q6IG51bGwsXG5cdFx0ZWxaaXBjb2RlOiBudWxsLFxuXHRcdHNlbGVjdGVkQ291bnR5OiBudWxsLCAvLyDpoJDoqK3pgbjmk4fnmoTnuKPluILlkI3nqLFcblx0XHRzZWxlY3RlZERpc3RyaWN0OiBudWxsLCAvLyDpoJDoqK3pgbjmk4fnmoTljYDln5/lkI3nqLFcblx0XHRvbmx5OiBudWxsLCAvLyB7YXJyYXl9IOmZkOWItumhr+ekuuWTquS6m+e4o+W4guWPiuWNgOWfn1xuICAgICAgICAvLyBvbmx5Q2l0eTogbnVsbCwgLy8ge2FycmF5fSDpmZDliLbpoa/npLrlk6rkupvnuKPluIIgQOWwgeWtmFxuXHRcdHNob3daaXBjb2RlOiBmYWxzZSwgLy8ge2Jvb2xlYW59IOaYr+WQpumhr+ekuumDtemBnuWNgOiZn+ashOS9jVxuXHRcdGJvb3RzdHJhcFN0eWxlOiBmYWxzZSxcblx0XHRjb3VudHlDbGFzc05hbWU6ICdjb3VudHknLFxuXHRcdGNvdW50eUZpbGVkTmFtZTogJ2NvdW50eScsXG5cdFx0ZGlzdHJpY3RDbGFzc05hbWU6ICdkaXN0cmljdCcsXG5cdFx0ZGlzdHJpY3RGaWVsZE5hbWU6ICdkaXN0cmljdCcsXG5cdFx0emlwY29kZUNsYXNzTmFtZTogJ3ppcGNvZGUnLFxuXHRcdHppcGNvZGVGaWVsZE5hbWU6ICd6aXBjb2RlJ1xuXHR9O1xuXG4gICAgdmFyIG9wdGlvbnNDdXN0b20gPSBhcmd1bWVudHNbMF07XG5cdHZhciBvcHRpb25zUmVxdWlyZWQgPSBhcmd1bWVudHMubGVuZ3RoID8gWydlbCddIDogbnVsbDsgLy8g6Kit572u5b+F6KaB5Y+D5pW477yM6Iul54Sh5bi25YWl5Lu75L2V5Y+D5pW45YmH6Kit5LiN6Kit572uXG5cdHRoaXMub3B0aW9ucyA9IGhhbmRsZU9wdGlvbnMob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkLCBvcHRpb25zRGVmYXVsdCk7XG5cbiAgICAvLyBTZXR1cFxuXHRlbFNldHVwLmNhbGwodGhpcyk7XG5cblx0Ly8gcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdWJsaWMgTWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR3Q2l0eVNlbGVjdG9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBpbml0LmNhbGwodGhpcyk7XG4vLyB9O1xuXG5Ud0NpdHlTZWxlY3Rvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHJlc2V0U2VsZWN0b3JzLmNhbGwodGhpcyk7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQcml2YXRlIE1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBlbFNldHVwKCkge1xuICAgIC8vIOacieaMh+WumiBlbGVtZW50IOeahOWIneWni+WMllxuXHRpZiAodGhpcy5vcHRpb25zLmVsKSB7XG5cdFx0dGhpcy5lbCA9IGdldEVsZW1lbnQodGhpcy5vcHRpb25zLmVsKTtcblx0XHR0aGlzLmVsQ291bnR5ID0gZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuZWxDb3VudHksIHRoaXMuZWwpO1xuXHRcdHRoaXMuZWxEaXN0cmljdCA9IGdldEVsZW1lbnQodGhpcy5vcHRpb25zLmVsRGlzdHJpY3QsIHRoaXMuZWwpO1xuXHRcdHRoaXMuZWxaaXBjb2RlID0gZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuZWxaaXBjb2RlLCB0aGlzLmVsKTtcblxuXHRcdHJldHVybiBpbml0LmNhbGwodGhpcyk7XG5cdH1cblxuXHQvLyDnhKHmjIflrpogZWxlbWVudCDnmoTliJ3lp4vljJbvvIzkvb/nlKggcm9sZS1hdHRyaWJ1dGUgZWxlbWVudCDkvZzngrrpoJDoqK0gZWxlbWVudHNcblx0dmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPScrIHRoaXMuZWxSb2xlTmFtZSArJ10nKTtcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbHMsIGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHNlbGYgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKTsgLy8gY2xvbmUgb2JqZWN077yM5ZugIG9iamVjdCDngrrlj4PogINcblxuXHRcdC8vIOWboOWPr+iDveWQjOaZguS9v+eUqOWFqeeoruWIneWni+WMluaWueW8j++8jOmcgOmHjee9ruioreWumlxuXHRcdHNlbGYuZWwgPSBlbDtcblx0XHRzZWxmLmVsQ291bnR5ID0gbnVsbDtcblx0XHRzZWxmLmVsRGlzdHJpY3QgPSBudWxsO1xuXHRcdHNlbGYuZWxaaXBjb2RlID0gbnVsbDtcblxuXHRcdC8vIOmZkOWItuWPqumhr+ekuuWTquS6m+e4o+W4guOAgeWNgOWfn1xuXHRcdHNlbGYub3B0aW9ucy5vbmx5ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHknKVxuXHRcdFx0PyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seScpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKSAvLyDljrvpmaTnqbrnmb3lrZflhYPvvIzovYnpmaPliJdcblx0XHRcdDogbnVsbDtcblxuICAgICAgICAvLyDpmZDliLbpoa/npLrlk6rkupvnuKPluIIgQOWwgeWtmFxuICAgIFx0Ly8gc2VsZi5vcHRpb25zLm9ubHlDaXR5ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHktY2l0eScpXG5cdFx0Ly8gXHQ/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5LWNpdHknKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykgLy8g5Y676Zmk56m655m95a2X5YWD77yM6L2J6Zmj5YiXXG5cdFx0Ly8gXHQ6IG51bGw7XG5cblx0XHQvLyDpoJDoqK3pgbjmk4fnmoTnuKPluIJcblx0XHRzZWxmLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtY291bnR5JykgfHwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkLWNvdW50cnknKTsgLy8g5ou85a2X6Yyv6KqkXG5cblx0XHQvLyDpoJDoqK3pgbjmk4fnmoTljYDln59cblx0XHRzZWxmLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1kaXN0cmljdCcpO1xuXG4gICAgICAgIC8vIOaYr+WQpuS9v+eUqCBib290c3RyYXAg5qij5byPXG5cdFx0c2VsZi5vcHRpb25zLmJvb3RzdHJhcFN0eWxlID0gKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1ib290c3RyYXAtc3R5bGUnKSAhPSBudWxsKTtcblxuICAgICAgICAvLyDmmK/lkKbpoa/npLrpg7XpgZ7ljYDomZ9cblx0XHRzZWxmLm9wdGlvbnMuc2hvd1ppcGNvZGUgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNob3ctemlwY29kZScpICE9IG51bGwpO1xuXG5cdFx0cmV0dXJuIGluaXQuY2FsbChzZWxmKTtcblx0fSwgdGhpcyk7XG5cbiAgICByZXR1cm4gZWxzO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuXHRzZXRFbGVtZW50cy5jYWxsKHRoaXMpO1xuXG4gICAgLy8g55uj6IG96YG45Zau5YuV5L2cXG5cdGxpc3RlbkNvdW50eUNoYW5nZWQuY2FsbCh0aGlzKTtcblx0bGlzdGVuRGlzdHJpY3RDaGFuZ2VkLmNhbGwodGhpcyk7XG5cblx0Ly8g6Kit5a6a6aCQ6Kit6YG45a6a55qE57ij5biCXG5cdHNldFNlbGVjdGVkSXRlbS5jYWxsKHRoaXMpO1xuXG5cdC8vIGJvb3RzdHJhcCDmqKPlvI/lpZflhaVcblx0aWYgKHRoaXMub3B0aW9ucy5ib290c3RyYXBTdHlsZSkge1xuXHRcdHNldEJvb3RzdHJhcFN0eWxlLmNhbGwodGhpcyk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudChlbCwgcGFyZW50KSB7XG4gICAgaWYgKCAhIGVsKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBpZiAocGFyZW50KVxuICAgICAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnRzKCkge1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0Ly8g57ij5biC6YG45ZauXG5cdGlmICggISB0aGlzLmVsQ291bnR5KSB7XG5cdFx0dmFyIGNvdW50eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdHRoaXMuZWxDb3VudHkgPSBjb3VudHk7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY291bnR5KTtcblx0fVxuXG5cdC8vIOe4o+W4gumBuOWWruWxrOaAp1xuXHR0aGlzLmVsQ291bnR5LmlubmVySFRNTCA9IGdldENvdW50eU9wdGlvbnMuY2FsbCh0aGlzKTtcblx0dGhpcy5lbENvdW50eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmNvdW50eUNsYXNzTmFtZSk7XG5cdHRoaXMuZWxDb3VudHkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHlGaWxlZE5hbWU7XG5cblx0Ly8g5Y2A5Z+f6YG45ZauXG5cdGlmICggISB0aGlzLmVsRGlzdHJpY3QpIHtcblx0XHR2YXIgZGlzdHJpY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0XHR0aGlzLmVsRGlzdHJpY3QgPSBkaXN0cmljdDtcblx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChkaXN0cmljdCk7XG5cdH1cblxuXHQvLyDljYDln5/pgbjllq7lsazmgKdcblx0dGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucy5jYWxsKHRoaXMpO1xuXHR0aGlzLmVsRGlzdHJpY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5kaXN0cmljdENsYXNzTmFtZSk7XG5cdHRoaXMuZWxEaXN0cmljdC5uYW1lID0gdGhpcy5vcHRpb25zLmRpc3RyaWN0RmllbGROYW1lO1xuXG5cdC8vIOmDtemBnuWNgOiZn1xuXHRpZiAoICEgdGhpcy5lbFppcGNvZGUpIHtcblx0XHR2YXIgemlwY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0dGhpcy5lbFppcGNvZGUgPSB6aXBjb2RlO1xuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKHppcGNvZGUpO1xuXG4gICAgICAgIC8vIOmDtemBnuWNgOiZn+WxrOaAp+ioreWumlxuICAgICAgICB0aGlzLmVsWmlwY29kZS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcHRpb25zLnNob3daaXBjb2RlIHx8ICdub25lJztcbiAgICAgICAgdGhpcy5lbFppcGNvZGUuc3R5bGUud2lkdGggPSAnNmVtJztcbiAgICAgICAgdGhpcy5lbFppcGNvZGUucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS50eXBlID0gJ3RleHQnO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS5wbGFjZWhvbGRlciA9ICfpg7XpgZ7ljYDomZ8nO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS5uYW1lID0gdGhpcy5vcHRpb25zLnppcGNvZGVGaWVsZE5hbWU7XG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuemlwY29kZUNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXHR9XG5cblx0Ly8gZWxlbWVudCDniYfmrrXloZ7lhaUgZWxcblx0dGhpcy5lbC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldENvdW50eUVsZW1lbnQoKSB7XG4gICAgLy8g57ij5biC6YG45ZauXG5cdGlmICggISB0aGlzLmVsQ291bnR5KSB7XG5cdFx0dmFyIGNvdW50eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdHRoaXMuZWxDb3VudHkgPSBjb3VudHk7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY291bnR5KTtcblx0fVxuXG5cdC8vIOe4o+W4gumBuOWWruWxrOaAp1xuXHR0aGlzLmVsQ291bnR5LmlubmVySFRNTCA9IGdldENvdW50eU9wdGlvbnMuY2FsbCh0aGlzKTtcblx0dGhpcy5lbENvdW50eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmNvdW50eUNsYXNzTmFtZSk7XG5cdHRoaXMuZWxDb3VudHkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHlGaWxlZE5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50eU9wdGlvbnMoKSB7XG5cdHZhciBlbE9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPumBuOaTh+e4o+W4gjwvb3B0aW9uPic7XG4gICAgdmFyIG9ubHlJdGVtcyA9IGdldENvdW50eU9ubHlJdGVtcy5jYWxsKHRoaXMpO1xuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gZGF0YS5jb3VudGllcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHQvLyDoi6XmnInoqK3lrprpmZDliLbpoa/npLrnmoTnuKPluILvvIzkuJToqbLpoIXnm67kuI3lnKjoh6roqILnuKPluILkuK3vvIzliYfkuI3poa/npLpcblx0XHRpZiAob25seUl0ZW1zICYmIG9ubHlJdGVtcy5pbmRleE9mKGRhdGEuY291bnRpZXNbaV0pID09PSAtMSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi6Ie65YyX5biCXCIgZGF0YS1pbmRleD1cIjBcIj7oh7rljJfluII8L29wdGlvbj5cblx0XHRlbE9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2RhdGEuY291bnRpZXNbaV19XCIgZGF0YS1pbmRleD1cIiR7aX1cIj4ke2RhdGEuY291bnRpZXNbaV19PC9vcHRpb24+YDtcblx0fVxuXG5cdHJldHVybiBlbE9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCkge1xuXHRpZiAoICEgaW5kZXgpIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPi0tLTwvb3B0aW9uPic7XG5cblx0dmFyIGVsT3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ+6YG45pOH5Y2A5Z+fPC9vcHRpb24+JztcbiAgICB2YXIgY291bnR5VmFsdWUgPSB0aGlzLmVsQ291bnR5LnZhbHVlO1xuICAgIHZhciBvbmx5SXRlbXMgPSBnZXREaXN0cmljdE9ubHlJdGVtcy5jYWxsKHRoaXMsIGNvdW50eVZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhvbmx5SXRlbXMpO1xuXG5cdGZvcih2YXIgaSA9IDAsIGogPSBkYXRhLmRpc3RyaWN0c1tpbmRleF1bMF0ubGVuZ3RoIC0gMTsgaSA8PSBqOyBpKyspIHtcbiAgICAgICAgLy8g6Iul5pyJ6Kit5a6a6ZmQ5Yi26aGv56S655qE5Y2A5Z+f77yM5LiU6Kmy6aCF55uu5LiN5Zyo6Ieq6KiC5Y2A5Z+f5Lit77yM5YmH5LiN6aGv56S6XG4gICAgICAgIGlmIChvbmx5SXRlbXMgJiYgb25seUl0ZW1zLmluZGV4T2YoZGF0YS5kaXN0cmljdHNbaW5kZXhdWzBdW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cblx0XHQvLyBmb3JtYXQ6IDxvcHRpb24gdmFsdWU9XCLkuK3mraPljYBcIiBkYXRhLXppcGNvZGU9XCIxMDBcIj7kuK3mraPljYA8L29wdGlvbj5cblx0XHRlbE9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2RhdGEuZGlzdHJpY3RzW2luZGV4XVswXVtpXX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS16aXBjb2RlPVwiJHtkYXRhLmRpc3RyaWN0c1tpbmRleF1bMV1baV19XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG5cdFx0ICAgICAgICAgICAgICAgICAgJHtkYXRhLmRpc3RyaWN0c1tpbmRleF1bMF1baV19XG5cdFx0ICAgICAgICAgICAgICA8L29wdGlvbj5gO1xuXHR9XG5cblx0cmV0dXJuIGVsT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnR5T25seUl0ZW1zKCkge1xuICAgIHZhciBvbmx5SXRlbXMgPSB0aGlzLm9wdGlvbnMub25seTtcbiAgICBpZiAoICEgQXJyYXkuaXNBcnJheShvbmx5SXRlbXMpKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIOWPluWHuue4o+W4guizh+aWmVxuICAgIHJldHVybiBvbmx5SXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gaXRlbS5pbmRleE9mKCdAJyk7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyBpdGVtIDogaXRlbS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREaXN0cmljdE9ubHlJdGVtcyhjb3VudHkpIHtcbiAgICB2YXIgb25seUl0ZW1zID0gdGhpcy5vcHRpb25zLm9ubHk7XG4gICAgaWYgKCAhIEFycmF5LmlzQXJyYXkob25seUl0ZW1zKSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyDlj5blh7rljYDln5/os4fmlplcbiAgICB2YXIgaXRlbXMgPSBudWxsO1xuICAgIG9ubHlJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uaW5kZXhPZihjb3VudHkpID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpbmRleCA9IGl0ZW0ubGFzdEluZGV4T2YoJ0AnKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zID0gaXRlbS5zdWJzdHJpbmcoaW5kZXggKyAxKS5zcGxpdCgnfCcpOyAvLyDovYnpmaPliJdcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Db3VudHlDaGFuZ2VkKCkge1xuXHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpbmRleCA9IHRoaXMuZWxDb3VudHkucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKS5kYXRhc2V0LmluZGV4O1xuXHRcdHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMuY2FsbCh0aGlzLCBpbmRleCk7XG5cdFx0dGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcblx0fS5iaW5kKHRoaXMpO1xuXG5cdHRoaXMuZWxDb3VudHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGxpc3RlbkRpc3RyaWN0Q2hhbmdlZCgpIHtcblx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgemlwY29kZSA9IHRoaXMuZWxEaXN0cmljdC5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpLmRhdGFzZXQuemlwY29kZSB8fCAnJztcblx0XHR0aGlzLmVsWmlwY29kZS52YWx1ZSA9IHppcGNvZGU7XG5cdH0uYmluZCh0aGlzKTtcblxuXHR0aGlzLmVsRGlzdHJpY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGVkSXRlbSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkQ291bnR5KSB7XG4gICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIFx0ZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcblxuICAgIFx0dGhpcy5lbENvdW50eS52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZENvdW50eTtcbiAgICBcdHRoaXMuZWxDb3VudHkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG5cdGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCkge1xuXHRcdHRoaXMuZWxEaXN0cmljdC52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZERpc3RyaWN0O1xuXHRcdHRoaXMuZWxEaXN0cmljdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXNldFNlbGVjdG9ycygpIHtcblx0dGhpcy5lbENvdW50eS5zZWxlY3RlZEluZGV4ID0gMDtcblx0dGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucy5jYWxsKHRoaXMpO1xuXHR0aGlzLmVsWmlwY29kZS52YWx1ZSA9ICcnO1xuXG5cdHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzZXRCb290c3RyYXBTdHlsZSgpIHtcblx0dmFyIGZpZWxkQ2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gICAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSAnZm9ybS1ncm91cCc7XG5cdHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuXHR0aGlzLmVsQ291bnR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWVsZENsYXNzTmFtZSk7XG5cdHRoaXMuZWxEaXN0cmljdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZmllbGRDbGFzc05hbWUpO1xuXHR0aGlzLmVsWmlwY29kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZmllbGRDbGFzc05hbWUpO1xuXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB3cmFwcGVyQ2xhc3NOYW1lKTtcblxuXHR2YXIgZWxDb3VudHkgPSB3cmFwcGVyLmNsb25lTm9kZSgpO1xuXHRlbENvdW50eS5hcHBlbmRDaGlsZCh0aGlzLmVsQ291bnR5KTtcblx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxDb3VudHkpO1xuXG5cdHZhciBlbERpc3RyaWN0ID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcblx0ZWxEaXN0cmljdC5hcHBlbmRDaGlsZCh0aGlzLmVsRGlzdHJpY3QpO1xuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbERpc3RyaWN0KTtcblxuXHR2YXIgZWxaaXBjb2RlID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcblx0ZWxaaXBjb2RlLmFwcGVuZENoaWxkKHRoaXMuZWxaaXBjb2RlKTtcblx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxaaXBjb2RlKTtcblxuXHR0aGlzLmVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbiJdLCJuYW1lcyI6WyJkYXRhIiwiaGFuZGxlT3B0aW9ucyIsImFyZ3VtZW50cyIsImdldE9wdGlvbnNFeHRlbmQiLCJnZXRPcHRpb25zUmVxdWlyZWQiLCJvcHRpb25zQ3VzdG9tIiwib3B0aW9uc1JlcXVpcmVkIiwiZXJyb3IiLCJsZW5ndGgiLCJoYXNPd25Qcm9wZXJ0eSIsIm9wdGlvbnNEZWZhdWx0IiwicHJvcGVydHkiLCJUd0NpdHlTZWxlY3RvciIsImVsUm9sZU5hbWUiLCJvcHRpb25zIiwiY2FsbCIsInByb3RvdHlwZSIsInJlc2V0IiwicmVzZXRTZWxlY3RvcnMiLCJlbFNldHVwIiwiZWwiLCJnZXRFbGVtZW50IiwiZWxDb3VudHkiLCJlbERpc3RyaWN0IiwiZWxaaXBjb2RlIiwiaW5pdCIsImVscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzZWxmIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwib25seSIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJzcGxpdCIsInNlbGVjdGVkQ291bnR5Iiwic2VsZWN0ZWREaXN0cmljdCIsImJvb3RzdHJhcFN0eWxlIiwic2hvd1ppcGNvZGUiLCJwYXJlbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0RWxlbWVudHMiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjb3VudHkiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJnZXRDb3VudHlPcHRpb25zIiwic2V0QXR0cmlidXRlIiwiY291bnR5Q2xhc3NOYW1lIiwibmFtZSIsImNvdW50eUZpbGVkTmFtZSIsImRpc3RyaWN0IiwiZ2V0RGlzdHJpY3RPcHRpb25zIiwiZGlzdHJpY3RDbGFzc05hbWUiLCJkaXN0cmljdEZpZWxkTmFtZSIsInppcGNvZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aWR0aCIsInJlYWRPbmx5IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiemlwY29kZUZpZWxkTmFtZSIsInppcGNvZGVDbGFzc05hbWUiLCJhdXRvY29tcGxldGUiLCJlbE9wdGlvbnMiLCJvbmx5SXRlbXMiLCJnZXRDb3VudHlPbmx5SXRlbXMiLCJpIiwiaiIsImNvdW50aWVzIiwiaW5kZXhPZiIsImluZGV4IiwiY291bnR5VmFsdWUiLCJ2YWx1ZSIsImdldERpc3RyaWN0T25seUl0ZW1zIiwiZGlzdHJpY3RzIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsInN1YnN0cmluZyIsIml0ZW1zIiwibGFzdEluZGV4T2YiLCJsaXN0ZW5Db3VudHlDaGFuZ2VkIiwiaGFuZGxlciIsImRhdGFzZXQiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbkRpc3RyaWN0Q2hhbmdlZCIsInNldFNlbGVjdGVkSXRlbSIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2VsZWN0ZWRJbmRleCIsInNldEJvb3RzdHJhcFN0eWxlIiwiZmllbGRDbGFzc05hbWUiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwid3JhcHBlciIsImNsb25lTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSUEsU0FBTzs7Y0FFRyxDQUNOLEtBRE0sRUFDQyxLQURELEVBQ1EsS0FEUixFQUNlLEtBRGYsRUFDc0IsS0FEdEIsRUFDNkIsS0FEN0IsRUFDb0MsS0FEcEMsRUFDMkMsS0FEM0MsRUFFTixLQUZNLEVBRUMsS0FGRCxFQUVRLEtBRlIsRUFFZSxLQUZmLEVBRXNCLEtBRnRCLEVBRTZCLEtBRjdCLEVBRW9DLEtBRnBDLEVBRTJDLEtBRjNDLEVBR04sS0FITSxFQUdDLEtBSEQsRUFH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