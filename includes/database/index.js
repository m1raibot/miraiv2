const Sequelize = require("sequelize");
const { resolve } = require("path");
const { DATABASE } = global.config;

var dialect = Object.keys(DATABASE), storage;
dialect = dialect[0]; 
storage = resolve(__dirname, `../${DATABASE[dialect].storage}`);

module.exports.sequelize = new Sequelize({
	dialect,
	storage,
	pool: {
		max: 20,
		min: 0,
		acquire: 60000,
		idle: 20000
	},
	retry: {
		match: [
			/SQLITE_BUSY/,
		],
		name: 'query',
		max: 20
	},
	logging: false,
	transactionType: 'IMMEDIATE',
	define: {
		underscored: false,
		freezeTableName: true,
		charset: 'utf8',
		dialectOptions: {
			collate: 'utf8_general_ci'
		},
		timestamps: true
	},
	sync: {
		force: false
	}
});

module.exports.Sequelize = Sequelize;