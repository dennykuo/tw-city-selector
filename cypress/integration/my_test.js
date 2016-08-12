describe('台灣縣市選單測試', function() {

  beforeEach(function() {

  });

  it('選擇台北的中正區', function() {
    cy.visit('http://denny.local:8000/');
    cy.get('.selector-all .country').select('台北市');
    cy.get('.selector-all .district').select('中正區').should('have.value', '中正區');
    cy.get('.selector-all .zipcode').should('have.value', '100');
  });
 
});