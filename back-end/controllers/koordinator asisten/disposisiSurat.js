const modelDisposisiSurat = require('../../models/disposisi_surat')
const { Op } = require('sequelize')
const modelSuratMahasiswa = require('../../models/surat_mahasiswa')
const modelSuratMasuk = require('../../models/surat_masuk')
const modelSuratKeluar = require('../../models/surat_keluar')
const modelAsisten = require('../../models/asisten')
const { PDFDocument } = require('pdf-lib')
const path = require('path')
const fs = require('fs')


//list disposisi
const listDisposisi = async (req,res) => {
    try {
        const findData = await modelDisposisiSurat.findAll({
            where: {
                [Op.or]: [
                    { status_disposisi: 'TTD Kordas' },
                    { status_disposisi: 'selesai' }
                ]
            },
            attributes: ['id_disposisi', 'id_surat_mahasiswa', 'no_surat_keluar', 'status_disposisi'],
            include: [
                {
                    model: modelSuratMahasiswa,
                    as: 'dataSuratMhs',
                    attributes: ['file_surat_mahasiswa']
                },
                {
                    model: modelSuratKeluar,
                    as: 'dataSuratKeluar',
                    attributes: ['file_surat_keluar']
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

//detail disposisi
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
                    model: modelSuratKeluar,
                    as: 'dataSuratKeluar',
                    attributes: ['file_surat_keluar']
                }
            ],
            attributes: ['id_surat_mahasiswa', 'no_surat_keluar']
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
        const id_asisten = req.asisten.id_asisten
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
                    model: modelSuratKeluar,
                    as: 'dataSuratKeluar',
                    attributes: ['file_surat_keluar']
                }
            ],
            attributes: ['id_surat_mahasiswa', 'no_surat_keluar']
        })
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        const findAsisten = await modelAsisten.findByPk(id_asisten)
        if (!findAsisten) {
            return res.status(400).json({success: false, message: 'Data kordas tidak ditemukan'})
        }
        const ttdPath = path.join(__dirname, '../', '../', 'public', 'images', 'ttd', findAsisten.ttd_asisten)
        const ttdBytes = fs.readFileSync(ttdPath)

        let pdfPath

        if (findDisposisi.id_surat_mahasiswa != null) {
            pdfPath = path.join(__dirname, '../', '../', 'public', 'doc', 'suratMahasiswa', findDisposisi.dataSuratMhs.dataValues.file_surat_mahasiswa)
        }
        pdfPath = path.join(__dirname, '../', '../', 'public', 'doc', 'Asisten', 'suratKeluar', findDisposisi.dataSuratKeluar.dataValues.file_surat_keluar)

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