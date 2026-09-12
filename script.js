const timeline = document.querySelector(".timeline");
const items = document.querySelectorAll(".timeline-item");


function updateTimeline(){

    const rect = timeline.getBoundingClientRect();

    const windowHeight = window.innerHeight;


    let progress =
        (windowHeight - rect.top) /
        rect.height*0.6;


    progress = Math.max(0, Math.min(1, progress));


    timeline.style.setProperty(
        "--progress",
        `${progress * 100}%`
    );


    items.forEach(item => {

        const itemTop =
            item.getBoundingClientRect().top;


        if(itemTop < windowHeight * 0.5){

            item.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateTimeline
);


window.addEventListener(
    "load",
    updateTimeline
);

const slides = document.querySelectorAll(".recent-slide");
const previousButton = document.querySelector(".slider-button.prev");
const nextButton = document.querySelector(".slider-button.next");
const dots = document.querySelectorAll(".slider-dot");
const slideCounter = document.querySelector(".slide-counter");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    slideCounter.textContent = `${index + 1} / ${slides.length}`;

    currentSlide = index;
}

nextButton.addEventListener("click", () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
});

previousButton.addEventListener("click", () => {
    const previousSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    showSlide(previousSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

/* Allow left/right arrow keys to control the slider */
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }

    if (event.key === "ArrowLeft") {
        const previousSlide =
            (currentSlide - 1 + slides.length) % slides.length;

        showSlide(previousSlide);
    }
});