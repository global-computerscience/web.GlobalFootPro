var typingTimer;                //timer identifier
var doneTypingInterval = 1000; 
document.getElementById("search-img").addEventListener("click", function(){ 
    var inputfile = document.getElementById("inputfile")
    inputfile.click();
}); 
document.getElementById("inputfile").addEventListener('change', function(){
    var name =document.getElementById("profile-img");
    name.value = this.value;
  });
  document.getElementById("confirmEmail").addEventListener('keyup', function(){
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTypingEmail, doneTypingInterval);
    
  });
  document.getElementById("confirmsenha").addEventListener('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });
  function doneTyping () {
    var senha =document.getElementById("senha").value;
    var confirm = document.getElementById("confirmsenha").value;
    if(senha != confirm){
        alert("As senhas não correspondem")
    }
  }
  function doneTypingEmail(){
    var email =document.getElementById("email").value;
    var confirm =document.getElementById("confirmEmail").value;
    if(email != confirm){
        alert("Os emails não correspondem")
    }
  }