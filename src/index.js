//
// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const div = document.querySelector("#dog-image-container")
// // document.addEventListener("DOMContentLoaded", function a () {
    fetch(imgUrl)
    .then((response) => response.json())
       .then((json) => {
         console.log(json);
       a.message.forEach(function(messag)){


          div.innerHTML+=
            `<img src="${iimgUrl}">`
            )
          }  }
;
