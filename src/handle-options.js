/**
 * 選項處理類別
 * 負責驗證必要選項並合併自定義選項與預設選項
 */
export default class HandleOptions {
  /**
   * 建構函式
   * @param {Object} options - 使用者傳入的自定義選項
   * @param {Array} optionsRequired - 必要選項的鍵值陣列
   * @param {Object} optionsDefault - 預設選項物件
   * @returns {Object} 合併後的選項物件
   */
  constructor(options = {}, optionsRequired = [], optionsDefault = {}) {
    // 檢查必要選項是否存在
    if (optionsRequired.length) {
      this.#checkOptionsRequired(options, optionsRequired);
    }

    // 將自定義選項與預設選項合併
    return this.#setOptionsExtend(options, optionsDefault);
  }

  /**
   * 檢查必要選項是否存在
   * @param {Object} optionsCustom - 使用者傳入的自定義選項
   * @param {Array} optionsRequired - 必要選項的鍵值陣列
   * @throws {String} 當缺少必要參數時拋出錯誤訊息
   */
  #checkOptionsRequired(optionsCustom, optionsRequired) {
    let error = '';
    optionsCustom = optionsCustom || {};

    // 遍歷必要選項，檢查是否都存在於自定義選項中
    Object.keys(optionsRequired).forEach(function (property) {
      if (! optionsCustom.hasOwnProperty(property))
        error += property + ',';
    });

    // 若有缺少的參數，拋出錯誤
    if (error) throw '缺少參數: ' + error;
  }

  /**
   * 合併自定義選項與預設選項
   * 自定義選項的值會覆蓋預設選項的值
   * @param {Object} optionsCustom - 使用者傳入的自定義選項
   * @param {Object} optionsDefault - 預設選項物件
   * @returns {Object} 合併後的選項物件
   */
  #setOptionsExtend(optionsCustom, optionsDefault) {
    // 若無自定義選項，直接返回預設選項
    if (! optionsCustom)
      return optionsDefault;

    // 將自定義選項的屬性覆蓋到預設選項上
    let property;
    for (property in optionsCustom) {
      optionsDefault[property] = optionsCustom[property];
    }

    return optionsDefault;
  }

}