var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'adama.auth0.com',
    clientID:     process.env.AUTH0_CLIENTID || '0wQNYGe7pScvGJgOdfC37A7iA8GFZQOr',
    clientSecret: process.env.AUTH0_SECRET || '6m0GYolvZXEZlRXIqtbPwsMNOC2GF1-105GZ96AShAIlJmftHdq6FCUC8hbzET3v',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, profile, done) {
    //Some tracing info
    console.log('profile is', profile);
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;