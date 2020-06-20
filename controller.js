
$(document).ready(function () {
  initBoxes();
});

function log(msg) {
  const messageBox = $("#message-box");
  messageBox.append(`${new Date().toLocaleTimeString()}: ${msg}\n`);
  const position = messageBox.get(0).scrollHeight;
  messageBox.scrollTop(position);
}

// alt. method but not as nice as jQuery
function logEx(msg) {
  const messageBoxDom = document.getElementById("message-box");
  messageBoxDom.innerHTML =
    messageBoxDom.innerHTML +
    `${new Date().toLocaleTimeString()}: ${msg}\n`;
  const position = messageBoxDom.scrollHeight;
  messageBoxDom.scrollTop = position;
}

function initBoxes() {
  log("Creating boxes");
  var boxes = $();
  for (i = 0; i < 6; i++) {
    boxes = boxes.add(createBox());
  }
  // Don't change DOM in loop multiple times
  // Append exactly 1 time for efficiency
  var container = $("#container");
  container.append(boxes);
}

function createBox() {
  const box = $("<div>")
    .addClass("box")
    .click(function () {
      $(this).effect("shake", { distance: 5 });
      randomBoxColor($(this));
    });
  randomBoxColor(box);
  return box;
}

function randomBoxColor(box) {
  // this function needs Jquery UI
  box.animate({ backgroundColor: createRGBValues() }, "slow");
}

function createRGBValues() {
  const val = function () {
    return Math.floor(Math.random() * 255);
  };
  const rgb = `rgb(${val()},${val()},${val()})`;
  log(`generated ` + rgb);
  return rgb;
}