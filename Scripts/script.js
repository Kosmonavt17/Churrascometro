// ============== VARIÁVEIS GLOBAIS ============
var inputDrinkAdults = document.getElementById("drinkAdults");
var inputNoDrinkAdults = document.getElementById("noDrinkAdults");
var inputKids = document.getElementById("kids");
var inputDuration = document.getElementById("duration");
var inputButton = document.getElementById("calc");
const results = document.querySelector(".results");

inputButton.addEventListener("click", function () {
  let drinkAdults = inputDrinkAdults.value;
  let noDrinkAdults = inputNoDrinkAdults.value;
  let kids = inputKids.value;
  let duration = inputDuration.value;

  if (drinkAdults && noDrinkAdults && kids && duration !== "") {
    let carne = carneBoi(drinkAdults, noDrinkAdults, kids, duration);
    let frangos = frango(drinkAdults, noDrinkAdults, kids, duration);
    let cervejas = cerveja(drinkAdults, duration);
    let bebida = bebidas(drinkAdults, noDrinkAdults, kids, duration);

    results.innerHTML = "";
    const meat = document.createElement("li");
    meat.setAttribute("class", "meat");
    const chicken = document.createElement("li");
    chicken.setAttribute("class", "chicken");
    const beer = document.createElement("li");
    beer.setAttribute("class", "beer");
    const beverage = document.createElement("li");
    beverage.setAttribute("class", "beverage");

    preset.innerHTML = "Será necessário gastar com:";
    meat.innerHTML = `<img src="./Assets/carne.svg" width="20px" class="listImg"><b>${
      carne / 1000
    }kg</b> de carne de boi`;
    chicken.innerHTML = `<img src="./Assets/frango.svg" width="20px" class="listImg"><b>${
      frangos / 1000
    }kg</b> de frango`;
    beer.innerHTML = `<img src="./Assets/cerveja.svg" width="20px" class="listImg"><b>${Math.ceil(
      cervejas / 355,
    )} latas</b> de cerveja`;
    beverage.innerHTML = `<img src="./Assets/bebidas.svg" width="20px" class="listImg"><b>${Math.ceil(
      bebida / 1000,
    )} garrafas de 1L</b> de bebidas`;

    results.append(meat);
    results.append(chicken);
    results.append(beer);
    results.append(beverage);
  } else {
    alert("Preencha todos os campos, por favor!");
  }
});

function carneBoi(drinkAdults, noDrinkAdults, kids, duration) {
  if (duration < 6) {
    return 200 * drinkAdults + 200 * noDrinkAdults + 200 * (kids / 2);
  } else {
    return 325 * drinkAdults + 325 * noDrinkAdults + 325 * (kids / 2);
  }
}

function frango(drinkAdults, noDrinkAdults, kids, duration) {
  if (duration < 6) {
    return 200 * drinkAdults + 200 * noDrinkAdults + 200 * (kids / 2);
  } else {
    return 325 * drinkAdults + 325 * noDrinkAdults + 325 * (kids / 2);
  }
}

function cerveja(drinkAdults, duration) {
  if (duration < 6) {
    return 1200 * drinkAdults;
  } else {
    return 2000 * drinkAdults;
  }
}

function bebidas(drinkAdults, noDrinkAdults, kids, duration) {
  if (duration < 6) {
    return 1000 * drinkAdults + 1000 * noDrinkAdults + 1000 * (kids / 2);
  } else {
    return 1500 * drinkAdults + 1500 * noDrinkAdults + 1500 * (kids / 2);
  }
}
