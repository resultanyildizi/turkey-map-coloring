let mapImg;
let points = [];
let colors = ["RED", "GREEN", "BLUE", "YELLOW"];
let Turkeymap;

let colorable = false;

const init = async () => {
  graphColor(0);
};

function setup() {
  createCanvas(1200, 700);
  Turkeymap = getTurkeyMap();
  init();
}

function draw() {
  drawMap();
}

async function graphColor(v) {
  await new Promise((r) => setTimeout(r, 150));

  if (v === Turkeymap.length) {
    console.log(Turkeymap);
    return true;
  }

  for (let i = 0; i < colors.length; i++) {
    const clr = colors[i];

    if (isSafe(v, clr)) {
      Turkeymap[v].color = clr;

      if (await graphColor(v + 1)) {
        return true;
      }
      Turkeymap[v].color = undefined;
    }
  }
  return false;
}

function isSafe(v, clr) {
  const cityName = Turkeymap[v].name;
  const city = getCityByName(cityName);

  for (let i = 0; i < city.neighbors.length; i++) {
    const neighborName = city.neighbors[i];
    const neighbor = getCityByName(neighborName);

    if (neighbor && neighbor.color === clr) {
      return false;
    }
  }

  return true;
}

function getCityByName(name) {
  return Turkeymap.find((city) => city.name === name);
}

function drawMap() {
  Turkeymap.forEach((city) => {
    if (city.color) {
      push();
      fill(city.color);
      ellipse(city.x, city.y + 5, 10);
      pop();
    }
    textSize(10);
    textAlign(CENTER);
    text(city.name, city.x, city.y);
  });
}
