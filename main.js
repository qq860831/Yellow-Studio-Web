$(document).ready(function(){
    });

//滑動離開頂部時就取消at_top的class
$(window).scroll(function(e){
    if ($(window).scrollTop()<=0)
      $(".navbar,.explore").addClass("at_top");
    else
      $(".navbar,.explore").removeClass("at_top");
  });