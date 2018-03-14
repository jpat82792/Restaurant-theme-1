var selectModalOption = function(button, optionsContainer){
  var optionsContainer = document.getElementById('next-modal-options-container');
    var options = optionsContainer.children;
    for(var i = 0; i < options.length; i++){
      options[i].children[0].classList.remove('contact-modal-button-active');
      options[i].children[0].dataset.selected = false;
    }
    button.children[0].dataset.selected=true;
    button.children[0].classList.add('contact-modal-button-active');
    optionsContainer.classList.remove('no-option-selected');
}

var loadNextModal = function(modalContent, optionsContainer){
  console.log("loadNextModal()");
  var optionSelected = false;
  var selectedContent = "";
  var response = checkSelectedOption(optionsContainer, optionSelected, selectedContent);
  if(response !== null){
    optionSelected = response[0];
    selectedContent = response[1];
  }
  if(optionSelected){
    selectModalContent(selectedContent, modalContent);
  }
  else{
    optionsContainer.classList.add('no-option-selected');
  }
}

var selectModalContent = function(selectedContent, modalContent){
  switch(selectedContent){
    case "reservation":
      console.log("reservation");
      loadReservationContent(modalContent);
      break;
    case "comment":
      loadCommentContent(modalContent);
      break;
    case "question":
      loadQuestionContent(modalContent);
      break;
    default:
      console.log("Error: selectedContent is invalid"); 
  }
}

var checkSelectedOption = function(optionsContainer){
  console.log("checkSelectedOption()");
  var response = [];
  if(optionsContainer !== undefined){
    for(var i = 0; i < optionsContainer.children.length; i++){
      var temp = optionsContainer.children[i].children[0];
      if(temp.dataset.selected === "true"){
        response[0] = true;
        response[1] = temp.dataset.content;
      }
    }
    return response;
  }
  else{
    console.log("ERROR: optionsContainer is undefined");
    return null;
  }
}

var removeAllChildElements = function(parentElement, optionsContainer){
  console.log("removeAllChildElements()");  
  while(parentElement.firstChild){
    parentElement.removeChild(parentElement.firstChild);
  }
}
var loadCommunicationContent = function(modalContent, questionContent){
  var headerText = '';
  var subheaderText = '';
  if(questionContent){
    headerText = "Your question";
    subheaderText = "Sorry our site didn't answer your question. How can we help?";
  }
  else{
    headerText = "Your thoughts";
    subheaderText = "Your experience matters. Let us know what is on your mind.";
  }
  var previousModalContent = modalContent.innerHTML;
  modalContent.innerHTML = '<button type="button" class="go-back-button"><span class="fa fa-arrow-left"></span></button>'+
    '<div class="contact-modal-inner-content"><h1 class="contact-header">'
    +'</h1>'+
    '<h5 class="contact-subheader">'+ 
    '</h5>'+
    '<input type="text" placeholder="Your email" name="email" class="contact-modal-input">'+
    '<input type="text" placeholder="Subject" name="subject" class="contact-modal-input">'+
    '<textarea type="text" placeholder="Your question(s)" '+
    'name="message" class="contact-modal-input"></textarea>'+
    '<button type="button" class="contact-modal-confirm-button" id="contact-modal-next">'+
    'Send</button></div>';

  modalContent.querySelector('h1[class="contact-header"]').textContent = headerText;
  modalContent.querySelector('h5[class="contact-subheader"]').textContent = subheaderText;
  document.getElementById('contact-modal-next').onclick = function(){
    mockFXShowingAsyncRequest(modalContent, previousModalContent);
  }
  document.getElementsByClassName('go-back-button')[0].onclick = function() 
    {
      reloadContactModalStart(modalContent, previousModalContent);
    };
}

var reloadContactModalStart = function(modalContent, previousModalContent){
      modalContent.innerHTML = previousModalContent;  
      var optionsContainer =     document.getElementById('next-modal-options-container');
      if(optionsContainer != null){
        var options = optionsContainer.children;
        for(var i = 0; i < options.length; i++){
          options[i].onclick = function(){selectModalOption(this, optionsContainer);};
        }
        var nextButton = document.getElementById('contact-modal-next');
        nextButton.onclick = function(){loadNextModal(modalContent, optionsContainer);};
        var closeContactFormButtonMobile = document.getElementById('close-contact-modal-button');
        closeContactFormButtonMobile.onclick = function(){closeContactForm();};
      }
}
var loadQuestionContent = function(modalContentContainer){
  loadCommunicationContent(modalContentContainer, true);
};
var loadCommentContent = function(modalContentContainer){
  loadCommunicationContent(modalContentContainer, false);
};
var loadReservationContent = function(modalContentContainer){
  var previousModalContent = modalContentContainer.innerHTML;
modalContentContainer.innerHTML = '<button type="button" class="go-back-button"><span class="fa fa-arrow-left"></span></button>'+
    '<div class="contact-modal-inner-content"><h1 class="contact-header">'
    +'Reservation</h1>'+
    '<h5 class="contact-subheader">'+
    'We are always happy to save a seat for you at the Table.'
    +'</h5>'+
    '<input type="text" placeholder="Your email" name="email" class="contact-modal-input">'+
    '<input type="text" placeholder="Subject" name="subject" class="contact-modal-input">'+
    '<textarea type="text" placeholder="Your question(s)" '+
    'name="message" class="contact-modal-input"></textarea>'+
    '<button type="button" class="contact-modal-confirm-button" id="contact-modal-next">'+
    'Send</button></div>';
  document.getElementById('contact-modal-next').onclick = function(){
    mockFXShowingAsyncRequest(modalContentContainer, previousModalContent);
  }
  document.getElementsByClassName('go-back-button')[0].onclick = function() 
    {
      reloadContactModalStart(modalContentContainer, previousModalContent);
    };
};

var mockFXShowingAsyncRequest = function(modalContainer, previousModalContent){
  modalContainer.innerHTML = '<button type="button" class="go-back-button"><span class="fa fa-arrow-left"></span></button>'+
  '<p class="saving">Sending<span>.</span><span>.</span><span>.</span></p>';
  document.getElementsByClassName('go-back-button')[0].onclick = function() 
    {
      console.log("reloadContactModalStart");
      reloadContactModalStart(modalContainer, previousModalContent);
    };
  setTimeout( function(){
    mockFXShowResponse("Thank you","We will send a confirmation shortly", modalContainer, previousModalContent);}, 3000);
  
}

var mockFXShowResponse = function(header,message, modalContainer, previousModalContent){
  modalContainer.innerHTML = '<button type="button" class="go-back-button"><span class="fa fa-arrow-left"></span></button>'+'<div class="contact-modal-inner-content"><h1 class="contact-header"></h1><h5 class="contact-subheader"></h5></div>';
  modalContainer.querySelector('h1[class="contact-header"]').textContent = header;
  modalContainer.querySelector('h5[class="contact-subheader"]').textContent = message;
  document.getElementsByClassName('go-back-button')[0].onclick = function() 
    {
      console.log("reloadContactModalStart");
      reloadContactModalStart(modalContainer, previousModalContent);
    };
}

var openContactForm = function(){
  var contactModal = document.getElementById("contact-modal");
  contactModal.classList.add("active-contact-modal");
}

var closeContactForm = function(){
  var contactModal = document.getElementById("contact-modal");
  contactModal.classList.remove("active-contact-modal");
}

var initContactModalUi = function(){
  console.log("initContactModalUi()");
  var openContactFormButton = document.getElementById('open-contact-form');
  var openContactFormButtonMobile = document.getElementById('mobile-open-contact-form');
  var closeContactFormButtonMobile = document.getElementById('close-contact-modal-button');
  openContactFormButton.onclick = function(){openContactForm();};
  openContactFormButtonMobile.onclick = function(){openContactForm();};
  closeContactFormButtonMobile.onclick = function(){closeContactForm();};
  
  
  var optionsContainer = document.getElementById('next-modal-options-container');
  console.log(optionsContainer);
  var modalContent = document.getElementById('contact-modal-content');
  if(optionsContainer != null){
    var options = optionsContainer.children;
    for(var i = 0; i < options.length; i++){
      options[i].onclick = function(){selectModalOption(this, optionsContainer);};
    }
  }
  var nextButton = document.getElementById('contact-modal-next');
  nextButton.onclick = function(){loadNextModal(modalContent, optionsContainer);};
}

initContactModalUi();
