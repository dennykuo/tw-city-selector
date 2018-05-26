# 版本遷移

#### v1.x - v2.x

- 套件檔案由根目錄改至 dist 目錄下，請更改套件的引入位置
- 物件屬性 selectedCounty 改為 countyValue，物件屬性 selectedDistrict 改為 districtValue
- element 的 data-selected-county 改為 data-county-value，data-selected-district 改為 data-district-value
- 郵遞區號欄位改為預設不創建，若有需要請透過設定作為創建
- element 的 data-show-zipcode 屬性移除，若設定創建郵遞區欄位，則預設顯示，另改用 data-hidden-zipcode 屬性設為隱藏欄位
- 縣市區域名稱中的「臺」字預設改為使用俗體字「台」，若需使用正體字「臺」，可透過設定修改 (若原有指定選單預設值，請務必修改)
- (我的錯) 刪除套件在開發時對 country 錯別字的兼容 (正確為 county)，請在 tag 屬性及參數上使用 county
