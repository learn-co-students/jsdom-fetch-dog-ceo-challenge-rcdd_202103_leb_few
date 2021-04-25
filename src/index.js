console.log('%c HI', 'color: firebrick')

function fetchImgs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imgDiv = document.getElementById("dog-image-container");
  fetch(imgUrl).then(response => response.json()).then(json => {
    console.log(json);
    for(let i=0;i<json.message.length;i++) {
      imgDiv.insertAdjacentHTML('beforeend',`<img src = ${json.message[i]} width='300px' height='200px' style='margin-right: 10px'>`);
    }
  });
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const breedUl = document.getElementById("dog-breeds");
  fetch(breedUrl).then(response => response.json()).then(json => {
    console.log(json);
    for(const key in json.message) {
      if(json.message[key].length !== 0) {
        for(let i=0;i<json.message[key].length;i++) {
          breedUl.insertAdjacentHTML('beforeend',`<li>${json.message[key][i]}</li>`);
          const li = document.querySelectorAll("li");
          li[li.length - 1].addEventListener("click", (e) => {
            e.target.style.color = "red"; });
        }
      }
    }
  });
}

function filterBreeds() {
  const index = document.getElementById("breed-dropdown").selectedIndex;
  const letter = document.getElementById("breed-dropdown").options[index].innerHTML;
  console.log(letter);
  const li = document.querySelectorAll("li");
  for(let i=0;i<li.length;i++) {
    li[i].style.display = "list-item";
    if(li[i].innerHTML[0] !== letter) {
      li[i].style.display = "none";
    }
  }
}

fetchImgs();
fetchBreeds();
document.getElementById("breed-dropdown").addEventListener("change",() => {
  filterBreeds();
});
