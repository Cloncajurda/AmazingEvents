console.log([document]);

const queryString = location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
        
        const id = params.get("id");
        const evento = data.events.find(event => event._id == id);

 const cardDetail = document.querySelector("#containerdetails");
 cardDetail.innerHTML =     `<div class="card">
                                <img src="${evento.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="card-img-top">
                                        <h5 class="card-title">${evento.name}</h5>
                                        <p class="card-text">${evento.description}</p>
                                        <p class="card-text">Place:${evento.place}</small></p>
                                        <p class="card-text">Capacity: ${evento.capacity}</p>
                                        <p class="card-text">Date: ${evento.date}</p>
                                        <p class="card-text">Price: U$S${evento.price}</p>
                                    </div>
                                </div>
                            </div>`

