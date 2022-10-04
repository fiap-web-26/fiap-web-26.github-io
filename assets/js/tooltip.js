const tooltip = document.querySelector('#tooltip');
const body = document.querySelector('body');
const header =document.querySelector('.top-site');

//alvo.addEventLisneter('evento', função);
//mouseover, função arrow no body.

body.addEventListener("mouseover", (e) =>{
body.style.background = "gray";
});

body.addEventListener("mouseout", (e) =>{
    body.style.background = "unset";
});



tooltip.addEventListener("mouseover",(e) => {
   console.log("altura da página" , body.clientHeight);
   console.log("largura da pagina" , body.clientWidth);
   console.log ("altura do tooltip", body.clientHeight);
   console.log ("largura do tooltip", body.clientWidth);
   console.log ("altura do mouse", body.clientHeight);
   console.log ("largura do mouse", body.clientWidth);

    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = 
        "Minions ipsum bee do bee do bee do ut aliqua labore laboris nisi hana dul sae jiji. Butt occaecat irure jeje velit quis aute ullamco pepete daa occaecat. Belloo!" 

        newDiv.style.position = "absolute";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.left = 
        (e.clientX + 200 > body.clientWidth ? e.clientX - 210 : e.clientX  + 200) + "px";


    newDiv.style.display = "flex";
    header.appendChild(newDiv);
})

tooltip.addEventListener("mouseout", (e) => {
    if (document.querySelector(".tooptip")){
        document.querySelector(".tooltip").remove();
    }
})

//tooltip("#tooltip", "texto do tooltip");
