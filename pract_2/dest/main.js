'use strict';
let firstName = 'Khan';
let lastName = firstName;
let age = 29;
firstName = 'M';
console.log(firstName);
// create function
const getFullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
};
const fullName = getFullName(firstName, lastName);
console.log(fullName);
const mySize = 2 /* Size.Medium */;
console.log(mySize);
// function
function calcDiscountedPrice(price, discount) {
    let discountn = 0;
    if (typeof discount === 'string') {
        discountn = parseFloat(discount);
    }
    else {
        discountn = discount;
    }
    discountn = discountn < 1 ? discountn : discountn / 100;
    return parseFloat((price * (1 - discountn)).toFixed(2));
}
console.log(calcDiscountedPrice(267.9, '25%'));
console.log(calcDiscountedPrice(267.9, 0.25));
console.log(calcDiscountedPrice(267.9, '0.25'));
// Swap Numbers
function swapNumbers(n1, n2) {
    return [n2, n1];
}
console.log(swapNumbers(15, 23));
const convertTemperature = (val, unit) => {
    const iUnit = unit.toLowerCase();
    if (iUnit === 'c' || iUnit === 'celsius' || iUnit === 'centigrade') {
        return [(val * 9) / 5 + 32, 'f'];
    }
    if (iUnit === 'f' || iUnit === 'fahrenheit') {
        return [((val - 32) * 5) / 9, 'c'];
    }
    return [val, iUnit];
};
console.log(convertTemperature(-40, 'f'));
console.log(convertTemperature(0, 'c'));
console.log(convertTemperature(15, 'c'));
console.log(convertTemperature(100, 'c'));
console.log(convertTemperature(68, 'f'));
console.log(convertTemperature(451, 'f'));
console.log(convertTemperature(250, 'c'));
// console.log(convertTemperature(350, 'r'))
function fixPrecision(n, p = 2) {
    return parseFloat(n.toFixed(p));
}
const tempf = convertTemperature(451, 'f');
console.log(fixPrecision(tempf[0]));
function makePrice(val, currPre = false, currency = 'sek') {
    return currPre ? currency + val.toFixed(2) : val.toFixed(2) + ' ' + currency;
}
console.log(makePrice(200, true));
