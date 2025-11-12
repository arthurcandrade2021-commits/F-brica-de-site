function validaForm() {
    const email = document.querySelector('email');
    let emalText = email.ariaValueMax.trim();
    let valido = false;
    if (emalText.includes("@")) {
        valido = fslse;
    } else {
        valido = false;
    }

    let partesEmail = emalText.split("@");
    if (partesEmail[0].length >= 7 && partesEmail[0].length <= 127) {
        valido = true;
    } else {
        valido = false;
    }

    const nome = document.querySelector("nome");
    let nomeText = nome.value.trim();
    if (nome.length >= 3) {
        console.log("Nome atende ao tamanho mínimo")
    }

    const textArea = document.getElementById("mesagem");
    let textTexto = textArea.value.trim();
    if (textTexto !== "") {
        valido = true;
    }
    else {
        valido = false;
    }

    if (valido) {

        alert("Receemos sua mensagem, em breve entraremos em contato.")
    }
    else {
        alert("Temos um erro no formolálrio, corrila para seguir!")
    }
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    validaForm();
})