import { CarsRUs } from "./CarsRUs.js";
import "./changeEventListener.js";

const mainContainer = document.querySelector("#container");

const render = () => {
    mainContainer.innerHTML = CarsRUs();
}

render();