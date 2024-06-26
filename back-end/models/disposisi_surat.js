const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const disposisi_surat = sequelize.define('disposisi_surat', {
    id_disposisi:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    id_surat_mahasiswa:{
        type: DataTypes.UUID,
        allowNull: true
    },
    no_surat_keluar:{
        type: DataTypes.UUID,
        allowNull: true
    },
    tujuan_disposisi:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status_disposisi:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pemberi_disposisi_mahasiswa:{
        type: DataTypes.CHAR(36),
        allowNull: true
    },
    pemberi_disposisi_asisten:{
        type: DataTypes.CHAR(36),
        allowNull: true
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
    tableName: 'disposisi_surat',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = disposisi_surat