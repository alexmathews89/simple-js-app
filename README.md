//[
//{ name: "Bulbasaur", height: 0.7, types: ["grass", "poison"] },
//{ name: "Charizard", height: 1.7, types: ["fire", "flying"] },
//{ name: "Articuno", height: 1.5, types: ["ice", "flying"] },
//];

//old showDetails function
function showDetails(item) {
pokemonRepository.loadDetails(item).then(function () {
console.log(item);
});
}

Old HTML Modal

<!--<div class="modal">
        <button class="modal-close">Close</button>
        <h1>Modal title</h1>
        <p>Modal text</p>
      </div>-->

Old showModal Function
function showModal(pokemon) {
let modalContainer = document.querySelector("#modal-container");
modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement("p");
    contentElement.innerText = "Height: " + pokemon.height;

    let imageElement = document.createElement("img");
    imageElement.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");
    //showModal(item.name, item.height);

}

#modal-container.is-visible {
position: fixed;
padding: 20px;
box-sizing: border-box;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);

/_ to show it above other content _/
z-index: 999;

/_ to allow scrolling if the screen is not high enough_/
overflow: auto;

/_ this is used to center the modal _/
display: grid;
text-align: center;
}
