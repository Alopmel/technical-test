const url = 'https://hookb.in/oXkWxRlpYasBnPZZXMpD';
const formEl = document.querySelector('form');

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