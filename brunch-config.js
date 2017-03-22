module.exports = {
	files: {
		javascripts: {
			joinTo: {
				'app.js': 'app/*.js'
			},
		},
		stylesheets: {
			joinTo: {
				'app.css': 'app/*.css'
			},
		},
	},

	plugins: {
		pug: {
			locals: {
				copyright: 'Copyright 2017 ',
			},
		},
	},
};
