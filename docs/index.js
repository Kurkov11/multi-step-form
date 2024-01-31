const nameIn = document.querySelector('#name');
const emailIn = document.querySelector('#email');
const phoneIn = document.querySelector('#phone');

const nameEmpty = document.querySelector('#name__empty');
const emailEmpty = document.querySelector('#email');
const phoneEmpty = document.querySelector('#phone__empty');

const personalSubmit = document.querySelector('#personal-submit');

const personalForm = document.querySelector('#personal-info');
personalForm.addEventListener("submit", function(e){
    const nameValue = nameIn.value;
    const emailValue = emailIn.value;
    const phoneValue = phoneIn.value;

    let error = false;
    if(nameValue === ""){
        error = true;
    }
    if(emailValue === ""){
        error = true;
    }
    if(phoneValue === ""){
        error = true;
    }
    if(error){
        e.preventDefault();
    }
});