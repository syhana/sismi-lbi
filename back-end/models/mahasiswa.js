const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const disposisi_surat = require('./disposisi_surat')
const generate_surat = require('./generate_surat')
const surat_mahasiswa = require('./surat_mahasiswa')
const token_mahasiswa = require('./token_mahasiswa')

const mahasiswa = sequelize.define('mahasiswa', {
    nim_mahasiswa:{
        type: DataTypes.CHAR,
        allowNull: false,
        primaryKey: true
    },
    nama_mahasiswa:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password_mahasiswa:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    alamat_mahasiswa:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ttd_mahasiswa:{
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
    tableName: 'mahasiswa',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

mahasiswa.hasMany(disposisi_surat, {foreignKey: 'pemberi_disposisi', as: 'dataDisposisi'})
disposisi_surat.belongsTo(mahasiswa, {foreignKey: 'pemberi_disposisi', as: 'dataMahasiswa'})

mahasiswa.hasMany(disposisi_surat, {foreignKey: 'tujuan_disposisi', as: 'dataDisposisi'})
disposisi_surat.belongsTo(mahasiswa, {foreignKey: 'tujuan_disposisi', as: 'dataMahasiswa'})

mahasiswa.hasMany(generate_surat, {foreignKey: 'nim_mahasiswa', as: 'dataGenerate'})
generate_surat.belongsTo(mahasiswa, {foreignKey: 'nim_mahasiswa', as: 'dataMahasiswa'})

mahasiswa.hasMany(surat_mahasiswa, {foreignKey: 'nim_mahasiswa', as: 'dataSurat'})
surat_mahasiswa.belongsTo(mahasiswa, {foreignKey: 'nim_mahasiswa', as: 'dataMahasiswa'})

mahasiswa.hasMany(token_mahasiswa, {foreignKey: 'nim_mahasiswa', as: 'dataToken'})
token_mahasiswa.belongsTo(mahasiswa, {foreignKey: 'nim_mahasiswa', as: 'dataMahasiswa'})

module.exports = mahasiswa