export function loadHours() {
    const content = document.getElementById("content");
    const container = document.createElement("div");
    const contactDiv = document.createElement("div");
    const addressDiv = document.createElement("div");
    const hoursDiv = document.createElement("div");
    const contactHeading = document.createElement("h3");
    const addressHeading = document.createElement("h3");
    const hoursHeading = document.createElement("h3");
    const addressContent = document.createElement("p");
    const hoursContent = document.createElement("p");
    const contactInfo = document.createElement("p");

    // add classes
    container.classList.add("hnl-cont");
    contactDiv.classList.add("contact-cont");
    addressDiv.classList.add("add-cont");
    hoursDiv.classList.add("hours-cont");
    contactHeading.classList.add("contact-h3");
    addressHeading.classList.add("address-h3");
    hoursHeading.classList.add("hours-h3");
    contactInfo.classList.add("contact-text");
    addressContent.classList.add("add-text");
    hoursContent.classList.add("hours-text");


    // append children
    content.appendChild(container);
    container.appendChild(contactDiv);
    container.appendChild(addressDiv);
    container.appendChild(hoursDiv);
    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(contactInfo);
    addressDiv.appendChild(addressHeading);
    addressDiv.appendChild(addressContent);
    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(hoursContent);

    // adding content to elements
    contactHeading.textContent = "CONTACT US";
    contactInfo.textContent = "252-555-555 \n admin@reelgooddogs.com";

    addressHeading.textContent = "ADDRESS";
    addressContent.textContent = "123 Bun Street\nBeaufort, NC\n28516";

    hoursHeading.textContent = "OPENING HOURS";
    hoursContent.textContent = "M - F     11AM - 7PM \n SAT     10AM - 7PM \n SUN     Closed";

    return container;

}