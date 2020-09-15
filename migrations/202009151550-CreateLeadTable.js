/*
 * @Copyright ParanoiA
 * @Created: 9/15/20, 3:42 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

'use strict';
module.exports = {
	up: (QueryInterface, Sequelize) => {
		return QueryInterface.createTable('Leads', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING
			},
		});
	},
	down: (QueryInterface, Sequelize) => {
		return QueryInterface.dropTable('Leads');
	}
};
