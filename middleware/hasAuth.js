/*
 * @Copyright ParanoiA
 * @Created: 9/28/20, 12:18 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

let createError = require('http-errors');

exports.isLoggedIn = function (req, res, next) {
	if (req.user) {
		next();
	} else {
		next(createError(404, "Page does not exist."));
	}
}
exports.hasAuth = function (req, res, next) {
	if (req.user && req.user.isAdmin === true) {
		next();
	} else {
		next(createError(404, "Page does not exist."));
	}
}