let pastEvents= "";
let cardContainer= document.getElementById("card");
let pasteventslist=[];

for  (let event of data.events) {
    let currentDate = new Date(data.currentDate)
    let eventDate= new Date(event.date)
    
    if (eventDate< currentDate) {
        pastEvents += createCard(event)
        pasteventslist.push(event);
    }
}
cardContainer.innerHTML= pastEvents;







let checkbox = document.getElementById("checkbox");
let HTMLresultados = "";
let busqueda=[];

for(let category of categories){
    HTMLresultados += createCheckbox(category);
}

checkbox.innerHTML = HTMLresultados;


let itemsCheckboxes = document.querySelectorAll(".form-check-input");
console.log(itemsCheckboxes);

itemsCheckboxes.forEach(checkbox => checkbox.onchange = () =>{
    let HTMLresultados = "";
    let checkCategories = [];
    itemsCheckBoxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkCategories.push(checkbox.value);
        }  
    });
    console.log(checkCategories);
    
    let textoingresado = inputBusqueda.value.toLowerCase().trim();
    HTMLresultados = Search(checkCategories,textoIngresado);

    document.querySelector('.galeria').innerHTML = HTMLresultados; 
    
  });



function Search(categories,textoIngresado){
    let HTMLresultados="";


    if(categories.length>0 && textoingresado == ""){ //Filtras por checkbox pero no usás la búsqueda
        pasteventslist.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += createCard(event)});
      
            console.log(HTMLresultados);
            
    }else if(categories.length>0 && textoIngresado != ""){ //1°Checkeas una categoría y 2° usás la búsqueda
       pasteventslist.filter(event => categories.includes(event.category)).filter
       (event =>event.name.toLowerCase().includes(textoIngresado) || event.description.toLowerCase().includes
       (textoIngresado)).forEach(event => {HTMLresultados += createCard(event) });

            if(HTMLresultados == ""){
                HTMLresultados += `<div class="card"><h2>No hay resultados para esta búsqueda.</h2></div>";`
    
            };
            
            
    }else if(categories.length==0 && textoIngresado !== ""){
        pasteventslist.filter(event =>event.name.toLowerCase().includes(textoIngresado) || event.description.toLowerCase().includes(textoIngresado)).forEach(event =>
       
            {HTMLresultados += createCard(event)});

            if(HTMLresultados == ""){
                HTMLresultados += `<div class="card"><h2>No hay resultados para esta búsqueda.</h2></div>";`
    
            };


    }else if(categories.length==0 && textoIngresado == ""){
            pasteventslist.forEach(event =>
            {HTMLresultados += createCard(event)});

            if(HTMLresultados == ""){
                HTMLresultados += `<div class="card"><h2>No hay resultados para esta búsqueda.</h2></div>";`
    
            };
    }
        return HTMLresultados;
  }




  let inputBusqueda=document.getElementById("search");

    document.querySelector("#form-busqueda").onsubmit = (e)=> {
     e.preventDefault();
     let HTMLresultados = "";
     let CategoriasCheck = [];

     itemsCheckBoxes.forEach(checkbox => {
        if(checkbox.checked ){
            CategoriasCheck.push(checkbox.value);  
        }
     });

     console.log(CategoriasCheck);
 
     let textoIngresado = inputBusqueda.value.toLowerCase().trim();
     HTMLresultados = Search(CategoriasCheck,textoIngresado);
 
 
     document.querySelector('.galeria').innerHTML = HTMLresultados;
   
  }