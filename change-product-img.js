$(function() {

    for (let i = 0; i < 4; i++) {
        let $img = '#img' + i;
        let $displayedImg = '#mainImg';
        let $imgSrc = "img/ring-2-" + i + ".jpg";
        console.log($imgSrc);



        $($img).click(
            function() {
                $($displayedImg).prop("src", $imgSrc);
            });
    }

    // https://stackoverflow.com/questions/27170835/how-to-get-value-from-input-element-as-a-number-in-decimal/46638109
    let $input = $('#quantityInput');
    let $incrBttn = $('#incrBttn');
    let $decBttn = $('#decBttn');
    $($incrBttn).click(function() {
        let $inputVal = parseInt($input.val());
        $input.val($inputVal + 1);

    });


    $($decBttn).click(function() {
        let $inputVal = parseInt($input.val());
        if ($inputVal >= 1) {
            $input.val($inputVal - 1);
        }

    });


});