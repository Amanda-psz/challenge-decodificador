const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");



function bntCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
}

function criptografar(stringEncriptada) {
    let matrix_code = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrix_code.length; i++) {
        if(stringEncriptada.includes(matrix_code[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrix_code[i][0], matrix_code[i][1]);
        }
    }

    return stringEncriptada;
}

function bntDesencriptografar() {
    const textoDesencriptografado = desencriptografar(textArea.value);
    mensagem.value = textoDesencriptografado;
    textArea.value = "";
}

function desencriptografar(stringDesencriptada) {
    let matrix_code = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrix_code.length; i++) {
        if(stringDesencriptada.includes(matrix_code[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrix_code[i][1], matrix_code[i][0]);
        }
    }

    return stringDesencriptada;
}