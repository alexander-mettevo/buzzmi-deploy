import{a as s}from"./jsx-runtime-ee212120.js";import{r}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function a(){const[e,t]=r.useState({width:void 0,height:void 0});return r.useEffect(()=>{function o(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)},[]),e}const c=({desktopComponent:e,mobileComponent:t})=>{const{width:o}=a();return o>992?e:t},m=c,h={title:"Components/Reusable/Assets/ResizeComponent",component:m,tags:["autodocs"],argTypes:{desktopComponent:{name:"Desktop Component",description:"Component to be rendered on desktop",control:{type:"ReactNode"}},mobileComponent:{name:"Mobile Component",description:"Component to be rendered on mobile",control:{type:"ReactNode"}}}},u=e=>s(m,{...e}),n=u.bind({});n.args={desktopComponent:s("h1",{children:"Desktop Component"}),mobileComponent:s("h1",{children:"Mobile Component"})};var i,d,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"args => <ResizeComponent {...args} />",...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["Default"];export{n as Default,f as __namedExportsOrder,h as default};
//# sourceMappingURL=ResizeComponent.stories-069fab1d.js.map
