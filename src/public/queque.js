'use strict'
console.log("bienvenido");
var push = document.querySelector("#push");
var ingresar = document.querySelector("#ok");
// var genOt = document.querySelector("#re");
   var canvas = document.querySelector(".canvas");
   var secondCanvas = document.querySelector(".canvas2");
   var attend = document.querySelector("#attend");
   var number = 240;
   var arr = [];

push.addEventListener('click', function(){
    generate();
});
ingresar.addEventListener('click', function(){
    newTicket();
 });
attend.addEventListener('click', function(){
    seeTurn();
});

/*genOt.addEventListener('click', function(){
    cleanLast();
});
*/
var x = 0;
var y =0;

var drawInCanvas = function(x, y, number){
   this.x = x;
   this.y = y;

this.draw = function(){
    ctx.fillText(number,this.x,this.y);
}

}
     function generate(){
         number++;
         var ctx = canvas.getContext('2d');
         kill();
               ctx.font = "40pt verdana";
               ctx.fillStyle = "white";
               ctx.lineWidth = '5';
               ctx.fillText(number,100,78);
     }

function newTicket(){
      arr.push(number);
      var prueba =  Array.prototype.includes(arr);
      console.log(arr);
      seeQ();
  }
function cleanLast(){
   kill();
    arr.pop();
    console.log(arr); 
}
function seeQ(){
document.getElementById("textArea").value = arr ;
}

function seeTurn(){
    secondCanvas.width = secondCanvas.width;
    var ctx = secondCanvas.getContext("2d");
    ctx.font = "40pt verdana";
    ctx.fillStyle = "yellow";
    ctx.lineWidth = '5';
    var newArr;
    newArr = arr.shift();
    seeQ();
    if(newArr === undefined){
        ctx.fillText("empty",100,78)
        ctx.fillStyle;
    }else{
    console.log(arr);
    ctx.fillText(newArr,90,90)
    }

}
function kill(){
    canvas.width = 450;
    canvas.height = 150;
}

