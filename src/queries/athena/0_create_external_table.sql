CREATE EXTERNAL TABLE `overture` (
  `id` string,
  `geometry` binary,
  `bbox` struct<minx:double,maxx:double,miny:double,maxy:double>,
  `subtype` string,
  `localitytype` string,
  `names` struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,value:string,at:array<double>,side:string>>>,
  `contextid` string,
  `adminlevel` int,
  `isocountrycodealpha2` string,
  `isosubcountrycode` string,
  `defaultlanguage` string,
  `drivingside` string,
  `version` int,
  `updatetime` string,
  `sources` array<struct<property:string,dataset:string,recordId:string,confidence:double>>,
  `ismaritime` boolean,
  `geopoldisplay` string,
  `localityid` string,
  `class` string,
  `sourcetags` map<string,string>,
  `wikidata` string,
  `surface` string,
  `elevation` int,
  `issalt` boolean,
  `isintermittent` boolean,
  `hasparts` boolean,
  `height` double,
  `numfloors` int,
  `facadecolor` string,
  `facadematerial` string,
  `roofmaterial` string,
  `roofshape` string,
  `roofdirection` double,
  `rooforientation` string,
  `roofcolor` string,
  `eaveheight` double,
  `level` int,
  `minheight` double,
  `buildingid` string,
  `categories` struct<main:string,alternate:array<string>>,
  `confidence` double,
  `websites` array<string>,
  `socials` array<string>,
  `emails` array<string>,
  `phones` array<string>,
  `brand` struct<names:struct<common:array<struct<value:string,language:string>>,official:array<struct<value:string,language:string>>,alternate:array<struct<value:string,language:string>>,short:array<struct<value:string,language:string>>>,wikidata:string>,
  `addresses` array<struct<freeform:string,locality:string,postcode:string,region:string,country:string>>,
  `connectors` array<string>,
  `road` string)
PARTITIONED BY (
  `theme` string,
  `type` string)
STORED AS PARQUET
LOCATION
  's3://overturemaps-us-west-2/release/__OVERTURE_RELEASE'