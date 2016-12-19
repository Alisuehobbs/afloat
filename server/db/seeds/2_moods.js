exports.seed = function(knex, Promise) {

    return knex('user_moods').del()
        .then(function() {
            return Promise.all([
                knex('user_moods').insert({
                  users_id: 1,
                  mood: 'anxious',
                  rating: 'negative'
                }),
                knex('user_moods').insert({
                  users_id: 1,
                  mood: 'hungry',
                  rating: 'negative'
                }),
                knex('user_moods').insert({
                  users_id: 1,
                  mood: 'relaxed',
                  rating: 'positive'
                }),
                knex('user_moods').insert({
                  users_id: 2,
                  mood: 'calm',
                  rating: 'positive'
                }),
                knex('user_moods').insert({
                  users_id: 2,
                  mood: 'angry',
                  rating: 'negative'
                }),
                knex('user_moods').insert({
                  users_id: 2,
                  mood: 'exhausted',
                  rating: 'negative'
                }),
                knex('user_moods').insert({
                  users_id: 3,
                  mood: 'self-conscious',
                  rating: 'negative'
                }),
                knex('user_moods').insert({
                  users_id: 3,
                  mood: 'happy',
                  rating: 'positive'
                }),
                knex('user_moods').insert({
                  users_id: 3,
                  mood: 'relaxed',
                  rating: 'positive'
                })
            ]);
        });
};
