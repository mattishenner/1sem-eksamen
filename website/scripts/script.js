// Lottie animation
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-container'),
    path: 'Comp3.json',
    render: 'SVG',
    loop: true,
    autoplay: true,
    name: 'front-page-animation'
});

// Parallax mouse effect
document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".parallaxobject").forEach(function(move){
        
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

//Animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hidden2Elements = document.querySelectorAll('.hidden-slide1');
hidden2Elements.forEach((el) => observer.observe(el));

const hidden3Elements = document.querySelectorAll('.hidden-slide2');
hidden3Elements.forEach((el) => observer.observe(el));

const hidden4Elements = document.querySelectorAll('.hidden-slide3');
hidden4Elements.forEach((el) => observer.observe(el));
