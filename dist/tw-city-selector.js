(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.TwCitySelector = factory());
})(this, (function() {
  "use strict";
  const zhData = {
    // 縣市
    counties: [
      "台北市",
      "基隆市",
      "新北市",
      "宜蘭縣",
      "桃園市",
      "新竹市",
      "新竹縣",
      "苗栗縣",
      "台中市",
      "彰化縣",
      "南投縣",
      "嘉義市",
      "嘉義縣",
      "雲林縣",
      "台南市",
      "高雄市",
      "澎湖縣",
      "金門縣",
      "屏東縣",
      "台東縣",
      "花蓮縣",
      "連江縣"
    ],
    // 區域
    districts: [
      // 台北市
      [
        [
          "中正區",
          "大同區",
          "中山區",
          "松山區",
          "大安區",
          "萬華區",
          "信義區",
          "士林區",
          "北投區",
          "內湖區",
          "南港區",
          "文山區"
        ],
        ["100", "103", "104", "105", "106", "108", "110", "111", "112", "114", "115", "116"]
      ],
      // 基隆市
      [
        ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"],
        ["200", "201", "202", "203", "204", "205", "206"]
      ],
      // 新北市
      [
        [
          "萬里區",
          "金山區",
          "板橋區",
          "汐止區",
          "深坑區",
          "石碇區",
          "瑞芳區",
          "平溪區",
          "雙溪區",
          "貢寮區",
          "新店區",
          "坪林區",
          "烏來區",
          "永和區",
          "中和區",
          "土城區",
          "三峽區",
          "樹林區",
          "鶯歌區",
          "三重區",
          "新莊區",
          "泰山區",
          "林口區",
          "蘆洲區",
          "五股區",
          "八里區",
          "淡水區",
          "三芝區",
          "石門區"
        ],
        [
          "207",
          "208",
          "220",
          "221",
          "222",
          "223",
          "224",
          "226",
          "227",
          "228",
          "231",
          "232",
          "233",
          "234",
          "235",
          "236",
          "237",
          "238",
          "239",
          "241",
          "242",
          "243",
          "244",
          "247",
          "248",
          "249",
          "251",
          "252",
          "253"
        ]
      ],
      // 宜蘭縣
      [
        [
          "宜蘭市",
          "頭城鎮",
          "礁溪鄉",
          "壯圍鄉",
          "員山鄉",
          "羅東鎮",
          "三星鄉",
          "大同鄉",
          "五結鄉",
          "冬山鄉",
          "蘇澳鎮",
          "南澳鄉",
          "釣魚台列嶼"
        ],
        [
          "260",
          "261",
          "262",
          "263",
          "264",
          "265",
          "266",
          "267",
          "268",
          "269",
          "270",
          "272",
          "290"
        ]
      ],
      // 桃園市
      [
        [
          "中壢區",
          "平鎮區",
          "龍潭區",
          "楊梅區",
          "新屋區",
          "觀音區",
          "桃園區",
          "龜山區",
          "八德區",
          "大溪區",
          "復興區",
          "大園區",
          "蘆竹區"
        ],
        [
          "320",
          "324",
          "325",
          "326",
          "327",
          "328",
          "330",
          "333",
          "334",
          "335",
          "336",
          "337",
          "338"
        ]
      ],
      // 新竹市
      [
        ["東區", "北區", "香山區"],
        ["300", "300", "300"]
      ],
      // 新竹縣
      [
        [
          "竹北市",
          "湖口鄉",
          "新豐鄉",
          "新埔鎮",
          "關西鎮",
          "芎林鄉",
          "寶山鄉",
          "竹東鎮",
          "五峰鄉",
          "橫山鄉",
          "尖石鄉",
          "北埔鄉",
          "峨眉鄉"
        ],
        [
          "302",
          "303",
          "304",
          "305",
          "306",
          "307",
          "308",
          "310",
          "311",
          "312",
          "313",
          "314",
          "315"
        ]
      ],
      // 苗栗縣
      [
        [
          "竹南鎮",
          "頭份市",
          "三灣鄉",
          "南庄鄉",
          "獅潭鄉",
          "後龍鎮",
          "通霄鎮",
          "苑裡鎮",
          "苗栗市",
          "造橋鄉",
          "頭屋鄉",
          "公館鄉",
          "大湖鄉",
          "泰安鄉",
          "銅鑼鄉",
          "三義鄉",
          "西湖鄉",
          "卓蘭鎮"
        ],
        [
          "350",
          "351",
          "352",
          "353",
          "354",
          "356",
          "357",
          "358",
          "360",
          "361",
          "362",
          "363",
          "364",
          "365",
          "366",
          "367",
          "368",
          "369"
        ]
      ],
      // 台中市
      [
        [
          "中區",
          "東區",
          "南區",
          "西區",
          "北區",
          "北屯區",
          "西屯區",
          "南屯區",
          "太平區",
          "大里區",
          "霧峰區",
          "烏日區",
          "豐原區",
          "后里區",
          "石岡區",
          "東勢區",
          "和平區",
          "新社區",
          "潭子區",
          "大雅區",
          "神岡區",
          "大肚區",
          "沙鹿區",
          "龍井區",
          "梧棲區",
          "清水區",
          "大甲區",
          "外埔區",
          "大安區"
        ],
        [
          "400",
          "401",
          "402",
          "403",
          "404",
          "406",
          "407",
          "408",
          "411",
          "412",
          "413",
          "414",
          "420",
          "421",
          "422",
          "423",
          "424",
          "426",
          "427",
          "428",
          "429",
          "432",
          "433",
          "434",
          "435",
          "436",
          "437",
          "438",
          "439"
        ]
      ],
      // 彰化縣
      [
        [
          "彰化市",
          "芬園鄉",
          "花壇鄉",
          "秀水鄉",
          "鹿港鎮",
          "福興鄉",
          "線西鄉",
          "和美鎮",
          "伸港鄉",
          "員林市",
          "社頭鄉",
          "永靖鄉",
          "埔心鄉",
          "溪湖鎮",
          "大村鄉",
          "埔鹽鄉",
          "田中鎮",
          "北斗鎮",
          "田尾鄉",
          "埤頭鄉",
          "溪州鄉",
          "竹塘鄉",
          "二林鎮",
          "大城鄉",
          "芳苑鄉",
          "二水鄉"
        ],
        [
          "500",
          "502",
          "503",
          "504",
          "505",
          "506",
          "507",
          "508",
          "509",
          "510",
          "511",
          "512",
          "513",
          "514",
          "515",
          "516",
          "520",
          "521",
          "522",
          "523",
          "524",
          "525",
          "526",
          "527",
          "528",
          "530"
        ]
      ],
      // 南投縣
      [
        [
          "南投市",
          "中寮鄉",
          "草屯鎮",
          "國姓鄉",
          "埔里鎮",
          "仁愛鄉",
          "名間鄉",
          "集集鎮",
          "水里鄉",
          "魚池鄉",
          "信義鄉",
          "竹山鎮",
          "鹿谷鄉"
        ],
        [
          "540",
          "541",
          "542",
          "544",
          "545",
          "546",
          "551",
          "552",
          "553",
          "555",
          "556",
          "557",
          "558"
        ]
      ],
      // 嘉義市
      [
        ["東區", "西區"],
        ["600", "600"]
      ],
      // 嘉義縣
      [
        [
          "番路鄉",
          "梅山鄉",
          "竹崎鄉",
          "阿里山",
          "中埔鄉",
          "大埔鄉",
          "水上鄉",
          "鹿草鄉",
          "太保市",
          "朴子市",
          "東石鄉",
          "六腳鄉",
          "新港鄉",
          "民雄鄉",
          "大林鎮",
          "溪口鄉",
          "義竹鄉",
          "布袋鎮"
        ],
        [
          "602",
          "603",
          "604",
          "605",
          "606",
          "607",
          "608",
          "611",
          "612",
          "613",
          "614",
          "615",
          "616",
          "621",
          "622",
          "623",
          "624",
          "625"
        ]
      ],
      // 雲林縣
      [
        [
          "斗南鎮",
          "大埤鄉",
          "虎尾鎮",
          "土庫鎮",
          "褒忠鄉",
          "東勢鄉",
          "台西鄉",
          "崙背鄉",
          "麥寮鄉",
          "斗六市",
          "林內鄉",
          "古坑鄉",
          "莿桐鄉",
          "西螺鎮",
          "二崙鄉",
          "北港鎮",
          "水林鄉",
          "口湖鄉",
          "四湖鄉",
          "元長鄉"
        ],
        [
          "630",
          "631",
          "632",
          "633",
          "634",
          "635",
          "636",
          "637",
          "638",
          "640",
          "643",
          "646",
          "647",
          "648",
          "649",
          "651",
          "652",
          "653",
          "654",
          "655"
        ]
      ],
      // 台南市
      [
        [
          "中西區",
          "東區",
          "南區",
          "北區",
          "安平區",
          "安南區",
          "永康區",
          "歸仁區",
          "新化區",
          "左鎮區",
          "玉井區",
          "楠西區",
          "南化區",
          "仁德區",
          "關廟區",
          "龍崎區",
          "官田區",
          "麻豆區",
          "佳里區",
          "西港區",
          "七股區",
          "將軍區",
          "學甲區",
          "北門區",
          "新營區",
          "後壁區",
          "白河區",
          "東山區",
          "六甲區",
          "下營區",
          "柳營區",
          "鹽水區",
          "善化區",
          "大內區",
          "山上區",
          "新市區",
          "安定區"
        ],
        [
          "700",
          "701",
          "702",
          "704",
          "708",
          "709",
          "710",
          "711",
          "712",
          "713",
          "714",
          "715",
          "716",
          "717",
          "718",
          "719",
          "720",
          "721",
          "722",
          "723",
          "724",
          "725",
          "726",
          "727",
          "730",
          "731",
          "732",
          "733",
          "734",
          "735",
          "736",
          "737",
          "741",
          "742",
          "743",
          "744",
          "745"
        ]
      ],
      // 高雄市
      [
        [
          "新興區",
          "前金區",
          "苓雅區",
          "鹽埕區",
          "鼓山區",
          "旗津區",
          "前鎮區",
          "三民區",
          "楠梓區",
          "小港區",
          "左營區",
          "仁武區",
          "大社區",
          "東沙群島",
          "南沙群島",
          "岡山區",
          "路竹區",
          "阿蓮區",
          "田寮區",
          "燕巢區",
          "橋頭區",
          "梓官區",
          "彌陀區",
          "永安區",
          "湖內區",
          "鳳山區",
          "大寮區",
          "林園區",
          "鳥松區",
          "大樹區",
          "旗山區",
          "美濃區",
          "六龜區",
          "內門區",
          "杉林區",
          "甲仙區",
          "桃源區",
          "那瑪夏區",
          "茂林區",
          "茄萣區"
        ],
        [
          "800",
          "801",
          "802",
          "803",
          "804",
          "805",
          "806",
          "807",
          "811",
          "812",
          "813",
          "814",
          "815",
          "817",
          "819",
          "820",
          "821",
          "822",
          "823",
          "824",
          "825",
          "826",
          "827",
          "828",
          "829",
          "830",
          "831",
          "832",
          "833",
          "840",
          "842",
          "843",
          "844",
          "845",
          "846",
          "847",
          "848",
          "849",
          "851",
          "852"
        ]
      ],
      // 澎湖縣
      [
        ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉"],
        ["880", "881", "882", "883", "884", "885"]
      ],
      // 金門縣
      [
        ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"],
        ["890", "891", "892", "893", "894", "896"]
      ],
      // 屏東縣
      [
        [
          "屏東市",
          "三地門鄉",
          "霧台鄉",
          "瑪家鄉",
          "九如鄉",
          "里港鄉",
          "高樹鄉",
          "鹽埔鄉",
          "長治鄉",
          "麟洛鄉",
          "竹田鄉",
          "內埔鄉",
          "萬丹鄉",
          "潮州鎮",
          "泰武鄉",
          "來義鄉",
          "萬巒鄉",
          "崁頂鄉",
          "新埤鄉",
          "南州鄉",
          "林邊鄉",
          "東港鎮",
          "琉球鄉",
          "佳冬鄉",
          "新園鄉",
          "枋寮鄉",
          "枋山鄉",
          "春日鄉",
          "獅子鄉",
          "車城鄉",
          "牡丹鄉",
          "恆春鎮",
          "滿州鄉"
        ],
        [
          "900",
          "901",
          "902",
          "903",
          "904",
          "905",
          "906",
          "907",
          "908",
          "909",
          "911",
          "912",
          "913",
          "920",
          "921",
          "922",
          "923",
          "924",
          "925",
          "926",
          "927",
          "928",
          "929",
          "931",
          "932",
          "940",
          "941",
          "942",
          "943",
          "944",
          "945",
          "946",
          "947"
        ]
      ],
      // 台東縣
      [
        [
          "台東市",
          "綠島鄉",
          "蘭嶼鄉",
          "延平鄉",
          "卑南鄉",
          "鹿野鄉",
          "關山鎮",
          "海端鄉",
          "池上鄉",
          "東河鄉",
          "成功鎮",
          "長濱鄉",
          "太麻里鄉",
          "金峰鄉",
          "大武鄉",
          "達仁鄉"
        ],
        [
          "950",
          "951",
          "952",
          "953",
          "954",
          "955",
          "956",
          "957",
          "958",
          "959",
          "961",
          "962",
          "963",
          "964",
          "965",
          "966"
        ]
      ],
      // 花蓮縣
      [
        [
          "花蓮市",
          "新城鄉",
          "秀林鄉",
          "吉安鄉",
          "壽豐鄉",
          "鳳林鎮",
          "光復鄉",
          "豐濱鄉",
          "瑞穗鄉",
          "萬榮鄉",
          "玉里鎮",
          "卓溪鄉",
          "富里鄉"
        ],
        [
          "970",
          "971",
          "972",
          "973",
          "974",
          "975",
          "976",
          "977",
          "978",
          "979",
          "981",
          "982",
          "983"
        ]
      ],
      // 連江縣
      [
        ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"],
        ["209", "210", "211", "212"]
      ]
    ]
  };
  const enData = {
    // 縣市
    counties: [
      "Taipei City",
      "Keelung City",
      "New Taipei City",
      "Yilan County",
      "Taoyuan City",
      "Hsinchu City",
      "Hsinchu County",
      "Miaoli County",
      "Taichung City",
      "Changhua County",
      "Nantou County",
      "Chiayi City",
      "Chiayi County",
      "Yunlin County",
      "Tainan City",
      "Kaohsiung City",
      "Penghu County",
      "Kinmen County",
      "Pingtung County",
      "Taitung County",
      "Hualien County",
      "Lienchiang County"
    ],
    // 區域
    districts: [
      // 台北市
      [
        ["Zhongzheng District", "Datong District", "Zhongshan District", "Songshan District", "Da’an District", "Wanhua District", "Xinyi District", "Shilin District", "Beitou District", "Neihu District", "Nangang District", "Wenshan District"],
        ["100", "103", "104", "105", "106", "108", "110", "111", "112", "114", "115", "116"]
      ],
      // 基隆市
      [
        ["Ren’ai District", "Xinyi District", "Zhongzheng District", "Zhongshan District", "Anle District", "Nuannuan District", "Qidu District"],
        ["200", "201", "202", "203", "204", "205", "206"]
      ],
      // 新北市
      [
        ["Wanli District", "Jinshan District", "Banqiao District", "Xizhi District", "Shenkeng District", "Shiding District", "Ruifang District", "Pingxi District", "Shuangxi District", "Gongliao District", "Xindian District", "Pinglin District", "Wulai District", "Yonghe District", "Zhonghe District", "Tucheng District", "Sanxia District", "Shulin District", "Yingge District", "Sanchong District", "Xinzhuang District", "Taishan District", "Linkou District", "LuzhouDistrict", "Wugu District", "Bali District", "Tamsui District", "Sanzhi District", "Shimen District"],
        [
          "207",
          "208",
          "220",
          "221",
          "222",
          "223",
          "224",
          "226",
          "227",
          "228",
          "231",
          "232",
          "233",
          "234",
          "235",
          "236",
          "237",
          "238",
          "239",
          "241",
          "242",
          "243",
          "244",
          "247",
          "248",
          "249",
          "251",
          "252",
          "253"
        ]
      ],
      // 宜蘭縣
      [
        ["Yilan City", "Toucheng Township", "Jiaoxi Township", "Zhuangwei Township", "Yuanshan Township", "Luodong Township", "Sanxing Township", "Datong Township", "Wujie Township", "Dongshan Township", "Su’ao Township", "Nan’ao Township", "Diauyutai"],
        [
          "260",
          "261",
          "262",
          "263",
          "264",
          "265",
          "266",
          "267",
          "268",
          "269",
          "270",
          "272",
          "290"
        ]
      ],
      // 桃園市
      [
        ["Zhongli District", "Pingzhen District", "Longtan District", "Yangmei District", "Xinwu District", "Guanyin District", "Taoyuan District", "Guishan District", "Bade District", "Daxi District", "Fuxing District", "Dayuan District", "Luzhu District"],
        [
          "320",
          "324",
          "325",
          "326",
          "327",
          "328",
          "330",
          "333",
          "334",
          "335",
          "336",
          "337",
          "338"
        ]
      ],
      // 新竹市
      [
        ["East District", "North District", "Xiangshan District"],
        ["300", "300", "300"]
      ],
      // 新竹縣
      [
        ["Zhubei City", "Hukou Township", "Xinfeng Township", "Xinpu Township", "Guanxi Township", "Qionglin Township", "Baoshan Township", "Zhudong Township", "Wufeng Township", "Hengshan Township", "Jianshi Township", "Beipu Township", "Emei Township"],
        [
          "302",
          "303",
          "304",
          "305",
          "306",
          "307",
          "308",
          "310",
          "311",
          "312",
          "313",
          "314",
          "315"
        ]
      ],
      // 苗栗縣
      [
        ["Zhunan Township", "Toufen Township", "Sanwan Township", "Nanzhuang Township", "Shitan Township", "Houlong Township", "Tongxiao Township", "Yuanli Township", "Miaoli City", "Zaoqiao Township", "Touwu Township", "Gongguan Township", "Dahu Township", "Tai’an Township", "Tongluo Township", "Sanyi Township", "Xihu Township", "Zhuolan Township"],
        [
          "350",
          "351",
          "352",
          "353",
          "354",
          "356",
          "357",
          "358",
          "360",
          "361",
          "362",
          "363",
          "364",
          "365",
          "366",
          "367",
          "368",
          "369"
        ]
      ],
      // 台中市
      [
        ["Central District", "East District", "South District", "West District", "North District", "Beitun District", "Xitun District", "Nantun District", "Taiping District", "Dali District", "Wufeng District", "Wuri District", "Fengyuan District", "Houli District", "Shigang District", "Dongshi District", "Heping District", "Xinshe District", "Tanzi District", "Daya District", "Shengang District", "Dadu District", "ShaluDistrict", "Longjing District", "Wuqi District", "Qingshui District", "Dajia District", "Waipu District", "Da’an District"],
        [
          "400",
          "401",
          "402",
          "403",
          "404",
          "406",
          "407",
          "408",
          "411",
          "412",
          "413",
          "414",
          "420",
          "421",
          "422",
          "423",
          "424",
          "426",
          "427",
          "428",
          "429",
          "432",
          "433",
          "434",
          "435",
          "436",
          "437",
          "438",
          "439"
        ]
      ],
      // 彰化縣
      [
        ["Changhua City", "Fenyuan Township", "Huatan Township", "Xiushui Township", "Lukang Township", "Fuxing Township", "Xianxi Township", "Hemei Township", "Shengang Township", "Yuanlin Township", "Shetou Township", "Yongjing Township", "Puxin Township", "Xihu Township", "Dacun Township", "Puyan Township", "Tianzhong Township", "Beidou Township", "Tianwei Township", "Pitou Township", "Xizhou Township", "Zhutang Township", "Erlin Township", "Dacheng Township", "Fangyuan Township", "Ershui Township"],
        [
          "500",
          "502",
          "503",
          "504",
          "505",
          "506",
          "507",
          "508",
          "509",
          "510",
          "511",
          "512",
          "513",
          "514",
          "515",
          "516",
          "520",
          "521",
          "522",
          "523",
          "524",
          "525",
          "526",
          "527",
          "528",
          "530"
        ]
      ],
      // 南投縣
      [
        ["Nantou City", "Zhongliao Township", "Caotun Township", "Guoxing Township", "Puli Township", "Ren’ai Township", "Mingjian Township", "Jiji Township", "Shuili Township", "Yuchi Township", "Xinyi Township", "Zhushan Township", "Lugu Township"],
        [
          "540",
          "541",
          "542",
          "544",
          "545",
          "546",
          "551",
          "552",
          "553",
          "555",
          "556",
          "557",
          "558"
        ]
      ],
      // 嘉義市
      [
        ["East District", "West District"],
        ["600", "600"]
      ],
      // 嘉義縣
      [
        ["FanluTownship", "Meishan Township", "Zhuqi Township", "Alishan Township", "Zhongpu Township", "Dapu Township", "Shuishang Township", "Lucao Township", "Taibao City", "Puzi City", "Dongshi Township", "Liujiao Township", "Xingang Township", "Minxiong Township", "Dalin Township", "Xikou Township", "Yizhu Township", "Budai Township"],
        [
          "602",
          "603",
          "604",
          "605",
          "606",
          "607",
          "608",
          "611",
          "612",
          "613",
          "614",
          "615",
          "616",
          "621",
          "622",
          "623",
          "624",
          "625"
        ]
      ],
      // 雲林縣
      [
        ["Dounan Township", "Dapi Township", "Huwei Township", "Tuku Township", "Baozhong Township", "Dongshi Township", "Taixi Township", "Lunbei Township", "Mailiao Township", "Douliu City", "Linnei Township", "Gukeng Township", "Citong Township", "Xiluo Township", "Erlun Township", "Beigang Township", "Shuilin Township", "Kouhu Township", "Sihu Township", "Yuanchang Township"],
        [
          "630",
          "631",
          "632",
          "633",
          "634",
          "635",
          "636",
          "637",
          "638",
          "640",
          "643",
          "646",
          "647",
          "648",
          "649",
          "651",
          "652",
          "653",
          "654",
          "655"
        ]
      ],
      // 台南市
      [
        ["West Central District", "East District", "South District", "North District", "Anping District", "Annan District", "Yongkang District", "Guiren District", "Xinhua District", "Zuozhen District", "Yujing District", "Nanxi District", "Nanhua District", "Rende District", "Guanmiao District", "Longqi District", "Guantian District", "Madou District", "Jiali District", "Xigang District", "Qigu District", "Jiangjun District", "Xuejia District", "Beimen District", "Xinying District", "Houbi District", "Baihe District", "Dongshan District", "Liujia District", "Xiaying District", "Liuying District", "Yanshui District", "Shanhua District", "Danei District", "Shanshang District", "Xinshi District", "Anding District"],
        [
          "700",
          "701",
          "702",
          "704",
          "708",
          "709",
          "710",
          "711",
          "712",
          "713",
          "714",
          "715",
          "716",
          "717",
          "718",
          "719",
          "720",
          "721",
          "722",
          "723",
          "724",
          "725",
          "726",
          "727",
          "730",
          "731",
          "732",
          "733",
          "734",
          "735",
          "736",
          "737",
          "741",
          "742",
          "743",
          "744",
          "745"
        ]
      ],
      // 高雄市
      [
        ["Xinxing District", "Qianjin District", "Lingya District", "Yancheng District", "Gushan District", "Qijin District", "Qianzhen District", "Sanmin District", "Nanzi District", "Xiaogang District", "Zuoying District", "Renwu District", "Dashe District", "Dongsha Islands", "Nansha Islands", "Gangshan District", "Luzhu District", "Alian District", "Tianliao District", "Yanchao District", "Qiaotou District", "Ziguan District", "Mituo District", "Yong’an District", "Hunei District", "Fengshan District", "Daliao District", "Linyuan District", "Niaosong District", "Dashu District", "Qishan District", "Meinong District", "Liugui District", "Neimen District", "Shanlin District", "Jiaxian District", "Taoyuan District", "Namaxia District", "Maolin District", "Qieding District"],
        [
          "800",
          "801",
          "802",
          "803",
          "804",
          "805",
          "806",
          "807",
          "811",
          "812",
          "813",
          "814",
          "815",
          "817",
          "819",
          "820",
          "821",
          "822",
          "823",
          "824",
          "825",
          "826",
          "827",
          "828",
          "829",
          "830",
          "831",
          "832",
          "833",
          "840",
          "842",
          "843",
          "844",
          "845",
          "846",
          "847",
          "848",
          "849",
          "851",
          "852"
        ]
      ],
      // 澎湖縣
      [
        ["Magong City", "Xiyu Township", "Wang’an Township", "Qimei Township", "Baisha Township", "Huxi Township"],
        ["880", "881", "882", "883", "884", "885"]
      ],
      // 金門縣
      [
        ["Jinsha Township", "Jinhu Township", "Jinning Township", "Jincheng Township", "Lieyu Township", "Wuqiu Township"],
        ["890", "891", "892", "893", "894", "896"]
      ],
      // 屏東縣
      [
        ["Pingtung City", "Sandimen Township", "Wutai Township", "Majia Township", "Jiuru Township", "Ligang Township", "Gaoshu Township", "Yanpu Township", "Changzhi Township", "Linluo Township", "Zhutian Township", "Neipu Township", "Wandan Township", "Chaozhou Township", "Taiwu Township", "Laiyi Township", "Wanluan Township", "Kanding Township", "Xinpi Township", "Nanzhou Township", "Linbian Township", "Donggang Township", "Liuqiu Township", "Jiadong Township", "Xinyuan Township", "Fangliao Township", "Fangshan Township", "Chunri Township", "Shizi Township", "Checheng Township", "Mudan Township", "Hengchun Township", "Manzhou Township"],
        [
          "900",
          "901",
          "902",
          "903",
          "904",
          "905",
          "906",
          "907",
          "908",
          "909",
          "911",
          "912",
          "913",
          "920",
          "921",
          "922",
          "923",
          "924",
          "925",
          "926",
          "927",
          "928",
          "929",
          "931",
          "932",
          "940",
          "941",
          "942",
          "943",
          "944",
          "945",
          "946",
          "947"
        ]
      ],
      // 台東縣
      [
        ["Taitung City", "Ludao Township", "Lanyu Township", "Yanping Township", "Beinan Township", "Luye Township", "Guanshan Township", "Haiduan Township", "Chishang Township", "Donghe Township", "Chenggong Township", "Changbin Township", "Taimali Township", "Jinfeng Township", "Dawu Township", "Daren Township"],
        [
          "950",
          "951",
          "952",
          "953",
          "954",
          "955",
          "956",
          "957",
          "958",
          "959",
          "961",
          "962",
          "963",
          "964",
          "965",
          "966"
        ]
      ],
      // 花蓮縣
      [
        ["Hualien City", "Xincheng Township", "Xiulin Township", "Ji’an Township", "Shoufeng Township", "Fenglin Township", "Guangfu Township", "Fengbin Township", "Ruisui Township", "Wanrong Township", "Yuli Township", "Zhuoxi Township", "Fuli Township"],
        [
          "970",
          "971",
          "972",
          "973",
          "974",
          "975",
          "976",
          "977",
          "978",
          "979",
          "981",
          "982",
          "983"
        ]
      ],
      // 連江縣
      [
        ["Nangan Township", "Beigan Township", "Juguang Township", "Dongyin Township"],
        ["209", "210", "211", "212"]
      ]
    ]
  };
  class HandleOptions {
    constructor(options = {}, optionsRequired = [], optionsDefault = {}) {
      if (optionsRequired.length)
        this.checkOptionsRequired(options, optionsRequired);
      return this.setOptionsExtend(options, optionsDefault);
    }
    checkOptionsRequired(optionsCustom, optionsRequired) {
      let error = "";
      optionsCustom = optionsCustom || {};
      Object.keys(optionsRequired).forEach(function(property) {
        if (!optionsCustom.hasOwnProperty(property))
          error += property + ",";
      });
      if (error) throw "缺少參數: " + error;
    }
    setOptionsExtend(optionsCustom, optionsDefault) {
      if (!optionsCustom)
        return optionsDefault;
      let property;
      for (property in optionsCustom) {
        optionsDefault[property] = optionsCustom[property];
      }
      return optionsDefault;
    }
  }
  const LANG_ZH = "zh-tw";
  const LANG_EN = "en-us";
  const SEPARATOR_COUNTY_DISTRICT = "@";
  const SEPARATOR_DISTRICTS = "|";
  const EVENT_CHANGE_COUNTY = "change:county";
  const EVENT_CHANGE_DISTRICT = "change:district";
  const EVENT_CHANGE_ZIPCODE = "change:zipcode";
  class TwCitySelector {
    // ------------------------------
    // Constructor
    // ------------------------------
    constructor(options = {}) {
      this.VERSION = "2.1.2";
      this.ROLE_ATTR_NAME = "tw-city-selector";
      const optionsDefault = {
        // 作用目標 elements
        el: null,
        // {string | HTMLElement}
        elCounty: null,
        // {string | HTMLElement}
        elDistrict: null,
        // {string | HTMLElement}
        elZipcode: null,
        // {string | HTMLElement}
        // 元件的內容限制
        only: null,
        // {string | array} 限制可選擇的縣市及區域
        except: null,
        // {string | array} 排除縣市及區域
        disabled: false,
        // {boolean} 元件是否為 disabled 屬性
        hasZipcode: false,
        // {boolean} 是否創建郵遞區號欄位
        hiddenZipcode: false,
        // {boolean} 是否顯示郵遞區號欄位 (hasZipcode 為 true 時，才會生效)
        // 元件的預設選定值
        countyValue: null,
        // {string} 預設選擇的縣市
        districtValue: null,
        // {string} 預設選擇的區域
        // elements 屬性
        countyClassName: "county",
        // {string}
        countyFieldName: "county",
        // {string}
        districtClassName: "district",
        // {string}
        districtFieldName: "district",
        // {string}
        zipcodeClassName: "zipcode",
        // {string}
        zipcodeFieldName: "zipcode",
        // {string}
        lang: LANG_ZH,
        // 其他設定
        standardWords: false
        // {boolean} 使用「臺」的正體字，而非異體字「台」
      };
      const optionsRequired = options.length ? ["el"] : [];
      this.options = new HandleOptions(options, optionsRequired, optionsDefault);
      this._initializeWhenReady();
    }
    // ------------------------------
    // Public Methods
    // ------------------------------
    /**
     * 取得版本號並輸出到控制台
     * @public
     * @returns {TwCitySelector} 返回實例以支援鏈式調用
     * @example
     * const selector = new TwCitySelector({ el: '#city-selector' });
     * selector.getVersion(); // 輸出: "Your tw-city-selector.js is v2.1.2"
     */
    getVersion() {
      console.log(`Your tw-city-selector.js is v${this.VERSION}`);
      return this;
    }
    /**
     * 設定縣市和區域的值
     * @public
     * @param {string|null} county - 縣市名稱（例如：'台北市'）
     * @param {string|null} district - 區域名稱（例如：'中正區'）
     * @returns {TwCitySelector} 返回實例以支援鏈式調用
     * @example
     * selector.setValue('台北市', '中正區');
     */
    setValue(county = null, district = null) {
      this._setValue(county, district);
      return this;
    }
    /**
     * 取得當前選擇的縣市和區域
     * @public
     * @returns {{county: string, district: string, zipcode: string}} 包含縣市、區域和郵遞區號的物件
     * @example
     * const values = selector.getValue();
     * console.log(values); // { county: '台北市', district: '中正區', zipcode: '100' }
     */
    getValue() {
      if (!this.elCounty || !this.elDistrict) {
        return { county: "", district: "", zipcode: "" };
      }
      return {
        county: this.elCounty.value || "",
        district: this.elDistrict.value || "",
        zipcode: this.elZipcode ? this.elZipcode.value || "" : ""
      };
    }
    /**
     * 取得當前的郵遞區號
     * @public
     * @returns {string} 郵遞區號（例如：'100'）
     * @example
     * const zipcode = selector.getZipcode();
     * console.log(zipcode); // '100'
     */
    getZipcode() {
      if (!this.elZipcode) return "";
      return this.elZipcode.value || "";
    }
    /**
     * 重置選單到初始狀態
     * @public
     * @returns {TwCitySelector} 返回實例以支援鏈式調用
     * @example
     * selector.reset();
     */
    reset() {
      this._reset();
      return this;
    }
    /**
     * 停用選單（設為 disabled）
     * @public
     * @returns {TwCitySelector} 返回實例以支援鏈式調用
     * @example
     * selector.disable();
     */
    disable() {
      if (this.elCounty) this.elCounty.disabled = true;
      if (this.elDistrict) this.elDistrict.disabled = true;
      if (this.elZipcode) this.elZipcode.disabled = true;
      return this;
    }
    /**
     * 啟用選單（移除 disabled）
     * @public
     * @returns {TwCitySelector} 返回實例以支援鏈式調用
     * @example
     * selector.enable();
     */
    enable() {
      if (this.elCounty) this.elCounty.disabled = false;
      if (this.elDistrict) this.elDistrict.disabled = false;
      if (this.elZipcode) this.elZipcode.disabled = false;
      return this;
    }
    /**
     * 驗證當前選擇是否有效
     * @public
     * @returns {{valid: boolean, errors: string[]}} 驗證結果物件
     * @example
     * const result = selector.validate();
     * if (!result.valid) {
     *   console.error('驗證失敗:', result.errors);
     * }
     */
    validate() {
      const errors = [];
      const values = this.getValue();
      if (!values.county) {
        errors.push("請選擇縣市");
      }
      if (!values.district) {
        errors.push("請選擇區域");
      }
      if (this.options.hasZipcode && !values.zipcode) {
        errors.push("郵遞區號為空");
      }
      return {
        valid: errors.length === 0,
        errors
      };
    }
    /**
     * 清理事件監聽器並移除元素（用於元件銷毀）
     * @public
     * @returns {void}
     * @example
     * selector.destroy();
     */
    destroy() {
      if (this.elCounty) {
        this.elCounty.onchange = null;
      }
      if (this.elDistrict) {
        this.elDistrict.onchange = null;
      }
      this.el = null;
      this.elCounty = null;
      this.elDistrict = null;
      this.elZipcode = null;
      this.data = null;
    }
    // ------------------------------
    // Private Methods - Initialization
    // ------------------------------
    /**
     * 使用 MutationObserver 或 setTimeout 初始化
     * @private
     */
    _initializeWhenReady() {
      if (typeof MutationObserver !== "undefined" && this.options.el) {
        if (typeof this.options.el === "string") {
          this._waitForElement(this.options.el).then(() => {
            this._createElements();
          });
        } else {
          setTimeout(() => this._createElements(), 0);
        }
      } else {
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
          const element2 = document.querySelector(selector);
          if (element2) {
            observer.disconnect();
            resolve(element2);
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
      if (this.options.el) {
        this.el = this._getElement(this.options.el);
        if (!this.el) {
          console.warn(`TwCitySelector: Element not found for selector "${this.options.el}"`);
          return;
        }
        this.elCounty = this._getElement(this.options.elCounty, this.el);
        this.elDistrict = this._getElement(this.options.elDistrict, this.el);
        this.elZipcode = this._getElement(this.options.elZipcode, this.el);
        if (this.elCounty && this.elCounty.dataset.value) {
          this.options.countyValue = this.elCounty.dataset.value;
          this.options.districtValue = this.elDistrict?.dataset.value || null;
        }
        return this._init();
      }
      const els = document.querySelectorAll(`[role="${this.ROLE_ATTR_NAME}"]`);
      Array.from(els).forEach((el) => {
        const instanceOptions = this._getDataAttrOptions(el);
        const instance = Object.create(Object.getPrototypeOf(this));
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
      const attrs = {
        only: el.getAttribute("data-only"),
        except: el.getAttribute("data-except"),
        countyValue: el.getAttribute("data-county-value"),
        districtValue: el.getAttribute("data-district-value"),
        hasZipcode: el.hasAttribute("data-has-zipcode"),
        hiddenZipcode: el.hasAttribute("data-hidden-zipcode"),
        disabled: el.hasAttribute("data-disabled"),
        standardWords: el.hasAttribute("data-standard-words")
      };
      options.only = attrs.only ? attrs.only.replace(/\s/g, "").split(",") : null;
      options.except = attrs.except ? attrs.except.replace(/\s/g, "").split(",") : null;
      options.countyValue = attrs.countyValue;
      options.districtValue = attrs.districtValue;
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
      this.data = this.options.lang === LANG_EN ? enData : zhData;
      this.data = {
        counties: [...this.data.counties],
        districts: this.data.districts.map((d) => [[...d[0]], [...d[1]]])
      };
      this._setStandardWords(this.options.standardWords);
      this._setElements();
      this._listenCountyChanged();
      this._listenDistrictChanged();
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
      if (typeof el === "string") {
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
      if (!this.elCounty) {
        this.elCounty = document.createElement("select");
        fragment.appendChild(this.elCounty);
      }
      this._setElementAttributes(this.elCounty, {
        className: this.options.countyClassName,
        name: this.options.countyFieldName,
        disabled: this.options.disabled
      });
      this._setCountyOptions();
      if (!this.elDistrict) {
        this.elDistrict = document.createElement("select");
        fragment.appendChild(this.elDistrict);
      }
      this._setElementAttributes(this.elDistrict, {
        className: this.options.districtClassName,
        name: this.options.districtFieldName,
        disabled: this.options.disabled
      });
      this._setDistrictOptions();
      if (!this.elZipcode && this.options.hasZipcode) {
        this.elZipcode = document.createElement("input");
        fragment.appendChild(this.elZipcode);
        this.elZipcode.type = this.options.hiddenZipcode ? "hidden" : "text";
        this.elZipcode.readOnly = true;
        this.elZipcode.size = 3;
        this.elZipcode.autocomplete = "off";
        this.elZipcode.placeholder = this.options.lang === LANG_EN ? "ZIP code" : "郵遞區號";
        this._setElementAttributes(this.elZipcode, {
          className: this.options.zipcodeClassName,
          name: this.options.zipcodeFieldName,
          disabled: this.options.disabled
        });
      }
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
        element.setAttribute("disabled", true);
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
        isEnglish ? "Select County/City" : "選擇縣市",
        ""
      ));
      const onlyItems = this._getCountyOnlyItems();
      const exceptItems = this._getCountyExceptItems();
      this.data.counties.forEach((county, index) => {
        if (onlyItems && !onlyItems.includes(county)) return;
        if (exceptItems && exceptItems.includes(county)) return;
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
      select.replaceChildren();
      select.options.add(new Option(
        isEnglish ? "Select District" : "選擇區域",
        ""
      ));
      if (!index) return true;
      const onlyItems = this._getDistrictOnlyItems(this.elCounty.value);
      const exceptItems = this._getDistrictExceptItems(this.elCounty.value);
      const districts = this.data.districts[index][0];
      const zipcodes = this.data.districts[index][1];
      districts.forEach((district, i) => {
        if (onlyItems && !onlyItems.includes(district)) return;
        if (exceptItems && exceptItems.includes(district)) return;
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
      if (typeof items === "string") return [items];
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
      if (typeof this.options.only === "string") return this.options.only;
      return items.map((item) => this._extractCountyFromItem(item));
    }
    /**
     * 取得排除顯示的縣市清單
     * @private
     * @returns {Array|null}
     */
    _getCountyExceptItems() {
      const items = this._normalizeFilterItems(this.options.except);
      if (!items) return null;
      if (typeof this.options.except === "string") return this.options.except;
      return items.filter((item) => !item.includes(SEPARATOR_COUNTY_DISTRICT));
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
        const selectedOption = this.elCounty.querySelector("option:checked");
        if (!selectedOption) return;
        const index = selectedOption.getAttribute("data-index");
        this._setDistrictOptions(index);
        if (this.options.hasZipcode && this.elZipcode) {
          this.elZipcode.value = "";
          this._dispatchCustomEvent(EVENT_CHANGE_ZIPCODE, { zipcode: "" });
        }
        this._dispatchCustomEvent(EVENT_CHANGE_COUNTY, {
          county: this.elCounty.value
        });
      };
      this.elCounty.onchange = handler;
    }
    /**
     * 監聽區域選單變更
     * @private
     */
    _listenDistrictChanged() {
      if (!this.elDistrict) return;
      const handler = () => {
        const selectedOption = this.elDistrict.querySelector("option:checked");
        if (!selectedOption) return;
        const zipcode = selectedOption.dataset.zipcode || "";
        if ((this.options.hasZipcode || this.elZipcode) && this.elZipcode) {
          this.elZipcode.value = zipcode;
          this._dispatchCustomEvent(EVENT_CHANGE_ZIPCODE, { zipcode });
        }
        this._dispatchCustomEvent(EVENT_CHANGE_DISTRICT, {
          county: this.elCounty.value,
          district: this.elDistrict.value,
          zipcode
        });
      };
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
      const event = this._createEvent("change");
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
        this.elZipcode.value = "";
      }
      return this;
    }
    /**
     * 設定使用正體字或異體字
     * @private
     * @param {boolean} standard - 是否使用正體字「臺」
     */
    _setStandardWords(standard = false) {
      const from = standard ? "台" : "臺";
      const to = standard ? "臺" : "台";
      this.data.counties = this.data.counties.map(
        (county) => county.includes(from) ? county.replace(from, to) : county
      );
      this.data.districts.forEach((current, i) => {
        this.data.districts[i][0] = current[0].map(
          (district) => district.includes(from) ? district.replace(from, to) : district
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
      if (typeof Event === "function") {
        return new Event(eventName, {
          bubbles: true,
          cancelable: false
        });
      }
      const event = document.createEvent("Event");
      event.initEvent(eventName, true, false);
      return event;
    }
    /**
     * 觸發自訂事件
     * @private
     * @param {string} eventName - 事件名稱
     * @param {Object} detail - 事件詳細資料
     */
    _dispatchCustomEvent(eventName, detail = {}) {
      if (!this.el) return;
      let event;
      if (typeof CustomEvent === "function") {
        event = new CustomEvent(eventName, {
          detail,
          bubbles: true,
          cancelable: false
        });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, false, detail);
      }
      this.el.dispatchEvent(event);
    }
  }
  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      if (search instanceof RegExp) {
        throw TypeError("first argument must not be a RegExp");
      }
      if (start === void 0) {
        start = 0;
      }
      return this.indexOf(search, start) !== -1;
    };
  }
  return TwCitySelector;
}));
//# sourceMappingURL=tw-city-selector.js.map
