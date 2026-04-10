
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});



    const skills = [
        "images/ae.png",
        "images/id.png",
        "images/ai.png",
        "images/lr.png",
        "images/ps.png",
        "images/canva.png",
        "images/figma.png"
    ];

    let index = 0;

    const mainSkill = document.getElementById("mainSkill");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    // næste
    next.addEventListener("click", () => {
        index++;
        if(index >= skills.length){
            index = 0;
        }
        mainSkill.src = skills[index];
    });

    // forrige
    prev.addEventListener("click", () => {
        index--;
        if(index < 0){
            index = skills.length - 1;
        }
        mainSkill.src = skills[index];
    });

    // klik på små icons
    function changeSkill(img){
        mainSkill.src = img.src;
    }


