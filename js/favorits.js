// MODIFICAR Y REVISAR

function loadFavorites() {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
        window.location.href = 'index.html'; 
        return;
    }

    const userData = JSON.parse(localStorage.getItem(user));
    const favoritesList = document.getElementById('favoritesList');

    if (userData && userData.favorites) {
        userData.favorites.forEach(comicId => {
            fetch(`https://api.marvel.com/v1/comics/${comicId}?api_key=674c4ed489f4bda4430a80f128cdeffc89acae4c`)
                .then(response => response.json())
                .then(data => {
                    const comic = data.results[0];
                    const comicElement = document.createElement('div');
                    comicElement.innerHTML = `
                        <h3>${comic.name}</h3>
                        <img src="${comic.imageUrl}" alt="${comic.name}" />
                        <p>${comic.description.substring(0, 50)}</p>
                        <button onclick="removeFromFavorites(${comic.id})">Remove from Favorites</button>
                    `;
                    favoritesList.appendChild(comicElement);
                });
        });
    }
}

function removeFromFavorites(comicId) {
    const user = localStorage.getItem('loggedInUser');
    const userData = JSON.parse(localStorage.getItem(user));

    if (userData) {
        userData.removeFavorite(comicId);
        localStorage.setItem(user, JSON.stringify(userData));
        loadFavorites(); 
    }
}