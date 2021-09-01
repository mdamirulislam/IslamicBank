// // function 1
// function getInputValue(inputId){
//     const depositAmount =  document.getElementById(inputId);
//     const newDepositAmountNumber = parseFloat(depositAmount.value);
//     depositAmount.value = '';
//     return newDepositAmountNumber;
// }
// // function 2
// function updateTotalField(totalIdField,depositAmount){
//     const currentDeposit =  document.getElementById(totalIdField);
//     const currentDepositNumber = parseFloat(currentDeposit.innerText);
//     const totalDeposit = currentDepositNumber + depositAmount;
//     const ok = currentDeposit.innerText = totalDeposit;
//     return ok;
// }
document.getElementById('deposit-btn').addEventListener('click', function(){

  
    

    const depositAmount =  document.getElementById('deposit-input');
    const newDepositAmountNumber = parseFloat(depositAmount.value);
    const depositAmount = getInputValue('deposit-input');

    const currentDeposit =  document.getElementById('total-deposit');
    const currentDepositNumber = parseFloat(currentDeposit.innerText);
    const totalDeposit = currentDepositNumber + depositAmount;
    currentDeposit.innerText = totalDeposit;

    updateTotalField('total-deposit',depositAmount);
         
     const currentBalance = document.getElementById('total-balance');
    const currentBalanceNumber = parseFloat(currentBalance.innerText);

    const newBalance = currentBalanceNumber + depositAmount;
    currentBalance.innerText = newBalance;




    document.getElementById('deposit-input').value = '';

})

// withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawAmount =  document.getElementById('withdraw-input');
    const withdrawAmountNumber = parseFloat(withdrawAmount.value);
    const withdrawAmount = getInputValue('withdraw-input');


   const currentWithdraw =  document.getElementById('total-withdraw');
   const currentWithdrawNumber = parseFloat(currentWithdraw.innerText);
   const newWithdraw = currentWithdrawNumber + withdrawAmount;
   currentWithdraw.innerText = newWithdraw;

   const currentBalance = document.getElementById('total-balance');
   const currentBalanceNumber = parseFloat(currentBalance.innerText);
   const newBalance = currentBalanceNumber - newWithdraw;
   currentBalance.innerText = newBalance;


   document.getElementById('withdraw-input').value = '';

})