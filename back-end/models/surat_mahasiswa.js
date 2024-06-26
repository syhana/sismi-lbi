const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const disposisi_surat = require('./disposisi_surat')
const surat_masuk = require('./surat_masuk')

const surat_mahasiswa = sequelize.define('surat_mahasiswa', {
    id_surat_mahasiswa:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    nim_mahasiswa:{
        type: DataTypes.CHAR,
        allowNull: false
    },
    file_surat_mahasiswa:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    nama_surat_mahasiswa:{
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
    tableName: 'surat_mahasiswa',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

surat_mahasiswa.hasMany(disposisi_surat, {foreignKey: 'id_surat_mahasiswa', as: 'dataDisposisi'})
disposisi_surat.belongsTo(surat_mahasiswa, {foreignKey: 'id_surat_mahasiswa', as: 'dataSuratMhs'})

surat_mahasiswa.hasMany(surat_masuk, {foreignKey: 'id_surat_mahasiswa', as: 'dataSuratMahasiswa'})
surat_masuk.belongsTo(surat_mahasiswa, {foreignKey: 'id_surat_mahasiswa', as: 'dataSuratMasukMhs'})

module.exports = surat_mahasiswa