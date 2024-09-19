
// console.log('rony');

// search: form submit reloading the page

// step -1 ---> set event handler
document.getElementById('btn-login').addEventListener('click', function(event){

    //step - 2 --> prevent default behavior (prevent realoding browser)
    event.preventDefault();         // jodi amra form tag use kori tahole eita dite hoy page reload na houar jonno

    // step -3 --> Get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value

    // Step -4 --> valid phone and pin
    if(phoneNumber === '01749669919' && pinNumber === '1234'){
        console.log('You are loged in');
        window.location.href = './home.html'
    }
    else{
        alert ('Wrong phone number or pin');
        
    }
    
    
})


