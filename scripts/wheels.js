import { getWheels } from "./database.js"

const wheels = getWheels();

// all other similar functions modeled off this one
export const wheelOptions = () => {
    let html = '<select name="choice" id="wheels">';

    //add in the options as an array
    const listItemsArray = wheels.map((wheel) => {
            return `<option value="${wheel.id}">${wheel.name}</option>`;
    });
    //combine the array and add to html
    html += listItemsArray.join("\n");
    html += '</select>';

    return html;
}