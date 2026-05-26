const luzonCard = document.getElementById('luzon');
const visayasCard = document.getElementById('visayas');
const mindanaoCard = document.getElementById('mindanao');

luzonCard.addEventListener('click', function () {
    window.location.href = 'luzon.html';
});

visayasCard.addEventListener('click', function () {
    window.location.href = 'visayas.html';
});

mindanaoCard.addEventListener('click', function () {
    window.location.href = 'mindanao.html';
});

const hamButton = document.getElementById('hamButton');
const hamIconMenu = document.getElementById('hamMenu');

hamButton.addEventListener('click', function() {
    if (hamIconMenu.style.display == 'none') {
        hamIconMenu.style.display = 'block';
    } else {
        hamIconMenu.style.display = 'none';
    }
});

const descBtn = document.getElementById('descBtn');
const homeDesc = document.getElementById('homeDesc');
const homeDescOverlay = document.getElementById('homeDescOverlay');
const closeBtn = document.querySelector('.closeButtonHome button');

function openHomeDesc() {
    homeDescOverlay.style.display = 'block';
    homeDesc.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    hamIconMenu.style.display = 'none';
}

function closeHomeDesc() {
    homeDescOverlay.style.display = 'none';
    homeDesc.style.display = 'none';
    document.body.style.overflow = '';
}

if (descBtn) descBtn.addEventListener('click', openHomeDesc);
if (closeBtn) closeBtn.addEventListener('click', closeHomeDesc);
if (homeDescOverlay) homeDescOverlay.addEventListener('click', closeHomeDesc);

const homeluzonCard = document.getElementById('homeluzon');
const homevisayasCard = document.getElementById('homevisayas');
const homemindanaoCard = document.getElementById('homemindanao');

homeluzonCard.addEventListener('click', function () {
    window.location.href = 'luzon.html';
});

homevisayasCard.addEventListener('click', function () {
    window.location.href = 'visayas.html';
});

homemindanaoCard.addEventListener('click', function () {
    window.location.href = 'mindanao.html';
});



const allLocations = document.getElementById('allLocations');
const locationListsEl = document.getElementById('locationLists');
const searchBar = document.getElementById('searchBar');

let jsonData;
async function fetchJSON(filename) {
    const response = await fetch(filename);
    const result = await response.json();
    jsonData = result;
    updateLocationList();
}

fetchJSON("./newver.json");

function updateLocationList(filter = '') {
    if (!locationListsEl || !jsonData || !Array.isArray(jsonData.locationLists)) return;

    const query = filter.trim().toLowerCase();
    
    let matches = jsonData.locationLists.filter(function(item) {
        return item.toLowerCase().includes(query);
    });

    matches = matches.slice(0, 10);

    locationListsEl.innerHTML = '';

    if (matches.length == 0) {
        const noResult = document.createElement('li');
        noResult.textContent = 'No destinations found';
        noResult.className = 'no-results';
        locationListsEl.appendChild(noResult);
        return;
    }

    matches.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = 'location-item';
        li.addEventListener('mousedown', function () {
            if (searchBar) searchBar.value = item;
            if (allLocations) allLocations.style.display = 'none';
        });
        locationListsEl.appendChild(li);
    });
}

if (searchBar) {
    searchBar.addEventListener('blur', function() {
        if (allLocations) allLocations.style.display = 'none';
    });

    searchBar.addEventListener('focus', function() {
        if (allLocations) allLocations.style.display = 'block';
        updateLocationList(searchBar.value);
    });

    searchBar.addEventListener('input', function() {
        if (allLocations) allLocations.style.display = 'block';
        updateLocationList(searchBar.value);
    });
}

function searchFilter() {
    if (!searchBar) return;
    if (allLocations) allLocations.style.display = 'block';
    updateLocationList(searchBar.value);
}