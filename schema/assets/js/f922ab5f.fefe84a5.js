"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[984],{3729:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>f,default:()=>x,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var t=r(4848),a=r(8453),s=r(1432),i=r(7595),o=r.n(i),l=r(6770),c=r(8285);const d='---\n"$schema": https://json-schema.org/draft/2020-12/schema\ntitle: Infrastructure Schema\ndescription: Various features from OpenStreetMap such as bridges, airport runways, aerialways, or communication towers and lines.\ntype: object\nproperties:\n  id:\n    "$ref": ../defs.yaml#/$defs/propertyDefinitions/id\n  geometry:\n    unevaluatedProperties: false\n    oneOf:\n      - "$ref": https://geojson.org/schema/Point.json\n      - "$ref": https://geojson.org/schema/LineString.json\n      - "$ref": https://geojson.org/schema/Polygon.json\n      - "$ref": https://geojson.org/schema/MultiPolygon.json\n  properties:\n    unevaluatedProperties: false\n    allOf:\n      - "$ref": ../defs.yaml#/$defs/propertyContainers/overtureFeaturePropertiesContainer\n      - "$ref": ../defs.yaml#/$defs/propertyContainers/namesContainer\n      - "$ref": ../defs.yaml#/$defs/propertyContainers/levelContainer\n      - "$ref": ./defs.yaml#/$defs/propertyContainers/osmPropertiesContainer\n    required:\n      - subtype\n      - class\n    properties:\n      subtype:\n        description: Further description of the type of infrastructure.\n        type: string\n        enum:\n          - aerialway\n          - airport\n          - bridge\n          - communication\n          - dam\n          - manhole\n          - pier\n          - power\n          - tower\n          - transit\n      class:\n        description: Further classification of the infrastructure type\n        type: string\n        enum:\n          - aerialway_station\n          - airport\n          - airstrip\n          - aqueduct\n          - bell_tower\n          - boardwalk\n          - bridge\n          - bus_route\n          - bus_station\n          - bus_stop\n          - cable\n          - cable_car\n          - cable_distribution\n          - cantilever\n          - catenary_mast\n          - chair_lift\n          - communication_line\n          - communication_pole\n          - communication_tower\n          - connection\n          - cooling\n          - covered\n          - dam\n          - defensive\n          - diving\n          - drag_lift\n          - drain\n          - ferry_terminal\n          - generator\n          - gondola\n          - heliostat\n          - helipad\n          - hose\n          - insulator\n          - international_airport\n          - lighting\n          - lightning_protection\n          - manhole\n          - military_airport\n          - minaret\n          - minor_line\n          - mobile_phone_tower\n          - monitoring\n          - movable\n          - observation\n          - pier\n          - plant\n          - portal\n          - power_line\n          - power_pole\n          - power_tower\n          - private_airport\n          - radar\n          - railway_halt\n          - railway_station\n          - regional_airport\n          - runway\n          - sewer\n          - siren\n          - sub_station\n          - substation\n          - switch\n          - t-bar\n          - taxiway\n          - terminal\n          - transformer\n          - trestle\n          - viaduct\n          - watchtower\n',u='---\nid: 08b2748cc1383fff0001b38438099b73\ntype: Feature\ngeometry:\n  type: Polygon\n  coordinates: [[[-85.6743541,42.9676009],[-85.6743623,42.9674649],[-85.6744114,42.9674803],[-85.6744559,42.9674919],[-85.6745302,42.9675058],[-85.6746036,42.9675151],[-85.6746959,42.9675171],[-85.675835,42.9674967],[-85.6758985,42.9674915],[-85.6759656,42.967483],[-85.6760399,42.9674711],[-85.676099,42.9674566],[-85.6761817,42.9674324],[-85.676227,42.9674184],[-85.6762149,42.9675911],[-85.6761726,42.9675857],[-85.676106,42.9675781],[-85.6760499,42.9675741],[-85.6759947,42.9675723],[-85.6743541,42.9676009]]]\nproperties:\n  theme: base\n  type: infrastructure\n  subtype: bridge\n  class: bridge\n  names:\n    primary: Gillett Bridge\n    rules:\n      - variant: alternate\n        value: Interurban Bridge\n  sources:\n    - property: ""\n      record_id: w556368546@3\n      dataset: OpenStreetMap\n  version: 0\n  update_time: "2023-02-11T20:22:34.000Z"\n';var p=r(1470),h=r(9365);const m={title:"infrastructure"},f="Infrastructure",y={id:"reference/base/infrastructure",title:"infrastructure",description:"Features in the infrastructure type come from OpenStreetMap features with tags like aeroway, communication, bridge, man_made, or tower. These features include bridges, aerialways, and airports.",source:"@site/docs/reference/base/infrastructure.mdx",sourceDirName:"reference/base",slug:"/reference/base/infrastructure",permalink:"/schema/reference/base/infrastructure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"infrastructure"},sidebar:"docs",previous:{title:"locality_area",permalink:"/schema/reference/admins/locality_area"},next:{title:"land",permalink:"/schema/reference/base/land"}},b={},g=[{value:"Schema",id:"schema",level:2},{value:"Examples",id:"examples",level:2}];function j(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,t.jsxs)(n.p,{children:["Features in the infrastructure type come from OpenStreetMap features with tags like ",(0,t.jsx)(n.code,{children:"aeroway"}),", ",(0,t.jsx)(n.code,{children:"communication"}),", ",(0,t.jsx)(n.code,{children:"bridge"}),", ",(0,t.jsx)(n.code,{children:"man_made"}),", or ",(0,t.jsx)(n.code,{children:"tower"}),". These features include bridges, aerialways, and airports."]}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Geometry Type"}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("code",{children:"Point"}),", ",(0,t.jsx)("code",{children:"LineString"}),", ",(0,t.jsx)("code",{children:"Polygon"}),", or ",(0,t.jsx)("code",{children:"MultiPolygon"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Theme"}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"base"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Type"}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"infrastructure"})})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,t.jsxs)(p.default,{children:[(0,t.jsx)(h.default,{value:"browsable",label:"Browsable",default:!0,children:(0,t.jsx)(o(),{schema:(0,c.A)(d),resolverOptions:(0,l.A)({remote:!0,yamlBasePath:"/base"})})}),(0,t.jsx)(h.default,{value:"yaml",label:"YAML",default:!0,children:(0,t.jsx)(s.default,{language:"jsx",children:d})})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(p.default,{children:(0,t.jsx)(h.default,{value:"1",label:"Infrastructure Example",default:!0,children:(0,t.jsx)(s.default,{language:"json",children:JSON.stringify((0,c.A)(u),null,2)})})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}}}]);