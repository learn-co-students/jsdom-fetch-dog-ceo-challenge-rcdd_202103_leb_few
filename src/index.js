console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetImages(){
  return fetch(imgUrl)
  .then(response=>response.json())
}
