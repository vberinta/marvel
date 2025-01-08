let currentPage = 1; 
let offset = 0; // Moved offset here for global scope

const ts = Math.floor(new Date().getTime() / 1000);
const publicKey = "ec32608ef2fd08aa22591a2ed8b6a309";
const privateKey = "674c4ed489f4bda4430a80f128cdeffc89acae4c";  
const limit = 10;
const hash = "deb5883f6822825164ef05989c134eec"; 

function loadComics() {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
        window.location.href = 'index.html'; 
        return;
    }

    const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response data to check if API is working
            displayComics(data.data.results);
        }) 
        .catch(error => console.error('Error:', error));
}

function displayComics(comics) {
    const comicsList = document.getElementById('comicsList');
    comicsList.innerHTML = '';
    
    comics.forEach(comic => {
        const comicElement = document.createElement('div');
        comicElement.innerHTML = `
            <h3>${comic.title}</h3> 
            <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" />
            <p>${comic.description ? comic.description.substring(0, 50) : ''}</p>
            <button onclick="addToFavorites(${comic.id})">Añadir a favoritos</button>
            <button onclick="viewComicDetails(${comic.id})">Detalles sobre el comic</button>
        `;
        comicsList.appendChild(comicElement);
    });
}

function addToFavorites(comicId) {
    const user = localStorage.getItem('loggedInUser');
    const userData = JSON.parse(localStorage.getItem(user));
    if (userData) {
        userData.addFavorite(comicId);
        localStorage.setItem(user, JSON.stringify(userData));
    }
}

function loadNextPage() {
    currentPage++; 
    offset = (currentPage - 1) * limit; 
    loadComics(); 
}

// Load initial comics when page loads
window.onload = loadComics;