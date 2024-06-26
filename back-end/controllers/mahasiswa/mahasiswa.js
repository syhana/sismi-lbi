const modelMahasiswa = require('../../models/mahasiswa')
const bcrypt = require('bcrypt')
const modelTokenMhs = require('../../models/token_mahasiswa')
const multer = require('multer')
const jwt = require('jsonwebtoken')
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
    const allowedTypes = ['image/jpeg', 'image/png']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan'
        return cb(error, false);
    }
    cb(null,true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

const uploadd = upload.single('file')

const registrasiMahasiswa = async (req,res) => {
    try {
        const {nama_mahasiswa, nim_mahasiswa, alamat_mahasiswa, password_mahasiswa} = req.body
        const ttd_mahasiswa = req.file
    
        if (!nama_mahasiswa || !nim_mahasiswa || !alamat_mahasiswa || !password_mahasiswa) {
            return res.status(400).json({success: false, message: 'Silahkan Lengkapi Data Akun Anda'})
        }
    
        if (!ttd_mahasiswa) {
            return res.status(400).json({success: false, meessage: 'Silahkan Tambahkan Tanda Tangan Anda'})
        }
        const findMhs = await modelMahasiswa.findOne({where:{nim_mahasiswa: nim_mahasiswa}})
        if (findMhs) {
            return res.status(400).json({success: false, message: `Data Akun dengan NIM ${nim_mahasiswa} Sudah Pernah Terdaftar`})
        }
    
        const salt = bcrypt.genSaltSync(10)
        const hashedPass = bcrypt.hashSync(password_mahasiswa, salt)
    
        await modelMahasiswa.create({
            nim_mahasiswa: nim_mahasiswa,
            nama_mahasiswa:nama_mahasiswa,
            password_mahasiswa: hashedPass,
            alamat_mahasiswa: alamat_mahasiswa,
            ttd_mahasiswa: ttd_mahasiswa.originalname,
        })
        return res.status(200).json({success: true, message: 'Akun Berhasil Didaftarkan'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }

}

const loginMahasiswa = async (req,res) => {
    try {
        const {nim_mahasiswa, password_mahasiswa} = req.body
        if (!nim_mahasiswa || !password_mahasiswa) {
            return res.status(400).json({success: false, message: 'Silahkan Lengkapi Data Akun Anda'})
        }
        const findMhs = await modelMahasiswa.findOne({where: {nim_mahasiswa: nim_mahasiswa}})
        if (!findMhs) {
            return res.status(400).json({success: false, message: 'Nim mahasiswa tidak ditemukan'})
        }
        
        bcrypt.compare(password_mahasiswa, findMhs.password_mahasiswa, async(err, results) => {
            if (err || !results) {
                return res.status(400).json({success: false, message: 'Password akun anda salah'})            
            }
            const nim_mahasiswa = findMhs.nim_mahasiswa
            const token = jwt.sign(
                {
                    nim_mahasiswa
                },
                process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '1w'
                }
            )
            await modelTokenMhs.create({
                nim_mahasiswa: nim_mahasiswa,
                token: token
            })
            return res.status(200).json({success: true, message: 'Login Berhasil', token: token})
        })        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

const logoutMahasiswa = async (req,res) => {
    try {
        const authHeader = req.get('Authorization');
        
         if (!authHeader) {
             return res.status(401).json({ succes: false, message: 'Tidak ada token atau sudah logout sebelumnya' });
         }
 
         const token = authHeader.split(' ')[1];
 
         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
             if (err) {
               return res.status(401).json({ succes: false, message: err });
             }
 
             const adaToken = await modelTokenMhs.findOne({where: {token}})
             if (!adaToken) {
                 return res.status(401).json({ succes: false, message: "Tidak ada token atau sudah logout sebelumnya" });
             }
             
             await modelTokenMhs.destroy({ where: {token}});
         
             res.status(200).json({ success: true, message: 'Logout berhasil' });
         });
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {uploadd, registrasiMahasiswa, loginMahasiswa, logoutMahasiswa}