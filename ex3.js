$(function () {
    console.log('ready');

    $('#class1').click(function () {
        console.log('click');


        //  $('.home').css('backgroundColor', '#D1B3C4');
        $('.classDetails').toggleClass('hide');
        $('.class').toggleClass('hide');
        return false;
    })



    $('#limbo1').click(function () {
        console.log('click');

        // $('.limbo').css('backgroundColor', '#BBC7A4');
        $('.limbo').toggleClass('hide');
        $('.limboDetails').toggleClass('hide');
        return false;



    })

    $('#tried1').click(function () {
        console.log('click');

        //$('.tried').css('backgroundColor', '#ABB4CC');
        $('.tried').toggleClass('hide');
        $('.triedDetails').toggleClass('hide');
        return false;
    })

    $('#fun1').click(function () {
        console.log('click');

        // $('.campus').css('backgroundColor', '#A9C6CF');
        $('.funDetails').toggleClass('hide');
        $('.fun').toggleClass('hide');

        return false;
    })


    $('.tip').hide();

    $('#class1').hover(function () {
        $('#classText').show();
    }, function () {
        $('#classText').hide();
    });

    $('#limbo1').hover(function () {
        $('#limboText').show();
    }, function () {
        $('#limboText').hide();
    });

    $('#tried1').hover(function () {
        $('#triedText').show();
    }, function () {
        $('#triedText').hide();
    });

    $('#fun1').hover(function () {
        $('#funText').show();
    }, function () {
        $('#funText').hide();
    });

    //close functions
});