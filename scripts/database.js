const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 750 },
        { id: 3, color: "Firebrick Red", price: 1000 },
        { id: 4, color: "Spring Green", price: 1250 },
    ],
    interiors: [
        { id: 1, material: 'Beige Fabric', price: 750 },
        { id: 2, material: 'Charcoal Fabric', price: 850 },
        { id: 3, material: 'White Leather', price: 1000 },
        { id: 4, material: 'Black Lether', price: 1250 },
    ],
    wheels: [
        { id: 1, style: '17-inch Pair Radial', price: 1000 },
        { id: 2, style: '17-inch Pair Radial Black', price: 1500 },
        { id: 3, style: '18-inch Pair Spoke Silver', price: 2000 },
        { id: 4, style: '18-inch Pair Spoke Black', price: 2500 },

    ],
    technologies: [
        { id: 1, package: 'Basic Package (basic sound system)', price: 2000 },
        { id: 2, package: 'Navigation Package (includes integrated navigation controls)', price: 2500 },
        { id: 3, package: 'Visibility Package (includes side and reat cameras)', price: 2500 },
        { id: 4, package: 'Ultra Package (includes navigation and visibility packages)', price: 4500 },

    ]
}

export const getPaintColor = () => {
    return database.paintColors.map((paintColor) => ({ ...paintColor }))
}

export const getInterior = () => {
    return database.interiors.map((interior) => ({ ...interior }))
}

export const getWheels = () => {
    return database.wheels.map((wheel) => ({ ...wheel }))
}

export const getTechnologies = () => {
    return database.technologies.map((technology) => ({ ...technology }))
}