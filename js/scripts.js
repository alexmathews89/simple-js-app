let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, types: ["grass", "poison"] },
    { name: "Charizard", height: 1.7, types: ["fire", "flying"] },
    { name: "Articuno", height: 1.5, types: ["ice", "flying"] },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonUnorderedList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonUnorderedList.appendChild(listItem);
    button.addEventListener("click", showDetails(pokemon));
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

// the array listed above is a list of pokemon

pokemonRepository.getAll().forEach(function (pokemon) {
  //document.write(" " + pokemon.name + "(height: " + pokemon.height + ")");
  //if (pokemon.height > 1.5) {
  //document.write(" -Wow, that's big!");

  //}

  pokemonRepository.addListItem(pokemon);
});
