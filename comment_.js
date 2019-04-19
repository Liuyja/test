function addLoadEvent(func)
{
var oldonload = window.onload; //得到上一个onload事件的函数
   if(typeof window.onload != 'function')
  {
	 window.onload = func;
  }
  else
  {
	  window.onload = function()
	   {
		   oldonload(); //调用之前覆盖的onload事件的函数
		  func(); //调用当前事件函数
	   }
   }
}
function getMessage(){
   var btn = document.getElementById("btn1");
  var message = document.getElementById("message");
  var name = document.getElementById("name");
  var nameValue = "";
   var messageValue = "";

   name.onfocus = function(){
	  name.value="";
   }
message.onfocus = function(){
	   message.value="";
  }
   btn.onclick = function(){
	   messageValue =  message.value || "yaya橙汁"; //设置默认值
	   nameValue = name.value || "yaya";
	   var msgList = document.getElementById("messageList");
	   var msgDiv = document.createElement("div");
	  var msgTxt = document.createTextNode(nameValue+"说："+messageValue);
	   msgDiv.appendChild(msgTxt);
	   msgList.appendChild(msgDiv);
   }
}
addLoadEvent(getMessage);