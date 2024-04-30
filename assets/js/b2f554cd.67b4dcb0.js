"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/04/22/beta-release","metadata":{"permalink":"/blog/2024/04/22/beta-release","source":"@site/blog/2024-04-22-beta-release.mdx","title":"Exploring our beta release","description":"Highlights from Overture Maps beta release","date":"2024-04-22T00:00:00.000Z","formattedDate":"April 22, 2024","tags":[],"readingTime":3.485,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Exploring our beta release","description":"Highlights from Overture Maps beta release"},"unlisted":false,"nextItem":{"title":"Welcome!","permalink":"/blog/2024/04/21/welcome"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\nLast week Overture Maps [announced the beta release](https://overturemaps.org/overture-maps-foundation-releases-beta-of-its-first-open-map-dataset/) of our schema and data. After months of hard work and steady improvements, we are nearing production-level stability. In a series of posts over the next few weeks -- starting with this one -- we\u2019ll unpack the highlights and improvements you\'ll see in this release and beyond. \\n\\n## Making geospatial fast\\nThe first thing you\'ll notice is how much faster you can [pull Overture Maps data out of the cloud](https://docs.overturemaps.org/getting-data/locally/). We made this possible by working closely with open-source collaborators on the repartitioning and [spatial optimization](https://cloudnativegeo.org/blog/2024/03/coming-soon-geoparquet-1.1/) of our GeoParquet files. Meanwhile, our friends at DuckDB, one of our favorite SQL tools, [added a feature](https://github.com/duckdb/duckdb/pull/10314) that improves the performance of queries with bounding boxes.\\n\\n<details>\\n\\n<summary>Query speeds have improved significantly from our February release to the April beta release. This example compares DuckDB queries for buildings in Philadelphia. [See here for more information about our performance testing](https://github.com/opengeospatial/geoparquet/discussions/188#discussioncomment-8909348).</summary>\\n\\n    <Tabs>\\n        <TabItem value=\\"february\\" label=\\"2024-02-15-alpha.0 release\\" default>\\n            ```\\n            SELECT \\n            *\\n            FROM \\n                read_parquet(\'s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=buildings/type=building/*\', filename=true, hive_partitioning=1)\\n            WHERE \\n                bbox.minx > -75.60154\\n                AND bbox.maxx < -74.955763\\n                AND bbox.miny > 39.867004\\n                AND bbox.maxy < 40.137992;\\n            ```\\n            820,915 buildings   \\n            ~120s\\n        </TabItem>\\n\\n    \\n        <TabItem value=\\"april\\" label=\\"2024-04-16-beta.0 release\\" default>\\n            ```\\n            SELECT \\n            *\\n            FROM   \\n                read_parquet(\'s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=buildings/type=building/*\', filename=true, hive_partitioning=1)\\n            WHERE \\n                bbox.xmin > -75.60154\\n                AND bbox.xmax < -74.955763\\n                AND bbox.ymin > 39.867004\\n                AND bbox.ymax < 40.137992\\n            ```\\n            852,487 buildings    \\n            ~25s\\n        </TabItem>\\n    </Tabs>\\n</details>\\n\\nWe\'re continuing to make things faster and easier for users. Along with the folks at Development Seed, an [Overture Maps Foundation member](https://overturemaps.org/about/members/), we\'re [building special tools for Overture Maps data on top of lonboard](https://developmentseed.org/lonboard/latest/examples/overture-maps/), their Python library for visualizing large geospatial datasets in Jupyter. And recently our friends at Wherobots [took a comprehensive look](https://wherobots.com/overture-maps-data-cloud-native-geoparquet-apache-sedona/) at how our use of GeoParquet makes querying and analyzing our data with Apache Sedona very efficient. \\n\\nAs you can see, we\'re moving forward with the community to iterate on data, software, and specifications with the shared goal of making geospatial **_fast_**.\\n\\n## Easier-to-use schema\\nAnother highlight of the beta release is the transition to an easier-to-use schema for our administrative boundary data. We first [explored this idea](https://github.com/OvertureMaps/schema/discussions/117) with the Overture Maps community in February, and after two short months of work, the [new divisions schema and data](https://docs.overturemaps.org/guides/divisions/) are ready to go. Here\'s a query to `divisions` that grabs geometries for all the countries in the world:\\n\\n```\\nSELECT *\\n   FROM read_parquet(\'s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=divisions/type=division_area/*\', filename=true, hive_partitioning=1)\\nWHERE subtype = \'country\';\\n```\\n \\n You can see that the `divisions` query above is much simpler than a comparable query to `admins`:\\n\\n\\n```\\nWITH admins AS (\\n    SELECT *\\n    FROM read_parquet(\'s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=admins/type=*/*\', filename=true, hive_partitioning=1)\\n  )\\n\\n  SELECT *\\n    FROM admins country_locality\\n    JOIN admins country_area\\n      ON country_area.locality_id = country_locality.id\\n   WHERE country_locality.locality_type = \'country\';\\n\\n```    \\n\\nWe plan to [deprecate admins](https://docs.overturemaps.org/release-notes/) by the July release. In the meantime, both `admins` and `divisions` will be available to users. \\n\\n## Bridges, islands, waterfalls, and more!\\nWe added more rich detail to our `base` layer in this release, including an `infrastructure` type with familiar features from [Facebook\u2019s Daylight map distribution](https://daylightmap.org/). We also added new subtypes and classes for the `land`, `land_use`, and `water` feature types. We listed a few of the new features below, with icons from the [Noun Project](https://thenounproject.com/) just for fun. You\'ll find a comprehensive listing of the subtypes and classes for each feature type in our [schema reference docs](https://docs.overturemaps.org/schema/reference/base/infrastructure). Ready to make your own map? We have a [tutorial to help you get started](https://docs.overturemaps.org/examples/build-a-map/#13/47.6/-122.33/0/45).\\n\\n| `infrastructure`| |\\n| ----- | ----- |\\n| `bridge` | ![bridge](/img/blog/bridges.png) |\\n| `power_line` | ![power lines](/img/blog/power-lines.png) |\\n| `aerialway` | ![cable car](/img/blog/cable-car.png) |\\n\\n| `land`|          |\\n| ----- | ----- |\\n| `desert` | ![desert](/img/blog/desert.png) |\\n| `mountain_range` | ![mountain range](/img/blog/mountain-range.png) |\\n| `plateau` | ![plateau](/img/blog/plateau.png) |\\n\\n\\n| `land_use`|      |\\n| ----- | ----- |\\n| `beach_resort`| ![beach resort](/img/blog/beach-resort.png) |\\n| `graveyard` | ![graveyard](/img/blog/graveyard.png) |\\n\\n\\n| `water`|        |\\n| ----- | ----- |\\n| `blowhole` | ![blowhole](/img/blog/blowhole.png) |\\n| `waterfall` | ![waterfall](/img/blog/waterfall.png) |\\n\\n \\n## Stay tuned for more highlights\\nWe\'ll be back next week with more posts that explore our path from the beta release to production. In the meantime, we invite you to [get started with our data](https://docs.overturemaps.org/getting-data/) and share with us your [comments and feedback](https://github.com/OvertureMaps/data/discussions)."},{"id":"/2024/04/21/welcome","metadata":{"permalink":"/blog/2024/04/21/welcome","source":"@site/blog/2024-04-21-welcome.mdx","title":"Welcome!","description":"Welcome to the Overture Maps engineering blog! We\'re excited to tell the technical stories behind this big, exciting, ambitious, intensely collaborative project we\u2019ve been working on for more than a year. The engineers building Overture Maps are eager to connect with our developer community. In the posts we publish in the coming months, you\u2019ll hear from team members who work at Amazon, Meta, Microsoft, TomTom, Esri, Development Seed, Precisely, and more. And we\u2019d like to hear from you: feedback and contributions from folks working with our data and schema are crucial to our success. Thanks for joining us on this journey. We\u2019re glad you\u2019re here.","date":"2024-04-21T00:00:00.000Z","formattedDate":"April 21, 2024","tags":[],"readingTime":0.525,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Welcome!"},"unlisted":false,"prevItem":{"title":"Exploring our beta release","permalink":"/blog/2024/04/22/beta-release"}},"content":"Welcome to the Overture Maps engineering blog! We\'re excited to tell the technical stories behind this big, exciting, ambitious, intensely collaborative project we\u2019ve been [working on for more than a year](https://overturemaps.org/looking-forward-to-2024/). The engineers building Overture Maps are eager to connect with our developer community. In the posts we publish in the coming months, you\u2019ll hear from team members who work at Amazon, Meta, Microsoft, TomTom, Esri, Development Seed, Precisely, and more. And we\u2019d like to hear from you: [feedback and contributions](https://github.com/OvertureMaps/data/discussions) from folks working with our data and schema are crucial to our success. Thanks for joining us on this journey. We\u2019re glad you\u2019re here."}]}')}}]);