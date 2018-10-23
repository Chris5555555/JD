function $id(id){
	return document.getElementById(id);
}
function getStyle(obj,attr){
		if(window.getComputedStyle){
			return window.getComputedStyle(obj,null)[attr];
			}else{
			return obj.currentStyle[attr];
		}	
	}
function move(obj,json,callback){
	clearInterval(obj.timer);	
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
				var cur = 0;
		if(attr == "opacity"){
			cur = parseFloat(getStyle(obj,attr))*100;
		}else{
			cur = parseInt(getStyle(obj,attr));
		}
		var speed = (json[attr]-cur)/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(json[attr] != cur){
			flag = false;
		}	
		if(attr == "opacity"){
			obj.style[attr] = (cur+speed)/100;
		}else{
			obj.style[attr] = cur+speed+"px";
		}
		if(flag){
			clearInterval(obj.timer);
			if(callback){
				callback();
				}
			}
		}		
	},30)	
}

