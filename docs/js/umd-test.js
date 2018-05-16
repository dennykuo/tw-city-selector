import TwCitySelector from './tw-city-selector.js';
// var TwCitySelector = require('./tw-city-selector.js');

// --------------------
// role-attribute 方式加載
// --------------------

new TwCitySelector();


// --------------------
// 實例方式加載
// --------------------

// 一般加載
new TwCitySelector({
    el: '.test-object-normal'
});

// 顯示部分縣市-臺北市、臺中市、高雄市
new TwCitySelector({
    el: '.test-object-limit-counties',
    only: ['臺北市', '臺中市', '高雄市']
});

// 顯示部分縣市及區域-臺北市(大同區、萬華區)、臺中市(西區)、嘉義市(不設限)
new TwCitySelector({
    el: '.test-object-limit-counties-and-district',
    only: ['臺北市@大同區|萬華區', '臺中市@西區', '嘉義市']
});



// new TwCitySelector({
//   el: '.selector-bootstrap',
//   elCounty: '.el-county',
//   countyClassName: 'county form-control',
//   elDistrict: '.el-district',
//   districtClassName: 'district form-control',
//   elZipcode: '.el-zipcode',
//   zipcodeClassName: 'zipcode form-control',
//   showZipcode: true
// });
//
// // country 錯別字
// new TwCitySelector({
//   el: '.selector-bootstrap-2',
//   elCountry: '.el-country',
//   countryClassName: 'country form-control',
//   elDistrict: '.el-district',
//   districtClassName: 'district form-control',
//   elZipcode: '.el-zipcode',
//   zipcodeClassName: 'zipcode form-control',
//   showZipcode: true
// });
