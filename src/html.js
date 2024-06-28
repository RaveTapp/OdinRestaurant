import restaurantImage from "./images/restaurant.jpg"

export function pageLoad(){
    let content = document.querySelector("#content");
    
    const myRestaurantImg = new Image();
    myRestaurantImg.src = restaurantImage;

    content.appendChild(myRestaurantImg);
    

    console.log("AAA, page loaded");
}
