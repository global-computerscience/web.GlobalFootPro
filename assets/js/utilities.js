document.getElementById("boxxbox").addEventListener("click", function(){ 
    document.getElementById("boxxbox").classList.add("active"); 
    document.getElementById("boxps4").classList.remove("active"); 
}); 
document.getElementById("boxps4").addEventListener("click", function(){ 
    document.getElementById("boxps4").classList.add("active"); 
    document.getElementById("boxxbox").classList.remove("active"); 
}); 


