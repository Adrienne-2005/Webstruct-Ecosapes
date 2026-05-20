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

