
/* Changes the temperature of the room depending on the request of the user.
Temperature text becomes red if it is too hot and blue if it is too cold.*/
function changeTemp(feature, id) {
    let value = document.getElementById(id);
    var newValue = parseFloat(value.innerText);

    if (feature == "tempInc") { // Detect user's intention
        newValue++;
    } else if (feature == "tempDec") {
        newValue--;
    }

    value.style.color = "black";
    if (newValue >= 35) {
        value.style.color = "red";
    } else if (newValue <= 15) {
        value.style.color = "blue";
    }

    value.innerText = newValue + "°C";
}

// Changes the status of boolean variables(on/off)
function changeStatus(button, id) {
    let roomImage = document.getElementById(id);
    if (button.innerText == "Turn On") { // Light was on and it is now off
        roomImage.src = "images/light_room.png";
        button.innerText = "Turn Off";
    } else if (button.innerText == "Turn Off") { // Light was off and it is now on
        roomImage.src = "images/dark_room.png";
        button.innerText = "Turn On";
    } else if (button.innerText == "Open Curtain") { // Curtain was closed and now it is open
        roomImage.style.backgroundColor = "rgba(0, 0, 0, 0.322)";
        button.innerText = "Close Curtain";
    } else { // Curtain was open and now it is closed
        button.innerText = "Open Curtain";
        roomImage.style.opacity = 0.8;
        roomImage.style.backgroundColor = "black";
    }
}