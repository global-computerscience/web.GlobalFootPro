document.getElementById("search-img").addEventListener("click", function(){ 
    var inputfile = document.getElementById("inputfile")
    inputfile.click();
}); 
document.getElementById("inputfile").addEventListener('change', function(){
    var name =document.getElementById("profile-img");
    name.value = this.value;
  });