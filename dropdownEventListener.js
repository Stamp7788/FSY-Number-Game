let menuOpen = false;
document.getElementById("dropdownMenuButton").addEventListener('click', ()=> {
    if (menuOpen == false) {
        document.getElementById("dropdownMenu").style.zIndex = 35;
        menuOpen = true;
    } else if (menuOpen == true) {
        document.getElementById("dropdownMenu").style.zIndex = -1;
        menuOpen = false;
    };
});