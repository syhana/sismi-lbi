const modelKalab = require('../../models/kepala_lab')
const multer = require('multer')
const path = require('path')
const bcrypt = require('bcrypt')

//detail akun
const detailAkun = async (req,res) => {
    try {
        const nip_kalab = req.kalab.nip_kalab
        const findAkun = await modelKalab.findByPk(nip_kalab, {
            attributes:['nama_kalab', 'ttd_kalab']
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


//update akun
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
        const nip_kalab = req.kalab.nip_kalab
        console.log(nip_kalab)
        const findAKun = await modelKalab.findByPk(nip_kalab)
        if (!findAKun) {
            return res.status(400).json({success: false, message: 'Akun anda tidak ditemukan'})
        }
        const {nama_kalab, password_lama, password_baru} = req.body
        const ttd_kalab = req.file
        if (ttd_kalab) {
            if (password_baru) {
                if (!password_lama) {
                    return res.status(400).json({success: false, message: 'Silahkan isikan password lama anda'})
                }
                const salt = bcrypt.genSaltSync(10)
                const hashedPass = bcrypt.hashSync(password_baru, salt)

                bcrypt.compare(password_lama, findAKun.password_kalab, async function(err, results) {
                    if (err || !results) {
                        return res.status(400).json({success: false, message: 'Password lama akun anda salah'})
                    }
                    await modelKalab.update({
                        nama_kalab: nama_kalab || findAKun.nama_kalab,
                        password_kalab: hashedPass,
                        ttd_kalab: ttd_kalab.originalname
                    }, {
                        where:{
                            nip_kalab: nip_kalab
                        }
                    })
                    return res.status(200).json({success: true, message: 'Data akun anda berhasil diperbaharui'})
                })
            } else {
                await modelKalab.update({
                    nama_kalab: nama_kalab || findAKun.nama_kalab,
                    ttd_kalab: ttd_kalab.originalname
                }, {
                    where:{
                        nip_kalab: nip_kalab
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

                bcrypt.compare(password_lama, findAKun.password_kalab, async function(err, results) {
                    if (err || !results) {
                        return res.status(400).json({success: false, message: 'Password lama akun anda salah'})
                    }
                    await modelKalab.update({
                        nama_kalab: nama_kalab || findAKun.nama_kalab,
                        password_kalab: hashedPass,
                    }, {
                        where:{
                            nip_kalab: nip_kalab
                        }
                    })
                    return res.status(200).json({success: true, message: 'Data akun anda berhasil diperbaharui'})
                })
            } else {
                await modelKalab.update({
                    nama_kalab: nama_kalab || findAKun.nama_kalab,
                }, {
                    where:{
                        nip_kalab: nip_kalab
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