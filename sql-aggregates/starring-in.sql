SELECT
"categories"."name" AS "category",
COUNT("categories"."name") AS "starringCount"
FROM "categories"
JOIN "filmCategory" USING ("categoryId")
JOIN "castMembers" USING ("filmId")
JOIN "actors" USING ("actorId")
WHERE "actors"."firstName" = 'Lisa'
AND "actors"."lastName" = 'Monroe'
GROUP BY "categories"."name"
ORDER BY "categories"."name";
