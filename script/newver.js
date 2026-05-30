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

const locationMap = {
    "Mount Pulag":               { region: "luzon",    key: "pulag" },
    "Hundred Islands":           { region: "luzon",    key: "hundred" },
    "Coron":                     { region: "luzon",    key: "coron" },
    "Mount Mayon":               { region: "luzon",    key: "mayonluzon" },
    "Mount Pinatubo":            { region: "luzon",    key: "pinatubo" },
    "Banaue Rice Terraces":      { region: "luzon",    key: "banaue" },
    "Calaguas Island":           { region: "luzon",    key: "calaguas" },
    "Sabtang Island":            { region: "luzon",    key: "sabtang" },
    "Pagsanjan Falls":           { region: "luzon",    key: "pagsanjan" },
    "Taal Lake":                 { region: "luzon",    key: "taal" },
    "Balite Falls":              { region: "luzon",    key: "balite" },
    "Mount Isarog":              { region: "luzon",    key: "isarog" },
    "Minalungao National Park":  { region: "luzon",    key: "minalungao" },
    "Apao Rolling Hills":        { region: "luzon",    key: "apao" },
    "Maniwaya Island":           { region: "luzon",    key: "maniwaya" },
    "Tubbataha Reefs":           { region: "luzon",    key: "tubbataha" },
    "Mount Banahaw":             { region: "luzon",    key: "banahaw" },
    "Ticao Island":              { region: "luzon",    key: "ticao" },
    "Hinagdanan Cave":           { region: "visayas",  key: "hinagdanan" },
    "Osmeña Peak":               { region: "visayas",  key: "osmena" },
    "Chocolate Hills":           { region: "visayas",  key: "chocolatehills" },
    "Kawasan Falls":             { region: "visayas",  key: "kawasan" },
    "Boracay":                   { region: "visayas",  key: "boracayisland" },
    "Pitogo Cliff":              { region: "visayas",  key: "pitogo" },
    "Apo Island":                { region: "visayas",  key: "apois" },
    "Manjuyod Sandbar":          { region: "visayas",  key: "manjuyod" },
    "Kalanggaman Island":        { region: "visayas",  key: "kalanggaman" },
    "Carbin Reef":               { region: "visayas",  key: "carbin" },
    "Danjugan Island":           { region: "visayas",  key: "danjugan" },
    "Mount Luho":                { region: "visayas",  key: "luho" },
    "Malumpati Cold Spring":     { region: "visayas",  key: "malumpati" },
    "Bucari Pine Forest":        { region: "visayas",  key: "bucari" },
    "Mambucal Mountain Resort":  { region: "visayas",  key: "mambucal" },
    "Cuatro Islas":              { region: "visayas",  key: "cuatro" },
    "Sohoton Cave":              { region: "visayas",  key: "sohor" },
    "Sogod Bay":                 { region: "visayas",  key: "sogod" },
    "Mount Apo":                 { region: "mindanao", key: "mtapo" },
    "White Island":              { region: "mindanao", key: "white" },
    "Pink Sand Beach":           { region: "mindanao", key: "pink" },
    "Lake Sebu":                 { region: "mindanao", key: "sebu" },
    "Hinatuan Enchanted River":  { region: "mindanao", key: "hinatuan" },
    "Siargao":                   { region: "mindanao", key: "siargaois" },
    "Lake Holon":                { region: "mindanao", key: "holon" },
    "Tinuy-an Falls":            { region: "mindanao", key: "tinuy" },
    "Mount Hamiguitan":          { region: "mindanao", key: "hamiguitan" },
    "Bucas Grande":              { region: "mindanao", key: "bucas" },
    "Musuan Peak":               { region: "mindanao", key: "musuan" },
    "Once Islas":                { region: "mindanao", key: "once" },
    "Mount Matutum":             { region: "mindanao", key: "matutum" },
    "Monfort Bat Sanctuary":     { region: "mindanao", key: "monfort" },
    "Mapawa Nature Park":        { region: "mindanao", key: "mapawa" },
    "Panimahawa Ridge":          { region: "mindanao", key: "panimahawa" },
    "Gumasa Beach":              { region: "mindanao", key: "gumasa" },
    "Maria Cristina Falls":      { region: "mindanao", key: "maria" }
};

function navigateToLocation(locationName) {
    const info = locationMap[locationName];
    if (!info) return false;
    window.location.href = `${info.region}.html?location=${info.key}`;
    return true;
}


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
            // Navigate directly to the location's page and trigger its popup
            navigateToLocation(item);
        });
        locationListsEl.appendChild(li);
    });
}

if (searchBar) {
    searchBar.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const val = searchBar.value.trim();
            // Try exact match first, then case-insensitive
            if (locationMap[val]) {
                navigateToLocation(val);
            } else {
                const found = Object.keys(locationMap).find(
                    k => k.toLowerCase() === val.toLowerCase()
                );
                if (found) navigateToLocation(found);
            }
        }
    });

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