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
  return {
    add: add,
    getAll: getAll,
  };
})();

// the array listed above is a list of pokemon

//for (let i = 0; i < pokemonList.length; i++) {
//document.write(
//" " + pokemonList[i].name + "(height: " + pokemonList[i].height + ")"
//);
//if (pokemonList[i].height > 1.5) {
//document.write(" -Wow, that's big!");
//}
//}

pokemonList.forEach(function (pokemon) {
  document.write(" " + pokemon.name + "(height: " + pokemon.height + ")");
  if (pokemon.height > 1.5) {
    document.write(" -Wow, that's big!");
  }
});
