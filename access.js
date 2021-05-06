//function to open and close submenu on button click
function toggle_menu(button, menuID) {
    var n = document.getElementById(menuID);
    var menuclass = "dropdown";
    
    if (n.className == menuclass) {
        n.className += " open";
        button.setAttribute("aria-expanded", "true");
    } else {
        n.className = menuclass;
        button.setAttribute("aria-expanded", "false");
    }
}