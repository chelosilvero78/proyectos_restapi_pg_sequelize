const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');


const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectid: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'Project',
          key: 'id'},
          allowNull: false
    }
},{
    timestamps: false
});

module.exports = Task;