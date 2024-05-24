const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const disposisi_surat = require('./disposisi_surat')

const surat_keluar = sequelize.define('surat_keluar', {
    no_surat_keluar:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
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

surat_keluar.hasMany(disposisi_surat, {foreignKey: 'no_surat_keluar', as: 'dataDisposisi'})
disposisi_surat.belongsTo(surat_keluar, {foreignKey: 'no_surat_keluar', as: 'dataSuratKeluar'})

module.exports = surat_keluar