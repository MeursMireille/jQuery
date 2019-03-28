
let count = 0;

$(".btn_1").on('click', function() {
    count++;
    $('.text').html('you pressed:' + count);
})



$(".btn_2").on('click', function() {
    count--;
    $('.text').html('you pressed:' + count);
})