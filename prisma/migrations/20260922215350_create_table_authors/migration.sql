-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "biography" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "authors_name_key" ON "authors"("name");
