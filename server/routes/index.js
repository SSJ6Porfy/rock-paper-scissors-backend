const usersController = require('../controllers').users;
const gamesController = require('../controllers').games;
const exercisesController = require('../controllers').exercises;
const passport = require('passport');
var express = require('express');

const authenticate = passport.authenticate('jwt', { session: false });


module.exports = (app) => {

    // Oauth Verification Routes
    app.post('/oauth/google', passport.authenticate('googleToken', { session: false }), UsersController.googleOAuth);
    app.post('/oauth/facebook', passport.authenticate('facebookToken', { session: false }), UsersController.facebookOAuth);

    // User Routes
    app.get('/api/users', authenticate, usersController.index);
    app.post('/api/users', authenticate, usersController.create);
    app.get('/api/users/:userId', authenticate, usersController.show);
    app.delete('/api/users/:userId', authenticate, usersController.destroy);
    app.patch('/api/users/:userId', authenticate, usersController.update);

    // Game Routes
    app.get('/api/games', authenticate, gamesController.index);
    app.post('/api/games', authenticate, gamesController.create);
    app.get('/api/games/:gameId', authenticate, gamesController.show);
    app.delete('/api/games/:gameId', authenticate, gamesController.destroy);
    app.patch('/api/games/:gameId', authenticate, gamesController.update);

    // Exercise Routes
    app.get('/api/exercises', authenticate, exercisesController.index);
    app.post('/api/exercises', authenticate, exercisesController.create);
    app.get('/api/exercises/:exerciseId', authenticate, exercisesController.show);
    app.delete('/api/exercises/:exerciseId', authenticate, exercisesController.destroy);
    app.patch('/api/exercises/:exerciseId', authenticate, exercisesController.update);
};