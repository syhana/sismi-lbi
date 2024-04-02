const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const token_mahasiswa = sequelize.define('token_mahasiswa', {
    id_token: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nim_mahasiswa:{
        type: DataTypes.CHAR,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'token_mahasiswa',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = token_mahasiswa