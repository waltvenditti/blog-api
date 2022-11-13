var express = require('express');
var router = express.Router();

// Controller modules
const index_controller = require("../controllers/indexController");

/* GET home page. */
router.get("/", index_controller.home_get);

// GET all posts (published)
router.get("/articles", index_controller.articles_get);

// GET all unpublished drafts
router.get("/drafts", index_controller.drafts_get);

// GET specific post
router.get("/article/:articleid", index_controller.article_get);

// PUT(edit) specific post including publish draft
router.put("/article/:articleid", index_controller.article_put);

// DELETE specific post
router.delete("/article/:articleid", index_controller.article_delete);

// PUT comment
router.put("/comment/:commentid", index_controller.comment_edit);

// DELETE comment
router.delete("/comment/:commentid", index_controller.comment_delete);

module.exports = router;
