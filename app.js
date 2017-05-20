var $ = function(id){return document.getElementById(id)};
var canvas = window._canvas = new fabric.Canvas('c'),
  clearEl = $('clear-canvas');

clearEl.onclick = function() { canvas.clear() };
canvas.selection = true;

canvas.isDrawingMode = true;
canvas.freeDrawingBrush = new fabric['PencilBrush'](canvas);
canvas.freeDrawingBrush.color = 'Midnightblue';
canvas.freeDrawingBrush.width = 8;
console.log(canvas.freeDrawingBrush);
