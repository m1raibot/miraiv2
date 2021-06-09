module.exports = function({ sequelize, Sequelize }) {
	let Users = sequelize.define('Users', {
		num: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		userID: {
			type: Sequelize.BIGINT,
			unique: true
		},
        name: {
            type: Sequelize.STRING
        },
		data: {
			type: Sequelize.JSON
		}
	});

	return Users;
}