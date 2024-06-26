const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const surat_masuk = sequelize.define('surat_masuk', {
    no_surat_masuk:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    id_asisten:{
        type: DataTypes.UUID,
        allowNull: false
    },
    id_surat_mahasiswa: {
        type: DataTypes.UUID,
        allowNull: true
    },
    nama_surat_masuk:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    file_surat_masuk:{
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
    tableName: 'surat_masuk',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = surat_masuk