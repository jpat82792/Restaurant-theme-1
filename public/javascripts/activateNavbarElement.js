var underlineActiveMenuElement = function(){
  console.log("underlineActiveMenuElement()");
  underlineNavbarElement();
  underlineMobileNavbarElement();
}

var underlineNavbarElement = function(){
  var navbarElementContainer = document.querySelector('ul[class="navbar-items"]');
  var currentUrl = window.location.pathname;
  switch(currentUrl){
    case "/":
      console.log("news");
      navbarElementContainer.children[0].style = "font-weight:700;";
      break;
    case "/menu":
      console.log("menus");
      navbarElementContainer.children[1].style = "font-weight:700;";
      break;
    case "/events":
      console.log("events");
      navbarElementContainer.children[2].style = "font-weight:700;";
      break;
    default:
      navbarElementContainer.children[4].style = "font-weight:700;";
      
  }
}

var underlineMobileNavbarElement = function(){
  var navbarMobileElement = document.getElementsByClassName('mobile-navigation-modal-link');
  var currentUrl = window.location.pathname;
  switch(currentUrl){
    case "/":
      console.log("news");
      navbarMobileElement[0].style = "font-weight:700;";
      break;
    case "/menu":
      console.log("menus");
      navbarMobileElement[1].style = "font-weight:700;";
      break;
    case "/events":
      console.log("events");
      navbarMobileElement[2].style = "font-weight:700;";
      break;
    default:
      navbarMobileElement[3].style = "font-weight:700;"; 
  }
}

underlineActiveMenuElement();
