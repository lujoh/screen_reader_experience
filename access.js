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

//function to show an alert when the form is submitted
function form_alert(button) {
    document.getElementById('formresult').innerHTML = "Thank you for your support!";
    document.getElementById("submit").setAttribute("aria-pressed", "true");
    return false;
}

//function to make page content visible/invisible
function invisible_mode(){
    var btn = document.getElementById('invisibility_btn');
    var page = document.getElementById('visible');
    if (btn.getAttribute("aria-pressed") == "true") {
        page.className = "";
        btn.setAttribute("aria-pressed", "false");
        btn.innerHTML = "Click to explore the page in invisible mode.";
    } else {
        page.className = "invisible";
        btn.setAttribute("aria-pressed", "true");
        btn.innerHTML = "Click to return to visible mode.";
    }
}