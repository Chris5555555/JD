	
	var sea_txt = $id("sea_txt");
	var sea_list_box = $id("sea_list_box");
	var sea_list = $id("sea_list");
	var sea_close = $id("sea_close");
	
		sea_txt.onkeyup=function(){
			var txt = sea_txt.value;
			var oScript = document.createElement("script");
			document.body.appendChild(oScript);
			oScript.src = " https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+txt+"&cb=fn"
			sea_list_box.style.display = "block";
			if(sea_txt.value=="" || sea_list.innerHTML == ""){
			sea_list_box.style.display = "none";		
	}
		}
		function fn(res){
			
			var arr = res.s;
			var str = "";
			for(var i = 0;i < arr.length;i++){
			str +=`<li><p>${arr[i]}</p><span>约${arr[i].length}个结果</span></li>`;
				}
			sea_list.innerHTML = str;
		}
	
	sea_list.onclick = function(e){
	var e =e ||event;
	var target =e.target || e.srcElement;
	if(target.tagName=="LI" || target.tagName=="P" ){
		sea_txt.value = target.children[0].innerHTML;
		sea_list_box.style.display = "none";
	}
}
	var timer = null;
	$id("search").onmouseover=function(){
		clearTimeout(timer);
		sea_list_box.onmouseover=function(e){
		var e = e || event;
		var target = e.target || e.srcElement;
		if(target.tagName=="LI" || target.tagName=="P"){
			clearTimeout(timer);
			}
		}
	}
	
	
	$id("search").onmouseout=function(){
			timer = setTimeout(function(){
		sea_list_box.style.display = "none";
		},2000)	;
		}
		
	
 sea_close.onclick=function(){
 	sea_list_box.style.display = "none";
 }
 
 
 
   var Top = (function(){	
   	function changeTop(){
   			
   			Move($id("link_my"),$id("link_my_ico"));
			Move($id("link_shop"),$id("link_shop_ico"));
 			Move($id("link_ser"),$id("link_ser_ico"));
			Move($id("top_add"),$id("top_add_ico"));
			Move($id("link_nav"),$id("link_nav_ioc"));	
			MoveCar($id("shopCar"),$id("shopCar_ico"));

   	}
   	
   	function Move(obj,obd){	
   			obj.onmouseover=function(){
 				obj.style.background="#fff";
	   			obj.style.border= "1px solid #cccdce";
	   			obj.style.borderBottom=0;
	   			obj.style.paddingBottom="2px";
	   			obd.style.display="block";
		   			obd.onmouseover=function(){
		   			obd.style.display="block";
		   			obj.style.background="#fff";
		   			obj.style.border= "1px solid #cccdce";
		   			obj.style.borderBottom=0;
		   			obj.style.paddingBottom="2px";
		   			}
   			}
   			obj.onmouseout=function(){
   				obj.style.background="#e3e4e5";
				obj.style.border="1px solid #e3e4e5";
				obj.style.paddingBottom=0;
				obd.style.display="none";
				obd.onmouseout=function(){
   					obj.style.background="#e3e4e5";
					obj.style.background="#e3e4e5";
					obj.style.border="1px solid #e3e4e5";
					obj.style.paddingBottom=0;
					obd.style.display="none";
				}
   			}
   	}
   	
  function MoveCar(obj,obd){	
   			obj.onmouseover=function(){
	   			obj.style.border= "1px solid #cccdce";
	   			obj.style.borderBottom=0;
	   			obj.style.paddingBottom="2px";
	   			obd.style.display="block";
	   			obd.onmouseover=function(){
	   			obd.style.display="block";
	   			obj.style.border= "1px solid #cccdce";
	   			obj.style.borderBottom=0;
	   			obj.style.paddingBottom="2px";
	   			}
   			}
   			obj.onmouseout=function(){
				obj.style.border="1px solid #e3e4e5";
				obj.style.paddingBottom=0;
				obd.style.display="none";
				obd.onmouseout=function(){
					obj.style.border="1px solid #e3e4e5";
					obj.style.paddingBottom=0;
					obd.style.display="none";
				}
   			}
   	}
  	function addMove(){
  		var pList = $id("top_add_ico").getElementsByTagName("p");
  		for(var i = 0;i < pList.length;i++){
  			pList[i].index = i;
  			pList[i].onclick=function(){
				for(var j = 0;j < pList.length;j++){
				pList[j].className="";
				}
				this.className="top_add_active";
					$id("top_add_txt").innerHTML=this.innerHTML;
  			}
  		}

  	}
   	return{
   		init:function(){
   			changeTop();
   			addMove();
   		}
   	}
   })()
Top.init();

var banner = (function(){
	
	function Banner(){
		var plist = $id("banner_pic").children;
		var nlist = $id("banner_num").children;
		var index = 0;
		var timer = null;
		timer = setInterval(autoplay,2000);
		function autoplay(){
			index++;
			if(index == nlist.length ){
				index = 0;
			}
			for(var i = 0;i < nlist.length;i++){
			nlist[i].className = "";
			move(plist[i],{"opacity":0});
		}
		nlist[index == nlist.length ? 0 : index].className = "banner_num_active";
		move(plist[index],{"opacity":100});
		}
		$id("banner_pic_box").onmouseover=function(){
			move($id("ban_btn"),{"opacity":100});
		}
		$id("banner_pic_box").onmouseout=function(){
			move($id("ban_btn"),{"opacity":0});
			}
		
		$id("banner_pic").onmouseover=function(){
			clearInterval(timer);
			move($id("ban_btn"),{"opacity":100});
		}
		$id("banner_pic").onmouseout=function(){
			timer=setInterval(autoplay,2000);
			}
		
		for(let i = 0;i < nlist.length;i++){
			nlist[i].onmouseover=function(){
			index = i - 1;
			autoplay();
			clearInterval(timer);
			timer=setInterval(autoplay,2000);
		}
	}
		
		$id("ban_pre").onclick=function(){
			clearInterval(timer);
		for(var i = 0;i < nlist.length;i++){
			nlist[i].className="";
			move(plist[i],{"opacity":0});
		}
		index--;
		if(index==-1){
			index=7;
		}
		nlist[index].className="banner_num_active";
		move(plist[index],{"opacity":100});
		timer=setInterval(autoplay,2000);
		}
	
		
		$id("ban_next").onclick=function(){
			clearInterval(timer);
		for(var i = 0;i < nlist.length;i++){
			nlist[i].className="";
			move(plist[i],{"opacity":0});
		}
		index++;
		if(index==nlist.length){
			index=0;
		}
		nlist[index].className="banner_num_active";
		move(plist[index],{"opacity":100});
		timer=setInterval(autoplay,2000);
		}
		
		$id("banner_roll").onmousemove=function(){
			moveRoll($id("banner_roll_big"),{"width":790},function(){
				$id("banner_roll_close").style.display="block";
			});
			
		}
		$id("banner_roll").onmouseout=function(){
			moveRoll($id("banner_roll_big"),{"width":0})
				$id("banner_roll_close").style.display="none";
			
		}
		$id("banner_roll_close").onclick=function(){
			this.style.display="none";
			moveRoll($id("banner_roll_big"),{"width":0})
		}
	}
	return {
		init:function(){
			Banner();
		}
	}
})()
 banner.init();
 
 var sk = (function(){
 	function Sk(){
		var plist = $id("sk_chn_pic").children;
		var nlist = $id("sk_chn_num").children;
		var index = 0;
		var timer = null;
		timer = setInterval(autoplay,2000);
	function autoplay(){
		index++;
		if(index == plist.length){
			index = 1;
			$id("sk_chn_pic").style.left = 0;
		}
		for(var i = 0;i < nlist.length;i++){
			nlist[i].className = "";
		}
		nlist[index == nlist.length ? 0 : index].className = "sk_active";
		move($id("sk_chn_pic"),{"left":-index*180});
	}
		for(let i = 0;i < nlist.length;i++){
			nlist[i].onmouseover=function(){
			index = i - 1;
			autoplay();
			clearInterval(timer);
			timer=setInterval(autoplay,2000);
		}
	}
		
	
		
}
 	return{
 		init:function(){
 			Sk();
 			
 		}
 	}
 })()
sk.init();

var list = (function(){
	
	function listShow(){
			var num = 28;
			index = 1;
			getAjax("js/sk_list.json",function(msg){
				var arr = JSON.parse(msg);
				var str = "";
				for(var i =(index-1)*num;i < index*num;i++){
					if(i < arr.length){
						str +=`
						
							<div class="list_item " id="list_item_${arr[i].id}">
							<a class="list_item_1k" href="#">
								<div class="list_img">
									<img src="${arr[i].img}"/>
								</div>
								<p class="list_item_name">${arr[i].name}</p>
								<div class="list_item_price">
									<span class=".mod_price list_item_price_new">
										<i>¥</i>
										<span >${arr[i].new}</span>
									</span>
									<span class=".mod_price list_item_price_origin">
										<i>¥</i>
										<span >${arr[i].origin}</span>
									</span>
								</div>
							</a>
						     </div>
						
						`;
					}
				}
				$id("sk_list_box").innerHTML = str;	
			})	
	}
	
	function listPlay(){
		var cur = 0;
		$id("sk_list_pre").onclick=function(){
			cur++;
			console.log(cur);
			if(cur == 5 ){
				cur=0;
//				$id("sk_list_box").style.left=0;
			}
			
			moveRoll($id("sk_list_box"),{"left":-cur*800});
			$id("sk_list_box").style.transformOriginX =-cur*800;
		}
		
		$id("sk_list_next").onclick=function(){
			
			
			cur++;
			console.log(cur)
			if(cur==5){
				cur=0;	
//				$id("sk_list_box").style.left=0;
			}
			
			moveRoll($id("sk_list_box"),{"left":-cur*800});
			$id("sk_list_box").style.transformOriginX =cur*800;
		}
	}
	
	
	return{
		init : function(){
			listShow();
			listPlay();
		}
		
	}
})()
list.init();

var sk_time=(function(){
	
	function Time(){
		var time1 = new  Date("2018/10/2");
	var time2 = new Date("2018/10/1");
	var time = Math.abs((time1.getTime()-time2.getTime())/1000);
	setInterval(ctdtime);
	function ctdtime(){
		var h = zero(Math.floor(time%86400/3600)) ;
		var m = zero(Math.floor(time%86400%3600/60)) ;
		var s = zero(Math.floor(time%86400%3600%60)) ;
		function zero (val) {
			return val<10?"0"+val:val;
		}
		$id("sk_h_time").innerHTML=h;
		$id("sk_m_time").innerHTML=m;
		$id("sk_s_time").innerHTML=s;
	}
	var timer = setInterval(function(){
		time--;
		if(time<=0){
			clearInterval(timer);
		}
	},1000);
	}
	return{
		init:function(){
			Time();
		}
	}
})()
sk_time.init(); 
 
 var enjoy = (function(){
 	function actList(){
 			getAjax("js/enjoy_list.json",function(msg){
				var arr = JSON.parse(msg);
				var str = "";
				for(var i = 0;i < 10;i++){
					var cur = arr[i];
					console.log(cur.src)
					if(i < arr.length){
						
						str +=`
						
							<li class="enjoy_act_item ">
										<a class="enjoy_act_lk" href="#">
											<div class="enjoy_act_img">
												<img src="${cur.src}" title="${cur.tit}"/>
											</div>
										</a>
									</li>
						`;
					}
				}
				$id("enjoy_act_list").innerHTML = str;	
			})
 	}
 	return {
 		init:function(){
 			actList();
 		}
 	}
 })()
enjoy.init();