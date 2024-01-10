function aa() {
  if (model && brand2) {
    document.getElementById("selectCar").style.display = `none`;
    document.getElementById(
      "selectedcarImage"
    ).src = `../image/Cars-img/${brand2}/${model}.jpg`;
    document.getElementById("VechicleName").innerText = `${brand2} ${model}`;
    document.getElementById("VechicleName").style.textTransform = "capitalize";
  } else {
    document.getElementById(
      "selectedcarImage"
    ).src = `../image/Cars-img/noCar.png`;
  }
  
}
const model = sessionStorage.getItem("model");
const brand2 = sessionStorage.getItem("brand");
aa()

let brand = "";

function bandChange() {
  // Get the selected brand
  var selectedBrand = document.getElementById("cars").value;

  // Get the cars-model dropdown
  var carsModelDropdown = document.getElementById("cars-model");
  var carImage = document.getElementById("carImg");

  // Clear existing options
  carsModelDropdown.innerHTML =
    '<option class="ptr" value="">-- Your Model</option>';

  // Populate cars based on the selected brand
  brand = selectedBrand;
  if (selectedBrand === "mercedes") {
    addOption(carsModelDropdown, "GLA 200");
    addOption(carsModelDropdown, "GLC 220d");
    addOption(carsModelDropdown, "GLS 450");
    addOption(carsModelDropdown, "GLE 350");
  } else if (selectedBrand === "ford") {
    addOption(carsModelDropdown, "Ecosport");
    addOption(carsModelDropdown, "Endeavour");
    addOption(carsModelDropdown, "Fiesta");
    addOption(carsModelDropdown, "Figo");
  } else if (selectedBrand === "honda") {
    addOption(carsModelDropdown, "Amaze");
    addOption(carsModelDropdown, "Brio");
    addOption(carsModelDropdown, "City");
    addOption(carsModelDropdown, "Civic");
  }

  // Update the image source based on the selected brand and model
}

function addOption(selectElement, optionText) {
  var option = document.createElement("option");
  option.value = optionText.toLowerCase().replace(/\s+/g, "-");
  option.text = optionText;
  selectElement.add(option);
}

function changeCar() {
  var model = document.getElementById("cars-model");

  var carImage = document.getElementById("selectedcarImage");
  console.log(`./image/Cars-img/${brand}/${model.value}.jpg`);
  // Set the image source based on the brand and model.value
  sessionStorage.setItem("brand", brand);
  sessionStorage.setItem("model", model.value);
  document.getElementById("bookServiceBtn").style.opacity = "1";

  carImage.src = `./image/Cars-img/${brand}/${model.value}.jpg`;
  aa()
}

let SelectedCard = null;

function selectCart(cardId) {
  SelectedCard = cardId;

  document.getElementById("billCart").style.display = "block";

  // Remove the 'selected' class from all cards
  document.querySelectorAll(".container-content").forEach((card) => {
    card.classList.remove("selected");
  });

  // Add the 'selected' class to the clicked card
  const selectedCard = document.getElementById(cardId);
  selectedCard.classList.add("selected");

  if (SelectedCard && model && brand2) {
    document.getElementById("checkOutBTN").style.opacity = "1";
  }
}

 