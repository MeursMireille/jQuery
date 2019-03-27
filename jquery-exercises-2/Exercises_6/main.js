// Write your solution here

 $("#green").hover(function () {
        $("p").css("color","green"); // over  
     }, function () {
       $("p").css("color","black");  // out
     }
 );

 $("#red").hover(function () {
    $("p").css("color","red"); // over  
 }, function () {
   $("p").css("color","black");  // out
 }
);

$("#blue").hover(function () {
    $("p").css("color","blue"); // over  
 }, function () {
   $("p").css("color","black");  // out
 }
);