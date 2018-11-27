const url = 'http://localhost:8080/test.html';


// ------------------------------
// role-attribute方式加載
// ------------------------------
describe('role-attribute方式加載', function() {

	before(function() {
		cy.visit(url);
	});

	it('一般加載 - 無zipcode', function() {
		cy.get('.test-roleAttr-normal').within(function() {
            // 縣市
			cy.get('> select:eq(0)')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')
            // 區域
			cy.get('> select:eq(1)')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')
            // zipcode
			cy.get('> input:eq(0)').should('not.exist')
		});
	});

    it('一般加載 - 有zipcode', function() {
		cy.get('.test-roleAttr-has-zipcode').within(function() {
            // 縣市
			cy.get('> select:eq(0)')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')
            // 區域
			cy.get('> select:eq(1)')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')
            // zipcode
            cy.get('> input:eq(0)')
                .should('be.visible')
				.should('have.attr.name', 'zipcode')
				.should('have.class', 'zipcode')
				.should('not.contain')
				.should('not.have.value')
		});
	});

    it('一般加載 - 正體字', function() {
		cy.get('.test-roleAttr-standard-words').within(function() {
            // 縣市
			cy.get('.county')
				.should('not.contain', '台')
                .should('contain', '臺')
		});
	});

	it('縣市選單選擇', function() {
        // *** 一般加載 - 無zipcode ***
		cy.get('.test-roleAttr-normal').within(function() {
			cy.get('.county').select('台北市').should('have.value', '台北市')
				.find('option:selected').should('contain', '台北市')
			cy.get('.district').select('中正區').should('have.value', '中正區')
				.find('option:selected').should('contain', '中正區')
			cy.get('.zipcode').should('not.exist')

			cy.get('.county').select('澎湖縣').should('have.value', '澎湖縣')
				.find('option:selected').should('contain', '澎湖縣')
			cy.get('.district').select('馬公市').should('have.value', '馬公市')
				.find('option:selected').should('contain', '馬公市')
		});

        // *** 一般加載 - 有zipcode ***
        cy.get('.test-roleAttr-has-zipcode').within(function() {
			cy.get('.county').select('台北市').should('have.value', '台北市')
				.find('option:selected').should('contain', '台北市')
			cy.get('.district').select('中正區').should('have.value', '中正區')
				.find('option:selected').should('contain', '中正區')
			cy.get('.zipcode').should('have.value', '100')

			cy.get('.county').select('澎湖縣').should('have.value', '澎湖縣')
				.find('option:selected').should('contain', '澎湖縣')
			cy.get('.district').select('馬公市').should('have.value', '馬公市')
				.find('option:selected').should('contain', '馬公市')
			cy.get('.zipcode').should('have.value', '880')
        });
	});

	it('選擇沒有值的縣市選項時，區域及郵遞區號應該重置', function() {
        // *** 一般加載 - 無zipcode ***
		cy.get('.test-roleAttr-normal').within(function() {
			cy.get('.county').select('選擇縣市').should('have.value', '')
			cy.get('.district').should('have.value', '').should('have.text', '選擇區域')
			cy.get('.zipcode').should('not.exist')
		});

        // *** 一般加載 - 有zipcode ***
		cy.get('.test-roleAttr-has-zipcode').within(function() {
			cy.get('.county').select('選擇縣市').should('have.value', '')
			cy.get('.district').should('have.value', '').should('have.text', '選擇區域')
			cy.get('.zipcode').should('not.contain').should('not.have.value')
		});
	});

	it('重新選擇縣市，區域及郵遞區號應該重置', function() {
        // *** 一般加載 - 無zipcode ***
		cy.get('.test-roleAttr-normal').within(function() {
			cy.get('.county').select('台北市')
			cy.get('.district').select('中正區')
			cy.get('.county').select('新北市')
			cy.get('.district').should('have.value', '').contains('選擇區域')
			cy.get('.zipcode').should('not.exist')
		});

        // *** 一般加載 - 有zipcode ***
		cy.get('.test-roleAttr-has-zipcode').within(function() {
			cy.get('.county').select('台北市')
			cy.get('.district').select('中正區')
			cy.get('.county').select('新北市')
			cy.get('.district').should('have.value', '').contains('選擇區域')
			cy.get('.zipcode').should('not.contain').should('not.have.value')
		});
	});

	it('顯示部分縣市-台北市、台中市、高雄市', function() {
		cy.get('.test-roleAttr-limit-counties').within(function() {
			cy.get('.county')
				.should('contain', '選擇縣市')
				.should('contain', '台北市')
				.should('contain', '台中市')
				.should('contain', '高雄市')
				.should('not.contain', '屏東縣')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')

			cy.get('.district')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')

            cy.get('.county').select('台北市')
            cy.get('.district option')
                .should('have.length', 13) // 應有12個區域選項加上空白選項
		});
	});

    it('顯示部分縣市及區域-台北市(大同區、萬華區)、台中市(西區)、高雄市(不設限)', function() {
		cy.get('.test-roleAttr-limit-counties-and-district').within(function() {
			cy.get('.county')
				.should('contain', '選擇縣市')
				.should('contain', '台北市')
				.should('contain', '台中市')
				.should('contain', '嘉義市')
				.should('not.contain', '屏東縣')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')

			cy.get('.district')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')

		    cy.get('.county').select('台北市')
            cy.get('.district')
                .should('contain', '大同區')
                .should('contain', '萬華區')

            cy.get('.county').select('台中市')
            cy.get('.district')
                .should('not.contain', '大同區')
                .should('contain', '西區')

            cy.get('.county').select('嘉義市')
            cy.get('.district option')
                .should('have.length', 3) // 應有兩個區域選項加上空白選項
		});
	});

	it('預設選定新北市及其板橋區', function() {
		cy.get('.test-roleAttr-is-selected').within(function() {
			cy.get('.county').should('have.value', '新北市')
			cy.get('.district').should('have.value', '板橋區')
		});
	});

	it('顯示部分縣市-台北市、台中市、高雄市且預設選定台中市及其西區', function() {
	  cy.get('.test-roleAttr-limit-and-selected').within(function() {
			cy.get('.county')
				.should('contain', '選擇縣市')
				.should('contain', '台北市')
				.should('contain', '台中市')
				.should('contain', '高雄市')
				.should('not.contain', '屏東縣')
				.should('have.value', '台中市')

			cy.get('.district').should('have.value', '西區')
		});
	});

});


// ------------------------------
// 實例方式加載
// ------------------------------
describe('實例方式加載', function() {

	before(function() {
		cy.visit(url);
	});

    it('實例方式加載 - 無zipcode', function() {
		cy.get('.test-object-normal').within(function() {
            // 縣市
            cy.get('> select:eq(0)')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')
            // 區域
			cy.get('> select:eq(1)')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')
            // zipcode
			cy.get('> input:eq(0)').should('not.exist')
		});
	});

    it('實例方式加載 - 有zipcode', function() {
		cy.get('.test-object-has-zipcode').within(function() {
            // 縣市
            cy.get('> select:eq(0)')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')
            // 區域
			cy.get('> select:eq(1)')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')
            // zipcode
            cy.get('> input:eq(0)')
                .should('be.visible')
				.should('have.attr.name', 'zipcode')
				.should('have.class', 'zipcode')
				.should('not.contain')
				.should('not.have.value')
		});
	});

    it('一般加載 - 正體字', function() {
		cy.get('.test-object-standard-words').within(function() {
            // 縣市
			cy.get('.county')
				.should('not.contain', '台')
                .should('contain', '臺')
		});
	});

	it('縣市選單選擇', function() {
        // *** 實例方式加載 - 無zipcode ***
		cy.get('.test-object-normal').within(function() {
			cy.get('.county').select('台北市').should('have.value', '台北市')
				.find('option:selected').should('contain', '台北市')
			cy.get('.district').select('中正區').should('have.value', '中正區')
				.find('option:selected').should('contain', '中正區')
            cy.get('.zipcode').should('not.exist')

			cy.get('.county').select('澎湖縣').should('have.value', '澎湖縣')
				.find('option:selected').should('contain', '澎湖縣')
			cy.get('.district').select('馬公市').should('have.value', '馬公市')
				.find('option:selected').should('contain', '馬公市')
		});

        // *** 實例方式加載 - 有zipcode ***
        cy.get('.test-object-has-zipcode').within(function() {
            cy.get('.county').select('台北市').should('have.value', '台北市')
				.find('option:selected').should('contain', '台北市')
			cy.get('.district').select('中正區').should('have.value', '中正區')
				.find('option:selected').should('contain', '中正區')
			cy.get('.zipcode').should('have.value', '100')

			cy.get('.county').select('澎湖縣').should('have.value', '澎湖縣')
				.find('option:selected').should('contain', '澎湖縣')
			cy.get('.district').select('馬公市').should('have.value', '馬公市')
				.find('option:selected').should('contain', '馬公市')
			cy.get('.zipcode').should('have.value', '880')
		});
	});

	it('選擇沒有值的縣市選項時，區域及郵遞區號應該重置', function() {
        // *** 實例方式加載 - 無zipcode ***
		cy.get('.test-object-normal').within(function() {
			cy.get('.county').select('選擇縣市').should('have.value', '')
			cy.get('.district').should('have.value', '').should('have.text', '選擇區域')
            cy.get('.zipcode').should('not.exist')
		});

        // *** 實例方式加載 - 有zipcode ***
        cy.get('.test-object-has-zipcode').within(function() {
            cy.get('.county').select('選擇縣市').should('have.value', '')
			cy.get('.district').should('have.value', '').should('have.text', '選擇區域')
			cy.get('.zipcode').should('not.contain').should('not.have.value')
		});
	});

	it('重新選擇縣市，區域及郵遞區號應該重置', function() {
        // *** 實例方式加載 - 無zipcode ***
		cy.get('.test-object-normal').within(function() {
            cy.get('.county').select('台北市')
			cy.get('.district').select('中正區')
			cy.get('.county').select('新北市')
			cy.get('.district').should('have.value', '').contains('選擇區域')
			cy.get('.zipcode').should('not.exist')
		});

        // *** 實例方式加載 - 有zipcode ***
        cy.get('.test-object-has-zipcode').within(function() {
			cy.get('.county').select('台北市')
			cy.get('.district').select('中正區')
			cy.get('.county').select('新北市')
			cy.get('.district').should('have.value', '').contains('選擇區域')
			cy.get('.zipcode').should('not.contain').should('not.have.value')
		});
	});

    it('顯示部分縣市-台北市、台中市、高雄市', function() {
		cy.get('.test-object-limit-counties').within(function() {
			cy.get('.county')
				.should('contain', '選擇縣市')
				.should('contain', '台北市')
				.should('contain', '台中市')
				.should('contain', '高雄市')
				.should('not.contain', '屏東縣')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')

			cy.get('.district')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')

            cy.get('.county').select('台北市')
            cy.get('.district option')
                .should('have.length', 13) // 應有12個區域選項加上空白選項
		});
	});

    it('顯示部分縣市及區域-台北市(大同區、萬華區)、台中市(西區)、高雄市(不設限)', function() {
		cy.get('.test-object-limit-counties-and-district').within(function() {
			cy.get('.county')
				.should('contain', '選擇縣市')
				.should('contain', '台北市')
				.should('contain', '台中市')
				.should('contain', '嘉義市')
				.should('not.contain', '屏東縣')
				.should('have.attr.name', 'county')
				.should('have.class', 'county')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇縣市')

			cy.get('.district')
				.should('have.attr.name', 'district')
				.should('have.class', 'district')
				.should('have.value', '')
				.find('option:selected').should('contain', '選擇區域')

		    cy.get('.county').select('台北市')
            cy.get('.district')
                .should('contain', '大同區')
                .should('contain', '萬華區')

            cy.get('.county').select('台中市')
            cy.get('.district')
                .should('not.contain', '大同區')
                .should('contain', '西區')

            cy.get('.county').select('嘉義市')
            cy.get('.district option')
                .should('have.length', 3) // 應有兩個區域選項加上空白選項
		});
	});

});
