# Migration `20201115231950-added-permissions-to-db`

This migration has been generated by Jesús Enrique Rascón at 11/16/2020, 12:19:50 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "User" ADD COLUMN     "permissionId" INTEGER

CREATE TABLE "Permission" (
"id" SERIAL,
    "type" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

ALTER TABLE "User" ADD FOREIGN KEY("permissionId")REFERENCES "Permission"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201115231134-adding-user-table..20201115231950-added-permissions-to-db
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,7 +13,11 @@
 model User {
   id Int @id @default (autoincrement())
   name String
   age Int
+  permission Permission? 
+}
-
+model Permission {
+  id Int @id @default (autoincrement())
+  type String
 }
```

