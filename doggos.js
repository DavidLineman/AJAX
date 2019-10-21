const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const breedList = "https://dog.ceo/api/breeds/list/all";

const doggos = document.querySelector(".doggos");
const doggoList = document.querySelector(".breed");


function createDoggoList() {
  const list = fetch(breedList);
  list
    .then(function (response) {
      const processingList = response.json();
      return processingList;
    })
    .then(function (processedResponse) {
      const option = document.createElement("option");
      option.src = processedResponse.message;
      doggoList.appendChild(option); 
    }); 
}


function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo!";
      doggos.appendChild(img);
    });
}



document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
document.querySelector(".breed").addEventListener("click", createDoggoList);