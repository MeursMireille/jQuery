


let number = Math.floor(Math.random()* 100)+1;
console.log(number);
let trys = 0;

$(".btn_1").click(function(){
let useNum = Number($('#gokker').val())
console.log(useNum);
trys++;
    if (useNum === number) {
        $('.hint').html(useNum + "  That is the right number");
        if (alert( "You have gambled this many times: "+ trys)){

        }
        else
        {
        window.location.reload();
    }

    } else if (number > useNum) {
    $('.hint').html(useNum + "  A little bit more");
    } else {
    $('.hint').html(useNum + "  Less");
    } 
});

$('#gokker').keypress(function (e) { 
    let key = e.which;
    if (key === 13) {
        $('.btn_1').click();
        return false
    }
    
});

