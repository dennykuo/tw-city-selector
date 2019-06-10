# 進階用法

!> 詳細參數設定及 API 請參閱 [參數配置](options) 及 [API](api) 章節

<hr>

## 指定父層 element

```html
<div class="city-selector"></div>

<script>
  new TwCitySelector({
    el: '.city-selector' // 同 DOM querySelector()
  });
</script>
```

示例：
<div class="city-selector"></div>

<hr>

## 指定選單 element

指定既有的 element 代入元件，可全部代入或選擇性代入，例只代入「郵遞區號欄位」至特定 element

注意所有選單的元件都需在同個 parent dom 內，作為 el 參數的設定

!> 縣市選單及區域選單只接受 ``<select>`` tag；郵遞區號只接受 ``<input>`` tag

```html
<div class="city-selector-set">
  <div>
    <!-- 縣市選單 -->
    <select class="county"></select>
  </div>
  <div>
    <!-- 區域選單 -->
    <select class="district"></select>
  </div>
  <div>
    <!-- 郵遞區號欄位 (建議加入 readonly 屬性，防止修改) -->
    <input class="zipcode" type="text" size="3" readonly placeholder="郵遞區號">
  </div>
</div>

<script>
  new TwCitySelector({
    el: '.city-selector-set',
    elCounty: '.county', // 在 el 裡查找 element
    elDistrict: '.district', // 在 el 裡查找 element
    elZipcode: '.zipcode' // 在 el 裡查找 element
  });
</script>
```

要設定選單值，在 element tag 加上 data-value 屬性

```html
<div class="city-selector-set-has-value">
  <div>
    <!-- 縣市選單 -->
    <select class="county" data-value="台北市"></select>
  </div>
  <div>
    <!-- 區域選單 -->
    <select class="district" data-value="大安區"></select>
  </div>
</div>

<script>
  new TwCitySelector({
    el: '.city-selector-set-has-value',
    elCounty: '.county',
    elDistrict: '.district'
  });
</script>
```

示例1：
<div class="city-selector-set">
  <div style="margin: 8px 0;">
    <select class="county"></select>
  </div>
  <div style="margin: 8px 0;">
    <select class="district"></select>
  </div>
  <div style="margin: 8px 0;">
    <input class="zipcode" type="text" size="3" readonly placeholder="郵遞區號">
  </div>
</div>

示例2：
<div class="city-selector-set-has-value">
  <div style="margin: 8px 0;">
    <select class="county" data-value="台北市"></select>
  </div>
  <div style="margin: 8px 0;">
    <select class="district" data-value="大安區"></select>
  </div>
</div>

<hr>

## 使用正體字

#### 將縣市名稱中的「台」異體字改用「臺」正體字

若有指定選單預設值，注意參數要用正體字代入參數 countyValuer 及 districtValue

```html
<div class="city-selector-standard-words"></div>

<script>
  new TwCitySelector({
    el: '.city-selector-standard-words',
    standardWords: true,
    countyValue: '臺北市' // 此處需用正體字的臺
  });
</script>
```

示例：
<div class="city-selector-standard-words"></div>


<script>
  new TwCitySelector({
    el: '.city-selector'
  });

  new TwCitySelector({
    el: '.city-selector-set',
    elCounty: '.county',
    elDistrict: '.district',
    elZipcode: '.zipcode'
  });

  new TwCitySelector({
    el: '.city-selector-set-has-value',
    elCounty: '.county',
    elDistrict: '.district'
  });

  new TwCitySelector({
    el: '.city-selector-standard-words',
    standardWords: true
  });
</script>

<hr>

## 參數配置

### el
- 說明：作用目標
- 必須：否
- 類型：string | HTMLElement
- 預設：null

```javascript
new TwCitySelector({
  el: '.city-selector'
});
```

### elCounty
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

### elDistrict
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

### elZipcode
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

### countyValue
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

### districtValue
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

### only
- 說明：限制可選擇的縣市、區域
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
```

### except
- 說明：排除縣市、區域
- 必須：否
- 類型：string | array
- 預設：null

```javascript
new TwCitySelector({
  el: '.city-selector',
  except: [
    '台北市', // 台北市所有區域
    '台中市@南區|北區|東區', // 台中市的南區、北區、東區
    '高雄市@新興區' // 高雄市的新興區
  ]
});

// 如果只設定單一個縣市，也可傳入字串
new TwCitySelector({
  el: '.city-selector',
  except: '台北市@大同區|中正區'
});
```

### hasZipcode
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

### hiddenZipcode
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

### disabled
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

### countyClassName
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

### countyFieldName
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

### districtClassName
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

### districtFieldName
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

### zipcodeClassName
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

### zipcodeFieldName
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

### standardWords
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

### bootstrapStyle
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
