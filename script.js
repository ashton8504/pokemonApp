// Attempting to link up the input with pokemon API
// https://stackoverflow.com/questions/66576042/how-do-i-get-a-user-input-and-insert-it-into-the-api-link-is-javascript

async function getData() {
  let userInput = document.getElementsByClassName(".userInput").value;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151%27${userInput}`;
  const response = await fetch(url);
  const data = await response.json();

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = data;
  console.log(data);
}

console.log(getData());

/*
console.log on line 12 displays the api information to console 
so it pulls api information on pokes

console.log on function getData() displays "promise pending"

figure out how to render pokemon stats and image
*/

/* 
Below cod not working produces error 
TypeError: data.forEach is not a function


*/

fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27")
  .then(res => {
    return res.json();
  })
    .then(data => {
      data.forEach(user => {
        const markup = `<li>${user.result}</li>`
          console.log(markup)

        document.querySelector("ul").insertAdjacentElement("beforeend", markup)
      })
    })
      .catch(error => console.log(error))
