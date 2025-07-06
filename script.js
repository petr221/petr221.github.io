let password = "12345";

function checkpassword() {
    let input = document.getElementById("passwordinput").value;
    let text = document.getElementById("text")
    if (input === password) {
        text.innerText = "Correct password";
        text.style.color = "green";
        text.style.fontWeight = "bold";
        setTimeout(() => {
            text.style.color = "black";
        }, 1000);
    } else if (input === "") {
        text.innerText = "Write something"
        document.getElementById("passwordinput").value = '';
    } else {
        text.innerText = "Invalid password"
        text.style.color = "red";
        text.style.fontWeight = "bold";
        document.getElementById("passwordinput").value = '';
        setTimeout(() => {
            text.style.color = "black";
            text.innerText = "Enter a password:"
        }, 1000);
    }
}

