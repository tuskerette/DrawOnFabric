var $ = function(id){return document.getElementById(id)};
var canvas = window._canvas = new fabric.Canvas('c'),
  clearEl = $('clear-canvas');

clearEl.onclick = function() { canvas.clear() };
canvas.selection = true;

canvas.isDrawingMode = true;
canvas.freeDrawingBrush = new fabric['PencilBrush'](canvas);
canvas.freeDrawingBrush.color = 'Midnightblue';
canvas.freeDrawingBrush.width = 2;
canvas.add(
  new fabric.Rect({ top: 100, left: 100, width: 50, height: 50, fill: '#ff5555',
  lockMovementX:true, lockMovementY: true, lockScaling: true, LockRotation:
true, selectable: false, isDrawingMode: true }),
  new fabric.Rect({ top: 150, left: 100, width: 50, height: 50, fill: '#ffcc00',
  lockMovementX:true, lockMovementY: true, lockScaling: true, LockRotation:
  true, selectable: false, isDrawingMode: true })
);
console.log(canvas.freeDrawingBrush);
