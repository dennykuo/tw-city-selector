# 版本遷移

#### v1.x - v2.x

- 「主程式」檔案位置由根目錄改至 dist 目錄下，請更改程式引入位置
- 實例化時<br>參數 selectedCounty (縣市選單預設值) 改為 countyValue<br>參數 selectedDistrict (區域選單預設值) 改為 districtValue
- 在 element tag 上<br>屬性 data-selected-county (縣市選單預設值) 改為 data-county-value<br>屬性 data-selected-district (區域選單預設值) 改為 data-district-value
- 「郵遞區號欄位」改為預設不創建，若有需要請透過設定作為創建
- 因郵遞區號欄位預設改為不創建，原在 element tag 上的 data-show-zipcode 屬性已被移除
- v1版本中縣市區域名稱中的「臺」字改為預設使用異體字「台」，若需使用正體字「臺」，可透過設定修改 (若有指定選單的 value 值，請務必對應修改)
- (我的錯) 刪除v1版本對開發時誤用錯別字 country (正確為 county) 的兼容，請在 tag 屬性及參數上使用 county
