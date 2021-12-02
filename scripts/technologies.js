import { getTechnologies } from "./database.js"

const techs = getTechnologies();

// all other similar functions modeled off this one
export const techOptions = () => {
    let html = '<select name="choice" id="technologies">\n<option>Select a package</option>\n';

    //add in the options as an array
    const listItemsArray = techs.map((tech) => {
            return `<option value="${tech.id}">${tech.name}</option>`;
    });
    //combine the array and add to html
    html += listItemsArray.join("\n");
    html += '</select>';

    return html;
}