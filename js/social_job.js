function sed_personal_div() {
	//open the first page  then download data frow the database
function getData () {
	$.ajax({
		type:"post",
		url:"php/get_data_max.php",
		async:true,
		success:function(data,stutas){
			var dataarray=eval(decodeURI(data));
			dataarray.sort(function(x,y){return parseInt(x[1])-parseInt(y[1])});
			var jsonnum=dataarray.length;
           //如果用户退出，清除所有localstorage
			if (localStorage.user_name) {
				document.getElementById("unload").style.display="none";
				document.getElementById("submit_msg").style.display="block";
			}
		var data_sort=dataarray;
		function setGetData (inum) {
		var c = 0;
		var container = document.createElement('div');
		var personal_1_pic_div = document.createElement('div');
		var personal_writed_msg_div = document.createElement('div');
		var personal_writed_msg = document.createElement('p');
		var goodplus = document.createElement('div');
		var discuss = document.createElement('div');
		var discussNum = document.createElement('span');
		//设置女性标志
		var femaleDiv=document.createElement('div');
		var femaleImg=document.createElement('img');
		femaleDiv.style.cssText="width: 15px;height: auto; position: absolute;left: 160px;top: 10px;";
		//女性昵称工作经验
		var femaleIdHeader=document.createElement('p');
		var femaleWorkingExperienceHeader=document.createElement('p');
		var femaleId=document.createElement('p');
		var femaleWorkingExperience=document.createElement('p');
		femaleIdHeader.style.cssText="position: absolute;left:190px;top: 16px;font-family: 微软雅黑;color: #f01a75;font-size:medium ;word-break: break-all"
		femaleWorkingExperienceHeader.style.cssText="position: absolute;left: 190px;top: 50px;font-size: medium;font-family: 微软雅黑;color: #f01a75;"
		femaleId.style.cssText="position: absolute;left: 230px;top: 16px;font-family: 微软雅黑;color: #846974;font-size: 2;word-break: break-all";
		femaleWorkingExperience.style.cssText="width:120px; position: absolute;left: 230px;top: 50px;font-size: 2;font-family: 微软雅黑;color: #846974;"
		femaleIdHeader.innerHTML='昵称:';
		femaleWorkingExperienceHeader.innerHTML='经验:';
		femaleId.innerHTML=data_sort[inum][3];
	    femaleWorkingExperience.innerHTML=data_sort[inum][4][1];
		//messagr container 
		user_msg_sended.appendChild(container);
		container.style.cssText = 'width: 1000px;height: 146px;background:url(img/set_msg_bg.png)no-repeat center;position: absolute;';
		if(localStorage.user_name){
			container.style.transition="all 0.05s ease";
		}
		//时间
		var time_p=document.createElement("p");
		time_p.style.cssText="color: black;position: absolute;left:720px ;top: 110px;font-size: 10px;";
		container.appendChild(time_p);
		time_p.innerHTML=data_sort[inum][4][3];
		container.appendChild(personal_1_pic_div);
		//女性标志div
		container.appendChild(femaleDiv);
		femaleDiv.appendChild(femaleImg);
		femaleImg.src=data_sort[inum][4][2];
	//昵称和工作经验
	   container.appendChild(femaleIdHeader);
	   container.appendChild(femaleWorkingExperienceHeader);
	   container.appendChild(femaleId);
		container.appendChild(femaleWorkingExperience);

		personal_1_pic_div.style.cssText = 'width: 150px;height: 141px;position: relative;top: 0px;left: 0px;background-color:white;overflow: hidde;border-radius: 3px 3px 3px 3px/3px 3px 3px 3px;box-shadow: 0 0 4px #4CAE4C;';
		container.appendChild(personal_writed_msg_div);
		personal_writed_msg_div.style.cssText = "width: 450px;height: 100px;position: relative;background-color:;left: 518px;top: -135px;"
		personal_writed_msg_div.appendChild(personal_writed_msg);
		//信息呈现区文字
		personal_writed_msg.innerHTML = data_sort[inum][0]
		personal_writed_msg.style.cssText = "position: absolute;left: 0px;font-family: 微软雅黑;size: a3;padding: 3px;text-indent: 2em;word-break: break-all;";
		var img = document.createElement('img');
		img.src = data_sort[inum][4][0];
		img.style.cssText = 'width: 150px;height:141px;';
		personal_1_pic_div.appendChild(img);
		//点赞
		container.appendChild(goodplus);
		container.appendChild(discussNum);
		discussNum.style.cssText = "position: absolute;left:905px;top: 100px;font-size: 1;font-family: 微软雅黑;color: #f61b78;";
		goodplus.style.cssText = "width: 20px;height: 18px;cursor: pointer;background: url(img/fllow.png);position: absolute;left: 880px;top: 110px;";
		//评论
		container.appendChild(discuss);
		discuss.style.cssText = "width: 20px;height: 22px; cursor: pointer;background: url(img/discuss.png);position: absolute;left:936px;top:110px ;";
		//获得点赞的所有对象
		var fllow = [];
		//评论的所有div
		var discuss = [];
		//将前一个主要容器放入后一个主要容器中
		insertbefore(user_msg_sended, container);
		//得到信息区域操作的对象 用户发送信息的操作对象 点赞对象 评论对象
		var divs = user_msg_sended.getElementsByTagName('div');
		var divs_len = divs.length;
		var arraydiv = [];
		for (var i = 0; i < divs_len; i++) {
			if (divs[i].offsetWidth == 1000) {
				arraydiv.push(divs[i]);
			} else if (divs[i].offsetHeight == 18) {
				fllow.push(divs[i]);
			} else if (divs[i].offsetHeight == 22) {
				discuss.push(divs[i]);
			} else {}
		};
		//点赞
		var spanNum = user_msg_sended.getElementsByTagName('span'); //点赞span
		var spanLen = spanNum.length;
		for (var m = 0; m < spanLen; m++) {
			if (data_sort[spanLen-m-1][2]===0) {
				spanNum[m].innerHTML=""
			} else if(data_sort[spanLen-m-1][2]>0){
				spanNum[m].innerHTML = data_sort[spanLen-m-1][2];
			}else{}
			(function(q) {
				fllow[q].onclick = function() {
					if(!localStorage.user_name){
						alert("请先登录，亲");
					}else{
						$.ajax({
						type:"post",
						url:"php/updatefollownum.php",
						async:true,
						data:{"follow_user_name":localStorage.user_name,"target_name":data_sort[spanLen-q-1][3],"time_when_send":data_sort[spanLen-q-1][1]},
						success:function(data){
							var data_int=parseInt(data);
							console.log(data_int);
							var a=parseInt(spanNum[q].innerHTML);
							if(data_int===0&&data_sort[spanLen-q-1][2]>0){
								    if(spanNum[q].innerHTML===""){
								    	spanNum[q].innerHTML =1;	
								    }else{
								    	spanNum[q].innerHTML =a+1;	
								    }					
							}else if(data_int===0&&parseInt(data_sort[spanLen-q-1][2])===0){
								spanNum[q].innerHTML =parseInt(data_sort[spanLen-q-1][2])+1;
							}else if(data_int===1){
										spanNum[q].innerHTML =a-1>0?a-1:"";
							}else if(data_int===2){
						     	spanNum[q].innerHTML =a+1;
							}else{}
						}
					});				
				}
			}
			})(m)
		}
		//评论功能
		var discussLen = discuss.length;
		var discussArea = document.createElement('div');
		  //评论输入区
		var disscussInput=document.createElement('textarea');
		var discussSedbtn=document.createElement('button');
		discussArea.appendChild(disscussInput);
		discussArea.appendChild(discussSedbtn);
		discussSedbtn.className='btn btn-default'
		container.appendChild(discussArea);
		discussSedbtn.innerHTML='发送';
		discussSedbtn.style.cssText="position: absolute;left: 910px;bottom:10px ;font-family: 微软雅黑;background-color: black;color: white;";
		disscussInput.style.cssText="width: 800px;height: 50px;position: absolute;left: 95px;bottom: 2px;resize: none;";
		discussArea.style.cssText = "width:990px;height:0px;position:absolute;top:146px;left:5px;;background-color:white; transition: all 0.05s ease;overflow: hidden;"
		var discussAreaDivs = [];
		var array_btn=[];
		for (var i = 0; i < divs.length; i++) {
			if (divs[i].offsetWidth == 990) {
				discussAreaDivs.push(divs[i]);
			}
		}
		var discussInputs=document.getElementsByTagName('textarea');
		var discussInputsarray=[];
		for (var discussInputsNum=0;discussInputsNum<discussInputs.length;discussInputsNum++){
			if (discussInputs[discussInputsNum].offsetWidth==800){
				discussInputsarray.push(discussInputs[discussInputsNum])
			}else{
			}
		}
		//点击微博发送按钮，初始化评论回复区
		function  discussInPutsVal() {
			for (var N=0;N<discussInputsarray.length;N++) {
				discussInputsarray[N].value = '';
			}
		}
		
		discussInPutsVal();
		var array_num=[];
		//点击评论按钮
		for (var n = 0; n < discussLen; n++) {
			//添加一个数组
			array_num.push(0);
			(function(discussNum) {
				discuss[discussNum].onclick = function() {
					if (!localStorage.user_name) {
					alert("请先登录，亲！");
					}else{
				var a_data;
				array_num[discussNum]++;
				function show_data () {
				//模拟数据
				var array_data=[{id:"huangweidong",info:"这是什么玩意儿啊"}
				,{id:"huangtao",info:"这是模拟的数据"}
				,{id:"jinyoujiaoer",info:"wokanhaowoziji"}],len=array_data.length;
				function show_discuss (a) {
							var div_conent=document.createElement("div"),dd_info=document.createElement("dd");
							 div_conent.style.cssText="width: 900px;height: 80px;background-color: red;margin: 10px auto;";
							 dd_info.style.cssText="margin-left: 20px;background-color: white;color: black;display: inline-block;";
							 discussAreaDivs[discussNum].appendChild(div_conent);
							 div_conent.appendChild(dd_info);
							 dd_info.innerHTML=a;
							 a_data=discussAreaDivs[discussNum].style.height=120+90*len+"px";
							 A_param.c=len;
				}
				for(var i =0;i<len;i++){
					show_discuss(array_data[i].info)
				}
				//初始化
		        for (var m_num=0;m_num<n;m_num++) {
	                   	  if(m_num!==discussNum){
	                   	  array_num[m_num]=0;
	                   	  remove_data (m_num);
	                   	  }
					      }
				}
				
				function remove_data (a_num) {
					var a=discussAreaDivs[a_num].getElementsByTagName("div").length;
					for (var i =0;i<a;i++) {
						discussAreaDivs[a_num].removeChild(discussAreaDivs[a_num].childNodes[discussAreaDivs[a_num].childNodes.length-1]);
					}
				}
				
				if(1===array_num[discussNum]%2){
					show_data();
				}else{
					remove_data(discussNum);
				}
				
				for (var i = 0; i < discussAreaDivs.length; i++) {
						if (i != discussNum) {
							discussAreaDivs[i].style.height = 0 + 'px';
							discussInputsarray[i].value='';
						}
					}				
				//点击不同评论区的评论按钮
					for (var j = 0; j < arraydiv.length; j++) {
						if (j > discussNum) {
							if(discussAreaDivs[discussNum].offsetHeight>=120){
							arraydiv[j].style.top = 20 * (j +1) + arraydiv[0].offsetHeight * j + 'px';
							}else{
							arraydiv[j].style.top =20 * (j + 1) + arraydiv[0].offsetHeight * j +120+A_param.c*90+ 'px';
							}	
						} else if (j === discussNum) {
							arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
							discussAreaDivs[discussNum].style.height=discussAreaDivs[discussNum].offsetHeight===0?a_data+A_param+"px":0+"px";
							setHeight(discussAreaDivs[discussNum].style.height);
							//send comment
							discussAreaDivs[discussNum].getElementsByTagName("button")[0].onclick=function(){
							var div_conent=document.createElement("div"),dd_info=document.createElement("dd");
							 div_conent.style.cssText="width: 900px;height: 80px;background-color: red;margin: 10px auto;";
							 dd_info.style.cssText="margin-left: 20px;background-color: green;display: inline-block;"
							 discussAreaDivs[discussNum].appendChild(div_conent);
							 div_conent.appendChild(dd_info);
							 dd_info.innerHTML="huangweidong";
							 //height degrese
							 var a_num=discussAreaDivs[discussNum].getElementsByTagName("div").length;
							  discussAreaDivs[discussNum].style.height=120+90*a_num+"px";
							  A_param.b=120+90*a_num+"px";
						     for(var j_num=0;j_num<arraydiv.length;j_num++){
						     	if(j_num>discussNum){
						     		arraydiv[j_num].style.top= 20 * (j_num + 1) + arraydiv[0].offsetHeight * j_num + 120+90*a_num+ 'px';
						     	}
						     }
							setHeight (discussAreaDivs[discussNum].style.height);
							}
						} else if(j<discussNum){
                            arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j  + 'px';
						}
					}
				}
					}
			})(n);
		}
		//点击发送按钮时所有评论区关闭
		for (var k_num = 0; k_num < discussLen; k_num++) {
			discussAreaDivs[k_num].style.height = 0 + 'px';
		}
		//点击按钮用户所发送信息的呈现区域height就增加
	    function setHeight (h_num) {
	    	if(!arguments[0]){
	    		user_msg_sended.style.height = 20 * (arraydiv.length+1)+ arraydiv.length * 146 +200+ 'px';
	    	}else{
	    		user_msg_sended.style.height = 20 * (arraydiv.length+1)+ arraydiv.length * 146 +200+parseInt(h_num)+'px';
	    	}
	    }
		setHeight ();
		for (var j = 0; j < arraydiv.length; j++) {
			arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
		}
    var num_count_0 = document.getElementById('num');
    num_count_0.innerHTML="还能输入"+ parseInt(200)+'个字符';
			}
			for (var inum=0;inum<jsonnum;inum++) {
				setGetData (inum);
			}
		}
	});
}
setTimeout(function (){getData()},200)
var submit_btn_user=document.getElementById("submit_load_data");
if (document.addEventListener) {
	 submit_btn_user.addEventListener("click",submit_get_user_info,false)
} else if(document.attachEvent){
	 submit_btn_user.attachEvent("onclick",submit_get_user_info)
}else{
	 submit_btn_user.onclick = submit_get_user_info;
}
//登陆匹配，获取用户默认头像，工作经验，介绍
function submit_get_user_info () {
	var user_email=document.getElementById("typeemail").value;
	var user_password=document.getElementById("typepassword").value;
	$.ajax({
	type:"post",
	url:"php/matchuserinfo.php",
	async:true,
	dataType:"html",
	data:{"user_submit_email":user_email,"user_submit_password":user_password},
	success:function(data,status){
	var userinfo=eval(decodeURI(data));
	console.log(userinfo);
if (parseInt(userinfo[0])===0) {
	document.getElementById("check_status").style.display="block";
	document.getElementById("check_status").innerHTML="邮箱或密码不正确或不能为空";
} ;
if(parseInt(userinfo[4])===1){
	 document.getElementById("background_blur").style.display="none";
	 var array_element=[document.getElementById("submit_msg"),document.getElementById("banner"),document.getElementById("user-sended-msg")];
	document.getElementById("unload").style.display="none";
		function setSign_later() {
			document.getElementById("signin").style.display="none";
			document.getElementById("signin").style.opacity = 0;
            for (var i=0;i<array_element.length;i++) {
					array_element[i].style.filter="blur(0px)";
					array_element[i].style.webkitFilter="blur(0px)";
					array_element[i].style.mozFilter="blur(0px)";
					array_element[i].style.msFilter="blur(0px)";
				}
			document.getElementById("book_png_1").style.display = -10;
			 document.body.style.overflowY = 'visible';
			document.body.onmousewheel = function() {
				return true;
			}
		}
	 setSign_later();
	document.getElementById("check_status").style.display="none";
	document.getElementById("check_status").innerHTML="";
localStorage.user_photo=userinfo[0];
localStorage.user_expirence=userinfo[1];
localStorage.user_name=userinfo[2];
localStorage.user_sex=userinfo[3];
document.getElementById("submit_msg").style.display="block";	
document.getElementById("typeemail").innerHTML="";
document.getElementById("typepassword").innerHTML="";
window.location.href="";
}
}
});
}
if(localStorage.user_name){
document.getElementById("book_png_1").style.display="none";
document.getElementById("btn_siginout").style.display="inline-block";
}
		//获取textarea中的value
	var write_msg_1 = document.getElementById('write_msg');
	var sed_button_1 = document.getElementById('sed_button');
	var user_msg_sended = document.getElementById('user-sended-msg');
    
	//json
	var msg_data = {"data": [{"src": localStorage.user_photo}, {"femaleid": localStorage.user_name},{"femaleWorkingexperience":localStorage.user_expirence},{"userSex":localStorage.user_sex}]};
	setTimeout(function(){
	document.getElementById("personal_img").style.background= "url("+localStorage.user_photo+")";
	},100);
		//创建元素的前插函数
	function insertbefore(parent, newChild) {
		if (parent.firstChild) {
			parent.insertBefore(newChild, parent.firstChild);
		} else {
			parent.appendChild(newChild);
		}
		return parent
	}

function setClick () {
		var c = 0;
		//得到textarea中的字符串和数字
		var write_msg_value = (function(){
			var data_1=write_msg_1.value.toString().replace(/[<]/g,"&lt");
			return data_1.replace(/[>]/g,"&gt");
			
		})(); 
		//通过ajax来提交textarea中字符串和数字
		function msg_upload() {
         	$.ajax({
		   type: "POST",
		   url: "php/submit.php",
		   data:{"user_msg":write_msg_value,"username":msg_data.data[1].femaleid},
		   dataType: "html",
		   success:function(data,status){
		   	localStorage.time_send=parseInt(data);
		   }
	    });
		}
		msg_upload();
		//textarea的value提交后变为0按钮背景颜色还原
		function clearVlaue() {
			document.getElementById('sed_message').style.display = 'inline-block';
			document.getElementById('sed_button').style.display = "none";
			document.getElementById('write_msg').value = "";
		};
		//得到信息呈现区的所用div对象
		var container = document.createElement('div');
		var personal_1_pic_div = document.createElement('div');
		var personal_writed_msg_div = document.createElement('div');
		var personal_writed_msg = document.createElement('p');
		var goodplus = document.createElement('div');
		var discuss = document.createElement('div');
		var discussNum = document.createElement('span');
		//设置女性标志
		var femaleDiv=document.createElement('div');
		var femaleImg=document.createElement('img');
		femaleDiv.style.cssText="width: 15px;height: auto; position: absolute;left: 160px;top: 10px;";
		//女性昵称工作经验
		var femaleIdHeader=document.createElement('p');
		var femaleWorkingExperienceHeader=document.createElement('p');
		var femaleId=document.createElement('p');
		var femaleWorkingExperience=document.createElement('p');
		femaleIdHeader.style.cssText="position: absolute;left:190px;top: 16px;font-family: 微软雅黑;color: #f01a75;font-size:medium ;word-break: break-all"
		femaleWorkingExperienceHeader.style.cssText="position: absolute;left: 190px;top: 50px;font-size: medium;font-family: 微软雅黑;color: #f01a75;"
		femaleId.style.cssText="position: absolute;left: 230px;top: 16px;font-family: 微软雅黑;color: #846974;font-size: 2;word-break: break-all";
		femaleWorkingExperience.style.cssText="width:120px; position: absolute;left: 230px;top: 50px;font-size: 2;font-family: 微软雅黑;color: #846974;"
		femaleIdHeader.innerHTML='昵称:';
		femaleWorkingExperienceHeader.innerHTML='经验:';
		femaleId.innerHTML=msg_data.data[1].femaleid;
	    femaleWorkingExperience.innerHTML=msg_data.data[2].femaleWorkingexperience;
	    //时间
		var time_p=document.createElement("p");
		time_p.style.cssText="color: black;position: absolute;left:720px ;top: 110px;font-size: 10px;";
		container.appendChild(time_p);
		time_p.innerHTML="刚刚";
		user_msg_sended.appendChild(container);
		container.style.cssText = 'width: 1000px;height: 146px;background:url(img/set_msg_bg.png)no-repeat center;transition: all 0.05s ease;position: absolute;';
		container.appendChild(personal_1_pic_div);
		//女性标志div
		container.appendChild(femaleDiv);
		femaleDiv.appendChild(femaleImg);
		femaleImg.src=msg_data.data[3].userSex;
	   //昵称和工作经验
	   container.appendChild(femaleIdHeader);
	   container.appendChild(femaleWorkingExperienceHeader);
	   container.appendChild(femaleId);
		container.appendChild(femaleWorkingExperience);
		personal_1_pic_div.style.cssText = 'width: 150px;height: 141px;position: relative;top: 0px;left: 0px;background-color:white;overflow: hidde;border-radius: 3px 3px 3px 3px/3px 3px 3px 3px;box-shadow: 0 0 4px #4CAE4C;';
		container.appendChild(personal_writed_msg_div);
		personal_writed_msg_div.style.cssText = "width: 450px;height: 100px;position: relative;background-color:;left: 518px;top: -135px;"
		personal_writed_msg_div.appendChild(personal_writed_msg);
		//信息呈现区文字
		personal_writed_msg.innerHTML = write_msg_value;
		personal_writed_msg.style.cssText = "position: absolute;left: 0px;font-family: 微软雅黑;size: a3;padding: 3px;text-indent: 2em;word-break: break-all;";
		var img = document.createElement('img');
		img.src = msg_data.data[0].src;
		img.style.cssText = 'width: 150px;height:141px;';
		personal_1_pic_div.appendChild(img);
		//点赞
		container.appendChild(goodplus);
		container.appendChild(discussNum);
		discussNum.style.cssText = "position: absolute;left:905px;top: 100px;font-size: 1;font-family: 微软雅黑;color: #f61b78;";
		goodplus.style.cssText = "width: 20px;height: 18px;cursor: pointer;background: url(img/fllow.png);position: absolute;left: 880px;top: 110px;";
		//评论
		container.appendChild(discuss);
		discuss.style.cssText = "width: 20px;height: 22px; cursor: pointer;background: url(img/discuss.png);position: absolute;left:936px;top:110px ;";
		//获得点赞的所有对象
		var fllow = [];
		//评论的所有div
		var discuss = [];
		//将前一个主要容器放入后一个主要容器中
		insertbefore(user_msg_sended, container);
		clearVlaue();
		//得到信息区域操作的对象 用户发送信息的操作对象 点赞对象 评论对象
		var divs = user_msg_sended.getElementsByTagName('div');
		var divs_len = divs.length;
		var arraydiv = [];
		for (var i = 0; i < divs_len; i++) {
			if (divs[i].offsetWidth == 1000) {
				arraydiv.push(divs[i]);
			} else if (divs[i].offsetHeight == 18) {
				fllow.push(divs[i]);
			} else if (divs[i].offsetHeight == 22) {
				discuss.push(divs[i]);
			} else {}
		};
		//得到点赞输出数字的操作对象
		var spanNum = user_msg_sended.getElementsByTagName('span'); 
		var spanLen = spanNum.length;
		for (var mk_num = 0; mk_num < spanLen; mk_num++) {
			(function(q) {
				fllow[q].onclick = function() {
						$.ajax({
						type:"post",
						url:"php/updatefollownum",
						async:true,
						data:{"follow_user_name":localStorage.user_name,"target_name":localStorage.user_name,"time_when_send":localStorage.time_send},
						success:function(data){
							var data_int=parseInt(data);
							console.log(data_int);
							if(data_int===0){
								spanNum[q].innerHTML =1;
							}else if(data_int===1){
						      	spanNum[q].innerHTML ="";
							}else{}
						}
					});
					}			
			})(mk_num)
		}
		//设置评论功能区的功能
		var discussLen = discuss.length;
		var discussArea = document.createElement('div');
		  //评论输入区
		var disscussInput=document.createElement('textarea');
		var discussSedbtn=document.createElement('button');
		discussArea.appendChild(disscussInput);
		discussArea.appendChild(discussSedbtn);
		discussSedbtn.className='btn btn-default'
		container.appendChild(discussArea);
		discussSedbtn.innerHTML='发送';
		discussSedbtn.style.cssText="position: absolute;left: 910px;bottom:10px ;font-family: 微软雅黑; vertical-align: middle;background-color: #000000;color: white;";
		disscussInput.style.cssText="width: 800px;height: 50px;position: absolute;left: 95px;bottom: 10px;resize: none;";
		discussArea.style.cssText = "width:990px;height:0px;position:absolute;top:146px;left:5px;;background-color:white; transition: all 0.05s ease;overflow: hidden;"
		var discussAreaDivs = [];
		for (var i = 0; i < divs.length; i++) {
			if (divs[i].offsetWidth == 990) {
				discussAreaDivs.push(divs[i]);
			}
		}
		var discussInputs=document.getElementsByTagName('textarea');
		var discussInputsarray=[];
		for (var discussInputsNum=0;discussInputsNum<discussInputs.length;discussInputsNum++){
			if (discussInputs[discussInputsNum].offsetWidth==800){
				discussInputsarray.push(discussInputs[discussInputsNum])
			}else{
			}

		}
		//点击微博发送按钮，评论区恢复清零
		function  discussInPutsVal() {
			for (var N=0;N<discussInputsarray.length;N++) {
				discussInputsarray[N].value = '';
			}
		}
		discussInPutsVal();
		
		//设置评论按钮功能
		function discussSedBtn () {
			
		}
		
        //点击评论按钮
        var array_num=[];
		for (var n = 0; n < discussLen; n++) {
			//添加一个数组
			array_num.push(0);
			(function(discussNum) {
				discuss[discussNum].onclick = function() {
					if (!localStorage.user_name) {
					alert("请先登录，亲！");
					}else{
				var a_data;
				array_num[discussNum]++;
				function show_data () {
				//模拟数据
				var array_data=[{id:"huangweidong",info:"这是什么玩意儿啊"}
				,{id:"huangtao",info:"这是模拟的数据"}
				,{id:"jinyoujiaoer",info:"wokanhaowoziji"}],len=array_data.length;
				function show_discuss (a) {
							var div_conent=document.createElement("div"),dd_info=document.createElement("dd");
							 div_conent.style.cssText="width: 900px;height: 80px;background-color: red;margin: 10px auto;";
							 dd_info.style.cssText="margin-left: 20px;background-color: white;color: black;display:inline-block";
							 discussAreaDivs[discussNum].appendChild(div_conent);
							 div_conent.appendChild(dd_info);
							 dd_info.innerHTML=a;
							 a_data=discussAreaDivs[discussNum].style.height=120+90*len+"px";
							 A_param.c=len;
				}
				for(var i =0;i<len;i++){
					show_discuss(array_data[i].info)
				}
				//初始化
		        for (var m_num=0;m_num<n;m_num++) {
	                   	  if(m_num!==discussNum){
	                   	  array_num[m_num]=0;
	                   	  remove_data (m_num);
	                   	  }
					      }
				}
				function remove_data (a_num) {
					var a=discussAreaDivs[a_num].getElementsByTagName("div").length;
					for (var i =0;i<a;i++) {
						discussAreaDivs[a_num].removeChild(discussAreaDivs[a_num].childNodes[discussAreaDivs[a_num].childNodes.length-1]);
					}
				}
				
				if(1===array_num[discussNum]%2){
					show_data();
				}else{
					remove_data(discussNum);
				}
				
				for (var i = 0; i < discussAreaDivs.length; i++) {
						if (i != discussNum) {
							discussAreaDivs[i].style.height = 0 + 'px';
							discussInputsarray[i].value='';
						}
					}				
				//点击不同评论区的评论按钮
					for (var j = 0; j < arraydiv.length; j++) {
						if (j > discussNum) {
							if(discussAreaDivs[discussNum].offsetHeight>=120){
							arraydiv[j].style.top = 20 * (j +1) + arraydiv[0].offsetHeight * j + 'px';
							}else{
							arraydiv[j].style.top =20 * (j + 1) + arraydiv[0].offsetHeight * j +120+A_param.c*90+ 'px';
							}	
						} else if (j === discussNum) {
							arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
							discussAreaDivs[discussNum].style.height=discussAreaDivs[discussNum].offsetHeight===0?a_data+A_param+"px":0+"px";
							setHeight(discussAreaDivs[discussNum].style.height);
							//send comment
							discussAreaDivs[discussNum].getElementsByTagName("button")[0].onclick=function(){
							var div_conent=document.createElement("div"),dd_info=document.createElement("dd");
							 div_conent.style.cssText="width: 900px;height: 80px;background-color: red;margin: 10px auto;";
							 dd_info.style.cssText="margin-left: 20px;background-color: green;display: inline-block;"
							 discussAreaDivs[discussNum].appendChild(div_conent);
							 div_conent.appendChild(dd_info);
							 dd_info.innerHTML="huangweidong";
							 //height degrese
							 var a_num=discussAreaDivs[discussNum].getElementsByTagName("div").length;
							  discussAreaDivs[discussNum].style.height=120+90*a_num+"px";
							  A_param.b=120+90*a_num+"px";
						     for(var j_num=0;j_num<arraydiv.length;j_num++){
						     	if(j_num>discussNum){
						     		arraydiv[j_num].style.top= 20 * (j_num + 1) + arraydiv[0].offsetHeight * j_num + 120+90*a_num+ 'px';
						     	}
						     }
							setHeight (discussAreaDivs[discussNum].style.height);
							}
						} else if(j<discussNum){
                            arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j  + 'px';
						}
					}
				}
					}
			})(n);
		}
		//点击发送按钮时所有评论区关闭
		for (var a = 0; a < discussLen; a++) {
			discussAreaDivs[a].style.height = 0 + 'px';
		}
		//点击按钮用户所发送信息的呈现区域height就增加
	    function setHeight (h_num) {
	    	if(!arguments[0]){
	    		user_msg_sended.style.height = 20 * (arraydiv.length+1)+ arraydiv.length * 146 +200+ 'px';
	    	}else{
	    		user_msg_sended.style.height = 20 * (arraydiv.length+1)+ arraydiv.length * 146 +200+parseInt(h_num)+'px';
	    	}
	    }
		setHeight ();
		for (var j = 0; j < arraydiv.length; j++) {
			arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
		}
		
    var num_count_0 = document.getElementById('num');
    num_count_0.innerHTML="还能输入"+ parseInt(200)+'个字符';
	
}

if (document.addEventListener) {
	sed_button_1.addEventListener("click",setClick,false)
} else if(document.attachEvent){
	sed_button_1.attachEvent("onclick",setClick)
}else{
	sed_button_1.onclick = setClick;
}
    //查看更多
    window.onscroll=function(){
    	var scrolltop=document.body.scrollTop+document.documentElement.scrollTop;
    	if (scrolltop>=3000&&localStorage.user_name) {
    		document.getElementById("downloaddata").style.opacity=1;
    	}
    	if(scrolltop<3000){
    		document.getElementById("downloaddata").style.opacity=0;
    		}
    }
}

//设置微博区域的功能
function set_write_msg() {
	//安全过滤
	function get_length(str) {
		return str.replace(/[^x00-xff]/g, "xx").length;
	}
	
	var max_num = 200;
	var owrite_msg = document.getElementById('write_msg');
	var value = owrite_msg.value;
	var num_count = document.getElementById('num');
	var str_length = 0;
	var sed_Button = document.getElementById('sed_button');
	num_count.innerHTML = "还能输入"+ parseInt(200 - str_length) +"个字符";
	//当鼠标聚焦在textarea时
	 function user_write_msg() {
		var owrite_value_count = owrite_msg.value;
		//获取要操作的提交按钮所处于的div对象
		var sed_Message = document.getElementById('sed_message');
		//keyup change the bgcolor
		function setStyle (a,b,c) {
		sed_Button.style.display=a;
		sed_Button.className=b
		sed_Message.style.display=c;
		}
		setStyle ("inline","btn btn-success","none");
		var str_length = get_length(this.value);
		num_count.innerHTML = "还能输入"+ parseInt(200 - str_length)+"个字符";
		if (str_length == 0) {
			setStyle ("none","btn btn-default","inline-block");
		} else if (str_length > 200) {
			num_count.innerHTML = "超出"+  parseInt(str_length-200) +"个字符";
			setStyle ("none","btn btn-default","inline-block");
		} else {
			setStyle ("inline","btn btn-success","none");
		}
	}
		if(document.addEventListener){
		owrite_msg.addEventListener("keyup",user_write_msg,false);
	}else if(document.attachEvent){
		owrite_msg.attachEvent("onkeyup",user_write_msg);
	}else{
		owrite_msg.onkeyup=user_write_msg;
	}
}
//登陆和注册||设置背景页透明效果
function set_sig_reg() {
	var window_width = window.innerWidth;
	var window_height = window.innerHeight;
	var signin_box = document.getElementById('signin');
	var input_img = document.getElementById('book_png_1');
	//背景蒙板
	var set_bg = document.getElementById('background_blur');
	//获得稍后操作作为操作对象
	//获得body操作对象
	var body = document.getElementsByTagName('body')[0];
	var sign_later = document.getElementById('sign_later');
	var banner=document.getElementById("banner");
	var submit_msg=document.getElementById("submit_msg");
	var user_msg_sended=document.getElementById("user-sended-msg");
	var unload=document.getElementById("unload");
	var array_element=[banner,submit_msg,user_msg_sended,unload];
	 function set_page_background() {
				signin_box.style.display="block";
				signin_box.style.opacity = 1;
				signin_box.style.zIndex = 9999;
				set_bg.style.opacity = 0.5;
				set_bg.style.zIndex = 999
				set_bg.style.display= "block";
				document.body.style.overflowY="hidden";
				if(navigator.userAgent.indexOf("Edge")<0){
							for (var i=0;i<array_element.length;i++) {
			    array_element[i].style.filter="blur(5px)";
				array_element[i].style.webkitFilter="blur(5px)";
				array_element[i].style.mozFilter="blur(5px)";
				array_element[i].style.msFilter="blur(5px)";
			}
				}
				body.onmousewheel = function() {
					return false;
				}
		}
	if(document.addEventListener){
	   input_img.addEventListener("click", set_page_background);
	}else if(document.attachEvent){
		 input_img.attachEvent("onclick",set_page_background);
	}else{
		input_img.onclick=set_page_background;
	}
		//逛一下功能按钮
	function setSign_later() {
			signin_box.style.display="none";
			signin_box.style.zIndex = -1;
			signin_box.style.opacity = 0;
			set_bg.style.opacity = 0;
            for (var i=0;i<array_element.length;i++) {
            	
					array_element[i].style.filter="blur(0px)";
					array_element[i].style.webkitFilter="blur(0px)";
					array_element[i].style.mozFilter="blur(0px)";
					array_element[i].style.msFilter="blur(0px)";
				}
			set_bg.style.display = "none";
			input_img.style.opacity = 1;
			input_img.style.display = "block";
			document.body.style.overflowY = 'visible';
			document.body.onmousewheel = function() {
				return true;
			}
	}
	if(document.addEventListener){
		sign_later.addEventListener("click",setSign_later,false);
	}else if(window.attachEvent){
		sign_later.attachEvent("onclick",setSign_later)
	}else{
		sign_later.onclick=setSign_later;
	}
	//注册
	function setreg () {
	function getval () {
		
		//密码
		var pasword=document.getElementById("typepassword").value;
		var error_password=document.getElementById("password_error");
		//邮箱
		var email=document.getElementById("typeemail").value;
		//邮箱输入错误
		var error_email=document.getElementById("email_error");
		var sigin=document.getElementById("signin");
		sigin.style.height="350px";
		//忘记密码
		var forget_password=document.getElementById("forget_password");
		forget_password.style.display="none";
		var submit_load=document.getElementById("submit_load");
		var sign_in=document.getElementById("sign_in");
		var sign_later=document.getElementById("sign_later");
		var user_name=document.getElementById("username");
		var type_name=document.getElementById("typename");
		//用户名
		var name=type_name.value;
		var re_password=document.getElementById("re_password");
		var error_username=document.getElementById("username_error");
	    
		var checknumber=document.getElementById("checknumber");
		var error_repassword=document.getElementById("repassword_error");
		checknumber.style.display="block";
		//获取验证码
		var checknumber_value=checknumber.value;
		var pchecknumber=document.getElementById("p_checknumber");
		var error_checknumber=document.getElementById("checknumber_error");
		var inchecknumber=document.getElementById("in_checknumber").value.toLowerCase();
		pchecknumber.style.display="block";
		var re_typepassword=document.getElementById("re_typepassword");
			//重复密码
		var re_password_value=re_typepassword.value;
		var array_btn=[submit_load,sign_in,sign_later,re_password,re_typepassword,user_name,type_name];
	    
		for (var i=0;i<array_btn.length;i++) {
			if(i>=3){
				array_btn[i].style.display="block";
			}else{
				array_btn[i].style.top="290px";
			}
		}
		//验证
		function check(){
			$.ajax({
				type:"post",
				url:"php/inchecknumber.php",
				async:true,
				dataType:"html",
				data:{"check_num":inchecknumber},
				success:function(data){
					function  refresh_checknumber(){
			$.ajax({
				type:"get",
				url:"php/checknumber.php",
				async:true
			});
			img_checknumber.src="php/checknumber.php"+'?'+Math.random();
		};
					refresh_checknumber();
				var num=parseInt(data);
				if(num===1){
					error_checknumber.innerHTML="";
				};
				if(num===0){
					document.getElementById("checknumber_error").innerHTML=document.getElementById("in_checknumber").value.length>0?"验证码错误":"请输入验证码";		
		}
				}
			});
			var a,b,c;
			var reg=new RegExp(".com","g");
			if(!email.match(reg)&&email!==""){
				error_email.innerHTML="邮箱格式不正确";
			}else if(email===""){
				error_email.innerHTML="请输入邮箱";
			}else{
				error_email.innerHTML="";
				a=true;
			}
			//password
			if (pasword.length<8&&pasword.length>0) {
				error_password.innerHTML="最少8位";
			}
			if (pasword==="") {
				error_password.innerHTML="请输入密码";
			}
			if (pasword.length>=13) {
				error_password.innerHTML="最多13位";
			}
			if (pasword.length>=8&&pasword.length<=13&&re_password_value==="") {
				error_password.innerHTML="";
				error_password.innerHTML="请再次输入密码";
			}
			if (re_password_value!==pasword&&re_password_value!==""&&pasword!=="") {
				error_repassword.innerHTML="密码不相等";
			}
			if(re_password_value===pasword&&re_password_value!==""&&pasword!==""){
				error_password.innerHTML="";
				error_repassword.innerHTML="";
				b=true;
			}
			//name
			if (type_name.value==="") {
				error_username.innerHTML="请输入昵称";
			}
			if(type_name.value.match(/[^a-zA-Z0-9\u4E00-\u9FA5]/g)){
				error_username.innerHTML="非法字符";
			}
			if (type_name.value.length>13) {
				error_username.innerHTML="昵称字数只能小于14";
			}
			if(type_name.value!==""&&type_name.value.length<=13&&!type_name.value.match(/[^a-zA-Z0-9\u4E00-\u9FA5]/g)){
				error_username.innerHTML="";
				c=true;
			}
			if(a===true&&b===true&&c===true){
				$.ajax({
				type:"post",
				url:"php/inchecknumber.php",
				async:true,
				dataType:"html",
				data:{"check_num":inchecknumber},
				success:function(data){
				var p=false,k=false;
				var data_array=eval(decodeURI(data));
				for (var i=0;i<data_array[0].length;i++) {
					if(type_name.value===data_array[0][i]){
						error_username.innerHTML="昵称已存在";
						p=true;
						console.log(data_array[0][i]);
					}
				}
				for (var l=0;l<data_array[1].length;l++) {
										if (email===data_array[1][l]) {
							error_email.innerHTML="邮箱已经注册";
							k=true;
					}
				}
				if(data_array[2]===1&&p===false&&k===false){
					error_checknumber.innerHTML="";
					error_email.innerHTML="";
					error_username.innerHTML="";
					$.ajax({
			type:"post",
			url:"php/register.php",
			async:true,
			data:{"userpassword":pasword,"useremail":email,"username":name},
			dataType:"html",
			success:function(data,status){
				email="";
				type_name.value="";
				document.getElementById("in_checknumber").value="";
				if(status==="success"){
					window.location.href="/social_job/reg/";
				}
			}
		});					 					
		        }
				if(data_array[2]===0){
						document.getElementById("checknumber_error").innerHTML=document.getElementById("in_checknumber").value.length>0?"验证码错误":"请输入验证码";
					}
				}
			});
			}
		}
		check();
	}
	function reg_btn_before () {
			//check number refresh
		function  refresh_check_number_btn_before(){
			$.ajax({
				type:"get",
				url:"php/checknumber.php",
				async:true
			});
			img_checknumber.src="php/checknumber.php";
		}
		refresh_check_number_btn_before();
		
		var sigin=document.getElementById("signin");
		sigin.style.height="350px";
		//忘记密码
		var forget_password=document.getElementById("forget_password");
		forget_password.style.display="none";
		var submit_load=document.getElementById("submit_load");
		var sign_in=document.getElementById("sign_in");
		var sign_later=document.getElementById("sign_later");
		var user_name=document.getElementById("username");
		var type_name=document.getElementById("typename");
		//用户名
		var re_password=document.getElementById("re_password");
		var checknumber=document.getElementById("checknumber");
		var regbtn_before=document.getElementById("sign_in_1");
		regbtn_before.style.display="none";
		checknumber.style.display="block";
		//获取验证码
		var pchecknumber=document.getElementById("p_checknumber");
		pchecknumber.style.display="block";
		var re_typepassword=document.getElementById("re_typepassword");
		//登陆获取数据按钮
		var submit_loaddata=document.getElementById("submit_load_data");
		submit_loaddata.style.display="none";
			//重复密码
		var array_btn=[submit_load,sign_in,sign_later,re_password,re_typepassword,user_name,type_name];
		for (var i=0;i<array_btn.length;i++) {
			if(i>=3){
				array_btn[i].style.display="block";
			}else{
				array_btn[i].style.top="290px";
			}
		}

		var span_error=document.getElementById("signin").getElementsByTagName("span");
	for(var i=0;i<span_error.length;i++){
		if(span_error[i].innerHTML!=="忘记密码"){
		span_error[i].style.display="block";
		span_error[i].innerHTML="";
		}
	}
	}
	//btn get reg page
var regbtn_before=document.getElementById("sign_in_1");
if(document.addEventListener){
	regbtn_before.addEventListener("click",reg_btn_before ,false);
}else if(document.attachEvent){
	regbtn_before.attachEvent("onclick",reg_btn_before );
}else{
	regbtn_before.onclick=reg_btn_before ;
}
var regbtn=document.getElementById("sign_in");
if(document.addEventListener){
	regbtn.addEventListener("click",getval ,false);
}else if(document.attachEvent){
	regbtn.attachEvent("onclick",getval );
}else{
	regbtn.onclick=getval ;
}
}
	setreg ();
	//登陆
function load () {
var btn_load=document.getElementById("submit_load");
function setLoad () {
var re_password=document.getElementById("re_password"), re_typepassword=document.getElementById("re_typepassword"),
username=document.getElementById("username"), type_name=document.getElementById("typename"),checknumber=document.getElementById("checknumber"),
pchecknumber=document.getElementById("p_checknumber"),regbtn_before=document.getElementById("sign_in_1"),submit_loaddata=document.getElementById("submit_load_data");
		submit_loaddata.style.display="block";
		regbtn_before.style.display="block";
		pchecknumber.style.display="none";
		checknumber.style.display="none";
	if (re_password.style.display==="block") {
		re_password.style.display="none";
		re_typepassword.style.display="none";
		username.style.display="none";
		type_name.style.display="none";
		var btns=document.getElementsByClassName("btn");
		for (var i=0;i<btns.length;i++) {
			btns[i].style.top="135px";
		}
		document.getElementById("forget_password").style.display="block";
		document.getElementById("signin").style.height="200px";
	} else{
		
	}
	var span_error=document.getElementById("signin").getElementsByTagName("span");
	for(var i=0;i<span_error.length;i++){
		if(span_error[i].innerHTML!=="忘记密码"){
		span_error[i].style.display="none";
		}
	}
};
if(document.addEventListener){
	btn_load.addEventListener("click",setLoad ,false);
}else if(window.attachEvent){
	btn_load.attachEvent("onclick",setLoad );
}else{
	btn_load.onclick=setLoad ;
}
}
load ();
}
//禁用ctrl+滚轮键放大图片
function disabled_wheel() {
	var scrollFunc = function(e) {
		e = e || window.event;
		if (e.wheelDelta && event.ctrlKey) { //IE/Opera/Chrome 
			event.returnValue = false;
		} else if (e.detail) { //Firefox 
			event.returnValue = false;
		}
	}
	/*注册事件*/
	if (document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	} 
	window.onmousewheel = document.onmousewheel = scrollFunc; 
};
window.onload = function() {
	sed_personal_div();
	disabled_wheel();
	set_write_msg();
	set_sig_reg();
}