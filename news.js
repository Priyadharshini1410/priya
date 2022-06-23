let businessBtn = document.getElementById("business");
let sportsBtn = document.getElementById("sport");
let technologyBtn = document.getElementById("technology");
var newsDataArr = [];
const API_KEY = '8608a35cba1d4e6d9efc682a9a3390c8';
const BUSINESS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&language=&category=business&apiKey=`;
const SPORTS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&language=&category=sports&apiKey=`;
const TECHNOLOGY_NEWS = `https://newsapi.org/v2/top-headlines?country=in&language=&category=technology&pageSize=8&apiKey=`;

businessBtn.addEventListener("click",function(){
    news.innerHTML="<center><h1>TRENDING BUSSINESS NEWS</h1></center>";
    fetchBusinessNews();
});
const fetchBusinessNews  = async () =>{
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=150 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        return;
    }
    displayNews();
}
sportsBtn.addEventListener("click",function(){
    news.innerHTML="<center><h1>TRENDING SPORTS NEWS</h1></center>";
    fetchSportsNews();
});
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        return;
    }
displayNews();
}
technologyBtn.addEventListener("click",function(){
    news.innerHTML="<center><h1>TRENDING TECHNOLOGY NEWS</h1></center>";
    fetchTechnologyNews();
});
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        return;
    }
    displayNews();
}
function displayNews() {
    newsdetails.innerHTML = "";
         newsDataArr.forEach(news => {
        var column = document.createElement('div');
        column.className="col-sm-9 card";
        
        var card = document.createElement('div');
        
        var image = document.createElement('img');
        image.setAttribute("height","70%");
        image.setAttribute("width","50%");
        image.src=news.urlToImage;
    
        var cardBody = document.createElement('div');
        var newsHeading = document.createElement('h6');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;
        
        var discription = document.createElement('p');
        discription.className="text-primary";
        discription.innerHTML = news.description;
        
        var link = document.createElement('a');
        
        card.appendChild(cardBody);
        column.appendChild(card);
        card.appendChild(image);
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);
        newsdetails.appendChild(column);
    });
}
 
