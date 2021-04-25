console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(json =>
   {//console.log(json);
     const imgs = document.getElementById('dog-image-container');
    for(let i in json.message){
      //console.log(json.message[i]);
      imgs.innerHTML += `<img src="${json.message[i]}"/>`;
    }
});

fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(json =>{
  const ul = document.getElementById('dog-breeds');
 for(const i in json.message){
   //console.log(i);
   let dogLi = document.createElement("li");
        dogLi.innerHTML = i;
        dogLi.addEventListener("click", ()=> {
          // console.log("hi");
           dogLi.style.color= "#adcae6";//lightBlue
        });
          ul.appendChild(dogLi);

  }
});
let chooseChar = document.getElementById("breed-dropdown");
chooseChar.addEventListener("change",() => {
  let value = chooseChar.options[chooseChar.selectedIndex].text;
 const list = document.querySelectorAll("li");
 for(let i=0 ; i<list.length ; i++) {
   if(list[i].innerHTML[0] !== value) {
     list[i].style.display = "none";
   }
 }
});
});
