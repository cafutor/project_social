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
			
			
		}
	}
}(window);
