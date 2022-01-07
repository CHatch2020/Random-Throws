
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (100) NOT NULL,
	"password" VARCHAR (100) NOT NULL
);

CREATE TABLE "courses" (
	"id" SERIAL PRIMARY KEY,
	"course_name" VARCHAR (100) NOT NULL,
	"description" VARCHAR (350) NOT NULL,
	"par" INT NOT NULL,
	"holes" INT NOT NULL
	);
	
CREATE TABLE "bags" (
 "id" SERIAL PRIMARY KEY,
 "bag_name" VARCHAR (50) NOT NULL,
 "user_id" INT REFERENCES "user"
);

Create TABLE "discs" (
 "id" SERIAL PRIMARY KEY,
 "image" VARCHAR (200),
 "disc_name" VARCHAR (80) NOT NULL,
 "speed" INT NOT NULL,
 "glide" INT NOT NULL,
 "turn" INT NOT NULL,
 "fade" INT NOT NULL,
 "stability" VARCHAR (80)
);

CREATE TABLE "bags_discs" (
 "id" SERIAL PRIMARY KEY,
 "bag_id" INT REFERENCES "bags",
 "disc_id" INT REFERENCES "discs"
);

CREATE TABLE "user_courses" (
 "id" SERIAL PRIMARY KEY,
 "user_id" INT REFERENCES "user",
 "course_id" INT REFERENCES "courses"
);

CREATE TABLE "selected_courses" (
 "id" SERIAL PRIMARY KEY,
	"course_name" VARCHAR (100) NOT NULL,
	"description" VARCHAR (350) NOT NULL,
	"par" INT NOT NULL,
	"holes" INT NOT NULL
);

CREATE TABLE "holes" (
 "id" SERIAL PRIMARY KEY,
 "hole_number" INT NOT NULL,
 "par" INT NOT NULL,
 "distance" INT NOT NULL,
 "course_id" INT REFERENCES "courses"
);

CREATE TABLE "score" (
 "id" SERIAL PRIMARY KEY,
 "score" INT NOT NULL,
 "hole_id" INT REFERENCES "holes",
 "course_id" INT REFERENCES "courses"
);

INSERT INTO "bags" ("bag_name", "user_id")
VALUES 
('First', 1),
('Second', 1);

INSERT INTO "discs" ("image", "disc_name", "speed", "glide", "turn", "fade", "stability")
VALUES 
('images/firebird.jpeg', 'Champion Firebird', 7, 5, 0, 2, 'Overstable'),
('images/Halo-Destroyer.jpeg', 'Halo Destroyer', 12, 5, -1, 3, 'Overstable'),
('images/rhyno.jpeg', 'Pro Rhyno', 2, 1, 0, 3, 'Overstable'),
('images/rocx3.jpeg', 'Glow Champion RocX3', 5, 4, 0, 3.5, 'Stable'),
('images/teebird.jpeg', 'Metal Flake Teebird', 7, 5, 0, 2, 'Understable'),
('images/tl3.jpeg', 'Champion TL3', 8, 4, -1, 1, 'Stable');

INSERT INTO "bags_discs" ("bag_id", "disc_id")
VALUES 
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6);

INSERT INTO "courses" ("course_name", "description", "par", "holes")
VALUES
('Blue Ribbon Pines', 'Open / wooded with ponds, doglegs, plently of risks, and signature holes, 100 ft. tall pines, Pro Shop on site, concrete/turf tees', 87, 27),
('Harder Park', 'Open / wooded with elevation changes, and two elevated baskets, plently of different lines, many ace run holes, cement tees', 66, 21),
('Ham Lake Park', 'Tight / wooded with mix of short, technical, and medium holes, goes around baseball diamonds, asphalt tees', 57, 18),
('Vision Quest', 'Wooded / plently of water, well-kept, technical shots required, turf tees', 59, 18);

INSERT INTO "user_courses" ("user_id", "course_id")
VALUES
(1,1),
(1,2),
(1,3),
(1,4);

INSERT INTO "score" ("score", "hole_id", "course_id")
VALUES
();

INSERT INTO "user" ("username", "password")
VALUES
();


SELECT * FROM "discs"
JOIN "bags_discs"
ON "discs"."id"="bags_discs"."disc_id"
JOIN "bags"
ON "bags_discs"."bag_id"="bags"."id"
WHERE "bags"."id" = 1;

SELECT * FROM "bags"
JOIN "bags_discs"
ON "bags"."id"="bags_discs"."bag_id"
JOIN "discs"
ON "bags_discs"."disc_id"="discs"."id"
WHERE "bags"."id" = 1;

SELECT * FROM "courses";

SELECT * FROM "holes"
WHERE "course_id" = 1;


SELECT * FROM "bags"
    WHERE "user_id" = req.user.id;
