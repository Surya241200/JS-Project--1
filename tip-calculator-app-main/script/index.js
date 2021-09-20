let bill = document.querySelector("#bill");
let tipBtns = document.querySelectorAll(".btn-action");
let peopleContainer = document.querySelector("#people-action");
let customBtn = document.querySelector(".custom-action");
let error = document.querySelector(".error");
let resetBtn = document.querySelector(".reset-action");

let tipContainer = document.querySelector(".tip-action");
let totalContainer = document.querySelector(".total-amount");


let handleError = () => {
  error.style.display = "block";
  peopleContainer.style.border = "2px solid red";
  tipContainer.innerHTML = "$0.00";
  totalContainer.innerHTML = "$0.00";
};


tipBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    customBtn.value = "";
    let tip = btn.value;
    peopleContainer.value < 1 ? handleError() : setValues(tip);
    setTimeout(() => {
      error.style.display = "none";
      peopleContainer.style.border = "none";
    }, 2000);
  });
});


customBtn.addEventListener("input", (e) => {
  let customTip = e.target.value / 100;
  peopleContainer.value < 1 ? handleError() : setValues(customTip);
  setTimeout(() => {
    error.style.display = "none";
    peopleContainer.style.border = "none";
  }, 2000);
});


const setValues = (tipAmt) => {
  let billPerPerson = bill.value / peopleContainer.value;
  let tipPerPerson = billPerPerson * tipAmt;
  total = billPerPerson + tipPerPerson;
  tipContainer.innerHTML = `$${tipPerPerson.toFixed(2)}`;
  totalContainer.innerHTML = `$${total.toFixed(2)}`;
};


const resetValues = () => {
  bill.value = "";
  customBtn.value = "custom";
  peopleContainer.value = "";
  tipContainer.innerHTML = "$0.00";
  totalContainer.innerHTML = "$0.00";
};

resetBtn.addEventListener("click", () => {
  resetValues();
});