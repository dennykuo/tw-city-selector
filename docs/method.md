# 方法

## setValue
** setValue(county, [district]) **
- 說明：設置選單值
- 參數：
    - {string} county 縣市名稱
    - {string} district 區域名稱
- 返回值：實例自身

```javascript
var tcs = new TwCitySelector({
    el: '.city-selector'
});

// 設定縣市，不設定區域
tcs.setValue('台北市');
// 設定縣市及區域
tcs.setValue('台北市', '中正區');
```

## reset
** reset() **
- 說明：重置選單值
- 參數：
- 返回值：實例自身

```javascript
var tcs = new TwCitySelector({
    el: '.city-selector',
    selectedCounty: '台北市',
    selectedDistrict: '中正區'
});

tcs.reset();
```
