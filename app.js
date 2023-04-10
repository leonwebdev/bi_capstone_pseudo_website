let month = document.getElementById("month");
let city = document.getElementById("city");
// img = document.getElementById("img");
let img = "";
let img_box = document.getElementById("img_box");
let button = document.getElementById("button");

function changeImage() {
    if (!city.value || !month.value) {
        img_box.innerHTML = `
        <h3 class="text-center pt-5">Please select month and city.</h3>
        `;
    } else {
        city_value = city.value ? city.value : "v";
        month_value = month.value ? month.value : "1";
        img = "img/" + city_value + "_" + month_value + ".png";
        img_box.innerHTML = `
        <img src="${img}" class="img-fluid" />
        `;
    }
}

button.addEventListener("click", changeImage);
city.addEventListener("change", changeImage);
month.addEventListener("change", changeImage);
