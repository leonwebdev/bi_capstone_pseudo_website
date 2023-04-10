month = document.getElementById("month");
city = document.getElementById("city");
img = document.getElementById("img");
button = document.getElementById("button");

function changeImage() {
    if (city.value && month.value) {
    }
    city_value = city.value ? city.value : "v";
    month_value = month.value ? month.value : "1";
    img.src = "img/" + city_value + "_" + month_value + ".png";
}

button.addEventListener("click", changeImage);
