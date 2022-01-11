const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/:course_id', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    SELECT * FROM "score"
    WHERE "course_id" = $1;
    `;
    const sqlValues = [req.params.course_id];
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            res.sendStatus(500);
        })
})

router.post('/:course_id/:hole_id', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    INSERT INTO "score" ("score", "hole_id", "course_id")
    VALUES
    ( $1, $2, $3);
    `;
    const sqlValues = [req.body.score, req.params.hole_id, req.params.course_id];
    console.log(sqlValues);
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            res.sendStatus(500);
        });
});

module.exports = router;