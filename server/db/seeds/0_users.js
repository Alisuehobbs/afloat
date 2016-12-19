exports.seed = function(knex, Promise) {

    return knex('users').del()
        .then(function() {
            return Promise.all([

                knex('users').insert({
                  firstName: 'Ali',
                  lastName: 'Hobbs',
                  email: 'ali@ali.com',
                  password: 'test1234'
                }),
                knex('users').insert({
                  firstName: 'Wade',
                  lastName: 'Meneley',
                  email: 'wade@wade.com',
                  password: 'test1234'
                }),
                knex('users').insert({
                  firstName: 'Banana',
                  lastName: 'Apple',
                  email: 'banana@banana.com',
                  password: 'test1234'
                }),

            ]);
        });
};
