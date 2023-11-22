//Verificações para uma página de cadastro
//Verifica se o email é válido ou não, ela:
//não aceita um caractere especial como o primeiro da string,
//não aceita um email sem @,
//não aceita um email com @ e sem um . depois,
//não aceita um email com . como a última letra
//O(n)
function verifica_email(email) {
    if (email.charCodeAt(0) <= 47 || email.charCodeAt(0) >= 123 || (email.charCodeAt(0) >= 58 && email.charCodeAt(0) < 65) || (email.charCodeAt(0) > 90 && email.charCodeAt(0) < 97)) {
        return false;
    }
    else {
        for (let i = 1; i < email.length; i++) {
            if (email[i] == '@') {
                for (let j = i + 1; j < email.length; j++) {
                    if (email[j] == '.') {
                        if (email[email.length - 1] != '.') {
                            return true;
                        }
                    }
                }
                return false;
            }
        }
        return false;
    }
}
//Verifica se o nome é válido ou não,
//vai ser usada para o sobrenome também,
//não aceita a maioria dos caracteres especiais
//O(n)
function verifica_nome(nome) {
    if (nome.length == 0) {
        return false;
    }
    for (let i = 0; i < nome.length; i++) {
        if (nome.charCodeAt(i) < 32 || (nome.charCodeAt(i) > 32 && nome.charCodeAt(i) < 39) || (nome.charCodeAt(i) > 39 && nome.charCodeAt(i) < 65) || (nome.charCodeAt(i) > 90 && nome.charCodeAt(i) < 94) || nome.charCodeAt(i) == 95 || (nome.charCodeAt(i) > 122 && nome.charCodeAt(i) < 126)) {
            return false;
        }
    }
    return true;
}
//Verifica se a senha é válida ou não,
//para a senha ser aceita ela precisa ter os requisitos:
//uma letra maiúscula
//um número
//mínimo de 6 letras
//O(n)
function verifica_senha(senha) {
    let requisito_numero = 0;
    let requisito_letra_maiuscula = 0;
    if (senha.length < 6) {
        return false;
    }
    for (let i = 0; i < senha.length; i++) {
        if (requisito_numero == 0) {
            if (senha.charCodeAt(i) > 47 && senha.charCodeAt(i) < 58) {
                requisito_numero++;
            }
        }
        if (requisito_letra_maiuscula == 0) {
            if (senha.charCodeAt(i) > 64 && senha.charCodeAt(i) < 91) {
                requisito_letra_maiuscula++;
            }
        }
        if (requisito_letra_maiuscula > 0 && requisito_numero > 0) {
            return true;
        }
    }
    return false;
}
//Verifica se as duas senhas são iguais ou não


function verifica() {
    let email_front = document.querySelector("#email");
    let nome_front = document.querySelector("#nome");
    let sobrenome_front = document.querySelector("#sobrenome");
    let senha_front = document.querySelector("#senha");
    let confirma_senha_front = document.querySelector("#confirma_senha");
    let check_front = document.getElementById("check");
    let erro_email = document.getElementById("erro_email");
    let erro_nome = document.getElementById("erro_nome");
    let erro_sobrenome = document.getElementById("erro_sobrenome");
    let erro_senha = document.getElementById("erro_senha");
    let erro_confirmar_senha = document.getElementById("erro_confirmar_senha");
    // let erro_check = document.getElementById("erro_check");
    console.log(senha_front.value);
    console.log(confirma_senha_front.value);
    if (verifica_email(email_front.value) == false) {
        erro_email === null || erro_email === void 0 ? void 0 : erro_email.textContent = "Insira um email no formato abc@email.com";
    }
    else {
        erro_email === null || erro_email === void 0 ? void 0 : erro_email.innerHTML = "<p></p>";
    }
    if (verifica_nome(nome_front.value) == false) {
        erro_nome === null || erro_nome === void 0 ? void 0 : erro_nome.textContent = "Insira um nome válido";
    }
    else {
        erro_nome === null || erro_nome === void 0 ? void 0 : erro_nome.innerHTML = "<p></p>";
    }
    if (verifica_nome(sobrenome_front.value) == false) {
        erro_sobrenome === null || erro_sobrenome === void 0 ? void 0 : erro_sobrenome.textContent = "Insira um sobrenome válido";
    }
    else {
        erro_sobrenome === null || erro_sobrenome === void 0 ? void 0 : erro_sobrenome.innerHTML = "<p></p>";
    }
    if (verifica_senha(senha_front.value) == false) {
        erro_senha === null || erro_senha === void 0 ? void 0 : erro_senha.textContent = "Insira uma senha válida: mínimo de 6 letras, uma maiúscula e um número ";
    }
    else {
        erro_senha === null || erro_senha === void 0 ? void 0 : erro_senha.innerHTML = "<p></p>";
    }
    if(senha_front.value != confirma_senha_front.value){
        erro_confirmar_senha === null || erro_confirmar_senha === void 0 ? void 0 : erro_confirmar_senha.textContent = "As senhas não são iguais";
    }
    else{
        erro_confirmar_senha === null || erro_confirmar_senha === void 0 ? void 0 : erro_confirmar_senha.innerHTML = "<p></p>";
    }
    if(check_front.checked == false){
        erro_check === null || erro_check === void 0 ? void 0 : erro_check.textContent = "Os termos precisam ser aceitos";
    }
    else{
        erro_check === null || erro_check === void 0 ? void 0 : erro_check.innerHTML = "<p></p>";
    }
}
