import usedCars from "./usedCars.js";

document.getElementById("btnApplyFilters").onclick = function () {
  applyFilters();
};
document.getElementById("btnResetFilters").onclick = function () {
  resetFilters();
};

function applyFilters() {
  var id;
  const minYear = Number(document.getElementById("outMinYear").value);
  const maxYear = Number(document.getElementById("outMaxYear").value);
  const maxMileage = Number(document.getElementById("outMaxMileage").value);
  const maxPrice = Number(document.getElementById("outMaxPrice").value);
  
  usedCars.forEach((car) => {
    id = `${car.model}-${car.make}`;
    car.className = "carCard"
    console.log(`${car.model}-${car.make}:`);
    console.log(car.mileage)
    console.log(maxMileage)
    console.log(car.mileage > maxMileage)
    if (car.year < minYear) {
        car.className = "carCard filterHidden";
    }
    if (car.year > maxYear) {
        car.className = "carCard filterHidden";
    }
    if (car.mileage > maxMileage) {
        car.className = "carCard filterHidden";
    }
    if (car.price > maxPrice) {
        car.className = "carCard filterHidden";
    }
    document.getElementById(id).className = car.className;
});
}

function resetFilters() {
    var id;
    usedCars.forEach(car => {
        id = `${car.model}-${car.make}`;
        document.getElementById(id).className = "carCard";
    });
}