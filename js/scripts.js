$(document).ready(function() {
  $(".clickable").click(function() {
    $("#js-showing").toggle();
    $("#js-hidden").toggle();
  });
});




$(document).ready(function() {   
  $("h1").click(function() {     
    $("#definition").show(); 
    });    
  $("#definition").click(function() {       
    $("#definition").toggle();      
    }); 
  });