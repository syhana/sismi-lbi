const modelSuratKeluar = require('../../models/surat_keluar')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '../', '../', 'public', 'doc', 'Asisten', 'suratKeluar'))
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const fileFilter = function(req,file, cb){
    const allowedTypes = ['application/pdf']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya PDF yg Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya PDF yg Di izinan'
        return cb(error, false);
    }
    cb(null,true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

const uploadd = upload.single('file')

//tambah surat
const tambahSurat = async (req,res) => {
    try {
        const id_asisten = req.asisten.id_asisten
        const {nama_surat_keluar} = req.body
        const file_surat_keluar = req.file
        if (!nama_surat_keluar) {
            return res.status(400).json({success: false, message: 'Silahkan isi nama surat anda'})
        }
        if (!file_surat_keluar) {
            return res.status(400).json({success: false, message: 'Silahkan tambahkan file surat yang ingin anda tambahkan'})
        }
        const findSurat = await modelSuratKeluar.findOne({where:{nama_surat_keluar: nama_surat_keluar}})
        if (findSurat) {
            return res.status(400).json({success: false, message: 'Nama surat telah digunakan'})
        }
        await modelSuratKeluar.create({
            id_asisten: id_asisten,
            nama_surat_keluar: nama_surat_keluar,
            file_surat_keluar: file_surat_keluar.originalname
        })
        return res.status(200).json({success: true, message: 'Data surat keluar berhasil ditambahkan'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//tampil semua surat
const tampilSurat = async (req,res) => {
    try {
        const findSurat = await modelSuratKeluar.findAll({
            attributes: ['no_surat_keluar', 'nama_surat_keluar', 'file_surat_keluar']
        })
        if (findSurat.length <= 0) {
            return res.status(400).json({success: false, message: 'Data surat keluar belum tersedia'})
        }
        return res.status(200).json({success: true, message:'Data surat keluar tersedia', data: findSurat})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//edit surat
const editSurat = async (req,res) =>{
    try {
        const {no_surat_keluar} = req.params
        const id_asiten = req.asisten.id_asisten
        const {nama_surat_keluar} = req.body
        const file_surat_keluar = req.file
        const findSurat = await modelSuratKeluar.findByPk(no_surat_keluar)
        if (!findSurat) {
            return res.status(400).json({success: false, messgae: 'Data surat keluar anda tidak ditemukan'})
        }
        if (nama_surat_keluar && nama_surat_keluar !== findSurat.nama_surat_keluar) {
            const findNama = await modelSuratKeluar.findOne({where:{nama_surat_keluar: nama_surat_keluar}})
            if (findNama) {
                return res.status(400).json({success: false, message: 'Nama surat sudah digunakan'})
            }
            if (file_surat_keluar) {
                await modelSuratKeluar.update({
                    id_asiten: id_asiten,
                    nama_surat_keluar: nama_surat_keluar,
                    file_surat_keluar: file_surat_keluar.originalname
                }, {
                    where:{
                        no_surat_keluar: no_surat_keluar
                    }
                })
                return res.status(200).json({success: true, message: 'Data surat keluar berhasil diperbaharui'})
            }
            await modelSuratKeluar.update({
                id_asiten:id_asiten,
                nama_surat_keluar: nama_surat_keluar
            }, {
                where:{
                    no_surat_keluar: no_surat_keluar
                }
            })
            return res.status(200).json({success: true, message: 'Data surat keluar berhasil diperbaharui'})
        }
        if (file_surat_keluar) {
            await modelSuratKeluar.update({
                id_asiten: id_asiten,
                file_surat_keluar: file_surat_keluar.originalname
            }, {
                where:{
                    no_surat_keluar: no_surat_keluar
                }
            })
            return res.status(200).json({success: true, message: 'Data surat keluar berhasil diperbaharui'})
        }
        await modelSuratKeluar.update({
            id_asiten:id_asiten,
        }, {
            where:{
                no_surat_keluar: no_surat_keluar
            }
        })
        return res.status(200).json({success: true, message: 'Data surat keluar berhasil diperbaharui'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//hapus surat
const hapusSurat = async (req,res) => {
    try {
        const {no_surat_keluar} = req.params
        const findSurat = await modelSuratKeluar.findByPk(no_surat_keluar)
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat keluar anda tidak ditemukan'})
        }
        await modelSuratKeluar.destroy({where:{no_surat_keluar: no_surat_keluar}})
        return res.status(200).json({success: true, message: 'Data surat keluar berhasil dihapus'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//detail surat
const detailSurat = async (req,res) => {
    try {
        const {no_surat_keluar} = req.params
        const findSurat = await modelSuratKeluar.findByPk(no_surat_keluar, {
            attributes:['nama_surat_keluar', 'file_surat_keluar']
        })
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat keluar tidak ditemukan'})
        }
        return res.status(200).json({success: true, message:'Data surat keluar ditemukan', data: findSurat})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {uploadd, tambahSurat, tampilSurat,editSurat, hapusSurat, detailSurat}