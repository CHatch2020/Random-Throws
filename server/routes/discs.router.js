const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlText = `
  SELECT * FROM "discs"
JOIN "bags_discs"
ON "discs"."id"="bags_discs"."disc_id"
JOIN "bags"
ON "bags_discs"."bag_id"="bags"."id"
WHERE "user_id" = $1;
    `;
    // console.log(req.body);
    
  const sqlValues = [req.user.id];
  // console.log(sqlValues);
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      // console.log(dbRes.rows);
      // console.log("This is the bag id", req.body.bag_id);
      console.log("Is this undefined?", req);
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
});

router.get("/:id", rejectUnauthenticated, (req, res) => {
  const sqlText = `
  SELECT * FROM "discs"
WHERE "id" = $1;
    `;
  const sqlValues = [req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows[0]);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
});

router.post('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `
  INSERT INTO "discs" ("image", "disc_name", "speed", "glide", "turn", "fade", "stability")
  VALUES ( $1, $2, $3, $4, $5, $6, $7)
  RETURNING "id";
  `;
  const sqlValues = [req.body.img, req.body.name, req.body.speed, req.body.glide, req.body.turn, req.body.fade, req.body.stability,];

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      console.log('New Disc Id:', dbRes.rows[0]);
      const createdDiscId = dbRes.rows[0].id;

      const sqlTextTwo = `
      INSERT INTO "bags_discs" ("bag_id", "disc_id")
      VALUES ( $1, $2 );
      `;
      const sqlValuesTwo = [req.params.id, createdDiscId];
      pool.query(sqlTextTwo, sqlValuesTwo)
        .then((dbRes) => {
          res.sendStatus(201);
        })
        .catch((dbErr) => {
          res.sendStatus(500);
        })
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('The params', req.params);
  
  const sqlText = `
  DELETE FROM "discs"
  WHERE "id" = $1;
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `
  UPDATE "discs"
  SET
    "disc_name" = $1,
    "speed" = $2,
    "glide" = $3,
    "turn" = $4,
    "fade" = $5,
    "stability" = $6
  WHERE "id" = $7;
  `;

  const sqlValues = [
    req.body.disc_name,
    req.body.speed,
    req.body.glide,
    req.body.turn,
    req.body.fade,
    req.body.stability,
    req.params.id
  ];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    })
});

module.exports = router;
