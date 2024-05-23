const modelAsisten = require('../../models/asisten')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const modelTokeAsisten = require('../../models/token_asisten')

//login
const loginAsiten = async (req,res) => {
    try {
        const {nama, kataSandi} = req.body
        if (!nama || !kataSandi) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data akun anda'})
        }
        const findAsisten = await modelAsisten.findOne({where:{nama_asisten: nama}})
        if (!findAsisten) {
            return res.status(400).json({success: false, message: 'Akun anda tidak ditemukan'})
        }    
        bcrypt.compare(kataSandi, findAsisten.password_asisten, async (err, results) => {
            if (err || !results) {
                return res.status(400).json({success: false, message: 'Kata sandi anda salah'})
            }

            const id_asisten = findAsisten.id_asisten
            const id_role = findAsisten.id_role
            const token = jwt.sign(
                {
                    id_asisten, id_role
                },
                process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '1w'
                }
            )
            await modelTokeAsisten.create({
                id_asisten: id_asisten,
                token: token
            })
            return res.status(200).json({success: true, message: 'Login Berhasil', token: token})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//logout
const logoutAsisten = async (req,res) => {
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
 
             const adaToken = await modelTokeAsisten.findOne({where: {token}})
             if (!adaToken) {
                 return res.status(401).json({ succes: false, message: "Tidak ada token atau sudah logout sebelumnya" });
             }
             
             await modelTokeAsisten.destroy({ where: {token}});
         
             res.status(200).json({ success: true, message: 'Logout berhasil' });
         });
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {loginAsiten, logoutAsisten}