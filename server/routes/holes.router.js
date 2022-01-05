const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req,res) => {
    const sqlText = `
    SELECT * FROM "holes"
    WHERE "course_id" = $1
    ORDER BY "hole_number" ASC;
    `;
    const sqlValues = [req.params.id];
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            res.sendStatus(500);
        })
});

module.exports = router;