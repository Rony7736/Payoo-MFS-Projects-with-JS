// console.log('time');

// add money to the account -->

//step: 1 --> add an event handler to the add money button inside the form 
document.getElementById('btn-add-money').addEventListener('click', function(event){

    // prevent page reload after form submit
    event.preventDefault();

    // get money to be added to the account
    const addMoneyInput = document.getElementById('add-money-input').value

    // get the pin number provided
    const pinInput = document.getElementById('pin-input').value
    
    console.log(addMoneyInput, pinInput);
    
})
