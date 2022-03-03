module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:"https://dbbd-102-89-34-118.ngrok.io",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b1c510627625bc1bef62dd308a1ec260'),
    },
  },
});
