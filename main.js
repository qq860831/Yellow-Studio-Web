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

  //滑鼠移動時觸發的事件
  $(window).mousemove(function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;

  //更新一些移動景物的位置
  $(".mountain").css("transform","translateX("+(x/-20+50)+"px)")
});



 // 平滑滑動到特定段落(效果無法顯示)
  // $(document).on('click', 'a', function(e) {
  //     e.preventDefault();
  //     var target = $(this).attr("href");
  //     $('html, body').animate({
  //         scrollTop: $(target).offset().top
  //     }, 500);
  // });

  //vue監看物件
  // var vm = new Vue({
  //   el: "#app",
  //   data: {
  //     works: []
  //   },
  //   mounted: function(){
  //     var vobj=this;
  //     $.ajax({
  //       url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
  //       success: function(res){
  //         vobj.works=JSON.parse(res);
  //       }
  //     });
  //   }  
  // });