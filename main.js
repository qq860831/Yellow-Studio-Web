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

  //緩慢滑動
  $(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });


  //滑鼠移動時觸發的事件
  $(window).mousemove(function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  //計算相對區域的位置
   var x = pagex-$("section#section_about").offset().left;
   var y = pagey-$("section#section_about").offset().top;



   

  //更新一些移動景物的位置
  $(".mountain").css("transform","translateX("+(x/-20+50)+"px)")
  });


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
