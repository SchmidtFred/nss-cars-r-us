const database = {
	orderBuilder: [],

	colors: [
		{
			id: 1,
			name: "Silver",
			price: 3
		},

		{
			id: 2,
			name: "Midnight Blue",
			price: 1700
		},

		{
			id: 3,
			name: "Firebrick Red",
			price: 80
		},

		{
			id: 4,
			name: "Spring Green",
			price: 0.01
		}
	],

	interiors: [
		{
			id: 1,
			name: "Beige Fabric",
			price: 15000
		},
		{
			id: 2,
			name: "Charcoal Fabric",
			price: 8
		},
		{
			id: 3,
			name: "White Leather",
			price: 9.50
		},
		{
			id: 4,
			name: "Black Leather",
			price: 1125
		}
	],

	technologies: [
		{
			id: 1,
			name: "Basic Package (basic sound system)",
			price: 100
		},

		{
			id: 2,
			name: "Navigation Package (includes integrated navigation controls)",
			price: 431.70
		},

		{
			id: 3,
			name: "Visibility Package (includes side and rear cameras)",
			price: 15
		},

		{
			id: 4,
			name: "Ultra Package (includes navigation and visibility packages)",
			price: 4
		}
	],

	wheels: [
		{
			id: 1,
			name: "17-inch Pair Radial",
			price: 17
		},

		{
			id: 2,
			name: "17-inch Pair Radial Black",
			price: 34
		},

		{
			id: 3,
			name: "18-inch Pair Spoke Silver",
			price: 53
		},

		{
			id: 4,
			name: "18-inch Pair Spoke Black",
			price: 54
		}
	],

	orders: []
};

export const getColors = () => {
	return database.colors.map((color) => ({ ...color }));
};

export const getInteriors = () => {
    return database.interiors.map(int => ({...int}));
};

export const getTechnologies = () => {
	return database.technologies.map((tech) => ({ ...tech }));
};

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}));
};

export const getOrders = () => {
    return database.orders.map(order => ({...order}));
};

export const setColor = (id) => {
    database.orderBuilder.colorId = id;
}

export const setInterior = (id) => {
    database.orderBuilder.intId = id;
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id;
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id;
}

export const addOrder = () => {
    //copy current orderBuilder
    const newOrder = {...database.orderBuilder};
    
    //make sure we have a fk for each item
    if(newOrder.colorId && newOrder.intId && newOrder.techId && newOrder.wheelId) {
        //add in the id
        if (database.orders.length > 0) {
            const lastIndex = database.orders.length - 1;
            newOrder.id = database.orders[lastIndex].id + 1;
        } else {
            newOrder.id = 1;
        }
        //timestamp
        newOrder.timestamp = Date.now();
        //add to the database
        database.orders.push(newOrder);
        //clear orderBuilder
        database.orderBuilder = {};
        //boradcast the now permanent state change
        document.dispatchEvent(new CustomEvent("stateChanged"));
    } else {
        window.alert("Please make a selection for each option.");
    }
}