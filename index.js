document.getElementById("btn-submit").addEventListener("click", function () {
    const name = document.getElementById("name1").value;
    const emailTo = "winterny0802@gmail.com";
    const feedback = document.getElementById("feedback").value;
    const mailtoLink = `mailto:${emailTo}?subject=${name}&body= ${feedback}`;

    window.location.href = mailtoLink;
});

var menuLinks = document.querySelectorAll('.nav a');
console.log("🤔🤔🤔 ~ file: index.js:3 ~ menuLinks:", menuLinks)

menuLinks.forEach(function (link) {
    if (link.href === window.location.href) {
        link.classList.add('active'); 
    }
});