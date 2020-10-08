function openMenu() {
    document.getElementById('mobile-menu').style.top = '0%';
}

function closeMenu() {
    document.getElementById('mobile-menu').style.top = '-100%';
}

document.getElementById('open-button').addEventListener('click', openMenu);
document.getElementById('close-button').addEventListener('click', closeMenu);
