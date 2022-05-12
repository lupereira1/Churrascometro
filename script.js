// carne 450g por pessoa + de 6 horas = 650g
// cerveja 1200 por homem, + de 6 horas 2000 ml
// cerveja por mulher/2 , + de 6 horas /2 ml
// criança não bebe cerveja




let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function Calcular() {
    console.log("Calculando...")

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value

    let qdtTotalCarne = carnePP(duracao) * homens + carnePP(duracao) * mulheres + (carnePP(duracao) / 2 * criancas);
    console.log(qdtTotalCarne)

    let qdtTotalCerveja = cervejaPP(duracao) * homens + (cervejaPP(duracao) / 2 * mulheres);
    console.log(qdtTotalCerveja)

    let qdtTotalBebidas = (bebidasPP(duracao) / 2 * homens) + bebidasPP(duracao) * mulheres + (bebidasPP(duracao) / 2 * criancas);
    console.log(qdtTotalBebidas)

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}kg de Carne </p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja / 1000}L de Cerveja </p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas / 1000}L de Refrescos </p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }

}


function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1200;
    } else {
        return 600;
    }

}

function Limpar() {
    console.log("Limpando...")

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value

    let qdtTotalCarne = carnePP(duracao) * homens + carnePP(duracao) * mulheres + (carnePP(duracao) / 2 * criancas);
    console.log(qdtTotalCarne)

    let qdtTotalCerveja = cervejaPP(duracao) * homens + (cervejaPP(duracao) / 2 * mulheres);
    console.log(qdtTotalCerveja)

    let qdtTotalBebidas = (bebidasPP(duracao) / 2 * homens) + bebidasPP(duracao) * mulheres + (bebidasPP(duracao) / 2 * criancas);
    console.log(qdtTotalBebidas)

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}kg de Carne </p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja / 1000}L de Cerveja </p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas / 1000}L de Refrescos </p>`

}
