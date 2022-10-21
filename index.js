//Notes : Variables here to manipulate the DOM (Show on page)
const pokeName = document.getElementById("poke-name");
const pokePic = document.getElementById("poke-pic");
const pokeDesc = document.getElementById("poke-desc");
const prevButton = document.getElementById("pre-button");
const nextButton = document.getElementById("next-button");

// Notes : Starting to grab the data from poke API website
const poke = fetch("https://pokeapi.co/api/v2/pokemon/6")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    pokeName.textContent = data["name"];
    pokePic.src = data["sprites"]["other"]["dream_world"]["front_default"];
    console.log(poke);
  });

//Data for description
const pokeText = fetch("https://pokeapi.co/api/v2/pokemon-species/6")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    pokeDesc.textContent = data["flavor_text_entries"][8]["flavor_text"];
  });
// TODOS: Implement functionality for next and previous buttons
//Add a party system to be able to add pokemon to party list(MAX 6)
//Alternatively have a list of pokemon to click on; to change the pokemon displayed or search feature - dunno which I want yet
