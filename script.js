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