console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', fetchImages)


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImages () {
  const images = document.getElementById("dog-image-container");
  const ulList = document.getElementById("dog-breeds");
   fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
  //  console.log(json);
    for(let i = 0; i < 4; i++) {
        images.insertAdjacentHTML('beforeend', `<img src="${json.message[i]}">`);
    }
  });
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    for(const key in json.message) {
      ulList.insertAdjacentHTML('beforeend', `<li>${key}</li>`)
    }
  })
}





//fetchImages(image);
