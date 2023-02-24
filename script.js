const buttonConvert = document.querySelector('#button-convert');
const selectConvertFrom = document.querySelector('#convert-from');
const selectConvertTo = document.querySelector('#convert-to');

function convertCoin() {
  const valueToConvert = document.querySelector('#value').value;

  const dollar = 5.21;
  const euro = 5.49;
  const bitcoin = 119940.69;

  document.querySelector('#value-to-convert').textContent = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valueToConvert);

  if(selectConvertFrom.value === 'real' && selectConvertTo.value === 'american-dollar') {
    const convertToDollar = valueToConvert / dollar;
    document.querySelector('#converted-value').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(convertToDollar);
  }

  if(selectConvertFrom.value === 'real' && selectConvertTo.value === 'euro') {
    const convertToEuro = valueToConvert / euro;
    document.querySelector('#converted-value').textContent = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(convertToEuro);
  }

  // const convertFromBitcoinToReal = valueToConvert * 119940.69;
}

function changeFlag() {
  // const convertTo = selectConvertTo.value;
  const convertedValueFlag = document.querySelector('#converted-value-flag');
  const convertedValueCoin = document.querySelector('#converted-value-coin');

  switch(selectConvertTo.value) {
    case 'american-dollar':
      convertedValueFlag.src = './images/eua.png';
      convertedValueCoin.textContent = 'Dólar Americano';
    break;
    case 'real':
      convertedValueFlag.src = './images/brasil.png';
      convertedValueCoin.textContent = 'Real';
    break;
    case 'euro':
      convertedValueFlag.src = './images/euro.png';
      convertedValueCoin.textContent = 'Euro';
    break;
    case 'bitcoin':
      convertedValueFlag.src = './images/bitcoin.png';
      convertedValueCoin.textContent = 'Bitcoin';
    break;
  }

  convertCoin();
}

buttonConvert.addEventListener('click', convertCoin);
selectConvertTo.addEventListener('change', changeFlag);
