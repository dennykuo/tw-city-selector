# 說明

###### 這是一個範例 ：)
<div role="tw-city-selector"></div>

<hr>

縣市資料來源：[中華郵政3碼郵遞區號一覽表](http://download.post.gov.tw/post/download/103.12.25-%E8%87%BA%E7%81%A3%E5%9C%B0%E5%8D%80%E9%83%B5%E9%81%9E%E5%8D%80%E8%99%9F%E5%89%8D3%E7%A2%BC%E4%B8%80%E8%A6%BD%E8%A1%A8.xls)<br>
縣市資料最後更新：2017-04-14 (非程式更新日)<br>
如果資料有誤或未及更新，發個 [issue](https://github.com/dennykuo/tw-city-selector/issues ':target=_blank') 給我吧

?>
備註：<br>
<small>中華郵政所使用的縣市、區域名稱，皆使用正體的「臺」字。<br>
但考慮一般使用情境上多傾向用俗體的「台」字，因此**預設使用俗體字「台」**，另可透過設定改用正體字。</small>

?>
其他版本文件<br>
<small>[v1 版本文件](https://dennykuo.github.io/tw-city-selector/archive/v1/ ':target=_blank')</small>


<hr>

## 版本更新

** (若要從 v1.x 版本升級，請見[版本遷移](migrate)) **

##### v2.0.0

- 從 v1.x 版本升級，請見[版本遷移](migrate)
- 縣市區域名稱，預設改用俗體字「台」，另可設定改正體字「臺」
- 郵遞區號欄位預設改為不自動創建
- 改善程式結構，修正錯誤
- 改用 webpack 來 build，不太好搞懂啊
- 文檔變得比較好一些了... 謝謝 [docsify](https://docsify.js.org)

<hr>

## 相似套件

如果我真的讓你不開心，那我推薦你幾個好傢伙 ...

- https://github.com/essoduke/jQuery-TWzipcode
- https://github.com/milkmidi/js_taiwan_city_area_select_component


<script>
    new TwCitySelector();
</script>
