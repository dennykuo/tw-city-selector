module.exports = {

  after: function(browser) {
     browser.end();
  },

  '選擇台北的中正區': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.selector-all .country', 200)
      .setValue('.selector-all .country', '台北市')
      .setValue('.selector-all .district', '中正區')
      .assert.value('.selector-all .district', '中正區')
      .assert.value('.selector-all .zipcode', '100')
  },

  '選擇澎湖縣的馬公市': function(browser) {
    browser
      .setValue('.selector-all .country', '澎湖縣')
      .waitForElementVisible('.selector-all .district', 200)
      .setValue('.selector-all .district', '馬公市')
      .assert.value('.selector-all .district', '馬公市')
      .assert.value('.selector-all .zipcode', '880')
  },

  '選擇沒有值的縣市選項，區域及郵遞區號應該重置': function(browser) {
    browser
      .click('.selector-all .country option:nth-child(1)')
      .assert.containsText('.selector-all .district', '---')
      .assert.value('.selector-all .zipcode', '')
  },

  '重新選擇縣市，區域及郵遞區號應該重置': function(browser) {
    browser
      .click('.selector-all .country option:nth-child(2)')
      .click('.selector-all .district option:nth-child(2)')
      .click('.selector-all .country option:nth-child(3)')
      .assert.containsText('.selector-all .district', '選擇區域')
      .assert.value('.selector-all .zipcode', '')
  },

  '限制縣市': function(browser) {
    browser.expect.element('.selector-only .country').text.to.not.contain('新北市');
    browser.expect.element('.selector-only .country').text.to.not.contain('屏東線');
  },
};
