const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const detail_generate_surat = sequelize.define('detail_generate_surat', {
    id_detail_generate:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_generate:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_barang:{
        type: DataTypes.UUID,
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
    tableName: 'detail_generate_surat',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = detail_generate_surat