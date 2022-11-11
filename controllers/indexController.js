


// 
exports.home_get = (req, res) => {
  res.json({message: "homepage reached"});
};

//
exports.name = (req, res) => {
  res.json({message: "controller for GET ALL POSTS still under construction."});
};

//
exports.name = (req, res) => {
  res.json({message: "controller for GET ALL DRAFTS still under construction."});
};

//
exports.name = (req, res) => {
  res.json({message: `controller for GET POST-ID#${req.params.postid} still under construction.`});
};

//
exports.name = (req, res) => {
  res.json({message: `controller for EDIT POST-ID#${req.params.postid} still under construction.`});
};

//
exports.name = (req, res) => {
  res.json({message: `controller for DELETE POST-ID#${req.params.postid} still under construction.`});
};

//
exports.name = (req, res) => {
  res.json({message: `controller for EDIT COMMENT-ID#${req.params.commentid} still under construction. `});
};

//
exports.name = (req, res) => {
  res.json({message: `controller for DELETE COMMENT-ID#${req.params.commentid} still under construction. `});
};

