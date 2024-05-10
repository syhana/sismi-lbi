const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const disposisi_surat = require('./disposisi_surat')
const token_kalab = require('./token_kalab')

const kepala_lab = sequelize.define('kepala_lab', {
    nip_kalab:{
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true
    },
    nama_kalab:{
        type: DataTypes.STRING(100), 
        allowNull: false,
    },
    password_kalab:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    ttd_kalab:{
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
    tableName: 'kepala_lab',
    timestamp: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

// kepala_lab.hasMany(disposisi_surat, {foreignKey: 'pemberi_disposisi',})
// disposisi_surat.belongsTo(kepala_lab, {foreignKey: 'pemberi_disposisi',})

// kepala_lab.hasMany(disposisi_surat, {foreignKey: 'tujuan_disposisi',})
// disposisi_surat.belongsTo(kepala_lab, {foreignKey: 'tujuan_disposisi',})

kepala_lab.hasMany(token_kalab, {foreignKey: 'nip_kalab', as: 'dataToken'})
token_kalab.belongsTo(kepala_lab, {foreignKey: 'nip_kalab',})

module.exports = kepala_lab