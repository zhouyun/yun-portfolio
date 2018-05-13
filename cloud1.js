window.onload = function() {
  var canvas = document.getElementsByClassName('myCanvas');
  console.log("load!!!");
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(20,20);
  ctx.bezierCurveTo(20,100,200,100,200,20);
  ctx.stroke();
  console.log(ctx); 
}
