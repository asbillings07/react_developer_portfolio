const express = require("express");
const router = express.Router();
const { data } = require("../data.json");
const { projects } = data;

router.get("/project/:id", (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  const title = project.project_name;
  const desc = project.description;
  const skills = project.technologies;
  const link = project.live_link;
  const github = project.github_link;
  const imgs = project.image_urls;
  const templateData = { title, desc, skills, link, github, imgs };

  res.render("project", templateData);
});

router.get("/project", (req, res) => {
  res.redirect("/");
});

module.exports = router;
