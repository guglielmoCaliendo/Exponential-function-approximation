const inputX = document.querySelector('#x');
const inputN = document.querySelector('#n');
const resultButton = document.querySelector('.result-button');
const resultsDiv = document.querySelector('.result');
const results2Div = document.querySelector('.result2');

resultButton.addEventListener('click', () => {
  resultsDiv.innerHTML = `
    <p>
      The approximation result should'd be:
      ${exponentialFunction(inputX.value, inputN.value)}
    </p>
  `;
  results2Div.innerHTML = `
    <p>
      The value of n in my cals in order to the approximation of e<sup>1</sup> to have 9 decimals should be: ${approximationOfNTo9decimals()}
    </p>
  `;
});

function factorial(n) {
  let result = 1;
  for (i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

/*Here i'm doing the calculation of the approximation of e given the value X for the number to 
 the exponential summation and N for the index to terminate de summation */

function exponentialFunction(x, n) {
  let approximation = 0;
  for (let i = 0; i < n; i++) {
    approximation += x ** i / factorial(i);
  }
  return approximation;
}

/*
In this function I'm doing the calc for the approximation of n in order to exponentialFuncion() result 
have 9 decimals
*/

function approximationOfNTo9decimals() {
  let n = 3;
  while (exponentialFunction(1, n) < Math.exp(1).toFixed(9)) {
    n += 0.0001;
  }
  return n;
}
