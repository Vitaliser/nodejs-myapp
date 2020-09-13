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

exports.get_landing = function (req, res, next) {
	res.render('landing', {title: 'Express'});
}
exports.submit_lead =function(req,res,next){
	console.log("lead Email:", req.body.lead_email);
	res.redirect('/')
}
