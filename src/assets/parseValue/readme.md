# Function Documentation: parseValue
## Introduction
The parseValue function is designed to convert a given value from its base unit to the largest possible unit based on predefined conversion rules.

## Function Definition
```javascript
function parseValue(value, type) {...}
```

## Parameters
* value (number): The numeric value to be converted. This should be given in the base unit for the provided type.
* type (string): The type of the measurement system to use for the conversion. The current valid types are: 'time', 'distanceMetric', and 'distanceImperial'.

## Return Value
The function returns an array of two elements:

* The converted value (number)
* The unit of the converted value (string)

If the type is not defined in the conversion rules, the function returns the original value and type.

## Conversion Rules
Conversion rules are defined in the conversionRules object. Each property in the object represents a type of measurement (e.g., 'time', 'distanceMetric', 'distanceImperial').

Each type has an array of conversion steps, where each step is an object with the following properties:

* unit (string): The base unit for this conversion step.
* conversionFactor (number): The value to divide the incoming value by to convert it to the next unit.
* nextUnit (string): The unit that the value will be converted to in this step.
```javascript
const conversionRules = {
  time: [
    { unit: "ms", conversionFactor: 1000, nextUnit: "s" },
    { unit: "s", conversionFactor: 60, nextUnit: "m" },
    { unit: "m", conversionFactor: 60, nextUnit: "h" },
  ],
  distanceMetric: [
    { unit: "cm", conversionFactor: 100, nextUnit: "m" },
    { unit: "m", conversionFactor: 1000, nextUnit: "km" },
  ],
  distanceImperial: [
    { unit: "in", conversionFactor: 12, nextUnit: "ft" },
    { unit: "ft", conversionFactor: 5280, nextUnit: "mi" },
  ],
}
```

If necessary, you can easily add new values or edit the old ones in this configuration. The most important thing is to follow the structure.

## Example Usage
```javascript
console.log(parseValue(1000, 'time')); // [1, 's']
console.log(parseValue(1000, 'distanceMetric')); // [1, 'm']
console.log(parseValue(1000, 'distanceImperial')); // [83.33333333333333, 'ft']
console.log(parseValue(1000, 'invalidType')); // [1000, 'invalidType']
```

