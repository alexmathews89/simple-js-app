let pokemonRepository = (function () {
  let t = [];
  function e(e) {
    t.push(e);
  }
  function n() {
    return t;
  }
  function o(t) {
    pokemonRepository.loadDetails(t).then(function () {
      var e;
      let n, o, i, a, l;
      (e = t),
        (n = $(".modal-body")),
        (o = $(".modal-title")),
        $("modal-header"),
        o.empty(),
        n.empty(),
        (i = $("<h1>" + e.name + "</h1>")),
        (a = $('<img class="modal-img" style="width:50%">')).attr(
          "src",
          e.imageUrl
        ),
        (l = $("<p>height : " + e.height + "</p>")),
        o.append(i),
        n.append(a),
        n.append(l);
    });
  }
  return {
    add: e,
    getAll: n,
    addListItem: function t(e) {
      let n = document.querySelector(".pokemon-list"),
        i = document.createElement("li"),
        a = document.createElement("button");
      (a.innerText = e.name),
        i.classList.add("list-group-item"),
        a.classList.add("button-class"),
        a.classList.add("btn-primary"),
        a.setAttribute("data-toggle", "modal"),
        a.setAttribute("data-target", "#exampleModal"),
        i.appendChild(a),
        n.appendChild(i),
        a.addEventListener("click", function (t) {
          o(e);
        });
    },
    loadList: function t() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            e({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: function t(e) {
      return fetch(e.detailsUrl)
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          (e.imageUrl = t.sprites.front_default),
            (e.height = t.height),
            (e.types = t.types);
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    showDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
