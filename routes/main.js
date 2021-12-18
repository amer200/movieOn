var express = require('express');
var router = express.Router();
const mainController = require('../controller/main')

router.get('/allbogs', mainController.getAllBlogs); // return array of blogs
router.get('/blog/:bId', mainController.getBlog) // return one blog
router.post('/addcomment', mainController.addComment) // return object of the comment need  name: string blogId: string comment: String

module.exports = router;
