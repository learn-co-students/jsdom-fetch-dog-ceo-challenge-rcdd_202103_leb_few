console.log('%c HI', 'color: firebrick')

function loadImages(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch( imgUrl).then(res => res.json())
               .then(result=> {result.message.forEach(image=> addImage(image))})}
function addImage(urlOfDogPic)  {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}             

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {addBreed(results)})}
      function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}