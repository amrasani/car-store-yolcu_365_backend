export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
  webhooks: {
    populateRelations: env('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '04ijdu2k4/mJwDI/2kjNYQ=='),
    },
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    transfer: {
      enabled: true,
    },
  },
});