

export function loadToppings() {
    const menu = document.getElementById("menu-page");
    const title = document.createElement("h3");
    const div = document.createElement("div");
    const list = document.createElement("ul");
    let items = ["Ketchup", "Mustard", "Relish (dill or Chow Chow)", "Onions", "Coleslaw", "Mayo", "Tartar Sauce", "Chili + $0.50", "Cheese + $0.50"];

    menu.appendChild(div);
    div.classList.add("tops-card")

    div.appendChild(title);
    title.classList.add("tops-heading");
    title.textContent = "Toppings";

    div.appendChild(list);
    list.classList.add("tops-ul");

    items.forEach(item =>{
        const lineItem = document.createElement("li");
        lineItem.classList.add("tops-li");
        list.appendChild(lineItem);
        lineItem.textContent = item;
    })

    return div;
}