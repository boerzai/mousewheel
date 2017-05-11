function mousewheel(obj,down,up){
	if(document.attachEvent){
     obj.attachEvent("onmousewheel",scrollFn()); //IE、 opera
     }else if(document.addEventListener){
     obj.addEventListener("mousewheel",scrollFn,false);
      //chrome,safari -webkit-
     obj.addEventListener("DOMMouseScroll",scrollFn,false);
     //firefox -moz-
   }
   function scrollFn(e){
     var ev=e||window.event;
     if(ev.preventDefault){
			ev.preventDefault();//FF chrome
		}else{
			ev.returnValue=false;//IE
		}
		var dir=ev.detail||ev.wheelDelta;
		if(dir==-3||dir==120){
			down.call(obj)
		}else if(dir==3||dir==-120){
			up.call(obj)
		}
   }
}
//放大缩小
