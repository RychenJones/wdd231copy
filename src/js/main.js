function updateParkInformation(){
    document.getElementById("parkName").textContent = "Yellowstone";
    document.querySelector("#parkType").textContent = "National Park";
    document.querySelector("#parkStates").innerHTML = "ID, WY, MT";
    document.querySelector("#hero img").src = "/images/yellowstone.jpg";
}

updateParkInformation();