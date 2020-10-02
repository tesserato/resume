
var light = true
var toggle = document.getElementById("toggle")
var pic = document.getElementById("pic")

// --background-color: white;

function set_light() {
  console.log('to light theme');
  document.documentElement.style.cssText = "--background-color: white;--font_color_dark:rgb(17, 17, 17);--font_color_light:rgb(119, 119, 119);  --shadow: rgba(119, 119, 119, 0.877);"
  return
}

function set_dark() {
  console.log('to dark theme');
  document.documentElement.style.cssText = "--background-color:rgb(60, 66, 68);--font_color_dark:white;--font_color_light:rgb(192, 192, 192);--shadow: rgb(0, 0, 0);"
  pic.style.filter = "invert(100%)"

  setTimeout(function(){
    pic.attributeStyleMap.clear()
  }, 800);
  return
}


window.onload = set_light();

toggle.addEventListener("click", 
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