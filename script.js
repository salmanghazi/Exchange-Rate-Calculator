const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');

const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');

const swapBtn = document.getElementById('swap');
const rate = document.getElementById('rate');

async function calculateExchangeRate() {
  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`);
  const data = await res.json();
  const currencyRate = data.rates[currencyTwo.value];
  amountTwo.value = amountOne.value * currencyRate;

  rate.innerText = `1 ${currencyOne.value} = ${currencyRate} ${currencyTwo.value}`;
}

function swapCurrencies() {
  [currencyOne.value, currencyTwo.value] = [currencyTwo.value, currencyOne.value];
  calculateExchangeRate();
}

calculateExchangeRate();


currencyOne.addEventListener('change', calculateExchangeRate);
currencyTwo.addEventListener('change', calculateExchangeRate);
amountOne.addEventListener('change', calculateExchangeRate);
amountTwo.addEventListener('change', calculateExchangeRate);

swapBtn.addEventListener('click', swapCurrencies);
