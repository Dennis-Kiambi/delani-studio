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



});



