// Menu navigasi sederhana

const menu = document.querySelectorAll("nav a");

menu.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Menu dibuka: " + link.textContent);

    });

});
