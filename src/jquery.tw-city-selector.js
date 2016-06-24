/*
|--------------------------------------------------------------------------
| Use
|--------------------------------------------------------------------------
|   $('.wrapper').tw_citySelector('.county', '.district', '.zipcode');
*/

;(function($) {
    'use strict';
    
    $.fn.tw_citySelector = function(selectFirst, selectSecond, selectThird) {

        // ----------------------------------------
        // Data
        // ----------------------------------------

        var data = require('./data.js');
        var country = data.country;
        var district = data.district;


        // ----------------------------------------
        // Settings
        // ----------------------------------------

        var $wrapper = this,
            $selectFirst = $(selectFirst, $wrapper),
            $selectSecond = $(selectSecond, $wrapper),
            $selectThird = $(selectThird, $wrapper),
            selectFirstPrepend = '<option value="">選擇縣市</option>',
            selectSecondPrepend = '<option value="">---</option>',
            selectCustom = $selectFirst.data('custom');


        // ----------------------------------------
        // Constructor
        // ----------------------------------------

        function Selector() {
            this.init();
            this.countryChange();
            this.districtChange();
            this.selected($selectFirst);
            this.selected($selectSecond);
        }


        // ----------------------------------------
        // Init
        // ----------------------------------------
        
        Selector.prototype.init = function() {
            // 縣市選項內容
            // ==========
            var firstSelectOption = selectFirstPrepend,
                custom = false;
            
            if (selectCustom !== undefined) {
            // 若指定顯示縣市
                custom = selectCustom.replace(/\s/g, ''); // 去除空白字元
                custom = custom.split(','); // 轉陣列                
            }

            for (var i = 0, j = country.length; i < j; i++) {

                if ( typeof custom === 'object' && $.inArray( country[i], custom ) === -1 ) {
                    // 因為ie8不支援 Array indexOf() Method，使用 $.inArray 替代處理
                    continue;
                }

                // <option value="台北市" data-order="0">台北市</option>
                firstSelectOption += '<option value="'+ country[i] +'" data-order="'+ i +'">'+ country[i] +'</option>';
            }

            $selectFirst.prepend(firstSelectOption);

            // 區域選項內容
            // ==========
            $selectSecond.prepend(selectSecondPrepend);
        };


        // ----------------------------------------
        // countryChange
        // ----------------------------------------
        
        Selector.prototype.countryChange = function() {
            var self = this;

            // 縣市選單動作
            // ==========
            $selectFirst.change(function() {
                var order = $('option:selected', this).data('order');

                if (order !== undefined) { // 選擇有值的選項
                    $selectSecond.prepend('<option value="">選擇區域</option>');
                    $selectSecond.find('option:gt(0)').remove();
                    
                    // 產生第二選單的選項內容
                    for(var i = 0, j = district[order][0].length - 1; i <= j; i++) {
                        // <option value="中正區" data-zip="100">中正區</option>
                        $selectSecond.append('<option value="'+ district[order][0][i] +'" data-zip="'+ district[order][1][i] +'">'+ district[order][0][i] +'</option>');
                    }

                    $selectSecond.find('option:eq(0)').attr('selected', 'selected');
                } else {
                    self.reset();
                }

                $selectThird.val('');
            });
        };


        // ----------------------------------------
        // districtChange
        // ----------------------------------------
        
        Selector.prototype.districtChange = function() {
            // 區域選單動作 
            $selectSecond.on('change', function() {
                var zip = $('option:selected', this).data('zip');
                $selectThird.val(zip);
            });
        };


        // ----------------------------------------
        // selected
        // ----------------------------------------
        
        Selector.prototype.selected = function($ele) {
            // 選單選定
            // ==========
            var selected = $ele.data('selected');
            
            if (selected !== undefined) {
                $ele.val(selected).trigger('change');
                return;
            }
        };


        // ----------------------------------------
        // reset
        // ----------------------------------------
        
        Selector.prototype.reset = function() {
            // 回復預設
            $selectSecond.prepend(selectSecondPrepend);
            $selectSecond.find('option:gt(0)').remove();
        };


        // ----------------------------------------
        // Handler
        // ----------------------------------------

        this.each(function() {
            this.dkSelector = new Selector();
        });

        return this;

    };

})(jQuery);