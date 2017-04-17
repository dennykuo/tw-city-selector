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

	var elRoleName = 'tw-city-selector';

	// --- Setting options ---
	var optionsCustom = arguments[0];
	var optionsRequired = arguments.length ? ['el'] : null; // 設置必要參數，若無帶入任何參數則設不設置
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

	this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);

	// 有指定 element 的初始化
	if (this.options.el) {
		this.el = getElement(this.options.el);
		this.elCountry = getElement(this.options.elCountry);
		this.elDistrict = getElement(this.options.elDistrict);
		this.elZipcode = getElement(this.options.elZipcode);

		init.call(this);

		return this;
	}

	// 無指定 element 的初始化，使用 role-attribute element 作為預設 elements
	var els = document.querySelectorAll('[role=' + elRoleName + ']');
	els.forEach(function (el) {
		var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

		// 重置設定
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
function init() {
	setElements.call(this);
	listenCountryChanged.call(this);
	listenDistrictChanged.call(this);

	// 有設定預設選定的縣市
	if (this.options.selectedCountry) {
		setSelectedItem.call(this);
	}

	// bootstrap 樣式套入
	if (this.options.bootstrapStyle) {
		setBootstrapStyle.call(this);
	}

	return this;
}

function getElement(el) {
	return el ? document.querySelector(el) : null;
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
	this.elCountry.innerHTML = getCountryOptions(this.options.only);
	this.elCountry.setAttribute('class', this.options.countryClassName);

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

	// element 片段塞入 el
	this.el.appendChild(fragment);
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
		options += '\n\t\t<option value="' + data$1.district[index][0][i] + '" data-zipcode="' + data$1.district[index][1][i] + '">\n\t\t' + data$1.district[index][0][i] + '\n\t\t</option>\n\t\t';
	}

	return options;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9kay1wbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCIvVXNlcnMvZGVubnkvRHJvcGJveC8wMS3ntrLnq5nlsIjmoYgvZGstcGx1Z2lucy90dy1jaXR5LXNlbGVjdG9yL3NyYy9oYW5kbGVPcHRpb25zLmpzIiwiL1VzZXJzL2Rlbm55L0Ryb3Bib3gvMDEt57ay56uZ5bCI5qGIL2RrLXBsdWdpbnMvdHctY2l0eS1zZWxlY3Rvci9zcmMvdHctY2l0eS1zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBkYXRhO1xuXG52YXIgZGF0YSA9IHtcbiAgICAvLyDnuKPluIJcbiAgICBjb3VudHJ5OiBbXG4gICAgICAgICfoh7rljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOerueW4gicsICfmlrDnq7nnuKMnLCAn6IuX5qCX57ijJyxcbiAgICAgICAgJ+iHuuS4reW4gicsICflvbDljJbnuKMnLCAn5Y2X5oqV57ijJywgJ+WYiee+qeW4gicsICflmInnvqnnuKMnLCAn6Zuy5p6X57ijJywgJ+iHuuWNl+W4gicsICfpq5jpm4TluIInLFxuICAgICAgICAn5r6O5rmW57ijJywgJ+mHkemWgOe4oycsICflsY/mnbHnuKMnLCAn6Ie65p2x57ijJywgJ+iKseiTrue4oycsICfpgKPmsZ/nuKMnXG4gICAgXSxcblxuICAgIC8vIOWNgOWfn1xuICAgIGRpc3RyaWN0OiBbXG4gICAgICAgIC8vIOiHuuWMl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S4reato+WNgCcsICflpKflkIzljYAnLCAn5Lit5bGx5Y2AJywgJ+advuWxseWNgCcsICflpKflronljYAnLCAn6JCs6I+v5Y2AJywgJ+S/oee+qeWNgCcsXG4gICAgICAgICAgICAn5aOr5p6X5Y2AJywgJ+WMl+aKleWNgCcsICflhafmuZbljYAnLCAn5Y2X5riv5Y2AJywgJ+aWh+WxseWNgCddLFxuXG4gICAgICAgICAgICBbJzEwMCcsICcxMDMnLCAnMTA0JywgJzEwNScsICcxMDYnLCAnMTA4JywgJzExMCcsICcxMTEnLCAnMTEyJywgJzExNCcsICcxMTUnLCAnMTE2J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5Z+66ZqG5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5LuB5oSb5Y2AJywgJ+S/oee+qeWNgCcsICfkuK3mraPljYAnLCAn5Lit5bGx5Y2AJywgJ+WuieaoguWNgCcsICfmmpbmmpbljYAnLCAn5LiD5aC15Y2AJ10sXG5cbiAgICAgICAgICAgIFsnMjAwJywgJzIwMScsICcyMDInLCAnMjAzJywgJzIwNCcsICcyMDUnLCAnMjA2J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw5YyX5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6JCs6YeM5Y2AJywgJ+mHkeWxseWNgCcsICfmnb/mqYvljYAnLCAn5rGQ5q2i5Y2AJywgJ+a3seWdkeWNgCcsICfnn7PnoofljYAnLCAn55Ge6Iqz5Y2AJywgJ+W5s+a6quWNgCcsXG4gICAgICAgICAgICAn6ZuZ5rqq5Y2AJywgJ+iyouWvruWNgCcsICfmlrDlupfljYAnLCAn5Z2q5p6X5Y2AJywgJ+eDj+S+huWNgCcsICfmsLjlkozljYAnLCAn5Lit5ZKM5Y2AJywgJ+Wcn+WfjuWNgCcsXG4gICAgICAgICAgICAn5LiJ5bO95Y2AJywgJ+aoueael+WNgCcsICfptq/mrYzljYAnLCAn5LiJ6YeN5Y2AJywgJ+aWsOiOiuWNgCcsICfms7DlsbHljYAnLCAn5p6X5Y+j5Y2AJywgJ+iYhua0suWNgCcsXG4gICAgICAgICAgICAn5LqU6IKh5Y2AJywgJ+WFq+mHjOWNgCcsICfmt6HmsLTljYAnLCAn5LiJ6Iqd5Y2AJywgJ+efs+mWgOWNgCddLFxuXG4gICAgICAgICAgICBbJzIwNycsICcyMDgnLCAnMjIwJywgJzIyMScsICcyMjInLCAnMjIzJywgJzIyNCcsICcyMjYnLCAnMjI3JywgJzIyOCcsXG4gICAgICAgICAgICAnMjMxJywgJzIzMicsICcyMzMnLCAnMjM0JywgJzIzNScsICcyMzYnLCAnMjM3JywgJzIzOCcsICcyMzknLCAnMjQxJyxcbiAgICAgICAgICAgICcyNDInLCAnMjQzJywgJzI0NCcsICcyNDcnLCAnMjQ4JywgJzI0OScsICcyNTEnLCAnMjUyJywgJzI1MyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWunOiYree4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+WunOiYreW4gicsICfpoK3ln47pjq4nLCAn56SB5rqq6YSJJywgJ+Wjr+WcjemEiScsICflk6HlsbHphIknLCAn576F5p2x6Y6uJywgJ+S4ieaYn+mEiScsICflpKflkIzphIknLFxuICAgICAgICAgICAgJ+S6lOe1kOmEiScsICflhqzlsbHphIknLCAn6JiH5r6z6Y6uJywgJ+WNl+a+s+mEiScsICfph6PprZroh7onXSxcblxuICAgICAgICAgICAgWycyNjAnLCAnMjYxJywgJzI2MicsICcyNjMnLCAnMjY0JywgJzI2NScsICcyNjYnLCAnMjY3JywgJzI2OCcsICcyNjknLFxuICAgICAgICAgICAgJzI3MCcsICcyNzInLCAnMjkwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5qGD5ZyS5biCXG4gICAgXHRbXG4gICAgXHRcdFsn5Lit5aOi5Y2AJywgJ+W5s+mOruWNgCcsICfpvo3mva3ljYAnLCAn5qWK5qKF5Y2AJywgJ+aWsOWxi+WNgCcsICfop4Dpn7PljYAnLCAn5qGD5ZyS5Y2AJywgJ+m+nOWxseWNgCcsXG4gICAgXHRcdCflhavlvrfljYAnLCAn5aSn5rqq5Y2AJywgJ+W+qeiIiOWNgCcsICflpKflnJLljYAnLCAn6JiG56u55Y2AJ10sXG5cbiAgICBcdFx0WyczMjAnLCAnMzI0JywgJzMyNScsICczMjYnLCAnMzI3JywgJzMyOCcsICczMzAnLCAnMzMzJywgJzMzNCcsICczMzUnLFxuICAgIFx0XHQnMzM2JywgJzMzNycsICczMzgnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDmlrDnq7nluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmnbHljYAnLCAn5YyX5Y2AJywgJ+mmmeWxseWNgCddLFxuXG4gICAgICAgICAgICBbJzMwMCcsICczMDAnLCAnMzAwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw56u557ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn56u55YyX5biCJywgJ+a5luWPo+mEiScsICfmlrDosZDphIknLCAn5paw5Z+U6Y6uJywgJ+mXnOilv+mOricsICfoio7mnpfphIknLCAn5a+25bGx6YSJJyxcbiAgICAgICAgICAgICfnq7nmnbHpjq4nLCAn5LqU5bOw6YSJJywgJ+apq+WxsemEiScsICflsJbnn7PphIknLCAn5YyX5Z+U6YSJJywgJ+WzqOeciemEiSddLFxuXG4gICAgICAgICAgICBbJzMwMicsICczMDMnLCAnMzA0JywgJzMwNScsICczMDYnLCAnMzA3JywgJzMwOCcsICczMTAnLCAnMzExJyxcbiAgICAgICAgICAgICczMTInLCAnMzEzJywgJzMxNCcsICczMTUnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoi5fmoJfnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfnq7nljZfpjq4nLCAn6aCt5Lu95biCJywgJ+S4ieeBo+mEiScsICfljZfluoTphIknLCAn542F5r2t6YSJJywgJ+W+jOm+jemOricsICfpgJrpnITpjq4nLCAn6IuR6KOh6Y6uJyxcbiAgICAgICAgICAgICfoi5fmoJfluIInLCAn6YCg5qmL6YSJJywgJ+mgreWxi+mEiScsICflhazppKjphIknLCAn5aSn5rmW6YSJJywgJ+azsOWuiemEiScsXG4gICAgICAgICAgICAn6YqF6ZG86YSJJywgJ+S4iee+qemEiScsICfopb/muZbphIknLCAn5Y2T6Jit6Y6uJ10sXG5cbiAgICAgICAgICAgIFsnMzUwJywgJzM1MScsICczNTInLCAnMzUzJywgJzM1NCcsICczNTYnLCAnMzU3JywgJzM1OCcsICczNjAnLCAnMzYxJyxcbiAgICAgICAgICAgICczNjInLCAnMzYzJywgJzM2NCcsICczNjUnLCAnMzY2JywgJzM2NycsICczNjgnLCAnMzY5J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6Ie65Lit5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit5Y2AJywgJ+adseWNgCcsICfljZfljYAnLCAn6KW/5Y2AJywgJ+WMl+WNgCcsICfljJflsa/ljYAnLCAn6KW/5bGv5Y2AJywgJ+WNl+Wxr+WNgCcsICflpKrlubPljYAnLFxuICAgICAgICAgICAgJ+Wkp+mHjOWNgCcsICfpnKfls7DljYAnLCAn54OP5pel5Y2AJywgJ+ixkOWOn+WNgCcsICflkI7ph4zljYAnLCAn55+z5bKh5Y2AJywgJ+adseWLouWNgCcsICflkozlubPljYAnLFxuICAgICAgICAgICAgJ+aWsOekvuWNgCcsICfmva3lrZDljYAnLCAn5aSn6ZuF5Y2AJywgJ+elnuWyoeWNgCcsICflpKfogprljYAnLCAn5rKZ6bm/5Y2AJywgJ+m+jeS6leWNgCcsICfmoqfmo7LljYAnLFxuICAgICAgICAgICAgJ+a4heawtOWNgCcsICflpKfnlLLljYAnLCAn5aSW5Z+U5Y2AJywgJ+Wkp+WuieWNgCddLFxuXG4gICAgICAgICAgICBbJzQwMCcsICc0MDEnLCAnNDAyJywgJzQwMycsICc0MDQnLCAnNDA2JywgJzQwNycsICc0MDgnLCAnNDExJywgJzQxMicsXG4gICAgICAgICAgICAnNDEzJywgJzQxNCcsICc0MjAnLCAnNDIxJywgJzQyMicsICc0MjMnLCAnNDI0JywgJzQyNicsICc0MjcnLCAnNDI4JyxcbiAgICAgICAgICAgICc0MjknLCAnNDMyJywgJzQzMycsICc0MzQnLCAnNDM1JywgJzQzNicsICc0MzcnLCAnNDM4JywgJzQzOSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOW9sOWMlue4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+W9sOWMluW4gicsICfoiqzlnJLphIknLCAn6Iqx5aOH6YSJJywgJ+engOawtOmEiScsICfpub/muK/pjq4nLCAn56aP6IiI6YSJJywgJ+e3muilv+mEiScsICflkoznvo7pjq4nLFxuICAgICAgICAgICAgJ+S8uOa4r+mEiScsICflk6HmnpfluIInLCAn56S+6aCt6YSJJywgJ+awuOmdlumEiScsICfln5Tlv4PphIknLCAn5rqq5rmW6Y6uJywgJ+Wkp+adkemEiScsICfln5Tpub3phIknLFxuICAgICAgICAgICAgJ+eUsOS4remOricsICfljJfmlpfpjq4nLCAn55Sw5bC+6YSJJywgJ+WfpOmgremEiScsICfmuqrlt57phIknLCAn56u55aGY6YSJJywgJ+S6jOael+mOricsICflpKfln47phIknLFxuICAgICAgICAgICAgJ+iKs+iLkemEiScsICfkuozmsLTphIknXSxcblxuICAgICAgICAgICAgWyc1MDAnLCAnNTAyJywgJzUwMycsICc1MDQnLCAnNTA1JywgJzUwNicsICc1MDcnLCAnNTA4JywgJzUwOScsICc1MTAnLFxuICAgICAgICAgICAgJzUxMScsICc1MTInLCAnNTEzJywgJzUxNCcsICc1MTUnLCAnNTE2JywgJzUyMCcsICc1MjEnLCAnNTIyJywgJzUyMycsXG4gICAgICAgICAgICAnNTI0JywgJzUyNScsICc1MjYnLCAnNTI3JywgJzUyOCcsICc1MzAnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDljZfmipXnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfljZfmipXluIInLCAn5Lit5a+u6YSJJywgJ+iNieWxr+mOricsICflnIvlp5PphIknLCAn5Z+U6YeM6Y6uJywgJ+S7geaEm+mEiScsICflkI3plpPphIknLCAn6ZuG6ZuG6Y6uJyxcbiAgICAgICAgICAgICfmsLTph4zphIknLCAn6a2a5rGg6YSJJywgJ+S/oee+qemEiScsICfnq7nlsbHpjq4nLCAn6bm/6LC36YSJJ10sXG5cbiAgICAgICAgICAgIFsnNTQwJywgJzU0MScsICc1NDInLCAnNTQ0JywgJzU0NScsICc1NDYnLCAnNTUxJywgJzU1MicsICc1NTMnLCAnNTU1JyxcbiAgICAgICAgICAgICc1NTYnLCAnNTU3JywgJzU1OCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWYiee+qeW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+adseWNgCcsICfopb/ljYAnXSxcblxuICAgICAgICAgICAgWyc2MDAnLCAnNjAwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5ZiJ576p57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn55Wq6Lev6YSJJywgJ+aiheWxsemEiScsICfnq7nltI7phIknLCAn6Zi/6YeM5bGxJywgJ+S4reWflOmEiScsICflpKfln5TphIknLCAn5rC05LiK6YSJJyxcbiAgICAgICAgICAgICfpub/ojYnphIknLCAn5aSq5L+d5biCJywgJ+actOWtkOW4gicsICfmnbHnn7PphIknLCAn5YWt6IWz6YSJJywgJ+aWsOa4r+mEiScsICfmsJHpm4TphIknLCAn5aSn5p6X6Y6uJyxcbiAgICAgICAgICAgICfmuqrlj6PphIknLCAn576p56u56YSJJywgJ+W4g+iii+mOriddLFxuXG4gICAgICAgICAgICBbJzYwMicsICc2MDMnLCAnNjA0JywgJzYwNScsICc2MDYnLCAnNjA3JywgJzYwOCcsICc2MTEnLCAnNjEyJyxcbiAgICAgICAgICAgICc2MTMnLCAnNjE0JywgJzYxNScsICc2MTYnLCAnNjIxJywgJzYyMicsICc2MjMnLCAnNjI0JywgJzYyNSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmbsuael+e4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+aWl+WNl+mOricsICflpKfln6TphIknLCAn6JmO5bC+6Y6uJywgJ+Wcn+W6q+mOricsICfopJLlv6DphIknLCAn5p2x5Yui6YSJJywgJ+iHuuilv+mEiScsICfltJnog4zphIknLFxuICAgICAgICAgICAgJ+m6peWvrumEiScsICfmlpflha3luIInLCAn5p6X5YWn6YSJJywgJ+WPpOWdkemEiScsICfojr/moZDphIknLCAn6KW/6J666Y6uJywgJ+S6jOW0memEiScsICfljJfmuK/pjq4nLFxuICAgICAgICAgICAgJ+awtOael+mEiScsICflj6PmuZbphIknLCAn5Zub5rmW6YSJJywgJ+WFg+mVt+mEiSddLFxuXG4gICAgICAgICAgICBbJzYzMCcsICc2MzEnLCAnNjMyJywgJzYzMycsICc2MzQnLCAnNjM1JywgJzYzNicsICc2MzcnLCAnNjM4JywgJzY0MCcsICc2NDMnLFxuICAgICAgICAgICAgJzY0NicsICc2NDcnLCAnNjQ4JywgJzY0OScsICc2NTEnLCAnNjUyJywgJzY1MycsICc2NTQnLCAnNjU1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6Ie65Y2X5biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Lit6KW/5Y2AJywgJ+adseWNgCcsICfljZfljYAnLCAn5YyX5Y2AJywgJ+WuieW5s+WNgCcsICflronljZfljYAnLCAn5rC45bq35Y2AJywgJ+atuOS7geWNgCcsICfmlrDljJbljYAnLFxuICAgICAgICAgICAgJ+W3pumOruWNgCcsICfnjonkupXljYAnLCAn5qWg6KW/5Y2AJywgJ+WNl+WMluWNgCcsICfku4HlvrfljYAnLCAn6Zec5buf5Y2AJywgJ+m+jeW0juWNgCcsICflrpjnlLDljYAnLFxuICAgICAgICAgICAgJ+m6u+ixhuWNgCcsICfkvbPph4zljYAnLCAn6KW/5riv5Y2AJywgJ+S4g+iCoeWNgCcsICflsIfou43ljYAnLCAn5a2455Sy5Y2AJywgJ+WMl+mWgOWNgCcsICfmlrDnh5/ljYAnLFxuICAgICAgICAgICAgJ+W+jOWjgeWNgCcsICfnmb3msrPljYAnLCAn5p2x5bGx5Y2AJywgJ+WFreeUsuWNgCcsICfkuIvnh5/ljYAnLCAn5p+z54ef5Y2AJywgJ+m5veawtOWNgCcsICflloTljJbljYAnLFxuICAgICAgICAgICAgJ+Wkp+WFp+WNgCcsICflsbHkuIrljYAnLCAn5paw5biC5Y2AJywgJ+WuieWumuWNgCddLFxuXG4gICAgICAgICAgICBbJzcwMCcsICc3MDEnLCAnNzAyJywgJzcwNCcsICc3MDgnLCAnNzA5JywgJzcxMCcsICc3MTEnLCAnNzEyJywgJzcxMycsICc3MTQnLFxuICAgICAgICAgICAgJzcxNScsICc3MTYnLCAnNzE3JywgJzcxOCcsICc3MTknLCAnNzIwJywgJzcyMScsICc3MjInLCAnNzIzJywgJzcyNCcsICc3MjUnLFxuICAgICAgICAgICAgJzcyNicsICc3MjcnLCAnNzMwJywgJzczMScsICc3MzInLCAnNzMzJywgJzczNCcsICc3MzUnLCAnNzM2JywgJzczNycsICc3NDEnLFxuICAgICAgICAgICAgJzc0MicsICc3NDMnLCAnNzQ0JywgJzc0NSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmrmOmbhOW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+aWsOiIiOWNgCcsICfliY3ph5HljYAnLCAn6IuT6ZuF5Y2AJywgJ+m5veWfleWNgCcsICfpvJPlsbHljYAnLCAn5peX5rSl5Y2AJywgJ+WJjemOruWNgCcsICfkuInmsJHljYAnLFxuICAgICAgICAgICAgJ+aloOaik+WNgCcsICflsI/muK/ljYAnLCAn5bem54ef5Y2AJywgJ+S7geatpuWNgCcsICflpKfnpL7ljYAnLCAn5p2x5rKZ576k5bO2JywgJ+WNl+aymee+pOWzticsICflsqHlsbHljYAnLFxuICAgICAgICAgICAgJ+i3r+erueWNgCcsICfpmL/ok67ljYAnLCAn55Sw5a+u5Y2AJywgJ+eHleW3ouWNgCcsICfmqYvpoK3ljYAnLCAn5qKT5a6Y5Y2AJywgJ+W9jOmZgOWNgCcsICfmsLjlronljYAnLFxuICAgICAgICAgICAgJ+a5luWFp+WNgCcsICfps7PlsbHluIInLCAn5aSn5a+u5Y2AJywgJ+ael+WckuWNgCcsICfps6Xmnb7ljYAnLCAn5aSn5qi55Y2AJywgJ+aXl+WxseWNgCcsICfnvo7mv4PljYAnLFxuICAgICAgICAgICAgJ+WFrem+nOWNgCcsICflhafploDljYAnLCAn5p2J5p6X5Y2AJywgJ+eUsuS7meWNgCcsICfmoYPmupDljYAnLCAn6YKj55Gq5aSP5Y2AJywgJ+iMguael+WNgCcsICfojITokKPljYAnXSxcblxuICAgICAgICAgICAgWyc4MDAnLCAnODAxJywgJzgwMicsICc4MDMnLCAnODA0JywgJzgwNScsICc4MDYnLCAnODA3JywgJzgxMScsICc4MTInLCAnODEzJyxcbiAgICAgICAgICAgICc4MTQnLCAnODE1JywgJzgxNycsICc4MTknLCAnODIwJywgJzgyMScsICc4MjInLCAnODIzJywgJzgyNCcsICc4MjUnLCAnODI2JywgJzgyNycsICc4MjgnLFxuICAgICAgICAgICAgJzgyOScsICc4MzAnLCAnODMxJywgJzgzMicsICc4MzMnLCAnODQwJywgJzg0MicsICc4NDMnLCAnODQ0JywgJzg0NScsICc4NDYnLFxuICAgICAgICAgICAgJzg0NycsICc4NDgnLCAnODQ5JywgJzg1MScsICc4NTInXVxuICAgICAgICBdLFxuICAgICAgICAvLyDmvo7muZbnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfppqzlhazluIInLCAn6KW/5ba86YSJJywgJ+acm+WuiemEiScsICfkuIPnvo7phIknLCAn55m95rKZ6YSJJywgJ+a5luilv+mEiSddLFxuXG4gICAgICAgICAgICBbJzg4MCcsICc4ODEnLCAnODgyJywgJzg4MycsICc4ODQnLCAnODg1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6YeR6ZaA57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6YeR5rKZ6Y6uJywgJ+mHkea5lumOricsICfph5Hlr6fphIknLCAn6YeR5Z+O6Y6uJywgJ+eDiOW2vOmEiScsICfng4/lnbXphIknXSxcblxuICAgICAgICAgICAgWyc4OTAnLCAnODkxJywgJzg5MicsICc4OTMnLCAnODk0JywgJzg5NiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWxj+adsee4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+Wxj+adseW4gicsICfkuInlnLDploDphIknLCAn6Zyn6Ie66YSJJywgJ+eRquWutumEiScsICfkuZ3lpoLphIknLCAn6YeM5riv6YSJJywgJ+mrmOaouemEiScsICfpub3ln5TphIknLFxuICAgICAgICAgICAgJ+mVt+ayu+mEiScsICfpup/mtJvphIknLCAn56u555Sw6YSJJywgJ+WFp+WflOmEiScsICfokKzkuLnphIknLCAn5r2u5bee6Y6uJywgJ+azsOatpumEiScsICfkvobnvqnphIknLFxuICAgICAgICAgICAgJ+iQrOW3kumEiScsICfltIHpoILphIknLCAn5paw5Z+k6YSJJywgJ+WNl+W3numEiScsICfmnpfpgorphIknLCAn5p2x5riv6Y6uJywgJ+eQieeQg+mEiScsICfkvbPlhqzphIknLFxuICAgICAgICAgICAgJ+aWsOWckumEiScsICfmnovlr67phIknLCAn5p6L5bGx6YSJJywgJ+aYpeaXpemEiScsICfnjYXlrZDphIknLCAn6LuK5Z+O6YSJJywgJ+eJoeS4uemEiScsICfmgYbmmKXpjq4nLFxuICAgICAgICAgICAgJ+a7v+W3numEiSddLFxuXG4gICAgICAgICAgICBbJzkwMCcsICc5MDEnLCAnOTAyJywgJzkwMycsICc5MDQnLCAnOTA1JywgJzkwNicsICc5MDcnLCAnOTA4JywgJzkwOScsICc5MTEnLFxuICAgICAgICAgICAgJzkxMicsICc5MTMnLCAnOTIwJywgJzkyMScsICc5MjInLCAnOTIzJywgJzkyNCcsICc5MjUnLCAnOTI2JywgJzkyNycsICc5MjgnLFxuICAgICAgICAgICAgJzkyOScsICc5MzEnLCAnOTMyJywgJzk0MCcsICc5NDEnLCAnOTQyJywgJzk0MycsICc5NDQnLCAnOTQ1JywgJzk0NicsICc5NDcnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoh7rmnbHnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfoh7rmnbHluIInLCAn57ag5bO26YSJJywgJ+iYreW2vOmEiScsICflu7blubPphIknLCAn5Y2R5Y2X6YSJJywgJ+m5v+mHjumEiScsICfpl5zlsbHpjq4nLCAn5rW356uv6YSJJyxcbiAgICAgICAgICAgICfmsaDkuIrphIknLCAn5p2x5rKz6YSJJywgJ+aIkOWKn+mOricsICfplbfmv7HphIknLCAn5aSq6bq76YeMJywgJ+mHkeWzsOmEiScsICflpKfmrabphIknLCAn6YGU5LuB6YSJJ10sXG5cbiAgICAgICAgICAgIFsnOTUwJywgJzk1MScsICc5NTInLCAnOTUzJywgJzk1NCcsICc5NTUnLCAnOTU2JywgJzk1NycsICc5NTgnLCAnOTU5JywgJzk2MScsXG4gICAgICAgICAgICAnOTYyJywgJzk2MycsICc5NjQnLCAnOTY1JywgJzk2NiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOiKseiTrue4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+iKseiTruW4gicsICfmlrDln47phIknLCAn56eA5p6X6YSJJywgJ+WQieWuiemEiScsICflo73osZDphIknLCAn6bOz5p6X6Y6uJywgJ+WFieW+qemEiScsICfosZDmv7HphIknLFxuICAgICAgICAgICAgJ+eRnuepl+mEiScsICfokKzmpq7phIknLCAn546J6YeM6Y6uJywgJ+WNk+a6qumEiScsICflr4zph4zphIknXSxcblxuICAgICAgICAgICAgWyc5NzAnLCAnOTcxJywgJzk3MicsICc5NzMnLCAnOTc0JywgJzk3NScsICc5NzYnLCAnOTc3JywgJzk3OCcsICc5NzknLCAnOTgxJyxcbiAgICAgICAgICAgICc5ODInLCAnOTgzJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6YCj5rGf57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Y2X56u/6YSJJywgJ+WMl+erv+mEiScsICfojpLlhYnphIknLCAn5p2x5byV6YSJJ10sXG5cbiAgICAgICAgICAgIFsnMjA5JywgJzIxMCcsICcyMTEnLCAnMjEyJ11cbiAgICAgICAgXVxuICAgIF1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVPcHRpb25zKCkge1xuICAvLyBDaGVjayBvcHRpb25zIHJlcXVpcmVkXG4gIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICBnZXRPcHRpb25zUmVxdWlyZWQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICB9XG4gIFxuICAvLyBFeHRlbmQgb3B0aW9uc1xuICByZXR1cm4gZ2V0T3B0aW9uc0V4dGVuZChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1syXSk7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNSZXF1aXJlZChvcHRpb25zQ3VzdG9tLCBvcHRpb25zUmVxdWlyZWQpIHtcbiAgdmFyIGVycm9yID0gJyc7XG4gIHZhciBsZW5ndGggPSBvcHRpb25zUmVxdWlyZWQubGVuZ3RoO1xuICBvcHRpb25zQ3VzdG9tID0gb3B0aW9uc0N1c3RvbSB8fCB7fTtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoICEgb3B0aW9uc0N1c3RvbS5oYXNPd25Qcm9wZXJ0eShvcHRpb25zUmVxdWlyZWRbbGVuZ3RoXSkpICAgICAgICAgIFxuICAgICAgZXJyb3IgKz0gb3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0gKyAnLCc7XG4gIH1cbiAgXG4gIGlmIChlcnJvcikgdGhyb3cgJ+e8uuWwkeWPg+aVuDogJyArIGVycm9yO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zRXh0ZW5kKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNEZWZhdWx0KSB7XG4gIGlmICggISBvcHRpb25zQ3VzdG9tKSB7XG4gICAgcmV0dXJuIG9wdGlvbnNEZWZhdWx0O1xuICB9XG4gIFxuICB2YXIgcHJvcGVydHk7XG4gIGZvciAocHJvcGVydHkgaW4gb3B0aW9uc0N1c3RvbSkge1xuICAgIG9wdGlvbnNEZWZhdWx0W3Byb3BlcnR5XSA9IG9wdGlvbnNDdXN0b21bcHJvcGVydHldO1xuICB9XG4gIFxuICByZXR1cm4gb3B0aW9uc0RlZmF1bHQ7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kdWxlIGltcG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgaGFuZGxlT3B0aW9ucyBmcm9tICcuL2hhbmRsZU9wdGlvbnMnO1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNb2R1bGUgZXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgVHdDaXR5U2VsZWN0b3I7IC8qIHVzZSByb2xsdXAgdG8gYnVpbGQgKi9cbi8vIG1vZHVsZS5leHBvcnRzID0gVHdDaXR5U2VsZWN0b3I7IC8qIHVzZSBicm93c2VyaWZ5IHRvIGJ1aWxkICovXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvbnN0cnVjdG9yXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gVHdDaXR5U2VsZWN0b3IoKSB7XG5cblx0dmFyIGVsUm9sZU5hbWUgPSAndHctY2l0eS1zZWxlY3Rvcic7XG5cblx0Ly8gLS0tIFNldHRpbmcgb3B0aW9ucyAtLS1cblx0dmFyIG9wdGlvbnNDdXN0b20gPSBhcmd1bWVudHNbMF07XG5cdHZhciBvcHRpb25zUmVxdWlyZWQgPSBhcmd1bWVudHMubGVuZ3RoID8gWydlbCddIDogbnVsbDsgLy8g6Kit572u5b+F6KaB5Y+D5pW477yM6Iul54Sh5bi25YWl5Lu75L2V5Y+D5pW45YmH6Kit5LiN6Kit572uXG5cdHZhciBvcHRpb25zRGVmYXVsdCA9IHtcblx0XHRlbDogbnVsbCxcblx0XHRlbENvdW50cnk6IG51bGwsXG5cdFx0ZWxEaXN0cmljdDogbnVsbCxcblx0XHRlbFppcGNvZGU6IG51bGwsXG5cdFx0c2VsZWN0ZWRDb3VudHJ5OiBudWxsLCAvLyB7Ym9vbGVhbn0g6aCQ6Kit6YG45pOH55qE57ij5biCXG5cdFx0c2VsZWN0ZWREaXN0cmljdDogbnVsbCwgLy97Ym9vbGVhbn0g6aCQ6Kit6YG45pOH55qE5Y2A5Z+fXG5cdFx0b25seTogbnVsbCwgLy8ge2FycmF5fSDpmZDliLbpoa/npLrlk6rkupvnuKPluIJcblx0XHRzaG93WmlwY29kZTogZmFsc2UsIC8vIHtib29sZWFufSDmmK/lkKbpoa/npLrpg7XpgZ7ljYDomZ/mrITkvY1cblx0XHRib290c3RyYXBTdHlsZTogZmFsc2UsXG5cdFx0Y291bnRyeUNsYXNzTmFtZTogJ2NvdW50cnknLFxuXHRcdGNvdW50cnlGaWxlZE5hbWU6ICdjb3VudHJ5Jyxcblx0XHRkaXN0cmljdENsYXNzTmFtZTogJ2Rpc3RyaWN0Jyxcblx0XHRkaXN0cmljdEZpZWxkTmFtZTogJ2Rpc3RyaWN0Jyxcblx0XHR6aXBjb2RlQ2xhc3NOYW1lOiAnemlwY29kZScsXG5cdFx0emlwY29kZUZpZWxkTmFtZTogJ3ppcGNvZGUnXG5cdH07XG5cblx0dGhpcy5vcHRpb25zID0gaGFuZGxlT3B0aW9ucyhvcHRpb25zQ3VzdG9tLCBvcHRpb25zUmVxdWlyZWQsIG9wdGlvbnNEZWZhdWx0KTtcblxuXHQvLyDmnInmjIflrpogZWxlbWVudCDnmoTliJ3lp4vljJZcblx0aWYgKHRoaXMub3B0aW9ucy5lbCkge1xuXHRcdHRoaXMuZWwgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbCk7XG5cdFx0dGhpcy5lbENvdW50cnkgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbENvdW50cnkpO1xuXHRcdHRoaXMuZWxEaXN0cmljdCA9IGdldEVsZW1lbnQodGhpcy5vcHRpb25zLmVsRGlzdHJpY3QpO1xuXHRcdHRoaXMuZWxaaXBjb2RlID0gZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuZWxaaXBjb2RlKTtcblxuXHRcdGluaXQuY2FsbCh0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8g54Sh5oyH5a6aIGVsZW1lbnQg55qE5Yid5aeL5YyW77yM5L2/55SoIHJvbGUtYXR0cmlidXRlIGVsZW1lbnQg5L2c54K66aCQ6KitIGVsZW1lbnRzXG5cdHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT0nKyBlbFJvbGVOYW1lICsnXScpO1xuXHRlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdHZhciBzZWxmID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7IC8vIGNsb25lIG9iamVjdO+8jOWboCBvYmplY3Qg54K65Y+D6ICDXG5cblx0XHQvLyDph43nva7oqK3lrppcblx0XHRzZWxmLmVsID0gZWw7XG5cdFx0c2VsZi5lbENvdW50cnkgPSBudWxsO1xuXHRcdHNlbGYuZWxEaXN0cmljdCA9IG51bGw7XG5cdFx0c2VsZi5lbFppcGNvZGUgPSBudWxsO1xuXG5cdFx0Ly8g6ZmQ5Yi26aGv56S65ZOq5Lqb57ij5biCXG5cdFx0c2VsZi5vcHRpb25zLm9ubHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seScpXG5cdFx0XHQ/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5JykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpIC8vIOWOu+mZpOepuueZveWtl+WFg++8jOi9iemZo+WIl1xuXHRcdFx0OiBudWxsO1xuXG5cdFx0Ly8g6aCQ6Kit6YG45pOH55qE57ij5biCXG5cdFx0c2VsZi5vcHRpb25zLnNlbGVjdGVkQ291bnRyeSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1jb3VudHJ5Jyk7XG5cblx0XHQvLyDpoJDoqK3pgbjmk4fnmoTljYDln59cblx0XHRzZWxmLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1kaXN0cmljdCcpO1xuXG5cdFx0Ly8g5piv5ZCm5L2/55SoIGJvb3RzdHJhcCDmqKPlvI9cblx0XHRzZWxmLm9wdGlvbnMuYm9vdHN0cmFwU3R5bGUgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJvb3RzdHJhcC1zdHlsZScpICE9IG51bGwpO1xuXG5cdFx0Ly8g5piv5ZCm6aGv56S66YO16YGe5Y2A6JmfXG5cdFx0c2VsZi5vcHRpb25zLnNob3daaXBjb2RlID0gKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zaG93LXppcGNvZGUnKSAhPSBudWxsKTtcblxuXHRcdGluaXQuY2FsbChzZWxmKTtcblx0fSwgdGhpcyk7XG5cblx0Ly8gcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdWJsaWMgTWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR3Q2l0eVNlbGVjdG9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBpbml0LmNhbGwodGhpcyk7XG4vLyB9O1xuXG5Ud0NpdHlTZWxlY3Rvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHJlc2V0U2VsZWN0b3JzLmNhbGwodGhpcyk7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQcml2YXRlIE1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBpbml0KCkge1xuXHRzZXRFbGVtZW50cy5jYWxsKHRoaXMpO1xuXHRsaXN0ZW5Db3VudHJ5Q2hhbmdlZC5jYWxsKHRoaXMpO1xuXHRsaXN0ZW5EaXN0cmljdENoYW5nZWQuY2FsbCh0aGlzKTtcblxuXHQvLyDmnInoqK3lrprpoJDoqK3pgbjlrprnmoTnuKPluIJcblx0aWYgKHRoaXMub3B0aW9ucy5zZWxlY3RlZENvdW50cnkpIHtcblx0XHRzZXRTZWxlY3RlZEl0ZW0uY2FsbCh0aGlzKTtcblx0fVxuXG5cdC8vIGJvb3RzdHJhcCDmqKPlvI/lpZflhaVcblx0aWYgKHRoaXMub3B0aW9ucy5ib290c3RyYXBTdHlsZSkge1xuXHRcdHNldEJvb3RzdHJhcFN0eWxlLmNhbGwodGhpcyk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudChlbCkge1xuXHRyZXR1cm4gZWwgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnRzKCkge1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0Ly8g57ij5biC6YG45ZauXG5cdGlmICggISB0aGlzLmVsQ291bnRyeSkge1xuXHRcdHZhciBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cdFx0dGhpcy5lbENvdW50cnkgPSBjb3VudHJ5O1xuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGNvdW50cnkpO1xuXHR9XG5cblx0Ly8g57ij5biC6YG45Zau5bGs5oCnXG5cdHRoaXMuZWxDb3VudHJ5LmlubmVySFRNTCA9IGdldENvdW50cnlPcHRpb25zKHRoaXMub3B0aW9ucy5vbmx5KTtcblx0dGhpcy5lbENvdW50cnkuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5jb3VudHJ5Q2xhc3NOYW1lKTtcblxuXHQvLyDljYDln5/pgbjllq5cblx0aWYgKCAhIHRoaXMuZWxEaXN0cmljdCkge1xuXHRcdHZhciBkaXN0cmljdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdHRoaXMuZWxEaXN0cmljdCA9IGRpc3RyaWN0O1xuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGRpc3RyaWN0KTtcblx0fVxuXG5cdC8vIOWNgOWfn+mBuOWWruWxrOaAp1xuXHR0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zKCk7XG5cdHRoaXMuZWxEaXN0cmljdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmRpc3RyaWN0Q2xhc3NOYW1lKTtcblx0dGhpcy5lbERpc3RyaWN0Lm5hbWUgPSB0aGlzLm9wdGlvbnMuZGlzdHJpY3RGaWVsZE5hbWU7XG5cblx0Ly8g6YO16YGe5Y2A6JmfXG5cdGlmICggISB0aGlzLmVsWmlwY29kZSkge1xuXHRcdHZhciB6aXBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHR0aGlzLmVsWmlwY29kZSA9IHppcGNvZGU7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoemlwY29kZSk7XG5cdH1cblxuXHQvLyDpg7XpgZ7ljYDomZ/lsazmgKfoqK3lrppcblx0dGhpcy5lbFppcGNvZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy56aXBjb2RlQ2xhc3NOYW1lKTtcblx0dGhpcy5lbFppcGNvZGUubmFtZSA9IHRoaXMub3B0aW9ucy56aXBjb2RlRmllbGROYW1lO1xuXHR0aGlzLmVsWmlwY29kZS50eXBlID0gJ3RleHQnO1xuXHR0aGlzLmVsWmlwY29kZS5yZWFkT25seSA9IHRydWU7XG5cdHRoaXMuZWxaaXBjb2RlLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXHR0aGlzLmVsWmlwY29kZS5wbGFjZWhvbGRlciA9ICfpg7XpgZ7ljYDomZ8nO1xuXHR0aGlzLmVsWmlwY29kZS5zdHlsZS53aWR0aCA9ICc2ZW0nO1xuXHR0aGlzLmVsWmlwY29kZS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcHRpb25zLnNob3daaXBjb2RlIHx8ICdub25lJztcblxuXHQvLyBlbGVtZW50IOeJh+auteWhnuWFpSBlbFxuXHR0aGlzLmVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRyeU9wdGlvbnMob25seSkge1xuXHR2YXIgb3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+6YG45pOH57ij5biCPC9vcHRpb24+JztcblxuXHRmb3IgKHZhciBpID0gMCwgaiA9IGRhdGEuY291bnRyeS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHQvLyDoi6XmnInoqK3lrprpmZDliLbpoa/npLrnmoTnuKPluILvvIzkuJToqbLpoIXnm67kuI3lnKjoh6roqILnuKPluILkuK1cblx0XHRpZiAob25seSAmJiBBcnJheS5pc0FycmF5KG9ubHkpICYmIG9ubHkuaW5kZXhPZihkYXRhLmNvdW50cnlbaV0pID09PSAtMSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi6Ie65YyX5biCXCIgZGF0YS1pbmRleD1cIjBcIj7oh7rljJfluII8L29wdGlvbj5cblx0XHRvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmNvdW50cnlbaV19XCIgZGF0YS1pbmRleD1cIiR7aX1cIj4ke2RhdGEuY291bnRyeVtpXX08L29wdGlvbj5gO1xuXHR9XG5cblx0cmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCkge1xuXHRpZiAoICEgaW5kZXgpIHtcblx0XHRyZXR1cm4gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD4tLS08L29wdGlvbj4nO1xuXHR9XG5cblx0dmFyIG9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPumBuOaTh+WNgOWfnzwvb3B0aW9uPic7XG5cblx0Zm9yKHZhciBpID0gMCwgaiA9IGRhdGEuZGlzdHJpY3RbaW5kZXhdWzBdLmxlbmd0aCAtIDE7IGkgPD0gajsgaSsrKSB7XG5cdFx0Ly8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi5Lit5q2j5Y2AXCIgZGF0YS16aXBjb2RlPVwiMTAwXCI+5Lit5q2j5Y2APC9vcHRpb24+XG5cdFx0b3B0aW9ucyArPSBgXG5cdFx0PG9wdGlvbiB2YWx1ZT1cIiR7ZGF0YS5kaXN0cmljdFtpbmRleF1bMF1baV19XCIgZGF0YS16aXBjb2RlPVwiJHtkYXRhLmRpc3RyaWN0W2luZGV4XVsxXVtpXX1cIj5cblx0XHQke2RhdGEuZGlzdHJpY3RbaW5kZXhdWzBdW2ldfVxuXHRcdDwvb3B0aW9uPlxuXHRcdGA7XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gbGlzdGVuQ291bnRyeUNoYW5nZWQoKSB7XG5cdHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGluZGV4ID0gdGhpcy5lbENvdW50cnkucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKS5kYXRhc2V0LmluZGV4O1xuXHRcdHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoaW5kZXgpO1xuXHRcdHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gJyc7XG5cdH0uYmluZCh0aGlzKTtcblxuXHR0aGlzLmVsQ291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuRGlzdHJpY3RDaGFuZ2VkKCkge1xuXHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB6aXBjb2RlID0gdGhpcy5lbERpc3RyaWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJykuZGF0YXNldC56aXBjb2RlO1xuXHRcdHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gemlwY29kZTtcblx0fS5iaW5kKHRoaXMpO1xuXG5cdHRoaXMuZWxEaXN0cmljdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRJdGVtKCkge1xuXHR2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0ZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcblxuXHR0aGlzLmVsQ291bnRyeS52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZENvdW50cnk7XG5cdHRoaXMuZWxDb3VudHJ5LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG5cdGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCkge1xuXHRcdHRoaXMuZWxEaXN0cmljdC52YWx1ZSA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZERpc3RyaWN0O1xuXHRcdHRoaXMuZWxEaXN0cmljdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXNldFNlbGVjdG9ycygpIHtcblx0dGhpcy5lbENvdW50cnkuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHRoaXMuZWxEaXN0cmljdC5pbm5lckhUTUwgPSBnZXREaXN0cmljdE9wdGlvbnMoKTtcblx0dGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcblxuXHRyZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2V0Qm9vdHN0cmFwU3R5bGUoKSB7XG5cdHZhciBmaWVsZENsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICAgIHZhciB3cmFwcGVyQ2xhc3NOYW1lID0gJ2Zvcm0tZ3JvdXAnO1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0dGhpcy5lbENvdW50cnkuc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpZWxkQ2xhc3NOYW1lKTtcblx0dGhpcy5lbERpc3RyaWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWVsZENsYXNzTmFtZSk7XG5cdHRoaXMuZWxaaXBjb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWVsZENsYXNzTmFtZSk7XG5cbiAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIHdyYXBwZXJDbGFzc05hbWUpO1xuXG5cdHZhciBlbENvdW50cnkgPSB3cmFwcGVyLmNsb25lTm9kZSgpO1xuXHRlbENvdW50cnkuYXBwZW5kQ2hpbGQodGhpcy5lbENvdW50cnkpO1xuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbENvdW50cnkpO1xuXG5cdHZhciBlbERpc3RyaWN0ID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcblx0ZWxEaXN0cmljdC5hcHBlbmRDaGlsZCh0aGlzLmVsRGlzdHJpY3QpO1xuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbERpc3RyaWN0KTtcblxuXHR2YXIgZWxaaXBjb2RlID0gd3JhcHBlci5jbG9uZU5vZGUoKTtcblx0ZWxaaXBjb2RlLmFwcGVuZENoaWxkKHRoaXMuZWxaaXBjb2RlKTtcblx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxaaXBjb2RlKTtcblxuXHR0aGlzLmVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbiJdLCJuYW1lcyI6WyJkYXRhIiwiVHdDaXR5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQUlBLFNBQU87O2FBRUUsQ0FDTCxLQURLLEVBQ0UsS0FERixFQUNTLEtBRFQsRUFDZ0IsS0FEaEIsRUFDdUIsS0FEdkIsRUFDOEIsS0FEOUIsRUFDcUMsS0FEckMsRUFDNEMsS0FENUMsRUFFTCxLQUZLLEVBRUUsS0FGRixFQUVTLEtB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