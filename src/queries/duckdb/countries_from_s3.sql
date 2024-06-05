LOAD spatial;
LOAD httpfs;
SET s3_region='us-west-2';

COPY (
    SELECT
        id,
        names.primary as country,
        ST_GeomFromWKB(geometry) as geometry
    FROM
        read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=divisions/type=division_area/*', filename=true, hive_partitioning=1)
    WHERE subtype = 'country'
 ) TO 'countries_overture.geojson'
WITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');
