function converter() {
    let numero = document.getElementById("numero").value.trim();
    let baseOrigem = parseInt(document.getElementById("baseOrigem").value);
    let baseDestino = parseInt(document.getElementById("baseDestino").value);

    if (!numero) {
        alert("Por favor, insira um número.");
        return;
    }

    try {
        let decimal = parseInt(numero, baseOrigem);
        if (isNaN(decimal)) throw new Error("Número inválido para a base de origem.");

        let convertido = decimal.toString(baseDestino).toUpperCase();
        document.getElementById("resultado").value = convertido;
    } catch (error) {
        alert("Erro na conversão: " + error.message);
    }
}

function limparCampos() {
    document.getElementById("numero").value = "";
    document.getElementById("baseOrigem").value = "10";
    document.getElementById("baseDestino").value = "10";
    document.getElementById("resultado").value = "";
}
