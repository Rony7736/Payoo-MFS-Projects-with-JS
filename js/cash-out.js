

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()

    const cashOutInput = document.getElementById('cash-out-input').value
    const cashOutPinInput = document.getElementById('cash-out-pin-input').value

    // console.log(cashOutInput, cashOutPinInput);

    if(cashOutPinInput === '1234'){
        console.log('Cash Out money to your Account');

        const balance = document.getElementById('account-balance').innerText

        const cashOutNumber = Number(cashOutInput)
        const updateBalance = Number(balance)

        const cashOut = updateBalance - cashOutNumber

        document.getElementById('account-balance').innerText = cashOut
        
        

    }
    else{
        alert('Failed to Cash Out! Please input the right Pin')
    }
    
    
    
})
