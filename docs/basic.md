# 簡易用法

!> 詳細參數設定及 API 請參閱 [參數配置](options) 及 [API](api) 章節

## 下載

?> 下列方式擇一使用

##### - 透過套件管理工具
```
// 使用 Yarn
yarn add tw-city-selector

// 使用 NPM
npm install tw-city-selector --save

// 使用 Bower
bower install tw-city-selector --save
```

##### - 下載檔案
透過 [Github](https://github.com/dennykuo/tw-city-selector ':target=_blank') 下載

##### - 使用 CDN
請參閱 [jsDelivr](https://www.jsdelivr.com/package/npm/tw-city-selector)

<hr>

## 引用

使用 UMD 方式定義模組，選擇您適合的方式引用 (記得將路徑改為實際路徑)

```javascript
// 可以這樣
<script src="./tw-city-selector.js"></script>

// 或是這樣 (es6 module)
import TwCitySelector from './tw-city-selector.js';

// 也能這樣 (CommonJS)
var TwCitySelector = require('./tw-city-selector.js');
```

<hr>

## 創建元件

設置一個空 element tag，設定其 role 屬性為 tw-city-selector，JS 實例化 TwCitySelector

```html
<!-- HTML -->
<div role="tw-city-selector"></div>

<!-- JS -->
<script>
  new TwCitySelector();
</script>
```

示例：
<div role="tw-city-selector"></div>

<hr>

## 配置設定

#### 創建郵遞區號欄位

element tag 增加 data-has-zipcode 屬性

!> 郵遞區號欄位具有 readonly 屬性，使用者無法直接修改郵遞區號欄位值

```html
<div role="tw-city-selector" data-has-zipcode></div>
```

示例：
<div role="tw-city-selector" data-has-zipcode></div>

#### 隱藏郵遞區號欄位

在設定為「創建郵遞區號欄位」情況下，element tag 增加 data-hidden-zipcode 屬性，可將郵遞區號欄位設為隱藏

郵遞區號欄位並非使用 css 將之設為隱藏，而是將其 type 屬性設為 hidden

!> 郵遞區號欄位隱藏時，還是會有此表單值的存在

```html
<div role="tw-city-selector" data-has-zipcode data-hidden-zipcode></div>
```

示例：
<div role="tw-city-selector" data-has-zipcode data-hidden-zipcode></div>

#### 限制可選擇的縣市

element tag 增加 data-only 屬性，值為可選擇的縣市 (不可有空格)

例：只可選擇台北市、台中市、高雄市

!> 「預設選單值」可與「限制縣市區域」同時併用

```html
<div role="tw-city-selector" data-only="台北市,台中市,高雄市"></div>
```

示例：
<div role="tw-city-selector" data-only="台北市,台中市,高雄市"></div>

#### 限制可選擇的縣市及區域

element tag 增加 data-only 屬性，值為可選擇的縣市及區域 (單一縣市及其區域使用@符號分隔，同一縣市中的區域使用|符號分隔，不可有空格，例：台北市@大同區|萬華區,台中市@東區|西區)

!> 「預設選單值」可與「限制縣市區域」同時併用

```html
<!-- 只可選擇台北市(大同區、萬華區)、台中市(西區)、高雄市(不設限其中區域) -->
<div role="tw-city-selector" data-only="台北市@大同區|萬華區,台中市@西區,高雄市"></div>
```

示例：
<div role="tw-city-selector" data-only="台北市@大同區|萬華區,台中市@西區,高雄市"></div>

#### 排除部分縣市

element tag 增加 data-except 屬性，值為排除的縣市 (不可有空格)

例：排除台北市、台中市、高雄市

!> 「預設選單值」可與「排除縣市區域」同時併用

```html
<div role="tw-city-selector" data-except="台北市,台中市,高雄市"></div>
```

示例：
<div role="tw-city-selector" data-except="台北市,台中市,高雄市"></div>

#### 排除部分縣市及區域

element tag 增加 data-except 屬性，值為排除的縣市及區域 (單一縣市及其區域使用@符號分隔，同一縣市中的區域使用|符號分隔，不可有空格，例：台北市@大同區|萬華區,台中市@東區|西區)

!> 「預設選單值」可與「限制縣市區域」同時併用

```html
<!-- 排除台北市(大同區、萬華區)、台中市(全市)、高雄市(全市) -->
<div role="tw-city-selector" data-except="台北市@大同區|萬華區,台中市,高雄市"></div>
```

示例：
<div role="tw-city-selector" data-except="台北市@大同區|萬華區,台中市,高雄市"></div>

#### 預設選單值

element tag 增加 data-county-value 及 data-district-value 屬性

例：設定其值為「台北市」及「中正區」

!> 「預設選單值」可與「限制縣市區域」同時併用
```html
<div role="tw-city-selector"
     data-county-value="台北市"
     data-district-value="中正區">
</div>
```

示例：
<div role="tw-city-selector"
     data-county-value="台北市"
     data-district-value="中正區">
</div>

#### 自訂樣式

在 element tag 增加您自訂的 class name，即可利用 stylesheet 控制樣式

```html
<style>
  /* 替換適合的 css 樣式 */
  .my-style-selector select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-color: #6ec3f5;
    border-width: 2px;
    border-radius: 10em;
    color: #1390e8;
    margin-right: 10px;
    outline: none;
    padding: .3em 1.25em;
  }
</style>

<div role="tw-city-selector" class="my-style-selector"></div>
```

示例：
<div role="tw-city-selector" class="my-style-selector"></div>

<hr>

## 使用正體字

#### 將「台」異體字改為「臺」正體字

element tag 增加 data-standard-words 屬性

```html
<div role="tw-city-selector"
     data-standard-words>
</div>
```

示例：
<div role="tw-city-selector"
     data-standard-words>
</div>

<hr>

## Bootstrap 對應

#### 套用為 Bootstrap elements tag

element tag 增加 data-bootstrap-style 屬性

!> 如果結構不符需求，可參考[進階用法](advanced)，更加彈性

```html
<!-- 無郵遞區號欄位 -->
<div role="tw-city-selector" data-bootstrap-style></div>

<!-- 有郵遞區號欄位 -->
<div role="tw-city-selector" data-bootstrap-style data-has-zipcode></div>
```

產生的 elements 如下
```html
<div role="tw-city-selector" data-bootstrap-style>
  <div class="form-group">
    <select class="form-control" name="county">
      ...
    </select>
  </div>
  <div class="form-group">
    <select class="form-control" name="district">
      ...
    </select>
  </div>
  <!-- 若有設定創建郵遞區號欄位時 -->
  <div class="form-group">
    <input type="text" name="zipcode" class="zipcode" readonly placeholder="郵遞區號" size="3" autocomplete="off">
  </div>
</div>
```


<!-- 頁面示例用的 JS -->
<script>
    new TwCitySelector();
</script>
