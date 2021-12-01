const database = {
	orderBuilder: [],

	colors: [
		{
			id: 1,
			name: "Silver"
		},

		{
			id: 2,
			name: "Midnight Blue"
		},

		{
			id: 3,
			name: "Firebrick Red"
		},

		{
			id: 4,
			name: "Spring Green"
		}
	],

	interiors: [
		{
			id: 1,
			name: "Beige Fabric"
		},
		{
			id: 2,
			name: "Charcoal Fabric"
		},
		{
			id: 3,
			name: "White Leather"
		},
		{
			id: 4,
			name: "Bleack Leather"
		}
	],

	technologies: [
		{
			id: 1,
			name: "Basic Package (basic sound system)"
		},

		{
			id: 2,
			name: "Navigation Package (includes integrated navigation controls)"
		},

		{
			id: 3,
			name: "Visibility Package (includes side and reat cameras)"
		},

		{
			id: 4,
			name: "Ultra Package (includes navigation and visibility packages)"
		}
	],

	wheels: [
		{
			id: 1,
			name: "17-inch Pair Radial"
		},

		{
			id: 2,
			name: "17-inch Pair Radial Black"
		},

		{
			id: 3,
			name: "18-inch Pair Spoke Silver"
		},

		{
			id: 4,
			name: "18-inch Pair Spoke Black"
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