SELECT
  "customers"."firstName",
  "customers"."lastName",
  SUM("payments"."amount") AS "totalSpent"
FROM "customers"
JOIN "payments" USING ("customerId")
GROUP BY "customerId"
ORDER BY "totalSpent" DESC;
