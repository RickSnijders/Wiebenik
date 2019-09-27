function openNav() {
  document.getElementById("mySidenav").style.width = "300px";  //Het zijmenu wordt breeder
  document.getElementById("main").style.marginLeft = "300px";  //De pagina krijgt een margin links
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";		//Zijmenu wordt niet meer zichtbaar
  document.getElementById("main").style.marginLeft = "0px";		//De margin links wordt verlaagt
}



