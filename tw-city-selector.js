(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TwCitySelector = factory());
}(this, function () { 'use strict';

  var data = {
    country: ['台北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '嘉義縣', '雲林縣', '台南市', '高雄市', '澎湖縣', '屏東縣', '台東縣', '花蓮縣', '金門縣', '連江縣', '南海諸島', '釣魚台列嶼'],

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
    // 新竹縣市
    [['新竹市', '竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'], ['300', '302', '303', '304', '305', '306', '307', '308', '310', '311', '312', '313', '314', '315']],
    // 苗栗縣
    [['竹南鎮', '頭份鎮', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮', '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉', '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'], ['350', '351', '352', '353', '354', '356', '357', '358', '360', '361', '362', '363', '364', '365', '366', '367', '368', '369']],
    // 台中市
    [['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'], ['400', '401', '402', '403', '404', '406', '407', '408', '411', '412', '413', '414', '420', '421', '422', '423', '424', '426', '427', '428', '429', '432', '433', '434', '435', '436', '437', '438', '439']],
    // 彰化縣
    [['彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '鹿港鎮', '福興鄉', '線西鄉', '和美鎮', '伸港鄉', '員林鎮', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉', '埔鹽鄉', '田中鎮', '北斗鎮', '田尾鄉', '埤頭鄉', '溪州鄉', '竹塘鄉', '二林鎮', '大城鄉', '芳苑鄉', '二水鄉'], ['500', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '520', '521', '522', '523', '524', '525', '526', '527', '528', '530']],
    // 南投縣
    [['南投市', '中寮鄉', '草屯鎮', '國姓鄉', '埔里鎮', '仁愛鄉', '名間鄉', '集集鎮', '水里鄉', '魚池鄉', '信義鄉', '竹山鎮', '鹿谷鄉'], ['540', '541', '542', '544', '545', '546', '551', '552', '553', '555', '556', '557', '558']],
    // 嘉義縣市
    [['嘉義市', '番路鄉', '梅山鄉', '竹崎鄉', '阿里山', '中埔鄉', '大埔鄉', '水上鄉', '鹿草鄉', '太保市', '朴子市', '東石鄉', '六腳鄉', '新港鄉', '民雄鄉', '大林鎮', '溪口鄉', '義竹鄉', '布袋鎮'], ['600', '602', '603', '604', '605', '606', '607', '608', '611', '612', '613', '614', '615', '616', '621', '622', '623', '624', '625']],
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

  /* use rollup to build */

  // --------------------
  // Constructor
  // --------------------
  function TwCitySelector() {
    // --- Setting options ---
    var optionsCustom = arguments[0];
    var optionsRequired = arguments.length ? ['el'] : null; // 若無參數則不設必要參數
    var optionsDefault = {
      el: null,
      elCountry: null,
      elDistrict: null,
      elZipcode: null,
      countryClassName: 'country',
      countryFiledName: 'country',
      districtClassName: 'district',
      districtFieldName: 'district',
      zipcodeClassName: 'zipcode',
      zipcodeFieldName: 'zipcode',
      selectedCountry: null, // {boolean} 預設選擇的縣市
      selectedDistrict: null, //{boolean} 預設選擇的區域
      only: null, // {array} 限制顯示哪些縣市
      showZipcode: false // {boolean} 是否顯示郵遞區號欄位
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
      return true;
    }

    // 無指定 el，使用符合的 data-role DOM 作為 el 
    var els = document.querySelectorAll('[data-role="tw-city-selector"]');
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

      init.call(self);
    }, this);

    return true;
  };

  // --------------------
  // Public Methods
  // --------------------
  TwCitySelector.prototype.reset = function () {
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
    this.elZipcode.autocomplete = "off";
    this.elZipcode.placeholder = "郵遞區號";
    this.elZipcode.style.width = '6em';
    this.elZipcode.style.display = this.options.showZipcode || 'none';
  }

  function getCountryOptions(only) {
    var options = '<option value="">選擇縣市</option>';

    for (var i = 0, j = data.country.length; i < j; i++) {
      // 若有設定限制顯示的縣市，且該項目不在自訂縣市中
      if (only && Array.isArray(only) && only.indexOf(data.country[i]) === -1) {
        continue;
      }

      // format: <option value="台北市" data-index="0">台北市</option>
      options += '<option value="' + data.country[i] + '" data-index="' + i + '">' + data.country[i] + '</option>';
    }

    return options;
  }

  function getDistrictOptions(index) {
    if (!index) {
      return '<option value="" selected>---</option>';
    }

    var options = '<option value="" selected>選擇區域</option>';

    for (var i = 0, j = data.district[index][0].length - 1; i <= j; i++) {
      // format: <option value="中正區" data-zipcode="100">中正區</option>
      options += '\n      <option value="' + data.district[index][0][i] + '" data-zipcode="' + data.district[index][1][i] + '">\n        ' + data.district[index][0][i] + '\n      </option>\n    ';
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
    return true;
  }

  return TwCitySelector;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9ESy1QbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCIvVXNlcnMvZGVubnkvRHJvcGJveC8wMS3ntrLnq5nlsIjmoYgvREstUGx1Z2lucy90dy1jaXR5LXNlbGVjdG9yL3NyYy9oYW5kbGVPcHRpb25zLmpzIiwiL1VzZXJzL2Rlbm55L0Ryb3Bib3gvMDEt57ay56uZ5bCI5qGIL0RLLVBsdWdpbnMvdHctY2l0eS1zZWxlY3Rvci9zcmMvdHctY2l0eS1zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBkYXRhO1xuXG52YXIgZGF0YSA9IHtcbiAgY291bnRyeTogW1xuICAgICflj7DljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOeruee4oycsICfoi5fmoJfnuKMnLCAn5Y+w5Lit5biCJyxcbiAgICAn5b2w5YyW57ijJywgJ+WNl+aKlee4oycsICflmInnvqnnuKMnLCAn6Zuy5p6X57ijJywgJ+WPsOWNl+W4gicsICfpq5jpm4TluIInLCAn5r6O5rmW57ijJyxcbiAgICAn5bGP5p2x57ijJywgJ+WPsOadsee4oycsICfoirHok67nuKMnLCAn6YeR6ZaA57ijJywgJ+mAo+axn+e4oycsICfljZfmtbfoq7jls7YnLCAn6Yej6a2a5Y+w5YiX5ba8J1xuICBdLFxuXG4gIGRpc3RyaWN0OiBbXG4gICAgLy8g5Y+w5YyX5biCXG4gICAgW1xuICAgICAgWyfkuK3mraPljYAnLCAn5aSn5ZCM5Y2AJywgJ+S4reWxseWNgCcsICfmnb7lsbHljYAnLCAn5aSn5a6J5Y2AJywgJ+iQrOiPr+WNgCcsICfkv6HnvqnljYAnLCAn5aOr5p6X5Y2AJyxcbiAgICAgICAgJ+WMl+aKleWNgCcsICflhafmuZbljYAnLCAn5Y2X5riv5Y2AJywgJ+aWh+WxseWNgCdcbiAgICAgIF0sXG4gICAgICBbJzEwMCcsICcxMDMnLCAnMTA0JywgJzEwNScsICcxMDYnLCAnMTA4JywgJzExMCcsICcxMTEnLCAnMTEyJywgJzExNCcsICcxMTUnLCAnMTE2J11cbiAgICBdLFxuICAgIC8vIOWfuumahuW4glxuICAgIFtcbiAgICAgIFsn5LuB5oSb5Y2AJywgJ+S/oee+qeWNgCcsICfkuK3mraPljYAnLCAn5Lit5bGx5Y2AJywgJ+WuieaoguWNgCcsICfmmpbmmpbljYAnLCAn5LiD5aC15Y2AJ10sXG4gICAgICBbJzIwMCcsICcyMDEnLCAnMjAyJywgJzIwMycsICcyMDQnLCAnMjA1JywgJzIwNiddXG4gICAgXSxcbiAgICAvLyDmlrDljJfluIJcbiAgICBbXG4gICAgICBbJ+iQrOmHjOWNgCcsICfph5HlsbHljYAnLCAn5p2/5qmL5Y2AJywgJ+axkOatouWNgCcsICfmt7HlnZHljYAnLCAn55+z56KH5Y2AJywgJ+eRnuiKs+WNgCcsICflubPmuqrljYAnLFxuICAgICAgICAn6ZuZ5rqq5Y2AJywgJ+iyouWvruWNgCcsICfmlrDlupfljYAnLCAn5Z2q5p6X5Y2AJywgJ+eDj+S+huWNgCcsICfmsLjlkozljYAnLCAn5Lit5ZKM5Y2AJywgJ+Wcn+WfjuWNgCcsXG4gICAgICAgICfkuInls73pjq4nLCAn5qi55p6X5Y2AJywgJ+m2r+atjOmOricsICfkuInph43ljYAnLCAn5paw6I6K5Y2AJywgJ+azsOWxseWNgCcsICfmnpflj6PljYAnLCAn6JiG5rSy5Y2AJyxcbiAgICAgICAgJ+S6lOiCoeWNgCcsICflhavph4zljYAnLCAn5reh5rC06Y6uJywgJ+S4ieiKneWNgCcsICfnn7PploDljYAnXG4gICAgICBdLFxuICAgICAgWycyMDcnLCAnMjA4JywgJzIyMCcsICcyMjEnLCAnMjIyJywgJzIyMycsICcyMjQnLCAnMjI2JywgJzIyNycsICcyMjgnLFxuICAgICAgICAnMjMxJywgJzIzMicsICcyMzMnLCAnMjM0JywgJzIzNScsICcyMzYnLCAnMjM3JywgJzIzOCcsICcyMzknLCAnMjQxJyxcbiAgICAgICAgJzI0MicsICcyNDMnLCAnMjQ0JywgJzI0NycsICcyNDgnLCAnMjQ5JywgJzI1MScsICcyNTInLCAnMjUzJ1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5a6c6Jit57ijXG4gICAgW1xuICAgICAgWyflrpzomK3luIInLCAn6aCt5Z+O6Y6uJywgJ+ekgea6qumEiScsICflo6/lnI3phIknLCAn5ZOh5bGx6YSJJywgJ+e+headsemOricsICfkuInmmJ/phIknLCAn5aSn5ZCM6YSJJyxcbiAgICAgICAgJ+S6lOe1kOmEiScsICflhqzlsbHphIknLCAn6JiH5r6z6Y6uJywgJ+WNl+a+s+mEiSdcbiAgICAgIF0sXG4gICAgICBbJzI2MCcsICcyNjEnLCAnMjYyJywgJzI2MycsICcyNjQnLCAnMjY1JywgJzI2NicsICcyNjcnLCAnMjY4JywgJzI2OScsXG4gICAgICAgICcyNzAnLCAnMjcyJ1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5qGD5ZyS5biCXG4gICAgW1xuICAgICAgWyfkuK3lo6LljYAnLCAn5bmz6Y6u5Y2AJywgJ+m+jea9reWNgCcsICfmpYrmooXljYAnLCAn5paw5bGL5Y2AJywgJ+ingOmfs+WNgCcsICfmoYPlnJLljYAnLCAn6b6c5bGx5Y2AJyxcbiAgICAgICAgJ+WFq+W+t+WNgCcsICflpKfmuqrljYAnLCAn5b6p6IiI5Y2AJywgJ+Wkp+WckuWNgCcsICfomIbnq7nljYAnXG4gICAgICBdLFxuICAgICAgWyczMjAnLCAnMzI0JywgJzMyNScsICczMjYnLCAnMzI3JywgJzMyOCcsICczMzAnLCAnMzMzJywgJzMzNCcsICczMzUnLFxuICAgICAgICAnMzM2JywgJzMzNycsICczMzgnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDmlrDnq7nnuKPluIJcbiAgICBbXG4gICAgICBbJ+aWsOerueW4gicsICfnq7nljJfluIInLCAn5rmW5Y+j6YSJJywgJ+aWsOixkOmEiScsICfmlrDln5Tpjq4nLCAn6Zec6KW/6Y6uJywgJ+iKjuael+mEiScsICflr7blsbHphIknLFxuICAgICAgICAn56u55p2x6Y6uJywgJ+S6lOWzsOmEiScsICfmqavlsbHphIknLCAn5bCW55+z6YSJJywgJ+WMl+WflOmEiScsICfls6jnnInphIknXG4gICAgICBdLFxuICAgICAgWyczMDAnLCAnMzAyJywgJzMwMycsICczMDQnLCAnMzA1JywgJzMwNicsICczMDcnLCAnMzA4JywgJzMxMCcsICczMTEnLFxuICAgICAgICAnMzEyJywgJzMxMycsICczMTQnLCAnMzE1J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g6IuX5qCX57ijXG4gICAgW1xuICAgICAgWyfnq7nljZfpjq4nLCAn6aCt5Lu96Y6uJywgJ+S4ieeBo+mEiScsICfljZfluoTphIknLCAn542F5r2t6YSJJywgJ+W+jOm+jemOricsICfpgJrpnITpjq4nLCAn6IuR6KOh6Y6uJyxcbiAgICAgICAgJ+iLl+agl+W4gicsICfpgKDmqYvphIknLCAn6aCt5bGL6YSJJywgJ+WFrOmkqOmEiScsICflpKfmuZbphIknLCAn5rOw5a6J6YSJJyxcbiAgICAgICAgJ+mKhemRvOmEiScsICfkuInnvqnphIknLCAn6KW/5rmW6YSJJywgJ+WNk+iYremOridcbiAgICAgIF0sXG4gICAgICBbJzM1MCcsICczNTEnLCAnMzUyJywgJzM1MycsICczNTQnLCAnMzU2JywgJzM1NycsICczNTgnLCAnMzYwJywgJzM2MScsXG4gICAgICAgICczNjInLCAnMzYzJywgJzM2NCcsICczNjUnLCAnMzY2JywgJzM2NycsICczNjgnLCAnMzY5J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5Y+w5Lit5biCXG4gICAgW1xuICAgICAgWyfkuK3ljYAnLCAn5p2x5Y2AJywgJ+WNl+WNgCcsICfopb/ljYAnLCAn5YyX5Y2AJywgJ+WMl+Wxr+WNgCcsICfopb/lsa/ljYAnLCAn5Y2X5bGv5Y2AJywgJ+WkquW5s+WNgCcsXG4gICAgICAgICflpKfph4zljYAnLCAn6Zyn5bOw5Y2AJywgJ+eDj+aXpeWNgCcsICfosZDljp/ljYAnLCAn5ZCO6YeM5Y2AJywgJ+efs+WyoeWNgCcsICfmnbHli6LljYAnLCAn5ZKM5bmz5Y2AJyxcbiAgICAgICAgJ+aWsOekvuWNgCcsICfmva3lrZDljYAnLCAn5aSn6ZuF5Y2AJywgJ+elnuWyoeWNgCcsICflpKfogprljYAnLCAn5rKZ6bm/5Y2AJywgJ+m+jeS6leWNgCcsICfmoqfmo7LljYAnLFxuICAgICAgICAn5riF5rC05Y2AJywgJ+Wkp+eUsuWNgCcsICflpJbln5TljYAnLCAn5aSn5a6J5Y2AJ1xuICAgICAgXSxcbiAgICAgIFsnNDAwJywgJzQwMScsICc0MDInLCAnNDAzJywgJzQwNCcsICc0MDYnLCAnNDA3JywgJzQwOCcsICc0MTEnLCAnNDEyJyxcbiAgICAgICAgJzQxMycsICc0MTQnLCAnNDIwJywgJzQyMScsICc0MjInLCAnNDIzJywgJzQyNCcsICc0MjYnLCAnNDI3JywgJzQyOCcsXG4gICAgICAgICc0MjknLCAnNDMyJywgJzQzMycsICc0MzQnLCAnNDM1JywgJzQzNicsICc0MzcnLCAnNDM4JywgJzQzOSdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOW9sOWMlue4o1xuICAgIFtcbiAgICAgIFsn5b2w5YyW5biCJywgJ+iKrOWckumEiScsICfoirHlo4fphIknLCAn56eA5rC06YSJJywgJ+m5v+a4r+mOricsICfnpo/oiIjphIknLCAn57ea6KW/6YSJJywgJ+WSjOe+jumOricsXG4gICAgICAgICfkvLjmuK/phIknLCAn5ZOh5p6X6Y6uJywgJ+ekvumgremEiScsICfmsLjpnZbphIknLCAn5Z+U5b+D6YSJJywgJ+a6qua5lumOricsICflpKfmnZHphIknLCAn5Z+U6bm96YSJJyxcbiAgICAgICAgJ+eUsOS4remOricsICfljJfmlpfpjq4nLCAn55Sw5bC+6YSJJywgJ+WfpOmgremEiScsICfmuqrlt57phIknLCAn56u55aGY6YSJJywgJ+S6jOael+mOricsICflpKfln47phIknLFxuICAgICAgICAn6Iqz6IuR6YSJJywgJ+S6jOawtOmEiSdcbiAgICAgIF0sXG4gICAgICBbJzUwMCcsICc1MDInLCAnNTAzJywgJzUwNCcsICc1MDUnLCAnNTA2JywgJzUwNycsICc1MDgnLCAnNTA5JywgJzUxMCcsXG4gICAgICAgICc1MTEnLCAnNTEyJywgJzUxMycsICc1MTQnLCAnNTE1JywgJzUxNicsICc1MjAnLCAnNTIxJywgJzUyMicsICc1MjMnLFxuICAgICAgICAnNTI0JywgJzUyNScsICc1MjYnLCAnNTI3JywgJzUyOCcsICc1MzAnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDljZfmipXnuKNcbiAgICBbXG4gICAgICBbJ+WNl+aKleW4gicsICfkuK3lr67phIknLCAn6I2J5bGv6Y6uJywgJ+Wci+Wnk+mEiScsICfln5Tph4zpjq4nLCAn5LuB5oSb6YSJJywgJ+WQjemWk+mEiScsICfpm4bpm4bpjq4nLFxuICAgICAgICAn5rC06YeM6YSJJywgJ+mtmuaxoOmEiScsICfkv6HnvqnphIknLCAn56u55bGx6Y6uJywgJ+m5v+iwt+mEiSdcbiAgICAgIF0sXG4gICAgICBbJzU0MCcsICc1NDEnLCAnNTQyJywgJzU0NCcsICc1NDUnLCAnNTQ2JywgJzU1MScsICc1NTInLCAnNTUzJywgJzU1NScsXG4gICAgICAgICc1NTYnLCAnNTU3JywgJzU1OCdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOWYiee+qee4o+W4glxuICAgIFtcbiAgICAgIFsn5ZiJ576p5biCJywgJ+eVqui3r+mEiScsICfmooXlsbHphIknLCAn56u55bSO6YSJJywgJ+mYv+mHjOWxsScsICfkuK3ln5TphIknLCAn5aSn5Z+U6YSJJywgJ+awtOS4iumEiScsXG4gICAgICAgICfpub/ojYnphIknLCAn5aSq5L+d5biCJywgJ+actOWtkOW4gicsICfmnbHnn7PphIknLCAn5YWt6IWz6YSJJywgJ+aWsOa4r+mEiScsICfmsJHpm4TphIknLCAn5aSn5p6X6Y6uJyxcbiAgICAgICAgJ+a6quWPo+mEiScsICfnvqnnq7nphIknLCAn5biD6KKL6Y6uJ1xuICAgICAgXSxcbiAgICAgIFsnNjAwJywgJzYwMicsICc2MDMnLCAnNjA0JywgJzYwNScsICc2MDYnLCAnNjA3JywgJzYwOCcsICc2MTEnLCAnNjEyJyxcbiAgICAgICAgJzYxMycsICc2MTQnLCAnNjE1JywgJzYxNicsICc2MjEnLCAnNjIyJywgJzYyMycsICc2MjQnLCAnNjI1J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g6Zuy5p6X57ijXG4gICAgW1xuICAgICAgWyfmlpfljZfpjq4nLCAn5aSn5Z+k6YSJJywgJ+iZjuWwvumOricsICflnJ/luqvpjq4nLCAn6KSS5b+g6YSJJywgJ+adseWLoumEiScsICflj7Dopb/phIknLCAn5bSZ6IOM6YSJJyxcbiAgICAgICAgJ+m6peWvrumEiScsICfmlpflha3luIInLCAn5p6X5YWn6YSJJywgJ+WPpOWdkemEiScsICfojr/moZDphIknLCAn6KW/6J666Y6uJywgJ+S6jOW0memEiScsICfljJfmuK/pjq4nLFxuICAgICAgICAn5rC05p6X6YSJJywgJ+WPo+a5lumEiScsICflm5vmuZbphIknLCAn5YWD6ZW36YSJJ1xuICAgICAgXSxcbiAgICAgIFsnNjMwJywgJzYzMScsICc2MzInLCAnNjMzJywgJzYzNCcsICc2MzUnLCAnNjM2JywgJzYzNycsICc2MzgnLCAnNjQwJywgJzY0MycsXG4gICAgICAgICc2NDYnLCAnNjQ3JywgJzY0OCcsICc2NDknLCAnNjUxJywgJzY1MicsICc2NTMnLCAnNjU0JywgJzY1NSdcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOWPsOWNl+W4glxuICAgIFtcbiAgICAgIFsn5Lit6KW/5Y2AJywgJ+adseWNgCcsICfljZfljYAnLCAn5YyX5Y2AJywgJ+WuieW5s+WNgCcsICflronljZfljYAnLCAn5rC45bq35Y2AJywgJ+atuOS7geWNgCcsICfmlrDljJbljYAnLFxuICAgICAgICAn5bem6Y6u5Y2AJywgJ+eOieS6leWNgCcsICfmpaDopb/ljYAnLCAn5Y2X5YyW5Y2AJywgJ+S7geW+t+WNgCcsICfpl5zlu5/ljYAnLCAn6b6N5bSO5Y2AJywgJ+WumOeUsOWNgCcsXG4gICAgICAgICfpurvosYbljYAnLCAn5L2z6YeM5Y2AJywgJ+ilv+a4r+WNgCcsICfkuIPogqHljYAnLCAn5bCH6LuN5Y2AJywgJ+WtuOeUsuWNgCcsICfljJfploDljYAnLCAn5paw54ef5Y2AJyxcbiAgICAgICAgJ+W+jOWjgeWNgCcsICfnmb3msrPljYAnLCAn5p2x5bGx5Y2AJywgJ+WFreeUsuWNgCcsICfkuIvnh5/ljYAnLCAn5p+z54ef5Y2AJywgJ+m5veawtOWNgCcsICflloTljJbljYAnLFxuICAgICAgICAn5aSn5YWn5Y2AJywgJ+WxseS4iuWNgCcsICfmlrDluILljYAnLCAn5a6J5a6a5Y2AJ1xuICAgICAgXSxcbiAgICAgIFsnNzAwJywgJzcwMScsICc3MDInLCAnNzA0JywgJzcwOCcsICc3MDknLCAnNzEwJywgJzcxMScsICc3MTInLCAnNzEzJywgJzcxNCcsXG4gICAgICAgICc3MTUnLCAnNzE2JywgJzcxNycsICc3MTgnLCAnNzE5JywgJzcyMCcsICc3MjEnLCAnNzIyJywgJzcyMycsICc3MjQnLCAnNzI1JyxcbiAgICAgICAgJzcyNicsICc3MjcnLCAnNzMwJywgJzczMScsICc3MzInLCAnNzMzJywgJzczNCcsICc3MzUnLCAnNzM2JywgJzczNycsICc3NDEnLFxuICAgICAgICAnNzQyJywgJzc0MycsICc3NDQnLCAnNzQ1J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g6auY6ZuE5biCXG4gICAgW1xuICAgICAgWyfmlrDoiIjljYAnLCAn5YmN6YeR5Y2AJywgJ+iLk+mbheWNgCcsICfpub3ln5XljYAnLCAn6byT5bGx5Y2AJywgJ+aXl+a0peWNgCcsICfliY3pjq7ljYAnLCAn5LiJ5rCR5Y2AJyxcbiAgICAgICAgJ+aloOaik+WNgCcsICflsI/muK/ljYAnLCAn5bem54ef5Y2AJywgJ+S7geatpuWNgCcsICflpKfnpL7ljYAnLCAn5bKh5bGx5Y2AJywgJ+i3r+erueWNgCcsICfpmL/ok67ljYAnLFxuICAgICAgICAn55Sw5a+u5Y2AJywgJ+eHleW3ouWNgCcsICfmqYvpoK3ljYAnLCAn5qKT5a6Y5Y2AJywgJ+W9jOmZgOWNgCcsICfmsLjlronljYAnLCAn5rmW5YWn5Y2AJywgJ+mzs+WxseW4gicsXG4gICAgICAgICflpKflr67ljYAnLCAn5p6X5ZyS5Y2AJywgJ+mzpeadvuWNgCcsICflpKfmqLnljYAnLCAn5peX5bGx5Y2AJywgJ+e+jua/g+WNgCcsICflha3pvpzljYAnLCAn5YWn6ZaA5Y2AJyxcbiAgICAgICAgJ+adieael+WNgCcsICfnlLLku5nljYAnLCAn5qGD5rqQ5Y2AJywgJ+mCo+eRquWkj+WNgCcsICfojILmnpfljYAnLCAn6IyE6JCj5Y2AJ1xuICAgICAgXSxcbiAgICAgIFsnODAwJywgJzgwMScsICc4MDInLCAnODAzJywgJzgwNCcsICc4MDUnLCAnODA2JywgJzgwNycsICc4MTEnLCAnODEyJywgJzgxMycsXG4gICAgICAgICc4MTQnLCAnODE1JywgJzgyMCcsICc4MjEnLCAnODIyJywgJzgyMycsICc4MjQnLCAnODI1JywgJzgyNicsICc4MjcnLCAnODI4JyxcbiAgICAgICAgJzgyOScsICc4MzAnLCAnODMxJywgJzgzMicsICc4MzMnLCAnODQwJywgJzg0MicsICc4NDMnLCAnODQ0JywgJzg0NScsICc4NDYnLFxuICAgICAgICAnODQ3JywgJzg0OCcsICc4NDknLCAnODUxJywgJzg1MidcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOa+jua5lue4o1xuICAgIFtcbiAgICAgIFsn6aas5YWs5biCJywgJ+ilv+W2vOmEiScsICfmnJvlronphIknLCAn5LiD576O6YSJJywgJ+eZveaymemEiScsICfmuZbopb/phIknXSxcbiAgICAgIFsnODgwJywgJzg4MScsICc4ODInLCAnODgzJywgJzg4NCcsICc4ODUnXVxuICAgIF0sXG4gICAgLy8g5bGP5p2x57ijXG4gICAgW1xuICAgICAgWyflsY/mnbHluIInLCAn5LiJ5Zyw6ZaAJywgJ+mcp+WPsOmEiScsICfnkarlrrbphIknLCAn5Lmd5aaC6YSJJywgJ+mHjOa4r+mEiScsICfpq5jmqLnphIknLCAn6bm95Z+U6YSJJyxcbiAgICAgICAgJ+mVt+ayu+mEiScsICfpup/mtJvphIknLCAn56u555Sw6YSJJywgJ+WFp+WflOmEiScsICfokKzkuLnphIknLCAn5r2u5bee6Y6uJywgJ+azsOatpumEiScsICfkvobnvqnphIknLFxuICAgICAgICAn6JCs5beS6YSJJywgJ+W0gemggumEiScsICfmlrDln6TphIknLCAn5Y2X5bee6YSJJywgJ+ael+mCiumEiScsICfmnbHmuK/pjq4nLCAn55CJ55CD6YSJJywgJ+S9s+WGrOmEiScsXG4gICAgICAgICfmlrDlnJLphIknLCAn5p6L5a+u6YSJJywgJ+aei+WxsemEiScsICfmmKXml6XphIknLCAn542F5a2Q6YSJJywgJ+i7iuWfjumEiScsICfniaHkuLnphIknLCAn5oGG5pil6Y6uJyxcbiAgICAgICAgJ+a7v+W3numEiSdcbiAgICAgIF0sXG4gICAgICBbJzkwMCcsICc5MDEnLCAnOTAyJywgJzkwMycsICc5MDQnLCAnOTA1JywgJzkwNicsICc5MDcnLCAnOTA4JywgJzkwOScsICc5MTEnLFxuICAgICAgICAnOTEyJywgJzkxMycsICc5MjAnLCAnOTIxJywgJzkyMicsICc5MjMnLCAnOTI0JywgJzkyNScsICc5MjYnLCAnOTI3JywgJzkyOCcsXG4gICAgICAgICc5MjknLCAnOTMxJywgJzkzMicsICc5NDAnLCAnOTQxJywgJzk0MicsICc5NDMnLCAnOTQ0JywgJzk0NScsICc5NDYnLCAnOTQ3J1xuICAgICAgXVxuICAgIF0sXG4gICAgLy8g5Y+w5p2x57ijXG4gICAgW1xuICAgICAgWyflj7DmnbHluIInLCAn57ag5bO26YSJJywgJ+iYreW2vOmEiScsICflu7blubPphIknLCAn5Y2R5Y2X6YSJJywgJ+m5v+mHjumEiScsICfpl5zlsbHpjq4nLCAn5rW356uv6YSJJyxcbiAgICAgICAgJ+axoOS4iumEiScsICfmnbHmsrPphIknLCAn5oiQ5Yqf6Y6uJywgJ+mVt+a/semEiScsICflpKrpurvph4wnLCAn6YeR5bOw6YSJJywgJ+Wkp+atpumEiScsICfpgZTku4HphIknXG4gICAgICBdLFxuICAgICAgWyc5NTAnLCAnOTUxJywgJzk1MicsICc5NTMnLCAnOTU0JywgJzk1NScsICc5NTYnLCAnOTU3JywgJzk1OCcsICc5NTknLCAnOTYxJyxcbiAgICAgICAgJzk2MicsICc5NjMnLCAnOTY0JywgJzk2NScsICc5NjYnXG4gICAgICBdXG4gICAgXSxcbiAgICAvLyDoirHok67nuKNcbiAgICBbXG4gICAgICBbJ+iKseiTruW4gicsICfmlrDln47phIknLCAn56eA5p6X6YSJJywgJ+WQieWuiemEiScsICflo73osZDphIknLCAn6bOz5p6X6Y6uJywgJ+WFieW+qemEiScsICfosZDmv7HphIknLFxuICAgICAgICAn55Ge56mX6YSJJywgJ+iQrOamrumEiScsICfnjonph4zpjq4nLCAn5Y2T5rqq6YSJJywgJ+WvjOmHjOmEiSdcbiAgICAgIF0sXG4gICAgICBbJzk3MCcsICc5NzEnLCAnOTcyJywgJzk3MycsICc5NzQnLCAnOTc1JywgJzk3NicsICc5NzcnLCAnOTc4JywgJzk3OScsICc5ODEnLFxuICAgICAgICAnOTgyJywgJzk4MydcbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIOmHkemWgOe4o1xuICAgIFtcbiAgICAgIFsn6YeR5rKZ6Y6uJywgJ+mHkea5lumOricsICfph5Hlr6fphIknLCAn6YeR5Z+O6Y6uJywgJ+eDiOW2vOmEiScsICfng4/lnbXphIknXSxcbiAgICAgIFsnODkwJywgJzg5MScsICc4OTInLCAnODkzJywgJzg5NCcsICc4OTYnXVxuICAgIF0sXG4gICAgLy8g6YCj5rGf57ijXG4gICAgW1xuICAgICAgWyfljZfnq7/phIknLCAn5YyX56u/6YSJJywgJ+iOkuWFiemEiScsICfmnbHlvJXphIknXSxcbiAgICAgIFsnMjA5JywgJzIxMCcsICcyMTEnLCAnMjEyJ11cbiAgICBdLFxuICAgIC8vIOWNl+a1t+iruOWztlxuICAgIFtcbiAgICAgIFsn5p2x5rKZJywgJ+WNl+aymSddLFxuICAgICAgWyc4MTcnLCAnODE5J11cbiAgICBdLFxuICAgIC8vIOmHo+mtmuWPsOWIl+W2vFxuICAgIFtcbiAgICAgIFsn6Yej6a2a5Y+w5YiX5ba8J10sXG4gICAgICBbJzI5MCddXG4gICAgXVxuICBdXG5cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlT3B0aW9ucygpIHtcbiAgLy8gQ2hlY2sgb3B0aW9ucyByZXF1aXJlZFxuICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgZ2V0T3B0aW9uc1JlcXVpcmVkKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuICBcbiAgLy8gRXh0ZW5kIG9wdGlvbnNcbiAgcmV0dXJuIGdldE9wdGlvbnNFeHRlbmQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMl0pO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zUmVxdWlyZWQob3B0aW9uc0N1c3RvbSwgb3B0aW9uc1JlcXVpcmVkKSB7XG4gIHZhciBlcnJvciA9ICcnO1xuICB2YXIgbGVuZ3RoID0gb3B0aW9uc1JlcXVpcmVkLmxlbmd0aDtcbiAgb3B0aW9uc0N1c3RvbSA9IG9wdGlvbnNDdXN0b20gfHwge307XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKCAhIG9wdGlvbnNDdXN0b20uaGFzT3duUHJvcGVydHkob3B0aW9uc1JlcXVpcmVkW2xlbmd0aF0pKSAgICAgICAgICBcbiAgICAgIGVycm9yICs9IG9wdGlvbnNSZXF1aXJlZFtsZW5ndGhdICsgJywnO1xuICB9XG4gIFxuICBpZiAoZXJyb3IpIHRocm93ICfnvLrlsJHlj4Pmlbg6ICcgKyBlcnJvcjtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0V4dGVuZChvcHRpb25zQ3VzdG9tLCBvcHRpb25zRGVmYXVsdCkge1xuICBpZiAoICEgb3B0aW9uc0N1c3RvbSkge1xuICAgIHJldHVybiBvcHRpb25zRGVmYXVsdDtcbiAgfVxuICBcbiAgdmFyIHByb3BlcnR5O1xuICBmb3IgKHByb3BlcnR5IGluIG9wdGlvbnNDdXN0b20pIHtcbiAgICBvcHRpb25zRGVmYXVsdFtwcm9wZXJ0eV0gPSBvcHRpb25zQ3VzdG9tW3Byb3BlcnR5XTtcbiAgfVxuICBcbiAgcmV0dXJuIG9wdGlvbnNEZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZHVsZSBpbXBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGhhbmRsZU9wdGlvbnMgZnJvbSAnLi9oYW5kbGVPcHRpb25zJztcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kdWxlIGV4cG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZHVsZS5leHBvcnRzID0gVHdDaXR5U2VsZWN0b3I7IC8qIHVzZSBicm93c2VyaWZ5IHRvIGJ1aWxkICovXG5leHBvcnQgZGVmYXVsdCBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIHJvbGx1cCB0byBidWlsZCAqL1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb25zdHJ1Y3RvclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIFR3Q2l0eVNlbGVjdG9yKCkge1xuICAvLyAtLS0gU2V0dGluZyBvcHRpb25zIC0tLVxuICB2YXIgb3B0aW9uc0N1c3RvbSA9IGFyZ3VtZW50c1swXTtcbiAgdmFyIG9wdGlvbnNSZXF1aXJlZCA9IGFyZ3VtZW50cy5sZW5ndGggPyBbJ2VsJ10gOiBudWxsOyAvLyDoi6XnhKHlj4PmlbjliYfkuI3oqK3lv4XopoHlj4PmlbhcbiAgdmFyIG9wdGlvbnNEZWZhdWx0ID0ge1xuICAgIGVsOiBudWxsLFxuICAgIGVsQ291bnRyeTogbnVsbCxcbiAgICBlbERpc3RyaWN0OiBudWxsLFxuICAgIGVsWmlwY29kZTogbnVsbCxcbiAgICBjb3VudHJ5Q2xhc3NOYW1lOiAnY291bnRyeScsXG4gICAgY291bnRyeUZpbGVkTmFtZTogJ2NvdW50cnknLFxuICAgIGRpc3RyaWN0Q2xhc3NOYW1lOiAnZGlzdHJpY3QnLFxuICAgIGRpc3RyaWN0RmllbGROYW1lOiAnZGlzdHJpY3QnLFxuICAgIHppcGNvZGVDbGFzc05hbWU6ICd6aXBjb2RlJyxcbiAgICB6aXBjb2RlRmllbGROYW1lOiAnemlwY29kZScsXG4gICAgc2VsZWN0ZWRDb3VudHJ5OiBudWxsLCAvLyB7Ym9vbGVhbn0g6aCQ6Kit6YG45pOH55qE57ij5biCXG4gICAgc2VsZWN0ZWREaXN0cmljdDogbnVsbCwgLy97Ym9vbGVhbn0g6aCQ6Kit6YG45pOH55qE5Y2A5Z+fXG4gICAgb25seTogbnVsbCwgLy8ge2FycmF5fSDpmZDliLbpoa/npLrlk6rkupvnuKPluIJcbiAgICBzaG93WmlwY29kZTogZmFsc2UgLy8ge2Jvb2xlYW59IOaYr+WQpumhr+ekuumDtemBnuWNgOiZn+ashOS9jVxuICB9O1xuICBcbiAgLy8gLS0tIFNldHRpbmcgcHJvcGVydGllcyAtLS1cbiAgdGhpcy5vcHRpb25zID0gaGFuZGxlT3B0aW9ucyhvcHRpb25zQ3VzdG9tLCBvcHRpb25zUmVxdWlyZWQsIG9wdGlvbnNEZWZhdWx0KTtcbiAgXG4gIC8vIOacieaMh+WumiBlbCDnmoTliJ3lp4vljJZcbiAgaWYgKHRoaXMub3B0aW9ucy5lbCkge1xuICAgIHRoaXMuZWwgPSBnZXRFbGVtZW50cyh0aGlzLm9wdGlvbnMuZWwpO1xuICAgIHRoaXMuZWxDb3VudHJ5ID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsQ291bnRyeSk7XG4gICAgdGhpcy5lbERpc3RyaWN0ID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsRGlzdHJpY3QpO1xuICAgIHRoaXMuZWxaaXBjb2RlID0gZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmVsWmlwY29kZSk7XG4gICAgaW5pdC5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8g54Sh5oyH5a6aIGVs77yM5L2/55So56ym5ZCI55qEIGRhdGEtcm9sZSBET00g5L2c54K6IGVsIFxuICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInR3LWNpdHktc2VsZWN0b3JcIl0nKTtcbiAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICB2YXIgc2VsZiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpOyAvLyBjbG9uZSBvYmplY3TvvIzlm6Agb2JqZWN0IOeCuuWPg+iAg1xuXG4gICAgLy8g6YeN572u55u46Zec5ZCEIGVsIOioreWumlxuICAgIHNlbGYuZWwgPSBlbDtcbiAgICBzZWxmLmVsQ291bnRyeSA9IG51bGw7XG4gICAgc2VsZi5lbERpc3RyaWN0ID0gbnVsbDtcbiAgICBzZWxmLmVsWmlwY29kZSA9IG51bGw7XG5cbiAgICAvLyDpmZDliLbpoa/npLrlk6rkupvnuKPluIJcbiAgICBzZWxmLm9wdGlvbnMub25seSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5JylcbiAgICAgID8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHknKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykgLy8g5Y676Zmk56m655m95a2X5YWD77yM6L2J6Zmj5YiXXG4gICAgICA6IG51bGw7XG4gICAgLy8g6aCQ6Kit6YG45pOH55qE57ij5biCXG4gICAgc2VsZi5vcHRpb25zLnNlbGVjdGVkQ291bnRyeSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1jb3VudHJ5Jyk7XG4gICAgLy8g6aCQ6Kit6YG45pOH55qE5Y2A5Z+fXG4gICAgc2VsZi5vcHRpb25zLnNlbGVjdGVkRGlzdHJpY3QgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtZGlzdHJpY3QnKTtcblxuICAgIGluaXQuY2FsbChzZWxmKTtcbiAgfSwgdGhpcyk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdWJsaWMgTWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblR3Q2l0eVNlbGVjdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVzZXRTZWxlY3RvcnMuY2FsbCh0aGlzKTtcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFByaXZhdGUgTWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHNldEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gIHNldENvdW50cnlDaGFuZ2VkLmNhbGwodGhpcyk7XG4gIHNldERpc3RyaWN0Q2hhbmdlZC5jYWxsKHRoaXMpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHJ5KSB7XG4gICAgc2V0U2VsZWN0ZWRJdGVtLmNhbGwodGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudHMoZWwpIHtcbiAgaWYgKCAhIGVsKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xufVxuXG5mdW5jdGlvbiBzZXRFbGVtZW50cygpIHtcbiAgLy8g57ij5biC6YG45ZauXG4gIGlmICggISB0aGlzLmVsQ291bnRyeSkge1xuICAgIHZhciBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdGhpcy5lbENvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoY291bnRyeSk7XG4gIH1cblxuICB0aGlzLmVsQ291bnRyeS5pbm5lckhUTUwgPSBnZXRDb3VudHJ5T3B0aW9ucyh0aGlzLm9wdGlvbnMub25seSk7XG4gIHRoaXMuZWxDb3VudHJ5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuY291bnRyeUNsYXNzTmFtZSk7XG4gIHRoaXMuZWxDb3VudHJ5Lm5hbWUgPSB0aGlzLm9wdGlvbnMuY291bnRyeUZpbGVkTmFtZTtcblxuICAvLyDljYDln5/pgbjllq5cbiAgaWYgKCAhIHRoaXMuZWxEaXN0cmljdCkge1xuICAgIHZhciBkaXN0cmljdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHRoaXMuZWxEaXN0cmljdCA9IGRpc3RyaWN0O1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZGlzdHJpY3QpO1xuICB9XG5cbiAgdGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucygpO1xuICB0aGlzLmVsRGlzdHJpY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5kaXN0cmljdENsYXNzTmFtZSk7XG4gIHRoaXMuZWxEaXN0cmljdC5uYW1lID0gdGhpcy5vcHRpb25zLmRpc3RyaWN0RmllbGROYW1lO1xuXG4gIC8vIOmDtemBnuWNgOiZn1xuICBpZiAoICEgdGhpcy5lbFppcGNvZGUpIHtcbiAgICB2YXIgemlwY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5lbFppcGNvZGUgPSB6aXBjb2RlO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoemlwY29kZSk7XG4gIH1cblxuICB0aGlzLmVsWmlwY29kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLnppcGNvZGVDbGFzc05hbWUpO1xuICB0aGlzLmVsWmlwY29kZS5uYW1lID0gdGhpcy5vcHRpb25zLnppcGNvZGVGaWVsZE5hbWU7XG4gIHRoaXMuZWxaaXBjb2RlLnR5cGUgPSAndGV4dCc7XG4gIHRoaXMuZWxaaXBjb2RlLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgdGhpcy5lbFppcGNvZGUuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgdGhpcy5lbFppcGNvZGUucGxhY2Vob2xkZXIgPSBcIumDtemBnuWNgOiZn1wiO1xuICB0aGlzLmVsWmlwY29kZS5zdHlsZS53aWR0aCA9ICc2ZW0nO1xuICB0aGlzLmVsWmlwY29kZS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcHRpb25zLnNob3daaXBjb2RlIHx8ICdub25lJztcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRyeU9wdGlvbnMob25seSkge1xuICB2YXIgb3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+6YG45pOH57ij5biCPC9vcHRpb24+JztcblxuICBmb3IgKHZhciBpID0gMCwgaiA9IGRhdGEuY291bnRyeS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAvLyDoi6XmnInoqK3lrprpmZDliLbpoa/npLrnmoTnuKPluILvvIzkuJToqbLpoIXnm67kuI3lnKjoh6roqILnuKPluILkuK1cbiAgICBpZiAob25seSAmJiBBcnJheS5pc0FycmF5KG9ubHkpICYmIG9ubHkuaW5kZXhPZihkYXRhLmNvdW50cnlbaV0pID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi5Y+w5YyX5biCXCIgZGF0YS1pbmRleD1cIjBcIj7lj7DljJfluII8L29wdGlvbj5cbiAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmNvdW50cnlbaV19XCIgZGF0YS1pbmRleD1cIiR7aX1cIj4ke2RhdGEuY291bnRyeVtpXX08L29wdGlvbj5gO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCkge1xuICBpZiAoICEgaW5kZXgpIHtcbiAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD4tLS08L29wdGlvbj4nO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPumBuOaTh+WNgOWfnzwvb3B0aW9uPic7XG5cbiAgZm9yKHZhciBpID0gMCwgaiA9IGRhdGEuZGlzdHJpY3RbaW5kZXhdWzBdLmxlbmd0aCAtIDE7IGkgPD0gajsgaSsrKSB7XG4gICAgLy8gZm9ybWF0OiA8b3B0aW9uIHZhbHVlPVwi5Lit5q2j5Y2AXCIgZGF0YS16aXBjb2RlPVwiMTAwXCI+5Lit5q2j5Y2APC9vcHRpb24+XG4gICAgb3B0aW9ucyArPSBgXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHtkYXRhLmRpc3RyaWN0W2luZGV4XVswXVtpXX1cIiBkYXRhLXppcGNvZGU9XCIke2RhdGEuZGlzdHJpY3RbaW5kZXhdWzFdW2ldfVwiPlxuICAgICAgICAke2RhdGEuZGlzdHJpY3RbaW5kZXhdWzBdW2ldfVxuICAgICAgPC9vcHRpb24+XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRDb3VudHJ5Q2hhbmdlZCgpIHtcbiAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmVsQ291bnRyeS5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7IC8vIOWPliBkYWRhLWluZGV4XG4gICAgdGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucyhpbmRleCk7XG4gICAgdGhpcy5lbFppcGNvZGUudmFsdWUgPSAnJztcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuZWxDb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBzZXREaXN0cmljdENoYW5nZWQoKSB7XG4gIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHppcGNvZGUgPSB0aGlzLmVsRGlzdHJpY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKVxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS16aXBjb2RlJyk7IC8vIOWPliBkYWRhLXppcGNvZGVcbiAgICB0aGlzLmVsWmlwY29kZS52YWx1ZSA9IHppcGNvZGU7XG4gIH0uYmluZCh0aGlzKTtcblxuICB0aGlzLmVsRGlzdHJpY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGVkSXRlbSgpIHtcbiAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG5cbiAgdGhpcy5lbENvdW50cnkudmFsdWUgPSB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHJ5O1xuICB0aGlzLmVsQ291bnRyeS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkRGlzdHJpY3QpIHtcbiAgICB0aGlzLmVsRGlzdHJpY3QudmFsdWUgPSB0aGlzLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdDtcbiAgICB0aGlzLmVsRGlzdHJpY3QuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRTZWxlY3RvcnMoKSB7XG4gIHRoaXMuZWxDb3VudHJ5LnNlbGVjdGVkSW5kZXggPSAwO1xuICB0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zKCk7XG4gIHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gJyc7XG4gIHJldHVybiB0cnVlO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztFQUVBLElBQUksT0FBTztBQUNULEVBQUEsV0FBUyxDQUNQLEtBRE8sRUFDQSxLQURBLEVBQ08sS0FEUCxFQUNjLEtBRGQsRUFDcUIsS0FEckIsRUFDNEIsS0FENUIsRUFDbUMsS0FEbkMsRUFDMEMsS0FEMUMsRUFFUCxLQUZPLEVBRUEsS0FGQSxFQUVPLEtBRlAsRUFFYyxLQUZkLEVBRXFCLEtBRnJCLEVBRTRCLEtBRjVCLEVBRW1DLEtBRm5DLEVBR1AsS0FITyxFQUdBLEtBSEEsRUFHTyxLQUhQLEVBR2MsS0FIZCxFQUdxQixLQUhyQixFQUc0QixNQUg1QixFQUdvQyxPQUhwQyxDQURBOztBQU9ULEVBQUEsWUFBVTtBQUNSLEVBQUE7QUFDQSxFQUFBLEdBQ0UsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFDRSxLQURGLEVBQ1MsS0FEVCxFQUNnQixLQURoQixFQUN1QixLQUR2QixDQURGLEVBSUUs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