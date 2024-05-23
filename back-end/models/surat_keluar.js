const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const surat_keluar = sequelize.define('surat_keluar', {
    no_surat_keluar:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    no_surat_masuk:{
        type: DataTypes.UUID,
        allowNull: true
    },
    id_asisten:{
        type: DataTypes.UUID,
        allowNull: false,
    },
    nama_surat_keluar:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    file_surat_keluar:{
        type: DataTypes.STRING(256),
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
    tableName: 'surat_keluar',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = surat_keluar