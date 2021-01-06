SELECT "firstName", "lastName", "title"
FROM "actors"
JOIN "castMembers" USING ("actorId")
JOIN "films" USING ("filmId")
WHERE "title" = 'Jersey Sassy'
ORDER BY "lastName";
