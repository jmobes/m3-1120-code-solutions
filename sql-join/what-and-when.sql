SELECT
"releaseYear",
"categories"."name" AS "category",
"title"
FROM "films"
JOIN "filmCategory" USING ("filmId")
JOIN "categories" USING ("categoryId")
WHERE "title" = 'Boogie Amelie';
