var modal = document.getElementById('modal');
var img = document.getElementsByClassName("gallery-item__image");
var modalImg = document.getElementById("modal-image");
var modalCaption = document.getElementById("modal-caption");
var i;

for(i=0;i< img.length;i++) {    
    img[i].onclick = function(){

    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML = this.alt;

  }
}

var span = document.getElementsByClassName("gallery-modal__close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

function applyTheme(theme) {
  document.body.classList.remove("theme-backendless", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#theme").addEventListener("change", function() {
    applyTheme(this.value);
  });
 
});