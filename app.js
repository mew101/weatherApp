const api = {
   key: "62b2ca15b7729b6756665ecfae634b1f",
   baseurl: "https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(event) {
    if(event.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

//function getResults (query) {
//    fetch (`${api.base}weather?q={query}&units=metric&APPID=`)
//}