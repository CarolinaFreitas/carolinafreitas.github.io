/*


function openNav() {
    document.getElementById("sidenav").style.display = "flex";
    ;document.getElementById("sidenav").style.width = "100%";
    
    
    document.getElementById("hamburguer").onclick = "closeNav()";
    document.getElementById("hamburguer").style.backgroundColor = "blue";
  }
  

    function closeNav() {
    document.getElementById("sidenav").style.width = "0";

    document.getElementById("hamburguer").onclick = "openNav()";
    document.getElementById("hamburguer").style.backgroundColor = "red";


  } 
  
  
  */

var options = {
  "animate": true,
  "patternWidth": 100,
  "patternHeight": 100,
  "grainOpacity": 0.05,
  "grainDensity": 1,
  "grainWidth": 3.97,
  "grainHeight": 1.59
}
grained("#elementId", options);



grained(body, options)