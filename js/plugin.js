


$(document).ready(function () {
    // show  color option on select gear //
	
	$(".gear-check").click(function () {
 	   $(".color-option").fadeToggle();
	});
    // nice scrol //
    $("html").niceScroll();
    // change theme color on click //
    var colorLi = $(".color-option ul li");
    
colorLi
.eq(0).css("backgroundColor","#ae57b5").end()
.eq(1).css("backgroundColor","#16901b").end()
.eq(2).css("backgroundColor","#bd8e12").end()
.eq(3).css("backgroundColor","#d02222").end()
.eq(4).css("backgroundColor","#797171");
    
colorLi.click(function(){
$("link[href*='theme']").
attr("href", $(this).attr("data-value"));
});

    
    
    

});


