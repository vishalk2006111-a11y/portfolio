// Typing Loop
const text = "Building futuristic web experiences...";
let i = 0;

function typeLoop() {
    const el = document.querySelector(".typing");

    if (i < text.length) {
        el.innerHTML += text[i];
        i++;
        setTimeout(typeLoop, 50);
    } else {
        setTimeout(() => {
            el.innerHTML = "";
            i = 0;
            typeLoop();
        }, 1500);
    }
}
typeLoop();


// Custom Cursor
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


// Scroll Animation
const faders = document.querySelectorAll(".fade");

function reveal() {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();


// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00f7ff" },
    size: { value: 3 }
  }
});