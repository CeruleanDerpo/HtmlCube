var xRotSlider = document.getElementById('xRot');
var yRotSlider = document.getElementById('yRot');
var zRotSlider = document.getElementById('zRot');
var perspectiveSlider = document.getElementById('perspective');
var resetBtn = document.getElementById('resetBtn');
var backfaceToggle = document.getElementById('backfaceToggle');

var cube = document.getElementById('cube');

// reset on page load
function reset() {
    xRotSlider.value = 340;
    yRotSlider.value = 22;
    zRotSlider.value = 0;
    perspectiveSlider.value = 400;
    backfaceToggle.checked = true;
}

reset();

resetBtn.addEventListener("click", reset)

setInterval(Rot, 100);

function Rot() {
    var xRot = xRotSlider.value;
    var yRot = yRotSlider.value;
    var zRot = zRotSlider.value;
    var perspective = perspectiveSlider.value;

    cube.style.transform = `perspective(${perspective}px) rotateX(${xRot}deg) rotateY(${yRot}deg) rotateZ(${zRot}deg)`;
}