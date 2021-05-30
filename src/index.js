console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const arrBreed = []
let value ;
//document.querySelector('#dog-breeds')
function main(){
  const select = document.getElementById('breed-dropdown');

  select.addEventListener("change", function() {
     value = select.options[select.selectedIndex].value;
     let found = arrBreed;

     if(value !== "all"){

        found = arrBreed.filter(elem => {
         if(elem.charAt(0) === value){
           return elem.toLowerCase();
         }
        });
     }

    //  const found = arrBreed.filter(elem => {
    //   return elem.toLowerCase().includes(value);});

     displayBreed(found);


  });

  function Img(data){
    for(const img of data.message){
      document.querySelector('#dog-image-container').innerHTML += `<img src="${img}" alt="  Dog pictures" width="500" height="600">`;
    }

  }

  function collectBreed(data){
    for(const breed in data.message){
       arrBreed.push(breed);
    }

    displayBreed(arrBreed);
    // Object.keys(wednesdayMenu)
    document.getElementById("dog-breeds").addEventListener("click", function(e) {
      if (e.target && e.target.matches("li.item")) {
            e.target.style.color = "blue";
      // alert("clicked " + e.target.innerText);
      }
    });
  }

  const displayBreed = (arrBreed)=>{
      document.querySelector('#dog-breeds').innerHTML = "";

      for(const breed of arrBreed){
        document.querySelector('#dog-breeds').innerHTML += `<li class="item" >${breed}</li>`;
      }
  }

  function fecthImg() {
      fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => Img(json))
  }
  function fecthBreed() {
      fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => collectBreed(json))
  }


  function fecthApis() {
    fecthImg();
    fecthBreed();
  }
    fecthApis();

}

window.onload = main;
