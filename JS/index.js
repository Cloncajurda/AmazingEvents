// task2
// imprimo por pantalla la totalidad de los eventos (todas las cards)

let htmlEvents = "";
let cardContainer = document.getElementById("card")

for (let event of data.events){
    htmlEvents += createCard(event);
}
cardContainer.innerHTML =htmlEvents;

// task3
// Imprimo las cards de acuerdo a la categorias seleccionadas.


let checkbox = document.getElementById("checkbox");
let HTMLresultados = "";
let busqueda=[];

for(let category of categories){
    HTMLresultados += createCheckbox(category);
}

checkbox.innerHTML = HTMLresultados;


let itemsCheckBoxes = document.querySelectorAll(".form-check-input");
console.log(itemsCheckBoxes);

itemsCheckBoxes.forEach(checkbox => checkbox.onchange = () =>{
    let HTMLresultados = "";
    let checkCategories = [];
    itemsCheckBoxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkCategories.push(checkbox.value);
            }
        });
    console.log(checkCategories);

    let textoIngresado = inputBusqueda.value.toLowerCase().trim();
    HTMLresultados = Search(checkCategories,textoIngresado)

    document.querySelector('.galeria').innerHTML = HTMLresultados; 
});

//creo la funcion de busqueda para luego llamarla 
function Search(categories,textoIngresado){
    let HTMLresultados="";
    
    //Filtro por checkbox sin busqueda
    if(categories.length>0 && textoIngresado == ""){ 
        data.events.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += createCard(event)});
      
            console.log(HTMLresultados);
      
    //Checkeo la categoría y luego busco
    }else if(categories.length>0 && textoIngresado != ""){ 
       data.events.filter(event => categories.includes(event.category)).filter
        (event =>event.name.toLowerCase().includes(textoIngresado) || event.description.toLowerCase().includes
        (textoIngresado)).forEach(event =>{HTMLresultados += createCard(event)});
      
        console.log(HTMLresultados);
    }else if(categories.length==0 && busqueda.length == 0){
        data.events.forEach(event =>
        {HTMLresultados += createCard(event)});
    }
    return HTMLresultados;
}


let inputBusqueda=document.getElementById("search");
    document.querySelector("#form-inline").onsubmit = (e)=> {
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







// document.querySelector("ul.list-group").innerHTML=Events;

// lisCaterorias.forEach(checkbox => checkbox.onchange = () => {
//     let HTMLresultados="";
//     let categorias = [];
//     lisCaterorias.forEach(checkbox => {
//         if(checkbox.checked){
//             categorias.push(checkbox.value)
//         }
//     })
//     console.log(categorias);
//     data.events.filter(event => categorias.includes(event.category).forEach(event =>{
//         HTMLresultados += createCheckbox(event);
//     }))
//     console.log(HTMLresultados)

//     document.querySelector("galeria").innerHTML = HTMLresultados;
// });