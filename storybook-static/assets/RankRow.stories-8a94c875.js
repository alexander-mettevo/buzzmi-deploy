import{a as s}from"./jsx-runtime-ee212120.js";import{R as a}from"./RankRow-abed0a6b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./CircleChart-167b5171.js";import"./Avatar-cd2f4721.js";import"./index-4d501b15.js";const g={title:"Components/Pages/Hub/Items/Rank/Items/RankRow",component:a,tags:["autodocs"],argTypes:{withAvatar:{description:"Show avatar in circle chart",control:{type:"boolean"},options:[!0,!1],defaultValue:!0}},parameters:{docs:{description:{component:`This component is responsible for displaying the user's rank, as well as the level of progress to the next rank. At the moment, the data is retrieved inside the component. This function is used for this purpose.\r

\`\`\` js\r
 const getData = async () => {\r
    try {\r
      //TODO get data from server\r
      const data = await fetch('url for get data')\r
        .then(response => response.json())\r

      setData(data);\r
    } catch (e) {\r
      console.error(e);\r
    }\r
  }\r
\`\`\`\r

The resulting data are fed into the state, and then used to display the component.\r
They should have the following structure:\r
\`\`\`\r
{\r
        progress: (number) from 0 to 100,\r
        currentRank: {\r
          name: (string) name of current rank,\r
          image: {\r
            src: (string) url to image of current rank\r
          }\r
        },\r
        nextRank: {\r
          name: (string) name of next rank,\r
          image: {\r
            src: (string) url to image of next rank\r
          }\r
        }\r
      }\r
\`\`\``}}}},i=o=>s(a,{...o}),r=i.bind({});r.args={withAvatar:!0};var e,n,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:"args => <RankRow {...args} />",...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const f=["Default"];export{r as Default,f as __namedExportsOrder,g as default};
//# sourceMappingURL=RankRow.stories-8a94c875.js.map
