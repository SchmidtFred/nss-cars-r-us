import { wheelOptions } from "./wheels.js";
import { colorOptions } from "./colors.js";
import { interiorOptions } from "./interiors.js";
import { techOptions } from "./technologies.js";
import { typeOptions } from "./types.js";
import { orders } from "./orders.js";
import { addOrder } from "./database.js";

document.addEventListener("click", (event) => {
    if (event.target.id ==="orderButton") {
        addOrder();
    };
});

export const CarsRUs = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    
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
        <section class="choicesTypes options">
            <h2>Body</h2>
            ${typeOptions()}
        </section>
    </article>

    <article>
        <button id="orderButton">Place Car Order</ button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${orders()}
    </article>
    `;
}