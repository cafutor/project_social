!function (_a) {
	_a.opt={
		id:function(a){
			if(typeof a !=="string"){
				throw new Error("arguments[0] must be a string")
			}else{
				return document.getElementById(a);
			}
		},
		cn:function(a,b){
			if(arguments.length<2){
				throw new Error('two params needed');
			}
			if(typeof b !=="string"){
				throw new Error('argumens[1] must be a string');
			}
		    return a.getElementsByClassName(b);
		},
		tn:function(a,b){
			if(arguments.length<2){
				throw new Error('two params needed');
			}
			if(typeof b !=="string"){
				throw new Error('argumens[1] must be a string');
			}
			return a.getElementsByTagName(b);
		},
		nn:function(a){
			if(typeof a !=='string'){
				throw new Error('arguments[0] must be a string');
			}
			return document.getElementsByName(a);
		}
		
	};
	_a.ht={
		apj:function(a,b){
			if(arguments.length<2){
				throw new Error("method apj two parameters to be needed");
			}
			if(a instanceof Array===false){
				throw new Error("arguments[0] must be an Array or an array object");
				
			}
			if(typeof b !=='string' ){
			    throw new Error("arguments[1] must be a string");
			}
			return Array.prototype.join.call(a,b);
		},
		isArray:function(a){
				return Array.isArray(a);
		},
	    radioValue:function (a) {
	    	if(!a.length||typeof a !=='object')throw new Error('method radioValue arguments must be an objArray');
	    	for(var i =0;i<a.length;i++){
	    		if(a[i].checked)return a[i].value;
	    	}
	    },
	    objUrl:function (a) {
	    	        var b="";
            		if(typeof a !=="object")throw new Error("type error");
            			for(var i in a){
            				b+=i+"="+a[i]+"&";
            			}
            		return b.substr(0,b.length-1);
	    },
	    ajax:function (a) {
	    	var _a,_l=a.method.toLowerCase(),_b='?';
	    	if(window.XMLHttpRequest){
	    		_a=new XMLHttpRequest();
	    	}else if(window.ActiveXObject){
	    		_a=new ActiveXObject('Microsoft.XMLHTTP');
	    	};
	    	
	    	if(_l==='post'){
	    	_a.open('POST',a.dir,a.async);
	    	_a.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf8');
	    	if(a.data){
	    		_a.send(this.objUrl(a.data));
	    	}else{
	    	_a.send();
	    	}
	    	_a.onreadystatechange=function () {
	    		if(_a.readyState===4&&_a.status===200&&a.cb)a.cb(_a.responseText);
	    	}
	    	}
	    	
	    	if(_l==='get'){
	    	var _c=a.data===undefined?"":_b.concat(this.objUrl(a.data));
	    	_a.open(a.method,a.dir+_c,a.async);
	    	_a.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf8');
	    	_a.onreadystatechange=function () {
	    		if(_a.readyState===4&&_a.status===200&&a.cb)a.cb(_a.responseText);
	    	}
	    	_a.send();
	    	}
	    }
	}
}(window);