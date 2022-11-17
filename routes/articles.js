const express = require('express');
const router = express.Router();

const {getAllArticles, getArticleById, likedArticleById, changeArticleById, commentArticleById, storeArticle, deleteArticleById, deleteAllArticle} = require('./../controllers/c_articles')
// const {checkJWT} = require('./../controllers/validasi')

router.get("/", getAllArticles);
router.get("/:id", getArticleById);

// router.use(checkJWT);
router.put("/:id/like", likedArticleById);
router.put("/:id", changeArticleById);
router.post("/:id/comment", commentArticleById);
router.post("/", storeArticle);
router.delete("/:id", deleteArticleById);
router.delete("/", deleteAllArticle);

module.exports = router;