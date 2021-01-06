SELECT
"countries"."name" AS "country",
COUNT("cities"."cityId") AS "numCities"
FROM "countries"
JOIN "cities" USING ("countryId")
GROUP BY "countries"."countryId"
ORDER BY "countries"."name";
