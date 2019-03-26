var startPointX = document.getElementById("CC_start_pointX");
var startPointY = document.getElementById("CC_start_pointY");
var distance = document.getElementById("CC_Distance");
var angle = document.getElementById("CC_Angle");
var btn_runTo_CC = document.getElementById("CC_toRun");
var resultShow = document.getElementById("CC_toRun_Result");
btn_runTo_CC.onclick = function(){
	var endPointX;
	var endPointY;
	var moveX;
	var moveY;
	moveX = Number(distance.value) * Math.sin(Number(angle.value));
	moveY = Number(distance.value) * Math.cos(Number(angle.value));
	endPointX = Number(startPointX.value) + moveX;
	endPointY = Number(startPointY.value) + moveY;
	resultShow.innerHTML = "x = " + endPointX + ", y = " + endPointY;
};

var startPointX = document.getElementById("CI_start_pointX");
var startPointY = document.getElementById("CI_start_pointY");
var endPointX = document.getElementById("CI_end_pointX");
var endPointY = document.getElementById("CI_end_pointY");
var btn_runTo_CI = document.getElementById("CI_toRun");
var CI_result1 = document.getElementById("CI_toRun_Result1");
var CI_result2 = document.getElementById("CI_toRun_Result2");
btn_runTo_CI.onclick = function(){
	var distance = Math.sqrt(Math.pow(Number(startPointX.value) - Number(endPointX.value), 2) + Math.pow((Number(startPointY.value) - Number(endPointY.value)), 2));
	CI_result2.innerHTML = distance;
	// var moveY = Number(endPointY.value) - Number(startPointY.value);
	var moveX = Number(endPointX.value) - Number(startPointX.value);
	var angle;
	// angle = Math.acos(Math.cos(moveY/distance));
	angle = 180/Math.PI * Math.asin(moveX/distance);
	alert(angle);
	CI_result1.innerHTML = angle + "°";
};