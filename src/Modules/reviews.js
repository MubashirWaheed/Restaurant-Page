// import 'style.css';
// import '../src/style.css';

function reviewsContent(){
    const main = document.getElementById("main");
    
    let reviewsDiv = document.createElement("div");
    reviewsDiv.id = "reviews";
    reviewsDiv.classList.add("reviews");

    let reviewsContainerDiv = document.createElement("div");
    reviewsContainerDiv.classList.add("reviews-container");
    reviewsContainerDiv.style.display = "flex";

    let reviewsImgDiv = document.createElement("div");
    reviewsImgDiv.classList.add("review-img");

    let reviewContentDiv = document.createElement("div");
    reviewContentDiv.classList.add("review-content");

    let reviewH3 = document.createElement("h3");
    reviewH3.classList.add("review-heading");
    reviewH3.innerText = "Reviews";

    let p1 = document.createElement("p");
    p1.innerText = "Organic Farm";

    let p2 = document.createElement("p");
    p2.innerText = '"';

    let p3 = document.createElement("p");
    p3.classList.add("review-text");
    p3.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
        Asperiores consequuntur error molestias tenetu excepturi sequi.\
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.\
        Excepturi labore perspiciatis praesentium sapiente maxime aperiam!\
    Minus, repellat reiciendis? In, dolorum!" 
    
    let p4 = document.createElement("p");
    p4.innerText = "- Loo Hudson";

    reviewsDiv.appendChild(reviewsContainerDiv);
    reviewsContainerDiv.appendChild(reviewsImgDiv);
    reviewsContainerDiv.appendChild(reviewContentDiv);

    reviewContentDiv.appendChild(reviewH3);
    reviewContentDiv.appendChild(p1);
    reviewContentDiv.appendChild(p2);
    reviewContentDiv.appendChild(p3);
    reviewContentDiv.appendChild(p4);   

    main.appendChild(reviewsDiv);
}

function removeReviewContent(){
    const id = document.getElementById("reviews");
    if(id == null) return
    id.remove();
}


export {reviewsContent, removeReviewContent};
