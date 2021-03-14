// 1
// function showProducts() {

//     const products = new Map();

//     products.set(12345, "Table");
//     products.set(11111, "Chair");
//     products.set(22222, "Closet");
//     products.set(33333, "Library");
//     products.set(44444, "Lamp");

//     Array.from(products.keys()).forEach(key => console.log("Key: " + key));
//     Array.from(products.values()).forEach(value => console.log("Value: " + value));
//     Array.from(products.entries()).forEach((key, value) => {console.log(key, value)});
//     Array.from(products.entries()).forEach(pair => console.log(pair[0] + " " + pair[1]));
    
//     if (products.has(7)) {
//         console.log("We have key=7");
//     } else {
//         console.log("We don't have key=7");
//     }

//     console.log(products.get(12345));

// }




// 2
function showCars() {
    const cars = new Map();

    cars.set(
        111,
        {
            manufacturer: "Toyota",
            model: "Corolla",
            color: "Black"
        }
    );
    cars.set(
        222,
        {
            manufacturer: "Skoda",
            model: "Octavia",
            color: "White"
        }
    );
    cars.set(
        333,
        {
            manufacturer: "Kia",
            model: "Forte",
            color: "Black"
        }
    );
    cars.set(
        444,
        {
            manufacturer: "Nissan",
            model: "Juke",
            color: "Silver"
        }
    );
    cars.set(
        555,
        {
            manufacturer: "Toyota",
            model: "Camry",
            color: "White"
        }
    );

    Array.from(cars.keys()).forEach(key => console.log("Key: " + key));
    Array.from(cars.values()).forEach((car) => {for (let prop in car) {console.log(prop + ": " + car[prop])}});

    console.log("Do we have car number-1005070? " + cars.has(1005070));

    console.log(cars.get(5009876));
}