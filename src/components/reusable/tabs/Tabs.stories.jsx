import Tabs from "../Tabs/Tabs.jsx";

export default {
    title: "Reusable/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    argTypes: {
        mode: {
            description: "Tabs",
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

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            id: 0,
            name: "Done last week",
            component: <>Component for Done last week 1</>
        },
        {
            id: 1,
            name: "Done this month",
            component: <>Component for Done this month 2</>
        },
        {
            id: 2,
            name: "Done this month",
            component: <>Component for Done this month 3</>
        },
        {
            id: 3,
            name: "Done this month",
            component: <>Component for Done this month 4</>
        },
    ]
}