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

### only
- 必須：否
- 類型：array
- 預設：null
- 說明：限制可選擇的縣市

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  only: [
    '臺北市', '新北市', '基隆市'
  ]
});
```

### showZipcode
- 必須：否
- 類型：boolean
- 預設：false
- 說明：是否顯示郵遞區號欄位

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  showZipcode: true
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
  selectedCounty: '臺北市'
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
  selectedCounty: '臺北市', // 注意此項為關聯參數
  selectedDistrict: '中正區'
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

### bootstrapStyle
- 必須：否
- 類型：boolean
- 預設：false
- 說明：套用為 Bootstrap element tag

###### 示例
```javascript
new TwCitySelector({
  el: '.city-selector',
  bootstrapStyle: false
});
```
