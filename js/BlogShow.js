function makeAboutBox(href, title){
	require(["dojo/request", "dojo/_base/window", "dojo/dom-style","dojox/layout/FloatingPane"], function(request, win, style, FloatingPane){
		var floaterDiv = document.createElement("div");
		win.body().appendChild(floaterDiv);
		floaterDiv.appendChild(document.createElement("br"));
		var textarea = document.createElement("div");
		textarea.innerHTML = "加载...";
		
		floaterDiv.appendChild(textarea);
		
		//利用FloatingPane的构造函数创建浮动面板    （动态创建）
		var tmp = new FloatingPane({
			title: "<b>" + title + "</b>",  //浮动面板的标题
			id: "aboutBox",    //浮动面板的ID
			closeable: true,   
			resizable: true,
			dockable: false,  
			resizeeAxis:'xy'
		},floaterDiv  /* 设置称浮动面板的标签  */);
		
		tmp.startup();
		//FloatingPane的初始宽高
		tmp.resize({
			w: 740,
			h: 550
		});
		
		//FloatingPane的初始位置
		style.set(tmp.domNode, "top", "100px");
		style.set(tmp.domNode, "left", "100px");
		style.set(tmp.domNode, "z-index", "500");
		
		tmp.show();
		
		//指定浮动面板显示的页面
		request(href).then(function(response){
			textarea.innerHTML = response;
		},function(response){
			alert("出错，原因是" + response);
			textarea.innerHTML = '不能找到指定的HTML';
		});
		tmp.bringToTop();
	});
}