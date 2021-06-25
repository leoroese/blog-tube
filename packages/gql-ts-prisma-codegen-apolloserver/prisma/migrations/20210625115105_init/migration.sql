-- CreateTable
CREATE TABLE "Book" (
    "bookId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "Author" (
    "authorId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    PRIMARY KEY ("authorId")
);

-- AddForeignKey
ALTER TABLE "Book" ADD FOREIGN KEY ("authorId") REFERENCES "Author"("authorId") ON DELETE CASCADE ON UPDATE CASCADE;
