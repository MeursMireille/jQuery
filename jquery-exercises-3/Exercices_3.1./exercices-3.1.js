
let count = 0;
/* let result = i; 

function add() {
    count = count + 1;
    document.getElementById('text').value = count;
  }
  add(); */ 
  $(".btn").on('click', function() {
      count++;
      $('.text').html('you pressed:' + count);
  })
  