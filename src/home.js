import restaurantImage from "./images/restaurant.jpg"

export function pageLoad(){
    let content = document.querySelector("#content");
    
    const headline = document.createElement("h1");
    headline.textContent = "The ODIN, the restaurant";
    content.appendChild(headline);

    const text = document.createElement("p");
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione modi dolores voluptatum! Sapiente recusandae aperiam quae impedit accusamus, saepe, aliquam veniam consectetur quas debitis blanditiis incidunt expedita quam est."
    content.appendChild(text);

    const myRestaurantImg = new Image();
    myRestaurantImg.src = restaurantImage;
    content.appendChild(myRestaurantImg);
    
    

    console.log("Home page loaded");
}
