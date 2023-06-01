import Calendar from "../calendar/Calendar.jsx";
import moment from "moment";
import {useState} from "react";

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

const getDaysInMonth = (month, year) =>
    (new Array(31))
        .fill('')
        .map((v,i)=> ({
            date: moment([year, month-1, i + 1]).format("YYYY-MM-DD"),
            type: i % 3 === 0 ? "completed" : i % 4 === 0 ? "uncompleted" : null,
        }))
        .filter(v=> moment(v.date).get('month') === month - 1)
const dayList = getDaysInMonth(moment().get("month") + 1, 2023);

const Template = (args) => <Calendar {...args}/>;

export const Default = Template.bind({});
Default.args = {
    dayList: dayList,
    value: dayList[0].date,
    onChange: () => null
}

export const oneWeek = Template.bind({});
oneWeek.args = {
    dayList: dayList,
    value: dayList[0].date,
    onChange: () => null,
    period: "week",
    buttonProps: {
        isDateAnchor: true,
        text: "back to current day"
    },
    hasFooter: true
}

export const oneWeekWithoutNavigation = Template.bind({});
oneWeekWithoutNavigation.args = {
    dayList: dayList,
    value: dayList[0].date,
    period: "week",
    buttonProps: {
        handler: () => null,
        text: "See all"
    },
    noNavigation: true,
    onChange: () => null
}