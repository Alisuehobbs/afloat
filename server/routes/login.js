var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');


router.post('/', function(req, res, next) {
    knex('users')
        .where('email', req.body.email)
        .then(function(user) {
            if (user.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 8)

                const newUser = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashed_password
                }

                knex('users')
                    .insert(newUser, 'id')
                    .then(function(user) {
                      console.log('user:', user);
                      let activity1 = {
                        user_id: user,
                        activity: req.body.activity1
                      }
                      knex('user_activities')
                        .insert(activity1)
                        .then(function(data) {
                          res.json(data)
                        })
                    })
            } else {
              const error = ['Username is already in use.']
              res.json(error)
            }

        })
})


module.exports = router;
