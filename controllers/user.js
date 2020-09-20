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

exports.show_login = function (req, res, next) {
	res.render('user/login', {formData: {}, errors: {}});
}

exports.show_signup = function (req, res, next) {
	res.render('user/signup', {formData: {}, errors: {}});
}

exports.signup = function (req, res, next) {

}

exports.login = function (req, res, next) {

}