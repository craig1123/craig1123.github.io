$('document').ready(function () {

//variables
  var boxes = $('.box');

  var colors = 'white green red blue yellow';
  var color = 'white';

//clicking
  boxes.on('click', function () {
    $(this).addClass(color);
  })

//double-click to remove
  boxes.on('dblclick', function () {
    $(this).removeClass(color);
  })
  //no matter the color, it'll go black
  boxes.on('dblclick', function() {
    $(this).removeClass(colors);
  })

//dragging
    var drags = false;
    boxes.on('mousedown',function() {
      drags = true;
    })
    boxes.on('mouseover', function () {
      if (drags === true) {
        $(this).addClass(color);
      }
    })
    boxes.on('mouseup', function () {
      var dragged = drags;
      drags = false;
      if (!dragged) {
        boxes.toggle();
      }
    })


  //Reset
  $('#reset').on('click', function () {
    boxes.removeClass(color)
  })
  $('#reset').on('click', function() {
    boxes.removeClass(colors)
  })

//painting

  $('#red').on('click', function() {
    color = 'red';
  })
  $('#blue').on('click', function() {
    color = 'blue';
  })
  $('#green').on('click', function() {
    color = 'green';
  })
  $('#yellow').on('click', function() {
    color = 'yellow';
  })
  $('#white').on('click', function() {
    color = 'white';
  })
})
