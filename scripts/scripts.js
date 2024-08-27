// Função para criptografar o texto
function criptografar() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('outputText').value = encryptedText;
}

// Função para descriptografar o texto
function descriptografar() {
    const encryptedText = document.getElementById('outputText').value;
    let decryptedText = encryptedText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('outputText').value = decryptedText;
}

// Função para copiar o texto para a área de transferência
function copiar() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
