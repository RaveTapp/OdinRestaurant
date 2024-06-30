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

    content.innerHTML = "";
    content.appendChild(div);
}
