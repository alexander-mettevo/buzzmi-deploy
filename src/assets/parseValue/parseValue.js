const conversionRules = {
  time: [
    { unit: "ms", conversionFactor: 1000, nextUnit: "s" },
    { unit: "s", conversionFactor: 60, nextUnit: "m" },
    { unit: "m", conversionFactor: 60, nextUnit: "h" },
  ],
  distanceMetric: [{ unit: "km", conversionFactor: 1, nextUnit: "km" }],
  distanceImperial: [
    { unit: "in", conversionFactor: 12, nextUnit: "ft" },
    { unit: "ft", conversionFactor: 5280, nextUnit: "mi" },
  ],
}

function parseValue(value, type) {
  const rules = conversionRules[type]
  if (!rules) {
    return [value, type] // return original value and type if type is not defined
  }

  if (!value) {
    return [0, rules[0].unit]
  }

  for (let rule of rules) {
    if (value < rule.conversionFactor) {
      return [value?.toFixed(2), rule.unit]
    }
    value = value / rule.conversionFactor
  }

  // If the value doesn't fit into any of the predefined conversions, return it in the largest unit
  const lastRule = rules[rules.length - 1]
  return [value?.toFixed(2), lastRule.nextUnit]
}

export default parseValue
