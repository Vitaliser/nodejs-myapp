/*
 * @Copyright ParanoiA
 * @Created: 9/13/20, 1:04 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

exports.index = function (req, res, next) {
	res.render('index', {title: 'Express'});
}
