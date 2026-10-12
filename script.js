

alert("Welcome to Jayan's Portfolio! 🎈");

function createBalloon() {
    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";
    balloon.style.position = "fixed";
    balloon.style.bottom = "-50px";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.fontSize = "35px";
    balloon.style.zIndex = "999";
    balloon.style.pointerEvents = "none";
    balloon.style.animation = "floatUp 5s linear";

    document.body.appendChild(balloon);

    setTimeout(function() {
        balloon.remove();
    }, 5000);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    to {
        transform: translateY(-110vh) rotate(25deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

setInterval(createBalloon, 700);
