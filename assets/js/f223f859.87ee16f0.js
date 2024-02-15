"use strict";(self.webpackChunkoverture_how_to=self.webpackChunkoverture_how_to||[]).push([[273],{815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(5893),a=n(1151),o=n(4866),s=n(5162);const l={title:"Querying Data Locally"},i=void 0,u={id:"accessing-data/locally",title:"Querying Data Locally",description:"DuckDB is an analytics tool that can query remote parquet files using SQL. It will only download the subset of files it needs to fulfill your queries. Note: updating to DuckDB 0.10.0 will dramatically improve query performance because this version enables faster row and row-group filtering on parquet files containing a struct. (A struct is a column containing one or more other columns in named fields and is analogous to a JSON object.)",source:"@site/docs/accessing-data/locally.mdx",sourceDirName:"accessing-data",slug:"/accessing-data/locally",permalink:"/how-to/accessing-data/locally",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Querying Data Locally"},sidebar:"docs",previous:{title:"Querying Data in the Cloud",permalink:"/how-to/accessing-data/cloud-services"},next:{title:"Example Queries",permalink:"/how-to/accessing-data/example-queries"}},c={},d=[];function h(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://duckdb.org/",children:"DuckDB"})," is an analytics tool that can query remote parquet files using SQL. It will only download the subset of files it needs to fulfill your queries. ",(0,r.jsx)(t.strong,{children:"Note: updating to DuckDB 0.10.0 will dramatically improve query performance"})," because this version ",(0,r.jsx)(t.a,{href:"https://github.com/duckdb/duckdb/pull/10314",children:"enables faster row and row-group filtering"})," on parquet files containing a ",(0,r.jsx)(t.code,{children:"struct"}),". (",(0,r.jsxs)(t.a,{href:"https://arrow.apache.org/blog/2022/10/08/arrow-parquet-encoding-part-2/#:~:text=Struct%20%2F%20Group%20Columns,analogous%20to%20a%20JSON%20object.&text=More%20technical%20detail%20is%20available%20in%20the%20StructArray%20format%20specification",children:["A ",(0,r.jsx)(t.code,{children:"struct"})," is a column"]})," containing one or more other columns in named fields and is analogous to a JSON object.)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://duckdb.org/docs/installation/",children:"Install DuckDB locally"}),". You'll need extensions to work with spatial data in the cloud. From the DuckDB CLI, do the following:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"INSTALL SPATIAL;"})," to install the ",(0,r.jsx)(t.a,{href:"https://github.com/duckdblabs/duckdb_spatial",children:"duckdb_spatial"})," extension."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"INSTALL httpfs;"})," or ",(0,r.jsx)(t.code,{children:"INSTALL azure;"})," to read from either Amazon S3 (",(0,r.jsx)(t.a,{href:"https://duckdb.org/docs/guides/import/s3_import.html",children:"httpfs"}),") or Microsoft Azure Blob Storage (",(0,r.jsx)(t.a,{href:"https://duckdb.org/docs/extensions/azure",children:"azure"}),")."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Load the extensions and set the DuckDB environment variables for either s3 or Azure:"}),"\n",(0,r.jsxs)(o.Z,{queryString:"duckdb-setup",children:[(0,r.jsx)(s.Z,{value:"s3",label:"Amazon S3",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:" LOAD spatial;\n LOAD httpfs;\n SET s3_region='us-west-2';\n"})})}),(0,r.jsx)(s.Z,{value:"azure",label:"Azure",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:" LOAD spatial;\n LOAD azure;\n SET azure_storage_connection_string = 'DefaultEndpointsProtocol=https;AccountName=overturemapswestus2;AccountKey=;EndpointSuffix=core.windows.net';\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Here is an example query that downloads all of the country boundaries from the ",(0,r.jsx)(t.code,{children:"admins"})," theme and create a single GeoJSON file:"]}),"\n",(0,r.jsxs)(o.Z,{queryString:"duckdb-setup",children:[(0,r.jsx)(s.Z,{value:"s3",label:"Amazon S3",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"COPY (\n    SELECT\n           type,\n           subType,\n           localityType,\n           adminLevel,\n           isoCountryCodeAlpha2,\n           JSON(names) AS names,\n           JSON(sources) AS sources,\n           ST_GeomFromWkb(geometry) AS geometry\n      FROM read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\n     WHERE adminLevel = 2\n       AND ST_GeometryType(ST_GeomFromWkb(geometry)) IN ('POLYGON','MULTIPOLYGON')\n) TO 'countries.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n"})})}),(0,r.jsx)(s.Z,{value:"azure",label:"Azure",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"COPY (\n    SELECT\n           type,\n           subType,\n           localityType,\n           adminLevel,\n           isoCountryCodeAlpha2,\n           JSON(names) AS names,\n           JSON(sources) AS sources,\n           ST_GeomFromWkb(geometry) AS geometry\n      FROM read_parquet('azure://release/2024-02-15-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\n     WHERE adminLevel = 2\n       AND ST_GeometryType(ST_GeomFromWkb(geometry)) IN ('POLYGON','MULTIPOLYGON')\n) TO 'countries.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7294),a=n(6905),o=n(2466),s=n(6550),l=n(469),i=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function S(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,y.jsx)(S,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(7294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);