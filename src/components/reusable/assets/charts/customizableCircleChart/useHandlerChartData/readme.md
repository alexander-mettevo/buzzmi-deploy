
# React Hook Documentation: useHandlerChartData

## Introduction

The `useHandlerChartData` hook is designed to parse an initial and current value of a specific type and provide their parsed versions. It uses the utility function `parseValue` to handle the parsing. If the type is "time", it converts the time in milliseconds to a formatted time string.

## Hook Definition

```javascript
const useHandlerChartData = (type, initValue, currentValue, showTypeValue) => {...}
```

## Parameters

- `type` (string): The type of the measurement system to use for the conversion.
- `initValue` (number): The initial value to be parsed. This should be given in the base unit for the provided type.
- `currentValue` (number): The current value to be parsed. This value is watched and the hook will react whenever this value changes.
- `showTypeValue` (boolean): If true, `parsedCurrentValue` is a string concatenating the parsed value and unit. If false, `parsedCurrentValue` is just the parsed value.

## Return Value

The hook returns an object with two properties:

- `parsedInitValue`: The parsed initial value based on the provided type.
- `parsedCurrentValue`: The parsed current value based on the provided type. This value is re-computed whenever `currentValue` changes.
- `innerFunction` `parseTime`: The `parseTime` function is used to convert time value from milliseconds to a time string in the format "hh:mm:ss".

```javascript
export const parseTime = (value) => {...}
```

This function takes as argument the value (number) which represents the time in milliseconds and returns a string representing the time.
