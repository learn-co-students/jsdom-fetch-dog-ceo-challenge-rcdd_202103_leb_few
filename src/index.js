const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogDiv = document.querySelector("div");

fetch(imgUrl)
.then(function(response){
  return response.json();
})
.then(function(json){
  const dogs = json["message"];
  showImage(dogs);
});

function showImage(dogs){
  for(const dog of dogs){
    dogDiv.innerHTML += `<img src="${dog}" \>`
  }
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedList = document.getElementById("dog-breeds");
const select = document.querySelector("select");
const breedsArray = [];

fetch(breedUrl)
.then(function(response){
  return response.json();
})
.then(function(json){
  const breeds = json["message"];
  addBreed(breeds);
});

function addBreed(breeds){
  for(const breed in breeds){
    breedsArray.push(breed);
    let element = document.createElement("li");
    element.innerHTML = `${breed}`;
    element.addEventListener("click", function(){
      element.style.color = 'red';
    });
    breedList.appendChild(element);
  }
}

select.addEventListener("change", function(e){
  breedList.innerHTML = "";
  let value = select.value;
  for(const breed of breedsArray){
    if(breed.charAt(0) === value){
      let element = document.createElement("li");
      element.innerHTML = `${breed}`;
      element.addEventListener("click", function(){
        element.style.color = 'red';
      });
      breedList.appendChild(element);
    }
  }
});
