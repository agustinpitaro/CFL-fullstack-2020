let sizeOf = require('image-size');

sizeOf('data/conejo.jpg', function (err, dimensions) {
  console.log("Ancho:"+dimensions.width, "Alto:"+dimensions.height);
});