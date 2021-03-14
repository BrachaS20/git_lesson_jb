// 1
// function showFruits() {
//     const fruits = new Set();
//     fruits.add("Banana");
//     fruits.add("Mango");
//     fruits.add("Apple");
//     fruits.add("Apple");

//     fruits.forEach(fruit => console.log(fruit));
// }

// 2
function showNames() {
    const names = new Map();

    names.set(322234444, "Gal");
    names.set(323232323, "Raz");
    names.set(222233333, "Bar");

    // forEach
    // names.forEach((key, value) => {console.log(key)});
    // names.forEach((key, value) => {console.log(value)});
    // names.forEach((key, value) => {console.log(key, value)});

    // Iterator + Map methods + forEach
    Array.from(names.keys()).forEach(key => console.log("Key: " + key));
    Array.from(names.values()).forEach(value => console.log("Value: " + value));
    Array.from(names.entries()).forEach((key, value) => {console.log(key, value)});
    Array.from(names.entries()).forEach(pair => console.log(pair[0] + " " + pair[1]));
}