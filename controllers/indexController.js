

// get the home page
exports.home_get = (req, res) => {
  res.json({message: "homepage reached"});
};

// get all published articles
exports.articles_get = (req, res) => {
  res.json({message: "controller for GET ALL ARTICLES still under construction."});
};

// get all drafts (unpublished articles)
exports.drafts_get = (req, res) => {
  res.json({message: "controller for GET ALL DRAFTS still under construction."});
};

// get a particular article, via id
exports.article_get = (req, res) => {
  res.json({message: `controller for GET POST-ID#${req.params.postid} still under construction.`});
};

// edit a particular article, via id
exports.article_put = (req, res) => {
  res.json({message: `controller for EDIT POST-ID#${req.params.postid} still under construction.`});
};

// delete a particular article, via id
exports.article_delete = (req, res) => {
  res.json({message: `controller for DELETE POST-ID#${req.params.postid} still under construction.`});
};

// edit a particular comment, via id
exports.comment_edit = (req, res) => {
  res.json({message: `controller for EDIT COMMENT-ID#${req.params.commentid} still under construction. `});
};

// delete a particular comment, via id
exports.comment_delete = (req, res) => {
  res.json({message: `controller for DELETE COMMENT-ID#${req.params.commentid} still under construction. `});
};

