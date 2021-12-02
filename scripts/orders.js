import {
	getOrders,
	getWheels,
	getColors,
	getTechnologies,
	getInteriors
} from "./database.js";

const buildOrderListItem = (order, colors, interiors, tech, wheels) => {
	const chosenColor = colors.find((col) => col.id === order.colorId);
	const chosenInt = interiors.find((int) => int.id === order.intId);
	const chosenTech = tech.find((tech) => tech.id === order.techId);
	const chosenWheel = wheels.find((wheel) => wheel.id === order.wheelId);

	//get the total cost of the order
	const totalPriceString = (
		chosenColor.price +
		chosenInt.price +
		chosenTech.price +
		chosenWheel.price
	).toLocaleString("en-US", { style: "currency", currency: "USD" });

	return `<li>
        Order #${order.id} will cost ${totalPriceString}
    </li>`;
};

export const orders = () => {
	const orders = getOrders();
	//get the arrays for price stuff
	const colors = getColors();
	const interiors = getInteriors();
	const tech = getTechnologies();
	const wheels = getWheels();

	let html = "<ul>";

	const listItems = orders.map((order) =>
		buildOrderListItem(order, colors, interiors, tech, wheels)
	);

	html += listItems.join("\n");
	html += "</ul>";

	return html;
};
