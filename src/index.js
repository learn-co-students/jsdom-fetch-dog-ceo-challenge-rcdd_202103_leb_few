console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//fetch images
function fetImages(){
  return fetch(imgUrl)
  .then(response=>response.json())
/////  .then(json ==>console.log(json))
}

//Get Img
function addImages (imageSRC){
  let imagecontainer = document.getElementById('dog-image-container')
  let img = document.createElement('img')
      img.src = imageSRC

imagecontainer.appendChild(img)
}
//Add img
function postimages(){
  fetchImages()
  .then(object => object.message.forEach (object => {addImages(object)}))
}

//fetch breeds
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function fetchBreeds(){
  return fetch(breedUrl)
  .then(response =>response.json())
}

//Add Breed list
function AddBreedList(breedSRC){
  let breedList = document.getElementById(('dog-breeds'))
  let breedLi = document.createElement('li')
  breedLi.innerText= breedSRC
  breedList.appendChild(breedLi)
}

//Add breedLi
function addBreeds(){
  fetchBreeds()
  .then(breeds =>object.keys(breeds.message).forEach(breed => {addList(breed)}))
}

//Change fontColor of li
function changeTextcolor(){
  document.addEventListener('click',event=> {
    if (event.target.tagName ==='li'){
      event.target.style.color = 'pink';
    }
  })
}

//push breed into array
const breedarray =[]
function  pushBreed(){
  fetch (breedUrl)
  .then (response => response.json()
  .then (breeds => object.keys(breeds.message).forEach(dog => {breedArray.push(dog)})))
}

//sleect first letter of breed
function filterDogs(letter){
  return breedArray.filter(dog=>dog[0] === letter)
}

//dropdown
const dogBreeds = document.getElementById('dog-breeds')
const dropDown = document.getElementById('breed-dropdown')

function dropDownMenu(){
dropDown.addEventListener('change',function(event){
dogBreeds.innetHtml =" "
let filterD = filterDogs(dropDown.value)
.map(dog => `<li>${dog}</li>`).join('')
dogBreeds.innerHTML += filterD
})
}

//document onload !!
document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    addImages()
    postImages()
    fetchBreeds()
    AddBreedList()
    addBreeds()
    fetchBreedsList()
    dropDownMenu()
    changeTextColor()
})
