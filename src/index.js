import validator from './validator.js';

// console.log(validator);



// const form = document.querySelector("#credit-card"); // FORM CARTAO

const cardNumber = document.querySelector("#card-number"); // NUMERO CARTÃO
const cardHolder = document.querySelector("#name-text"); // NOME USUARIO
const cardExpiration = document.querySelector("#valid-thru-text"); //DATA VALIDADOR
const cardCVV = document.querySelector("#cvv-text"); //CVV

const cardNumberText = document.querySelector(".number-vl"); // SEGUNDO CARTAO QUE RECEBE O VALOR
const cardHolderText = document.querySelector(".name-vl"); // SEGUNDO CARTAO NOME USUARIO
const cardExpirationText = document.querySelector(".expiration-vl"); // SEGUNDO CARTAO VALIDADOR
const cardCVVText = document.querySelector(".cvv-vl"); // SEGUNDO CARTAO CSS


//VALIDAÇÃO CARTÃO
function preenchimentoCompleto() {
  if (document.getElementById('card-number').value.length < 16) {
    alert('Inserir o numero  do cartão');
  } else {
    const cardNumber = document.getElementById('card-number').value;
    const ehValido = validator.isValid(cardNumber);
    if (ehValido) {

      alert('Este cartão é válido!');
    } else {
      alert('Este Cartão é inválido!');
    }
  }

}

const button = document.querySelector('#add');
button.addEventListener('click', preenchimentoCompleto);

const cardNumberInput = document.getElementById('card-number');

button.addEventListener('click', function () {
  const cartaoMascarado = validator.maskify(cardNumberInput.value);
  cardNumberInput.value = cartaoMascarado;
}

);





// COMO REPLICAR A INFORMÇÃO DO CARD1 PARA O CARD2

cardNumber.addEventListener("keyup", (e) => { //KEYUP pega o momento que o usuario clica no input
  if (!e.target.value) { //caso a tag estiver vazia
    cardNumberText.innerText = "1234 5678 9101 1121"; // o input fica com o numero como exemplo
  } else {
    const valuesOfInput = e.target.value.replaceAll(" ", "");

    if (e.target.value.length > 14) {
      e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4"); //formataçao de texto no ínput do card 1
      cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4"); //espelho de formação card 2
    } else {
      cardNumberText.innerHTML = valuesOfInput // o card 2 recebe as informações em tempo real do card 1
    }
  }
})





// O SEGUNDO CARTAO RECECER O VALOR DO INPUT USUARIO DO CARTAO

cardHolder.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardHolderText.innerHTML = "EMILAINE SILVA";
  } else {
    cardHolderText.innerHTML = e.target.value.toUpperCase();
  }
})

// O SEGUNDO CARTAO RECEBE O VALOR DO INPUT  VALIDADE

cardExpiration.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardExpirationText.innerHTML = "02/40";
  } else {
    const valuesOfInput = e.target.value.replace("/", "");

    if (e.target.value.length > 2) {
      e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
      cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
    } else {
      cardExpirationText.innerHTML = valuesOfInput;
    }
  }
})


// O SEGUNDO CARTAO RECEBE O CVV DO PRIMEIRO CARTAO

cardCVV.addEventListener("keyup", (e) => {
  cardCVVText.innerHTML = e.target.value ? e.target.value : "123";
});
