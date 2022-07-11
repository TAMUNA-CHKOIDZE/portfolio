//slider of backgroundImages using setInterval;

let slider = document.querySelector(".slider");
let currentSlideIndex = 0;
let backgroundImages = [
    "./image/profile1.jpg",
    "./image/profile2.jpg",
    "./image/profile3.jpg",
    "./image/profile4.jpg",
    "./image/profile5.jpg"
];
setInterval(function () {
    currentSlideIndex++;
    if (currentSlideIndex > backgroundImages.length - 1) {
        currentSlideIndex = 0;
    }
    slider.style.backgroundImage = "url(" + backgroundImages[currentSlideIndex] + ")";
}, 5000);

//MoreInfo About me1
let MoreInfoAboutmeButton = document.querySelector(".MoreInfoAboutme1_button");
MoreInfoAboutmeButton.addEventListener("click", function(){
    MoreInfoAboutmeButton.style.backgroundColor = "chartreuse";
})

// Progress bar
let container = document.querySelector(".progressBox");
let bar = document.querySelectorAll(".progressBox .progress_bar");
window.addEventListener("scroll", function(){
    let containerSection = container.getBoundingClientRect().top;
    if(window.innerHeight > containerSection){
        bar.forEach((bar) => {
            let barWidth = bar.dataset.bar;
            bar.style.width = `${barWidth}%`;
        })
    }else{bar.forEach((bar) => {
        bar.style.width = "0";
    })
}
});
// დაიწყო Recommendation სექცია 

let userRecomendation = [
        {
            profession: "Web developer",
            name: "Megi Jabanashvili",
            text: "He was always accommodating, committed, and motivated. We worked on many projects together,and he is very applied and aims for high-quality work. Anyone would be lucky to have Luka as a colleague.",
            photo: "./image/Recommendation/1.jpg"
        },
        {
            profession: "Web developer",
            name: "Mariam Iashvili",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici",
            photo: "./image/Recommendation/2.jpg"
        },
        {
            profession: "Web developer",
            name: "Dato Gigolashvili",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici",
            photo: "./image/Recommendation/3.jpg"
        }
    ]
    
    let currentIndex = 0;
    createBullets();
    setActiveBullets();
    next();
    
    function next(){
        let nextSlideIndex = currentIndex + 1;
        
        if(nextSlideIndex > userRecomendation.length - 1){
            nextSlideIndex = 0;
        }
        setActiveSlide(nextSlideIndex);
    };
    
    function createBullets (){
        let RecommendationSlider = document.querySelector(".RecommendationSlider");
        let bullets = document.createElement('button');
        RecommendationSlider.appendChild(bullets);
        bullets.className = "bullets";
    
        for(let i = 0; i < userRecomendation.length; i++){
            let bullet = document.createElement('button');
            bullets.appendChild(bullet);
            bullet.className = 'bullet';
        }
        setActiveBullets();
    };
    function setActiveBullets(){
        let buttons = document.querySelectorAll('.bullets .bullet');
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('active');
            buttons[i].addEventListener('click', function(){
                setActiveSlide(i);
            });
           
        }
        buttons[currentIndex].classList.add('active');
    };
    
    function setActiveSlide(newIndex){
        currentIndex = newIndex;
        let text = document.querySelector('.text');
        text.innerHTML = userRecomendation[currentIndex].text;

        let profession = document.querySelector(".profession");
        profession.innerHTML = userRecomendation[currentIndex].profession;

        let name = document.querySelector('.name');
        name.innerHTML = userRecomendation[currentIndex].name;

        let image = document.querySelector('.profile');
        image.src = userRecomendation[currentIndex].photo;

        setActiveBullets();
    };

// დაიწყო Latest Project
    let LatestProjects = document.querySelector(".LatestProjects")
    let LatestProjectsContent = document.querySelector("LatestProject");
    let LatestProjectsSideBar = document.querySelector("LatestProjectsSideBar");
    let Content = document.querySelector(".Content");
    let ContentInner = document.querySelector(".ContentInner");
    let ContentShow = document.querySelector(".ContentShow");
    let contentHide = document.querySelector(".contentHide");

    let project1 = document.querySelector('.pr1');
    let show1 = document.getElementById("show1");
    show1.classList.add("block")
    let hide1 = document.getElementById("hide1");
    project1.addEventListener("click", function(){
        if(project1 === project1){
            hide1.classList.toggle("block");
            show1.classList.toggle("none")
        }
        
    });

    let project2 = document.querySelector('.pr2');
    let show2 = document.getElementById("show2");
    show2.classList.add("block")
    let hide2 = document.getElementById("hide2");
    project2.addEventListener("click", function(){
        if(project2 === project2){
            hide2.classList.toggle("block");
            show2.classList.toggle("none")
        }
    });

    
    let project3 = document.querySelector('.pr3');
    let show3 = document.getElementById("show3");
    show3.classList.add("block")
    let hide3 = document.getElementById("hide3");
    project3.addEventListener("click", function(){
        if(project3 === project3){
            hide3.classList.toggle("block");
            show3.classList.toggle("none")
        }
    });

    let project4 = document.querySelector('.pr4');
    let show4 = document.getElementById("show4");
    show4.classList.add("block")
    let hide4 = document.getElementById("hide4");
    project4.addEventListener("click", function(){
        if(project4 === project4){
            hide4.classList.toggle("block");
            show4.classList.toggle("none")
        }
    });

    let project5 = document.querySelector('.pr5');
    let show5 = document.getElementById("show5");
    show5.classList.add("block")
    let hide5 = document.getElementById("hide5");
    project5.addEventListener("click", function(){
        if(project5 === project5){
            hide5.classList.toggle("block");
            show5.classList.toggle("none")
        }
    });

    let project6 = document.querySelector('.pr6');
    let show6  = document.getElementById("show6");
    show6.classList.add("block")
    let hide6 = document.getElementById("hide6");
    project6.addEventListener("click", function(){
        if(project6 === project6){
            hide6.classList.toggle("block");
            show6.classList.toggle("none")
        }
    });

let submit = document.querySelector(".button")
submit.addEventListener("click", function(){
    alert("The form was submitted");
})