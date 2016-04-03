(function () {
	function A () {
		//page loaded
		this.load=function(a){
			a();
			return this;
		}
		
		//保存btn
		this.save=function(l){
			function getSex () {
				var radios=opt.nn('sex');
				for(var i=0;i<radios.length;i++){
					if(radios[i].checked){
						return radios[i].value;
					}
				}
			}
			//change info success
			function successChange () {
				l--;
				opt.id("count").innerHTML=l;
				if(l<=0){
					window.location.href="../";
				}
			setTimeout(successChange,1000);
			}
            function handleSave(){
            var user_expirence=opt.id("work_expirence").value===""?localStorage.user_expirence:opt.id("work_expirence").value,
            user_sex=getSex();
			var user_info={
            	"exprince":user_expirence,
            	"sex":user_sex,
            	"user_head_photo":localStorage.user_photo,
            	"user_name":localStorage.user_name
            }
			function checkInfo () {
				if(user_info.exprince.length>30){
					sl.id("worning").innerHTML="亲，不要超过30个字哦！"+"你已经超过"+String(user_info.exprince.length-30)+"个字啦";
					return !1;
				}else{
					return !0;
				}
			
			}
			if(checkInfo()){
				setAjax (user_info);
			}
            }
            
            opt.id("btn_save").addEventListener('click',handleSave,false);
            //ajax封装
            function setAjax (a) {
            	var xmlhttp;
            	if(window.XMLHttpRequest){
            		xmlhttp=new XMLHttpRequest();
            	}else if(window.ActiveXObject){
            		xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
            	}else{
            		alert('you broswer does not support ajax');
            	}
            	xmlhttp.open('POST','../php/changeInfo/change_user_info.php',true);
            	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf8");
            	xmlhttp.send(setJson (a));
            	xmlhttp.onreadystatechange=function(){
            		if(xmlhttp.readyState===4&&xmlhttp.status===200){
            			if(xmlhttp.responseText="success"){
            			   var change_success=opt.id("change_success"),btn_save=opt.id("btn_save");
				           change_success.style.top=-400+"px";
				           change_success.style.backgroundColor="rgba(0,0,0,0.7)";
				           btn_save.style.cursor="default";
				           opt.id("btn_save").style.backgroundColor="#AFAFAF";
            				successChange ();
            				opt.id("btn_save").removeEventListener('click',handleSave);
            			}
            		}
            	}
            }
        //将对象拼接成url
        function setJson (a) {
            		var b="";
            		if(typeof a !=="object"){
            			return "type error"
            		}else{
            			for(var i in a){//对象属性为字符串
            				b+=i+"="+a[i]+"&";
            			}
            		}
            		return b;
            	}
			return this;
		}
		
		this.changePhotoFn=function(a,b,c,d){
			function setAjax (f) {
				var xmlhttp;
				if (window.XMLHttpRequest) {
					xmlhttp=new XMLHttpRequest();
				} else if(window.ActiveXObject){
					xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
				}else{
					alert("you broswer does not support ajax");
				}
				
				if(window.FormData){
					var formData=new FormData(opt.id("form_file"));
				}else{
					alert("你的浏览器不支持文件异步上传，请升级你的浏览器到最新版的chrome！")
				}

				xmlhttp.open('POST','../php/file_upload/file_up_load.php',true);
               
                xmlhttp.upload.onprogress=function(e){
                	if(e.lengthComputable){
                		console.log(e.loaded/e.total*100);
                	}
                	
                }
				xmlhttp.onreadystatechange=function(){
					if(xmlhttp.readyState===4&&xmlhttp.status===200){
						console.log("上传成功",xmlhttp.responseText);
					}
				}
				xmlhttp.send(formData);
			}
			
			
			a.onclick=function(){
				d++;
				if(d>21){
					d=21;
					return false;
				}
				opt.tn(opt.id('img_display'),'img')[0]
				.style.transform="scale("+d/10+")";
			};
			b.onclick=function(){
				if(d<=10){
					d=10;
					return false;
				}else{
					d--;
                    opt.tn(opt.id('img_display'),'img')[0].style.transform="scale("+d/10+")";
				}
			};
		    c.onclick=function(){
				setAjax(opt.id("file_img").files[0]);
		     }
			return this;
		}
        this.disabled_select=function(a,b){
        	a.onselectstart=function(){
        		return false;
        	}
        	b.onselectstart=function(){
        		return false;
        	}
        	return this;
        }
        this.fetch_data=function () {
        	var _obj={
        			"0":"huangweidong",
        			"1":25,
        			"2":"工作一年多，但是很富有",
        			length:3
        	},str="huangweidong";
        	opt.id('btnsel').onclick=function () {
        		console.log(ht.apj(_obj));
        		console.log(ht.apj(str,"1"));
        		console.log(ht.isArray());
        	}
        }
	}
	return new A();
})()
.load(function(){
    opt.tn(opt.id('head'),'img')[0].src=localStorage.user_photo;
    opt.id('work_expirence').setAttribute("placeholder",localStorage.user_expirence);
	if(localStorage.user_sex.indexOf("male")>0){
		opt.nn('sex')[0].setAttribute('checked','checked');
	}else{
		opt.nn('sex')[1].setAttribute('checked','checked');
	}
})
.save(5)
.changePhotoFn(opt.id("btn_scale"),opt.id("btn_lessen"),opt.id("btn_submit"),10)
.disabled_select(opt.id("btn_lessen"),opt.id("btn_scale"))
.fetch_data()

