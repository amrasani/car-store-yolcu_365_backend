module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.boolean('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // 👈 هذا هو الجزء المطلوب لتفعيل استقبال النقل
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});