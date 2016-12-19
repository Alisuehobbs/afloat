exports.seed = function(knex, Promise) {

    return knex('user_moods').del()
        .then(function() {
            return Promise.all([
                knex('user_moods').insert({
                  users_id: 1,
                  mood: 'anxious'
                }),

                knex('user_moods').insert({
                  users_id: 2,
                  mood: 'tired'
                }),

                knex('user_moods').insert({
                  users_id: 3,
                  mood: 'self-conscious'
                })
            ]);
        });
};
