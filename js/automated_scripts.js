import usedCars from "./usedCars.js";

function createCarCards() {
    const carContainer = document.getElementById("carGrid");

    usedCars.forEach(car => {
        car.price = car.price.toLocaleString();
        car.mileage = car.mileage.toLocaleString();
        const card = document.createElement("div")
        card.className = "carCard"
        card.id = `${car.model}-${car.make}`;
        card.innerHTML = `
            <img src="../img/${car.model},${car.make}.webp" alt="${car.make} ${car.model} Image">
            <hr>
            <h2>${car.make} ${car.model}</h2>

            <p>Price: \$${car.price}</p>
            <hr>
            <p>Year: ${car.year}</p>
            <p>Color: ${car.color}</p>
            <p>Mileage: ${car.mileage}</p>
            <p>Gas Milage: ${car.gasMileage}</p>
        `;
        carContainer.appendChild(card);
    });
}

createCarCards();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
