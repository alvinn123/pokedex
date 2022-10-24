//Notes : Variables here to manipulate the DOM (Show on page)
const pokeName = document.getElementById("poke-name");
const pokePic = document.getElementById("poke-pic");
const pokeAbilityOne = document.getElementById("poke-ability-1");
const pokeAbilityTwo = document.getElementById("poke-ability-2");
const prevButton = document.getElementById("pre-button");
const nextButton = document.getElementById("next-button");
const searchButton = document.getElementById("search-button");

//Initialize start screen
let id = 1;
getPokemon();

//<----------Adding functionality to buttons------------->
function previous() {
  getPokemon();
  if (id <= 1) {
    return;
  } else {
    id--;
  }
  console.log(id);
}

function next() {
  getPokemon();
  id++;
  console.log(id);
}

//<-------Grabbing API of pokemon name, sprite, and abilities ------------>
function getPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      pokeName.textContent = data["name"];
      pokePic.src =
        data["sprites"]["other"]["dream_world"]["front_default"] ||
        data["sprites"]["front_default"];
      pokeAbilityOne.textContent = data["abilities"]["0"]["ability"]["name"];
      pokeAbilityTwo.textContent = data["abilities"]["1"]["ability"]["name"];
    });
}
//Pokemon search feature by name or number
function searchPokemon() {
  let id = document.querySelector("#search-bar").value;
  let idLower = id.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${idLower}`)
    .then((res) => res.json())
    .then((data) => {
      pokeName.textContent = data["name"];
      pokePic.src =
        data["sprites"]["other"]["dream_world"]["front_default"] ||
        data["sprites"]["front_default"];
      pokeAbilityOne.textContent = data["abilities"]["0"]["ability"]["name"];
      pokeAbilityTwo.textContent = data["abilities"]["1"]["ability"]["name"];
      console.log(id);
    });
}

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", previous);
searchButton.addEventListener("click", searchPokemon);

// TODOS: Fix bugs for the buttons
//Display error message if user enters name incorrectly.
//Add a party system to be able to add pokemon to party list(MAX 6)
//Alternatively have a list of pokemon to click on; to change the pokemon displayed or search feature - dunno which I want yet
