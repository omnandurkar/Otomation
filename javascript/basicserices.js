



const model = sessionStorage.getItem('model')
const brand = sessionStorage.getItem('brand') 

if (model && brand) {
    document.getElementById('selectedcarImage').src= `../image/Cars-img/${brand}/${model}.jpg`;
    document.getElementById('VechicleName').innerText= `${brand} ${model}`;
    document.getElementById('VechicleName').style.textTransform="capitalize";
}else{
    document.getElementById('selectedcarImage').src= `../image/Cars-img/noCar.png`;

}

 