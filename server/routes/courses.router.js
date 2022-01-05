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

router.post('/', rejectUnauthenticated, (req,res) => {
    console.log(req.body);
    const sqlTextMain = `
    INSERT INTO "selected_courses" ("course_name", "description", "par", "holes")
    VALUES ($1, $2, $3, $4)
    RETURNING "id";
    `;
    const sqlValues = [req.body.course_name, req.body.description, req.body.par, req.body.holes];
    pool.query(sqlTextMain, sqlValues)
        .then((dbRes) => {
            console.log('New Course Id:', dbRes.rows[0].id);
            const createdCourseId = dbRes.rows[0].id;

            const sqlTextTwo = `
            INSERT INTO "user_courses" ("user_id", "course_id")
            VALUES ($1, $2);
            `;
            const sqlValuesTwo = [createdCourseId, req.user.id];
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


module.exports = router;