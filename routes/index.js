var express = require('express');
var router = express.Router();

// Controller modules
const index_controller = require("../controllers/indexController");

/* GET home page. */
router.get("/", index_controller.home_get);

// GET all posts (published)
router.get("/posts", (req, res, next) => {
  res.json({message: "controller for GET ALL POSTS still under construction."});
});

// GET all unpublished drafts
router.get("/posts/unpublished", (req, res, next) => {
  res.json({message: "controller for GET ALL DRAFTS still under construction."});
});

// GET specific post
router.get("/post/:postid", (req, res, next) => {
  res.json({message: `controller for GET POST-ID#${req.params.postid} still under construction.`});
});

// PUT(edit) specific post including publish draft
router.put("/post/:postid", (req, res, next) => {
  res.json({message: `controller for EDIT POST-ID#${req.params.postid} still under construction.`});
});

// DELETE specific post
router.delete("/post/:postid", (req, res, next) => {
  res.json({message: `controller for DELETE POST-ID#${req.params.postid} still under construction.`});
});

// PUT comment
router.put("/comment/:commentid", (req, res, next) => {
  res.json({message: `controller for EDIT COMMENT-ID#${req.params.commentid} still under construction. `})
});

// DELETE comment
router.delete("/comment/:commentid", (req, res, next) => {
  res.json({message: `controller for DELETE COMMENT-ID#${req.params.commentid} still under construction. `})
});

module.exports = router;
