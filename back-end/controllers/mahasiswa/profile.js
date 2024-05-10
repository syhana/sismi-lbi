const modelMahasiswa = require('../../models/mahasiswa')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '../', '../', 'public', 'images', 'ttd'))
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const fileFilter = function(req,file, cb){
    const allowedTypes = ['image/jpg', 'image/png']
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

//detail akun
const detailAkun = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
    const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
    const findAkun = await modelMahasiswa.findByPk(nim_mahasiswa, {
        attributes: ['nim_mahasiswa', 'nama_mahasiswa', 'alamat_mahasiswa', 'ttd_mahasiswa']
    })
    if (!findAkun) {
        return res.status(400).json({success: false, message: 'Akun anda tidak ditemukan'})
    }
    return res.status(200).json({success: true, message: 'Data akun ditemukan', data: findAkun})
}

//edit akun
const editAkun = async (req,res) => {
    try {
        const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
        const findAKun = await modelMahasiswa.findByPk(nim_mahasiswa)
        if (!findAKun) {
            return res.status(400).json({success: false, message: 'Akun anda tidak ditemukan'})
        }
        const {nama_mahasiswa, alamat_mahasiswa, password_lama, password_baru} = req.body
        const ttd_mahasiswa = req.file
        if (ttd_mahasiswa) {
            
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false , message: 'Kesalahan Server'})
    }

}

module.exports = {detailAkun}