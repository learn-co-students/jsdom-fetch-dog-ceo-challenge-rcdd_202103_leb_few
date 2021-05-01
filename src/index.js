
console.log('%c HI', 'color: firebrick')
let breeds= [];
 document.addEventListener("DOMContentLoaded", function a () {
loadImages()
loadBreed()
 });

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}
function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
let newImageEl = document.createElement('img');
newImageEl.src=dogPicUrl
container.appendChild(newImageEl)
}


function loadBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)

.then(res => res.json())
.then (results => {
  breeds=Object.keys(results.message)
  breeds.forEach(breed => addBreed(breed))
  console.log(breeds)


});
}

function addBreed(breed) {
let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;


  ul.appendChild(li);
   li.addEventListener('click', function(){
   li.style.color = 'red';
 });
}
// let dropdown=document.querySelector("#breed-dropdown")
// function filter() {
// dropdown.addEventListener('change',event {
// let letter= event.target.value
//   const filtered =breeds.filter(wordsss => startsWith(letter));
// ul.innerHTML = loadBreed(filtered)
// });
//  }
