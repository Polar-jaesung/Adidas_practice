const card = document.querySelector(".card");
const container = document.querySelector(".container");

// 추가 
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// 전체 카드 애니메이션
container.addEventListener('mousemove',(e)=>{

    let xAxis = (window.innerWidth / 2 - e.pageX) /10 ;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10 ;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});   



// 애니메이션 IN
container.addEventListener("mouseenter",(e) => {
    card.style.transition ="none";
    
    // POP OUT
    title.style.transform="translateZ(100px)";
    sneaker.style.transform="translateZ(150px) rotate(-45deg)";
    purchase.style.transform="translateZ(80px)";
    description.style.transform="translateZ(50px)";
    sizes.style.transform="translateZ(70px)";


   
    
})

// 애니메이션 OUT
container.addEventListener("mouseleave",(e) => {
    card.style.transition ="all 0.5s ease";
    card.style.transform= "translateX(0px) translateY(0px)";

    // POP BACK
    title.style.transform="translateZ(0px)";
    sneaker.style.transform="translateZ(0px) rotate(0deg)";
    purchase.style.transform="translateZ(0px)";
    description.style.transform="translateZ(0px)";
    sizes.style.transform="translateZ(0px)";


 
  
});