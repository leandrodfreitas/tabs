$(document).ready(function(){
   
   $(".nav-tabs li").click(function(){
      $(".nav-tabs li").removeClass("active");
      $(this).addClass("active");
   });

   $(".nav-tabs li a").click(function(){
      $(".tab-panel.active").removeClass("active");
      var idAba = $(this).attr("href");
      $(idAba).addClass("active");            
   });
   
});