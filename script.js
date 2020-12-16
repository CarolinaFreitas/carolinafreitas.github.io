/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidenav").style.display = "flex";
    ;document.getElementById("sidenav").style.width = "100%";
    
    
    document.getElementById("hamburguer").onclick = "closeNav()";
    document.getElementById("hamburguer").style.backgroundColor = "blue";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";

    document.getElementById("hamburguer").onclick = "openNav()";
    document.getElementById("hamburguer").style.backgroundColor = "red";
  } 