export function loadHours() {
    const content = document.getElementById("content");
    const container = document.createElement("div");
    const addressDiv = document.createElement("div");
    const hoursDiv = document.createElement("div");
    const addressHeading = document.createElement("h3");
    const hoursHeading = document.createElement("h3");
    const addressContent = document.createElement("p");
    const hoursContent = document.createElement("p");

    // add classes
    container.classList.add("hnl-container");
    addressDiv.classList.add("add-container");
    hoursDiv.classList.add("hours-container");
    addressHeading.classList.add("add-h3");
    hoursHeading.classList.add("hours-h3");
    addressContent.classList.add("add-text");
    hoursContent.classList.add("hours-text");


    // append children
    content.appendChild(container);
    container.appendChild(addressDiv);
    container.appendChild(hoursDiv);
    addressDiv.appendChild(addressHeading);
    addressDiv.appendChild(addressContent);
    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(hoursContent);

    // adding content to elements
    addressHeading.textContent = "ADDRESS";
    addressContent.textContent = "123 Bun Street\nBeaufort, NC\n28516";

    hoursHeading.textContent = "OPENING HOURS";
    hoursContent.textContent = "M - F     11AM - 7PM \n SAT     10AM - 7PM \n SUN     Closed";

    return container;

}