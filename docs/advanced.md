# 進階用法

##### 使用 JS 實例方式，可設定多項參數彈性運用

> 詳細參數設定請參閱文件中 [API](api) 章節

<hr>

## 指定上層 element

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


## 指定 selector element

指定既有的 element 代入，可全部代入或選擇性代入
例如只代入郵遞區號欄位到特定 element

但注意所有選單元件都需在同個 parent element 中，作為 el 參數的設定

!> 縣市選單及區域選單只接受 select tag；郵遞區號只接受 input tag

```html
<div class="city-selector-set">
  <div>
    <select class="county"></select>
  </div>
  <div>
    <select class="district"></select>
  </div>
  <div>
    <!-- 強烈建議郵遞區號的屬性加入 readonly -->
    <input class="zipcode" type="text" size="3" readonly>
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

示例：
<div class="city-selector-set">
  <div style="margin: 8px 0;">
    <select class="county"></select>
  </div>
  <div style="margin: 8px 0;">
    <select class="district"></select>
  </div>
  <div style="margin: 8px 0;">
    <input class="zipcode" type="text" size="3" readonly>
  </div>
</div>


## 使用正體字

#### 將縣市名稱中的「台」俗體字改用「臺」正體字

若有指定選單預設值，也注意改用正體字

```html
<div class="city-selector-standard-words"></div>

<script>
  new TwCitySelector({
    el: '.city-selector-standard-words',
    standardWords: true
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
    el: '.city-selector-standard-words',
    standardWords: true
  });
</script>
