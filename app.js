var overlay = document.getElementById("overlay-links");

function openNav() {
    document.getElementById("myNav").style.width = "80%";
    overlay.style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    overlay.style.display = "none";
}