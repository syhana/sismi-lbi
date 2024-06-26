const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const asisten = require('./asisten')

const role_asisten = sequelize.define('role_asisten', {
    id_role:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    nama_role:{
        type: DataTypes.STRING(100),
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
    tableName: 'role_asisten',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

role_asisten.hasMany(asisten, {foreignKey: 'id_role', as: 'dataAsisten'})
asisten.belongsTo(role_asisten, {foreignKey: 'id_role', as: 'dataRole'})

module.exports = role_asisten