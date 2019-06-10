# 參數配置

## el
- 說明：作用目標
- 必須：否
- 類型：string | HTMLElement
- 預設：null

```javascript
new TwCitySelector({
  el: '.city-selector'
});
```

## elCounty
- 說明：指定縣市選單 element，需在 el element 內
- 必須：否
- 類型：string | HTMLElement
- 預設：null

```javascript
new TwCitySelector({
  el: '.city-selector',
  elCounty: '.county'
});
```

## elDistrict
- 說明：指定區域選單 element，需在 el element 內
- 必須：否
- 類型：string | HTMLElement
- 預設：null

```javascript
new TwCitySelector({
  el: '.city-selector',
  elDistrict: '.district'
});
```

## elZipcode
- 說明：指定郵遞區號 element，需在 el element 內
- 必須：否
- 類型：string | HTMLElement
- 預設：null

```javascript
new TwCitySelector({
  el: '.city-selector',
  elZipcode: '.zipcode'
});
```

## countyValue
- 說明：預設選擇的縣市
- 必須：否
- 類型：string
- 預設：null

```javascript
new TwCitySelector({
  el: '.city-selector',
  countyValue: '台北市'
});
```

## districtValue
- 說明：預設選擇的區域
- 必須：否
- 類型：string
- 預設：null

!> 若設置此項，則 countyValue 參數則為必須

```javascript
new TwCitySelector({
  el: '.city-selector',
  countyValue: '台北市', // 注意此項為關聯參數
  districtValue: '中正區'
});
```

## only
- 說明：限制可選擇的縣市
- 必須：否
- 類型：string | array
- 預設：null

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

## hasZipcode
- 說明：是否創建郵遞區號欄位
- 必須：否
- 類型：boolean
- 預設：false

```javascript
new TwCitySelector({
  el: '.city-selector',
  hasZipcode: true
});
```

## hiddenZipcode
- 說明：是否隱藏郵遞區號欄位
- 必須：否
- 類型：boolean
- 預設：false

!> hasZipcode 為 true 時，此參數才會生效

```javascript
new TwCitySelector({
  el: '.city-selector',
  hasZipcode: true, // 注意此設定
  hiddenZipcode: true
});
```

## disabled
- 說明：是否將元件皆設為 disabled 屬性
- 必須：否
- 類型：boolean
- 預設：false

```javascript
new TwCitySelector({
  el: '.city-selector',
  disabled: true
});
```

## countyClassName
- 說明：縣市選單的 class name 屬性
- 必須：否
- 類型：string
- 預設：county

```javascript
new TwCitySelector({
  el: '.city-selector',
  countyClassName: 'county-class-name'
});
```

## countyFieldName
- 說明：縣市選單的 name 屬性
- 必須：否
- 類型：string
- 預設：county

```javascript
new TwCitySelector({
  el: '.city-selector',
  countyFieldName: 'county-name'
});
```

## districtClassName
- 說明：區域選單的 class name 屬性
- 必須：否
- 類型：string
- 預設：district

```javascript
new TwCitySelector({
  el: '.city-selector',
  districtClassName: 'district-class-name'
});
```

## districtFieldName
- 說明：區域選單的 name 屬性
- 必須：否
- 類型：string
- 預設：district

```javascript
new TwCitySelector({
  el: '.city-selector',
  districtFieldName: 'district-name'
});
```

## zipcodeClassName
- 說明：區域選單的 class name 屬性
- 必須：否
- 類型：string
- 預設：zipcode

```javascript
new TwCitySelector({
  el: '.city-selector',
  zipcodeClassName: 'zipcode-class-name'
});
```

## zipcodeFieldName
- 說明：區域選單的 name 屬性
- 必須：否
- 類型：string
- 預設：zipcode

```javascript
new TwCitySelector({
  el: '.city-selector',
  zipcodeFieldName: 'zipcode-name'
});
```

## standardWords
- 說明：使用正體字 (將「台」異體字改為「臺」正體字)
- 必須：否
- 類型：boolean
- 預設：false

```javascript
new TwCitySelector({
  el: '.city-selector',
  standardWords: true
});
```

## bootstrapStyle
- 說明：套用為 Bootstrap element tag
- 必須：否
- 類型：boolean
- 預設：false

```javascript
new TwCitySelector({
  el: '.city-selector',
  bootstrapStyle: true
});
```
