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

  //平滑滑動到特定段落
  // $(document).on('click', 'a', function(e) {
  //     e.preventDefault();
  //     var target = $(this).attr("href");
  //     $('html, body').animate({
  //         scrollTop: $(target).offset().top
  //     }, 500);
  // });

  //vue監看物件
  var vm = new Vue({
    el: "#app",
    data: {
      works: []
    },
    mounted: function(){
      var vobj=this;
      $.ajax({
        url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
        success: function(res){
          vobj.works=JSON.parse(res);
        }
      });
    }
    
  });

});


