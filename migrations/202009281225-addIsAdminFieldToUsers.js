/*
 * @Copyright ParanoiA
 * @Created: 9/28/20, 12:26 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

'use strict';
const columnAndTypes = [{
	name: 'isAdmin',
	type: (Sequelize) => {
		return {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			defaultValue: false
		}
	}
}];

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all(
			columnAndTypes.map(c => {
				return queryInterface.addColumn(
					'Users',
					c.name,
					c.type(Sequelize)
				)
			})
		);
	},
	down: (queryInterface, Sequelize) => {
		return Promise.all(
			columnAndTypes.map(c => {
				return queryInterface.removeColumn(
					'Users',
					c.name
				)
			})
		)
	}
}