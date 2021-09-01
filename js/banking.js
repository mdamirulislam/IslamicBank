//1
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const InputAmountText = inputField.value;
    const amountValue = parseFloat(InputAmountText);

    inputField.value = '';
    return amountValue;
} 
//2
function ubdateTotalField(totalFieldId,depositInput){
    const totalField = document.getElementById(totalFieldId);
    const totalAmountText = totalField.innerText;
    const totalAmount = parseFloat(totalAmountText);
    
    totalField.innerText = totalAmount + depositInput;
}
//3
function updateBalance(input , isAdd){
    const balanceAmountField = document.getElementById('total-balance');
const balanceAmountFieldText = balanceAmountField.innerText;
const balanceAmount = parseFloat(balanceAmountFieldText);

if(isAdd == true){
    balanceAmountField.innerText = balanceAmount + input;
}
else{
    balanceAmountField.innerText = balanceAmount - input;

}
}

document.getElementById('deposit-btn').addEventListener('click', function(){
const newdepositInput = getInputValue('deposit-input');

///////////////////////////////////////////////////////////////////////////////////////////////
// total deposite field
// const depositAmountField = document.getElementById('total-deposit');
// const depositAmountText = depositAmountField.innerText;
// const depositAmount = parseFloat(depositAmountText);

// depositAmountField.innerText = depositAmount + newdepositInput;
/////////////////////////////////////////////////////////////////////////////////////////////

ubdateTotalField('total-deposit',newdepositInput);

///////////////////////////////////////////////////////////////////////////////////////////////
//deposite input field
// const depositInputField = document.getElementById('deposit-input');
// const depositInputText = depositInputField.value;
// const newdepositInput = parseFloat(depositInputText);
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
// balance update works 
/* const balanceAmountField = document.getElementById('total-balance');
const balanceAmountFieldText = balanceAmountField.innerText;
const balanceAmount = parseFloat(balanceAmountFieldText);

balanceAmountField.innerText = balanceAmount + newdepositInput; */
////////////////////////////////////////////////////////////////////////////////////////////////

updateBalance(newdepositInput, true);

})


// withdraw update field  //
document.getElementById('withdraw-btn').addEventListener('click', function(){
const withdrawInput = getInputValue('withdraw-input')

//////////////////////////////////////////////////////////////////////////////////////////////
//total withdraw field 
// const withdrawAmountField = document.getElementById('total-withdraw');
// const withdrawAmountFieldText = withdrawAmountField.innerText;
// const withdrawAmount = parseFloat(withdrawAmountFieldText);

// withdrawAmountField.innerText =  withdrawAmount + withdrawInput ;
/////////////////////////////////////////////////////////////////////////////////////////////

ubdateTotalField('total-withdraw', withdrawInput);

//////////////////////////////////////////////////////////////////////////////////////////////
// withdraw input field
// const withdrawInputField= document.getElementById('withdraw-input');
// const withdrawInputFieldText = withdrawInputField.value;
// const withdrawInput = parseFloat(withdrawInputFieldText);
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
// balane update works 
/* const balanceAmountField = document.getElementById('total-balance');
const balanceAmountFieldText = balanceAmountField.innerText;
const balanceAmount = parseFloat(balanceAmountFieldText);

balanceAmountField.innerText = balanceAmount - withdrawInput; */
// balanceAmountField.innerText = newBalanceAmount;

///////////////////////////////////////////////////////////////////////////////////////////
updateBalance(withdrawInput, false);


})