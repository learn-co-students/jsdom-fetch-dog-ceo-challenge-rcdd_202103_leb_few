console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
document.addEventListener('DOMContentLoaded', run);
function run() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(imgUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json);
    let images = document.getElementById("dog-image-container");
    for (let i=0;i<4;i++){
    images.insertAdjacentHTML('beforeend', `<img src="${json.message[i]}">`);
  }
  });
fetch(breedUrl)
.then(function(response){
  return response.json();
})
.then(function(json){
  console.log(json);
  console.log(json.message.length);
  let breeds = document.getElementById("dog-breeds");
  for (let i=0;i<20;i++){
    breeds.insertAdjacentHTML('beforeend',`<li>${json.message[i]}</li>`)
  }

});
}
