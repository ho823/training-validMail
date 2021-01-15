function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate() {
    const email = document.getElementById("email").value;
    const wrong = document.getElementById("ifWrong");
    const input = document.getElementById("email");
    const button = document.getElementById("background-arrow");

    if (checkEmail(email)) {
        wrong.style.display = "none";
    } else {
        wrong.style.display = "block";
        input.style.border = "solid hsl(0, 69%, 61%)";  
        input.style.backgroundImage = "url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "right 32% bottom 50%";
        button.style.background = "linear-gradient(135deg, hsl(0, 80%, 86%),hsl(0, 100%, 98%))";


    }
    return false;
}