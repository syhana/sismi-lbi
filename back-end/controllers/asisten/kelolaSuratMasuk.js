const modelSuratMasuk = require('../../models/surat_masuk')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '../', '../', 'public', 'doc', 'Asisten', 'suratMasuk'))
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

// tambah surat
const tambahSuratMasuk = async (req,res) => {
    try {
        const id_asisten = req.asisten.id_asisten
        const {nama_surat_masuk} = req.body
        const file_surat_masuk = req.file
        if (!nama_surat_masuk) {
            return res.status(400).json({success: false, message: 'Silahkan isikan nama surat masuk yang ingin ditambahkan'})
        }
        if (!file_surat_masuk) {
            return res.status(400).json({success: false, message: 'Silahkan tambahkan file yang ingin anda tambahkan'})
        }
        const findSurat = await modelSuratMasuk.findOne({where:{nama_surat_masuk: nama_surat_masuk}})
        if (findSurat) {
            return res.status(400).json({success: false, message: 'Nama surat sudah digunakan'})
        }
        await modelSuratMasuk.create({
            id_asisten: id_asisten,
            nama_surat_masuk: nama_surat_masuk,
            file_surat_masuk: file_surat_masuk.originalname
        })
        return res.status(200).json({success: true, message: 'Surat anda berhasil ditambahkan'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

// tampil semua surat
const tampilSuratMasuk = async (req,res) => {
    try {
        const findSurat = await modelSuratMasuk.findAll({
            attributes: ['no_surat_masuk', 'nama_surat_masuk', 'file_surat_masuk']
        })
        if (findSurat.length <= 0) {
            return res.status(400).json({success: false, message: 'Data surat masuk belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data surat masuk tersedia', data: findSurat})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

// edit surat
const editSurat = async (req,res) => {
    try {
        const id_asisten = req.asisten.id_asisten
        const {no_surat_masuk} = req.params
        const {nama_surat_masuk} = req.body
        const file_surat_masuk = req.file
        const findSurat = await modelSuratMasuk.findByPk(no_surat_masuk)
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat masuk tidak ditemukan'})
        }
        if (nama_surat_masuk && nama_surat_masuk != findSurat.nama_surat_masuk) {
            const findNama = await modelSuratMasuk.findOne({where:{nama_surat_masuk: nama_surat_masuk}})
            if (findNama) {
                return res.status(400).json({success: false, message: 'Nama surat sudah digunakan'})
            }
            if (file_surat_masuk) {
                await modelSuratMasuk.update({
                    id_asisten: id_asisten,
                    nama_surat_masuk: nama_surat_masuk || findSurat.nama_surat_masuk,
                    file_surat_masuk: file_surat_masuk.originalname
                }, {
                    where:{
                        no_surat_masuk: no_surat_masuk
                    }
                })
                return res.status(200).json({success: true, message: 'Data surat masuk berhasil diperbaharui'})
            }
            await modelSuratMasuk.update({
                id_asisten: id_asisten,
                nama_surat_masuk: nama_surat_masuk
            }, {
                where:{
                    no_surat_masuk: no_surat_masuk
                }
            })
            return res.status(200).json({success: true, message: 'Data surat masuk berhasil diperbaharui'})
        }
        if (file_surat_masuk) {
            await modelSuratMasuk.update({
                id_asisten: id_asisten,
                nama_surat_masuk: nama_surat_masuk || findSurat.nama_surat_masuk,
                file_surat_masuk: file_surat_masuk.originalname
            }, {
                where:{
                    no_surat_masuk: no_surat_masuk
                }
            })
            return res.status(200).json({success: true, message: 'Data surat masuk berhasil diperbaharui'})
        }
        await modelSuratMasuk.update({
            id_asisten: id_asisten,
            nama_surat_masuk: nama_surat_masuk
        }, {
            where:{
                no_surat_masuk: no_surat_masuk
            }
        })
        return res.status(200).json({success: true, message: 'Data surat masuk berhasil diperbaharui'})
       
        
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

// hapus surat
const hapusSurat = async (req,res) => {
    try {
        const {no_surat_masuk} = req.params
        const findSurat = await modelSuratMasuk.findByPk(no_surat_masuk)
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat masuk tidak ditemukan'})
        }
        await modelSuratMasuk.destroy({where:{no_surat_masuk: no_surat_masuk}})
        return res.status(200).json({success: true, message: 'Data surat masuk berhasil dihapus'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}
// detail surat
const detailSurat = async (req,res) => {
    try {
        const {no_surat_masuk} = req.params
        const findSurat = await modelSuratMasuk.findByPk(no_surat_masuk, {attributes: [
            'nama_surat_masuk', 'file_surat_masuk'
        ]})
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat masuk tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data surat masuk ditemukan', data: findSurat})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {tambahSuratMasuk, uploadd, tampilSuratMasuk, editSurat, hapusSurat, detailSurat}