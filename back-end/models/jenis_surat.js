const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const generate_surat = require('./generate_surat')

const jenis_surat = sequelize.define('jenis_surat', {
    id_jenis:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nama_jenis:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull:false
    }
}, {
    tableName: 'jenis_surat',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

jenis_surat.hasMany(generate_surat, {foreignKey: 'id_jenis', as: 'dataGenerate'})
generate_surat.belongsTo(jenis_surat, {foreignKey: 'id_jenis', as: 'dataJenis'})


module.exports = jenis_surat