import { wheelOptions } from "./wheels.js";
import { colorOptions } from "./colors.js";
import { interiorOptions } from "./interiors.js";
import { techOptions } from "./technologies.js";

export const CarsRUs = () => {
    return `
    <h1>Cars R Us</h1>
    
    <article class ="choices">
        <section class="choicesColors options">
            <h2>Colors</h2>
            ${colorOptions()}
        </section>
        <section class="choicesInt options">
            <h2>Interiors</h2>
            ${interiorOptions()}
        </section>
        <section class="choicesTech options">
            <h2>Technology</h2>
            ${techOptions()}
        </section>
        <section class="choicesWheels options">
            <h2>Wheels</h2>
            ${wheelOptions()}
        </section>
    </article>
    `;
}