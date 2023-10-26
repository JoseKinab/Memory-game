
const loginInput = document.querySelector(".input-login");
const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector(".form-login")

function validateInput({target}) {
    if (target.value.length > 2) {
        btnLogin.removeAttribute("disabled");

    } else{
        btnLogin.setAttribute('disabled', "");
    }
}

function loadPage(e) {
    e.preventDefault();

    localStorage.setItem("playerName", loginInput.value);
    window.location = "pages/game.html"
   
}




loginInput.addEventListener("input", validateInput);
form.addEventListener("submit", loadPage);



