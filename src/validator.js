// validator.js
const validator = {
  isValid, maskify,
};

export default validator;


function isValid(card) {
  const cardNumber = card.replace(/\D/g, '')
  
  const cardNumberArray = [];
  let soma = 0;
  for (let index = 0; index < cardNumber.length; index++) {
    const elementoAtual = cardNumber[index];
    cardNumberArray.push(parseInt(elementoAtual));
  }

  for (let index = cardNumberArray.length - 2; index >= 0; index -= 2) {
    const casaAtual = cardNumberArray[index] * 2;
    if (casaAtual > 9) {
      cardNumberArray[index] = casaAtual % 10 + 1;
    } else {
      cardNumberArray[index] = casaAtual;
    }
  }

  for (let index = 0; index < cardNumberArray.length; index++) {
    soma = soma + cardNumberArray[index];
  }

  if (soma % 10 === 0) {
    return true;
  } else {
    return false;
  }

}


function maskify(cardNumber) {
  const valorExibido = cardNumber.replace(/.(?=.{4})/g, '#');
  return valorExibido;
}

