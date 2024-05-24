const { Op } = require('sequelize')
const modelDisposisiSurat = require('../../models/disposisi_surat')
const modelSuratKeluar = require('../../models/surat_keluar')


//list surat masuk
const dataSuratKeluar = async (req,res) => {
    try {
        const findSurat = await modelSuratKeluar.findAll({
            attributes: ['no_surat_keluar', 'nama_surat_keluar']
        })
        if (findSurat.length <= 0) {
            return res.status(400).json({success: false, message: 'Data surat keluar belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data surat keluar tersedia', data: findSurat})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//tambah disposisi
const tambahDisposisi = async (req,res) => {
    try {
        const id_asisten = req.asisten.id_asisten
        const {no_surat_keluar, tujuan_disposisi} = req.body
        if (!no_surat_keluar || !tujuan_disposisi) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data disposisi yang akan ditambahkan'})
        }
        const findDisposisi = await modelDisposisiSurat.findOne({
            where:{
                no_surat_keluar: no_surat_keluar,
                tujuan_disposisi: tujuan_disposisi
            }
        })
        if (findDisposisi) {
            return res.status(400).json({success: false, message: 'Surat dengan tujuan tersebut sudah pernah ditambahkan'})
        }
        await modelDisposisiSurat.create({
            no_surat_keluar: no_surat_keluar,
            tujuan_disposisi: tujuan_disposisi,
            status_disposisi: 'menunggu',
            pemberi_disposisi_asisten: id_asisten
        })
        return res.status(200).json({success: true, message: 'Data berhasil ditambahkan'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//tampil disposisi
const tampilDisposisi = async (req,res) => {
    try {
        const id_asisten = req.asisten.id_asisten
        const findDisposisi = await modelDisposisiSurat.findAll({
            where:{
                pemberi_disposisi_asisten: id_asisten
            },
            attributes: ['id_disposisi','tujuan_disposisi','no_surat_keluar', 'status_disposisi'],
            include: [
                {
                    model: modelSuratKeluar,
                    as: 'dataSuratKeluar',
                    attributes: ['nama_surat_keluar']
                }
            ]
        })
        if (findDisposisi.length <= 0 ) {
            return res.status(400).json({success: false, message: 'Data disposisi belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data disposisi tersedia', data: findDisposisi})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//edit disposisi
const editDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi)
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        const {tujuan_disposisi} = req.body
        await modelDisposisiSurat.update({
            tujuan_disposisi: tujuan_disposisi || findDisposisi.tujuan_disposisi
        }, {
            where:{
                id_disposisi: id_disposisi
            }
        })
        return res.status(200).json({success: true, message: 'Data disposisi berhasil diperbaharui'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//hapus disposisi
const hapusDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi)
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        await modelDisposisiSurat.destroy({where:{id_disposisi: id_disposisi}})
        return res.status(200).json({success: true, message: 'Data disposisi berhasil dihapus'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {dataSuratKeluar, tambahDisposisi, tampilDisposisi, editDisposisi, hapusDisposisi}