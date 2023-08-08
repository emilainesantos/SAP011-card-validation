const validator = {

/* meu codigo*/

  isValid: function (campoNumeroDoCartao) {
    const arrayCard = campoNumeroDoCartao.split("");
    console.log(arrayCard)
    const arrayCardInvertido = arrayCard.reverse();
    console.log(arrayCardInvertido)
    let somaTotal = 0;
    let resultadoDaValidacao = false;
    for (let i = 0; i < campoNumeroDoCartao.length; i++) {
        let digito = parseInt(arrayCardInvertido[i]); // parseInt vai converter o primeiro argumento para uma string, vai analisar e retornar um inteiro ou NaN

        console.log("validar cartão de crédito" + digito)
        if ((i + 1) % 2 === 0) {
            digito = digito * 2;
            if (digito > 9) {
                const digitoRestante = digito % 10; // 16 % 10 = 6
                digito = 1 + digitoRestante;// 1 + 6 = 7

            }
        }

        somaTotal = somaTotal + digito;
    }
    if (somaTotal % 10 === 0) {
        resultadoDaValidacao = true;
    }
    console.log('somaTotal ' + somaTotal)
    return resultadoDaValidacao;



},
maskify: function (creditCardNumber) {
    const last4Digits = creditCardNumber.slice(-4);
    console.log(last4Digits)
    return last4Digits.padStart(creditCardNumber.length, '#');


}




/*meu codigo */






};

export default validator;
