import usedCars from "./usedCars.js";

document.getElementById("btnApplyFilters").onclick = function () {
  applyFilters();
};
document.getElementById("btnResetFilters").onclick = function () {
  resetFilters();
};

function applyFilters() {
  // Flexible variables
  var id;

  // Constants for each range tag
  const minYear = Number(document.getElementById("min-year").value);
  const maxYear = Number(document.getElementById("max-year").value);
  const maxMileage = Number(document.getElementById("max-mileage").value);
  const maxPrice = Number(document.getElementById("max-price").value);

  // Toggle Constants for each make of car
  const toggleBMW = document.getElementById("toggleBMW").checked;
  const toggleCadillac = document.getElementById("toggleCadillac").checked;
  const toggleChevrolet = document.getElementById("toggleChevrolet").checked;
  const toggleDodge = document.getElementById("toggleDodge").checked;
  const toggleFord = document.getElementById("toggleFord").checked;
  const toggleHonda = document.getElementById("toggleHonda").checked;
  const toggleHyundai = document.getElementById("toggleHyundai").checked;
  const toggleJaguar = document.getElementById("toggleJaguar").checked;
  const toggleKia = document.getElementById("toggleKia").checked;
  const toggleLexus = document.getElementById("toggleLexus").checked;
  const toggleMazda = document.getElementById("toggleMazda").checked;
  const toggleNissan = document.getElementById("toggleNissan").checked;
  const togglePorsche = document.getElementById("togglePorsche").checked;
  const toggleSubaru = document.getElementById("toggleSubaru").checked;
  const toggleTesla = document.getElementById("toggleTesla").checked;
  const toggleToyota = document.getElementById("toggleToyota").checked;
  const toggleVolkswagen = document.getElementById("toggleVolkswagen").checked;
  
  // Toggle constants for each color of car
  const toggleBlack = document.getElementById("toggleBlack").checked;
  const toggleGray = document.getElementById("toggleGray").checked;
  const toggleSilver = document.getElementById("toggleSilver").checked;
  const toggleWhite = document.getElementById("toggleWhite").checked;
  const toggleRed = document.getElementById("toggleRed").checked;
  const toggleGreen = document.getElementById("toggleGreen").checked;
  const toggleBlue = document.getElementById("toggleBlue").checked;

  usedCars.forEach((car) => {
    id = `${car.model}-${car.make}`;
    car.className = "carCard";

    // Normal Numeric Range Filters
    if (car.year < minYear) {
      car.className = "carCard filterHidden";
    }
    if (car.year > maxYear) {
      car.className = "carCard filterHidden";
    }
    if (car.mileage.replace(",", "") > maxMileage) {
      car.className = "carCard filterHidden";
    }
    if (car.price.replace(",", "") > maxPrice) {
      car.className = "carCard filterHidden";
    }

    // Make Filters
    if (car.make == "BMW" && toggleBMW == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Cadillac" && toggleCadillac == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Chevrolet" && toggleChevrolet == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Dodge" && toggleDodge == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Ford" && toggleFord == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Honda" && toggleHonda == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Hyundai" && toggleHyundai == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Jaguar" && toggleJaguar == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Kia" && toggleKia == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Lexus" && toggleLexus == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Mazda" && toggleMazda == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Nissan" && toggleNissan == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Porsche" && togglePorsche == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Subaru" && toggleSubaru == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Tesla" && toggleTesla == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Toyota" && toggleToyota == false) {
      car.className = "carCard filterHidden";
    }
    if (car.make == "Volkswagen" && toggleVolkswagen == false) {
      car.className = "carCard filterHidden";
    }

    // Color Filters
    if (car.color == "Black" && toggleBlack == false) {
      car.className = "carCard filterHidden";
    }
    if (car.color == "Gray" && toggleGray == false) {
      car.className = "carCard filterHidden";
    }
    if (car.color == "Silver" && toggleSilver == false) {
      car.className = "carCard filterHidden";
    }
    if (car.color == "White" && toggleWhite == false) {
      car.className = "carCard filterHidden";
    }
    if (car.color == "Red" && toggleRed == false) {
      car.className = "carCard filterHidden";
    }
    if (car.color == "Green" && toggleGreen == false) {
      car.className = "carCard filterHidden";
    }
    if (car.color == "Blue" && toggleBlue == false) {
      car.className = "carCard filterHidden";
    }
    document.getElementById(id).className = car.className;
  });

  // Number of hidden elements
  var hiddenCards = document.getElementsByClassName("filterHidden").length
  
  if (hiddenCards == 17) {
    document.getElementById("noCardsMessage").className = ""
  } else {
    document.getElementById("noCardsMessage").className = "filterMessageHidden"
  }
}

function resetFilters() {
  var id;
  usedCars.forEach((car) => {
    id = `${car.model}-${car.make}`;
    document.getElementById(id).className = "carCard";
  });

  // Reset range sliders and their output tags
  document.getElementById("noCardsMessage").className = "filterMessageHidden"
  document.getElementById("min-year").value = '2014'
  document.getElementById("outMinYear").value = '2014'
  document.getElementById("max-year").value = '2020'
  document.getElementById("outMaxYear").value = '2020'
  document.getElementById("max-mileage").value = '100000'
  document.getElementById("outMaxMileage").value = '100000'
  document.getElementById("max-price").value = '70000'
  document.getElementById("outMaxPrice").value = '70000'
  
  // Reset make checkmarks
  document.getElementById("toggleBMW").checked = true
  document.getElementById("toggleCadillac").checked = true
  document.getElementById("toggleChevrolet").checked = true
  document.getElementById("toggleDodge").checked = true
  document.getElementById("toggleFord").checked = true
  document.getElementById("toggleHonda").checked = true
  document.getElementById("toggleHyundai").checked = true
  document.getElementById("toggleJaguar").checked = true
  document.getElementById("toggleKia").checked = true
  document.getElementById("toggleLexus").checked = true
  document.getElementById("toggleMazda").checked = true
  document.getElementById("toggleNissan").checked = true
  document.getElementById("togglePorsche").checked = true
  document.getElementById("toggleSubaru").checked = true
  document.getElementById("toggleTesla").checked = true
  document.getElementById("toggleToyota").checked = true
  document.getElementById("toggleVolkswagen").checked = true
  
  // Reset color checkmarks
  document.getElementById("toggleBlack").checked = true
  document.getElementById("toggleGray").checked = true
  document.getElementById("toggleSilver").checked = true
  document.getElementById("toggleWhite").checked = true
  document.getElementById("toggleRed").checked = true
  document.getElementById("toggleGreen").checked = true
  document.getElementById("toggleBlue").checked = true
}
