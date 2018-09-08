const usersController = require('../controllers').users;
const gamesController = require('../controllers').games;
const exercisesController = require('../controllers').exercises;
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = (app) => {

    app.get('/api/users', usersController.index);
    app.post('/api/users', usersController.create);
    app.get('/api/users/:userId', usersController.show);
    app.delete('/api/users/:userId', usersController.destroy);

    app.get('/api/users/:userId/games', gamesController.index);
    app.post('/api/games', gamesController.create);
    app.get('/api/games/:gameId', gamesController.show);
    app.delete('/api/games/:gameId', gamesController.destroy);

    app.get('/api/users/:userId/exercises', exercisesController.index);
    app.post('/api/exercises', exercisesController.create);
    app.get('/api/exercises/:exerciseId', exercisesController.show);
    app.delete('/api/exercises/:exerciseId', exercisesController.destroy);
};