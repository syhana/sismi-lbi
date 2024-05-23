const modelAsisten = require('../../models/asisten')
const modelRoleAsisten = require('../../models/role_asisten')
const modelKalab = require('../../models/kepala_lab')
const multer = require('multer')
const path = require('path')
const bcrypt = require('bcrypt')

//tambah role asisten
const tambahRole = async(req,res) => {
    try {
        const {nama_role} = req.body
        if (!nama_role) {
            return res.status(400).json({success: false, message: 'Silahkan isikan nama role'})
        }       
        await modelRoleAsisten.create({
            nama_role: nama_role
        })
        return res.status(200).json({success: false, message: 'Role asisten berhasil ditambahkan'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
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

const fileFilter = function(req,file, cb){
    const allowedTypes = ['image/png']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya  PNG yg Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya PNG yg Di izinkan'
        return cb(error, false);
    }
    cb(null,true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

const uploadd = upload.single('file')


//tambah akun pengguna
const tambahPengguna = async (req,res) => {
    try {
        const ttd = req.file
        const {nip_kalab, nama, password, role} = req.body
        if (!role) {
            return res.status(400).json({success: false, message: 'Silahkan pilih role yang diinginkan'})
        }
        if (!ttd) {
            return res.status(400).json({success: false, message: 'Silahkan upload file tanda tangan'})
        }
        if (role == 'Kepala Laboratorium' || role == 'kepala laboratorium') {
            if (!nip_kalab) {
                return res.status(400).json({success: false, message: 'Silahkan isi NIP kepala laboratorium'})
            }
            if (!nama || !password || !ttd) {
                return res.status(400).json({success: false, message: 'Silahkan lengkapi data akun kepala laboratorium'})
            }
            const salt = bcrypt.genSaltSync(10)
            const hashedPass = bcrypt.hashSync(password, salt)
            const findNip = await modelKalab.findByPk(nip_kalab)
            if (findNip) {
                return res.status(400).json({success: false, message: 'NIP sudah digunakan'})
            }
            await modelKalab.create({
                nip_kalab: nip_kalab,
                nama_kalab: nama,
                password_kalab: hashedPass,
                ttd_kalab: ttd.originalname
            })
            return res.status(200).json({success: true, message: 'Akun kepala laboratorium berhasil ditambahkan'})
        
        } else {
            if (!nama || !password || !ttd) {
                return res.status(400).json({success: false, message: 'Silahkan lengkapi data akun asisten'})
            }
            const findRole = await modelRoleAsisten.findOne({where:{nama_role: role}})
            if (!findRole) {
                return res.status(400).json({success: false, message: 'Data role tidak ditemukan'})
            }
            const findNama = await modelAsisten.findOne({where:{nama_asisten: nama}})
            if (findNama) {
                return res.status(400).json({success: false, message: 'Nama asisten sudah tersedia'})
            }
            const salt = bcrypt.genSaltSync(10)
            const hashedPass = bcrypt.hashSync(password, salt)
            await modelAsisten.create({
                nama_asisten: nama,
                password_asisten:hashedPass,
                ttd_asisten: ttd.originalname,
                id_role: findRole.id_role
            })
            return res.status(200).json({success: true, message: 'Akun asisten berhasil ditambahkan'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//data akun pengguna
const dataPengguna = async (req,res) => {
    try {
        const findDataAsisten = await modelAsisten.findAll({
            include: [
                {
                    model: modelRoleAsisten,
                    as: 'dataRole',
                    attributes: ['nama_role']
                }
            ]
        })
        if (findDataAsisten.length <= 0) {
            return res.status(400).json({success: false, message: 'Data asisten belum tersedia'})
        }
        const findDataKalab = await modelKalab.findAll()
        if (findDataKalab.length <= 0) {
            return res.status(400).json({success: false, message: 'Data kepala laboratorium belum tersedia'})
        }
        const data = [...findDataKalab, ...findDataAsisten]
        return res.status(200).json({success: true, message: 'Data pengguna ditemukan', data: data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//detail akun pengguna
const detailPengguna = async (req,res) => {
    try {
        const {nama} = req.params
        if (!nama) {
            return res.status(400).json({success: false, message: 'Data nama tidak ditemukan'})
        }
        const findNamaAsisten = await modelAsisten.findOne({
            where:{
                nama_asisten: nama
            },
            attributes: ['id_asisten', 'nama_asisten', 'password_asisten', 'ttd_asisten', 'id_role'],
            include: [
                {
                    model: modelRoleAsisten,
                    as: 'dataRole',
                    attributes: ['nama_role']
                }
            ]
        })
        if (!findNamaAsisten) {
            const findNamaKalab = await modelKalab.findOne({
                where:{
                    nama_kalab: nama
                },
                attributes: ['nip_kalab', 'nama_kalab', 'password_kalab', 'ttd_kalab']
            })
            if (!findNamaKalab) {
                return res.status(400).json({success: false, message: 'Tidak ada data pengguna dengan nama tersebut'})
            }
            return res.status(200).json({success: true, message: 'Data kalab ditemukan', data: findNamaKalab, role: 'Kepala Laboratorium'})
        }
        return res.status(200).json({success:true, message: 'Data asisten ditemukan', data: findNamaAsisten})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }    
}

//hapus akun pengguna
const hapusPengguna = async (req,res) => {
    try {
        const {nama} = req.params
        if (!nama) {
            return res.status(400).json({success: false, message: 'Data nama tidak ditemukan'})
        }
        const findNamaAsisten = await modelAsisten.findOne({where:{nama_asisten: nama}})
        if (!findNamaAsisten) {
            const findNamaKalab = await modelKalab.findOne({where:{nama_kalab: nama}})
            if (!findNamaKalab) {
                return res.status(400).json({success: false, message: 'Tidak ada data pengguna dengan nama tersebut'})
            }
            await modelKalab.destroy({where: {nama_kalab: nama}})
            return res.status(200).json({success: true, message: 'Data akun pengguna berhasil dihapus'})
        }
        await modelAsisten.destroy({where:{nama_asisten: nama}})
        return res.status(200).json({success: true, message: 'Data akun pengguna berhasil dihapus'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }    
}

//edit akun pengguna
const editPengguna = async (req,res) => {
    try {
        const {nama} = req.params
        const {nama_baru, password, role} = req.body
        const ttd = req.file
        if (!nama) {
            return res.status(400).json({success: false, message: 'Data nama tidak ditemukan'})
        }
        const findNamaAsisten = await modelAsisten.findOne({where: {nama_asisten: nama}})
        if (!findNamaAsisten) {
            const findNamaKalab = await modelKalab.findOne({where: {nama_kalab: nama}})
            if (!findNamaKalab) {
                return res.status(400).json({success: false, message: 'Tidak ada data pengguna dengan nama tersebut'})
            }
            if (!password) {
                if (ttd) {
                    await modelKalab.update({
                        nama_kalab: nama_baru || findNamaKalab.nama_kalab,
                        ttd_kalab: ttd.originalname,
                    }, {
                        where:{nama_kalab: nama}
                    })
                    return res.status(200).json({success: true, message: 'Data akun kepala laboratorium berhasi diperbaharui'})
                }
                await modelKalab.update({
                    nama_kalab: nama_baru || findNamaKalab.nama_kalab,
                }, {
                    where:{nama_kalab: nama}
                })
                return res.status(200).json({success: true, message: 'Data akun kepala laboratorium berhasil diperbaharui'})
            }
            const salt = bcrypt.genSaltSync(10)
            const hashedPass = bcrypt.hashSync(password, salt)
            if (ttd) {
                await modelKalab.update({
                    nama_kalab: nama_baru || findNamaKalab.nama_kalab,
                    password_kalab: hashedPass,
                    ttd_kalab: ttd.originalname,
                }, {
                    where:{
                        nama_kalab: nama
                    }
                })        
                return res.status(200).json({success: true, message: 'Data akun kepala laboratorium diperbaharui'})    
            }
            await modelKalab.update({
                nama_kalab: nama_baru || findNamaKalab.nama_kalab,
                password_kalab: hashedPass,
            }, {
                where:{
                    nama_kalab: nama
                }
            })
            return res.status(200).json({success: true, message: 'Data kepala laboratorium berhasil diperbaharui'})
        }
        const findRole = await modelRoleAsisten.findOne({where: {nama_role: role}})
        if (!findRole) {
            return res.status(400).json({success: false, message: 'Data role asisten tidak ditemukan'})
        }
        if (!password) {
            if (ttd) {
                await modelAsisten.update({
                    nama_asisten: nama_baru || findNamaAsisten.nama_asisten,
                    ttd_asisten: ttd.originalname,
                    role: findRole.id_role || findNamaAsisten.id_role
                }, {
                    where:{
                        nama_asisten: nama
                    }
                })
                return res.status(200).json({success: true, message: 'Data akun asisten berhasil diperbaharui'})
            }
            await modelAsisten.update({
                nama_asisten: nama_baru || findNamaAsisten.nama_asisten,
                role: findRole.id_role || findNamaAsisten.id_rp
            }, {
                where:{nama_asisten: nama}
            })
            return res.status(200).json({success: true, message: 'Data akun asisten berhasil diperbaharui'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPass = bcrypt.hashSync(password, salt)
        
        if (ttd) {
            await modelAsisten.update({
                nama_asisten: nama_baru || findNamaAsisten.nama_asisten,
                password_asisten: hashedPass,
                ttd_asisten: ttd.originalname,
                role: findRole.id_role || findNamaAsisten.id_role
            }, {
                where:{
                    nama_asisten: nama
                }
            })
            return res.status(200).json({success: true, message: 'Data akun asisten berhasil diperbaharui'})   
        }
        await modelAsisten.update({
            nama_asisten: nama_baru || findNamaAsisten.nama_asisten,
            password_asisten: hashedPass || findNamaAsisten.password_asisten,
    
            role: findRole.id_role || findNamaAsisten.id_role
        }, {
            where: {
                nama_asisten: nama
            }
        })
        return res.status(200).json({success: true, message: 'Data asisten berhasil diperbaharui'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }    
}

module.exports = {tambahRole, uploadd, tambahPengguna, dataPengguna, detailPengguna, hapusPengguna, editPengguna}