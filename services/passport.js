const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// create a collection by using a model i.e sellers.
const Seller = mongoose.model('sellers');

passport.serializeUser((user, done) => {
	done(null, user.id); // user.id is mongose record id
});

passport.deserializeUser((id, done) => {
	Seller.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleclientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			Seller.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					// already have a user record in DB
					done(null, existingUser);
				} else {
					//crate a new instant of sellers
					new Seller({
						googleId: profile.id,
						googleDisplayName: profile.displayName
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
