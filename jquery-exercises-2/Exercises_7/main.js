$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("ol li:nth-child(1)").on("click",function () { 
        $('#content').css("font-size","120%");
     });
    
    /* On click: Decrease the font size (80%) */
    $("ol li:nth-child(2)").on("click",function () { 
        $('#content').css("font-size","80%");
     });
    
    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(3)").on("click",function () { 
        $('.green').toggleClass("bold");
     });

     /* On click: Bold or normalize the green words */
    /* $("#instructions li:eq(2)").on("click",function () { 
        $('.green').toggleClass("font-weight-normal");
     });
     */
    
    /* On click: underline or normalize the words in red */
    $("ol li:nth-child(4)").on("click",function () {
        $('.red').css("text-decoration","underline");
    });
    
    /* On click: Replace the logo with another image */

     $("ol li:nth-child(5)").hover(function() {
        $("img").attr("src","images/koala.jpg");
    }, function() {
        $("img").attr("src","images/jquery-logo.png");
    });
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    
    $("a").hover(function(event) {
        $(this).attr("title", event.target.href);
    });
   

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

    $("ol li:nth-child(7)").click(function() {
        $("h2").first().prepend("Chapter 1: ");
        $("h2:eq(1)").prepend("Chapter 2: ");
    });    

});