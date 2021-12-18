const Blog = require('../model/blog');
exports.getAllBlogs = (req, res, next) => {
    Blog.find()
        .then(b => {
            if (b.length <= 0) {
                return res.status(200).send(JSON.stringify({
                    "result": "no blogs founded"
                }))
            }
            res.status(200).send(JSON.stringify({
                "result": b
            }))
        })
        .catch(err => {
            serverError(err)
        })
}
exports.getBlog = (req, res, next) => {
    const bId = req.params.bId;
    Blog.findById(bId)
        .then(b => {
            if (!b) {
                return res.status(401).send(JSON.stringify({
                    "result": "no blog found"
                }))
            }
            res.status(200).send(JSON.stringify({
                "reslt": b
            }))
        })
        .catch( err =>{
            console.log(err)
        })
}
exports.addComment = (req, res, next) =>{
    const bId = req.body.blogId;
    const comment = req.body.comment;
    const name = req.body.name;
    Blog.findById(bId)
        .then(b =>{
            const newComment ={
                name: name,
                comment: comment,
                date: Date.now()
            };
            b.comments.push(newComment);
            res.status(200).send(JSON.stringify({
                "result": newComment
            }))
        })
        .catch(err =>{
            serverError(err)
        })
}

/********************************************************** */
function serverError(err){
    res.status(500).send(JSON.stringify({
        "result": err
    }))
}