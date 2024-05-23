const modelDisposisiSurat = require('../../models/disposisi_surat')
const modelSuratMahasiswa = require('../../models/surat_mahasiswa')
const modelSuratMasuk = require('../../models/surat_masuk')
const modelKalab = require('../../models/kepala_lab')
const { Op } = require('sequelize')
const path = require('path')
const fs =require('fs')
const { PDFDocument } = require('pdf-lib')

//list disposisi
const listDisposisi = async (req,res) => {
    try {
        const findData = await modelDisposisiSurat.findAll({
            where: {
                [Op.or]: [
                    { status_disposisi: 'TTD Kalab' },
                    { status_disposisi: 'selesai' }
                ]
            },
            attributes: ['id_disposisi', 'id_surat_mahasiswa', 'no_surat_masuk', 'status_disposisi'],
            include: [
                {
                    model: modelSuratMahasiswa,
                    as: 'dataSuratMhs',
                    attributes: ['file_surat_mahasiswa']
                },
                {
                    model: modelSuratMasuk,
                    as: 'dataSurat',
                    attributes: ['file_surat_masuk']
                }
            ]
        })
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Disposisi surat belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data disposisi surat tersedia', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//detail surat
const detailDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi, {
            include: [
                {
                    model: modelSuratMahasiswa,
                    as: 'dataSuratMhs',
                    attributes: ['file_surat_mahasiswa']
                },
                {
                    model: modelSuratMasuk,
                    as: 'dataSurat',
                    attributes: ['file_surat_masuk']
                }
            ],
            attributes: ['id_surat_mahasiswa', 'no_surat_masuk']
        })
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data disposisi ditemukan', data: findDisposisi})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//tanda tangan
const tandaTangan = async (req,res) => {
    try {
        const nip_kalab = req.kalab.nip_kalab
        const {id_disposisi} = req.params
        const {x, y} = req.body
        if (!x || !y) {
            return res.status(400).json({success: false, message: 'Silahkan tentukan letak koordinat x dan y untuk tanda tangan anda'})
        }
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi, {
            include: [
                {
                    model: modelSuratMahasiswa,
                    as: 'dataSuratMhs',
                    attributes: ['file_surat_mahasiswa']
                },
                {
                    model: modelSuratMasuk,
                    as: 'dataSurat',
                    attributes: ['file_surat_masuk']
                }
            ],
            attributes: ['id_surat_mahasiswa', 'no_surat_masuk']
        })
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        const findKalab = await modelKalab.findByPk(nip_kalab)
        if (!findKalab) {
            return res.status(400).json({success: false, message: 'Data kordas tidak ditemukan'})
        }
        const ttdPath = path.join(__dirname, '../', '../', 'public', 'images', 'ttd', findKalab.ttd_kalab)
        const ttdBytes = fs.readFileSync(ttdPath)

        let pdfPath

        if (findDisposisi.id_surat_mahasiswa != null) {
            pdfPath = path.join(__dirname, '../', '../', 'public', 'doc', 'suratMahasiswa', findDisposisi.dataSuratMhs.dataValues.file_surat_mahasiswa)
        }
        pdfPath = path.join(__dirname, '../', '../', 'public', 'doc', 'Asisten', 'suratMasuk', findDisposisi.dataSurat.dataValues.file_surat_masuk)

        const pdfbytes = fs.readFileSync(pdfPath)

        const pdfDoc = await PDFDocument.load(pdfbytes)
        const pages = pdfDoc.getPages()
        const firstPage =pages[0]

        const ttdImg = await pdfDoc.embedPng(ttdBytes)
        firstPage.drawImage(ttdImg, {
            x: parseInt(x),
            y: parseInt(y),
            width: 100,
            height: 50
        })
        
        const pdfUpdated = await pdfDoc.save()
        fs.writeFileSync(pdfPath, pdfUpdated)
        await modelDisposisiSurat.update({
            status_disposisi: 'TTD Kalab'
        }, {
            where:{
                id_disposisi: id_disposisi
            }
        })
        return res.status(200).json({success: true, message: 'Surat berhasil ditanda tangan'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {listDisposisi, detailDisposisi, tandaTangan}