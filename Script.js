function showPage2() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

function showThankYou() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('thank-you').classList.remove('hidden');
}

function forceYes() {
    const noButton = document.getElementById('no-button');
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * 80 + 10}%`;
    noButton.style.left = `${Math.random() * 80 + 10}%`;
}