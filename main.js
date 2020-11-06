$(document).ready(function(){
  //滑動離開頂部時就取消at_top的class
  $(window).scroll(function(e){
    e.preventDefault();
    if($(window).scrollTop()<=0){
      $(".explore,.navbar").addClass("at_top");
    }else{
      $(".explore,.navbar").removeClass("at_top");
    }
  });
});











//緩慢滑動
// $(document).on('click', 'a', function(event){
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });