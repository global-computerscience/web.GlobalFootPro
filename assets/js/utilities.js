document.getElementById("boxxbox").addEventListener("click", function(){ 
    document.getElementById("boxxbox").classList.add("active"); 
    document.getElementById("boxps4").classList.remove("active"); 
}); 
document.getElementById("boxps4").addEventListener("click", function(){ 
    document.getElementById("boxps4").classList.add("active"); 
    document.getElementById("boxxbox").classList.remove("active"); 
}); 
document.getElementById("cadastro1").addEventListener("click", function(){ 
    mixpanel.track("Click Cadastrar1 Home");
}); 
document.getElementById("cadastro2").addEventListener("click", function(){ 
    mixpanel.track("Click Cadastrar2 Home");
}); 
document.getElementById("criarconta").addEventListener("click", function(){ 
    mixpanel.track("Click criarconta Singup");
}); 