(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.TwCitySelector = factory());
}(this, (function () { 'use strict';

var data$1 = {
    // 縣市
    countries: ['臺北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '臺南市', '高雄市', '澎湖縣', '金門縣', '屏東縣', '臺東縣', '花蓮縣', '連江縣'],

    // 區域
    districts: [
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

	this.elRoleName = 'tw-city-selector';

	// Setting options
	var optionsDefault = {
		el: null,
		elCountry: null,
		elDistrict: null,
		elZipcode: null,
		selectedCountry: null, // {boolean} 預設選擇的縣市
		selectedDistrict: null, // {boolean} 預設選擇的區域
		only: null, // {array} 限制顯示哪些縣市 (下個版本棄用)
		onlyCity: null, // {array} 限制顯示哪些縣市
		showZipcode: false, // {boolean} 是否顯示郵遞區號欄位
		bootstrapStyle: false,
		countryClassName: 'country',
		countryFiledName: 'country',
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
		this.elCountry = getElement(this.options.elCountry, this.el);
		this.elDistrict = getElement(this.options.elDistrict, this.el);
		this.elZipcode = getElement(this.options.elZipcode, this.el);

		return init.call(this);
	}

	// 無指定 element 的初始化，使用 role-attribute element 作為預設 elements
	var els = document.querySelectorAll('[role=' + this.elRoleName + ']');
	Array.prototype.forEach.call(els, function (el) {
		var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

		// 重置設定
		self.el = el;
		self.elCountry = null;
		self.elDistrict = null;
		self.elZipcode = null;

		// 限制顯示哪些縣市 (下個版本棄用)
		self.options.only = el.getAttribute('data-only') ? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
		: null;

		// 限制顯示哪些縣市
		self.options.onlyCity = el.getAttribute('data-only-city') ? el.getAttribute('data-only-city').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
		: null;

		// 預設選擇的縣市
		self.options.selectedCountry = el.getAttribute('data-selected-country');

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
	listenCountryChanged.call(this);
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
	if (!this.elCountry) {
		var country = document.createElement('select');
		this.elCountry = country;
		fragment.appendChild(country);
	}

	// 縣市選單屬性
	this.elCountry.innerHTML = getCountryOptions.call(this);
	this.elCountry.setAttribute('class', this.options.countryClassName);
	this.elCountry.name = this.options.countryFiledName;

	// 區域選單
	if (!this.elDistrict) {
		var district = document.createElement('select');
		this.elDistrict = district;
		fragment.appendChild(district);
	}

	// 區域選單屬性
	this.elDistrict.innerHTML = getDistrictOptions();
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

function getCountryOptions() {
	var elOptions = '<option value="">選擇縣市</option>';
	var onlyCity = this.options.only || this.options.onlyCity; // this.options.only 下個版本棄用

	for (var i = 0, j = data$1.countries.length; i < j; i++) {
		// 若有設定限制顯示的縣市，且該項目不在自訂縣市中
		if (onlyCity && Array.isArray(onlyCity) && onlyCity.indexOf(data$1.countries[i]) === -1) {
			continue;
		}

		// format: <option value="臺北市" data-index="0">臺北市</option>
		elOptions += '<option value="' + data$1.countries[i] + '" data-index="' + i + '">' + data$1.countries[i] + '</option>';
	}

	return elOptions;
}

function getDistrictOptions(index) {
	if (!index) {
		return '<option value="" selected>---</option>';
	}

	var elOptions = '<option value="" selected>選擇區域</option>';

	for (var i = 0, j = data$1.districts[index][0].length - 1; i <= j; i++) {
		// format: <option value="中正區" data-zipcode="100">中正區</option>
		elOptions += '<option value="' + data$1.districts[index][0][i] + '"\n                            data-zipcode="' + data$1.districts[index][1][i] + '">\n\t\t                ' + data$1.districts[index][0][i] + '\n\t\t            </option>';
	}

	return elOptions;
}

function listenCountryChanged() {
	var handler = function () {
		var index = this.elCountry.querySelector('option:checked').dataset.index;
		this.elDistrict.innerHTML = getDistrictOptions(index);
		this.elZipcode.value = '';
	}.bind(this);

	this.elCountry.addEventListener('change', handler);
}

function listenDistrictChanged() {
	var handler = function () {
		var zipcode = this.elDistrict.querySelector('option:checked').dataset.zipcode;
		this.elZipcode.value = zipcode;
	}.bind(this);

	this.elDistrict.addEventListener('change', handler);
}

function setSelectedItem() {
	if (this.options.selectedCountry) {
		var event = document.createEvent('Event');
		event.initEvent('change', true, true);

		this.elCountry.value = this.options.selectedCountry;
		this.elCountry.dispatchEvent(event);
	}

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

return TwCitySelector$1;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCIvVXNlcnMvZGVubnkvRHJvcGJveC8wMS3ntrLnq5nlsIjmoYgvZGstcGx1Z2lucy90dy1jaXR5LXNlbGVjdG9yL3NyYy9oYW5kbGUtb3B0aW9ucy5qcyIsIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL3R3LWNpdHktc2VsZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZGF0YTtcblxudmFyIGRhdGEgPSB7XG4gICAgLy8g57ij5biCXG4gICAgY291bnRyaWVzOiBbXG4gICAgICAgICfoh7rljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOerueW4gicsICfmlrDnq7nnuKMnLCAn6IuX5qCX57ijJyxcbiAgICAgICAgJ+iHuuS4reW4gicsICflvbDljJbnuKMnLCAn5Y2X5oqV57ijJywgJ+WYiee+qeW4gicsICflmInnvqnnuKMnLCAn6Zuy5p6X57ijJywgJ+iHuuWNl+W4gicsICfpq5jpm4TluIInLFxuICAgICAgICAn5r6O5rmW57ijJywgJ+mHkemWgOe4oycsICflsY/mnbHnuKMnLCAn6Ie65p2x57ijJywgJ+iKseiTrue4oycsICfpgKPmsZ/nuKMnXG4gICAgXSxcblxuICAgIC8vIOWNgOWfn1xuICAgIGRpc3RyaWN0czogW1xuICAgICAgICAvLyDoh7rljJfluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfkuK3mraPljYAnLCAn5aSn5ZCM5Y2AJywgJ+S4reWxseWNgCcsICfmnb7lsbHljYAnLCAn5aSn5a6J5Y2AJywgJ+iQrOiPr+WNgCcsICfkv6HnvqnljYAnLFxuICAgICAgICAgICAgJ+Wjq+ael+WNgCcsICfljJfmipXljYAnLCAn5YWn5rmW5Y2AJywgJ+WNl+a4r+WNgCcsICfmloflsbHljYAnXSxcblxuICAgICAgICAgICAgWycxMDAnLCAnMTAzJywgJzEwNCcsICcxMDUnLCAnMTA2JywgJzEwOCcsICcxMTAnLCAnMTExJywgJzExMicsICcxMTQnLCAnMTE1JywgJzExNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWfuumahuW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S7geaEm+WNgCcsICfkv6HnvqnljYAnLCAn5Lit5q2j5Y2AJywgJ+S4reWxseWNgCcsICflronmqILljYAnLCAn5pqW5pqW5Y2AJywgJ+S4g+WgteWNgCddLFxuXG4gICAgICAgICAgICBbJzIwMCcsICcyMDEnLCAnMjAyJywgJzIwMycsICcyMDQnLCAnMjA1JywgJzIwNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOaWsOWMl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+iQrOmHjOWNgCcsICfph5HlsbHljYAnLCAn5p2/5qmL5Y2AJywgJ+axkOatouWNgCcsICfmt7HlnZHljYAnLCAn55+z56KH5Y2AJywgJ+eRnuiKs+WNgCcsICflubPmuqrljYAnLFxuICAgICAgICAgICAgJ+mbmea6quWNgCcsICfosqLlr67ljYAnLCAn5paw5bqX5Y2AJywgJ+Wdquael+WNgCcsICfng4/kvobljYAnLCAn5rC45ZKM5Y2AJywgJ+S4reWSjOWNgCcsICflnJ/ln47ljYAnLFxuICAgICAgICAgICAgJ+S4ieWzveWNgCcsICfmqLnmnpfljYAnLCAn6bav5q2M5Y2AJywgJ+S4iemHjeWNgCcsICfmlrDojorljYAnLCAn5rOw5bGx5Y2AJywgJ+ael+WPo+WNgCcsICfomIbmtLLljYAnLFxuICAgICAgICAgICAgJ+S6lOiCoeWNgCcsICflhavph4zljYAnLCAn5reh5rC05Y2AJywgJ+S4ieiKneWNgCcsICfnn7PploDljYAnXSxcblxuICAgICAgICAgICAgWycyMDcnLCAnMjA4JywgJzIyMCcsICcyMjEnLCAnMjIyJywgJzIyMycsICcyMjQnLCAnMjI2JywgJzIyNycsICcyMjgnLFxuICAgICAgICAgICAgJzIzMScsICcyMzInLCAnMjMzJywgJzIzNCcsICcyMzUnLCAnMjM2JywgJzIzNycsICcyMzgnLCAnMjM5JywgJzI0MScsXG4gICAgICAgICAgICAnMjQyJywgJzI0MycsICcyNDQnLCAnMjQ3JywgJzI0OCcsICcyNDknLCAnMjUxJywgJzI1MicsICcyNTMnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlrpzomK3nuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyflrpzomK3luIInLCAn6aCt5Z+O6Y6uJywgJ+ekgea6qumEiScsICflo6/lnI3phIknLCAn5ZOh5bGx6YSJJywgJ+e+headsemOricsICfkuInmmJ/phIknLCAn5aSn5ZCM6YSJJyxcbiAgICAgICAgICAgICfkupTntZDphIknLCAn5Yas5bGx6YSJJywgJ+iYh+a+s+mOricsICfljZfmvrPphIknLCAn6Yej6a2a6Ie6J10sXG5cbiAgICAgICAgICAgIFsnMjYwJywgJzI2MScsICcyNjInLCAnMjYzJywgJzI2NCcsICcyNjUnLCAnMjY2JywgJzI2NycsICcyNjgnLCAnMjY5JyxcbiAgICAgICAgICAgICcyNzAnLCAnMjcyJywgJzI5MCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOahg+WckuW4glxuICAgIFx0W1xuICAgIFx0XHRbJ+S4reWjouWNgCcsICflubPpjq7ljYAnLCAn6b6N5r2t5Y2AJywgJ+aliuaiheWNgCcsICfmlrDlsYvljYAnLCAn6KeA6Z+z5Y2AJywgJ+ahg+WckuWNgCcsICfpvpzlsbHljYAnLFxuICAgIFx0XHQn5YWr5b635Y2AJywgJ+Wkp+a6quWNgCcsICflvqnoiIjljYAnLCAn5aSn5ZyS5Y2AJywgJ+iYhuerueWNgCddLFxuXG4gICAgXHRcdFsnMzIwJywgJzMyNCcsICczMjUnLCAnMzI2JywgJzMyNycsICczMjgnLCAnMzMwJywgJzMzMycsICczMzQnLCAnMzM1JyxcbiAgICBcdFx0JzMzNicsICczMzcnLCAnMzM4J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw56u55biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5p2x5Y2AJywgJ+WMl+WNgCcsICfpppnlsbHljYAnXSxcblxuICAgICAgICAgICAgWyczMDAnLCAnMzAwJywgJzMwMCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOaWsOeruee4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+erueWMl+W4gicsICfmuZblj6PphIknLCAn5paw6LGQ6YSJJywgJ+aWsOWflOmOricsICfpl5zopb/pjq4nLCAn6IqO5p6X6YSJJywgJ+WvtuWxsemEiScsXG4gICAgICAgICAgICAn56u55p2x6Y6uJywgJ+S6lOWzsOmEiScsICfmqavlsbHphIknLCAn5bCW55+z6YSJJywgJ+WMl+WflOmEiScsICfls6jnnInphIknXSxcblxuICAgICAgICAgICAgWyczMDInLCAnMzAzJywgJzMwNCcsICczMDUnLCAnMzA2JywgJzMwNycsICczMDgnLCAnMzEwJywgJzMxMScsXG4gICAgICAgICAgICAnMzEyJywgJzMxMycsICczMTQnLCAnMzE1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6IuX5qCX57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn56u55Y2X6Y6uJywgJ+mgreS7veW4gicsICfkuInngaPphIknLCAn5Y2X5bqE6YSJJywgJ+eNhea9remEiScsICflvozpvo3pjq4nLCAn6YCa6ZyE6Y6uJywgJ+iLkeijoemOricsXG4gICAgICAgICAgICAn6IuX5qCX5biCJywgJ+mAoOapi+mEiScsICfpoK3lsYvphIknLCAn5YWs6aSo6YSJJywgJ+Wkp+a5lumEiScsICfms7DlronphIknLFxuICAgICAgICAgICAgJ+mKhemRvOmEiScsICfkuInnvqnphIknLCAn6KW/5rmW6YSJJywgJ+WNk+iYremOriddLFxuXG4gICAgICAgICAgICBbJzM1MCcsICczNTEnLCAnMzUyJywgJzM1MycsICczNTQnLCAnMzU2JywgJzM1NycsICczNTgnLCAnMzYwJywgJzM2MScsXG4gICAgICAgICAgICAnMzYyJywgJzM2MycsICczNjQnLCAnMzY1JywgJzM2NicsICczNjcnLCAnMzY4JywgJzM2OSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOiHuuS4reW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S4reWNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+ilv+WNgCcsICfljJfljYAnLCAn5YyX5bGv5Y2AJywgJ+ilv+Wxr+WNgCcsICfljZflsa/ljYAnLCAn5aSq5bmz5Y2AJyxcbiAgICAgICAgICAgICflpKfph4zljYAnLCAn6Zyn5bOw5Y2AJywgJ+eDj+aXpeWNgCcsICfosZDljp/ljYAnLCAn5ZCO6YeM5Y2AJywgJ+efs+WyoeWNgCcsICfmnbHli6LljYAnLCAn5ZKM5bmz5Y2AJyxcbiAgICAgICAgICAgICfmlrDnpL7ljYAnLCAn5r2t5a2Q5Y2AJywgJ+Wkp+mbheWNgCcsICfnpZ7lsqHljYAnLCAn5aSn6IKa5Y2AJywgJ+aymem5v+WNgCcsICfpvo3kupXljYAnLCAn5qKn5qOy5Y2AJyxcbiAgICAgICAgICAgICfmuIXmsLTljYAnLCAn5aSn55Sy5Y2AJywgJ+WkluWflOWNgCcsICflpKflronljYAnXSxcblxuICAgICAgICAgICAgWyc0MDAnLCAnNDAxJywgJzQwMicsICc0MDMnLCAnNDA0JywgJzQwNicsICc0MDcnLCAnNDA4JywgJzQxMScsICc0MTInLFxuICAgICAgICAgICAgJzQxMycsICc0MTQnLCAnNDIwJywgJzQyMScsICc0MjInLCAnNDIzJywgJzQyNCcsICc0MjYnLCAnNDI3JywgJzQyOCcsXG4gICAgICAgICAgICAnNDI5JywgJzQzMicsICc0MzMnLCAnNDM0JywgJzQzNScsICc0MzYnLCAnNDM3JywgJzQzOCcsICc0MzknXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlvbDljJbnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyflvbDljJbluIInLCAn6Iqs5ZyS6YSJJywgJ+iKseWjh+mEiScsICfnp4DmsLTphIknLCAn6bm/5riv6Y6uJywgJ+emj+iIiOmEiScsICfnt5ropb/phIknLCAn5ZKM576O6Y6uJyxcbiAgICAgICAgICAgICfkvLjmuK/phIknLCAn5ZOh5p6X5biCJywgJ+ekvumgremEiScsICfmsLjpnZbphIknLCAn5Z+U5b+D6YSJJywgJ+a6qua5lumOricsICflpKfmnZHphIknLCAn5Z+U6bm96YSJJyxcbiAgICAgICAgICAgICfnlLDkuK3pjq4nLCAn5YyX5paX6Y6uJywgJ+eUsOWwvumEiScsICfln6TpoK3phIknLCAn5rqq5bee6YSJJywgJ+erueWhmOmEiScsICfkuozmnpfpjq4nLCAn5aSn5Z+O6YSJJyxcbiAgICAgICAgICAgICfoirPoi5HphIknLCAn5LqM5rC06YSJJ10sXG5cbiAgICAgICAgICAgIFsnNTAwJywgJzUwMicsICc1MDMnLCAnNTA0JywgJzUwNScsICc1MDYnLCAnNTA3JywgJzUwOCcsICc1MDknLCAnNTEwJyxcbiAgICAgICAgICAgICc1MTEnLCAnNTEyJywgJzUxMycsICc1MTQnLCAnNTE1JywgJzUxNicsICc1MjAnLCAnNTIxJywgJzUyMicsICc1MjMnLFxuICAgICAgICAgICAgJzUyNCcsICc1MjUnLCAnNTI2JywgJzUyNycsICc1MjgnLCAnNTMwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5Y2X5oqV57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Y2X5oqV5biCJywgJ+S4reWvrumEiScsICfojYnlsa/pjq4nLCAn5ZyL5aeT6YSJJywgJ+WflOmHjOmOricsICfku4HmhJvphIknLCAn5ZCN6ZaT6YSJJywgJ+mbhumbhumOricsXG4gICAgICAgICAgICAn5rC06YeM6YSJJywgJ+mtmuaxoOmEiScsICfkv6HnvqnphIknLCAn56u55bGx6Y6uJywgJ+m5v+iwt+mEiSddLFxuXG4gICAgICAgICAgICBbJzU0MCcsICc1NDEnLCAnNTQyJywgJzU0NCcsICc1NDUnLCAnNTQ2JywgJzU1MScsICc1NTInLCAnNTUzJywgJzU1NScsXG4gICAgICAgICAgICAnNTU2JywgJzU1NycsICc1NTgnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlmInnvqnluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmnbHljYAnLCAn6KW/5Y2AJ10sXG5cbiAgICAgICAgICAgIFsnNjAwJywgJzYwMCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWYiee+qee4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+eVqui3r+mEiScsICfmooXlsbHphIknLCAn56u55bSO6YSJJywgJ+mYv+mHjOWxsScsICfkuK3ln5TphIknLCAn5aSn5Z+U6YSJJywgJ+awtOS4iumEiScsXG4gICAgICAgICAgICAn6bm/6I2J6YSJJywgJ+WkquS/neW4gicsICfmnLTlrZDluIInLCAn5p2x55+z6YSJJywgJ+WFreiFs+mEiScsICfmlrDmuK/phIknLCAn5rCR6ZuE6YSJJywgJ+Wkp+ael+mOricsXG4gICAgICAgICAgICAn5rqq5Y+j6YSJJywgJ+e+qeeruemEiScsICfluIPooovpjq4nXSxcblxuICAgICAgICAgICAgWyc2MDInLCAnNjAzJywgJzYwNCcsICc2MDUnLCAnNjA2JywgJzYwNycsICc2MDgnLCAnNjExJywgJzYxMicsXG4gICAgICAgICAgICAnNjEzJywgJzYxNCcsICc2MTUnLCAnNjE2JywgJzYyMScsICc2MjInLCAnNjIzJywgJzYyNCcsICc2MjUnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDpm7LmnpfnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmlpfljZfpjq4nLCAn5aSn5Z+k6YSJJywgJ+iZjuWwvumOricsICflnJ/luqvpjq4nLCAn6KSS5b+g6YSJJywgJ+adseWLoumEiScsICfoh7ropb/phIknLCAn5bSZ6IOM6YSJJyxcbiAgICAgICAgICAgICfpuqXlr67phIknLCAn5paX5YWt5biCJywgJ+ael+WFp+mEiScsICflj6TlnZHphIknLCAn6I6/5qGQ6YSJJywgJ+ilv+ieuumOricsICfkuozltJnphIknLCAn5YyX5riv6Y6uJyxcbiAgICAgICAgICAgICfmsLTmnpfphIknLCAn5Y+j5rmW6YSJJywgJ+Wbm+a5lumEiScsICflhYPplbfphIknXSxcblxuICAgICAgICAgICAgWyc2MzAnLCAnNjMxJywgJzYzMicsICc2MzMnLCAnNjM0JywgJzYzNScsICc2MzYnLCAnNjM3JywgJzYzOCcsICc2NDAnLCAnNjQzJyxcbiAgICAgICAgICAgICc2NDYnLCAnNjQ3JywgJzY0OCcsICc2NDknLCAnNjUxJywgJzY1MicsICc2NTMnLCAnNjU0JywgJzY1NSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOiHuuWNl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S4reilv+WNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+WMl+WNgCcsICflronlubPljYAnLCAn5a6J5Y2X5Y2AJywgJ+awuOW6t+WNgCcsICfmrbjku4HljYAnLCAn5paw5YyW5Y2AJyxcbiAgICAgICAgICAgICflt6bpjq7ljYAnLCAn546J5LqV5Y2AJywgJ+aloOilv+WNgCcsICfljZfljJbljYAnLCAn5LuB5b635Y2AJywgJ+mXnOW7n+WNgCcsICfpvo3ltI7ljYAnLCAn5a6Y55Sw5Y2AJyxcbiAgICAgICAgICAgICfpurvosYbljYAnLCAn5L2z6YeM5Y2AJywgJ+ilv+a4r+WNgCcsICfkuIPogqHljYAnLCAn5bCH6LuN5Y2AJywgJ+WtuOeUsuWNgCcsICfljJfploDljYAnLCAn5paw54ef5Y2AJyxcbiAgICAgICAgICAgICflvozlo4HljYAnLCAn55m95rKz5Y2AJywgJ+adseWxseWNgCcsICflha3nlLLljYAnLCAn5LiL54ef5Y2AJywgJ+afs+eHn+WNgCcsICfpub3msLTljYAnLCAn5ZaE5YyW5Y2AJyxcbiAgICAgICAgICAgICflpKflhafljYAnLCAn5bGx5LiK5Y2AJywgJ+aWsOW4guWNgCcsICflronlrprljYAnXSxcblxuICAgICAgICAgICAgWyc3MDAnLCAnNzAxJywgJzcwMicsICc3MDQnLCAnNzA4JywgJzcwOScsICc3MTAnLCAnNzExJywgJzcxMicsICc3MTMnLCAnNzE0JyxcbiAgICAgICAgICAgICc3MTUnLCAnNzE2JywgJzcxNycsICc3MTgnLCAnNzE5JywgJzcyMCcsICc3MjEnLCAnNzIyJywgJzcyMycsICc3MjQnLCAnNzI1JyxcbiAgICAgICAgICAgICc3MjYnLCAnNzI3JywgJzczMCcsICc3MzEnLCAnNzMyJywgJzczMycsICc3MzQnLCAnNzM1JywgJzczNicsICc3MzcnLCAnNzQxJyxcbiAgICAgICAgICAgICc3NDInLCAnNzQzJywgJzc0NCcsICc3NDUnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDpq5jpm4TluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmlrDoiIjljYAnLCAn5YmN6YeR5Y2AJywgJ+iLk+mbheWNgCcsICfpub3ln5XljYAnLCAn6byT5bGx5Y2AJywgJ+aXl+a0peWNgCcsICfliY3pjq7ljYAnLCAn5LiJ5rCR5Y2AJyxcbiAgICAgICAgICAgICfmpaDmopPljYAnLCAn5bCP5riv5Y2AJywgJ+W3pueHn+WNgCcsICfku4HmrabljYAnLCAn5aSn56S+5Y2AJywgJ+adseaymee+pOWzticsICfljZfmspnnvqTls7YnLCAn5bKh5bGx5Y2AJyxcbiAgICAgICAgICAgICfot6/nq7nljYAnLCAn6Zi/6JOu5Y2AJywgJ+eUsOWvruWNgCcsICfnh5Xlt6LljYAnLCAn5qmL6aCt5Y2AJywgJ+aik+WumOWNgCcsICflvYzpmYDljYAnLCAn5rC45a6J5Y2AJyxcbiAgICAgICAgICAgICfmuZblhafljYAnLCAn6bOz5bGx5biCJywgJ+Wkp+WvruWNgCcsICfmnpflnJLljYAnLCAn6bOl5p2+5Y2AJywgJ+Wkp+aoueWNgCcsICfml5flsbHljYAnLCAn576O5r+D5Y2AJyxcbiAgICAgICAgICAgICflha3pvpzljYAnLCAn5YWn6ZaA5Y2AJywgJ+adieael+WNgCcsICfnlLLku5nljYAnLCAn5qGD5rqQ5Y2AJywgJ+mCo+eRquWkj+WNgCcsICfojILmnpfljYAnLCAn6IyE6JCj5Y2AJ10sXG5cbiAgICAgICAgICAgIFsnODAwJywgJzgwMScsICc4MDInLCAnODAzJywgJzgwNCcsICc4MDUnLCAnODA2JywgJzgwNycsICc4MTEnLCAnODEyJywgJzgxMycsXG4gICAgICAgICAgICAnODE0JywgJzgxNScsICc4MTcnLCAnODE5JywgJzgyMCcsICc4MjEnLCAnODIyJywgJzgyMycsICc4MjQnLCAnODI1JywgJzgyNicsICc4MjcnLCAnODI4JyxcbiAgICAgICAgICAgICc4MjknLCAnODMwJywgJzgzMScsICc4MzInLCAnODMzJywgJzg0MCcsICc4NDInLCAnODQzJywgJzg0NCcsICc4NDUnLCAnODQ2JyxcbiAgICAgICAgICAgICc4NDcnLCAnODQ4JywgJzg0OScsICc4NTEnLCAnODUyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5r6O5rmW57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6aas5YWs5biCJywgJ+ilv+W2vOmEiScsICfmnJvlronphIknLCAn5LiD576O6YSJJywgJ+eZveaymemEiScsICfmuZbopb/phIknXSxcblxuICAgICAgICAgICAgWyc4ODAnLCAnODgxJywgJzg4MicsICc4ODMnLCAnODg0JywgJzg4NSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmHkemWgOe4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+mHkeaymemOricsICfph5HmuZbpjq4nLCAn6YeR5a+n6YSJJywgJ+mHkeWfjumOricsICfng4jltrzphIknLCAn54OP5Z216YSJJ10sXG5cbiAgICAgICAgICAgIFsnODkwJywgJzg5MScsICc4OTInLCAnODkzJywgJzg5NCcsICc4OTYnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlsY/mnbHnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyflsY/mnbHluIInLCAn5LiJ5Zyw6ZaA6YSJJywgJ+mcp+iHuumEiScsICfnkarlrrbphIknLCAn5Lmd5aaC6YSJJywgJ+mHjOa4r+mEiScsICfpq5jmqLnphIknLCAn6bm95Z+U6YSJJyxcbiAgICAgICAgICAgICfplbfmsrvphIknLCAn6bqf5rSb6YSJJywgJ+erueeUsOmEiScsICflhafln5TphIknLCAn6JCs5Li56YSJJywgJ+a9ruW3numOricsICfms7DmrabphIknLCAn5L6G576p6YSJJyxcbiAgICAgICAgICAgICfokKzlt5LphIknLCAn5bSB6aCC6YSJJywgJ+aWsOWfpOmEiScsICfljZflt57phIknLCAn5p6X6YKK6YSJJywgJ+adsea4r+mOricsICfnkInnkIPphIknLCAn5L2z5Yas6YSJJyxcbiAgICAgICAgICAgICfmlrDlnJLphIknLCAn5p6L5a+u6YSJJywgJ+aei+WxsemEiScsICfmmKXml6XphIknLCAn542F5a2Q6YSJJywgJ+i7iuWfjumEiScsICfniaHkuLnphIknLCAn5oGG5pil6Y6uJyxcbiAgICAgICAgICAgICfmu7/lt57phIknXSxcblxuICAgICAgICAgICAgWyc5MDAnLCAnOTAxJywgJzkwMicsICc5MDMnLCAnOTA0JywgJzkwNScsICc5MDYnLCAnOTA3JywgJzkwOCcsICc5MDknLCAnOTExJyxcbiAgICAgICAgICAgICc5MTInLCAnOTEzJywgJzkyMCcsICc5MjEnLCAnOTIyJywgJzkyMycsICc5MjQnLCAnOTI1JywgJzkyNicsICc5MjcnLCAnOTI4JyxcbiAgICAgICAgICAgICc5MjknLCAnOTMxJywgJzkzMicsICc5NDAnLCAnOTQxJywgJzk0MicsICc5NDMnLCAnOTQ0JywgJzk0NScsICc5NDYnLCAnOTQ3J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6Ie65p2x57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6Ie65p2x5biCJywgJ+e2oOWztumEiScsICfomK3ltrzphIknLCAn5bu25bmz6YSJJywgJ+WNkeWNl+mEiScsICfpub/ph47phIknLCAn6Zec5bGx6Y6uJywgJ+a1t+err+mEiScsXG4gICAgICAgICAgICAn5rGg5LiK6YSJJywgJ+adseays+mEiScsICfmiJDlip/pjq4nLCAn6ZW35r+x6YSJJywgJ+Wkqum6u+mHjCcsICfph5Hls7DphIknLCAn5aSn5q2m6YSJJywgJ+mBlOS7gemEiSddLFxuXG4gICAgICAgICAgICBbJzk1MCcsICc5NTEnLCAnOTUyJywgJzk1MycsICc5NTQnLCAnOTU1JywgJzk1NicsICc5NTcnLCAnOTU4JywgJzk1OScsICc5NjEnLFxuICAgICAgICAgICAgJzk2MicsICc5NjMnLCAnOTY0JywgJzk2NScsICc5NjYnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoirHok67nuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfoirHok67luIInLCAn5paw5Z+O6YSJJywgJ+engOael+mEiScsICflkInlronphIknLCAn5aO96LGQ6YSJJywgJ+mzs+ael+mOricsICflhYnlvqnphIknLCAn6LGQ5r+x6YSJJyxcbiAgICAgICAgICAgICfnkZ7nqZfphIknLCAn6JCs5qau6YSJJywgJ+eOiemHjOmOricsICfljZPmuqrphIknLCAn5a+M6YeM6YSJJ10sXG5cbiAgICAgICAgICAgIFsnOTcwJywgJzk3MScsICc5NzInLCAnOTczJywgJzk3NCcsICc5NzUnLCAnOTc2JywgJzk3NycsICc5NzgnLCAnOTc5JywgJzk4MScsXG4gICAgICAgICAgICAnOTgyJywgJzk4MyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmAo+axn+e4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+WNl+erv+mEiScsICfljJfnq7/phIknLCAn6I6S5YWJ6YSJJywgJ+adseW8lemEiSddLFxuXG4gICAgICAgICAgICBbJzIwOScsICcyMTAnLCAnMjExJywgJzIxMiddXG4gICAgICAgIF1cbiAgICBdXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlT3B0aW9ucygpIHtcbiAgLy8gQ2hlY2sgb3B0aW9ucyByZXF1aXJlZFxuICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgZ2V0T3B0aW9uc1JlcXVpcmVkKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuICBcbiAgLy8gRXh0ZW5kIG9wdGlvbnNcbiAgcmV0dXJuIGdldE9wdGlvbnNFeHRlbmQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMl0pO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zUmVxdWlyZWQob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkKSB7XG4gIHZhciBlcnJvciA9ICcnO1xuICB2YXIgbGVuZ3RoID0gb3B0aW9uc1JlcXVpcmVkLmxlbmd0aDtcbiAgb3B0aW9uc0N1c3RvbSA9IG9wdGlvbnNDdXN0b20gfHwge307XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKCAhIG9wdGlvbnNDdXN0b20uaGFzT3duUHJvcGVydHkob3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0pKSAgICAgICAgICBcbiAgICAgIGVycm9yICs9IG9wdGlvbnNSZXF1aXJlZFtsZW5ndGhdICsgJywnO1xuICB9XG4gIFxuICBpZiAoZXJyb3IpIHRocm93ICfnvLrlsJHlj4Pmlbg6ICcgKyBlcnJvcjtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0V4dGVuZChvcHRpb25zQ3VzdG9tLCBvcHRpb25zRGVmYXVsdCkge1xuICBpZiAoICEgb3B0aW9uc0N1c3RvbSkge1xuICAgIHJldHVybiBvcHRpb25zRGVmYXVsdDtcbiAgfVxuICBcbiAgdmFyIHByb3BlcnR5O1xuICBmb3IgKHByb3BlcnR5IGluIG9wdGlvbnNDdXN0b20pIHtcbiAgICBvcHRpb25zRGVmYXVsdFtwcm9wZXJ0eV0gPSBvcHRpb25zQ3VzdG9tW3Byb3BlcnR5XTtcbiAgfVxuICBcbiAgcmV0dXJuIG9wdGlvbnNEZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZHVsZSBpbXBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGhhbmRsZU9wdGlvbnMgZnJvbSAnLi9oYW5kbGUtb3B0aW9ucyc7XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZHVsZSBleHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIHJvbGx1cCB0byBidWlsZCAqL1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIGJyb3dzZXJpZnkgdG8gYnVpbGQgKi9cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29uc3RydWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBUd0NpdHlTZWxlY3RvcigpIHtcblxuXHR0aGlzLmVsUm9sZU5hbWUgPSAndHctY2l0eS1zZWxlY3Rvcic7XG5cblx0Ly8gU2V0dGluZyBvcHRpb25zXG5cdHZhciBvcHRpb25zRGVmYXVsdCA9IHtcblx0XHRlbDogbnVsbCxcblx0XHRlbENvdW50cnk6IG51bGwsXG5cdFx0ZWxEaXN0cmljdDogbnVsbCxcblx0XHRlbFppcGNvZGU6IG51bGwsXG5cdFx0c2VsZWN0ZWRDb3VudHJ5OiBudWxsLCAvLyB7Ym9vbGVhbn0g6aCQ6Kit6YG45pOH55qE57ij5biCXG5cdFx0c2VsZWN0ZWREaXN0cmljdDogbnVsbCwgLy8ge2Jvb2xlYW59IOmgkOioremBuOaTh+eahOWNgOWfn1xuXHRcdG9ubHk6IG51bGwsIC8vIHthcnJheX0g6ZmQ5Yi26aGv56S65ZOq5Lqb57ij5biCICjkuIvlgIvniYjmnKzmo4TnlKgpXG4gICAgICAgIG9ubHlDaXR5OiBudWxsLCAvLyB7YXJyYXl9IOmZkOWItumhr+ekuuWTquS6m+e4o+W4glxuXHRcdHNob3daaXBjb2RlOiBmYWxzZSwgLy8ge2Jvb2xlYW59IOaYr+WQpumhr+ekuumDtemBnuWNgOiZn+ashOS9jVxuXHRcdGJvb3RzdHJhcFN0eWxlOiBmYWxzZSxcblx0XHRjb3VudHJ5Q2xhc3NOYW1lOiAnY291bnRyeScsXG5cdFx0Y291bnRyeUZpbGVkTmFtZTogJ2NvdW50cnknLFxuXHRcdGRpc3RyaWN0Q2xhc3NOYW1lOiAnZGlzdHJpY3QnLFxuXHRcdGRpc3RyaWN0RmllbGROYW1lOiAnZGlzdHJpY3QnLFxuXHRcdHppcGNvZGVDbGFzc05hbWU6ICd6aXBjb2RlJyxcblx0XHR6aXBjb2RlRmllbGROYW1lOiAnemlwY29kZSdcblx0fTtcblxuICAgIHZhciBvcHRpb25zQ3VzdG9tID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgb3B0aW9uc1JlcXVpcmVkID0gYXJndW1lbnRzLmxlbmd0aCA/IFsnZWwnXSA6IG51bGw7IC8vIOioree9ruW/heimgeWPg+aVuO+8jOiLpeeEoeW4tuWFpeS7u+S9leWPg+aVuOWJh+ioreS4jeioree9rlxuXHR0aGlzLm9wdGlvbnMgPSBoYW5kbGVPcHRpb25zKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNSZXF1aXJlZCwgb3B0aW9uc0RlZmF1bHQpO1xuXG4gICAgLy8gU2V0dXBcblx0ZWxTZXR1cC5jYWxsKHRoaXMpO1xuXG5cdC8vIHJldHVybiB0aGlzO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHVibGljIE1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUd0NpdHlTZWxlY3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuLy8gXHRyZXR1cm4gaW5pdC5jYWxsKHRoaXMpO1xuLy8gfTtcblxuVHdDaXR5U2VsZWN0b3IucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiByZXNldFNlbGVjdG9ycy5jYWxsKHRoaXMpO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHJpdmF0ZSBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gZWxTZXR1cCgpIHtcbiAgICAvLyDmnInmjIflrpogZWxlbWVudCDnmoTliJ3lp4vljJZcblx0aWYgKHRoaXMub3B0aW9ucy5lbCkge1xuXHRcdHRoaXMuZWwgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbCk7XG5cdFx0dGhpcy5lbENvdW50cnkgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbENvdW50cnksIHRoaXMuZWwpO1xuXHRcdHRoaXMuZWxEaXN0cmljdCA9IGdldEVsZW1lbnQodGhpcy5vcHRpb25zLmVsRGlzdHJpY3QsIHRoaXMuZWwpO1xuXHRcdHRoaXMuZWxaaXBjb2RlID0gZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuZWxaaXBjb2RlLCB0aGlzLmVsKTtcblxuXHRcdHJldHVybiBpbml0LmNhbGwodGhpcyk7XG5cdH1cblxuXHQvLyDnhKHmjIflrpogZWxlbWVudCDnmoTliJ3lp4vljJbvvIzkvb/nlKggcm9sZS1hdHRyaWJ1dGUgZWxlbWVudCDkvZzngrrpoJDoqK0gZWxlbWVudHNcblx0dmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPScrIHRoaXMuZWxSb2xlTmFtZSArJ10nKTtcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbHMsIGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHNlbGYgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKTsgLy8gY2xvbmUgb2JqZWN077yM5ZugIG9iamVjdCDngrrlj4PogINcblxuXHRcdC8vIOmHjee9ruioreWumlxuXHRcdHNlbGYuZWwgPSBlbDtcblx0XHRzZWxmLmVsQ291bnRyeSA9IG51bGw7XG5cdFx0c2VsZi5lbERpc3RyaWN0ID0gbnVsbDtcblx0XHRzZWxmLmVsWmlwY29kZSA9IG51bGw7XG5cblx0XHQvLyDpmZDliLbpoa/npLrlk6rkupvnuKPluIIgKOS4i+WAi+eJiOacrOajhOeUqClcblx0XHRzZWxmLm9wdGlvbnMub25seSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5Jylcblx0XHRcdD8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHknKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykgLy8g5Y676Zmk56m655m95a2X5YWD77yM6L2J6Zmj5YiXXG5cdFx0XHQ6IG51bGw7XG5cbiAgICAgICAgLy8g6ZmQ5Yi26aGv56S65ZOq5Lqb57ij5biCXG4gICAgXHRzZWxmLm9wdGlvbnMub25seUNpdHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seS1jaXR5Jylcblx0XHRcdD8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHktY2l0eScpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKSAvLyDljrvpmaTnqbrnmb3lrZflhYPvvIzovYnpmaPliJdcblx0XHRcdDogbnVsbDtcblxuXHRcdC8vIOmgkOioremBuOaTh+eahOe4o+W4glxuXHRcdHNlbGYub3B0aW9ucy5zZWxlY3RlZENvdW50cnkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtY291bnRyeScpO1xuXG5cdFx0Ly8g6aCQ6Kit6YG45pOH55qE5Y2A5Z+fXG5cdFx0c2VsZi5vcHRpb25zLnNlbGVjdGVkRGlzdHJpY3QgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtZGlzdHJpY3QnKTtcblxuICAgICAgICAvLyDmmK/lkKbkvb/nlKggYm9vdHN0cmFwIOaoo+W8j1xuXHRcdHNlbGYub3B0aW9ucy5ib290c3RyYXBTdHlsZSA9IChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYm9vdHN0cmFwLXN0eWxlJykgIT0gbnVsbCk7XG5cbiAgICAgICAgLy8g5piv5ZCm6aGv56S66YO16YGe5Y2A6JmfXG5cdFx0c2VsZi5vcHRpb25zLnNob3daaXBjb2RlID0gKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zaG93LXppcGNvZGUnKSAhPSBudWxsKTtcblxuXHRcdHJldHVybiBpbml0LmNhbGwoc2VsZik7XG5cdH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIGVscztcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0c2V0RWxlbWVudHMuY2FsbCh0aGlzKTtcblxuICAgIC8vIOebo+iBvemBuOWWruWLleS9nFxuXHRsaXN0ZW5Db3VudHJ5Q2hhbmdlZC5jYWxsKHRoaXMpO1xuXHRsaXN0ZW5EaXN0cmljdENoYW5nZWQuY2FsbCh0aGlzKTtcblxuXHQvLyDoqK3lrprpoJDoqK3pgbjlrprnmoTnuKPluIJcblx0c2V0U2VsZWN0ZWRJdGVtLmNhbGwodGhpcyk7XG5cblx0Ly8gYm9vdHN0cmFwIOaoo+W8j+Wll+WFpVxuXHRpZiAodGhpcy5vcHRpb25zLmJvb3RzdHJhcFN0eWxlKSB7XG5cdFx0c2V0Qm9vdHN0cmFwU3R5bGUuY2FsbCh0aGlzKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50KGVsLCBwYXJlbnQpIHtcbiAgICBpZiAoICEgZWwpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGlmIChwYXJlbnQpXG4gICAgICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihlbCk7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudHMoKSB7XG5cdHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuXHQvLyDnuKPluILpgbjllq5cblx0aWYgKCAhIHRoaXMuZWxDb3VudHJ5KSB7XG5cdFx0dmFyIGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0XHR0aGlzLmVsQ291bnRyeSA9IGNvdW50cnk7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY291bnRyeSk7XG5cdH1cblxuXHQvLyDnuKPluILpgbjllq7lsazmgKdcblx0dGhpcy5lbENvdW50cnkuaW5uZXJIVE1MID0gZ2V0Q291bnRyeU9wdGlvbnMuY2FsbCh0aGlzKTtcblx0dGhpcy5lbENvdW50cnkuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5jb3VudHJ5Q2xhc3NOYW1lKTtcblx0dGhpcy5lbENvdW50cnkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHJ5RmlsZWROYW1lO1xuXG5cdC8vIOWNgOWfn+mBuOWWrlxuXHRpZiAoICEgdGhpcy5lbERpc3RyaWN0KSB7XG5cdFx0dmFyIGRpc3RyaWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cdFx0dGhpcy5lbERpc3RyaWN0ID0gZGlzdHJpY3Q7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGlzdHJpY3QpO1xuXHR9XG5cblx0Ly8g5Y2A5Z+f6YG45Zau5bGs5oCnXG5cdHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoKTtcblx0dGhpcy5lbERpc3RyaWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuZGlzdHJpY3RDbGFzc05hbWUpO1xuXHR0aGlzLmVsRGlzdHJpY3QubmFtZSA9IHRoaXMub3B0aW9ucy5kaXN0cmljdEZpZWxkTmFtZTtcblxuXHQvLyDpg7XpgZ7ljYDomZ9cblx0aWYgKCAhIHRoaXMuZWxaaXBjb2RlKSB7XG5cdFx0dmFyIHppcGNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHRoaXMuZWxaaXBjb2RlID0gemlwY29kZTtcblx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZCh6aXBjb2RlKTtcblxuICAgICAgICAvLyDpg7XpgZ7ljYDomZ/lsazmgKfoqK3lrppcbiAgICAgICAgdGhpcy5lbFppcGNvZGUuc3R5bGUuZGlzcGxheSA9IHRoaXMub3B0aW9ucy5zaG93WmlwY29kZSB8fCAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLnN0eWxlLndpZHRoID0gJzZlbSc7XG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbFppcGNvZGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGhpcy5lbFppcGNvZGUucGxhY2Vob2xkZXIgPSAn6YO16YGe5Y2A6JmfJztcbiAgICAgICAgdGhpcy5lbFppcGNvZGUubmFtZSA9IHRoaXMub3B0aW9ucy56aXBjb2RlRmllbGROYW1lO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLnppcGNvZGVDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS5hdXRvY29tcGxldGUgPSAnb2ZmJztcblx0fVxuXG5cdC8vIGVsZW1lbnQg54mH5q615aGe5YWlIGVsXG5cdHRoaXMuZWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRDb3VudHJ5RWxlbWVudCgpIHtcbiAgICAvLyDnuKPluILpgbjllq5cblx0aWYgKCAhIHRoaXMuZWxDb3VudHJ5KSB7XG5cdFx0dmFyIGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0XHR0aGlzLmVsQ291bnRyeSA9IGNvdW50cnk7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY291bnRyeSk7XG5cdH1cblxuXHQvLyDnuKPluILpgbjllq7lsazmgKdcblx0dGhpcy5lbENvdW50cnkuaW5uZXJIVE1MID0gZ2V0Q291bnRyeU9wdGlvbnMuY2FsbCh0aGlzKTtcblx0dGhpcy5lbENvdW50cnkuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5jb3VudHJ5Q2xhc3NOYW1lKTtcblx0dGhpcy5lbENvdW50cnkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHJ5RmlsZWROYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRDb3VudHJ5T3B0aW9ucygpIHtcblx0dmFyIGVsT3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+6YG45pOH57ij5biCPC9vcHRpb24+JztcbiAgICB2YXIgb25seUNpdHkgPSB0aGlzLm9wdGlvbnMub25seSB8fCB0aGlzLm9wdGlvbnMub25seUNpdHk7IC8vIHRoaXMub3B0aW9ucy5vbmx5IOS4i+WAi+eJiOacrOajhOeUqFxuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gZGF0YS5jb3VudHJpZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdFx0Ly8g6Iul5pyJ6Kit5a6a6ZmQ5Yi26aGv56S655qE57ij5biC77yM5LiU6Kmy6aCF55uu5LiN5Zyo6Ieq6KiC57ij5biC5LitXG5cdFx0aWYgKG9ubHlDaXR5ICYmIEFycmF5LmlzQXJyYXkob25seUNpdHkpICYmIG9ubHlDaXR5LmluZGV4T2YoZGF0YS5jb3VudHJpZXNbaV0pID09PSAtMSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi6Ie65YyX5biCXCIgZGF0YS1pbmRleD1cIjBcIj7oh7rljJfluII8L29wdGlvbj5cblx0XHRlbE9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2RhdGEuY291bnRyaWVzW2ldfVwiIGRhdGEtaW5kZXg9XCIke2l9XCI+JHtkYXRhLmNvdW50cmllc1tpXX08L29wdGlvbj5gO1xuXHR9XG5cblx0cmV0dXJuIGVsT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gZ2V0RGlzdHJpY3RPcHRpb25zKGluZGV4KSB7XG5cdGlmICggISBpbmRleCkge1xuXHRcdHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPi0tLTwvb3B0aW9uPic7XG5cdH1cblxuXHR2YXIgZWxPcHRpb25zID0gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD7pgbjmk4fljYDln588L29wdGlvbj4nO1xuXG5cdGZvcih2YXIgaSA9IDAsIGogPSBkYXRhLmRpc3RyaWN0c1tpbmRleF1bMF0ubGVuZ3RoIC0gMTsgaSA8PSBqOyBpKyspIHtcblx0XHQvLyBmb3JtYXQ6IDxvcHRpb24gdmFsdWU9XCLkuK3mraPljYBcIiBkYXRhLXppcGNvZGU9XCIxMDBcIj7kuK3mraPljYA8L29wdGlvbj5cblx0XHRlbE9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2RhdGEuZGlzdHJpY3RzW2luZGV4XVswXVtpXX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtemlwY29kZT1cIiR7ZGF0YS5kaXN0cmljdHNbaW5kZXhdWzFdW2ldfVwiPlxuXHRcdCAgICAgICAgICAgICAgICAke2RhdGEuZGlzdHJpY3RzW2luZGV4XVswXVtpXX1cblx0XHQgICAgICAgICAgICA8L29wdGlvbj5gO1xuXHR9XG5cblx0cmV0dXJuIGVsT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gbGlzdGVuQ291bnRyeUNoYW5nZWQoKSB7XG5cdHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGluZGV4ID0gdGhpcy5lbENvdW50cnkucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKS5kYXRhc2V0LmluZGV4O1xuXHRcdHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoaW5kZXgpO1xuXHRcdHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gJyc7XG5cdH0uYmluZCh0aGlzKTtcblxuXHR0aGlzLmVsQ291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuRGlzdHJpY3RDaGFuZ2VkKCkge1xuXHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB6aXBjb2RlID0gdGhpcy5lbERpc3RyaWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJykuZGF0YXNldC56aXBjb2RlO1xuXHRcdHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gemlwY29kZTtcblx0fS5iaW5kKHRoaXMpO1xuXG5cdHRoaXMuZWxEaXN0cmljdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHJ5KSB7XG4gICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIFx0ZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcblxuICAgIFx0dGhpcy5lbENvdW50cnkudmFsdWUgPSB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHJ5O1xuICAgIFx0dGhpcy5lbENvdW50cnkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG5cdGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCkge1xuXHRcdHRoaXMuZWxEaXN0cmljdC52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZERpc3RyaWN0O1xuXHRcdHRoaXMuZWxEaXN0cmljdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXNldFNlbGVjdG9ycygpIHtcblx0dGhpcy5lbENvdW50cnkuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoKTtcblx0dGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcblxuXHRyZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2V0Qm9vdHN0cmFwU3R5bGUoKSB7XG5cdHZhciBmaWVsZENsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICAgIHZhciB3cmFwcGVyQ2xhc3NOYW1lID0gJ2Zvcm0tZ3JvdXAnO1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0dGhpcy5lbENvdW50cnkuc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpZWxkQ2xhc3NOYW1lKTtcblx0dGhpcy5lbERpc3RyaWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWVsZENsYXNzTmFtZSk7XG5cdHRoaXMuZWxaaXBjb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWVsZENsYXNzTmFtZSk7XG5cbiAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIHdyYXBwZXJDbGFzc05hbWUpO1xuXG5cdHZhciBlbENvdW50cnkgPSB3cmFwcGVyLmNsb25lTm9kZSgpO1xuXHRlbENvdW50cnkuYXBwZW5kQ2hpbGQodGhpcy5lbENvdW50cnkpO1xuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbENvdW50cnkpO1xuXG5cdHZhciBlbERpc3RyaWN0ID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcblx0ZWxEaXN0cmljdC5hcHBlbmRDaGlsZCh0aGlzLmVsRGlzdHJpY3QpO1xuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbERpc3RyaWN0KTtcblxuXHR2YXIgZWxaaXBjb2RlID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcblx0ZWxaaXBjb2RlLmFwcGVuZENoaWxkKHRoaXMuZWxaaXBjb2RlKTtcblx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxaaXBjb2RlKTtcblxuXHR0aGlzLmVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbiJdLCJuYW1lcyI6WyJkYXRhIiwiVHdDaXR5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQUlBLFNBQU87O2VBRUksQ0FDUCxLQURPLEVBQ0EsS0FEQSxFQUNPLEtBRFAsRUFDYyxLQURkLEVBQ3FCLEtBRHJCLEVBQzRCLEtBRDVCLEVBQ21DLEtBRG5DLEVBQzBDLEtBRDFDLEVBRVAsS0FGTyxFQUVBLEtBRkEsRUFFTyxLQUZQLEVBRWMsS0FGZCxFQUVxQixLQUZyQixFQUU0QixLQUY1QixFQUVtQyxLQUZuQyxFQUUwQyxLQUYxQyxFQUdQLEtBSE8sRUFHQSxLQUhBLEVBR08sS0FIUCxFQUdjLEtBSGQsRUFHcUIsS0FIckIsRUFHNEIsS0FINUIsQ0FGSjs7O2VBU0k7O0tBR0gsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFDQSxLQURBLEVBQ08sS0FEUCxFQUNjLEtBRGQsRUFDcUIsS0FEckIsRUFDNEIsS0FENUIsQ0FESixFQUlJLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQXVFLEtBQXZFLEVBQThFLEtBQTlFLENBSkosQ0FGTzs7S0FVSCxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixF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