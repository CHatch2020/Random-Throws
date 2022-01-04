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

module.exports = router;
