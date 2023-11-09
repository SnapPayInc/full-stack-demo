import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';

const Todo = sequelize.define('Todo', {
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
    create_datetime:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    update_datetime:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    finished:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

export default Todo;