/**
 * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT *
 *
 * You should never commit this file to a public repository on GitHub!
 * All public code on GitHub can be searched, that means anyone can see your
 * uploaded secrets.js file.
 *
 * I did it for your convenience using "throw away" credentials so that
 * all features could work out of the box.
 *
 * Untrack secrets.js before pushing your code to public GitHub repository:
 *
 * git rm --cached config/secrets.js
 *
 * If you have already commited this file to GitHub with your keys, then
 * refer to https://help.github.com/articles/remove-sensitive-data
*/

module.exports = {

  db: process.env.MONGOLAB_URI || process.env.MONGODB || 'mongodb://localhost:27017/test',

  sessionSecret: process.env.SESSION_SECRET || 'session secret can be anything',

  sendgrid: {
    user: process.env.SENDGRID_USER || 'your username',
    password: process.env.SENDGRID_PASSWORD || 'your password'
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID || 'your client id',
    clientSecret: process.env.FACEBOOK_SECRET || 'your client secret',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: process.env.TWITTER_KEY || 'your twitter key',
    consumerSecret: process.env.TWITTER_SECRET  || 'your twitter secret',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID || 'your google client id',
    clientSecret: process.env.GOOGLE_SECRET || 'your google client secret',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  }
};