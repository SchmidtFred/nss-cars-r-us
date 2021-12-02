import { getColors } from "./database.js";

const colors = getColors();

// all other similar functions modeled off this one
export const colorOptions = () => {
	let html =
		'<select name="choice" id="colors">\n<option>Select a paint color</option>\n';

	//add in the options as an array
	const listItemsArray = colors.map((color) => {
		return `<option class="choice" value="${color.id}">${color.name}</option>`;
	});
	//combine the array and add to html
	html += listItemsArray.join("\n");
	html += "</select>";

	return html;
};
