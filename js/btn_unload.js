(function(){
	function setBtn(a){
		this.btn=a;
		//退出按钮
		this.siginout=function(){
			function setFn(){
		   localStorage.clear();
		   window.location.href="social_job.html";
		   document.getElementById("btn_siginout").style.display="none";
		   document.getElementById("book_png_1").style.display="block";
		    document.getElementById("book_png_1").style.opacity=1;
			}
			if (document.addEventListener) {
				this.btn.addEventListener("click",setFn,false);
			} else if(document.attachEvent){
				this.btn.attachEvent("onclick",setFn)
			}else{
				this.btn.onclick=setFn;
			}
			return this;
		};
		//未登录动画
       this.animation=function(){
       	document.onreadystatechange=function(){
       		if (document.readyState==="complete") {
       			setTimeout(function(){
       	  document.getElementById("unload").getElementsByTagName("img")[0].style.opacity=1;
       	  document.getElementById("unload").getElementsByTagName("img")[0].style.marginTop=0+"px";
       			},400)
       	
       	setTimeout(function(){
       	document.getElementById("unload").getElementsByTagName("span")[0].style.opacity=1;
       	document.getElementById("unload").getElementsByTagName("span")[0].style.marginLeft=80+"px";
       	},700)
       		}
       	}
       return this;
       } 
	};
	return new setBtn(document.getElementById("btn_siginout"));
})().siginout().animation();
