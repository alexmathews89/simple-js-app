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

Old CSS Modal container
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

Old CSS normalize link

 <!--<link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    />-->

Old JS modal container functions
//function hideModal() {
//let modalContainer = document.querySelector("#modal-container");
//modalContainer.classList.remove("is-visible");
//}

//window.addEventListener("keydown", (e) => {
//let modalContainer = document.querySelector("#modal-container");
//if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
//hideModal();
//}
//});

//let modalContainer = document.querySelector("#modal-container");
//modalContainer.addEventListener("click", (e) => {
//let target = e.target;
//if (target === modalContainer) {
//hideModal();
//}
//});

Old JS Pokemon Repository loop
// the array listed above is a list of pokemon

//pokemonRepository.getAll().forEach(function (pokemon) {
//document.write(" " + pokemon.name + "(height: " + pokemon.height + ")");
//if (pokemon.height > 1.5) {
//document.write(" -Wow, that's big!");

//}

//pokemonRepository.addListItem(pokemon);
//});

Old CSS Modal/Modal Container code
/_.pokemon-list {
list-style: none;
}_/

/_#modal-container {
display: none;
}_/

/_.modal {
margin: auto;
display: inline-block;
box-sizing: border-box;
background: #fff;
padding: 15px;
width: 100%;
max-width: 700px;
text-align: left;
}_/

/\*.modal-close {
float: right;
border: 0;
background: none;
color: #777;
text-decoration: underline;
}

.modal h1 {
margin-top: 0;
}

.modal p {
margin-bottom: 0;
}\*/
