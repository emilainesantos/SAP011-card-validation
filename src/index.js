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


/*SOCORRRO */
function preenchimentoCompleto() {
  if (document.getElementById('card-number').value.length < 16) {
    alert('Por favor, insira todos os 16 dígitos do cartão');
  } else {
    const cardNumber = document.getElementById('card-number').value;
    const ehValido = validator.isValid(cardNumber);
    if (ehValido) {

      alert('Cartão válido!');
    } else {
      alert('Cartão inválido!');
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


/* SOCORRROO */






// COMO REPLICAR A INFORMÇÃO DO CARD1 PARA O CARD2

cardNumber.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardNumberText.innerText = "1234 5678 9101 1121";
  } else {
    const valuesOfInput = e.target.value.replaceAll(" ", "");

    if (e.target.value.length > 14) {
      e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
      cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
    } else {
      cardNumberText.innerHTML = valuesOfInput
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
