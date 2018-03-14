var underlineActiveMenuElement = function(){
  underlineNavbarElement();
}

var underlineNavbarElement = function(){
  var navbarElementContainer = document.querySelector('ul[class="navbar-items"]');
  var currentUrl = window.location.pathname;
  console.log(currentUrl);
}

var underlineMobileNavbarElement = function(){
  
}

underlineActiveMenuElement();
