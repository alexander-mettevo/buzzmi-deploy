import GoalList from "../goalList/GoalList.jsx";

export default {
    title: "Components/Reusable/GoalList",
    component: GoalList,
    tags: ["autodocs"],
    argTypes: {
        mode: {
            description: "GoalList",
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

const Template = (args) => <GoalList {...args} />;

export const Default = Template.bind({});
Default.args = {
    list: new Array(5).fill('').map((el, index) => ({
        id: index,
        name: "Week " + 1,
        goal: "3,9km",
        achieved: "3,7km",
        countActiveDays: index  + 1,
        type: index % 2 === 0 ? "uncompleted" : "completed"
    }))
}