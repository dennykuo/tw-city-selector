describe('台灣縣市選單測試', function() {

  before(function() {
    cy.visit('http://denny.local:8000/');
  });

  it('選擇台北的中正區', function() {
    cy.get('.selector-all .country').select('台北市');
    cy.get('.selector-all .district').select('中正區').should('have.value', '中正區');
    cy.get('.selector-all .zipcode').should('have.value', '100');
  });

  it('選擇澎湖縣的馬公市', function() {
    cy.get('.selector-all .country').select('澎湖縣');
    cy.get('.selector-all .district').select('馬公市').should('have.value', '馬公市');
    cy.get('.selector-all .zipcode').should('have.value', '880');
  });

  it('選擇沒有值的縣市選項，區域及郵遞區號應該重置', function() {
    cy.get('.selector-all .country').select('選擇縣市');
    cy.get('.selector-all .district').should('have.value', '').and('have.text', '---');
    cy.get('.selector-all .zipcode').should('have.value', '');
  });

  it('重新選擇縣市，區域及郵遞區號應該重置', function() {
    cy.get('.selector-all .country').select('台北市');
    cy.get('.selector-all .district').select('中正區');
    cy.get('.selector-all .country').select('新北市');
    cy.get('.selector-all .district').should('have.value', '').and('contain', '選擇區域');
    cy.get('.selector-all .zipcode').should('have.value', '');
  });

  it('顯示部分縣市', function() {
    cy.get('.selector-only .country')
      .should('contain', '台北市')
      .and('contain', '台中市')
      .and('contain', '高雄市')
      .and('not.contain', '屏東縣');
  });
 
});