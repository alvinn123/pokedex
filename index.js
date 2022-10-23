//Notes : Variables here to manipulate the DOM (Show on page)
const pokeName = document.getElementById("poke-name");
const pokePic = document.getElementById("poke-pic");
const pokeAbilityOne = document.getElementById("poke-ability-1");
const pokeAbilityTwo = document.getElementById("poke-ability-2");
const prevButton = document.getElementById("pre-button");
const nextButton = document.getElementById("next-button");

//Notes : Starting to grab the data of Pokemon name and sprite from API

let id = 1;
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

function getPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      pokeName.textContent = data["name"];
      pokePic.src =
        data["sprites"]["other"]["dream_world"]["front_default"] ||
        data["sprites"]["front_default"];
      pokeAbilityOne.textContent = data["abilities"]["0"]["ability"]["name"];
      pokeAbilityTwo.textContent = data["abilities"]["1"]["ability"]["name"];
    });
}
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", previous);
// TODOS: Implement functionality for next and previous buttons
//Add a party system to be able to add pokemon to party list(MAX 6)
//Alternatively have a list of pokemon to click on; to change the pokemon displayed or search feature - dunno which I want yet
