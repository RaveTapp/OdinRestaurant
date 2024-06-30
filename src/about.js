export function aboutLoad() {
    let content = document.querySelector("#content");

    let div = document.createElement("div");
    div.classList.add("about");

    let headline = document.createElement("h1");
    headline.textContent = "ABOUT";
    div.appendChild(headline);

    let hr = document.createElement("hr");
    div.appendChild(hr);

    let p = document.createElement("p");
    p.textContent = "Random street 69";
    div.appendChild(p);
    let p2 = p.cloneNode();
    p2.textContent = "In the middle of nowhere";
    div.appendChild(p2);
    let p3 = p.cloneNode();
    p3.textContent = "000-1111-2222";
    div.appendChild(p3);
    let p4 = p.cloneNode();
    p4.textContent = "TheOdinEmailSendHereToSendMeEmail@notFake.com";
    div.appendChild(p4);

    content.innerHTML = "";
    content.appendChild(div);
}