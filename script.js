function converter() {
    let numero = document.getElementById("numero").value.trim();
    let baseOrigem = parseInt(document.getElementById("baseOrigem").value);
    let baseDestino = parseInt(document.getElementById("baseDestino").value);
    
    if (numero === "") {
        alert("Por favor, insira um número.");
        return;
    }

    try {
        let numeroDecimal = parseInt(numero, baseOrigem);
        if (isNaN(numeroDecimal)) {
            alert("Número inválido para a base selecionada.");
            return;
        }

        let resultado = numeroDecimal.toString(baseDestino).toUpperCase();
        document.getElementById("resultado").value = resultado;
    } catch (error) {
        alert("Erro ao converter. Verifique os valores inseridos.");
    }
}

function limpar() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("baseOrigem").selectedIndex = 0;
    document.getElementById("baseDestino").selectedIndex = 0;
}
