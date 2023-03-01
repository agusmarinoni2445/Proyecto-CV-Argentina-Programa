inputName = document.getElementById("fname");
inputLastName = document.getElementById("lname");
inputEmail = document.getElementById("lemail");
inputTextArea = document.getElementById("textarea");
messageForm = document.getElementById("message");

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    inputName.value.length == 0 ||
    inputLastName.value.length == 0 ||
    inputEmail.value.length == 0 ||
    inputTextArea.value.length == 0
  ) {
    messageForm.innerHTML = "Verifique que todos los campos estan completos";
    messageForm.style.color = "red";
  } else {
    messageForm.innerHTML = "Los datos se enviaron correctamente";
    messageForm.style.color = "rgb(8, 26, 61)";
    inputName.value = "";
    inputLastName.value = "";
    inputEmail.value = "";
    inputTextArea.value = "";
  }
});
