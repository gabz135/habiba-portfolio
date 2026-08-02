
const timeline = document.querySelector(".timeline");
const items = document.querySelectorAll(".timeline-item");

function updateTimeline(){

    const rect = timeline.getBoundingClientRect();

    const start = window.innerHeight * 0.2;
    const end = rect.height + window.innerHeight * 0;

    let progress = (start - rect.top) / end;

    progress = Math.max(0, Math.min(progress,1));

    timeline.style.setProperty("--progress", `${progress * 100}%`);

    items.forEach(item=>{

        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight * 0.55){

            item.classList.add("active");

        }else{

            item.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", updateTimeline);
window.addEventListener("load", updateTimeline);