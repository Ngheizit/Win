
var btn_runTo_ZYJS_6 = document.getElementById("runTo_ZYJX_6");
btn_runTo_ZYJS_6.onclick = function(){
	var daihao = document.getElementById("fendai_6");
	var result = document.getElementById("runTo_ZYJX_6_Result");
	if(Number(daihao.value < 1) || Number(daihao.value > 60)){
		result.innerHTML = "超出6°带带号范围";
		return 0;
	}
	var zyjx = 6 * Number(daihao.value) - 3;
	var EorW = zyjx > 180 ? "W" : "E";
	if(EorW == "W"){
		zyjx = 360 - zyjx;
	}
	result.innerHTML = zyjx + "°" + EorW;
}


var btn_runTo_ZYJS_3 = document.getElementById("runTo_ZYJX_3");
btn_runTo_ZYJS_3.onclick = function(){
	var daihao = document.getElementById("fendai_3");
	var result = document.getElementById("runTo_ZYJX_3_Result");
	if(Number(daihao.value < 1) || Number(daihao.value > 120)){
		result.innerHTML = "超出3°带带号范围";
		return 0;
	}
	var zyjx = 3 * Number(daihao.value);
	var EorW = zyjx > 180 ? "W" : "E";
	if(EorW == "W"){
		zyjx = 360 - zyjx;
	}
	result.innerHTML = zyjx + "°" + EorW;
}

var btn_runTo_daihao_6 = document.getElementById("runTo_daihao_6");
btn_runTo_daihao_6.onclick = function(){
	var EorW = document.getElementsByName("EorW_toDaihao_6");
	var jingxian = document.getElementById("jingxian_6");
	var result = document.getElementById("runTo_daihao_6_Result");
	var daihao;
	if(EorW[0].checked){
		daihao = parseInt(Number(jingxian.value)/6) + 1;
	}else{
		daihao = parseInt((Number(jingxian.value) + 180)/6) + 1;
	}
	result.innerHTML = daihao + "带";
}

var btn_runTo_daihao_3 = document.getElementById("runTo_daihao_3");
btn_runTo_daihao_3.onclick = function(){
	alert("");
	var EorW = document.getElementsByName("EorW_toDaihao_3");
	var jingxian = document.getElementById("jingxian_3");
	var result = document.getElementById("runTo_daihao_3_Result");
	var daihao = 0, yushu;
	if(!EorW[0].checked){
		daihao = 60;
	}
	yushu = Number(jingxian.value)%3;
	if(yushu < 1.5){
		daihao += parseInt(Number(jingxian.value)/3);
	}else if(yushu > 1.5){
		daihao += parseInt(Number(jingxian.value)/3 + 1);
	}else if(yushu == 1.5){
		daihao += parseInt(Number(jingxian.value)/3)
		result.innerHTML = daihao + "带和" + (daihao+1) + "带的交线上";
		return 0;
	}
	result.innerHTML = daihao + "带";
}