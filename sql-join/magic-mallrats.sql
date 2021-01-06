SELECT "firstName", "lastName"
FROM "films"
JOIN "inventory" USING ("filmId")
JOIN "rentals" USING ("inventoryId")
JOIN "customers" USING ("customerId")
WHERE "title" = 'Magic Mallrats';
