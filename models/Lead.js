/*
 * @Copyright ParanoiA
 * @Created: 9/15/20, 5:08 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

'use strict'
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Lead', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
}
