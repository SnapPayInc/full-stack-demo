import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Todo = sequelize.define('Todo', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
});