/*
 * @Copyright ParanoiA
 * @Created: 9/20/20, 12:57 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */
'use strict'
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('User', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: true
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		}
	});
}
