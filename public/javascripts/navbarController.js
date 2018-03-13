var openNavigationModal = function(navbarModal){
  console.log("openNavigationModal()");
  navbarModal.classList.add("active-mobile-navigation-modal");
}

var closeNavigationModal = function(navbarModal){
  console.log("closeNavigationModal()");
  navbarModal.classList.remove("active-mobile-navigation-modal"); 
}

var initNavbarButton = function(){
  console.log("initNavbarButton()");
  var openNavbarButton = document.getElementById("mobile-navigation-button");
  var closeNavbarButton = document.getElementById("close-navigation-modal-button");
  var navbarModal = document.getElementById("mobile-navigation-modal");
  openNavbarButton.onclick = function(){openNavigationModal(navbarModal);};  
  closeNavbarButton.onclick = function(){closeNavigationModal(navbarModal);};
}

initNavbarButton();
