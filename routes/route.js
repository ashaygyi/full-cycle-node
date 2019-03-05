const express = require('express');
const router = express.Router();

const author_controller = require('../controllers/authorController');
const book_controller = require('../controllers/bookController');
const book_instance_controller = require('../controllers/bookInstanceController');
const genre_controller = require('../controllers/genreController');

//home
router.get('/', book_controller.index);

//for book
//get C
router.get('/book/create', book_controller.book_create_get);

//post C
router.post('/book/create', book_controller.book_create_post);

//get R all
router.get('/book', book_controller.book_list);

//get R one
router.get('/book/:id', book_controller.book_detail);

//get U
router.get('/book/:id/update', book_controller.book_update_get);

//post U
router.post('/book/:id/update', book_controller.book_update_post);

//get D
router.get('/book/:id/delete', book_controller.book_delete_get);

//post D
router.post('/book/:id/delete', book_controller.book_delete_post);



//for author
//get C
router.get('/author/create', author_controller.author_create_get);

//post C
router.post('/author/create', author_controller.author_create_post);

//get R all
router.get('/author', author_controller.author_list);

//get R one
router.get('/author/:id', author_controller.author_detail);

//get U
router.get('/author/:id/update', author_controller.author_update_get);

//post U
router.post('/author/:id/update', author_controller.author_update_post);

//get D
router.get('/author/:id/delete', author_controller.author_delete_get);

//post D
router.post('/author/:id/delete', author_controller.author_delete_post);



//for book instance
//get C
router.get('/bookinstance/create', book_instance_controller.book_instance_create_get);

//post C
router.post('/bookinstance/create', book_instance_controller.book_instance_create_post);

//get R all
router.get('/bookinstance', book_instance_controller.book_instance_list);

//get R one
router.get('/bookinstance/:id', book_instance_controller.book_instance_detail);

//get U
router.get('/bookinstance/:id/update', book_instance_controller.book_instance_update_get);

//post U
router.post('/bookinstance/:id/update', book_instance_controller.book_instance_update_post);

//get D
router.get('/bookinstance/:id/delete', book_instance_controller.book_instance_delete_get);

//post D
router.post('/bookinstance/:id/delete', book_instance_controller.book_instance_delete_post);



//for genre
//get C
router.get('/genre/create', genre_controller.genre_create_get);

//post C
router.post('/genre/create', genre_controller.genre_create_post);

//get R all
router.get('/genre', genre_controller.genre_list);

//get R one
router.get('/genre/:id', genre_controller.genre_detail);

//get U
router.get('/genre/:id/update', genre_controller.genre_update_get);

//post U
router.post('/genre/:id/update', genre_controller.genre_update_post);

//get D
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

//post D
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

module.exports = router;