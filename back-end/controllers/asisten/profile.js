const modelAsisten = require('../../models/asisten')
const multer = require('multer')
const path = require('path')
const bcrypt = require('bcrypt')

//detail akun
const detailAkun = async (req,res) => {
    try {
        const id_asisten = req.asisten.id_asisten
        const findAkun = await modelAsisten.findByPk(id_asisten, {
            attributes:['nama_asisten', 'ttd_asisten']
        })
        if (!findAkun) {
            return res.status(400).json({success: false, message: 'Akun tidak ditemukan'})
        }
        return res.status(200).json({success:true, message: 'Akun ditemukan', data: findAkun})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '../', '../', 'public', 'images', 'ttd'))
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const fileFilter = function(req, file, cb) {
    const allowedTypes = ['image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('LIMIT_UNEXPECTED_FILE');
        error.message = 'Jenis file tidak diizinkan, hanya PNG yang diizinkan';
        return cb(error, false);
    }
    cb(null, true);
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

const uploadd = upload.single('file')

//update akun
const updateAkun = async(req,res) => {
    try {
        const id_asisten = req.asisten.id_asisten
        const findAKun = await modelAsisten.findByPk(id_asisten)
        if (!findAKun) {
            return res.status(400).json({success: false, message: 'Akun anda tidak ditemukan'})
        }
        const {nama_asisten, password_lama, password_baru} = req.body
        const ttd_asisten = req.file
        if (ttd_asisten) {
            if (password_baru) {
                if (!password_lama) {
                    return res.status(400).json({success: false, message: 'Silahkan isikan password lama anda'})
                }
                const salt = bcrypt.genSaltSync(10)
                const hashedPass = bcrypt.hashSync(password_baru, salt)

                bcrypt.compare(password_lama, findAKun.password_asisten, async function(err, results) {
                    if (err || !results) {
                        return res.status(400).json({success: false, message: 'Password lama akun anda salah'})
                    }
                    await modelAsisten.update({
                        nama_asisten: nama_asisten || findAKun.nama_asisten,
                        password_asisten: hashedPass,
                        ttd_asisten: ttd_asisten.originalname
                    }, {
                        where:{
                            id_asisten: id_asisten
                        }
                    })
                    return res.status(200).json({success: true, message: 'Data akun anda berhasil diperbaharui'})
                })
            } else {
                await modelAsisten.update({
                    nama_asisten: nama_asisten || findAKun.nama_asisten,
                    ttd_asisten: ttd_asisten.originalname
                }, {
                    where:{
                        id_asisten: id_asisten
                    }
                })
                return res.status(200).json({success: true , message: 'Data akun anda berhasil diperbaharui'})
            }
        } else {
            if (password_baru) {
                if (!password_lama) {
                    return res.status(400).json({success: false, message: 'Silahkan isikan password lama akun anda'})
                }
                const salt = bcrypt.genSaltSync(10)
                const hashedPass = bcrypt.hashSync(password_baru, salt)

                bcrypt.compare(password_lama, findAKun.password_asisten, async function(err, results) {
                    if (err || !results) {
                        return res.status(400).json({success: false, message: 'Password lama akun anda salah'})
                    }
                    await modelAsisten.update({
                        nama_asisten: nama_asisten || findAKun.nama_asisten,
                        password_asisten: hashedPass,
                    }, {
                        where:{
                            id_asisten: id_asisten
                        }
                    })
                    return res.status(200).json({success: true, message: 'Data akun anda berhasil diperbaharui'})
                })
            } else {
                await modelAsisten.update({
                    nama_asisten: nama_asisten || findAKun.nama_asisten,
                }, {
                    where:{
                        id_asisten: id_asisten
                    }
                })
                return res.status(200).json({success: true , message: 'Data akun anda berhasil diperbaharui'})
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {detailAkun, uploadd, updateAkun}