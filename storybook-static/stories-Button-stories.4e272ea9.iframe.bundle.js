"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[791],{"./src/stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DangerLarge:()=>DangerLarge,DangerMedium:()=>DangerMedium,DangerSmall:()=>DangerSmall,Disabled:()=>Disabled,Loading:()=>Loading,PrimaryLarge:()=>PrimaryLarge,PrimaryMedium:()=>PrimaryMedium,PrimarySmall:()=>PrimarySmall,SecondaryLarge:()=>SecondaryLarge,SecondaryMedium:()=>SecondaryMedium,SecondarySmall:()=>SecondarySmall,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:__webpack_require__("./src/components/Button.tsx").A,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text"},type:{control:{type:"select"},options:["primary","secondary","danger"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},loading:{control:"boolean"},className:{control:"text"},onClick:{action:"clicked"}}},PrimarySmall={args:{label:"Primary Small",type:"primary",size:"small"}},PrimaryMedium={args:{label:"Primary Medium",type:"primary",size:"medium"}},PrimaryLarge={args:{label:"Primary Large",type:"primary",size:"large"}},SecondarySmall={args:{label:"Secondary Small",type:"secondary",size:"small"}},SecondaryMedium={args:{label:"Secondary Medium",type:"secondary",size:"medium"}},SecondaryLarge={args:{label:"Secondary Large",type:"secondary",size:"large"}},DangerSmall={args:{label:"Danger Small",type:"danger",size:"small"}},DangerMedium={args:{label:"Danger Medium",type:"danger",size:"medium"}},DangerLarge={args:{label:"Danger Large",type:"danger",size:"large"}},Disabled={args:{label:"Disabled Button",type:"primary",size:"medium",disabled:!0}},Loading={args:{label:"Loading Button",type:"primary",size:"medium",loading:!0,disabled:!1}},__namedExportsOrder=["PrimarySmall","PrimaryMedium","PrimaryLarge","SecondarySmall","SecondaryMedium","SecondaryLarge","DangerSmall","DangerMedium","DangerLarge","Disabled","Loading"];PrimarySmall.parameters={...PrimarySmall.parameters,docs:{...PrimarySmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Primary Small',\n    type: 'primary',\n    size: 'small'\n  }\n}",...PrimarySmall.parameters?.docs?.source}}},PrimaryMedium.parameters={...PrimaryMedium.parameters,docs:{...PrimaryMedium.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Primary Medium',\n    type: 'primary',\n    size: 'medium'\n  }\n}",...PrimaryMedium.parameters?.docs?.source}}},PrimaryLarge.parameters={...PrimaryLarge.parameters,docs:{...PrimaryLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Primary Large',\n    type: 'primary',\n    size: 'large'\n  }\n}",...PrimaryLarge.parameters?.docs?.source}}},SecondarySmall.parameters={...SecondarySmall.parameters,docs:{...SecondarySmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Secondary Small',\n    type: 'secondary',\n    size: 'small'\n  }\n}",...SecondarySmall.parameters?.docs?.source}}},SecondaryMedium.parameters={...SecondaryMedium.parameters,docs:{...SecondaryMedium.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Secondary Medium',\n    type: 'secondary',\n    size: 'medium'\n  }\n}",...SecondaryMedium.parameters?.docs?.source}}},SecondaryLarge.parameters={...SecondaryLarge.parameters,docs:{...SecondaryLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Secondary Large',\n    type: 'secondary',\n    size: 'large'\n  }\n}",...SecondaryLarge.parameters?.docs?.source}}},DangerSmall.parameters={...DangerSmall.parameters,docs:{...DangerSmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Danger Small',\n    type: 'danger',\n    size: 'small'\n  }\n}",...DangerSmall.parameters?.docs?.source}}},DangerMedium.parameters={...DangerMedium.parameters,docs:{...DangerMedium.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Danger Medium',\n    type: 'danger',\n    size: 'medium'\n  }\n}",...DangerMedium.parameters?.docs?.source}}},DangerLarge.parameters={...DangerLarge.parameters,docs:{...DangerLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Danger Large',\n    type: 'danger',\n    size: 'large'\n  }\n}",...DangerLarge.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled Button',\n    type: 'primary',\n    size: 'medium',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Loading Button',\n    type: 'primary',\n    size: 'medium',\n    loading: true,\n    disabled: false\n  }\n}",...Loading.parameters?.docs?.source}}}},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Button=({label,type="primary",size="medium",disabled=!1,loading=!1,className="",onClick})=>{const classes=`\n    inline-flex items-center justify-center font-medium rounded-lg disabled:cursor-not-allowed disabled:opacity-50\n    ${{primary:"bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400",secondary:"bg-gray-300 hover:bg-gray-300 text-gray-800 focus:ring-gray-400",danger:"bg-red-500 hover:bg-red-600 text-white focus:ring-red-400"}[type]}\n    ${{small:"px-4 py-2 text-sm min-w-[80px]",medium:"px-6 py-2.5 text-base min-w-[100px]",large:"px-8 py-3 text-lg min-w-[120px]"}[size]}\n    ${className}\n  `.trim();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:classes,disabled:disabled||loading,onClick,children:loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{className:"animate-spin h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Loading..."})]}):label})},__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);