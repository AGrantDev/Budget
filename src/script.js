let button = document.getElementsByClassName("window-collapse-button");
let windowBody = document.getElementsByClassName("window-body");


for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        windowBody[i].style.display = "none";
    });
}