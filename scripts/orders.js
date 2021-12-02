import {
	getOrders,
	getWheels,
	getColors,
	getTechnologies,
	getInteriors,
	getTypes
} from "./database.js";

const buildOrderListItem = (order, colors, interiors, tech, wheels, types) => {
	const chosenColor = colors.find((col) => col.id === order.colorId);
	const chosenInt = interiors.find((int) => int.id === order.intId);
	const chosenTech = tech.find((tech) => tech.id === order.techId);
	const chosenWheel = wheels.find((wheel) => wheel.id === order.wheelId);
	const chosenType = types.find((type) => type.id === order.typeId);

	//get the total cost of the order
	const totalPriceString = (
		(chosenColor.price +
		chosenInt.price +
		chosenTech.price +
		chosenWheel.price) *
		chosenType.priceMulti
	).toLocaleString("en-US", { style: "currency", currency: "USD" });

	return `<li>
        ${chosenColor.name} ${chosenType.name} with ${chosenWheel.name} wheels, ${chosenInt.name} interior, and the ${chosenTech.name} for a total cost of ${totalPriceString}
    </li>`;
};

export const orders = () => {
	const orders = getOrders();
	//get the arrays for price stuff
	const colors = getColors();
	const interiors = getInteriors();
	const tech = getTechnologies();
	const wheels = getWheels();
	const types = getTypes();

	let html = "<ul>";

	const listItems = orders.map((order) =>
		buildOrderListItem(order, colors, interiors, tech, wheels, types)
	);

	html += listItems.join("\n");
	html += "</ul>";

	return html;
};
