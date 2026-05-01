function updateParkInformation(){
    document.getElementById("parkName").textContent = "Yellowstone";
    document.querySelector("#parkType").textContent = "National Park";
    document.querySelector("#parkStates").innerHTML = "ID, WY, MT";
    document.querySelector("#hero img").src = "/images/yellowstone.jpg";
}

updateParkInformation();



function addEventListeners() {
  const menuTrigger = document.querySelector("#header-menu-trigger");
  const menuOptions = document.querySelector("#header-menu-options");
  const overview = document.querySelector("#overview");

  // MENU toggle
  if (menuTrigger && menuOptions) { // Don't add these listeners if the elements don't exist
    menuTrigger.addEventListener("click", () => {
      menuOptions.classList.toggle("is-hidden");
    });

    // Event delegation (single listener)
    menuOptions.addEventListener("click", (event) => {
      const itemName = event.target.textContent;
      console.log(itemName);
    });
  }

  // Overlay hover color toggle
  if (overview) { // Don't add these listeners if the element doesn't exist
    overview.addEventListener("mouseenter", () => {
      overview.classList.add("overlay-hover");
    });

    overview.addEventListener("mouseleave", () => {
      overview.classList.remove("overlay-hover");
    });
  }
}

addEventListeners();