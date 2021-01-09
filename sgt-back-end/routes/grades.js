const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req,res) => {
  try {
    let grades = await db.query("SELECT * FROM grades");
    res.status(200).send(grades.rows);
  }
  catch(err) {
    console.error(err);
    res.status(500).send("An unexpected error occured");
  }
});

router.get("/:id", async (req,res) => {
  const grade_id = Number(req.params.id);
  if(!Number.isInteger(grade_id) || grade_id <= 0) {
    return res.status(400).send("id must be a positive integer");
  }

  try {
    let grade = await db.query(`SELECT * FROM grades WHERE "gradeId" = $1`, [grade_id]);
    if(!grade.rows[0]) res.status(404).send("Could not find grade with the given ID");
    res.status(200).send(grade.rows[0]);
  }
  catch(err) {
    console.error(err);
    res.status(500).send("An unexpected error occurred");
  }
});

router.post("/", async (req,res) => {
  let {name,course,score} = req.body;
  score = Number(score);
  if(!name || typeof name !== "string") {
    return res.status(400).send("Please include a valid name");
  }
  if(!course || typeof course !== "string") {
    return res.status(400).send("Please include a valid course");
  }
  if(typeof score !== "number" || score < 0) {
    return res.status(400).send("Please include a valid score");
  }

  try {
    const result = await db.query(`INSERT INTO grades (name,course,score) VALUES ($1,$2,$3) RETURNING *`, [name,course,score]);
    return res.status(201).send(result.rows[0]);
  }
  catch(err) {
    console.error(err);
    return res.status(500).send("An unexpected error occurred");
  }
});

router.put("/:id", async (req,res) => {
  const grade_id = Number(req.params.id);
  if(!Number.isInteger(grade_id) || grade_id < 0) return res.status(400).send("ID must be a postitive integer");

  let score = Number(req.body.score);
  if(typeof score !== "number"|| score < 0) return res.status(400).send("Please send a valid score");

  try {
    const update = await db.query(`UPDATE grades SET score = $1 WHERE "gradeId" = $2 RETURNING *`, [score, grade_id]);
    if(!update.rows[0]) return res.status(404).send("Could not find row with the given ID to update");

    return res.status(200).send(update.rows[0]);
  }
  catch(err) {
    console.error(err);
    return res.status(500).send("An unexpected error occurred")
  }
});

router.delete("/:id", async (req,res) => {
  const grade_id = Number(req.params.id);
  if(!Number.isInteger(grade_id) || grade_id < 0) return res.status(400).send("ID must be a positive integer");

  try {
    const deleted = await db.query(`DELETE FROM grades WHERE "gradeId" = $1 RETURNING *`, [grade_id]);
    if(!deleted.rows[0]) return res.status(404).send("Could not find row with the given ID to delete");

    return res.status(204);
  }
  catch(err) {
    console.error(err);
    return res.status(500).send("An unexpected error occurred");
  }
});

module.exports = router;
