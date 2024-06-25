"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[2307],{78377:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var i=t(74848),n=t(28453),s=t(11470),l=t(19365);t(97577);const d={title:"Buildings"},a=void 0,o={id:"guides/buildings",title:"Buildings",description:"Overview",source:"@site/docs/guides/buildings.mdx",sourceDirName:"guides",slug:"/guides/buildings",permalink:"/guides/buildings",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171932534e4,frontMatter:{title:"Buildings"},sidebar:"docs",previous:{title:"Base",permalink:"/guides/base"},next:{title:"Divisions",permalink:"/guides/divisions"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Schema reference",id:"schema-reference",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(r.p,{children:["The Overture Maps ",(0,i.jsx)(r.code,{children:"buildings"})," theme describes human-made structures with roofs or interior spaces that are permanently or semi-permanently in one place (source: ",(0,i.jsx)(r.a,{href:"https://wiki.openstreetmap.org/wiki/Key:building",children:"OSM building definition"}),"). The theme includes two feature types:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"building"})}),": The most basic form of a building feature. The geometry is expected to be the most outer footprint -- or roofprint if traced from satellite/aerial imagery -- of a building."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"building_part"})}),": A single part of a building. Building parts may have the same properties as buildings. A building part is associated with a parent building via a ",(0,i.jsx)(r.code,{children:"building_id"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Attribute tables for the GeoParquet files in the buildings theme"}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.default,{children:[(0,i.jsx)(l.default,{value:"building",label:"building",default:!0,children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"column"}),(0,i.jsx)(r.th,{children:"type"}),(0,i.jsx)(r.th,{children:"description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"id"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"A feature ID that may be associated with the Global Entity Reference System (GERS) if\u2014and-only-if the feature represents an entity that is part of GERS."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"geometry"}),(0,i.jsx)(r.td,{children:"blob"}),(0,i.jsx)(r.td,{children:"A building's geometry is defined as its footprint or roofprint (if traced from aerial/satellite imagery). MUST be a Polygon as defined by GeoJSON schema."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"bbox"}),(0,i.jsx)(r.td,{children:"struct"}),(0,i.jsx)(r.td,{children:"Area defined by two longitudes and two latitudes: latitude is a decimal number between -90.0 and 90.0; longitude is a decimal number between -180.0 and 180.0."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"sources"}),(0,i.jsx)(r.td,{children:"struct"}),(0,i.jsx)(r.td,{children:"The array of source information for the properties of a given feature. Each source object lists the property in JSON Pointer notation and the dataset from which that specific value originated."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"subtype"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"A broad category of the building type and purpose."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"names"}),(0,i.jsx)(r.td,{children:"struct"}),(0,i.jsx)(r.td,{children:'The name associated with the feature. The first entry in the array of names must have a "local" language.'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"class"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"Further delineation of the building's built purpose."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"level"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"The building feature's Z-order, i.e., stacking order. A Z-order of 0 is ground level."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"has_parts"}),(0,i.jsx)(r.td,{children:"boolean"}),(0,i.jsx)(r.td,{children:"Flag indicating whether the building has parts."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"height"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"Height of the building or part in meters. The height is the distance from the lowest point to the highest point."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"num_floors"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"Number of above-ground floors of the building or part."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"min_height"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"The height of the bottom part of building in meters. Used if a building or part of building starts above the ground level."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"min_floor"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:'The "start" floor of a building or building part. Indicates that the building or part is "floating" and its bottom-most floor is above ground level, usually because it is part of a larger building in which some parts do reach ground level.'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"facade_color"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The color (name or color triplet) of the facade of a building or building part in hexadecimal."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"facade_material"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The outer surface material of building facade."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_material"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The outermost material of the roof."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_shape"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The shape of the roof."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_direction"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"Bearing of the roof ridge line."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_orientation"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:'Orientation of the roof shape relative to the footprint shape. Either "along" or "across."'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_color"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The color (name or color triplet) of the roof of a building or building part in hexadecimal."})]})]})]})}),(0,i.jsx)(l.default,{value:"building_part",label:"building_part",default:!0,children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"column"}),(0,i.jsx)(r.th,{children:"type"}),(0,i.jsx)(r.th,{children:"description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"id"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"A feature ID that may be associated with the Global Entity Reference System (GERS) if\u2014and-only-if the feature represents an entity that is part of GERS."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"geometry"}),(0,i.jsx)(r.td,{children:"blob"}),(0,i.jsx)(r.td,{children:"A building's geometry is defined as its footprint or roofprint (if traced from aerial/satellite imagery). MUST be a Polygon as defined by GeoJSON schema."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"bbox"}),(0,i.jsx)(r.td,{children:"struct"}),(0,i.jsx)(r.td,{children:"Area defined by two longitudes and two latitudes: latitude is a decimal number between -90.0 and 90.0; longitude is a decimal number between -180.0 and 180.0."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"sources"}),(0,i.jsx)(r.td,{children:"struct"}),(0,i.jsx)(r.td,{children:"The array of source information for the properties of a given feature. Each source object lists the property in JSON Pointer notation and the dataset from which that specific value originated."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"names"}),(0,i.jsx)(r.td,{children:"struct"}),(0,i.jsx)(r.td,{children:'The name associated with the feature. The first entry in the array of names must have a "local" language.'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"class"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"Further delineation of the building's built purpose."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"level"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"The building feature's Z-order, i.e., stacking order. A Z-order of 0 is ground level."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"height"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"Height of the building or part in meters. The height is the distance from the lowest point to the highest point."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"num_floors"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"Number of above-ground floors of the building or part."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"min_height"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"The height of the bottom part of building in meters. Used if a building or part of building starts above the ground level."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"min_floor"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:'The "start" floor of a building or building part. Indicates that the building or part is "floating" and its bottom-most floor is above ground level, usually because it is part of a larger building in which some parts do reach ground level.'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"facade_color"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The color (name or color triplet) of the facade of a building or building part in hexadecimal."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"facade_material"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The outer surface material of building facade."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_material"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The outermost material of the roof."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_shape"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The shape of the roof."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_direction"}),(0,i.jsx)(r.td,{children:"double"}),(0,i.jsx)(r.td,{children:"Bearing of the roof ridge line."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_orientation"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:'Orientation of the roof shape relative to the footprint shape. Either "along" or "across."'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"roof_color"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The color (name or color triplet) of the roof of a building or building part in hexadecimal."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"building_id"}),(0,i.jsx)(r.td,{children:"varchar"}),(0,i.jsx)(r.td,{children:"The building ID to which this part belongs."})]})]})]})})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"schema-reference",children:"Schema reference"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/schema/reference/buildings/building",children:"Explore the schema reference for the building feature type"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/schema/reference/buildings/building_part",children:"Explore the schema reference for the building part feature type"}),"."]}),"\n"]})]})}function f(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});t(96540);var i=t(18215);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,l),hidden:t,children:r})}},11470:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var i=t(96540),n=t(18215),s=t(23104),l=t(56347),d=t(205),a=t(57485),o=t(31682),c=t(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:i,default:n}}=e;return{value:r,label:t,attributes:i,default:n}}))}(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function f(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,a.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function j(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=u(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:s}))),[o,h]=x({queryString:t,groupId:n}),[j,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),g=(()=>{const e=o??j;return f({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=t(74848);function m(e){let{className:r,block:t,selectedValue:i,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=a.indexOf(r),n=d[t].value;n!==i&&(o(r),l(n))},h=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;r=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;r=a[t]??a[a.length-1];break}}r?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:d.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>a.push(e),onKeyDown:h,onClick:c,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=j(e);return(0,p.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,p.jsx)(m,{...r,...e}),(0,p.jsx)(v,{...r,...e})]})}function w(e){const r=(0,b.A)();return(0,p.jsx)(y,{...e,children:h(e.children)},String(r))}},97577:(e,r,t)=>{t.d(r,{A:()=>l});var i=t(21432),n=t(44586),s=t(74848);function l(e){const{siteConfig:{customFields:r}}=(0,n.A)();var t=e.query.replace("__OVERTURE_RELEASE",r.overtureRelease);t=t.replace("__ATHENA_OVERTURE_RELEASE","v"+r.overtureRelease.replaceAll(".","_").replaceAll("-","_"));var l=e.language||"sql";return(0,s.jsx)(i.default,{language:l,title:e.title,children:t})}}}]);