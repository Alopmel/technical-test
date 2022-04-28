/*
- Escribe una función que recibe un string como parámetro
- Devuelvev true o false si es un palíndromo
*/

function isPalindrome(str){
    const reverse = str => [...str].reverse().join('');
    str = str.normalize("NFD").replace(/\s/g, '').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  return reverse(str) === str;
}

console.log(isPalindrome("Ají traga la lagartija"));
console.log(isPalindrome("Definitivamente no es palíndromo"));
console.log(isPalindrome("No suba, abusón"));


/*
-Escribe una función que recibe un array de números enteros como parámetro
- Devuelve todos los múltiplos de 7.
*/

const numbers = [1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14];

function isMultiple(arr){ 
    return areMultiple = numbers.filter((e) => e % 7 === 0)
  }
console.log(isMultiple())


/*
 - Dada la siguiente declaración de objetos:

const obj = {
id: "AB-001",
value: 1
}
const obj2 = {
id: "AB-001",
value: 1
}
const obj3 = obj;

La respuesta correcta: Los 3 objetos son iguales
*/

/*
Teniendo en cuenta la declaración de objetos anterior:

- obj.value = 3;

La respuesta correcta: obj y obj3 son iguales
*/


/*Escribe una función que recibe un objeto persona como parámetro y
devuelve otro objeto persona con solo su nombre y edad .
Ejemplo de objeto persona:*/

const person =
{
"name": "John",
"surname": "Doe",
"age": "30",
"country": "Spain",
"city": "Madrid",
"employed": "true",
"dni": "00000000A",
}

function NewPersona(person) {
  let newPerson = {}
  newPerson.name = person.name
  newPerson.age = person.age
  return newPerson
}
console.log(NewPersona(person))


/*
Modifica el código a continuación que realiza una llamada GET a
una API para recuperar una lista de tareas usando async/await.
*/

(() => {
    const getTodos = async () => {
        try{
           const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
           
           if(response.status === 200){
             const data = await response.json()
             let counter = 0; 
             let key = Object.keys(data); 
             
             for(let i=0; i< key.length; i++){
                let clave = key[i];
                counter++
                console.log(counter +".-" + data[clave].title[0].toUpperCase() + data[clave].title.slice(1));
             }
           } else if (response.status === 401){
               console.log('La petición no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado')
           } else if (response.status === 404){
               console.log('La petición realizada no existe')
           } else {
               console.log('Error inesperado')
           }
            
        }catch(error){
            console.log(error)
        }
    }
    getTodos();
})();