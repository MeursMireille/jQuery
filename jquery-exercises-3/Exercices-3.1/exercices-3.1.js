
let count = 0;

  $(".btn").on('click', function() {
      count++;
      $('.text').html('you pressed:' + count);
  })
  