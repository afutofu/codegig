const express = require("express");
const router = express.Router();
const db = require("../config/database");

const Gig = require("../models/Gig");

// Get gig list
router.get("/", (req, res) => {
  Gig.findAll()
    .then((gigs) => {
      res.render("gigs", {
        gigs,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Display add gig form
router.get("/add", (req, res) => {
  res.render("add");
});

// Add a gig
router.post("/add", (req, res) => {
  const data = {
    title: "Simple Wordpress website",
    technologies: "wordpress,php,html,css",
    budget: "$3000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo at urna molestie vulputate. Aenean justo leo, pretium a efficitur tempus, sodales ac libero. Vivamus varius, libero finibus eleifend gravida, elit quam luctus massa, id ornare odio lectus eget neque.",
    contact_email: "user2@gmail.com",
  };

  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((gig) => {
      res.redirect("/gigs");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
