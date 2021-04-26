console.log('%c HI', 'color: firebrick')

//Challenge 1:
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// fetch(imgUrl)
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   console.log(json);
//   let imgArr= json.message;
//   let imgDiv= document.getElementById("dog-image-container")
//   for (let j=0; j< imgArr.length; j++){
//     imgDiv.innerHTML += `<img src=${imgArr[j]}></img><br>`
//   }
  
// })


//Challenge 2:

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
  let breed = json.message;
  console.log(breed);
  let dogList = document.getElementById("dog-breeds")
  
  // for (const b in breed){
  //       dogList.innerHTML +=`<li> ${breed[b]} </li>`
  // }
  
  
// Challenge 3:  
  for (let key in breed){
   if(breed.hasOwnProperty(key)){
     //console.log(`${key} : ${breed[key]}`)
     dogList.innerHTML +=`<li onmouseover="change(this)" onmouseout="changeback(this)" > ${key}: ${breed[key]} </li>`
   }
}
})

let li = document.querySelector("li");

function change (element) {
    let style = element.style;
    style.color = "red";
  }

  
function changeback(element){
    let style = element.style;
    style.color = "";
}


//Challenge 4:

let l = document.getElementById("breed-dropdown").value;
let li3 = document.getElementsByTagName("li")

let len=document.getElementById("dog-breeds").getElementsByTagName("li").length


li3[0].textContent[1] === t[0]

for (let j=0; j<len ; j++){
  if(li3[j].textContent[1] === l){
    console.log("MATCH");
    li3[j].style.display="none";
  }
  // else{
  //   li2[j].style.display="none";
  // }
}
