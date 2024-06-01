let menuOpen = false;
if (document.getElementById("dropdownMenuButton")) {
document.getElementById("dropdownMenuButton").addEventListener('click', ()=> {
    if (menuOpen == false) {
        document.getElementById("dropdownMenu").style.zIndex = 35;
        menuOpen = true;
    } else if (menuOpen == true) {
        document.getElementById("dropdownMenu").style.zIndex = -1;
        menuOpen = false;
    };
});}

if (document.getElementById("dropdownMenuButtonDevPage")) {
document.getElementById("dropdownMenuButtonDevPage").addEventListener('click', ()=> {
    if (menuOpen == false) {
        document.getElementById("dropdownMenu").style.zIndex = 35;
        menuOpen = true;
    } else if (menuOpen == true) {
        document.getElementById("dropdownMenu").style.zIndex = -1;
        menuOpen = false;
    };
});}

document.getElementById("closeOption").addEventListener('click', ()=> {
    if (menuOpen == false) {
        document.getElementById("dropdownMenu").style.zIndex = 35;
        menuOpen = true;
    } else if (menuOpen == true) {
        document.getElementById("dropdownMenu").style.zIndex = -1;
        menuOpen = false;
    };
});