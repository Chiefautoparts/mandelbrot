importScripts("mandelbrotGenerator.js");

var generator;

self.addEventListener("message", function(e)
{
  var data = e.data;
  var generator = new MandelbrotGenerator(data.width, stat.height, data.left, data.top, data.right, data.bottom);
  generator.draw(data.imageData);
  self.postMessage(data.imageData);
  self.close();
});

var console = {
  log: function(msg)
  {
    self.postMessage({
      type: "log",
      message: msg
    });
  }
};
