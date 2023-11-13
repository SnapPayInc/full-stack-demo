import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';

const Todo = sequelize.define('t_todos', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    todo_no: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    todo_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    todo_desc:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    finished:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});

export { Todo }