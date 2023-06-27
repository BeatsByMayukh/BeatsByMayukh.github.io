document.getElementById("bar").addEventListener("click", function ham() {
    document.getElementById("nav-ul").style.display = "flex";
  
    document.getElementById("nav-ul").style.top = "0";
    document.getElementById("cross").style.display = "block";
    document.getElementById("bar").style.display = "none";
})
document.getElementById("cross").addEventListener("click", function hide() {
     document.getElementById("nav-ul").style.top = "100%";
 
    document.getElementById("cross").style.display = "none";
    document.getElementById("bar").style.display = "block";

})

