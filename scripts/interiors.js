import { getInteriors } from "./database.js";

const interiors = getInteriors();

export const interiorOptions = () => {
    let html = '<select name="choice" id="interiors">\n<option>Select an interior material</option>\n';

    const listItemsArray = interiors.map((int) => {
        return `<option value="${int.id}">${int.name}</option>`
    });
    
    html += listItemsArray.join("\n");
    html += "</select>";

    return html;
};