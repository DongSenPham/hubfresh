const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback'
		/* passport.authenticate('google')
	  		(err, req, res) => {
			if (err.name === 'TokenError') {
				console.log(err);
				//res.redirect('/auth/tokenerror'); // redirect them back to the login page
			} else {
				console.log(err);
				//res.redirect('/auth/error');
			}
		},
		(req, res) => {
			console.log(req.user);
			res.redirect('/');
		} */
	);

	app.get('/api/user', (req, res) => {
		//res.send(req.session);
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send('User has logout');
	});
};
