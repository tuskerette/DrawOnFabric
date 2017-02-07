(function() {
  var $ = function(id){return document.getElementById(id)};

  var canvas = this.__canvas = new fabric.Canvas('c', {
    isDrawingMode: true
  });
  fabric.Object.prototype.transparentCorners = false;
  var clearEl = $('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

})();
