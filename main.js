var radius = 400; // adjust to move out items in and out 
var fields = $('.item'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
  if (window.console) {
    //console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});

const placeholder = document.getElementById('placeholder');
const items = document.querySelectorAll('.item');
const img = document.getElementById('img')


document.querySelectorAll(".item").forEach(function(element) {
	element.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('css')) {
            img.src = `css.png`
        }
	});
});