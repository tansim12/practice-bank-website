document.getElementById('withdraw-btn').addEventListener('click', function name(params) {
    const withdrawInputValue = inputType('withdraw-input');
    if (isNaN(withdrawInputValue)) {
        alert('Please provide number');
        return;
    }
    const withdrawElementValue = elementType('withdraw-value');
    const previousBalance = elementType('balance-value');
    if (withdrawInputValue > previousBalance ) {
        alert('Not enough Money');
        return;
    }else{
        const sumPreviousWithdrawBalanceAndWithdrawInputValue = withdrawElementValue + withdrawInputValue;
        update('withdraw-value',sumPreviousWithdrawBalanceAndWithdrawInputValue);

        const sumPreviousBalanceAndWithdrawInputValue = previousBalance  -  withdrawInputValue;
        update('balance-value', sumPreviousBalanceAndWithdrawInputValue);
    }
    
})