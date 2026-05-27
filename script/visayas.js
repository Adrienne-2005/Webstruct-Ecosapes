const destinationContainers = document.getElementsByClassName('destinations-container');
const popupContainer = document.getElementsByClassName('popup-container')[0];

let jsonData;
async function fetchJSON(filename) {
    const response = await fetch(filename);
    const result = await response.json();
    jsonData = result;
    autoOpenFromURL();
}
fetchJSON("./newver.json");

function openPopup(place) {
    const placeData = jsonData["visayas"][place];
    if (!placeData) return;

    popupContainer.style.display = 'flex';
    hamIconMenu.style.display = 'none';
    document.body.style.overflow = 'hidden';

    const mainImage = placeData["img-main-hd"];
    const mainImgElement = popupContainer.getElementsByClassName("img-main-hd")[0];
    const mainImg = document.createElement("img");
    mainImg.src = mainImage;
    mainImgElement.replaceChildren(mainImg);

    const title = placeData["title"];
    const titleHeading = popupContainer.getElementsByClassName("title")[0];
    titleHeading.textContent = title;

    const location = placeData["location"];
    const locationElement = popupContainer.getElementsByClassName("location")[0];
    locationElement.textContent = location;

    const explore = placeData["explore"];
    const exploreElement = document.getElementsByClassName("explore")[0];
    exploreElement.replaceChildren();
    for (const [key, value] of Object.entries(explore)) {
        const li = document.createElement("li");
        const strong = document.createElement("strong");
        const span = document.createElement("span");
        strong.textContent = key;
        span.textContent = " " + value;
        li.appendChild(strong);
        li.appendChild(span);
        exploreElement.appendChild(li);
    }

    const recommended = placeData["recommended"];
    const recommendedElement = popupContainer.getElementsByClassName("recommended")[0];
    recommendedElement.textContent = recommended;

    const requirement = placeData["requirement"];
    const requirementElement = popupContainer.getElementsByClassName("requirement")[0];
    requirementElement.textContent = requirement;

    const desc = placeData["description"];
    const descElement = popupContainer.getElementsByClassName('loc-desc')[0];
    descElement.replaceChildren();
    const h2 = document.createElement("h2");
    h2.textContent = "Description: ";
    descElement.appendChild(h2);
    for (const paragraph of desc) {
        const p = document.createElement('p');
        p.textContent = paragraph;
        descElement.appendChild(p);
    }

    const imgSets = placeData["img-sets"];
    const imgSetElement = document.getElementsByClassName("img-sets")[0];
    imgSetElement.replaceChildren();
    for (const imgPath of imgSets) {
        const img = document.createElement("img");
        img.src = imgPath;
        imgSetElement.appendChild(img);
    }

    popupContainer.scrollTop = 0;
}

function autoOpenFromURL() {
    const params = new URLSearchParams(window.location.search);
    const locationKey = params.get('location');
    if (locationKey && jsonData && jsonData["visayas"] && jsonData["visayas"][locationKey]) {
        openPopup(locationKey);
        const card = document.getElementById(locationKey);
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

for (const container of destinationContainers) {
    container.addEventListener('click', function() {
        const place = container.id;
        openPopup(place);
    });
}

const closeButton = popupContainer.getElementsByClassName('closeButton')[0];

closeButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
    document.body.style.overflow = 'scroll';
    
    const url = new URL(window.location);
    url.searchParams.delete('location');
    window.history.replaceState({}, '', url);
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