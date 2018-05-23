# API

### el

- 必須：否
- 類型：string | HTMLElement
- 預設：null
- 說明：作用目標

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector'
});
```

### elCounty

- 必須：否
- 類型：string | HTMLElement
- 預設：null
- 說明：指定縣市選單 element，需在 el element 內

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  elCounty: '.county'
});
```

### elDistrict
- 必須：否
- 類型：string | HTMLElement
- 預設：null
- 說明：指定區域選單 element，需在 el element 內

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  elDistrict: '.district'
});
```

### elZipcode
- 必須：否
- 類型：string | HTMLElement
- 預設：null
- 說明：指定郵遞區號 element，需在 el element 內

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  elZipcode: '.zipcode'
});
```

### selectedCounty
- 必須：否
- 類型：string
- 預設：null
- 說明：預設選擇的縣市

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  selectedCounty: '台北市'
});
```

### selectedDistrict
- 必須：否
- 類型：string
- 預設：null
- 說明：預設選擇的區域

!> 若設置此項，則 selectedCounty 參數則為必須

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  selectedCounty: '台北市', // 注意此項為關聯參數
  selectedDistrict: '中正區'
});
```

### only
- 必須：否
- 類型：string | array
- 預設：null
- 說明：限制可選擇的縣市

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  only: [
    '台北市', // 台北市所有區域
    '台中市@南區|北區|東區', // 台中市的南區、北區、東區
    '高雄市@新興區' // 高雄市的新興區
  ]
});

// 如果只設定單一個縣市，也可傳入字串
new TwCitySelector({
  el: '.city-selector',
  only: '台北市@大同區|中正區'
});
```

### hasZipcode
- 必須：否
- 類型：boolean
- 預設：false
- 說明：是否創建郵遞區號欄位

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  hasZipcode: true
});
```

### showZipcode
- 必須：否
- 類型：boolean
- 預設：false
- 說明：是否顯示郵遞區號欄位

!> hasZipcode 為 true 時，此參數才會生效

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  hasZipcode: true, // 注意此設定
  showZipcode: true
});
```

### countyClassName
- 必須：否
- 類型：string
- 預設：county
- 說明：縣市選單的 class name 屬性

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  countyClassName: 'county-class-name'
});
```

### countyFiledName
- 必須：否
- 類型：string
- 預設：county
- 說明：縣市選單的 name 屬性

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  countyFiledName: 'county-name'
});
```

### districtClassName
- 必須：否
- 類型：string
- 預設：district
- 說明：區域選單的 class name 屬性

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  districtClassName: 'district-class-name'
});
```

### districtFiledName
- 必須：否
- 類型：string
- 預設：district
- 說明：區域選單的 name 屬性

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  districtFiledName: 'district-name'
});
```

### zipcodeClassName
- 必須：否
- 類型：string
- 預設：zipcode
- 說明：區域選單的 class name 屬性

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  zipcodeClassName: 'zipcode-class-name'
});
```

### zipcodeFiledName
- 必須：否
- 類型：string
- 預設：zipcode
- 說明：區域選單的 name 屬性

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  zipcodeFiledName: 'zipcode-name'
});
```

### standardWords
- 必須：否
- 類型：boolean
- 預設：false
- 說明：使用正體字 (將「台」俗體字改為「臺」正體字)

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  standardWords: true
});
```

### bootstrapStyle
- 必須：否
- 類型：boolean
- 預設：false
- 說明：套用為 Bootstrap element tag

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  bootstrapStyle: true
});
```
