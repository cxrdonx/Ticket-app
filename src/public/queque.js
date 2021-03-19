'use strict'
console.log("bienvenido");
var push = document.querySelector("#push");
var ingresar = document.querySelector("#ok");
// var genOt = document.querySelector("#re");
   var canvas = document.querySelector("#canvas");
   var secondCanvas = document.querySelector("#canvas2");
   var number = 240;
   var arr = [];

push.addEventListener('click', function(){
    generate();
});
ingresar.addEventListener('click', function(){
    newTicket(number);
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
         kill();
         var ctx = canvas.getContext('2d');
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


function kill(){
    canvas.width = 300;
    canvas.height = 150;
}