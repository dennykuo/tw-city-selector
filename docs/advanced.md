# 進階用法

使用 JS 實例方式，可設定多項參數彈性運用，參數請參閱文件中 [API](api) 章節

## 指定上層 element

```html
<div class="city-selector"></div>

<script>
  new TwCitySelector({
    el: '.city-selector' // 同 DOM querySelector()
  });
</script>
```


## 指定 selector element

指定既有的 element 代入，可全部代入或選擇性代入
例如只代入郵遞區號欄位到特定 element

但注意所有選單元件都需在同個 parent element 中，作為 el 參數的設定

!> 縣市選單及區域選單只接受 select tag；郵遞區號只接受 input tag

```html
<div class="city-selector">
  <div>
    <select class="county"></select>
  </div>
  <div>
    <select class="district"></select>
  </div>
  <div>
    <input class="zipcode" type="text">
  </div>
</div>

<script>
  new TwCitySelector({
    el: '.city-selector',
    elCounty: '.county', // 在 el 裡查找 element
    elDistrict: '.district', // 在 el 裡查找 element
    elZipcode: '.zipcode' // 在 el 裡查找 element
  });
</script>
```
