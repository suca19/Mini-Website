// main.js: shared JavaScript for every ElectroCocha page.
// It is loaded in the <head>, so the "js" class is added before the page is drawn.

// Tell the CSS that JavaScript is running, so the phone menu can start closed.
// Without JavaScript the class is never added and every link stays visible.
document.documentElement.classList.add("js");

// Phone menu: the Menu button opens and closes the list of links
function setUpMenu() {
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.getElementById("nav-links");

  // Stop here if this page has no menu
  if (!menuButton || !navLinks) {
    return;
  }

  menuButton.addEventListener("click", function () {
    // toggle() adds the class if it is missing, removes it if it is there,
    // and returns true when the menu is now open
    const isOpen = navLinks.classList.toggle("open");

    // aria-expanded tells screen readers whether the menu is open
    menuButton.setAttribute("aria-expanded", isOpen);
  });
}

// Wait until the HTML has loaded, because the button is further down the page
document.addEventListener("DOMContentLoaded", setUpMenu);
