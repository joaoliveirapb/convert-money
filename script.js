const buttonConvert = document.querySelector('#button-convert');
const selectConvertFrom = document.querySelector('#convert-from');
const selectConvertTo = document.querySelector('#convert-to');
const valueToConvert = document.querySelector('#value');

async function convertCoin() {
  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(res => res.json());

  const dollar = data.USDBRL.high;
  const euro = data.EURBRL.high;
  const bitcoin = data.BTCBRL.high;

  if(valueToConvert.value === '') alert('Preencha o campo Valor para que seja feita a conversão das moedas!!!');
  if(valueToConvert.value === '' && selectConvertFrom.value === selectConvertTo.value) alert('Os campos de Converter não podem ser iguais');
  if(selectConvertFrom.value === selectConvertTo.value && valueToConvert.value !== '') alert('Não é possível fazer a conversão das moedas, pois os campos de Converter estão iguais.');

  if(selectConvertFrom.value === 'real') {
    document.querySelector('#value-to-convert').textContent = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valueToConvert.value);

    if(selectConvertTo.value === 'american-dollar') {
      const convertFromRealToDollar = valueToConvert.value / dollar;
      document.querySelector('#converted-value').textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(convertFromRealToDollar);
    }

    if(selectConvertTo.value === 'euro') {
      const convertFromRealToEuro = valueToConvert.value / euro;
      document.querySelector('#converted-value').textContent = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(convertFromRealToEuro);
    }

    if(selectConvertTo.value === 'bitcoin') {
      const convertFromRealToBitcoin = valueToConvert.value / bitcoin;
      document.querySelector('#converted-value').textContent = convertFromRealToBitcoin.toFixed(4).replace('.', ',');
    }
  }

  if(selectConvertFrom.value === 'american-dollar') {
    document.querySelector('#value-to-convert').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(valueToConvert.value);

    if(selectConvertTo.value === 'real') {
      const convertFromDollarToReal = valueToConvert.value * dollar;
      document.querySelector('#converted-value').textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(convertFromDollarToReal);
    }

    if(selectConvertTo.value === 'euro') {
      const convertFromDollarToEuro = valueToConvert.value * 0.94;
      document.querySelector('#converted-value').textContent = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(convertFromDollarToEuro);
    }

    if(selectConvertTo.value === 'bitcoin') {
      const convertFromDollarToBitcoin = valueToConvert.value * 0.000043;
      document.querySelector('#converted-value').textContent = convertFromDollarToBitcoin.toString().replace('.', ',');
    }
  }

  if(selectConvertFrom.value === 'euro') {
    document.querySelector('#value-to-convert').textContent = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(valueToConvert.value);

    if(selectConvertTo.value === 'real') {
      const convertFromEuroToReal = valueToConvert.value * 5.52;
      document.querySelector('#converted-value').textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(convertFromEuroToReal);
    }

    if(selectConvertTo.value === 'american-dollar') {
      const convertFromEuroToDollar = valueToConvert.value * 1.06;
      document.querySelector('#converted-value').textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(convertFromEuroToDollar);
    }

    if(selectConvertTo.value === 'bitcoin') {
      const convertFromEuroToBitcoin = valueToConvert.value * 0.000046;
      document.querySelector('#converted-value').textContent = convertFromEuroToBitcoin.toString().replace('.', ',');
    }
  }

  if(selectConvertFrom.value === 'bitcoin') {
    document.querySelector('#value-to-convert').textContent = valueToConvert.value;

    if(selectConvertTo.value === 'american-dollar') {
      const convertFromBitcoinToDollar = valueToConvert.value * 23113.40;
      document.querySelector('#converted-value').textContent = convertFromBitcoinToDollar.toString().replace('.', ',');
    }

    if(selectConvertTo.value === 'real') {
      const convertFromBitcoinToReal = valueToConvert.value * bitcoin;
      document.querySelector('#converted-value').textContent = convertFromBitcoinToReal.toString().replace('.', ',');
    }

    if(selectConvertTo.value === 'euro') {
      const convertFromBitcoinToEuro = valueToConvert.value * 21837.54;
      document.querySelector('#converted-value').textContent = convertFromBitcoinToEuro.toString().replace('.', ',');
    }
  }
}

function changeFlag() {
  const valueToConvertFlag = document.querySelector('#value-to-convert-flag');
  const valueToConvertCoin = document.querySelector('#value-to-convert-coin');
  const valueToConvertFromResult = document.querySelector('#value-to-convert');
  const convertedValueFlag = document.querySelector('#converted-value-flag');
  const convertedValueCoin = document.querySelector('#converted-value-coin');
  const convertedValue = document.querySelector('#converted-value');

  switch(selectConvertFrom.value) {
    case 'american-dollar':
      valueToConvertFlag.src = './images/eua.png';
      valueToConvertCoin.textContent = 'Dólar Americano';
      valueToConvertFromResult.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(convertedValue.value = 0);
    break;
    case 'real':
      valueToConvertFlag.src = './images/brasil.png';
      valueToConvertCoin.textContent = 'Real';
      valueToConvertFromResult.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(convertedValue.value = 0);
    break;
    case 'euro':
      valueToConvertFlag.src = './images/euro.png'
      valueToConvertCoin.textContent = 'Euro';
      valueToConvertFromResult.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'EUR',
      }).format(convertedValue.value = 0);
    break;
    case 'bitcoin':
      valueToConvertFlag.src = './images/bitcoin.png';
      valueToConvertCoin.textContent = 'Bitcoin';
      valueToConvertFromResult.textContent = '0,0';
    break;
  }

  switch(selectConvertTo.value) {
    case 'american-dollar':
      convertedValueFlag.src = './images/eua.png';
      convertedValueCoin.textContent = 'Dólar Americano';
      convertedValue.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(convertedValue.value = 0);
    break;
    case 'real':
      convertedValueFlag.src = './images/brasil.png';
      convertedValueCoin.textContent = 'Real';
      convertedValue.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(convertedValue.value = 0);
    break;
    case 'euro':
      convertedValueFlag.src = './images/euro.png';
      convertedValueCoin.textContent = 'Euro';
      convertedValue.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'EUR',
      }).format(convertedValue.value = 0);
    break;
    case 'bitcoin':
      convertedValueFlag.src = './images/bitcoin.png';
      convertedValueCoin.textContent = 'Bitcoin';
      convertedValue.textContent = '0,0';
    break;
  }

  if(valueToConvert.value !== '') convertCoin();
}

buttonConvert.addEventListener('click', convertCoin);
selectConvertTo.addEventListener('change', changeFlag);
selectConvertFrom.addEventListener('change', changeFlag);