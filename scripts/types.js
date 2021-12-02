import { getTypes } from "./database.js";

const types = getTypes();

export const typeOptions = () => {
    let html = '<select name="choice" id="types">\n<option>Select a vehicle type</option>\n';

    const listItemsArray = types.map(type => {
        return `<option class="choice" value="${type.id}">${type.name}</option>`;
    });

    html += listItemsArray.join("\n");
    html += "</select>";

    return html;
}