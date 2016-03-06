var globalLastMouseX = 0;
var globalLastMouseY = 0;
var shiftX = 0;
var shiftY = 0;
var elem;
var desktop;
var desktopMinLeft;
var desktopMaxLeft;
var desktopMinTop;
var desktopMaxTop;
var minWindowSize = 200;
var borderSize = 10;
var lastWidth;
var lastLeft;
var windowsInButtonBar;
var maximizedWindows;

document.onreadystatechange=initialize;
function initialize(){
   if (document.readyState=='complete'){
   	  windowsInButtonBar = new Array();
   	  maximizedWindows = new Array();
   	  var windows = document.getElementsByClassName('desktop');
      for (i = 0; i < windows.length; ++i){
      	addButtonBar(windows[i]);
      }
      var windows = document.getElementsByClassName('window');
      for (i = 0; i < windows.length; ++i){
      	addBordersToWindow(windows[i]);
      }
      addListeners();
   }
}

function addListeners() {
	  windows = document.getElementsByClassName('windowTitle');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', mouseDownCallback, false);
      }
      windows = document.getElementsByClassName('rightBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', rightBorderResize, false);
      }
      windows = document.getElementsByClassName('leftBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', leftBorderResize, false);
      }
      windows = document.getElementsByClassName('bottomBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', bottomBorderResize, false);
      }
      windows = document.getElementsByClassName('topBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', topBorderResize, false);
      }
      windows = document.getElementsByClassName('bottomRightBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', bottomBorderResize, false);
      	windows[i].addEventListener('mousedown', rightBorderResize, false);
      }
      windows = document.getElementsByClassName('bottomLeftBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', bottomBorderResize, false);
      	windows[i].addEventListener('mousedown', leftBorderResize, false);
      }
      windows = document.getElementsByClassName('topLeftBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', topBorderResize, false);
      	windows[i].addEventListener('mousedown', leftBorderResize, false);
      }
      windows = document.getElementsByClassName('topRightBorder');
      for (i = 0; i < windows.length; ++i){
      	windows[i].addEventListener('mousedown', topBorderResize, false);
      	windows[i].addEventListener('mousedown', rightBorderResize, false);
      }
}

function addButtonBar(elem) {
	var buttonBar = document.createElement('div');
	buttonBar.setAttribute('class', 'buttonBar');
	buttonBar.style.top = (elem.offsetHeight - 40) + 'px';
	elem.appendChild(buttonBar);

	var newWindowImg = document.createElement('img');
	newWindowImg.src = 'img/new_window.png';
	newWindowImg.setAttribute('class', 'newWindow');
	newWindowImg.addEventListener('click', newWindow, false);
	buttonBar.appendChild(newWindowImg);
}

var newWindow = function(event) {
	event.preventDefault();
	desktop = event.target.parentNode.parentNode; // najprv je buttonBar a potom je desktop
	newWindowDiv = document.createElement('div');
	newWindowDiv.setAttribute('class', 'window');
	newWindowDiv.style.left = desktopMinLeft + 'px';
	newWindowDiv.style.top = desktopMinTop + 'px';
	newWindowDiv.style.zIndex = 10;
	desktop.appendChild(newWindowDiv);
	addBordersToWindow(newWindowDiv);
	addListeners();
}

function addBordersToWindow(elem) {
	// topLeftBorder
	var topLeftBorder = document.createElement('div');
	topLeftBorder.setAttribute('class', 'border cornerBorder topLeftBorder');
	topLeftBorder.style.width = borderSize + 'px';
	topLeftBorder.style.height = borderSize + 'px';
	elem.appendChild(topLeftBorder);
	//topBorder
	var topBorder = document.createElement('div');
	topBorder.setAttribute('class', 'border bottomTopSideBorder topBorder');
	topBorder.style.width = (elem.offsetWidth - borderSize * 2) + 'px';
	topBorder.style.height = borderSize + 'px';
	elem.appendChild(topBorder);
	// topRight
	var topRightBorder = document.createElement('div');
	topRightBorder.setAttribute('class', 'border cornerBorder topRightBorder');
	topRightBorder.style.width = borderSize + 'px';
	topRightBorder.style.height = borderSize + 'px';
	elem.appendChild(topRightBorder);
	// clearFix
	addClearFix(elem);
	// leftBorder
	var leftBorder = document.createElement('div');
	leftBorder.setAttribute('class', 'border leftRightSideBorder leftBorder');
	leftBorder.style.width = borderSize + 'px';
	leftBorder.style.height = (elem.offsetHeight - borderSize * 2) + 'px';
	elem.appendChild(leftBorder);
	// title
	addTitleToWindow(elem);
	// rightBorder
	var rightBorder = document.createElement('div');
	rightBorder.setAttribute('class', 'border leftRightSideBorder rightBorder');
	rightBorder.style.width = borderSize + 'px';
	rightBorder.style.height = (elem.offsetHeight - borderSize * 2) + 'px';
	elem.appendChild(rightBorder);
	// clearFix
	addClearFix(elem);
	// bottomLeftBorder
	var bottomLeftBorder = document.createElement('div');
	bottomLeftBorder.setAttribute('class', 'border cornerBorder bottomLeftBorder');
	bottomLeftBorder.style.width = borderSize + 'px';
	bottomLeftBorder.style.height = borderSize + 'px';
	elem.appendChild(bottomLeftBorder);
	// bottomBorder
	var bottomBorder = document.createElement('div');
	bottomBorder.setAttribute('class', 'border bottomTopSideBorder bottomBorder');
	bottomBorder.style.width = (elem.offsetWidth - borderSize * 2) + 'px';
	bottomBorder.style.height = borderSize + 'px';
	elem.appendChild(bottomBorder);
	// bottomRightBorder
	var bottomRightBorder = document.createElement('div');
	bottomRightBorder.setAttribute('class', 'border cornerBorder bottomRightBorder');
	bottomRightBorder.style.width = borderSize + 'px';
	bottomRightBorder.style.height = borderSize + 'px';
	elem.appendChild(bottomRightBorder);
}

function addClearFix(elem){
	var clearFix = document.createElement('div');
	clearFix.setAttribute('class', 'clearFix');
	elem.appendChild(clearFix);
}

function addTitleToWindow(elem) {
	var title = document.createElement('div');
	title.setAttribute('class','windowTitle');
	title.style.width = (elem.offsetWidth - borderSize*2) + 'px';
	elem.appendChild(title);

	var minimizeImg = document.createElement('img');
	minimizeImg.src = 'img/minimize.png';
	minimizeImg.setAttribute('class', 'icon minimizeButton');
	minimizeImg.addEventListener('click', minimizeWindow, false);
	title.appendChild(minimizeImg);

	var maximizeImg = document.createElement('img');
	maximizeImg.src = 'img/maximize.png';
	maximizeImg.setAttribute('class', 'icon maximizeButton');
	maximizeImg.addEventListener('click', maximizeWindow, false);
	title.appendChild(maximizeImg);

	var closeImg = document.createElement('img');
	closeImg.src = 'img/close.png';
	closeImg.setAttribute('class', 'icon closeButton');
	closeImg.addEventListener('click', closeWindow, false);
	title.appendChild(closeImg);

	elemWidth = elem.offsetWidth;
	minimizeImg.style.marginLeft = (elemWidth - 40*3) + 'px';
}

var closeWindow = function(event) {
	event.preventDefault();
	var thisElem = event.target.parentNode.parentNode;
	thisElem.parentNode.removeChild(thisElem);
}

var minimizeWindow = function(event) {
	event.preventDefault();
	elem = event.target.parentNode.parentNode;
	desktop = elem.parentNode;
	var buttonBar = desktop.getElementsByClassName('buttonBar')[0];
	windowsInButtonBar[windowsInButtonBar.length] = {elemLeft: elem.style.left, elemTop: elem.style.top, elemWidth: elem.offsetWidth, elemHeight: elem.offsetHeight};
	windowIBB = document.createElement('div');
	windowIBB.setAttribute('class', 'windowInButtonBar');
	windowIBB.setAttribute('id', windowsInButtonBar.length - 1);
	windowIBB.addEventListener('click', restoreFromBar, false);
	if (windowsInButtonBar.length - 1 == 0){
		windowIBB.innerHTML = 'window';
	} else{
		windowIBB.innerHTML = 'window' + (windowsInButtonBar.length - 1);
	}
	buttonBar.appendChild(windowIBB);
	windows = buttonBar.getElementsByClassName('windowInButtonBar');
      for (i = 0; i < windows.length; ++i){
      	if (windows.length < 7){
      		windows[i].style.width = ((desktop.offsetWidth / 7) - 3 - 40) + 'px';
      	} else {
      		windows[i].style.width = ((desktop.offsetWidth / windows.length) - 3 - 40) + 'px';
      	}
    }
    desktop.removeChild(elem);
}

var restoreFromBar = function(event){
	event.preventDefault();
	thisElem = event.target;
	desktop = thisElem.parentNode.parentNode;
	var buttonBar = thisElem.parentNode;
	var thisElemId = thisElem.getAttribute('id');
	var obj = windowsInButtonBar[thisElemId];
	
	newWindowDiv = document.createElement('div');
	newWindowDiv.setAttribute('class', 'window');
	newWindowDiv.style.left = obj.elemLeft;
	newWindowDiv.style.top = obj.elemTop;
	newWindowDiv.style.width = obj.elemWidth + 'px';
	newWindowDiv.style.height = obj.elemHeight + 'px';
	desktop.appendChild(newWindowDiv);
	addBordersToWindow(newWindowDiv);
	addListeners();
	buttonBar.removeChild(thisElem);

	windows = buttonBar.getElementsByClassName('windowInButtonBar');
      for (i = 0; i < windows.length; ++i){
      	if (windows.length < 7){
      		windows[i].style.width = ((desktop.offsetWidth / 7) - 3 - 40) + 'px';
      	} else {
      		windows[i].style.width = ((desktop.offsetWidth / windows.length) - 3 - 40) + 'px';
      	}
    }
}

var maximizeWindow = function(event) {
	elem = event.target.parentNode.parentNode;
	elem.setAttribute('id', maximizedWindows.length)
	maximizedWindows[maximizedWindows.length] = {elemLeft: elem.style.left, elemTop: elem.style.top, elemWidth: elem.offsetWidth, elemHeight: elem.offsetHeight};
	elem.getElementsByClassName('maximizeButton')[0].removeEventListener('click', maximizeWindow);
	elem.getElementsByClassName('maximizeButton')[0].addEventListener('click', restoreWindow, false);
	elem.style.left = desktopMinLeft + 'px';
	elem.style.top = desktopMinTop + 'px';
	var newWidth = elem.parentNode.offsetWidth;
	var newHeight = elem.parentNode.offsetHeight-40;
	elem.style.width = newWidth + 'px';
	elem.style.height = newHeight + 'px';
	windows = elem.getElementsByClassName('bottomTopSideBorder');
	for (i = 0; i < windows.length; ++i){
		windows[i].style.width = (newWidth - borderSize * 2) + 'px';
	}
	windows = elem.getElementsByClassName('leftRightSideBorder');
		for (i = 0; i < windows.length; ++i){
			windows[i].style.height = (newHeight - borderSize * 2) + 'px';
	}
	title = elem.getElementsByClassName('windowTitle');
	title[0].style.width = (newWidth - borderSize * 2) + 'px';
	minimize = elem.getElementsByClassName('minimizeButton');
	minimize[0].style.marginLeft = (newWidth - 40*3) + 'px';
}

var restoreWindow = function(event) {
	elem = event.target.parentNode.parentNode;
	elemId = elem.getAttribute('id');
	obj = maximizedWindows[elemId];
	elem.style.left = obj.elemLeft;
	elem.style.top = obj.elemTop;
	var newWidth = obj.elemWidth;
	var newHeight = obj.elemHeight;
	elem.style.width = newWidth + 'px';
	elem.style.height = newHeight + 'px';
	windows = elem.getElementsByClassName('bottomTopSideBorder');
	for (i = 0; i < windows.length; ++i){
		windows[i].style.width = (newWidth - borderSize * 2) + 'px';
	}
	windows = elem.getElementsByClassName('leftRightSideBorder');
		for (i = 0; i < windows.length; ++i){
			windows[i].style.height = (newHeight - borderSize * 2) + 'px';
	}
	title = elem.getElementsByClassName('windowTitle');
	title[0].style.width = (newWidth - borderSize * 2) + 'px';
	minimize = elem.getElementsByClassName('minimizeButton');
	minimize[0].style.marginLeft = (newWidth - 40*3) + 'px';
	elem.getElementsByClassName('maximizeButton')[0].removeEventListener('click', restoreWindow);
	elem.getElementsByClassName('maximizeButton')[0].addEventListener('click', maximizeWindow, false);
}

function GetScreenCoordinates(obj) {
    var p = {};
    p.x = obj.offsetLeft;
    p.y = obj.offsetTop;
    while (obj.offsetParent) {
        p.x = p.x + obj.offsetParent.offsetLeft;
        p.y = p.y + obj.offsetParent.offsetTop;
       if (obj == document.getElementsByTagName('body')[0]) {
            break;
        }
        else {
           obj = obj.offsetParent;
        }
    }
    return p;
}


function initClick(thisElem){
  elem = thisElem.parentNode;
  var thisLeft;
  var thisTop;
  if (elem.style.left === '' || elem.style.top === ''){
    var thisCoors = GetScreenCoordinates(elem);
    thisLeft = thisCoors.x;
    thisTop = thisCoors.y;
  }else{
    thisLeft = parseFloat(elem.style.left);
    thisTop = parseFloat(elem.style.top);
  }
  elem.style.zIndex = 100;
  elem.style.left = thisLeft + 'px';
  elem.style.top = thisTop + 'px';
  shiftX = globalLastMouseX - thisLeft;
  shiftY = globalLastMouseY - thisTop;
  desktop = elem.parentNode;
  desktopMinLeft = desktop.offsetLeft;
  desktopMinTop = desktop.offsetTop;
  desktopMaxLeft = desktop.offsetWidth - elem.offsetWidth + desktop.offsetLeft;
  desktopMaxTop = desktop.offsetHeight - elem.offsetHeight + desktop.offsetTop;
}

var mouseDownCallback = function(event){
  event.preventDefault();
  globalLastMouseX = event.clientX;
  globalLastMouseY = event.clientY;
  initClick(this);
  window.addEventListener('mousemove', mouseMoveCallback, false);
  window.addEventListener('mouseup', mouseUpCallback, false);
}

var mouseMoveCallback = function(event)
{
	event.preventDefault();
	var newLeft = event.clientX - shiftX;
	var newTop = event.clientY - shiftY;
	if (newLeft <= desktopMinLeft){
		newLeft = desktopMinLeft;
	}
	if (newTop <= desktopMinTop){
		newTop = desktopMinTop;
	}
	if (newLeft >= desktopMaxLeft){
		newLeft = desktopMaxLeft;
	}
	if (newTop >= desktopMaxTop){
		newTop = desktopMaxTop;
	}
	elem.style.left = newLeft + 'px';
	elem.style.top = newTop + 'px'; 
}

var mouseUpCallback = function(event) {
	event.preventDefault();
	window.removeEventListener('mousemove', mouseMoveCallback);
	window.removeEventListener('mousemove', rightBorderResizeMove);
	window.removeEventListener('mousemove', leftBorderResizeMove);
	window.removeEventListener('mousemove', bottomBorderResizeMove);
	window.removeEventListener('mousemove', topBorderResizeMove);
	window.removeEventListener('mouseup', mouseUpCallback);
	setOtherWindowsBack();
}

function setOtherWindowsBack() {
	var windows = desktop.getElementsByClassName('window');
      for (i = 0; i < windows.length; ++i){
      	windows[i].style.zIndex = 0;
    }
    elem.style.zIndex = 1;
}

var rightBorderResize = function(event) {
	event.preventDefault();
	globalLastMouseX = event.clientX;
  	globalLastMouseY = event.clientY;
	initClick(this);
	window.addEventListener('mousemove', rightBorderResizeMove, false);
	window.addEventListener('mouseup', mouseUpCallback, false);
}

var rightBorderResizeMove = function(event) {
	event.preventDefault();
	var newWidth = elem.offsetWidth + event.clientX - globalLastMouseX;
	globalLastMouseX = event.clientX;
	if (newWidth <= minWindowSize){
		newWidth = minWindowSize;
	}
	if (newWidth + elem.offsetLeft >= desktop.offsetWidth + desktop.offsetLeft){
		newWidth = desktop.offsetWidth - elem.offsetLeft + desktop.offsetLeft;
	}
	elem.style.width = newWidth + 'px';
	windows = elem.getElementsByClassName('bottomTopSideBorder');
	for (i = 0; i < windows.length; ++i){
		windows[i].style.width = (newWidth - borderSize * 2) + 'px';
    }
    title = elem.getElementsByClassName('windowTitle');
    title[0].style.width = (newWidth - borderSize * 2) + 'px';
    minimize = elem.getElementsByClassName('minimizeButton');
    minimize[0].style.marginLeft = (newWidth - 40*3) + 'px';
}

var leftBorderResize = function(event) {
	event.preventDefault();
	globalLastMouseX = event.clientX;
  	globalLastMouseY = event.clientY;
	initClick(this);
	window.addEventListener('mousemove', leftBorderResizeMove, false);
	window.addEventListener('mouseup', mouseUpCallback, false);
}

var leftBorderResizeMove = function(event) {
	event.preventDefault();
	var oldLeft = parseFloat(elem.style.left);
	var newLeft = event.clientX;
	if (newLeft < desktopMinLeft){
		newLeft = desktopMinLeft;
	}
	var newWidth = elem.offsetWidth + (oldLeft - newLeft);  
	if (newWidth > minWindowSize) {
		elem.style.left = newLeft + 'px';     
		elem.style.width = newWidth + 'px';
	    
		windows = elem.getElementsByClassName('bottomTopSideBorder');
		for (i = 0; i < windows.length; ++i){
			windows[i].style.width = (newWidth - borderSize * 2) + 'px';
		}
		title = elem.getElementsByClassName('windowTitle');
		title[0].style.width = (newWidth - borderSize * 2) + 'px';
		minimize = elem.getElementsByClassName('minimizeButton');
		minimize[0].style.marginLeft = (newWidth - 40*3) + 'px';
	}                          
}

var bottomBorderResize = function(event) {
	event.preventDefault();
	globalLastMouseX = event.clientX;
  	globalLastMouseY = event.clientY;
	initClick(this);
	window.addEventListener('mousemove', bottomBorderResizeMove, false);
	window.addEventListener('mouseup', mouseUpCallback, false);
}

var bottomBorderResizeMove = function(event) {
	event.preventDefault();
	var newHeight = elem.offsetHeight + event.clientY - globalLastMouseY;
	globalLastMouseY = event.clientY;
	if (newHeight <= minWindowSize){
		newHeight = minWindowSize;
	}
	if (newHeight + elem.offsetTop >= desktop.offsetHeight + desktop.offsetTop){
		newHeight = desktop.offsetHeight - elem.offsetTop + desktop.offsetTop;
	}
	elem.style.height = newHeight + 'px';
	windows = elem.getElementsByClassName('leftRightSideBorder');
	for (i = 0; i < windows.length; ++i){
		windows[i].style.height = (newHeight - borderSize * 2) + 'px';
    }
}

var topBorderResize = function(event) {
	event.preventDefault();
	globalLastMouseX = event.clientX;
  	globalLastMouseY = event.clientY;
	initClick(this);
	window.addEventListener('mousemove', topBorderResizeMove, false);
	window.addEventListener('mouseup', mouseUpCallback, false);
}

var topBorderResizeMove = function(event) {
	event.preventDefault();
	var oldTop = parseFloat(elem.style.top);
	var newTop = event.clientY;
	if (newTop < desktopMinTop){
		newTop = desktopMinTop;
	}
	var newHeight = elem.offsetHeight + (oldTop - newTop);
	console.log(newHeight);
	if (newHeight > minWindowSize) {
		elem.style.top = newTop + 'px';     
		elem.style.height = newHeight + 'px';
		windows = elem.getElementsByClassName('leftRightSideBorder');
		for (i = 0; i < windows.length; ++i){
			windows[i].style.height = (newHeight - borderSize * 2) + 'px';
		}
	}
}