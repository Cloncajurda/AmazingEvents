let htmlEvents = "";
let cardContainer = document.getElementById("card")

for (let event of data.events){
    htmlEvents += createCard(event);
}
cardContainer.innerHTML =htmlEvents;

