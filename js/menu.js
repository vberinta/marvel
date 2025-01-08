// menu.js

// This function will display the menu if the user is logged in
function showMenu() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (!loggedInUser) {
        // If no user is logged in, hide the menu
        document.getElementById('menu').style.display = 'none';
    } else {
        // Show the menu and update the favorites count
        const userData = JSON.parse(localStorage.getItem(loggedInUser));
        const favoritesCount = userData ? userData.favorites.length : 0;
        document.getElementById('favoritesCount').textContent = `Favorites (${favoritesCount})`;
        document.getElementById('menu').style.display = 'block';
    }
}

// This function will log the user out by removing the session and redirecting to the login page
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html'; // Redirect to login page
}



// HTML para añadir a cada pagina 

<!-- This is the menu that will be shown to logged-in users -->
<header id="menu" style="display: none;">
    <nav>
        <ul>
            <li><a href="comics.html">Comics</a></li>
            <li><a href="favorites.html" id="favoritesCount">Favorites (0)</a></li>
            <li><a href="video.html">Video</a></li>
            <li>
                <a href="#" onclick="logout()">Username (Logout)</a>
                <!-- You can dynamically display the username here if needed -->
            </li>
        </ul>
    </nav>
</header>

<script src="../js/menu.js"></script>
<script>
    // Call the showMenu function to display the menu when the page loads
    window.onload = showMenu;
</script> 