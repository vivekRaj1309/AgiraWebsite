let scrn = document.getElementById("screen");

function input(x) {
  scrn.value = scrn.value + x;
}
function allClear() {
  scrn.value = " ";
}

function del() {
  scrn.value = scrn.value.slice(0, -1);
}

function cal() {
  try {
    scrn.value = eval(scrn.value);
  } catch {
    scrn.value = "Error..";
  }
}
