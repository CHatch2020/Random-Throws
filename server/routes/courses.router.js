const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', rejectUnauthenticated, (req,res) => {
    const sqlText = `
    SELECT * FROM "courses";
    `;
    pool.query(sqlText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            res.sendStatus(500);
        })
});

module.exports = router;