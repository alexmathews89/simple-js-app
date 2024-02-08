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
