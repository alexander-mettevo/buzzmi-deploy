import{a as i}from"./jsx-runtime-ee212120.js";import{M as o}from"./MainLayoutSidebar-16a90652.js";import{y as s}from"./index-ee5cb701.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./MainLayoutMenuItemProfile-c8f85b7e.js";import"./MainLayoutMenuItem-c3bf3f0e.js";const h={title:"Layouts/MainLayout/MainLayoutSidebar",component:o,tags:["autodocs"],decorators:[s],parameters:{docs:{description:{component:`A sidebar to display the application menu in Main Layout. On tablets and cell phones, it moves to the bottom of the screen.\r

Contains an array with menu items to output it. This array has the following appearance:\r
\`\`\`\r
const items = [\r
  {\r
    iconSrc: '/images/layout/main-layout/notifications.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/notifications.svg',\r
    name: 'Notifications',\r
    to: '/notifications'\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/messages.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/messages.svg',\r
    name: 'Messages',\r
    to: '/messages'\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/home.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/home.svg',\r
    name: 'Home',\r
    to: '/',\r
    showOnMobile: true\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/space.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/space.svg',\r
    name: 'Space',\r
    to: '/space',\r
    showOnMobile: true\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/subscription.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/subscription.svg',\r
    name: 'Subscription',\r
    to: '/subscription',\r
    showOnMobile: true\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/challenges.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/challenges.svg',\r
    name: 'Challenges',\r
    to: '/challenges',\r
    showOnMobile: true\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/hub.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/hub.svg',\r
    name: 'Hub',\r
    to: '/hub',\r
    showOnMobile: true\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/calendar.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/calendar.svg',\r
    name: 'Calendar',\r
    to: '/calendar'\r
  },\r
  {\r
    iconSrc: '/images/layout/main-layout/wallet.svg',\r
    activeIconSrc: '/images/layout/main-layout/active-link/wallet.svg',\r
    name: 'Wallet',\r
    to: '/wallet'\r
  },\r
]\r
\`\`\`\r

Also, the client's avatar and a link to his profile must be loaded into this component. For this, it has a function __handleGetAvatar__. Which has the following form:\r

\`\`\` js\r
  const handleGetAvatar = async () => {\r
    try {\r
      //TODO: get avatar from server\r
      const avatar = '/images/moc/avatar.png'\r
      setAvatar(avatar)\r
    } catch (e) {\r
      console.error(e)\r
    }\r
  }\r
\`\`\``}}}},c=e=>i(o,{...e}),a=c.bind({});var n,t,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"args => <MainLayoutSidebar {...args} />",...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,h as default};
//# sourceMappingURL=MainLayoutSidebar.stories-21b05ac0.js.map
