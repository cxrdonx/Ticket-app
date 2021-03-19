'use strict'
console.log("bienvenido");
var push = document.querySelector("#push");
var ingresar = document.querySelector("#ok");
// var genOt = document.querySelector("#re");
   var canvas = document.querySelector("#canvas");
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
     function generate(){
         number++;
         var ctx = canvas.getContext('2d');
         kill();
         ctx.font = "40pt verdana";
         ctx.fillStyle = "white";
         ctx.lineWidth = '5';
         ctx.fillText(number,100,78);
         ctx.fillColor = "white";
     }

function newTicket(){
      arr.push(number);
      var prueba =  Array.prototype.includes(arr);
      console.log(prueba);
      console.log(arr);
  }

function cleanLast(){
   kill();
    arr.pop();
    console.log(arr);
}
function kill(){
    canvas.width = 300;
    canvas.height = 150;
}