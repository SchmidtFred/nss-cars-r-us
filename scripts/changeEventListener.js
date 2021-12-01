import {
	getColors,
	getInteriors,
	getOrders,
	getTechnologies,
	getWheels
} from "./database.js";

document.addEventListener("change", (changeEvent) => {
	const targetClass = changeEvent.target.name;
	//this tells us which dropdown menu/database its from
	const targetId = changeEvent.target.id;
	//this tells us which id it has
	const targetValue = parseInt(changeEvent.target.value);
	if (targetClass === "choice") {
		switch (targetId) {
			case "colors":
				const colors = getColors();
				windowAlertForNow(colors, targetValue);
				break;

			case "interiors":
				const interiors = getInteriors();
				windowAlertForNow(interiors, targetValue);
				break;

			case "technologies":
				const techs = getTechnologies();
				windowAlertForNow(techs, targetValue);
				break;

			case "wheels":
				const wheels = getWheels();
				windowAlertForNow(wheels, targetValue);
				break;

            default:
                break;
		}
	}
});

//used to do whatever I'm supposed to do with the target
const windowAlertForNow = (databaseArray, idToFind) => {
	const targetObject = databaseArray.find((item) => item.id === idToFind);
	window.alert(`You chose ${targetObject.name}`);
};
