$(document).ready(function () {
    $('#description1').hide();
    $('#description2').hide();
    $('#description3').hide();

    $('#designing').on('click', function () {
        $('#designing').hide();
        $('#description1').show();
    });

    $('#description1').on('click', function () {
        $('#description1').hide();
        $('#designing').show();
    });

    $('#development').on('click', function () {
        $('#development').hide();
        $('#description2').show();
    });
    $('#description2').on('click', function () {
        $('#description2').hide();
        $('#development').show();
    });

    $('#product').on('click', function () {
        $('#product').hide();
        $('#description3').show();
    });
    $('#description3').on('click', function () {
        $('#description3').hide();
        $('#product').show();
    });

    $('.card-img-top').mousemove(function (e) {
        let hovertext = $(this).attr('alt');
        $('#hoverdiv').text(hovertext).show();
        $('#hoverdiv').css({ left: e.pageX, top: e.pageY });
    }).mouseout(function () {
        $('#hoverdiv').hide();
    });

    $('#mc-embedded-subscribe-form').submit(function () {
        let thanks = $('#mce-FNAME').val();
        alert('Thank you,  ' + thanks + '. Your feedback has been received and is much appreciated.');
    });

});



