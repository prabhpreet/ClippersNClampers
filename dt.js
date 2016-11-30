  var counter = 1;
  var word = "150px";
  var line = "80px";
  var timeVar;
  var mainpage = "main.html";

function begin()
{
  
    timeVar = setInterval(function(){timer()},5000);
  
}


function updateTextArea(str, textType)
{
if(textType == "word")
    document.getElementById("textArea").innerHTML = "<p style=\"font-size:" + word + ";margin: 0px 0px 0px 0px;\">" + str+ "</p>";
if(textType == "line")
    document.getElementById("textArea").innerHTML = "<p style=\"font-size:" + line + ";margin: 0px 0px 0px 0px;\">" + str+ "</p>";

}
function updateImage(src)
{
  document.getElementById("imageArea").innerHTML = "<img src=\"" + src + "\" />";
}
function redirect()
{
  window.location.assign("about:blank");
}

function timer()
{
  switch(counter)
{

      case 1: updateTextArea("Allows single direction current flow", "line");
             updateImage("img/dt/diode1.JPG");
            break;
      case 2: updateTextArea("Acts as short in same direction", "line");
            updateImage("img/dt/diode2.JPG");
            break;
      case 3: updateTextArea("Acts as open in opposite direction", "line");
            updateImage("img/dt/diode3.JPG");
            break;
      case 4: redirect();
            clearTimeout(timeVar);
            break;
  }
  counter++;
}
