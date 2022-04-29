const url = 'https://hookb.in/oXkWxRlpYasBnPZZXMpD';
const formEl = document.querySelector('form');
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

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const InsertDataForm = Object.fromEntries(formData);
    const jsonObject = {...InsertDataForm}
    console.log(jsonObject)
    try{
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(jsonObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log(json)    
    } catch(e){
        console.error(e);
        alert("Ha habido un error");
    }
   
});