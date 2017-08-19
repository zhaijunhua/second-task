//不能的呼入字母数字字符
		

		window.onload=function(){
			put=document.getElementById('put');
			get=document.getElementById('get');
			get.onclick=function(){
				var reg=/[^\u4E00-\u9FA5]/g;
				if(reg.test(put.value)){
					alert("输入错误请重新输入");
				}
				
			}
		}






/*

/[^\u4E00-\u9FA5]/g; 只能输入文字
在最后写完，最开始可以跳出判断语句，后面就出现了问题
*/
/*
put=document.getElementById('put');
get=document.getElementById('get');
var reg=/[^\u4E00-\u9FA5]/g;
	get.onclick=function submit(){
           
	       if(put.value!=reg)
	{alert("输入错误请重新输入");}
}