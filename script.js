//autor:Martin Maga
//xmagam00
function inicializacia(){
var state = 'complete';
var documentState = document.readyState;
if (state===documentState){
oknaVBare=[];
maximalizovaneOkna=[];
var desktopClass='desktop';
var desktops=document.getElementsByClassName(desktopClass);
var pocetOkien=desktops.length;
for (j=0;j<pocetOkien;j++){
	var divElement = 'div';
	var classAtribut = 'class';
	var barButt = 'barButton';
	var width = 43;
	var pixels = 'px';
	var image = 'img';
	var imageSource = 'image/window_new.png';
	var newWindow = 'windowNew';
	var click = 'click';
	var useCapture = false;
	var imageElement = 'img';
	var bar = document.createElement(divElement);
		bar.style.top = ((desktops[j].offsetHeight-width)+pixels);
	bar.setAttribute(classAtribut,barButt);
	desktops[j].appendChild(bar);

	var newWindowImg=document.createElement(imageElement);
	newWindowImg.src=imageSource;
	newWindowImg.setAttribute(classAtribut, newWindow);
	newWindowImg.addEventListener(click, windowNew, useCapture);
	bar.appendChild(newWindowImg);
}
var windowClass='window';
var okna=document.getElementsByClassName(windowClass);
var pocetOkien=okna.length;
for(j=0;j<pocetOkien;j=j+1){
pridatHraniceKOKnu(okna[j]);
}
 var titleWindow = 'titleOfWindow';
	 var pravaHranica = 'pravaHranica';
	 var lavaHranica = 'lavaHranica';
	 var doleHranica = 'doleHranica';
	 var horeHranica = 'horeHranica';
	 var doleVpravoHranica = 'doleVpravoHranica';
	 var doleVlavoHranica = 'doleVlavoHranica';
	 var horeVlavoHranica = 'horeVlavoHranica';
	 var horeVpravoHranica = 'horeVpravoHranica';
	 var mousedownEvent = 'mousedown';
	 var useCapture = false;

	  temp = document.getElementsByClassName(titleWindow);
	  dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[i].addEventListener(mousedownEvent,mysDoleCall,useCapture);
      }
      temp = document.getElementsByClassName(pravaHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[i].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(lavaHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(doleHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1){
      	temp[i].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(horeHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[i].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(doleVpravoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[i].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
temp[i].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
}
temp = document.getElementsByClassName(doleVlavoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[i].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
temp[i].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
}
temp = document.getElementsByClassName(horeVlavoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[i].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
temp[i].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
}
temp = document.getElementsByClassName(horeVpravoHranica);
dlzka = temp.length;
 for(j=0;j<dlzka;j=j+1)
{
temp[j].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
}
}
}


var windowNew=function(event)
{
	event.stopPropagation();
	event.stopPropagation();
	plochas = event.target.parentNode.parentNode; 
	var divElement = 'div';
	newWindowDiv = document.createElement(divElement);
	var classAtribut = 'class';
	var windowse = 'window';
	var pixels = 'px';
	var zindex = 10;
	newWindowDiv.setAttribute(classAtribut, windowse);
	newWindowDiv.style.left=(plochaLeftMinimum+pixels);
	newWindowDiv.style.top=(plochaHoreMinimum+pixels);
	newWindowDiv.style.zIndex=(zindex);
	plochas.appendChild(newWindowDiv);
	pridatHraniceKOKnu(newWindowDiv);
	 var titleWindow = 'titleOfWindow';
	 var pravaHranica = 'pravaHranica';
	 var lavaHranica = 'lavaHranica';
	 var doleHranica = 'doleHranica';
	 var horeHranica = 'horeHranica';
	 var doleVpravoHranica = 'doleVpravoHranica';
	 var doleVlavoHranica = 'doleVlavoHranica';
	 var horeVlavoHranica = 'horeVlavoHranica';
	 var horeVpravoHranica = 'horeVpravoHranica';
	 var mousedownEvent = 'mousedown';
	 var useCapture = false;

	  temp = document.getElementsByClassName(titleWindow);
	  dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,mysDoleCall,useCapture);
      }
      temp = document.getElementsByClassName(pravaHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[i].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(lavaHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(doleHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1){
      	temp[j].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(horeHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(doleVpravoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[j].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
}
temp = document.getElementsByClassName(doleVlavoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[j].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
}
temp = document.getElementsByClassName(horeVlavoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[j].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
}
temp = document.getElementsByClassName(horeVpravoHranica);
dlzka = temp.length;
 for(j=0;j<dlzka;j=j+1)
{
temp[j].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
}
}

//funkcia na pridanie clearu
function pridanieClearu(elementos)
{
	var elementDiv = 'div';
	var classElement = 'class';
	var clearElement = 'clear';
	var clearik=document.createElement(elementDiv);
	clearik.setAttribute(classElement,clearElement);
	elementos.appendChild(clearik);
}



var zavrietWindow = function(event)
{
event.preventDefault();
event.stopPropagation();
event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
}

var minimalizovatOkno = function(event)
{
event.preventDefault();
	event.stopPropagation();
	var prvy = 0;
	elemen = event.target.parentNode.parentNode;
	var barButtonClass = 'barButton';
	var idcko = 'id';
	var divElement = 'div';
	var classAttr= 'class';

	plocha = elemen.parentNode;
	var barButton = plocha.getElementsByClassName(barButtonClass)[prvy];
	oknaVBare[oknaVBare.length] = {elemLeft: elemen.style.left, elemTop: elemen.style.top, elemWidth: elemen.offsetWidth, elemHeight: elemen.offsetHeight};
	oknoMin = document.createElement(divElement);
	oknoMin.setAttribute(classAttr, 'buttonBarWindow');
	oknoMin.setAttribute(idcko, oknaVBare.length - 1);
	oknoMin.addEventListener(click, obnovenieOkna, false);
	if (oknaVBare.length - 1 == 0){
		oknoMin.innerHTML = windowAttr;
	} else{
		oknoMin.innerHTML = windowAttr + (oknaVBare.length - 1);
	}
	barButton.appendChild(oknoMin);
	windows = barButton.getElementsByClassName('buttonBarWindow');
      for (i = 0; i < windows.length; ++i){
      	if (windows.length < 7){
      		windows[i].style.width = ((plocha.offsetWidth / 7) - 3 - 43) + pixels;
      	} else {
      		windows[i].style.width = ((plocha.offsetWidth / windows.length) - 3 - 43) + pixels;
      	}
    }
    plocha.removeChild(elemen);
}

var obnovenieOkna = function(event)
{
	event.preventDefault();
	event.stopPropagation();
	thisElem = event.target;
	var idcko = 'id';
	plocha = thisElem.parentNode.parentNode;
	var barButton = thisElem.parentNode;
	var thisElemId = thisElem.getAttribute('id');
	var objektik = oknaVBare[thisElemId];
	var divElement = 'div';

	newWindowDiv = document.createElement(divElement);
	newWindowDiv.setAttribute(classAttr, windowAttr);
	newWindowDiv.style.left = objektik.elemLeft;
	newWindowDiv.style.top = objektik.elemTop;
	newWindowDiv.style.height = objektik.elemHeight + pixels;
		newWindowDiv.style.width = objektik	.elemWidth + pixels;
	plocha.appendChild(newWindowDiv);
	pridatHraniceKOKnu(newWindowDiv);
	 var titleWindow = 'titleOfWindow';
	 var pravaHranica = 'pravaHranica';
	 var lavaHranica = 'lavaHranica';
	 var doleHranica = 'doleHranica';
	 var horeHranica = 'horeHranica';
	 var doleVpravoHranica = 'doleVpravoHranica';
	 var doleVlavoHranica = 'doleVlavoHranica';
	 var horeVlavoHranica = 'horeVlavoHranica';
	 var horeVpravoHranica = 'horeVpravoHranica';
	 var mousedownEvent = 'mousedown';
	 var useCapture = false;

	  temp = document.getElementsByClassName(titleWindow);
	  dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,mysDoleCall,useCapture);
      }
      temp = document.getElementsByClassName(pravaHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(lavaHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(doleHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1){
      	temp[j].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(horeHranica);
       dlzka = temp.length;
      for(j=0;j<dlzka;j=j+1)
      {
      	temp[j].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
      }
      temp = document.getElementsByClassName(doleVpravoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[j].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
}
temp = document.getElementsByClassName(doleVlavoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[j].addEventListener(mousedownEvent,doleHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
}
temp = document.getElementsByClassName(horeVlavoHranica);
dlzka = temp.length;
for(j=0;j<dlzka;j=j+1){
temp[j].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,lavahranicaZvec,useCapture);
}
temp = document.getElementsByClassName(horeVpravoHranica);
dlzka = temp.length;
 for(j=0;j<dlzka;j=j+1)
{
temp[j].addEventListener(mousedownEvent,horeHranicaZvec,useCapture);
temp[j].addEventListener(mousedownEvent,pravaHranicaZvec,useCapture);
}
	barButton.removeChild(thisElem);

	okna = barButton.getElementsByClassName('buttonBarWindow');
	var dlzka = okna.length;
      for (j=0;j<dlzka;j=j+1){
      	if (okna.length < 7){
      		okna[j].style.width = ((plocha.offsetWidth/7)-3-43)+pixels;
      	} else {
      		okna[i].style.width = ((plocha.offsetWidth/okna.length)-3-43)+pixels;
      	}
    }
}

var maxilazaciaOkna=function(event) {
elemen = event.target.parentNode.parentNode;
elemen.setAttribute('id', maximalizovaneOkna.length);
var prvy = 0;
var useCapture = false;
maximalizovaneOkna[maximalizovaneOkna.length] = {elemLeft: elemen.style.left, elemTop: elemen.style.top, elemWidth: elemen.offsetWidth, elemHeight: elemen.offsetHeight};
elemen.getElementsByClassName('maximalTlacidlo')[prvy].removeEventListener(click, maxilazaciaOkna);
elemen.getElementsByClassName('maximalTlacidlo')[prvy].addEventListener(click, obnovOkno, useCapture);
elemen.style.left = plochaLeftMinimum + 'px';
elemen.style.top = plochaHoreMinimum + 'px';
var novaSirka = elemen.parentNode.offsetWidth;
var novaVyska = elemen.parentNode.offsetHeight-40;
elemen.style.width = novaSirka + 'px';
elemen.style.height = novaVyska + 'px';
windows = elemen.getElementsByClassName('doleHoreStranaHranica');
for (i = 0; i < windows.length; ++i){
	windows[i].style.width = (novaSirka - velkostHranice * 2) + pixels;
}
windows = elemen.getElementsByClassName('lavaPravaStranaHranica');
	for (i = 0; i < windows.length; ++i){
		windows[i].style.height = (novaVyska - velkostHranice * 2) + pixels;
}
title = elemen.getElementsByClassName('titleOfWindow');
title[prvy].style.width = (novaSirka - velkostHranice * 2) + pixels;
minimize = elemen.getElementsByClassName('minTlacidlo');
minimize[prvy].style.marginLeft = (novaSirka - 43*3) + pixels;
}

var obnovOkno = function(event)
{
elementik = event.target.parentNode.parentNode;
var idcko = 'id';
elemId = elementik.getAttribute(idcko);
var prvy = 0;
var useCapture = false;
elementik.style.left = obj.elemLeft;
elementik.style.top = obj.elemTop;
obj = maximalizovaneOkna[elemId];
var novaSirka = obj.elemWidth;
var novaVyska = obj.elemHeight;
elementik.style.width = novaSirka ;
elementik.style.width = elementik.style.width+ pixels;
elementik.style.height = novaVyska ;
elementik.style.height = elementik.style.height+ pixels;
okna = elementik.getElementsByClassName('doleHoreStranaHranica');
var dlzka = okna.length;
for (j=0;j<dlzka;j=j+1){
	okna[j].style.width = (novaSirka - velkostHranice * 2) + pixels;
}
okna = elementik.getElementsByClassName('lavaPravaStranaHranica');
dlzka = okna.length;
	for (j=0;j<okna;j=j+1){
			windows[j].style.height = (novaVyska - velkostHranice * 2) + pixels;
	}
	title = elementik.getElementsByClassName('titleOfWindow');
	title[prvy].style.width = (novaSirka - velkostHranice * 2) + pixels;
	minimize = elementik.getElementsByClassName('minTlacidlo');
minimize[prvy].style.marginLeft = (novaSirka - 43*3);
minimize[prvy].style.marginLeft = minimize[prvy].style.marginLeft  + pixels;
elementik.getElementsByClassName('maximalTlacidlo')[prvy].removeEventListener(click, obnovOkno);
elementik.getElementsByClassName('maximalTlacidlo')[prvy].addEventListener(click, maxilazaciaOkna, useCapture);
}

function ziskajKoordinaty(objektik) {
var body = {};
var telo = 'body';
var prvy = 0;
   body.x = objektik.offsetLeft;
   body.y = objektik.offsetTop;
 while (objektik.offsetParent) {
 body.x = body.x + objektik.offsetParent.offsetLeft;
 body.y = body.y + objektik.offsetParent.offsetTop;
 if (objektik != document.getElementsByTagName(telo)[prvy]) {
 objektik = objektik.offsetParent;
  }
  else {
    break;
  }
  }
  return body;
}


function inizializaciaKliku(thisElem){
  elemen = thisElem.parentNode;
  var thisLeft= '';
  var thisTop= '';
  var emptyContent = '';
  if (elemen.style.left === emptyContent){
  	if (elemen.style.top === emptyContent){
    var thisCoors = ziskajKoordinaty(elemen);
    thisLeft = thisCoors.x;
    thisTop = thisCoors.y;
  }}else{
    thisLeft = parseFloat(elemen.style.left);
    thisTop = parseFloat(elemen.style.top);
  }
  var zIndexVal = 100;
  elemen.style.zIndex = zIndexVal;
  elemen.style.left = thisLeft + pixels;
  elemen.style.top = thisTop + pixels;
  xShift = lastMouseXCord ;
  xShift = xShift- thisLeft;
  yShift = lastMouseYCord ;
  yShift = yShift- thisTop;
  plocha = elemen.parentNode;
  plochaLeftMinimum = plocha.offsetLeft;
  plochaHoreMinimum = plocha.offsetTop;
  plochaLeftMax = plocha.offsetWidth - elemen.offsetWidth + plocha.offsetLeft;
  plochaHoreMaximum = plocha.offsetHeight - elemen.offsetHeight + plocha.offsetTop;
}

var mysDoleCall=function(event)
{
  var useCapture = false;
  event.preventDefault();
event.stopPropagation();
   lastMouseYCord = event.clientY;
  lastMouseXCord = event.clientX;
 
  inizializaciaKliku(this);
  window.addEventListener(mousemoveEvent, mysPohybCall,useCapture);
  window.addEventListener(mouseUpEvent,mysHoreCall,useCapture);
}

var mysPohybCall =function(event)
{
event.preventDefault();
	event.stopPropagation();
	var newLeft = event.clientX - xShift;
	var newTop = event.clientY - yShift;
	if (newLeft <= plochaLeftMinimum){
		newLeft = plochaLeftMinimum;
	}
	if (newTop <= plochaHoreMinimum){
		newTop = plochaHoreMinimum;
	}
	if (newLeft >= plochaLeftMax){
		newLeft = plochaLeftMax;
	}
	if (newTop >= plochaHoreMaximum){
		newTop = plochaHoreMaximum;
	}
	elemen.style.left = newLeft + pixels;
	elemen.style.top = newTop + pixels;
}

var mysHoreCall=function(event)
{
event.preventDefault();
event.stopPropagation();
window.removeEventListener(mousemoveEvent, doleHranicaZvecPosun);
window.removeEventListener(mouseUpEvent, mysHoreCall);
window.removeEventListener(mousemoveEvent,mysPohybCall);
window.removeEventListener(mousemoveEvent, lavaHranicaZvecPosun);
window.removeEventListener(mousemoveEvent, pravaHranicaZvecPosun);
window.removeEventListener(mousemoveEvent, horeHranicaZvecPosun);
nastavOstatneOknaSpet();
}

function nastavOstatneOknaSpet()
{
var oknoClass = 'window';
var zIndex = -1;
var zindex1 = 1;
var okna = plocha.getElementsByClassName(oknoClass);
var dlzka = okna.length;
for (j=0;j<dlzka;j=j+1){
okna[j].style.zIndex = zIndex;
}
elemen.style.zIndex = zindex1;
}

var pravaHranicaZvec=function(event)
{
event.preventDefault();
event.stopPropagation();
lastMouseYCord = event.clientY;
lastMouseXCord = event.clientX;

inizializaciaKliku(this);
var useCapture = false;
window.addEventListener(mouseUpEvent,mysHoreCall,useCapture);
window.addEventListener(mousemoveEvent,pravaHranicaZvecPosun,useCapture);
}

var pravaHranicaZvecPosun = function(event)
{
event.stopPropagation();
event.preventDefault();
var novaRiska=(elemen.offsetWidth)+(event.clientX);
novaRiska = (novaRiska - lastMouseXCord);
lastMouseXCord = event.clientX;
var pom1 = novaRiska + elemen.offsetLeft;
var pom2 = plocha.offsetWidth + plocha.offsetLeft;
if (pom1 >= pom2){
	novaRiska = plocha.offsetWidth - elemen.offsetLeft
	novaRiska = novaRiska  + plocha.offsetLeft;
}
if (minimalnaVelkostOkna >= novaRiska ){
	novaRiska = minimalnaVelkostOkna;
}
elemen.style.width = novaRiska + pixels;
	okna = elemen.getElementsByClassName('doleHoreStranaHranica');
	var dlzka = okna.length;
for (j=0;j<dlzka;j=j+1)
{
okna[j].style.width = (novaRiska - velkostHranice * 2);
okna[j].style.width = okna[j].style.width + pixels;
}
var prvy = 0;
var dva = 2;
titulok = elemen.getElementsByClassName('titleOfWindow');
titulok[prvy].style.width=(novaRiska-velkostHranice*dva);
titulok[prvy].style.width=titulok[prvy].style.width + pixels;
minimize = elemen.getElementsByClassName('minTlacidlo');
minimize[prvy].style.marginLeft = (novaRiska - 43*3) + pixels;
}

var lavahranicaZvec = function(event)
{
	event.preventDefault();
event.stopPropagation();
  	var useCapture = false;
	inizializaciaKliku(this);
		lastMouseXCord = event.clientX;
  	lastMouseYCord = event.clientY;
	window.addEventListener(mouseUpEvent, mysHoreCall,useCapture);
	window.addEventListener(mousemoveEvent,lavaHranicaZvecPosun,useCapture);
}

var lavaHranicaZvecPosun=function(event)
{
event.preventDefault();
event.stopPropagation();
var elementos = elemen.style.left;
var stareVlavo = parseFloat(elementos);
var noveVlavo = event.clientX;
var velkost2 = 2;
if ((plochaLeftMinimum)>(noveVlavo))
{
noveVlavo = plochaLeftMinimum;
}
var novaSirka = elemen.offsetWidth;
novaSirka = novaSirka  + (stareVlavo - noveVlavo);  
if (minimalnaVelkostOkna<novaSirka)
{
elemen.style.left =(noveVlavo + pixels);     
	
okna = elemen.getElementsByClassName('doleHoreStranaHranica');
elemen.style.width = novaSirka + pixels;
var dlzka = okna.length;
for (j=0;j<dlzka;j=j+1){
		windows[j].style.width = (novaSirka-(velkostHranice*velkost2)) ;
		windows[j].style.width = windows[j].style.width + pixels;
}
var prvy = 0;
titulok = elemen.getElementsByClassName('titleOfWindow');
titulok[prvy].style.width = (novaSirka - velkostHranice * velkost2) + pixels;
minimalizovane = elemen.getElementsByClassName('minTlacidlo');
var tri = 3;
minimalizovane[prvy].style.marginLeft = (novaSirka - (43*tri));
minimalizovane[prvy].style.marginLeft = minimalizovane[prvy].style.marginLeft + pixels;
}                          
}

var doleHranicaZvec=function(event)
{
event.preventDefault();
event.stopPropagation();
inizializaciaKliku(this);
var useCapture = false;
window.addEventListener(mousemoveEvent,doleHranicaZvecPosun,useCapture);
lastMouseYCord = event.clientY;
window.addEventListener(mouseUpEvent,mysHoreCall,useCapture);
lastMouseXCord = event.clientX;
}

var doleHranicaZvecPosun=function(event)
{
event.preventDefault();
event.stopPropagation();
var velkost2=2;
var novaVyska = (elemen.offsetHeight+event.clientY);
novaVyska = (novaVyska-lastMouseYCord);
lastMouseYCord = event.clientY;
if (minimalnaVelkostOkna <= novaVyska)
{
novaVyska=(minimalnaVelkostOkna);
}
var pom1 = novaVyska + elemen.offsetTop;
var pom2 = plocha.offsetHeight + plocha.offsetTop;
if ((pom1)<=(pom2)){
novaVyska =(plocha.offsetHeight - elemen.offsetTop);
novaVyska = novaVyska + plocha.offsetTop;
}
elemen.style.height = novaVyska + pixels;
okna=elemen.getElementsByClassName('lavaPravaStranaHranica');
var dlzka = okna.length;
for (j=0;j<dlzka;j=j+1)
{
	windows[j].style.height=(novaVyska -(velkostHranice * velkost2));
	windows[j].style.height=(windows[j].style.height + pixels);
}
}

var horeHranicaZvec = function(event) {
event.preventDefault();
event.stopPropagation();
var useCapture = false;
window.addEventListener(mousemoveEvent,horeHranicaZvecPosun,useCapture);
inizializaciaKliku(this);
window.addEventListener(mouseUpEvent,mysHoreCall,useCapture);
lastMouseXCord=(event.clientX);
lastMouseYCord=(event.clientY);
}

//funkcia ktora zvecsi hornu hranicu
var horeHranicaZvecPosun=function(event)
{
//zastav eventu
event.preventDefault();
event.stopPropagation();
// naparsuj hodnotu
var topVal = elemen.style.top;
var oldVal=(parseInt(topVal));
var newVal=(event.clientY);
if(plochaHoreMinimum>newVal)
{
newVal=plochaHoreMinimum;
}
var pixels = 'px';
//skalkuluj novu vysku
var novaVyska =(elemen.offsetHeight) ;
novaVyska = novaVyska + (oldVal - newVal);
var velkost = 2;
if (novaVyska > minimalnaVelkostOkna) {
	elemen.style.top = newVal + pixels;     
	elemen.style.height = novaVyska + pixels;
	okna = elemen.getElementsByClassName('lavaPravaStranaHranica');
	var dlzka = okna.length;
	for (j=0;j<dlzka;j=j+1)
	{
		okna[j].style.height = (novaVyska - velkostHranice * velkost);
		okna[j].style.height = (okna[j].style.height) + pixels;
	}
}
}



function pridatHraniceKOKnu(elemen) {
	var elementDiv = 'div';
	var horeVlavoHranica = document.createElement(elementDiv);
	var classAtribut = 'class';
	var pixels = 'px';
	var border = 'hranica';
	var divElement = 'div';
    var pom1 =  'hranica rohHranica horeVlavoHranica';
    var dvojka = 2;
	horeVlavoHranica.setAttribute(classAtribut, pom1);
	horeVlavoHranica.style.height=velkostHranice+(pixels);
	horeVlavoHranica.style.width = velkostHranice+(pixels);
	elemen.appendChild(horeVlavoHranica);

	var horeHranica = document.createElement(divElement);
	var pom1 = 'hranica doleHoreStranaHranica horeHranica';
	horeHranica.setAttribute(classAtribut, pom1);
	horeHranica.style.width = (elemen.offsetWidth - velkostHranice * dvojka) + pixels;
	horeHranica.style.height = velkostHranice + pixels;
	elemen.appendChild(horeHranica);

	var horeVpravoHranica = document.createElement(divElement);
	pom1 = 'hranica rohHranica horeVpravoHranica';

	horeVpravoHranica.setAttribute(classAtribut, pom1);
	horeVpravoHranica.style.width = velkostHranice + pixels;
	horeVpravoHranica.style.height = velkostHranice + pixels;
	elemen.appendChild(horeVpravoHranica);

	pridanieClearu(elemen);

	var lavaHranica = document.createElement(divElement);
	var pom1= 'hranica lavaPravaStranaHranica lavaHranica';
	lavaHranica.setAttribute(classAtribut, pom1);
	lavaHranica.style.width = velkostHranice + pixels;
	lavaHranica.style.height = (elemen.offsetHeight - velkostHranice * dvojka) + pixels;
	
	elemen.appendChild(lavaHranica);
	
	pridatTitulok(elemen);

	var pravaHranica = document.createElement(divElement);
	var pom2 =  'hranica lavaPravaStranaHranica pravaHranica';
	pravaHranica.setAttribute(classAtribut, pom2);
	pravaHranica.style.width = velkostHranice + pixels;
	pravaHranica.style.height = (elemen.offsetHeight - velkostHranice * dvojka) + pixels;

	elemen.appendChild(pravaHranica);

	pridanieClearu(elemen);
	
	var doleVlavoHranica = document.createElement(divElement);
	var pom3 = 'hranica rohHranica doleVlavoHranica';
	doleVlavoHranica.setAttribute(classAtribut, pom3);
	doleVlavoHranica.style.width = velkostHranice + pixels;
	doleVlavoHranica.style.height = velkostHranice + pixels;
	elemen.appendChild(doleVlavoHranica);
	pridanieClearu(elemen);
	var doleHranica = document.createElement(divElement);
	var pom4 = 'hranica doleHoreStranaHranica doleHranica';
	doleHranica.setAttribute(classAtribut, pom4);
	doleHranica.style.width = (elemen.offsetWidth - velkostHranice * dvojka); + pixels
	doleHranica.style.height = velkostHranice + pixels;
	elemen.appendChild(doleHranica);

	pridanieClearu(elemen);
	var doleVpravoHranica = document.createElement(divElement);
	var pom5 = 'hranica rohHranica doleVpravoHranica';
	doleVpravoHranica.setAttribute(classAtribut, pom5 );
	doleVpravoHranica.style.width = velkostHranice; + pixels
	doleVpravoHranica.style.height = velkostHranice + pixels;
	
	elemen.appendChild(doleVpravoHranica);
}

//pridanie titulku
function pridatTitulok(elemen)
{
	var divElement = 'div';
	var classAtribut = 'class';
	var pixels = 'px';
	var dvojka =2;
	var trojka = 3;
	var image = 'img';
	var useCapture = false;
	var imageMinizeButton = 'image/minimize_but.png'; 
	var imageMaximizeButton = 'image/maximize_but.png';
	var imageCloseBut = 'image/close_but.png';

	var titulok = document.createElement(divElement);
	titulok.setAttribute(classAtribut,'titleOfWindow');
	var width = (elemen.offsetWidth - velkostHranice*dvojka) + pixels;
	titulok.style.width = width;

	elemen.appendChild(titulok);

	var minImage = document.createElement(image);
	minImage.src = imageMinizeButton;
	minImage.setAttribute(classAtribut, 'ikona minTlacidlo');
	minImage.addEventListener(click, minimalizovatOkno, useCapture);
	titulok.appendChild(minImage);

	var maximImage = document.createElement(image);
	maximImage.src = imageMaximizeButton;
	maximImage.setAttribute(classAtribut, 'ikona maximalTlacidlo');
	maximImage.addEventListener(click, maxilazaciaOkna, useCapture);
	titulok.appendChild(maximImage);

	var zavrietImage = document.createElement(image);
	zavrietImage.src = imageCloseBut;
	zavrietImage.setAttribute(classAtribut, 'ikona zavrieteTlacidlo');
	zavrietImage.addEventListener(click, zavrietWindow, useCapture);
	titulok.appendChild(zavrietImage);

	elemWidth = elemen.offsetWidth;
	minImage.style.marginLeft = (elemWidth-43*trojka)+pixels;
}

//inicializacia premennych
document.onreadystatechange = (inicializacia)  ;

var mousemoveEvent = 'mousemove';
var mouseUpEvent = 'mouseup';

//inicializacia globalnych premennych
var lastMouseXCord = 0;
var lastMouseYCord = 0;
var xShift = 0;
var yShift = 0;
var elemen;
var plocha;
var plochaLeftMinimum = 0;
var plochaLeftMax = 0;
var plochaHoreMinimum = 0;
var plochaHoreMaximum = 0;
var minimalnaVelkostOkna = 300;
var velkostHranice = 10;
var poslednaSirka = 0;
var posledneDolava = 0;
var oknaVBare = 0;
var maximalizovaneOkna = 0;
var pixels = 'px';
var click = 'click';
var classAttr = 'class';
var windowAttr = 'window';