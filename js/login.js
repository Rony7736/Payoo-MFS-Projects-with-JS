
// console.log('rony');

// search: form submit reloading the page

// step -1 ---> set event handler
document.getElementById('btn-login').addEventListener('click', function(event){

    //step - 2 --> prevent default behavior (prevent realoding browser)
    event.preventDefault();         // jodi amra form tag use kori tahole eita dite hoy page reload na houar jonno

    // step -3 --> Get the phone number
    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber);
    
    
})


