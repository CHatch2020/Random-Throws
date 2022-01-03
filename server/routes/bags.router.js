const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    SELECT * FROM "bags"
    WHERE "user_id" = $1;
    `;
    const sqlValues = [req.user.id];
    console.log(sqlValues);
    
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            console.log(dbRes.rows);
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            res.sendStatus(500);
        })
})

module.exports = router;
