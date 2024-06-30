//import restaurantImage from "./images/restaurant.jpg"
import './home.css';

export function pageLoad(){
    let content = document.querySelector("#content");

    let div = document.createElement("div");
    div.classList.add("home");
    
    const headline = document.createElement("h1");
    headline.textContent = "The ODIN, The Restaurant";
    div.appendChild(headline);

    const text = document.createElement("p");
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione modi dolores voluptatum! Sapiente recusandae aperiam quae impedit accusamus, saepe, aliquam veniam consectetur quas debitis blanditiis incidunt expedita quam est."
    div.appendChild(text);

    /*const myRestaurantImg = new Image();
    myRestaurantImg.src = restaurantImage;
    content.appendChild(myRestaurantImg);*/
    content.innerHTML = "";
    content.appendChild(div);

    console.log("Home page loaded");
}
