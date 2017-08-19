var wrap = document.querySelector(".wrap");      //先获取wrap和箭头
    var after = document.querySelector(".arrow2");
    var before = document.querySelector(".arrow1");
    after.onclick = function () {
      next();
    }
    before.onclick = function () {                  //箭头控制图片
      pre();
    }
    function next() {
      index++;
      if(index > 2){
        index = 0;
      }
      showCurrentDot();
      var newLeft;
      if(wrap.style.left === "-5440px"){
        newLeft = -2720;
      }else{
        newLeft = parseInt(wrap.style.left)-1360;//wrap.style.left是一个字符串
      }
      wrap.style.left = newLeft + "px";
    }
    function pre() {
      index--;
      if(index < 0){
        index = 2;
      }
      showCurrentDot();
      var newLeft;
      if(wrap.style.left === "0px"){
        newLeft = -2720;
      }else{
        newLeft = parseInt(wrap.style.left)+1360;
      }
      wrap.style.left = newLeft + "px";
    }

//自动轮播，设置时间间隔为2000毫秒滚动一次

    var timer = null;
    function autoPlay () {
      timer = setInterval(function () {
        next();
      },2000);
    }
   /* autoPlay();*/ //autoPlay();不注释会导致，鼠标放在图片上方时，轮播不会停止
 
    var box = document.querySelector(".box");
    box.onmouseenter = function () {
      clearInterval(timer);
    }
    box.onmouseleave = function () {
      autoPlay();  
    }
 
    var index = 0;
    var dot= document.getElementsByTagName("span");   //小圆点按钮控制图片
    function showCurrentDot () {
      for(var i = 0, len = dot.length; i < len; i++){
        dot[i].className = "";
      }
      dot[index].className = "begin";
    }
 
    for (var i = 0, len = dot.length; i < len; i++){
      (function(i){
        dot[i].onclick = function () {
          var dis = index - i;
          if(index == 2 && parseInt(wrap.style.left)!==-4080){
            dis = dis - 3;   
          }
          //和使用previous和next相同，在最开始的照片5和最终的照片1
          if(index == 0 && parseInt(wrap.style.left)!== -1360){
            dis = 3 + dis;
          }
          wrap.style.left = (parseInt(wrap.style.left) + dis * 1360)+"px";
          index = i;
          showCurrentDot();
        }
      })(i);      
    }
//用源生代码如何在百分比的情况下将多余的图片隐藏？？？
//如何实现华东效果，而不是直接将照片换掉
//


    
   




   

    