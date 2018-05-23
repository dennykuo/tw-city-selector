# 基本用法

## 下載

下列方式擇一使用

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


## 引用

使用 UMD 方式定義模組，使用您適合的方式引用 (記得將路徑改為實際路徑)

```javascript
// 可以這樣
<script src="./tw-city-selector.js"></script>

// 或是這樣 (es6 module)
import TwCitySelector from './tw-city-selector.js';

// 也能這樣 (CommonJS)
var TwCitySelector = require('./tw-city-selector.js');
```


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

!> 產生的元件中，預設包含一個「隱藏」的郵遞區號欄位 [name=zipcode]，請留意對表單值的影響。或使用進階用法，將此欄位設定無效


## 設定

#### 顯示郵遞區號欄位

element tag 增加 data-show-zipcode 屬性

```html
<div role="tw-city-selector" data-show-zipcode></div>
```

示例：
<div role="tw-city-selector" data-show-zipcode></div>

!> 郵遞區號欄位具有 readonly 屬性

#### 限制可選擇的縣市

tag 增加 data-only 屬性，值為可選擇的縣市 (不可有空格)

例：只可選擇台北市、台中市、高雄市

```html
<div role="tw-city-selector" data-only="台北市,台中市,高雄市"></div>
```

示例：
<div role="tw-city-selector" data-only="台北市,台中市,高雄市"></div>


#### 限制可選擇的縣市及區域

element tag 增加 data-only 屬性，值為可選擇的縣市及區域 (不可有空格)

例：只可選擇台北市(大同區、萬華區)、台中市(西區)、高雄市(不設限其中區域)

```html
<div role="tw-city-selector" data-only="台北市@大同區|萬華區,台中市@西區,高雄市"></div>
```

示例：
<div role="tw-city-selector" data-only="台北市@大同區|萬華區,台中市@西區,高雄市"></div>


#### 預設選定

element tag 增加 data-selected-county 及 data-selected-district 屬性

例：設定其值為「台北市」及「中正區」

```html
<div role="tw-city-selector"
     data-selected-county="台北市"
     data-selected-district="中正區">
</div>
```

示例：
<div role="tw-city-selector"
     data-selected-county="台北市"
     data-selected-district="中正區">
</div>

!> 「限制縣市區域」及「預設選定」可同時併用

#### 自訂樣式

在 element tag 加上您自訂的 class name，即可利用 stylesheet 控制樣式

```html
<style>
  /* 替換適合的 css 樣式 */
  .my-selector select {
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

<div role="tw-city-selector" class="my-selector"></div>
```

示例：
<div role="tw-city-selector" class="my-selector"></div>

<style>
  .my-selector select {
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


## 使用正體字

#### 將「台」俗體字改為「臺」正體字

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


## Bootstrap 對應

##### 套用為 Bootstrap element tag

在 element tag 加上 data-bootstrap-style 屬性

```html
<div role="tw-city-selector" data-bootstrap-style></div>

<!-- 產出的 elements 如下 -->
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
  <div class="form-group">
    <input readonly type="text" placeholder="郵遞區號" name="zipcode" class="form-control" autocomplete="off" style="display: none; width: 6em;">
  </div>
</div>
```

!> 如果結構不符需求，可使用進階用法，更加彈性



<!-- 頁面示例用的 JS -->
<script>
  var a = new TwCitySelector();
</script>
