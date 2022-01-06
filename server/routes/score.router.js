const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

router.post('/:id/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    INSERT INTO "score" ("score", "hole_id", "course_id")
    VALUES
    ( $1, $2, $3);
    `;
    const sqlValues = [req.body.score, req.params.currentHole, req.params.currentCourse];
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            res.sendStatus(500);
        });
});

module.exports = router;