const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const disposisi_surat = require('./disposisi_surat')
const surat_keluar = require('./surat_keluar')
const surat_masuk = require('./surat_masuk')
const token_asisten = require('./token_asisten')

const asisten = sequelize.define('asisten', {
    id_asisten:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nama_asisten:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password_asisten:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    ttd_asisten:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    id_role:{
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
    tableName: 'asisten',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

asisten.hasMany(disposisi_surat, {foreignKey: 'pemberi_disposisi', as: 'dataDisposisi'})
disposisi_surat.belongsTo(asisten, {foreignKey: 'pemberi_disposisi', as: 'dataAsisten'})

asisten.hasMany(disposisi_surat, {foreignKey: 'tujuan_disposisi', as: 'dataDisposisi'})
disposisi_surat.belongsTo(asisten, {foreignKey: 'tujuan_disposisi', as: 'dataAsisten'})

asisten.hasMany(surat_keluar, {foreignKey: 'id_asisten', as: 'dataSurat'})
surat_keluar.belongsTo(asisten, {foreignKey: 'id_asisten', as: 'dataAsisten'})

asisten.hasMany(surat_masuk, {foreignKey: 'id_asisten', as: 'dataSurat'})
surat_masuk.belongsTo(asisten, {foreignKey: 'id_asisten', as: 'dataAsisten'})

asisten.hasMany(token_asisten, {foreignKey: 'id_asisten', as: 'dataToken'})
token_asisten.belongsTo(asisten, {foreignKey: 'id_asisten', as: 'dataAsisten'})

module.exports = asisten