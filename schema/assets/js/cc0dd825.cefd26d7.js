"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[766],{4759:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>j,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>x});var n=a(4848),t=a(8453),l=a(1432),s=a(7595),i=a.n(s),o=a(6770),c=a(8285);const d='---\r\n"$schema": https://json-schema.org/draft/2020-12/schema\r\ntitle: locality_area\r\ndescription: >-\r\n  Adds land or maritime area polygon to locality.\r\ntype: object\r\nproperties:\r\n  id:\r\n    "$ref": ../defs.yaml#/$defs/propertyDefinitions/id\r\n  geometry:\r\n    unevaluatedProperties: false\r\n    oneOf:\r\n      - "$ref": https://geojson.org/schema/Polygon.json\r\n      - "$ref": https://geojson.org/schema/MultiPolygon.json\r\n  properties:\r\n    unevaluatedProperties: false\r\n    required: [locality_id]\r\n    allOf:\r\n      - "$ref": ../defs.yaml#/$defs/propertyContainers/overtureFeaturePropertiesContainer\r\n    properties:\r\n      locality_id:\r\n        description: References specific feature of locality type\r\n        type: string\r\n';var h=a(1470),p=a(9365);const y="---\ntype: Feature\ngeometry:\n  type: MultiPolygon\n  coordinates:\n  - - - - -61.8743292\n        - 48.8068635\n      - - -78.4016703\n        - 26.273714\n      - - -120.7749598\n        - 32.2499745\n      - - -126.928757\n        - 49.0378679\n      - - -61.8743292\n        - 48.8068635\nproperties:\n  theme: admins\n  type: locality_area\n  update_time: '2023-02-22T23:55:01-08:00'\n  version: 0\n  locality_id: unitedStates\n",m={title:"locality_area"},u="Locality Area",f={id:"reference/admins/locality_area",title:"locality_area",description:"Adds land or maritime area polygon to locality.",source:"@site/docs/reference/admins/locality_area.mdx",sourceDirName:"reference/admins",slug:"/reference/admins/locality_area",permalink:"/schema/reference/admins/locality_area",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"locality_area"},sidebar:"docs",previous:{title:"locality",permalink:"/schema/reference/admins/locality"},next:{title:"infrastructure",permalink:"/schema/reference/base/infrastructure"}},j={},x=[{value:"Schema",id:"schema",level:2},{value:"Examples",id:"examples",level:2}];function g(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"locality-area",children:"Locality Area"}),"\n",(0,n.jsx)(r.p,{children:"Adds land or maritime area polygon to locality."}),"\n",(0,n.jsxs)(r.p,{children:["Property ",(0,n.jsx)(r.code,{children:"locality_id"})," points at ",(0,n.jsx)(r.a,{href:"locality",children:"locality"})," feature that this\narea belongs to."]}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Geometry Type"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"Polygon"})," or ",(0,n.jsx)("code",{children:"MultiPolygon"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Theme"}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"admins"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"locality_area"})})]})]})}),"\n",(0,n.jsx)(r.h2,{id:"schema",children:"Schema"}),"\n",(0,n.jsxs)(h.default,{children:[(0,n.jsx)(p.default,{value:"browsable",label:"Browsable",default:!0,children:(0,n.jsx)(i(),{schema:(0,c.A)(d),resolverOptions:(0,o.A)({remote:!0,yamlBasePath:"/admins"})})}),(0,n.jsx)(p.default,{value:"yaml",label:"YAML",default:!0,children:(0,n.jsx)(l.default,{language:"jsx",children:d})})]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(h.default,{children:(0,n.jsx)(p.default,{value:"locality_area",label:"Locality Area",default:!0,children:(0,n.jsx)(l.default,{language:"json",children:JSON.stringify((0,c.A)(y),null,2)})})})]})}function v(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);