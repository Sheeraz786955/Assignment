"use strict";
const car_object = (manufacturer, model, ...args) => {
    let car = { manufacturer, model };
    Object.entries(args).map(([key, value]) => {
        car = Object.assign(Object.assign({}, car), value);
    });
    return car;
};
console.log(car_object("Hyundai", "Elentra"));
console.log(car_object("Toyota", "Fortuner", { color: "black" }, { seats: 7 }));
