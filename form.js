$(function() {

    var large = '<label class="container">Debit or Credit Card<input type="radio" checked="checked" name="radio"><div class="fields fields-3-column-fixed"><label class="field"><span class="field__label" for="month">Month</span><select class="field__input" id="month"><option value=""></option></select></label><label class="field"><span class="field__label" for="year">Year</span><select class="field__input" id="year"><option value=""></option></select></label><label class="field"><span class="field__label" for="cvv">CVV</span><input class="field__input" type="text" id="cvv" /></label></div><span class="checkmark"></span></label><label class="container">PayPal<input type="radio" name="radio"><span class="checkmark"></span></label><a class="button" href="#">Complete Order</a>';
    $("#continueBttn").click(function() {
        $("#payment").append(large);
    });

    // https://stackoverflow.com/questions/10759426/appending-large-block-of-html-with-append/10759584

});