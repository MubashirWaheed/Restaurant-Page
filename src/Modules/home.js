function homeContent(){
    const main = document.getElementById("main");
    let div = document.createElement("div");
    div.id = "intro-content";
    div.classList.add("intro-content");
    div.style.display = "grid";

    let h1 = document.createElement("h1");
    let location = document.createElement("p");
    let tel = document.createElement("p");

    h1.innerText = "Dine with us";
    location.innerText = "143TH Avenue. London";
    tel.innerText = "TEL: 1 (234) 5555";
    
    div.appendChild(h1);
    div.appendChild(location);
    div.appendChild(tel);
    main.appendChild(div);
}

function removeIntroContent(){
    const id = document.getElementById("intro-content");
    if(id == null) return;
    id.remove()
}


export {homeContent, removeIntroContent};