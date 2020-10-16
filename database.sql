CREATE TABLE "toDoList"(
	"id" SERIAL PRIMARY KEY,
	"itemToDo" varchar(200) NOT NULL,
	"done" BOOLEAN DEFAULT FALSE
);

INSERT INTO "toDoList"("itemToDo")
VALUES('finish weekend assignment'),
('test these queries to make sure they work in SQL');


INSERT INTO "toDoList"("itemToDo", "done")
VALUES('is this working', true);