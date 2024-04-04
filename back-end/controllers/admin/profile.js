const modelAdmin = require('../../models/admin')
const bcrypt = require('bcrypt')

//detail akun
const detailAkun = async (req,res) => {
    try {
        const id_admin = req.admin.id_admin
        const findAkun = await modelAdmin.findByPk(id_admin, {
            attributes: ['id_admin', 'username']
        })
        if (!findAkun) {
            return res.status(400).json({success: false, message: 'Akun admin tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Akun admin ditemukan', data: findAkun})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//update akun
const updateAkun = async (req,res) => {
    try {
        const id_admin = req.admin.id_admin
        const {username, password_lama, password_baru} = req.body
        const findAkun = await modelAdmin.findByPk(id_admin)
        if (!findAkun) {
            return res.status(400).json({success: false, message: 'Akun admin tidak ditemukan'})
        }
        if (password_lama) {
            if (!password_baru) {
                return res.status(400).json({success: false, message: 'Silahkan isikan password baru anda'})
            }
            bcrypt.compare(password_lama, findAkun.password, async (err, result) => {
                if (err || !result) {
                    return res.status(400).json({success: false, message: 'Password lama anda salah'})
                }
                const salt = bcrypt.genSaltSync(10)
                const hashedPass = bcrypt.hashSync(password_baru, salt)
    
                const updateAkun = await modelAdmin.update({
                    username: username || findAkun.username,
                    password_baru: hashedPass
                }, {
                    where:{id_admin: id_admin}
                })
                if (!updateAkun) {
                    return res.status(400).json({success: false, message: 'Data admin tidak berhasil diperbaharui'})
                }
                return res.status(200).json({success: true, message: 'Data akun berhasil diperbaharui'})
    
            })
        }
        await modelAdmin.update({
            username: username || findAkun.username
        }, {
            where: {id_admin: id_admin}
        })
        return res.status(200).json({success: true, message: 'Data akun admin berhasil diperbaharui'})
            
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message: 'Kesalahan server'})
    }   
}

module.exports = {detailAkun, updateAkun}