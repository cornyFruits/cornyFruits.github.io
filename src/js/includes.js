// includes.js 
// Includes helper functions which fetch and insert the contents - in html - of
// each section of the website 
//
// Written by Krittika Sharma on the 24-05-2023
//

// Function to fetch and insert the contents of navbar.html
// Uses the Fetch API to retrieve the contents of the navbar.html file, inserts
// this content into the 'navbar-container' div on tha page - also handles errors
function includeNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarContainer = document.getElementById('navbar-container');
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error(error));
}
