let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


 

let brand = ""
 
function bandChange() {
    // Get the selected brand
    var selectedBrand = document.getElementById("cars").value;

  
    // Get the cars-model dropdown
    var carsModelDropdown = document.getElementById("cars-model");
    var carImage = document.getElementById("carImg");

    // Clear existing options
    carsModelDropdown.innerHTML = '<option class="ptr" value="">-- Your Model</option>';

    // Populate cars based on the selected brand
    brand = selectedBrand
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
    option.value = optionText.toLowerCase().replace(/\s+/g, '-');
    option.text = optionText;
    selectElement.add(option);
}


function changeCar() {

    var model = document.getElementById("cars-model");
    
    var carImage = document.getElementById("carImg");
    console.log(  `./image/Cars-img/${brand}/${model.value}.jpg`);
    // Set the image source based on the brand and model.value
    sessionStorage.setItem("brand",brand)
    sessionStorage.setItem("model",model.value)
    document.getElementById("bookServiceBtn").style.opacity="1";

    carImage.src = `./image/Cars-img/${brand}/${model.value}.jpg`;
}