(function () {
	function A(){
		//check the localstorage.username
		this.checkUserName=function(){
			if(!localStorage.user_name){
               
			}
			return this;
		}
	}
	return new A()
})()
.checkUserName()
