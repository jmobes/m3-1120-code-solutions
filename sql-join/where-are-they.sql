SELECT
"addresses"."line1" AS "street",
"cities"."name" AS "city",
"district",
"countries"."name" AS "country"
FROM "addresses"
JOIN "cities" USING ("cityId")
JOIN "countries" USING ("countryId");
