// Write your solution here
$("#name").focusin(function(){
    $(this).css("border","3px solid green"); // I used 3px instead of 1px because It was not visible
  });
  $("#name").focusout(function(){
    $(this).css("border","1px solid red");
  });


  $("#first_name").focusin(function(){
    $(this).css("border","3px solid green"); // I used 3px instead of 1px because It was not visible
  });
  $("#first_name").focusout(function(){
    $(this).css("border","1px solid red");
  });