$(function() {

    // https://api.jquery.com/hover/
    // https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery

    for (let i = 1; i < 9; i++) {
        let $ringContainer = '#ring' + i;
        let $ringImg = '#ringImg' + i;
        let $ringImga = "img/ring-" + i + "-a.JPG";
        let $ringImgb = "img/ring-" + i + "-b.JPG";


        console.log($ringImg);
        // '#ring1-img'
        $($ringContainer).hover(
            function() {
                $($ringImg).prop("src", $ringImga);
            },
            function() {
                $($ringImg).prop("src", $ringImgb);
            });
    }

    // $('#ring1').hover(
    //     function() {
    //         $('#ringImg1').prop("src", "img/ring-1-a.JPG");
    //     },
    //     function() {
    //         $('#ringImg1').prop("src", "img/ring-1-b.JPG");
    //     });



});