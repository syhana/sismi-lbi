const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const detail_generate_surat = require('./detail_generate_surat')

const barang = sequelize.define('barang', {
    id_barang:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nama_barang:{
        type: DataTypes.STRING(256),
        allowNull:false
    },
    status_barang:{
        type: DataTypes.STRING(30),
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
    tableName:'barang',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

barang.hasMany(detail_generate_surat, {foreignKey: 'id_barang', as:'dataDetail'})
detail_generate_surat.belongsTo(barang, {foreignKey: 'id_barang', as: 'dataBarang'})

module.exports = barang