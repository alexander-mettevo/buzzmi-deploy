# useDateSelect

The \`useDateSelect\` custom hook is used to handle the state and logic associated with a date picker.

## Usage

\`\`\`jsx
import useDateSelect from './useDateSelect';

const MyComponent = () => {
const { selectedDate, setSelectedDate, days, months, years, period, setPeriod } = useDateSelect();

    // Your component code here...
};
\`\`\`

## Returned Values

The \`useDateSelect\` hook returns an object with the following properties:

### \`selectedDate\`

- A \`Date\` object representing the currently selected date.

### \`setSelectedDate\`

- A function that takes a \`Date\` object and updates \`selectedDate\`.

### \`days\`

- An array of numbers representing the possible days for the currently selected month.

### \`months\`

- An array of numbers from 1 to 12 representing the months of the year.

### \`years\`

- An array of numbers from the current year minus 50 to the current year plus 50.

### \`period\`

- A string representing the currently selected period.

### \`setPeriod\`

- A function that takes a string and updates \`period\`.

## Dependencies

This hook relies on the built-in JavaScript \`Date\` object for handling date-related functionality.
`