
let dataamazing=[];

async function getData(){
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(respuesta => respuesta.json())
  .then(json => data=json)
  localStorage.setItem("data",JSON.stringify(data))
} 

getData();

let data=localStorage.getItem("data");
  data = JSON.parse(data);
console.log(data);



// Creación de la card Dinamica

function createCard(event) {
    return `<div class="card" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="${event.description}">${event.description}</p>
            <a href="" class="btn btn-primary">${event.date}</a>
        </div>
    </div>`

}

// Creación del array de categorias

let categories = [];
data.events.forEach(event => {
  if (!categories.includes(event.category)){
    categories.push(event.category)
  }
});
console.log(categories); 

// Creación del checkbox dinamico

function createCheckbox(category) {
  return `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1${category}" value="${category}option1">
      <label class="form-check-label" for="inlineCheckbox1${category}">${category}</label>
  </div>`
}