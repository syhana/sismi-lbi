const modelSuratMahasiswa = require('../../models/surat_mahasiswa')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '../', '../', 'public', 'doc', 'suratMahasiswa'))
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
        const {nama_surat_mahasiswa} = req.body
        const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
        const file_surat_mahasiswa = req.file  
        if (!nama_surat_mahasiswa) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data surat anda'})
        }
        if (!file_surat_mahasiswa) {
            return res.status(400).json({success: false, message: 'Silahkan tambahakn file surat anda'})
        }
        const findSurat = await modelSuratMahasiswa.findOne({where:{nama_surat_mahasiswa: nama_surat_mahasiswa}})
        if (findSurat) {
            return res.status(400).json({success: false, message: 'Surat anda sudah pernah ditambahkan'})
        }
        await modelSuratMahasiswa.create({
            nim_mahasiswa: nim_mahasiswa,
            file_surat_mahasiswa: file_surat_mahasiswa.originalname,
            nama_surat_mahasiswa: nama_surat_mahasiswa
        })
        return res.status(200).json({success: true, message: 'Surat berhasil ditambahkan'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
    
}

//edit surat
const editSurat = async (req,res) => {
    try {
        const {id_surat_mahasiswa} = req.params
        const findSurat = await modelSuratMahasiswa.findOne({where: {id_surat_mahasiswa: id_surat_mahasiswa}})
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat tidak ditemukan'})
        }
        const {nama_surat_mahasiswa} = req.body
        const file_surat_mahasiswa = req.file
        if (!file_surat_mahasiswa) {
            await modelSuratMahasiswa.update({
                nama_surat_mahasiswa: nama_surat_mahasiswa || findSurat.nama_surat_mahasiswa,
            }, {
                where:{id_surat_mahasiswa: id_surat_mahasiswa}
            })
            return res.status(200).json({success: true, message: 'Surat berhasil diperbaharui'})
        }
        await modelSuratMahasiswa.update({
            nama_surat_mahasiswa: nama_surat_mahasiswa || findSurat.nama_surat_mahasiswa,
            file_surat_mahasiswa: file_surat_mahasiswa.originalname
        }, {
            where:{id_surat_mahasiswa: id_surat_mahasiswa}
        })
        return res.status(200).json({success: true, message: 'Surat berhasil diperbaharui'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }

}

//tampil semua surat berdasar user
const semuaDataSurat = async (req,res) => {
    try {
        const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
        const findSurat = await modelSuratMahasiswa.findAll({where:{nim_mahasiswa: nim_mahasiswa}, attributes: ['id_surat_mahasiswa', 'file_surat_mahasiswa', 'nama_surat_mahasiswa']})
        if (findSurat.length <= 0) {
            return res.status(400).json({success: false, message: 'Data surat belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data surat tersedia', data: findSurat})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }   
}

//hapus surat
const hapusSurat = async (req,res) => {
    try {
        const {id_surat_mahasiswa} = req.params
        const findSurat = await modelSuratMahasiswa.findOne({where:{id_surat_mahasiswa:id_surat_mahasiswa}})
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat tidak ditemukan'})
        }
        await modelSuratMahasiswa.destroy({where:{id_surat_mahasiswa:id_surat_mahasiswa}})
        return res.status(200).json({success: true, message: 'Data surat mahasiswa berhasil dihapus'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//detail surat
const detailSurat = async (req,res) => {
    try {
        const {id_surat_mahasiswa} = req.params
        const findSurat = await modelSuratMahasiswa.findByPk(id_surat_mahasiswa, {attributes: ['file_surat_mahasiswa', 'nama_surat_mahasiswa']})
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Data surat tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data surat ditemukan', data: findSurat})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {tambahSurat, uploadd, editSurat, semuaDataSurat, hapusSurat, detailSurat}