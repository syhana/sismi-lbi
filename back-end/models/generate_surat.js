const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const detail_generate_surat = require('./detail_generate_surat')

const generate_surat = sequelize.define('generate_surat', {
    id_generate:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_jenis:{
        type: DataTypes.UUID,
        allowNull: false
    },
    nim_mahasiswa:{
        type: DataTypes.CHAR(36),
        allowNull: false
    },
    nama_generate:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    keperluan_peminjaman_ruang:{
        type: DataTypes.STRING,
        allowNull: true
    },
    tanggal_peminjaman_ruang:{
        type: DataTypes.DATE,
        allowNull: true
    },
    waktu_peminjaman_ruang:{
        type: DataTypes.TIME,
        allowNull: true
    },
    keperluan_peminjaman_barang:{
        type: DataTypes.STRING,
        allowNull: true
    },
    tanggal_peminjaman_barang:{
        type: DataTypes.DATE,
        allowNull: true
    },
    hasil_generate:{
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
    tableName: 'generate_surat',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

generate_surat.hasMany(detail_generate_surat, {foreignKey: 'id_generate', as: 'dataDetail'})
detail_generate_surat.belongsTo(generate_surat, {foreignKey: 'id_generate', as: 'dataGenerate'})

module.exports = generate_surat