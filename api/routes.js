const path = require('path');

const express = require('express');

const router = express.Router();

router.post('/cv/add', null);

router.get('/cv/:id', null);

router.get('/user/:userId/cvs', null);

router.put('/cv/:id/edit', null);

router.delete('/cv/:id/delete', null);

router.delete('/cv/:id/download', null);

router.post('/user/:userId/signin', null);

router.post('/user/:userId/signup', null);

module.exports = router;