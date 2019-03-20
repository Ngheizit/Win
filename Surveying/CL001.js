window.onload = function(){
	var esn = document.querySelectorAll(".esn");
	var esv = document.querySelectorAll(".esv");
	var fromEsn = document.getElementById("fromEsn");
	var toEsn = document.getElementById("toEsn");
	for(var i = 0; i < esn.length; i++){
		var e = document.createElement("option");
		e.appendChild(document.createTextNode(esn[i].innerHTML));
		fromEsn.appendChild(e);
	}
	for(var i = 0; i < esn.length; i++){
		var e = document.createElement("option");
		e.appendChild(document.createTextNode(esn[i].innerHTML));
		toEsn.appendChild(e);
	}


	var btn_flip = document.getElementById("flip");
	btn_flip.onclick = function(){
		var t = fromEsn.selectedIndex;
		fromEsn.selectedIndex = toEsn.selectedIndex;
		toEsn.selectedIndex = t;
	}

	var btn_result = document.getElementById("runToEsn");
	var showResult = document.getElementById("runToEsnResult");
	var value = document.getElementById("inputEsv");
	btn_result.onclick = function(){
		var result = Number(value.value);

		result +=  Number(esv[fromEsn.selectedIndex].innerHTML) + (-Number(esv[toEsn.selectedIndex].innerHTML));
		showResult.innerText = result + " m";
	}
};