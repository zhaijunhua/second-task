window.onload = function(){

 var on = document.getElementById("puton");
 var oBtn = document.getElementById("get");
 var sch = document.getElementById("school_1");
 var Ul = document.createElement("ul");
 sch.appendChild(Ul);
 oBtn.onclick = function(){
  var sVal = on.value;
  var oli = document.createElement("li");
  oli.innerHTML = sVal + " <span>删除</span>";
  var oli1 = Ul.getElementsByTagName("li");
  if(oli1.length>0){
   Ul.insertBefore(oli,oli1[0]);
  }else{
   Ul.appendChild(oli);
  }
  on.value='';

   var oSpan = document.getElementsByTagName("span");
   for(var i=0; i<oSpan.length; i++){
    oSpan[i].onclick = function(){
     Ul.removeChild(this.parentNode);
    }
   }
 }
} 