SELECT
"stores"."storeId",
COUNT("inventory"."inventoryId") AS "totalDvds"
FROM "stores"
JOIN "inventory" USING ("storeId")
GROUP BY "stores"."storeId"
ORDER BY "stores"."storeId";
