function sed_personal_div() {
	//页面打开就从数据库加载数据
function getData () {
	$.ajax({
		type:"post",
		url:"php/getdata.php",
		async:true,
		success:function(data,stutas){
			var jsondata=eval(decodeURI(data));
			var jsonnum=jsondata.length;
			function setGetData () {
		var c = 0;
	    
//	    var time=new Date();
//	    var otime=time.getUTCFullYear()+'年'+time.getUTCMonth()+1+'月'+time.getUTCDay();
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
	    femaleWorkingExperience.innerHTML=msg_data.data[3].femaleWorkingexperience;
		
		user_msg_sended.appendChild(container);
		container.style.cssText = 'width: 1000px;height: 146px;background:url(img/set_msg_bg.png)no-repeat center;;transition: all 0.7s ease;position: absolute;';
		container.appendChild(personal_1_pic_div);
		//女性标志div
		container.appendChild(femaleDiv);
		femaleDiv.appendChild(femaleImg);
		femaleImg.src="img/"+msg_data.data[2].src;
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
		personal_writed_msg.innerHTML = jsondata[inum]
		personal_writed_msg.style.cssText = "position: absolute;left: 0px;font-family: 微软雅黑;size: a3;padding: 3px;text-indent: 2em;word-break: break-all;";
		var img = document.createElement('img');
		img.src = "img/" + msg_data.data[0].src;
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
		//得到点赞输出数字的操作对象
		var spanNum = user_msg_sended.getElementsByTagName('span'); //点赞功能设置
		var spanLen = spanNum.length;
		var M = [];
		for (var m = 0; m < spanLen; m++) {
			M[m] = 1; //循环放入数组的方式
			(function(q) {
				fllow[q].onclick = function() {
					M[q]++;
					if (M[q] % 2 == 0) {
						spanNum[q].innerHTML = 1;
					} else if (M[q] % 2 != 0) {
						spanNum[q].innerHTML = '' ;
						M[q] = 1;
					} else {}

				}
			})(m)

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
		discussSedbtn.style.cssText="position: absolute;left: 910px;bottom:10px ;font-family: 微软雅黑; vertical-align: middle;";
		disscussInput.style.cssText="width: 800px;height: 50px;position: absolute;left: 95px;bottom: 10px;resize: none;";
		discussArea.style.cssText = "width:990px;height:0px;position:absolute;top:146px;left:5px;;background-color:#c0dff8; transition: all 0.3s ease;overflow: hidden;"
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
		for (var n = 0; n < discussLen; n++) {
			(function(discussNum) {
				discuss[discussNum].onclick = function() {
				discussAreaDivs[discussNum].style.height = 90 + 'px';
				
				for (var i = 0; i < discussAreaDivs.length; i++) {
						if (i != discussNum) {
							discussAreaDivs[i].style.height = 0 + 'px';
							discussInputsarray[i].value='';
						}
					}
				//点击不同评论区的评论，呈现不同动画
					for (var j = 0; j < arraydiv.length; j++) {
						if (j > discussNum) {
							arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 90 + 'px';
						} else if (j == discussNum) {
							arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
						} else if(j<discussNum){
                            arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j  + 'px';
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
		user_msg_sended.style.height = 20 * (arraydiv.length+ 1)+ arraydiv.length * 146 + 200 + 'px';
		for (var j = 0; j < arraydiv.length; j++) {
			arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
		}
    var num_count_0 = document.getElementById('num');
    num_count_0.innerHTML="还能输入"+ parseInt(200)+'个字符';
			}
			for (var inum=0;inum<jsonnum-1;inum++) {
				setGetData ();
			}
		}
	});
}
getData ();
	//获取textarea中的value
	var write_msg_1 = document.getElementById('write_msg');
	var sed_button_1 = document.getElementById('sed_button');
	var user_msg_sended = document.getElementById('user-sended-msg');
	//json字符串
	var msg_data = {"data": [{"src": "touxiang1.jpeg"}, {"femaleid": "angelSweety"},{"src":"female.png"},{"femaleWorkingexperience":"两年文案，如果看重我的才华那就给我推荐工作吧。"}]}
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
		function fileupload() {
         	$.ajax({
		   type: "POST",
		   url: "php/submit.php",
		   //data: submitData,
		   data:{"saytxt":write_msg_value},
		   dataType: "html",
		   success:function(data,status){
		   	console.log(data);
		   }
	    });
		}
		fileupload();
		//textarea的value提交后变为0按钮背景颜色还原
		function clearVlaue() {
			document.getElementById('sed_message').style.backgroundColor = '#eceeee';
			document.getElementById('sed_button').style.zIndex = -1;
			return document.getElementById('write_msg').value = "";
		};
	    //得到时间对象的实例
	    var time=new Date();
	    var otime=time.getUTCFullYear()+'年'+time.getUTCMonth()+'月'+time.getUTCDay();
	    
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
	    femaleWorkingExperience.innerHTML=msg_data.data[3].femaleWorkingexperience;
		
		user_msg_sended.appendChild(container);
		container.style.cssText = 'width: 1000px;height: 146px;background:url(img/set_msg_bg.png)no-repeat center;;transition: all 0.3s ease;position: absolute;';
		container.appendChild(personal_1_pic_div);
		//女性标志div
		container.appendChild(femaleDiv);
		femaleDiv.appendChild(femaleImg);
		femaleImg.src="img/"+msg_data.data[2].src;
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
		img.src = "img/" + msg_data.data[0].src;
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
		var spanNum = user_msg_sended.getElementsByTagName('span'); //点赞功能设置
		var spanLen = spanNum.length;
		var M = [];
		for (var m = 0; m < spanLen; m++) {
			M[m] = 1; //循环放入数组的方式
			(function(q) {
				fllow[q].onclick = function() {
					M[q]++;
					if (M[q] % 2 == 0) {
						spanNum[q].innerHTML = 1;
					} else if (M[q] % 2 != 0) {
						spanNum[q].innerHTML = '' ;
						M[q] = 1;
					} else {}

				}
			})(m)

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
		discussSedbtn.style.cssText="position: absolute;left: 910px;bottom:10px ;font-family: 微软雅黑; vertical-align: middle;";
		disscussInput.style.cssText="width: 800px;height: 50px;position: absolute;left: 95px;bottom: 10px;resize: none;";
		discussArea.style.cssText = "width:990px;height:0px;position:absolute;top:146px;left:5px;;background-color:#c0dff8; transition: all 0.3s ease;overflow: hidden;"
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
		for (var n = 0; n < discussLen; n++) {
			(function(discussNum) {
				discuss[discussNum].onclick = function() {
				discussAreaDivs[discussNum].style.height = 90 + 'px';
				
				for (var i = 0; i < discussAreaDivs.length; i++) {
						if (i != discussNum) {
							discussAreaDivs[i].style.height = 0 + 'px';
							discussInputsarray[i].value='';
						}
					}
				//点击不同评论区的评论，呈现不同动画
					for (var j = 0; j < arraydiv.length; j++) {
						if (j > discussNum) {
							arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 90 + 'px';
						} else if (j == discussNum) {
							arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
						} else if(j<discussNum){
                            arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j  + 'px';
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
		user_msg_sended.style.height = 20 * (arraydiv.length+ 1)+ arraydiv.length * 146 + 200 + 'px';
		for (var j = 0; j < arraydiv.length; j++) {
			arraydiv[j].style.top = 20 * (j + 1) + arraydiv[0].offsetHeight * j + 'px';
		}
		
    var num_count_0 = document.getElementById('num');
    num_count_0.innerHTML="还能输入"+ parseInt(200)+'个字符';
	
}

if (document.addEventListener) {
	sed_button_1.addEventListener("click",setClick,false)
} else if(window.attachEvent){
	sed_button_1.attachEvent("onclick",setClick)
}else{
	sed_button_1.onclick = setClick;
}
}
//设置微博区域的功能
function set_write_msg() {
	//创建一个匹配中文并获取对象字符串的函数
	function get_length(str) {
		//return的作用是结束函数并return出去一个值或者对象或者方法？
		return str.replace(/[^x00-xff]/g, "xx").length;
	}
	
	var max_num = 200;
	var owrite_msg = document.getElementById('write_msg');
	var value = owrite_msg.value;
	var num_count = document.getElementById('num');
	var str_length = 0;
	var sed_Button = document.getElementById('sed_button');
	sed_Button.style.zIndex = -1;
	num_count.innerHTML = "还能输入"+ parseInt(200 - str_length) +"个字符";
	//当鼠标聚焦在textarea中时sed_button的z_index为1
	//当鼠标聚焦在textarea时
	 function user_write_msg() {
		var owrite_value_count = owrite_msg.value;
		//获取要操作的提交按钮所处于的div对象
		var sed_Message = document.getElementById('sed_message');
		//当按下按键并放开的时候改变提交按钮的 背景颜色
		sed_Message.style.backgroundColor = "#c0efd1";
		/*this 指向当前对象也就是owrite_msg对象，而owrite对象的value（值）就是字符串，
		在调用get_length函数的时候，owrite的值也就是字符串要进行匹配，如果是中文那就换成两个字符*/
		var str_length = get_length(this.value);
		num_count.innerHTML = "还能输入"+ parseInt(200 - str_length)+"个字符";
		if (str_length == 0) {
			sed_Message.style.backgroundColor = "#eceeee";
			sed_Button.style.zIndex = -1;
		} else if (str_length > 200) {
			num_count.innerHTML = "超出"+  parseInt(str_length-200) +"个字符";
			sed_Button.style.zIndex = -1;
			sed_Message.style.backgroundColor="#e2e1ae";
		} else {
			sed_Button.style.zIndex = 1;
		}
	}
		if(document.addEventListener){
		owrite_msg.addEventListener("keyup",user_write_msg);
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
	//获得背景页作为操作对象
	var set_bg = document.getElementById('bg');
	//获得稍后操作作为操作对象
	//获得body操作对象
	var body = document.getElementsByTagName('body')[0];
	var sign_later = document.getElementById('sign_later');
	var sig=true;
	var banner=document.getElementById("banner");
	var submit_msg=document.getElementById("submit_msg");
	var user_msg_sended=document.getElementById("user-sended-msg");
	var array_element=[banner,submit_msg,user_msg_sended];
	input_img.onclick = function() {
			if (sig== true) {
				signin_box.style.display="block";
				signin_box.style.opacity = 1;
				signin_box.style.zIndex = 2;
				set_bg.style.opacity = 0.5;
				set_bg.style.zIndex = 1
				document.body.style.overflowY="hidden";
				for (var i=0;i<array_element.length;i++) {
					array_element[i].style.filter="blur(5px)";
					array_element[i].style.webkitFilter="blur(5px)";
					array_element[i].style.mozFilter="blur(5px)";
				}
				body.onmousewheel = function() {
					return false;
				}
			}
			 sig=false;
		}
		//逛一下功能按钮
	function setSign_later() {
		if (sig== false) {
			signin_box.style.display="none";
			signin_box.style.zIndex = -1;
			signin_box.style.opacity = 0;
			set_bg.style.opacity = 0;
            for (var i=0;i<array_element.length;i++) {
					array_element[i].style.filter="blur(0px)";
					array_element[i].style.webkitFilter="blur(0px)";
					array_element[i].style.mozFilter="blur(0px)";
				}
			set_bg.style.zIndex = -2;
			input_img.style.zIndex = 0;
			set_bg.style.transition = 'all 0.1s ease';
			body.style.overflowY = 'visible';
			body.onmousewheel = function() {
				return true;
			}
		}
		sig=true;
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
		//check number
		var img_checknumber=document.getElementById("img_checknumber");
		img_checknumber.src="php/checknumber.php";
		function  refresh_check_number(){
			$.ajax({
				type:"get",
				url:"php/checknumber.php",
				async:true
			});
			img_checknumber.src="php/checknumber.php";
		}
		if(document.addEventListener){
			img_checknumber.addEventListener("click",refresh_check_number);
		}else if(document.attachEvent){
			img_checknumber.attachEvent("onclick",refresh_check_number);
		}else{
			img_checknumber.onclick=refresh_check_number;
		}
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
			var a;
			var reg=new RegExp(".com","g");
			if(!email.match(reg)&&email!==""){
				error_email.innerHTML="邮箱格式不正确";
			}else if(email===""){
				error_email.innerHTML="请输入邮箱";
			}else{
				error_email.innerHTML="";
				a=2;
			}
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
			if (type_name.value==="") {
				error_username.innerHTML="请输入昵称";
			}
			if(type_name.value.match(/[^a-zA-Z0-9\u4E00-\u9FA5]/g)){
				error_username.innerHTML="只能输入数字,英文或中文字符";
			}
			if (type_name.value.length>17) {
				error_username.innerHTML="昵称字数只能小于17";
			}
			if(re_password_value===pasword&&re_password_value!==""&&pasword!==""&&type_name.value!==""&&type_name.value.length<=17&&!type_name.value.match(/[^a-zA-Z0-9\u4E00-\u9FA5]/g&&a===2)){
					  error_repassword.innerHTML="";
					  error_password.innerHTML="";
					  error_username.innerHTML="";
					  error_email.innerHTML="";
			$.ajax({
			type:"post",
			url:"php/register.php",
			async:true,
			data:{"userpassword":pasword,"useremail":email,"username":name},
			dataType:"html",
			success:function(data,status){
				console.log(status);
				if(status===200){
					window.location.href="www.baidu.com";
				}
			}
		});
			}
		}
		check();
		
	}
	function reg_btn_before () {
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
pchecknumber=document.getElementById("p_checknumber"),regbtn_before=document.getElementById("sign_in_1");
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
	window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari 
};
window.onload = function() {
	//用户提交信息呈现
	sed_personal_div()
	//*************
	disabled_wheel();
	//设置信息区域的功能
	set_write_msg();
	//登陆提交
	set_sig_reg()
}