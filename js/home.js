// console.log('time');

// add money to the account -->

//step: 1 --> add an event handler to the add money button inside the form 
document.getElementById('btn-add-money').addEventListener('click', function(event){

    // prevent page reload after form submit
    event.preventDefault();

    // step : 2 --> get money to be added to the account
    const addMoneyInput = document.getElementById('add-money-input').value

    // get the pin number provided
    const pinInput = document.getElementById('pin-input').value
    
    console.log(addMoneyInput, pinInput);

    // step : 3 --> varify pin number
    if(pinInput === '1234'){
        console.log('Adding money to your Account');

        // step : 4 --> get the current Balance
        const balance = document.getElementById('account-balance').innerText
            
        // step : 5 --> add moneyInput with balance
        const addMoneyNumber = Number(addMoneyInput)    // Number use korle better hoy
        const balanceNumber = Number(balance)           // Number() er poriborte parseFloat ba parseint o use koa jay
        
        const newBalance = addMoneyNumber + balanceNumber
        console.log(newBalance);

        // step : 6 --> update the balance in the UI/DOM

        document.getElementById('account-balance').innerText = newBalance
        
        

    }
    else{
        alert('Failed to add money! Please input the right Pin')
    }
    
})
