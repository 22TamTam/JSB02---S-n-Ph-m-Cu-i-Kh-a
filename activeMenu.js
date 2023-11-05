

var menuLinks = document.querySelectorAll('.nav a');
console.log("🤔🤔🤔 ~ file: index.js:3 ~ menuLinks:", menuLinks)

menuLinks.forEach(function (link) {
    if (link.href === window.location.href) {
        link.classList.add('active'); 
    }
});