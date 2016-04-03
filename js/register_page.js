(function () {
	function A () {
		this.time_jumping=function(){
			var count_span=document.getElementById("register").getElementsByTagName("span")[1],a=10;
			function time_count () {
				a--;
				var b=setTimeout(time_count,1000);
				count_span.innerHTML=a;
				if(a<=0){
					clearTimeout(b);
					window.location.href="../";
					
				}
			}
			document.onreadystatechange=function(){
				if(document.readyState==="complete"){
					time_count();
				}
			}
		}
	}
	return new A()
})()
.time_jumping()
