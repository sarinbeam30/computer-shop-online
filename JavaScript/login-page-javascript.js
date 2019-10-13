//----------------------------- Function Hide Menu on Scroll --------------------------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  // this.console.log("currentScrollPos : " + currentScrollPos);
  
  if(currentScrollPos === 0){
    document.getElementById("panel-header-hide-menu-on-scroll").style.top = "0";
    document.getElementById("header-sticky").style.marginTop = "30px";
  }

  else{
    document.getElementById("panel-header-hide-menu-on-scroll").style.top = "-30px";
    document.getElementById("header-sticky").style.marginTop = "0";
  }

  prevScrollpos = currentScrollPos;
 
}