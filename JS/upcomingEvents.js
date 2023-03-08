let upcomingEvents= "";
let cardContainer= document.getElementById("card")


for  (let event of data.events) {
    let currentDate = new Date(data.currentDate)
    let eventDate= new Date(event.date)
    
    if (eventDate> currentDate) {
        upcomingEvents += createCard(event)
    }
}
cardContainer.innerHTML= upcomingEvents;



//task3



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





