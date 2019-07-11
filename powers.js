let flight = document.querySelector("#flight")
let mindReading = document.querySelector("#mindreading")
let xray = document.querySelector("#xray")
let powers = document.querySelectorAll(".power")

// function flightHandlerFunction () {
//     flight.classList.replace("disabled", "enabled")
// }
// function mindreadingHandlerFunction () {
//     mindReading.classList.replace("disabled", "enabled")
// }
// function xrayHandlerFunction () {
//     xray.classList.replace("disabled", "enabled")
// }

// Refactored to single function

function powersHandlerFunction () {
    let power = event.target.id.split("-")[1]
    if (power === "flight") {
        flight.classList.replace("disabled", "enabled")
    }
    else if (power === "mindreading") {
        mindReading.classList.replace("disabled", "enabled")
    }
    else if (power === "xray") {
        xray.classList.replace("disabled", "enabled")
    }
}

function activateHandlerFunction () {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.replace("disabled", "enabled")
    }
}
function deactivateHandlerFunction () {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.replace("enabled", "disabled")
    }
}

document.querySelector("body").addEventListener("click", function (event) {
    if (event.target.id.split("-")[1] === "flight" || event.target.id.split("-")[1] === "mindreading" || event.target.id.split("-")[1] === "xray") {
        powersHandlerFunction()
    }
    else if (event.target.id === "activate-all") {
        activateHandlerFunction()
    }
    else if (event.target.id === "deactivate-all") {
        deactivateHandlerFunction()
    }
} )
// document.querySelector("#activate-mindreading").addEventListener("click", powersHandlerFunction)
// document.querySelector("#activate-xray").addEventListener("click", powersHandlerFunction)

// document.querySelector("#activate-all").addEventListener("click", activateHandlerFunction)
// document.querySelector("#deactivate-all").addEventListener("click", deactivateHandlerFunction)