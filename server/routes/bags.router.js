const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlText = `
    SELECT * FROM "bags"
    WHERE "user_id" = $1;
    `;
  const sqlValues = [req.user.id];
  console.log(sqlValues);
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      console.log(dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
});

router.get("/:id", rejectUnauthenticated, (req, res) => {
  const sqlText = `
  SELECT * FROM "discs"
JOIN "bags_discs"
ON "discs"."id"="bags_discs"."disc_id"
JOIN "bags"
ON "bags_discs"."bag_id"="bags"."id"
WHERE "user_id" = $1 AND "bags"."id" = $2;
    `;
  const sqlValues = [req.user.id, req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
});

module.exports = router;
