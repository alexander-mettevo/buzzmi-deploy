import Calendar from "../calendar/Calendar.jsx";
import moment from "moment";

export default {
    title: "Components/Reusable/Calendar",
    component: Calendar,
    tags: ["autodocs"],
    argTypes: {
        mode: {
            description: "Calendar",
            table: {
                type: {
                    summary: "string",
                }
            },
            options: [],
            //control: { type: 'radio' }
        }
    }
}

const Template = (args) => <Calendar {...args} />;

const getDaysInMonth = (month, year) =>
    (new Array(31))
        .fill('')
        .map((v,i)=> ({
            date: moment([year, month-1, i + 1]).format("YYYY-MM-DD"),
            type: i % 3 === 0 ? "completed" : i % 4 === 0 ? "uncompleted" : null,
        }))
        .filter(v=> moment(v.date).get('month') === month - 1)
const dayList = getDaysInMonth(4, 2023);

export const Default = Template.bind({});
Default.args = {
    dayList: dayList,
    value: dayList[0].date,
    onChange: (date) => null
}

export const oneWeek = Template.bind({});
oneWeek.args = {
    dayList: dayList,
    value: dayList[0].date,
    minDate: dayList[0].date,
    maxDate: dayList[6].date,
    onChange: (date) => null
}