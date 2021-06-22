const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');

const Task = require('./Task');

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
        timestamps: false
    });

module.exports = Project;

/*
    hasMany=tiene muchas
    belongsTo=pertenece a 
*/

/*
    Product.belongsTo(User, {
        as: 'User',
        foreignKey: "userID"
    });
*/

// Project.hasMany(Task, { foreinkey: 'projectid', sourceKey: 'id' });
Project.hasMany(Task, { as: 'tasks',foreignkey: 'projectid', sourceKey: 'id' });
// Task.belongsTo(Project, { foreinkey: 'projectId', targetId: 'id' });
// Task.belongsTo(Project, { foreinkey: 'projectid', sourceKey: 'id' });
Task.belongsTo(Project, {as:'project', foreingkey: 'projectid', targedId: 'id' });

module.exports = Project;