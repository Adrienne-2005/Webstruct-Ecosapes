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
