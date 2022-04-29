const url = 'https://hookb.in/oXkWxRlpYasBnPZZXMpD';
const formEl = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const modalBtn = document.getElementById('open-modal');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.close')

// Open modal
modalBtn.addEventListener('click', () =>{
    modalBg.classList.add('bg-active');
});

//Close modal
modalClose.addEventListener('click', () =>{
    modalBg.classList.remove('bg-active');
});

// Check data validation from input
form.addEventListener('input', async (e) => {
    e.preventDefault();
    validateInputs();
    
});

// Send info to endpoint
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    sendInfo();  
    
});


// Get the error element and add error class and message
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
  
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// Get the succes element and add success class 
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Regular expresion for check the valid email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Validate the inputs 
const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(nameValue === '') {
        setError(name, 'Se require el nombre');
    } else {
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Se requiere un email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Inserta un email correcto');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'Se requiere el teléfono');
    } else if (isNaN(phoneValue)) {
        setError(phone, 'El teléfono debe ser numérico.')
    }
     else {
        setSuccess(phone);
    }

};


// Send info 
const sendInfo = async () => {

    const formData = new FormData(formEl);
    const InsertDataForm = Object.fromEntries(formData);
    const jsonObject = {...InsertDataForm}

    //console.log(jsonObject)

        try{
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(jsonObject),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            //console.log(json)    
        } catch(e){
            console.error(e);
            alert("Ha habido un error");
        }
    }
