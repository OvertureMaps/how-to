LOAD spatial;
LOAD azure;
SET azure_storage_connection_string = 'DefaultEndpointsProtocol=https;AccountName=overturemapswestus2;AccountKey=;EndpointSuffix=core.windows.net';

COPY (
    SELECT
        id,
        names.primary as country,
        ST_GeomFromWKB(geometry) as geometry
    FROM
        read_parquet('azure://release/__OVERTURE_RELEASE/theme=divisions/type=division_area/*', filename=true, hive_partitioning=1)
    WHERE
        subtype = 'country'
 ) TO 'country_polygons.geojson'
WITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');
