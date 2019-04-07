document.addEventListener('DOMContentLoaded', function(event){
  if (document.getElementById("brandImage")) {
    document.getElementById("brandImage").addEventListener('click', function(event) {
      document.getElementById("start").scrollIntoView({
        behavior: "smooth"
      });
    })
  }
})