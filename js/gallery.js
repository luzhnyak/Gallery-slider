var prev = document.getElementById('prev');
prev.onclick = sliderPrev
var next = document.getElementById('next');
next.onclick = sliderNext;
var gallery = document.getElementById('gallery')
var slider = document.getElementById('slider');
var imgs = slider.getElementsByTagName('img');
var Positions = 0;
var slider
// .clientWidth
var sw = slider.clientWidth;
sw = 0;
// console.log(imgs.length);
for (var i = 0; i<imgs.length; i++) {
  
  sw += imgs[i].clientWidth;
}

console.log(sw);

slider.style.width = sw + "px"
var gw = gallery.clientWidth;


if (gw>sw) {
  slider.style.left = (gw-sw)/2 + "px";
  prev.style.display = "none";
  next.style.display = "none";
}
// console.log(imgs);

function sliderPrev() {
    Positions = Positions - 150;
    // console.log(Positions);
    if (Positions > - sw + gw){
      slider.style.left = Positions + "px";  
    }else{
      Positions = - sw + gw;
      slider.style.left = Positions + "px";
    }
    
}

function sliderNext() {
    Positions = Positions + 150;
    // console.log(Positions);
    if (Positions<=0) 
    {      
      slider.style.left = Positions + "px";      
    }else{
      Positions = 0;
      slider.style.left = Positions + "px";
    }
    
}


if (slider.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    slider.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    slider.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    slider.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  slider.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
  e = e || window.event;

  // wheelDelta не дает возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;
  if (delta>0) {
    sliderNext();
  }else{
    sliderPrev();
  }
  
}