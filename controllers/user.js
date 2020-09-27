/*
 * @Copyright ParanoiA
 * @Created: 9/20/20, 11:21 AM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

let models = require("../models");
let bcrypt = require("bcrypt");
let flash = require("connect-flash");
const passport = require("passport");
const myPassport = require("../passport_setup")(passport);

const generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.show_login = function (req, res, next) {
	res.render('user/login', {formData: {}, errors: {}});
}

exports.show_signup = function (req, res, next) {
	res.render('user/signup', {formData: {}, errors: {}});
}

exports.signup = function (req, res, next) {
	const newUser = models.User.build(
			{
				email: req.body.email,
				password: generateHash(req.body.password)
			});
	return newUser.save().then(result => {
		passport.authenticate('local', {
			successRedirect: "/",
			failureRedirect: "/signup",
			failureFlash: true
		})(req, res, next)
	})
}

exports.login = function (req, res, next) {
	passport.authenticate('local', {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true
	})(req, res, next);
}
exports.logout = function (req, res, next) {
	req.logout();
	req.session.destroy();
	req.redirect('/');
}
