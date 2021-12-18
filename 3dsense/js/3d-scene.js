'use strict';


let $window = $(window);
let $scene = $('.scene');
let rX = -17.5;
let rY = -43.5;
let $queenFront = $( '.flag .front' );
let $dancerFront=$('.dancer .front');
let $snowFront=$('.snowman .front');
let $dancer=$('.dancer')



const rotateScene = function ( event ) {
    rY += event.originalEvent.movementX/2;
   // rX -= event.originalEvent.movementY/2;
    $scene.css( 'transform', 'rotateX('+ rX +'deg) rotateY('+ rY +'deg)' );
    $queenFront.css( '--rY', -rY+'deg' );
    $dancerFront.css( '--rY', -rY+'deg' );
    $snowFront.css( '--rY', -rY+'deg' );
  }


const moveDancer = function ( event ) {

    let tX = Math.random() * 360 + 30;
    let tZ = Math.random() * 360 - 120;
    $dancer.css( '--tX', tX+'px' );
    $dancer.css( '--tZ', tZ+'px' );
    console.log( tX, tZ );
  }



$('.face' ).prop('draggable', false );

$window.on( 'mousedown', function(){
  $window.on( 'mousemove', rotateScene );
  } );

$window.on( 'mouseup', function(){
  $window.off( 'mousemove', rotateScene );
  } );



  $dancer.on( 'mouseover', moveDancer );







function reset() {

  $dancer.css( '--tX', 350+'px' );
  $dancer.css( '--tZ', 100+'px' );

  
}







  function opendoor() {
    var obj = document.getElementById("frontdoor");   
    if (obj.getAttribute("src") == "image/tentbefore.png") {
        obj.setAttribute("src", "image/doorafter.png");     
    } else { 
        obj.setAttribute("src", "image/tentbefore.png"); 
    }

  
}

function welcome(){

  var target = document.getElementsByClassName("title")[0];
  
  //animation: 1s swing ease-in-out infinite alternate;
  if ( target.style["animation"] =="1s swing ease-in-out infinite alternate") {
    target.style["animation_play-state"] = "paused";   
} else { 
  target.style["animation"] = "1s swing ease-in-out infinite alternate"
}

var obj = document.getElementById("title1");   
if (obj.getAttribute("src") == "image/titlebefore.png") {
    obj.setAttribute("src", "image/titleafter.png");     
} else { 
    obj.setAttribute("src", "image/titlebefore.png"); 
}
var obj = document.getElementById("title2");   
if (obj.getAttribute("src") == "image/titlebefore.png") {
    obj.setAttribute("src", "image/titleafter.png");     
} else { 
    obj.setAttribute("src", "image/titlebefore.png"); 
}

}

function display(){
  var obj = document.getElementById("display");   
  if (obj.getAttribute("src") == "image/tentleft.png") {
      obj.setAttribute("src", "image/tentside.png");     
  } else { 
      obj.setAttribute("src", "image/tentleft.png"); 
  }

}

var audio=document.getElementById("audio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
  
}