const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const sumbitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

function calculateProfitAndLoss(initial,quanitity,current){
  if(initial > current){
    let loss = ((initial - current) * quanitity).toFixed(2);
    let lossPercentage = ((loss / initial) * 100).toFixed(2);
    outputEl.style.color = "red";
    showMessage(`Hey the loss is ${loss} and Loss Percentage is ${lossPercentage}%`);
  }
  else if(current > initial){
    let profit = ((current - initial) * quanitity).toFixed(2);
    let profitPercentage = ((profit / initial) * 100).toFixed(2);
    outputEl.style.color = "green";
    showMessage(`Hey the profit is ${profit} and Profit Percentage is ${profitPercentage}%`);
  }
  else{
    showMessage(`no pain, no gain and no gain, no pain`);
  }
  

}

function showMessage(message){
  outputEl.innerText = message;
}

function validateInput(initial,quantity,current){
  if(initial == "" || quantity == "" || current == "" ) {
    showMessage("Please fill out all the fields");
  }

}

function buttonClickHandler(){
  var ini = Number(initialPrice.value);
  var qty = Number(quantityOfStocks.value);
  var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ini,qty,curr);
  validateInput(ini,qty,curr);
}


sumbitBtn.addEventListener("click",buttonClickHandler);

