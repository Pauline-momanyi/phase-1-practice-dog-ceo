console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{

    //Images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then (res => res.json())
    //.then(resp => console.log(resp))
    .then(json => json.message.forEach(image => showImage(image)))

    function showImage(element){
        const images = document.createElement('img')
        images.src = element
        document.getElementById('dog-image-container').appendChild(images)   

    }

    //Breeds
    let breed = []
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch (breedUrl)
    .then(res=>res.json())
    //.then(json => console.log(json))
    .then(json => {
        breed = Object.keys(json.message)
        // breed.forEach(element => addBreeds(element))
        updateBreeds(breed)
        filterWithLetter()
    })
        
    function addBreeds(element){
        let list = document.createElement('li')
        list.textContent = element
        document.getElementById('dog-breeds').appendChild(list)

        list.addEventListener('click', changeColor)
        }

    function changeColor(event){
        event.target.style.color = 'red';
    }

    function selectWithLetter(letter){
       updateBreeds(breed.filter(breed=>breed.startsWith(letter)))
    }


    function updateList(element) {
        let child = element.lastElementChild;
        while (child) {
          element.removeChild(child);
          child = element.lastElementChild;
        }
      }

    function updateBreeds(breeds){
        let ul = document.getElementById('dog-breeds')
        updateList(ul)
        breeds.forEach(breed=>addBreeds(breed))
    }

    function filterWithLetter() {
        document.querySelector('#breed-dropdown').addEventListener('change', function (event) {
          selectWithLetter(event.target.value);
        }
        )
    }

})
