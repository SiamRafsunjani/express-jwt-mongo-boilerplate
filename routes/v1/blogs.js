var express             = require('express');
var router              = express.Router();
var blog                = require('../../controllers/v1/blogs');

/*
    GET all blogs        v1/blogs
    GET single blog      v1/blogs/:id
    POST single blog     v1/blogs
    PUT single blog      v1/blogs/:id
    DELETE single blog   v1/blogs/:id
 */


router.get('/', blog.get_blogs);
router.get('/:id', blog.get_blog);
router.post('/', blog.post_blog);
router.put('/:id', blog.put_blog);
router.delete('/', blog.delete_blog);



module.exports = router;


