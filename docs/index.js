const nameIn = document.querySelector('#name');
const emailIn = document.querySelector('#email');
const phoneIn = document.querySelector('#phone');

const nameEmpty = document.querySelector('#name__empty');
const emailEmpty = document.querySelector('#email__empty');
const phoneEmpty = document.querySelector('#phone__empty');

const personalSubmit = document.querySelector('#personal-submit');

const personalForm = document.querySelector('#personal-info');
personalForm.addEventListener("submit", function(e){
    const nameValue = nameIn.value;
    const emailValue = emailIn.value;
    const phoneValue = phoneIn.value;
    
    if(nameValue === ""){
        e.preventDefault();
        nameEmpty.style.display = 'inline' //default
    }else{
        nameEmpty.style.display = 'none'
    }
    if(emailValue === ""){
        e.preventDefault();
        emailEmpty.style.display = 'inline' //default
    }else{
        emailEmpty.style.display = 'none'
    }
    if(phoneValue === ""){
        e.preventDefault();
        phoneEmpty.style.display = 'inline' //default
    }else{
        phoneEmpty.style.display = 'none'
    }
});