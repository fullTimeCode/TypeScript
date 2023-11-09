'use strict'

let firstName = 'Khan'
let lastName = firstName
let age = 29
firstName = 'M'
console.log(firstName)

// create function
const getFullName = (firstName: string, lastName: string): string => {
  return firstName + ' ' + lastName
}

const fullName = getFullName(firstName, lastName)
console.log(fullName)

// Enum

const enum Size {
  Small = 1,
  Medium,
  Large,
}

const mySize = Size.Medium

console.log(mySize)

// function

function calcDiscountedPrice(price: number, discount: number | string): number {
  let discountn: number = 0

  if (typeof discount === 'string') {
    discountn = parseFloat(discount)
  } else {
    discountn = discount as number
  }
  discountn = discountn < 1 ? discountn : discountn / 100
  return parseFloat((price * (1 - discountn)).toFixed(2))
}

console.log(calcDiscountedPrice(267.9, '25%'))
console.log(calcDiscountedPrice(267.9, 0.25))
console.log(calcDiscountedPrice(267.9, '0.25'))

// Swap Numbers
function swapNumbers(n1: number, n2: number): [number, number] {
  return [n2, n1]
}

console.log(swapNumbers(15, 23))

// temperature convertor

type TUnit = 'c' | 'celsius' | 'centigrade' | 'f' | 'fahrenheit'

type SILUnits = 'm' | 'meter' | 'cm' | 'centimeter' | 'mm' | 'milimeter' | 'km' | 'kilometer'

type ImperialLUnits = 'ft' | 'feet' | 'in' | 'inch' | 'mile'

type LUnits = ImperialLUnits | SILUnits

interface ITemConv {
  (val: number, unit: TUnit): [number, TUnit]
}

const convertTemperature: ITemConv = (val, unit) => {
  const iUnit = unit.toLowerCase() as TUnit
  if (iUnit === 'c' || iUnit === 'celsius' || iUnit === 'centigrade') {
    return [(val * 9) / 5 + 32, 'f' as TUnit]
  }
  if (iUnit === 'f' || iUnit === 'fahrenheit') {
    return [((val - 32) * 5) / 9, 'c' as TUnit]
  }

  return [val, iUnit]
}

console.log(convertTemperature(-40, 'f'))
console.log(convertTemperature(0, 'c'))
console.log(convertTemperature(15, 'c'))
console.log(convertTemperature(100, 'c'))
console.log(convertTemperature(68, 'f'))
console.log(convertTemperature(451, 'f'))
console.log(convertTemperature(250, 'c'))
// console.log(convertTemperature(350, 'r'))

function fixPrecision(n: number, p = 2): number {
  return parseFloat(n.toFixed(p))
}

const tempf = convertTemperature(451, 'f')
console.log(fixPrecision(tempf[0]))

function makePrice(val: number, currPre = false, currency = 'sek'): string {
  return currPre ? currency + val.toFixed(2) : val.toFixed(2) + ' ' + currency
}

console.log(makePrice(200, true))
