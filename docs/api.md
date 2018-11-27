# API

## getVersion

**getVersion()**
- 用途：顯示程式版本
- 參數：無
- 返回值：實例自身

```javascript
var tcs = new TwCitySelector();
tcs.getVersion(); // show version
```

<hr>

## setValue

**setValue(county, [district])**
- 用途：設置選單值
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

<hr>

## reset

**reset()**
- 用途：重置選單值
- 參數：無
- 返回值：實例自身

```javascript
var tcs = new TwCitySelector({
    el: '.city-selector',
    selectedCounty: '台北市',
    selectedDistrict: '中正區'
});

// 重置選單值
tcs.reset();
```
