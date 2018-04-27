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
		showDistrict: true, // {boolean} 是否顯示區域欄位
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

		// 是否顯示區域
		self.options.showDistrict = el.getAttribute('data-show-district') != null;

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
	if (!this.options.showDistrict) {
		this.elDistrict.style.display = 'none';
	}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2hlcmJlcnQvdHctY2l0eS1zZWxlY3Rvci9zcmMvZGF0YS5qcyIsIkM6L1VzZXJzL2hlcmJlcnQvdHctY2l0eS1zZWxlY3Rvci9zcmMvaGFuZGxlLW9wdGlvbnMuanMiLCJDOi9Vc2Vycy9oZXJiZXJ0L3R3LWNpdHktc2VsZWN0b3Ivc3JjL3R3LWNpdHktc2VsZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuXHJcbnZhciBkYXRhID0ge1xyXG4gICAgLy8g57ij5biCXHJcbiAgICBjb3VudGllczogW1xyXG4gICAgICAgICfoh7rljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOerueW4gicsICfmlrDnq7nnuKMnLCAn6IuX5qCX57ijJyxcclxuICAgICAgICAn6Ie65Lit5biCJywgJ+W9sOWMlue4oycsICfljZfmipXnuKMnLCAn5ZiJ576p5biCJywgJ+WYiee+qee4oycsICfpm7LmnpfnuKMnLCAn6Ie65Y2X5biCJywgJ+mrmOmbhOW4gicsXHJcbiAgICAgICAgJ+a+jua5lue4oycsICfph5HploDnuKMnLCAn5bGP5p2x57ijJywgJ+iHuuadsee4oycsICfoirHok67nuKMnLCAn6YCj5rGf57ijJ1xyXG4gICAgXSxcclxuXHJcbiAgICAvLyDljYDln59cclxuICAgIGRpc3RyaWN0czogW1xyXG4gICAgICAgIC8vIOiHuuWMl+W4glxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWyfkuK3mraPljYAnLCAn5aSn5ZCM5Y2AJywgJ+S4reWxseWNgCcsICfmnb7lsbHljYAnLCAn5aSn5a6J5Y2AJywgJ+iQrOiPr+WNgCcsICfkv6HnvqnljYAnLFxyXG4gICAgICAgICAgICAn5aOr5p6X5Y2AJywgJ+WMl+aKleWNgCcsICflhafmuZbljYAnLCAn5Y2X5riv5Y2AJywgJ+aWh+WxseWNgCddLFxyXG5cclxuICAgICAgICAgICAgWycxMDAnLCAnMTAzJywgJzEwNCcsICcxMDUnLCAnMTA2JywgJzEwOCcsICcxMTAnLCAnMTExJywgJzExMicsICcxMTQnLCAnMTE1JywgJzExNiddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyDln7rpmobluIJcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsn5LuB5oSb5Y2AJywgJ+S/oee+qeWNgCcsICfkuK3mraPljYAnLCAn5Lit5bGx5Y2AJywgJ+WuieaoguWNgCcsICfmmpbmmpbljYAnLCAn5LiD5aC15Y2AJ10sXHJcblxyXG4gICAgICAgICAgICBbJzIwMCcsICcyMDEnLCAnMjAyJywgJzIwMycsICcyMDQnLCAnMjA1JywgJzIwNiddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyDmlrDljJfluIJcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsn6JCs6YeM5Y2AJywgJ+mHkeWxseWNgCcsICfmnb/mqYvljYAnLCAn5rGQ5q2i5Y2AJywgJ+a3seWdkeWNgCcsICfnn7PnoofljYAnLCAn55Ge6Iqz5Y2AJywgJ+W5s+a6quWNgCcsXHJcbiAgICAgICAgICAgICfpm5nmuqrljYAnLCAn6LKi5a+u5Y2AJywgJ+aWsOW6l+WNgCcsICflnarmnpfljYAnLCAn54OP5L6G5Y2AJywgJ+awuOWSjOWNgCcsICfkuK3lkozljYAnLCAn5Zyf5Z+O5Y2AJyxcclxuICAgICAgICAgICAgJ+S4ieWzveWNgCcsICfmqLnmnpfljYAnLCAn6bav5q2M5Y2AJywgJ+S4iemHjeWNgCcsICfmlrDojorljYAnLCAn5rOw5bGx5Y2AJywgJ+ael+WPo+WNgCcsICfomIbmtLLljYAnLFxyXG4gICAgICAgICAgICAn5LqU6IKh5Y2AJywgJ+WFq+mHjOWNgCcsICfmt6HmsLTljYAnLCAn5LiJ6Iqd5Y2AJywgJ+efs+mWgOWNgCddLFxyXG5cclxuICAgICAgICAgICAgWycyMDcnLCAnMjA4JywgJzIyMCcsICcyMjEnLCAnMjIyJywgJzIyMycsICcyMjQnLCAnMjI2JywgJzIyNycsICcyMjgnLFxyXG4gICAgICAgICAgICAnMjMxJywgJzIzMicsICcyMzMnLCAnMjM0JywgJzIzNScsICcyMzYnLCAnMjM3JywgJzIzOCcsICcyMzknLCAnMjQxJyxcclxuICAgICAgICAgICAgJzI0MicsICcyNDMnLCAnMjQ0JywgJzI0NycsICcyNDgnLCAnMjQ5JywgJzI1MScsICcyNTInLCAnMjUzJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOWunOiYree4o1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWyflrpzomK3luIInLCAn6aCt5Z+O6Y6uJywgJ+ekgea6qumEiScsICflo6/lnI3phIknLCAn5ZOh5bGx6YSJJywgJ+e+headsemOricsICfkuInmmJ/phIknLCAn5aSn5ZCM6YSJJyxcclxuICAgICAgICAgICAgJ+S6lOe1kOmEiScsICflhqzlsbHphIknLCAn6JiH5r6z6Y6uJywgJ+WNl+a+s+mEiScsICfph6PprZrlj7AnXSxcclxuXHJcbiAgICAgICAgICAgIFsnMjYwJywgJzI2MScsICcyNjInLCAnMjYzJywgJzI2NCcsICcyNjUnLCAnMjY2JywgJzI2NycsICcyNjgnLCAnMjY5JyxcclxuICAgICAgICAgICAgJzI3MCcsICcyNzInLCAnMjkwJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOahg+WckuW4glxyXG4gICAgXHRbXHJcbiAgICBcdFx0WyfkuK3lo6LljYAnLCAn5bmz6Y6u5Y2AJywgJ+m+jea9reWNgCcsICfmpYrmooXljYAnLCAn5paw5bGL5Y2AJywgJ+ingOmfs+WNgCcsICfmoYPlnJLljYAnLCAn6b6c5bGx5Y2AJyxcclxuICAgIFx0XHQn5YWr5b635Y2AJywgJ+Wkp+a6quWNgCcsICflvqnoiIjljYAnLCAn5aSn5ZyS5Y2AJywgJ+iYhuerueWNgCddLFxyXG5cclxuICAgIFx0XHRbJzMyMCcsICczMjQnLCAnMzI1JywgJzMyNicsICczMjcnLCAnMzI4JywgJzMzMCcsICczMzMnLCAnMzM0JywgJzMzNScsXHJcbiAgICBcdFx0JzMzNicsICczMzcnLCAnMzM4J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOaWsOerueW4glxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWyfmnbHljYAnLCAn5YyX5Y2AJywgJ+mmmeWxseWNgCddLFxyXG5cclxuICAgICAgICAgICAgWyczMDAnLCAnMzAwJywgJzMwMCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyDmlrDnq7nnuKNcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsn56u55YyX5biCJywgJ+a5luWPo+mEiScsICfmlrDosZDphIknLCAn5paw5Z+U6Y6uJywgJ+mXnOilv+mOricsICfoio7mnpfphIknLCAn5a+25bGx6YSJJyxcclxuICAgICAgICAgICAgJ+erueadsemOricsICfkupTls7DphIknLCAn5qmr5bGx6YSJJywgJ+Wwluefs+mEiScsICfljJfln5TphIknLCAn5bOo55yJ6YSJJ10sXHJcblxyXG4gICAgICAgICAgICBbJzMwMicsICczMDMnLCAnMzA0JywgJzMwNScsICczMDYnLCAnMzA3JywgJzMwOCcsICczMTAnLCAnMzExJyxcclxuICAgICAgICAgICAgJzMxMicsICczMTMnLCAnMzE0JywgJzMxNSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyDoi5fmoJfnuKNcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsn56u55Y2X6Y6uJywgJ+mgreS7veW4gicsICfkuInngaPphIknLCAn5Y2X5bqE6YSJJywgJ+eNhea9remEiScsICflvozpvo3pjq4nLCAn6YCa6ZyE6Y6uJywgJ+iLkeijoemOricsXHJcbiAgICAgICAgICAgICfoi5fmoJfluIInLCAn6YCg5qmL6YSJJywgJ+mgreWxi+mEiScsICflhazppKjphIknLCAn5aSn5rmW6YSJJywgJ+azsOWuiemEiScsXHJcbiAgICAgICAgICAgICfpioXpkbzphIknLCAn5LiJ576p6YSJJywgJ+ilv+a5lumEiScsICfljZPomK3pjq4nXSxcclxuXHJcbiAgICAgICAgICAgIFsnMzUwJywgJzM1MScsICczNTInLCAnMzUzJywgJzM1NCcsICczNTYnLCAnMzU3JywgJzM1OCcsICczNjAnLCAnMzYxJyxcclxuICAgICAgICAgICAgJzM2MicsICczNjMnLCAnMzY0JywgJzM2NScsICczNjYnLCAnMzY3JywgJzM2OCcsICczNjknXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g6Ie65Lit5biCXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+S4reWNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+ilv+WNgCcsICfljJfljYAnLCAn5YyX5bGv5Y2AJywgJ+ilv+Wxr+WNgCcsICfljZflsa/ljYAnLCAn5aSq5bmz5Y2AJyxcclxuICAgICAgICAgICAgJ+Wkp+mHjOWNgCcsICfpnKfls7DljYAnLCAn54OP5pel5Y2AJywgJ+ixkOWOn+WNgCcsICflkI7ph4zljYAnLCAn55+z5bKh5Y2AJywgJ+adseWLouWNgCcsICflkozlubPljYAnLFxyXG4gICAgICAgICAgICAn5paw56S+5Y2AJywgJ+a9reWtkOWNgCcsICflpKfpm4XljYAnLCAn56We5bKh5Y2AJywgJ+Wkp+iCmuWNgCcsICfmspnpub/ljYAnLCAn6b6N5LqV5Y2AJywgJ+aip+ajsuWNgCcsXHJcbiAgICAgICAgICAgICfmuIXmsLTljYAnLCAn5aSn55Sy5Y2AJywgJ+WkluWflOWNgCcsICflpKflronljYAnXSxcclxuXHJcbiAgICAgICAgICAgIFsnNDAwJywgJzQwMScsICc0MDInLCAnNDAzJywgJzQwNCcsICc0MDYnLCAnNDA3JywgJzQwOCcsICc0MTEnLCAnNDEyJyxcclxuICAgICAgICAgICAgJzQxMycsICc0MTQnLCAnNDIwJywgJzQyMScsICc0MjInLCAnNDIzJywgJzQyNCcsICc0MjYnLCAnNDI3JywgJzQyOCcsXHJcbiAgICAgICAgICAgICc0MjknLCAnNDMyJywgJzQzMycsICc0MzQnLCAnNDM1JywgJzQzNicsICc0MzcnLCAnNDM4JywgJzQzOSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyDlvbDljJbnuKNcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsn5b2w5YyW5biCJywgJ+iKrOWckumEiScsICfoirHlo4fphIknLCAn56eA5rC06YSJJywgJ+m5v+a4r+mOricsICfnpo/oiIjphIknLCAn57ea6KW/6YSJJywgJ+WSjOe+jumOricsXHJcbiAgICAgICAgICAgICfkvLjmuK/phIknLCAn5ZOh5p6X5biCJywgJ+ekvumgremEiScsICfmsLjpnZbphIknLCAn5Z+U5b+D6YSJJywgJ+a6qua5lumOricsICflpKfmnZHphIknLCAn5Z+U6bm96YSJJyxcclxuICAgICAgICAgICAgJ+eUsOS4remOricsICfljJfmlpfpjq4nLCAn55Sw5bC+6YSJJywgJ+WfpOmgremEiScsICfmuqrlt57phIknLCAn56u55aGY6YSJJywgJ+S6jOael+mOricsICflpKfln47phIknLFxyXG4gICAgICAgICAgICAn6Iqz6IuR6YSJJywgJ+S6jOawtOmEiSddLFxyXG5cclxuICAgICAgICAgICAgWyc1MDAnLCAnNTAyJywgJzUwMycsICc1MDQnLCAnNTA1JywgJzUwNicsICc1MDcnLCAnNTA4JywgJzUwOScsICc1MTAnLFxyXG4gICAgICAgICAgICAnNTExJywgJzUxMicsICc1MTMnLCAnNTE0JywgJzUxNScsICc1MTYnLCAnNTIwJywgJzUyMScsICc1MjInLCAnNTIzJyxcclxuICAgICAgICAgICAgJzUyNCcsICc1MjUnLCAnNTI2JywgJzUyNycsICc1MjgnLCAnNTMwJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOWNl+aKlee4o1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWyfljZfmipXluIInLCAn5Lit5a+u6YSJJywgJ+iNieWxr+mOricsICflnIvlp5PphIknLCAn5Z+U6YeM6Y6uJywgJ+S7geaEm+mEiScsICflkI3plpPphIknLCAn6ZuG6ZuG6Y6uJyxcclxuICAgICAgICAgICAgJ+awtOmHjOmEiScsICfprZrmsaDphIknLCAn5L+h576p6YSJJywgJ+erueWxsemOricsICfpub/osLfphIknXSxcclxuXHJcbiAgICAgICAgICAgIFsnNTQwJywgJzU0MScsICc1NDInLCAnNTQ0JywgJzU0NScsICc1NDYnLCAnNTUxJywgJzU1MicsICc1NTMnLCAnNTU1JyxcclxuICAgICAgICAgICAgJzU1NicsICc1NTcnLCAnNTU4J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOWYiee+qeW4glxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWyfmnbHljYAnLCAn6KW/5Y2AJ10sXHJcblxyXG4gICAgICAgICAgICBbJzYwMCcsICc2MDAnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g5ZiJ576p57ijXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+eVqui3r+mEiScsICfmooXlsbHphIknLCAn56u55bSO6YSJJywgJ+mYv+mHjOWxsScsICfkuK3ln5TphIknLCAn5aSn5Z+U6YSJJywgJ+awtOS4iumEiScsXHJcbiAgICAgICAgICAgICfpub/ojYnphIknLCAn5aSq5L+d5biCJywgJ+actOWtkOW4gicsICfmnbHnn7PphIknLCAn5YWt6IWz6YSJJywgJ+aWsOa4r+mEiScsICfmsJHpm4TphIknLCAn5aSn5p6X6Y6uJyxcclxuICAgICAgICAgICAgJ+a6quWPo+mEiScsICfnvqnnq7nphIknLCAn5biD6KKL6Y6uJ10sXHJcblxyXG4gICAgICAgICAgICBbJzYwMicsICc2MDMnLCAnNjA0JywgJzYwNScsICc2MDYnLCAnNjA3JywgJzYwOCcsICc2MTEnLCAnNjEyJyxcclxuICAgICAgICAgICAgJzYxMycsICc2MTQnLCAnNjE1JywgJzYxNicsICc2MjEnLCAnNjIyJywgJzYyMycsICc2MjQnLCAnNjI1J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOmbsuael+e4o1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWyfmlpfljZfpjq4nLCAn5aSn5Z+k6YSJJywgJ+iZjuWwvumOricsICflnJ/luqvpjq4nLCAn6KSS5b+g6YSJJywgJ+adseWLoumEiScsICfoh7ropb/phIknLCAn5bSZ6IOM6YSJJyxcclxuICAgICAgICAgICAgJ+m6peWvrumEiScsICfmlpflha3luIInLCAn5p6X5YWn6YSJJywgJ+WPpOWdkemEiScsICfojr/moZDphIknLCAn6KW/6J666Y6uJywgJ+S6jOW0memEiScsICfljJfmuK/pjq4nLFxyXG4gICAgICAgICAgICAn5rC05p6X6YSJJywgJ+WPo+a5lumEiScsICflm5vmuZbphIknLCAn5YWD6ZW36YSJJ10sXHJcblxyXG4gICAgICAgICAgICBbJzYzMCcsICc2MzEnLCAnNjMyJywgJzYzMycsICc2MzQnLCAnNjM1JywgJzYzNicsICc2MzcnLCAnNjM4JywgJzY0MCcsICc2NDMnLFxyXG4gICAgICAgICAgICAnNjQ2JywgJzY0NycsICc2NDgnLCAnNjQ5JywgJzY1MScsICc2NTInLCAnNjUzJywgJzY1NCcsICc2NTUnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g6Ie65Y2X5biCXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+S4reilv+WNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+WMl+WNgCcsICflronlubPljYAnLCAn5a6J5Y2X5Y2AJywgJ+awuOW6t+WNgCcsICfmrbjku4HljYAnLCAn5paw5YyW5Y2AJyxcclxuICAgICAgICAgICAgJ+W3pumOruWNgCcsICfnjonkupXljYAnLCAn5qWg6KW/5Y2AJywgJ+WNl+WMluWNgCcsICfku4HlvrfljYAnLCAn6Zec5buf5Y2AJywgJ+m+jeW0juWNgCcsICflrpjnlLDljYAnLFxyXG4gICAgICAgICAgICAn6bq76LGG5Y2AJywgJ+S9s+mHjOWNgCcsICfopb/muK/ljYAnLCAn5LiD6IKh5Y2AJywgJ+Wwh+i7jeWNgCcsICflrbjnlLLljYAnLCAn5YyX6ZaA5Y2AJywgJ+aWsOeHn+WNgCcsXHJcbiAgICAgICAgICAgICflvozlo4HljYAnLCAn55m95rKz5Y2AJywgJ+adseWxseWNgCcsICflha3nlLLljYAnLCAn5LiL54ef5Y2AJywgJ+afs+eHn+WNgCcsICfpub3msLTljYAnLCAn5ZaE5YyW5Y2AJyxcclxuICAgICAgICAgICAgJ+Wkp+WFp+WNgCcsICflsbHkuIrljYAnLCAn5paw5biC5Y2AJywgJ+WuieWumuWNgCddLFxyXG5cclxuICAgICAgICAgICAgWyc3MDAnLCAnNzAxJywgJzcwMicsICc3MDQnLCAnNzA4JywgJzcwOScsICc3MTAnLCAnNzExJywgJzcxMicsICc3MTMnLCAnNzE0JyxcclxuICAgICAgICAgICAgJzcxNScsICc3MTYnLCAnNzE3JywgJzcxOCcsICc3MTknLCAnNzIwJywgJzcyMScsICc3MjInLCAnNzIzJywgJzcyNCcsICc3MjUnLFxyXG4gICAgICAgICAgICAnNzI2JywgJzcyNycsICc3MzAnLCAnNzMxJywgJzczMicsICc3MzMnLCAnNzM0JywgJzczNScsICc3MzYnLCAnNzM3JywgJzc0MScsXHJcbiAgICAgICAgICAgICc3NDInLCAnNzQzJywgJzc0NCcsICc3NDUnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g6auY6ZuE5biCXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+aWsOiIiOWNgCcsICfliY3ph5HljYAnLCAn6IuT6ZuF5Y2AJywgJ+m5veWfleWNgCcsICfpvJPlsbHljYAnLCAn5peX5rSl5Y2AJywgJ+WJjemOruWNgCcsICfkuInmsJHljYAnLFxyXG4gICAgICAgICAgICAn5qWg5qKT5Y2AJywgJ+Wwj+a4r+WNgCcsICflt6bnh5/ljYAnLCAn5LuB5q2m5Y2AJywgJ+Wkp+ekvuWNgCcsICfmnbHmspnnvqTls7YnLCAn5Y2X5rKZ576k5bO2JywgJ+WyoeWxseWNgCcsXHJcbiAgICAgICAgICAgICfot6/nq7nljYAnLCAn6Zi/6JOu5Y2AJywgJ+eUsOWvruWNgCcsICfnh5Xlt6LljYAnLCAn5qmL6aCt5Y2AJywgJ+aik+WumOWNgCcsICflvYzpmYDljYAnLCAn5rC45a6J5Y2AJyxcclxuICAgICAgICAgICAgJ+a5luWFp+WNgCcsICfps7PlsbHljYAnLCAn5aSn5a+u5Y2AJywgJ+ael+WckuWNgCcsICfps6Xmnb7ljYAnLCAn5aSn5qi55Y2AJywgJ+aXl+WxseWNgCcsICfnvo7mv4PljYAnLFxyXG4gICAgICAgICAgICAn5YWt6b6c5Y2AJywgJ+WFp+mWgOWNgCcsICfmnYnmnpfljYAnLCAn55Sy5LuZ5Y2AJywgJ+ahg+a6kOWNgCcsICfpgqPnkarlpI/ljYAnLCAn6IyC5p6X5Y2AJywgJ+iMhOiQo+WNgCddLFxyXG5cclxuICAgICAgICAgICAgWyc4MDAnLCAnODAxJywgJzgwMicsICc4MDMnLCAnODA0JywgJzgwNScsICc4MDYnLCAnODA3JywgJzgxMScsICc4MTInLCAnODEzJyxcclxuICAgICAgICAgICAgJzgxNCcsICc4MTUnLCAnODE3JywgJzgxOScsICc4MjAnLCAnODIxJywgJzgyMicsICc4MjMnLCAnODI0JywgJzgyNScsICc4MjYnLCAnODI3JywgJzgyOCcsXHJcbiAgICAgICAgICAgICc4MjknLCAnODMwJywgJzgzMScsICc4MzInLCAnODMzJywgJzg0MCcsICc4NDInLCAnODQzJywgJzg0NCcsICc4NDUnLCAnODQ2JyxcclxuICAgICAgICAgICAgJzg0NycsICc4NDgnLCAnODQ5JywgJzg1MScsICc4NTInXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g5r6O5rmW57ijXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+mmrOWFrOW4gicsICfopb/ltrzphIknLCAn5pyb5a6J6YSJJywgJ+S4g+e+jumEiScsICfnmb3mspnphIknLCAn5rmW6KW/6YSJJ10sXHJcblxyXG4gICAgICAgICAgICBbJzg4MCcsICc4ODEnLCAnODgyJywgJzg4MycsICc4ODQnLCAnODg1J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOmHkemWgOe4o1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWyfph5Hmspnpjq4nLCAn6YeR5rmW6Y6uJywgJ+mHkeWvp+mEiScsICfph5Hln47pjq4nLCAn54OI5ba86YSJJywgJ+eDj+WdtemEiSddLFxyXG5cclxuICAgICAgICAgICAgWyc4OTAnLCAnODkxJywgJzg5MicsICc4OTMnLCAnODk0JywgJzg5NiddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyDlsY/mnbHnuKNcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsn5bGP5p2x5biCJywgJ+S4ieWcsOmWgOmEiScsICfpnKflj7DphIknLCAn55Gq5a626YSJJywgJ+S5neWmgumEiScsICfph4zmuK/phIknLCAn6auY5qi56YSJJywgJ+m5veWflOmEiScsXHJcbiAgICAgICAgICAgICfplbfmsrvphIknLCAn6bqf5rSb6YSJJywgJ+erueeUsOmEiScsICflhafln5TphIknLCAn6JCs5Li56YSJJywgJ+a9ruW3numOricsICfms7DmrabphIknLCAn5L6G576p6YSJJyxcclxuICAgICAgICAgICAgJ+iQrOW3kumEiScsICfltIHpoILphIknLCAn5paw5Z+k6YSJJywgJ+WNl+W3numEiScsICfmnpfpgorphIknLCAn5p2x5riv6Y6uJywgJ+eQieeQg+mEiScsICfkvbPlhqzphIknLFxyXG4gICAgICAgICAgICAn5paw5ZyS6YSJJywgJ+aei+WvrumEiScsICfmnovlsbHphIknLCAn5pil5pel6YSJJywgJ+eNheWtkOmEiScsICfou4rln47phIknLCAn54mh5Li56YSJJywgJ+aBhuaYpemOricsXHJcbiAgICAgICAgICAgICfmu7/lt57phIknXSxcclxuXHJcbiAgICAgICAgICAgIFsnOTAwJywgJzkwMScsICc5MDInLCAnOTAzJywgJzkwNCcsICc5MDUnLCAnOTA2JywgJzkwNycsICc5MDgnLCAnOTA5JywgJzkxMScsXHJcbiAgICAgICAgICAgICc5MTInLCAnOTEzJywgJzkyMCcsICc5MjEnLCAnOTIyJywgJzkyMycsICc5MjQnLCAnOTI1JywgJzkyNicsICc5MjcnLCAnOTI4JyxcclxuICAgICAgICAgICAgJzkyOScsICc5MzEnLCAnOTMyJywgJzk0MCcsICc5NDEnLCAnOTQyJywgJzk0MycsICc5NDQnLCAnOTQ1JywgJzk0NicsICc5NDcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g6Ie65p2x57ijXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+iHuuadseW4gicsICfntqDls7bphIknLCAn6Jit5ba86YSJJywgJ+W7tuW5s+mEiScsICfljZHljZfphIknLCAn6bm/6YeO6YSJJywgJ+mXnOWxsemOricsICfmtbfnq6/phIknLFxyXG4gICAgICAgICAgICAn5rGg5LiK6YSJJywgJ+adseays+mEiScsICfmiJDlip/pjq4nLCAn6ZW35r+x6YSJJywgJ+Wkqum6u+mHjCcsICfph5Hls7DphIknLCAn5aSn5q2m6YSJJywgJ+mBlOS7gemEiSddLFxyXG5cclxuICAgICAgICAgICAgWyc5NTAnLCAnOTUxJywgJzk1MicsICc5NTMnLCAnOTU0JywgJzk1NScsICc5NTYnLCAnOTU3JywgJzk1OCcsICc5NTknLCAnOTYxJyxcclxuICAgICAgICAgICAgJzk2MicsICc5NjMnLCAnOTY0JywgJzk2NScsICc5NjYnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g6Iqx6JOu57ijXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+iKseiTruW4gicsICfmlrDln47phIknLCAn56eA5p6X6YSJJywgJ+WQieWuiemEiScsICflo73osZDphIknLCAn6bOz5p6X6Y6uJywgJ+WFieW+qemEiScsICfosZDmv7HphIknLFxyXG4gICAgICAgICAgICAn55Ge56mX6YSJJywgJ+iQrOamrumEiScsICfnjonph4zpjq4nLCAn5Y2T5rqq6YSJJywgJ+WvjOmHjOmEiSddLFxyXG5cclxuICAgICAgICAgICAgWyc5NzAnLCAnOTcxJywgJzk3MicsICc5NzMnLCAnOTc0JywgJzk3NScsICc5NzYnLCAnOTc3JywgJzk3OCcsICc5NzknLCAnOTgxJyxcclxuICAgICAgICAgICAgJzk4MicsICc5ODMnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8g6YCj5rGf57ijXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbJ+WNl+erv+mEiScsICfljJfnq7/phIknLCAn6I6S5YWJ6YSJJywgJ+adseW8lemEiSddLFxyXG5cclxuICAgICAgICAgICAgWycyMDknLCAnMjEwJywgJzIxMScsICcyMTInXVxyXG4gICAgICAgIF1cclxuICAgIF1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlT3B0aW9ucygpIHtcclxuICAvLyBDaGVjayBvcHRpb25zIHJlcXVpcmVkXHJcbiAgaWYgKGFyZ3VtZW50c1sxXSkge1xyXG4gICAgZ2V0T3B0aW9uc1JlcXVpcmVkKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuICB9XHJcblxyXG4gIC8vIEV4dGVuZCBvcHRpb25zXHJcbiAgcmV0dXJuIGdldE9wdGlvbnNFeHRlbmQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMl0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcHRpb25zUmVxdWlyZWQob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkKSB7XHJcbiAgdmFyIGVycm9yID0gJyc7XHJcbiAgdmFyIGxlbmd0aCA9IG9wdGlvbnNSZXF1aXJlZC5sZW5ndGg7XHJcbiAgb3B0aW9uc0N1c3RvbSA9IG9wdGlvbnNDdXN0b20gfHwge307XHJcblxyXG4gIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgaWYgKCAhIG9wdGlvbnNDdXN0b20uaGFzT3duUHJvcGVydHkob3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0pKVxyXG4gICAgICBlcnJvciArPSBvcHRpb25zUmVxdWlyZWRbbGVuZ3RoXSArICcsJztcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikgdGhyb3cgJ+e8uuWwkeWPg+aVuDogJyArIGVycm9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcHRpb25zRXh0ZW5kKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNEZWZhdWx0KSB7XHJcbiAgaWYgKCAhIG9wdGlvbnNDdXN0b20pIHtcclxuICAgIHJldHVybiBvcHRpb25zRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHZhciBwcm9wZXJ0eTtcclxuICBmb3IgKHByb3BlcnR5IGluIG9wdGlvbnNDdXN0b20pIHtcclxuICAgIG9wdGlvbnNEZWZhdWx0W3Byb3BlcnR5XSA9IG9wdGlvbnNDdXN0b21bcHJvcGVydHldO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnNDdXN0b21bJ2VsQ291bnRyeSddKSB7IC8vIOaLvOWtl+mMr+iqpOS/ruato1xyXG4gICAgICBvcHRpb25zRGVmYXVsdFsnZWxDb3VudHknXSA9IG9wdGlvbnNDdXN0b21bJ2VsQ291bnRyeSddO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnNDdXN0b21bJ3NlbGVjdGVkQ291bnRyeSddKSB7IC8vIOaLvOWtl+mMr+iqpOS/ruato1xyXG4gICAgICBvcHRpb25zRGVmYXVsdFsnc2VsZWN0ZWRDb3VudHknXSA9IG9wdGlvbnNDdXN0b21bJ3NlbGVjdGVkQ291bnRyeSddO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnNDdXN0b21bJ2NvdW50cnlDbGFzc05hbWUnXSkgeyAvLyDmi7zlrZfpjK/oqqTkv67mraNcclxuICAgICAgb3B0aW9uc0RlZmF1bHRbJ2NvdW50eUNsYXNzTmFtZSddID0gb3B0aW9uc0N1c3RvbVsnY291bnRyeUNsYXNzTmFtZSddO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnNDdXN0b21bJ2NvdW50cnlGaWxlZE5hbWUnXSkgeyAvLyDmi7zlrZfpjK/oqqTkv67mraNcclxuICAgICAgb3B0aW9uc0RlZmF1bHRbJ2NvdW50eUZpbGVkTmFtZSddID0gb3B0aW9uc0N1c3RvbVsnY291bnRyeUZpbGVkTmFtZSddO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9wdGlvbnNEZWZhdWx0O1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1vZHVsZSBpbXBvcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IGhhbmRsZU9wdGlvbnMgZnJvbSAnLi9oYW5kbGUtb3B0aW9ucyc7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTW9kdWxlIGV4cG9ydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZGVmYXVsdCBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIHJvbGx1cCB0byBidWlsZCAqL1xyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFR3Q2l0eVNlbGVjdG9yOyAvKiB1c2UgYnJvd3NlcmlmeSB0byBidWlsZCAqL1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIENvbnN0cnVjdG9yXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIFR3Q2l0eVNlbGVjdG9yKCkge1xyXG5cclxuXHR0aGlzLmVsUm9sZU5hbWUgPSAndHctY2l0eS1zZWxlY3Rvcic7XHJcblxyXG5cdC8vIFNldHRpbmcgb3B0aW9uc1xyXG5cdHZhciBvcHRpb25zRGVmYXVsdCA9IHtcclxuXHRcdGVsOiBudWxsLFxyXG5cdFx0ZWxDb3VudHk6IG51bGwsXHJcblx0XHRlbERpc3RyaWN0OiBudWxsLFxyXG5cdFx0ZWxaaXBjb2RlOiBudWxsLFxyXG5cdFx0c2VsZWN0ZWRDb3VudHk6IG51bGwsIC8vIOmgkOioremBuOaTh+eahOe4o+W4guWQjeeosVxyXG5cdFx0c2VsZWN0ZWREaXN0cmljdDogbnVsbCwgLy8g6aCQ6Kit6YG45pOH55qE5Y2A5Z+f5ZCN56ixXHJcblx0XHRvbmx5OiBudWxsLCAvLyB7YXJyYXl9IOmZkOWItumhr+ekuuWTquS6m+e4o+W4guWPiuWNgOWfn1xyXG4gICAgICAgIC8vIG9ubHlDaXR5OiBudWxsLCAvLyB7YXJyYXl9IOmZkOWItumhr+ekuuWTquS6m+e4o+W4giBA5bCB5a2YXHJcblx0XHRzaG93RGlzdHJpY3Q6IHRydWUsIC8vIHtib29sZWFufSDmmK/lkKbpoa/npLrljYDln5/mrITkvY1cclxuXHRcdHNob3daaXBjb2RlOiBmYWxzZSwgLy8ge2Jvb2xlYW59IOaYr+WQpumhr+ekuumDtemBnuWNgOiZn+ashOS9jVxyXG5cdFx0Ym9vdHN0cmFwU3R5bGU6IGZhbHNlLFxyXG5cdFx0Y291bnR5Q2xhc3NOYW1lOiAnY291bnR5JyxcclxuXHRcdGNvdW50eUZpbGVkTmFtZTogJ2NvdW50eScsXHJcblx0XHRkaXN0cmljdENsYXNzTmFtZTogJ2Rpc3RyaWN0JyxcclxuXHRcdGRpc3RyaWN0RmllbGROYW1lOiAnZGlzdHJpY3QnLFxyXG5cdFx0emlwY29kZUNsYXNzTmFtZTogJ3ppcGNvZGUnLFxyXG5cdFx0emlwY29kZUZpZWxkTmFtZTogJ3ppcGNvZGUnXHJcblx0fTtcclxuXHJcbiAgICB2YXIgb3B0aW9uc0N1c3RvbSA9IGFyZ3VtZW50c1swXTtcclxuXHR2YXIgb3B0aW9uc1JlcXVpcmVkID0gYXJndW1lbnRzLmxlbmd0aCA/IFsnZWwnXSA6IG51bGw7IC8vIOioree9ruW/heimgeWPg+aVuO+8jOiLpeeEoeW4tuWFpeS7u+S9leWPg+aVuOWJh+ioreS4jeioree9rlxyXG5cdHRoaXMub3B0aW9ucyA9IGhhbmRsZU9wdGlvbnMob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkLCBvcHRpb25zRGVmYXVsdCk7XHJcblxyXG4gICAgLy8gU2V0dXBcclxuXHRlbFNldHVwLmNhbGwodGhpcyk7XHJcblxyXG5cdC8vIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFB1YmxpYyBNZXRob2RzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFR3Q2l0eVNlbGVjdG9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbi8vIFx0cmV0dXJuIGluaXQuY2FsbCh0aGlzKTtcclxuLy8gfTtcclxuXHJcblR3Q2l0eVNlbGVjdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiByZXNldFNlbGVjdG9ycy5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFByaXZhdGUgTWV0aG9kc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBlbFNldHVwKCkge1xyXG4gICAgLy8g5pyJ5oyH5a6aIGVsZW1lbnQg55qE5Yid5aeL5YyWXHJcblx0aWYgKHRoaXMub3B0aW9ucy5lbCkge1xyXG5cdFx0dGhpcy5lbCA9IGdldEVsZW1lbnQodGhpcy5vcHRpb25zLmVsKTtcclxuXHRcdHRoaXMuZWxDb3VudHkgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbENvdW50eSwgdGhpcy5lbCk7XHJcblx0XHR0aGlzLmVsRGlzdHJpY3QgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbERpc3RyaWN0LCB0aGlzLmVsKTtcclxuXHRcdHRoaXMuZWxaaXBjb2RlID0gZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuZWxaaXBjb2RlLCB0aGlzLmVsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5pdC5jYWxsKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Ly8g54Sh5oyH5a6aIGVsZW1lbnQg55qE5Yid5aeL5YyW77yM5L2/55SoIHJvbGUtYXR0cmlidXRlIGVsZW1lbnQg5L2c54K66aCQ6KitIGVsZW1lbnRzXHJcblx0dmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPScrIHRoaXMuZWxSb2xlTmFtZSArJ10nKTtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24oZWwpIHtcclxuXHRcdHZhciBzZWxmID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7IC8vIGNsb25lIG9iamVjdO+8jOWboCBvYmplY3Qg54K65Y+D6ICDXHJcblxyXG5cdFx0Ly8g5Zug5Y+v6IO95ZCM5pmC5L2/55So5YWp56iu5Yid5aeL5YyW5pa55byP77yM6ZyA6YeN572u6Kit5a6aXHJcblx0XHRzZWxmLmVsID0gZWw7XHJcblx0XHRzZWxmLmVsQ291bnR5ID0gbnVsbDtcclxuXHRcdHNlbGYuZWxEaXN0cmljdCA9IG51bGw7XHJcblx0XHRzZWxmLmVsWmlwY29kZSA9IG51bGw7XHJcblxyXG5cdFx0Ly8g6ZmQ5Yi25Y+q6aGv56S65ZOq5Lqb57ij5biC44CB5Y2A5Z+fXHJcblx0XHRzZWxmLm9wdGlvbnMub25seSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5JylcclxuXHRcdFx0PyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seScpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKSAvLyDljrvpmaTnqbrnmb3lrZflhYPvvIzovYnpmaPliJdcclxuXHRcdFx0OiBudWxsO1xyXG5cclxuICAgICAgICAvLyDpmZDliLbpoa/npLrlk6rkupvnuKPluIIgQOWwgeWtmFxyXG4gICAgXHQvLyBzZWxmLm9wdGlvbnMub25seUNpdHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seS1jaXR5JylcclxuXHRcdC8vIFx0PyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seS1jaXR5JykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpIC8vIOWOu+mZpOepuueZveWtl+WFg++8jOi9iemZo+WIl1xyXG5cdFx0Ly8gXHQ6IG51bGw7XHJcblxyXG5cdFx0Ly8g6aCQ6Kit6YG45pOH55qE57ij5biCXHJcblx0XHRzZWxmLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtY291bnR5JykgfHwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkLWNvdW50cnknKTsgLy8g5ou85a2X6Yyv6KqkXHJcblxyXG5cdFx0Ly8g6aCQ6Kit6YG45pOH55qE5Y2A5Z+fXHJcblx0XHRzZWxmLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1kaXN0cmljdCcpO1xyXG5cclxuICAgICAgICAvLyDmmK/lkKbkvb/nlKggYm9vdHN0cmFwIOaoo+W8j1xyXG5cdFx0c2VsZi5vcHRpb25zLmJvb3RzdHJhcFN0eWxlID0gKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1ib290c3RyYXAtc3R5bGUnKSAhPSBudWxsKTtcclxuXHJcblx0XHQvLyDmmK/lkKbpoa/npLrljYDln59cclxuXHRcdHNlbGYub3B0aW9ucy5zaG93RGlzdHJpY3QgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNob3ctZGlzdHJpY3QnKSAhPSBudWxsKTtcclxuXHJcbiAgICAgICAgLy8g5piv5ZCm6aGv56S66YO16YGe5Y2A6JmfXHJcblx0XHRzZWxmLm9wdGlvbnMuc2hvd1ppcGNvZGUgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNob3ctemlwY29kZScpICE9IG51bGwpO1xyXG5cclxuXHRcdHJldHVybiBpbml0LmNhbGwoc2VsZik7XHJcblx0fSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIGVscztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRzZXRFbGVtZW50cy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIC8vIOebo+iBvemBuOWWruWLleS9nFxyXG5cdGxpc3RlbkNvdW50eUNoYW5nZWQuY2FsbCh0aGlzKTtcclxuXHRsaXN0ZW5EaXN0cmljdENoYW5nZWQuY2FsbCh0aGlzKTtcclxuXHJcblx0Ly8g6Kit5a6a6aCQ6Kit6YG45a6a55qE57ij5biCXHJcblx0c2V0U2VsZWN0ZWRJdGVtLmNhbGwodGhpcyk7XHJcblxyXG5cdC8vIGJvb3RzdHJhcCDmqKPlvI/lpZflhaVcclxuXHRpZiAodGhpcy5vcHRpb25zLmJvb3RzdHJhcFN0eWxlKSB7XHJcblx0XHRzZXRCb290c3RyYXBTdHlsZS5jYWxsKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnQoZWwsIHBhcmVudCkge1xyXG4gICAgaWYgKCAhIGVsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHBhcmVudClcclxuICAgICAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xyXG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RWxlbWVudHMoKSB7XHJcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuXHQvLyDnuKPluILpgbjllq5cclxuXHRpZiAoICEgdGhpcy5lbENvdW50eSkge1xyXG5cdFx0dmFyIGNvdW50eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cdFx0dGhpcy5lbENvdW50eSA9IGNvdW50eTtcclxuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGNvdW50eSk7XHJcblx0fVxyXG5cclxuXHQvLyDnuKPluILpgbjllq7lsazmgKdcclxuXHR0aGlzLmVsQ291bnR5LmlubmVySFRNTCA9IGdldENvdW50eU9wdGlvbnMuY2FsbCh0aGlzKTtcclxuXHR0aGlzLmVsQ291bnR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuY291bnR5Q2xhc3NOYW1lKTtcclxuXHR0aGlzLmVsQ291bnR5Lm5hbWUgPSB0aGlzLm9wdGlvbnMuY291bnR5RmlsZWROYW1lO1xyXG5cclxuXHQvLyDljYDln5/pgbjllq5cclxuXHRpZiAoICEgdGhpcy5lbERpc3RyaWN0KSB7XHJcblx0XHR2YXIgZGlzdHJpY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHRcdHRoaXMuZWxEaXN0cmljdCA9IGRpc3RyaWN0O1xyXG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGlzdHJpY3QpO1xyXG5cdH1cclxuXHJcblx0Ly8g5Y2A5Z+f6YG45Zau5bGs5oCnXHJcblx0aWYgKCF0aGlzLm9wdGlvbnMuc2hvd0Rpc3RyaWN0KSB7XHJcblx0XHR0aGlzLmVsRGlzdHJpY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9XHJcblx0dGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucy5jYWxsKHRoaXMpO1xyXG5cdHRoaXMuZWxEaXN0cmljdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmRpc3RyaWN0Q2xhc3NOYW1lKTtcclxuXHR0aGlzLmVsRGlzdHJpY3QubmFtZSA9IHRoaXMub3B0aW9ucy5kaXN0cmljdEZpZWxkTmFtZTtcclxuXHJcblx0Ly8g6YO16YGe5Y2A6JmfXHJcblx0aWYgKCAhIHRoaXMuZWxaaXBjb2RlKSB7XHJcblx0XHR2YXIgemlwY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0XHR0aGlzLmVsWmlwY29kZSA9IHppcGNvZGU7XHJcblx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZCh6aXBjb2RlKTtcclxuXHJcbiAgICAgICAgLy8g6YO16YGe5Y2A6Jmf5bGs5oCn6Kit5a6aXHJcbiAgICAgICAgdGhpcy5lbFppcGNvZGUuc3R5bGUuZGlzcGxheSA9IHRoaXMub3B0aW9ucy5zaG93WmlwY29kZSB8fCAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5lbFppcGNvZGUuc3R5bGUud2lkdGggPSAnNmVtJztcclxuICAgICAgICB0aGlzLmVsWmlwY29kZS5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbFppcGNvZGUudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICB0aGlzLmVsWmlwY29kZS5wbGFjZWhvbGRlciA9ICfpg7XpgZ7ljYDomZ8nO1xyXG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLm5hbWUgPSB0aGlzLm9wdGlvbnMuemlwY29kZUZpZWxkTmFtZTtcclxuICAgICAgICB0aGlzLmVsWmlwY29kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLnppcGNvZGVDbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xyXG5cdH1cclxuXHJcblx0Ly8gZWxlbWVudCDniYfmrrXloZ7lhaUgZWxcclxuXHR0aGlzLmVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q291bnR5RWxlbWVudCgpIHtcclxuICAgIC8vIOe4o+W4gumBuOWWrlxyXG5cdGlmICggISB0aGlzLmVsQ291bnR5KSB7XHJcblx0XHR2YXIgY291bnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblx0XHR0aGlzLmVsQ291bnR5ID0gY291bnR5O1xyXG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY291bnR5KTtcclxuXHR9XHJcblxyXG5cdC8vIOe4o+W4gumBuOWWruWxrOaAp1xyXG5cdHRoaXMuZWxDb3VudHkuaW5uZXJIVE1MID0gZ2V0Q291bnR5T3B0aW9ucy5jYWxsKHRoaXMpO1xyXG5cdHRoaXMuZWxDb3VudHkuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5jb3VudHlDbGFzc05hbWUpO1xyXG5cdHRoaXMuZWxDb3VudHkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHlGaWxlZE5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvdW50eU9wdGlvbnMoKSB7XHJcblx0dmFyIGVsT3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+6YG45pOH57ij5biCPC9vcHRpb24+JztcclxuICAgIHZhciBvbmx5SXRlbXMgPSBnZXRDb3VudHlPbmx5SXRlbXMuY2FsbCh0aGlzKTtcclxuXHJcblx0Zm9yICh2YXIgaSA9IDAsIGogPSBkYXRhLmNvdW50aWVzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG5cdFx0Ly8g6Iul5pyJ6Kit5a6a6ZmQ5Yi26aGv56S655qE57ij5biC77yM5LiU6Kmy6aCF55uu5LiN5Zyo6Ieq6KiC57ij5biC5Lit77yM5YmH5LiN6aGv56S6XHJcblx0XHRpZiAob25seUl0ZW1zICYmIG9ubHlJdGVtcy5pbmRleE9mKGRhdGEuY291bnRpZXNbaV0pID09PSAtMSkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmb3JtYXQ6IDxvcHRpb24gdmFsdWU9XCLoh7rljJfluIJcIiBkYXRhLWluZGV4PVwiMFwiPuiHuuWMl+W4gjwvb3B0aW9uPlxyXG5cdFx0ZWxPcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmNvdW50aWVzW2ldfVwiIGRhdGEtaW5kZXg9XCIke2l9XCI+JHtkYXRhLmNvdW50aWVzW2ldfTwvb3B0aW9uPmA7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZWxPcHRpb25zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREaXN0cmljdE9wdGlvbnMoaW5kZXgpIHtcclxuXHRpZiAoICEgaW5kZXgpIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPi0tLTwvb3B0aW9uPic7XHJcblxyXG5cdHZhciBlbE9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPumBuOaTh+WNgOWfnzwvb3B0aW9uPic7XHJcbiAgICB2YXIgY291bnR5VmFsdWUgPSB0aGlzLmVsQ291bnR5LnZhbHVlO1xyXG4gICAgdmFyIG9ubHlJdGVtcyA9IGdldERpc3RyaWN0T25seUl0ZW1zLmNhbGwodGhpcywgY291bnR5VmFsdWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2cob25seUl0ZW1zKTtcclxuXHJcblx0Zm9yKHZhciBpID0gMCwgaiA9IGRhdGEuZGlzdHJpY3RzW2luZGV4XVswXS5sZW5ndGggLSAxOyBpIDw9IGo7IGkrKykge1xyXG4gICAgICAgIC8vIOiLpeacieioreWumumZkOWItumhr+ekuueahOWNgOWfn++8jOS4lOipsumgheebruS4jeWcqOiHquioguWNgOWfn+S4re+8jOWJh+S4jemhr+ekulxyXG4gICAgICAgIGlmIChvbmx5SXRlbXMgJiYgb25seUl0ZW1zLmluZGV4T2YoZGF0YS5kaXN0cmljdHNbaW5kZXhdWzBdW2ldKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdC8vIGZvcm1hdDogPG9wdGlvbiB2YWx1ZT1cIuS4reato+WNgFwiIGRhdGEtemlwY29kZT1cIjEwMFwiPuS4reato+WNgDwvb3B0aW9uPlxyXG5cdFx0ZWxPcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmRpc3RyaWN0c1tpbmRleF1bMF1baV19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS16aXBjb2RlPVwiJHtkYXRhLmRpc3RyaWN0c1tpbmRleF1bMV1baV19XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuXHRcdCAgICAgICAgICAgICAgICAgICR7ZGF0YS5kaXN0cmljdHNbaW5kZXhdWzBdW2ldfVxyXG5cdFx0ICAgICAgICAgICAgICA8L29wdGlvbj5gO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGVsT3B0aW9ucztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q291bnR5T25seUl0ZW1zKCkge1xyXG4gICAgdmFyIG9ubHlJdGVtcyA9IHRoaXMub3B0aW9ucy5vbmx5O1xyXG4gICAgaWYgKCAhIEFycmF5LmlzQXJyYXkob25seUl0ZW1zKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8g5Y+W5Ye657ij5biC6LOH5paZXHJcbiAgICByZXR1cm4gb25seUl0ZW1zLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gaXRlbS5pbmRleE9mKCdAJyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IGl0ZW0gOiBpdGVtLnN1YnN0cmluZygwLCBpbmRleCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGlzdHJpY3RPbmx5SXRlbXMoY291bnR5KSB7XHJcbiAgICB2YXIgb25seUl0ZW1zID0gdGhpcy5vcHRpb25zLm9ubHk7XHJcbiAgICBpZiAoICEgQXJyYXkuaXNBcnJheShvbmx5SXRlbXMpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyDlj5blh7rljYDln5/os4fmlplcclxuICAgIHZhciBpdGVtcyA9IG51bGw7XHJcbiAgICBvbmx5SXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaW5kZXhPZihjb3VudHkpID09PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBpdGVtLmxhc3RJbmRleE9mKCdAJyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXMgPSBpdGVtLnN1YnN0cmluZyhpbmRleCArIDEpLnNwbGl0KCd8Jyk7IC8vIOi9iemZo+WIl1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpdGVtcztcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdGVuQ291bnR5Q2hhbmdlZCgpIHtcclxuXHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGluZGV4ID0gdGhpcy5lbENvdW50eS5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpLmRhdGFzZXQuaW5kZXg7XHJcblx0XHR0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zLmNhbGwodGhpcywgaW5kZXgpO1xyXG5cdFx0dGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcclxuXHR9LmJpbmQodGhpcyk7XHJcblxyXG5cdHRoaXMuZWxDb3VudHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RlbkRpc3RyaWN0Q2hhbmdlZCgpIHtcclxuXHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHppcGNvZGUgPSB0aGlzLmVsRGlzdHJpY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKS5kYXRhc2V0LnppcGNvZGUgfHwgJyc7XHJcblx0XHR0aGlzLmVsWmlwY29kZS52YWx1ZSA9IHppcGNvZGU7XHJcblx0fS5iaW5kKHRoaXMpO1xyXG5cclxuXHR0aGlzLmVsRGlzdHJpY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNlbGVjdGVkSXRlbSgpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHkpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgIFx0ZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICBcdHRoaXMuZWxDb3VudHkudmFsdWUgPSB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHk7XHJcbiAgICBcdHRoaXMuZWxDb3VudHkuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9XHJcblxyXG5cdGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCkge1xyXG5cdFx0dGhpcy5lbERpc3RyaWN0LnZhbHVlID0gdGhpcy5vcHRpb25zLnNlbGVjdGVkRGlzdHJpY3Q7XHJcblx0XHR0aGlzLmVsRGlzdHJpY3QuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFNlbGVjdG9ycygpIHtcclxuXHR0aGlzLmVsQ291bnR5LnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cdHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMuY2FsbCh0aGlzKTtcclxuXHR0aGlzLmVsWmlwY29kZS52YWx1ZSA9ICcnO1xyXG5cclxuXHRyZXR1cm4gdGhpcztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Qm9vdHN0cmFwU3R5bGUoKSB7XHJcblx0dmFyIGZpZWxkQ2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICB2YXIgd3JhcHBlckNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwJztcclxuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG5cdHRoaXMuZWxDb3VudHkuc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpZWxkQ2xhc3NOYW1lKTtcclxuXHR0aGlzLmVsRGlzdHJpY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpZWxkQ2xhc3NOYW1lKTtcclxuXHR0aGlzLmVsWmlwY29kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZmllbGRDbGFzc05hbWUpO1xyXG5cclxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB3cmFwcGVyQ2xhc3NOYW1lKTtcclxuXHJcblx0dmFyIGVsQ291bnR5ID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcclxuXHRlbENvdW50eS5hcHBlbmRDaGlsZCh0aGlzLmVsQ291bnR5KTtcclxuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbENvdW50eSk7XHJcblxyXG5cdHZhciBlbERpc3RyaWN0ID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcclxuXHRlbERpc3RyaWN0LmFwcGVuZENoaWxkKHRoaXMuZWxEaXN0cmljdCk7XHJcblx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxEaXN0cmljdCk7XHJcblxyXG5cdHZhciBlbFppcGNvZGUgPSB3cmFwcGVyLmNsb25lTm9kZSgpO1xyXG5cdGVsWmlwY29kZS5hcHBlbmRDaGlsZCh0aGlzLmVsWmlwY29kZSk7XHJcblx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxaaXBjb2RlKTtcclxuXHJcblx0dGhpcy5lbC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRhdGEiLCJoYW5kbGVPcHRpb25zIiwiYXJndW1lbnRzIiwiZ2V0T3B0aW9uc0V4dGVuZCIsImdldE9wdGlvbnNSZXF1aXJlZCIsIm9wdGlvbnNDdXN0b20iLCJvcHRpb25zUmVxdWlyZWQiLCJlcnJvciIsImxlbmd0aCIsImhhc093blByb3BlcnR5Iiwib3B0aW9uc0RlZmF1bHQiLCJwcm9wZXJ0eSIsIlR3Q2l0eVNlbGVjdG9yIiwiZWxSb2xlTmFtZSIsIm9wdGlvbnMiLCJjYWxsIiwicHJvdG90eXBlIiwicmVzZXQiLCJyZXNldFNlbGVjdG9ycyIsImVsU2V0dXAiLCJlbCIsImdldEVsZW1lbnQiLCJlbENvdW50eSIsImVsRGlzdHJpY3QiLCJlbFppcGNvZGUiLCJpbml0IiwiZWxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNlbGYiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJvbmx5IiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInNwbGl0Iiwic2VsZWN0ZWRDb3VudHkiLCJzZWxlY3RlZERpc3RyaWN0IiwiYm9vdHN0cmFwU3R5bGUiLCJzaG93RGlzdHJpY3QiLCJzaG93WmlwY29kZSIsInBhcmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRFbGVtZW50cyIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNvdW50eSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImdldENvdW50eU9wdGlvbnMiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudHlDbGFzc05hbWUiLCJuYW1lIiwiY291bnR5RmlsZWROYW1lIiwiZGlzdHJpY3QiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXREaXN0cmljdE9wdGlvbnMiLCJkaXN0cmljdENsYXNzTmFtZSIsImRpc3RyaWN0RmllbGROYW1lIiwiemlwY29kZSIsIndpZHRoIiwicmVhZE9ubHkiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ6aXBjb2RlRmllbGROYW1lIiwiemlwY29kZUNsYXNzTmFtZSIsImF1dG9jb21wbGV0ZSIsImVsT3B0aW9ucyIsIm9ubHlJdGVtcyIsImdldENvdW50eU9ubHlJdGVtcyIsImkiLCJqIiwiY291bnRpZXMiLCJpbmRleE9mIiwiaW5kZXgiLCJjb3VudHlWYWx1ZSIsInZhbHVlIiwiZ2V0RGlzdHJpY3RPbmx5SXRlbXMiLCJkaXN0cmljdHMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwic3Vic3RyaW5nIiwiaXRlbXMiLCJsYXN0SW5kZXhPZiIsImxpc3RlbkNvdW50eUNoYW5nZWQiLCJoYW5kbGVyIiwiZGF0YXNldCIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuRGlzdHJpY3RDaGFuZ2VkIiwic2V0U2VsZWN0ZWRJdGVtIiwiZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzZWxlY3RlZEluZGV4Iiwic2V0Qm9vdHN0cmFwU3R5bGUiLCJmaWVsZENsYXNzTmFtZSIsIndyYXBwZXJDbGFzc05hbWUiLCJ3cmFwcGVyIiwiY2xvbmVOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFJQSxTQUFPOztjQUVHLENBQ04sS0FETSxFQUNDLEtBREQsRUFDUSxLQURSLEVBQ2UsS0FEZixFQUNzQixLQUR0QixFQUM2QixLQUQ3QixFQUNvQyxLQURwQyxFQUMyQyxLQUQzQyxFQUVOLEtBRk0sRUFFQyxLQUZELEVBRVEsS0FGUixFQUVlLEtBRmYsRUFFc0IsS0FGdEIsRUFFNkIsS0FGN0IsRUFFb0MsS0FGcEMsRUFFMkMsS0FGM0MsRUFHTixLQUhNLEVBR0MsS0FIRCxFQUdRLEtBSFIsRUFHZSxLQUhmLEVBR3NCLEtBSHRCLEVBRzZCLEtBSDdCLENBRkg7OztlQVNJOztLQUdILENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQ0EsS0FEQSxFQUNPLEtBRFAsRUFDYyxLQURkLEVBQ3FCLEtBRHJCLEVBQzRCLEtBRDVCLENBREosRUFJSSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUE4RSxLQUE5RSxDQUpKLENBRk87O0tBVUgsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIs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