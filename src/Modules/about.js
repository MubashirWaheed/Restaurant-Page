// import 'style.css'
// import '../src/style.css';

function aboutContent(){
    const main = document.getElementById("main");
    
    let section = document.createElement("section");
    section.id = "about";
    section.classList.add("about");
    section.style.display = "flex";

    let aboutContentDiv = document.createElement("div");
    aboutContentDiv.classList.add("about-content");

    let aboutContainerDiv = document.createElement("div");
    aboutContainerDiv.classList.add("about-container");

    let h3 = document.createElement("h3");
    h3.classList.add("about-h3");
    h3.innerText = "About us ";

    let p = document.createElement("p");
    p.classList.add("ptag");
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
     Tempora quidem labore quas placeat.\
    Earum animi dolorum quas facere, consequuntur sint?"
    
    let aboutImg = document.createElement("div")
    aboutImg.classList.add("about-img");

    section.appendChild(aboutContentDiv);
    section.appendChild(aboutImg);
    aboutContentDiv.appendChild(aboutContainerDiv);
    aboutContainerDiv.appendChild(h3);
    aboutContainerDiv.appendChild(p);

    main.appendChild(section);
}

function removeAboutContent(){
    const id = document.getElementById("about");
    if(id == null) return;
    id.remove();
    
}
export {aboutContent, removeAboutContent}