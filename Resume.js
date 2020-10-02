
var light = true
var header = document.getElementById("header")

// --background-color: white;

function set_light() {
  console.log('to light theme');
  document.documentElement.style.cssText = "--background-color: white;--font_color_dark:rgb(17, 17, 17);--font_color_light:rgb(119, 119, 119);  --shadow: rgba(119, 119, 119, 0.877);"
  return
}

function set_dark() {
  console.log('to dark theme');
  document.documentElement.style.cssText = "--background-color:rgb(36, 34, 34);--font_color_dark:white;--font_color_light:rgb(192, 192, 192);--shadow: rgba(0, 0, 0, 0.877);"
  return
}


window.onload = set_light();

header.addEventListener("click", 
function(e) {  
  if (light) {
    set_dark()
    light = false
  }
  else{
    set_light()
    light = true
  }
}
, false);