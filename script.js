// Attempting to link up the input with pokemon API
// https://stackoverflow.com/questions/66576042/how-do-i-get-a-user-input-and-insert-it-into-the-api-link-is-javascript

async function getData() {
  let userInput = document.getElementsByClassName(".userInput").value;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151%27${userInput}`;
  const response = await fetch(url);
  const data = await response.json();

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = data;
}

console.log(getData());
