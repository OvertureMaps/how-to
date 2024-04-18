"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[838],{9462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=a(5893),n=a(1151),s=a(4866),o=a(5162);const l={title:"Overture Maps + QGIS"},i=void 0,u={id:"examples/QGIS",title:"Overture Maps + QGIS",description:"In this example, we'll show you how to get Overture Maps data into QGIS, a powerful and popular open source geographic information system. QGIS can ingest almost every spatial data format, including Parquet and GeoParquet. Once you get your data into QGIS, the sky's the limit for data analysis, data conflation, visualization and beautiful mapmaking.",source:"@site/docs/examples/QGIS.mdx",sourceDirName:"examples",slug:"/examples/QGIS",permalink:"/examples/QGIS",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overture Maps + QGIS"},sidebar:"docs",previous:{title:"Building an Overture Map",permalink:"/examples/build-a-map"},next:{title:"User Guides",permalink:"/guides/"}},c={},d=[{value:"1. Download Overture Data",id:"1-download-overture-data",level:2},{value:"2. Add the data to QGIS",id:"2-add-the-data-to-qgis",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this example, we'll show you how to get Overture Maps data into ",(0,r.jsx)(t.a,{href:"https://www.qgis.org/",children:"QGIS"}),", a powerful and popular open source geographic information system. QGIS can ingest almost every spatial data format, including ",(0,r.jsx)(t.a,{href:"https://parquet.apache.org/docs/",children:"Parquet"})," and ",(0,r.jsx)(t.a,{href:"https://geoparquet.org/",children:"GeoParquet"}),". Once you get your data into QGIS, the sky's the limit for data analysis, data conflation, visualization and beautiful mapmaking."]}),"\n",(0,r.jsxs)(t.p,{children:["The trickiest part of this example is making sure you're installing a newer version of QGIS (with GDAL > 3.5) that can directly read ",(0,r.jsx)(t.code,{children:"Parquet"})," and ",(0,r.jsx)(t.code,{children:"GeoParquet"})," files. We'll walk you through the processs."]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsxs)("summary",{children:["Instructions: Install a version of QGIS with GDAL > 3.5 that can read ",(0,r.jsx)(t.code,{children:"(geo)parquet"})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.Z,{value:"mac",label:"MacOS",default:!0,children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://anaconda.org/conda-forge/qgis",children:"conda packages"})," of QGIS have support for Parquet."]}),(0,r.jsxs)(t.p,{children:["You can find the latest installers for Mac here: ",(0,r.jsx)(t.a,{href:"https://github.com/opengisch/qgis-conda-builder/releases",children:"github.com/opengisch/qgis-conda-builder/releases"})]})]}),(0,r.jsx)(o.Z,{value:"windows",label:"Windows",default:!0,children:(0,r.jsx)(t.p,{children:"Most distributions of QGIS for Windows have support for parquet."})}),(0,r.jsxs)(o.Z,{value:"linux",label:"Linux",default:!0,children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://anaconda.org/conda-forge/qgis",children:"conda packages"})," of QGIS have support for Parquet."]}),(0,r.jsx)(t.p,{children:"Additionally, there is a Flatpak QGIS package that includes support for Parquet:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"flatpak install --user https://dl.flathub.org/build-repo/94031/org.qgis.qgis.flatpakref\n"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"1-download-overture-data",children:"1. Download Overture Data"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.Z,{value:"DuckDB",children:[(0,r.jsxs)(t.p,{children:["Using only the ",(0,r.jsx)(t.code,{children:"bbox"})," parameters, we can efficiently retrieve all Overture data without processing any geometries. With SELECT ",(0,r.jsx)(t.code,{children:"*"}),", we will simply download ",(0,r.jsx)(t.em,{children:"all"})," of the data in Overture across all themes and types. Note: if your query is interupted by a connection error, you might try running the following command first: ",(0,r.jsx)(t.code,{children:"SET http_keep_alive=false;"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"LOAD httpfs;\nCOPY(\n    SELECT\n        *\n    FROM\n        read_parquet(\"s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=*/type=*/*\", union_by_name=true)\n    WHERE\n            bbox.xmin >= -105.30 AND bbox.ymin >= 39.98\n        AND bbox.xmax <= -105.24 AND bbox.ymax <= 40.07\n) TO 'boulder_co_overture.parquet' WITH (FORMAT PARQUET);\n"})}),(0,r.jsxs)(t.p,{children:["Note that this query gathers data from all Overture themes with ",(0,r.jsx)(t.code,{children:"theme=*/type=*/*"}),". The resulting file has ",(0,r.jsx)(t.em,{children:"all"})," of the columns and multiple geometry types."]})]}),(0,r.jsxs)(o.Z,{value:"DuckDB Spatial",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"spatial"})," plugin allows DuckDB to read the geometry and convert the file to a common spatial format. This query will download all of the ",(0,r.jsx)(t.code,{children:"road"})," subtypes of ",(0,r.jsx)(t.code,{children:"segments"})," in the ",(0,r.jsx)(t.code,{children:"transportation"})," theme to a ",(0,r.jsx)(t.em,{children:"shapefile"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs;\n-- Roads\nCOPY (\n    SELECT\n        names.primary AS name,\n        JSON_EXTRACT(road, '$.class') AS class,\n        ST_GeomFromWKB(geometry) as geometry\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=transportation/type=segment/*')\n    WHERE\n        subtype = 'road'\n        AND bbox.xmin > -122.68 AND bbox.xmax < -121.98\n        AND bbox.ymin > 47.36 AND bbox.ymax < 47.79\n) TO 'seattle_roads.shp'\nWITH (FORMAT GDAL, DRIVER 'Esri Shapefile', SRS 'EPSG:4326');\n"})})]}),(0,r.jsxs)(o.Z,{value:"Python",children:[(0,r.jsxs)(t.p,{children:["The new ",(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:(0,r.jsx)(t.code,{children:"overturemaps-py"})})," Python utility can download Overture data as both ",(0,r.jsx)(t.code,{children:"geojson"})," and ",(0,r.jsx)(t.code,{children:"geoparquet"}),". This example downloads buildlings around Boston."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ pip install overturemaps\n\n$ overturemaps download --bbox=-71.068,42.353,-71.058,42.363 \\\n    -f geoparquet --type=building --output=boston.geoparquet\n"})}),(0,r.jsxs)(t.p,{children:["Note: run ",(0,r.jsx)(t.code,{children:"overturemaps download --help"})," for a full list of types and output formats."]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"2-add-the-data-to-qgis",children:"2. Add the data to QGIS"}),"\n",(0,r.jsx)(t.p,{children:"All of the data files we created in Step 1 are vector files that can be added as layers in QGIS. The easiest method is to drag-and-drop the file(s) directly into the map canvas."}),"\n",(0,r.jsx)("img",{src:"/img/qgis-parquet-drag-drop.gif",alt:"Drag-n-drop parquet files in QGIS",width:"65%"})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var r=a(6905);const n={tabItem:"tabItem_Ymn6"};var s=a(5893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,o),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7294),n=a(6905),s=a(2466),o=a(6550),l=a(469),i=a(1980),u=a(7392),c=a(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:a,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),b=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(5893);function v(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),n=l[a].value;n!==r&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,n.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>o});var r=a(7294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);