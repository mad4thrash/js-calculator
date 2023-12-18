$(document).ready(function() {
    let lastOpexInput = false;
    let complete = false;
$('.number').click(function() {
    let number = $(this).text();
    if (lastOpexInput) {
        $('#display').text(number);
        lastOpexInput = false;
    } else if (complete) {
        $('#display').text(number);
$('#formula').text("");
        complete = false;
    }
    else {
        $('#display').text($('#display').text() + number);
}
$('#formula').text($('#formula').text() + number);
});
$('.opex').click(function() {
    let operator = $(this).text();
    $('#display').text(operator);$('#formula').text ($('#formula').text() + " " + operator + " ");
    lastOpexInput = true;
});
$('#equals').click(function() {
    let result = eval($('#formula').text());$('#formula').text(result);
    $('#display').text(result);
    complete = true;
});
$('#clear').click(function() {
    $('#formula').text("");
    $('#display').text("");
});
});