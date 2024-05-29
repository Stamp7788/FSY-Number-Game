function activateDropdownMenu() {
    document.getElementById("dropdownMenuButton").addEventListener('click', ()=> {
        document.getElementById("dropdownMenu").style.zIndex = 35;
    });
}
