import {
    setColor,
    setInterior,
    setTechnology,
    setWheel,
    setType
} from "./database.js";

document.addEventListener("change", (changeEvent) => {
	const targetName = changeEvent.target.name;
	//this tells us which dropdown menu/database its from
	const targetId = changeEvent.target.id;
	//this tells us which id it has
	const targetValue = parseInt(changeEvent.target.value);
	if (targetName === "choice") {
        saveToOrderBuilder(targetId, targetValue)
	}
});

//save the target id to the builder object in database.
const saveToOrderBuilder = (targetArray, id) => {
    switch (targetArray) {
        case "colors":
            setColor(id);
            break;

        case "interiors":
            setInterior(id);
            break;

        case "technologies":
            setTechnology(id);
            break;

        case "wheels":
            setWheel(id);
            break;

        case "types":
            setType(id);
            break;

        default:
            break;
    }
};
