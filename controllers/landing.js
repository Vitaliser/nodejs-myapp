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


const models = require('../models')

exports.get_landing = function (req, res, next) {
    res.render('landing', {title: 'Express'});
}
exports.submit_lead = function (req, res, next) {
    return models.Lead.create({email: req.body.lead_email}).then(lead => {
        res.redirect('/leads');
    });
}
exports.show_leads = function (req, res, next) {
    models.Lead.findAll().then(leads => {
        res.render('landing', {title: 'Express',leads: leads});
    })
}