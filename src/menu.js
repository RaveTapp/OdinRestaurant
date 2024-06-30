export function menuLoad() {
    let content = document.querySelector("#content");

    let div = document.createElement("div");
    div.classList.add("menu");

    let headline = document.createElement("h1");
    headline.textContent = "MENU";
    div.appendChild(headline);

    let hr = document.createElement("hr");
    div.appendChild(hr);

    let p = document.createElement("p");
    p.textContent = "Coming soon ...";
    div.appendChild(p);

    
    content.innerHTML = "";
    content.appendChild(div);
}