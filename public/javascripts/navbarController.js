var openNavigationModal = function(button, navbarModal){
  console.log("openNavigationModal()");
  if(button.dataset.state === "closed"){
    console.log("open the modal")
    button.dataset.state = "open";
    navbarModal.classList.add("active-mobile-navigation-modal");
  }
  else{
    console.log("close the modal");
    button.dataset.state = "closed";
    navbarModal.classList.remove("active-mobile-navigation-modal");
  }
}

var initNavbarButton = function(){
  console.log("initNavbarButton()");
  var navbarButton = document.getElementById("mobile-navigation-button");
  var navbarModal = document.getElementById("mobile-navigation-modal");
  navbarButton.onclick = function(){openNavigationModal(this, navbarModal)};  
}

initNavbarButton();
