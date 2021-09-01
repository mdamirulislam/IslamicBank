function getInputValue(inputId){
    const depositInputField = document.getElementById(inputId);
    const depositInputText = depositInputField.value;
    const newdepositInput = parseFloat(depositInputText);

    depositInputField.value = '';
    return newdepositInput;


} 

document.getElementById('deposit-btn').addEventListener('click', function(){
// total deposite field
const depositAmountField = document.getElementById('total-deposit');
const depositAmountText = depositAmountField.innerText;
const depositAmount = parseFloat(depositAmountText)

//deposite input field
// const depositInputField = document.getElementById('deposit-input');
// const depositInputText = depositInputField.value;
// const newdepositInput = parseFloat(depositInputText);
const newdepositInput = getInputValue('deposit-input');

// newTotalDepositeField 
const newTotalDeposit = depositAmount + newdepositInput;
depositAmountField.innerText = newTotalDeposit

// balance update works 
const balanceAmountField = document.getElementById('total-balance');
const balanceAmountFieldText = balanceAmountField.innerText;
const balanceAmount = parseFloat(balanceAmountFieldText);

const newBalanceAmount = balanceAmount + newdepositInput;
balanceAmountField.innerText = newBalanceAmount;

// depositInputField.value = '';
})


// withdraw update field  //
document.getElementById('withdraw-btn').addEventListener('click', function(){

//total withdraw field 
const withdrawAmountField = document.getElementById('total-withdraw');
const withdrawAmountFieldText = withdrawAmountField.innerText;
const withdrawAmount = parseFloat(withdrawAmountFieldText);

// withdraw input field
// const withdrawInputField= document.getElementById('withdraw-input');
// const withdrawInputFieldText = withdrawInputField.value;
// const withdrawInput = parseFloat(withdrawInputFieldText);
const withdrawInput = getInputValue('withdraw-input')

//newWithdrawBalance
const newWithdrawBalance =  withdrawAmount + withdrawInput ;
withdrawAmountField.innerText = newWithdrawBalance;



// balane update works 
const balanceAmountField = document.getElementById('total-balance');
const balanceAmountFieldText = balanceAmountField.innerText;
const balanceAmount = parseFloat(balanceAmountFieldText);
const newBalanceAmount = balanceAmount - withdrawInput;
balanceAmountField.innerText = newBalanceAmount;

// withdrawInputField.value = '';

})