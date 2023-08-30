const header =
  "<li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  ulPointer.innerHTML = header;
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li class="content">${each.type}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.fuel}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.passengers}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.stops}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.isTandem}</li>`;
  });
}

function showAll() {
  return true;
}

console.table(vehicles);

const els = vehicles.filter(carElectric);

function carElectric(el) {
  if (el.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

console.log(els);

const cars = vehicles.filter(twoSeats);

function twoSeats(car) {
  if (car.passengers > 2) {
    return true;
  } else {
    return false;
  }
}

console.log(cars);

const jonass = vehicles.filter(elJonas);

function elJonas(jonas) {
  if (jonas.isElectric === true && jonas.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

console.log(jonass);

const rugbrods = vehicles.filter(rugrbrodsFuel);

function rugrbrodsFuel(rugbrod) {
  if (rugbrod.passengers > 1 && rugbrod.fuel === "Rugbrød") {
    return true;
  } else {
    return false;
  }
}

console.log(rugbrods);

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", clickedButton);
});

function clickedButton(evt) {
  let filterFunc;

  ulPointer.replaceChildren();

  if (evt.target.dataset.filter === "electric") {
    filterFunc = carElectric;
  } else if (evt.target.dataset.filter === "electric_jonas") {
    filterFunc = elJonas;
  } else if (evt.target.dataset.filter === "more_than_two") {
    filterFunc = twoSeats;
  } else if (evt.target.dataset.filter === "rugbrods") {
    filterFunc = rugrbrodsFuel;
  } else {
    filterFunc = showAll;
  }

  showTheseVehicles(vehicles.filter(filterFunc));
}
