const modelKalab = require('../../models/kepala_lab')
const modelTokenKalab = require('../../models/token_kalab')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//login kalab
const loginKalab = async (req,res) =>{
    try {
        const {nip_kalab, password_kalab} = req.body
        if (!nip_kalab || !password_kalab) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data akun anda'})
        }
        const findAkun = await modelKalab.findByPk(nip_kalab)
        if (!findAkun) {
            return res.status(400).json({success: false, message: 'Akun anda tidak ditemukan'})
        }
        bcrypt.compare(password_kalab, findAkun.password_kalab, async (err, results) => {
            if (err || !results) {
                return res.status(400).json({success: false, message: 'Kata sandi anda salah'})
            }

            const nip_kalab = findAkun.nip_kalab
            const token = jwt.sign(
                {
                    nip_kalab
                },
                process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '1w'
                }
            )
            await modelTokenKalab.create({
                nip_kalab: nip_kalab,
                token: token
            })
            return res.status(200).json({success: true, message: 'Login Berhasil', token: token})
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//logout kalab
const logoutKalab = async (req,res) => {
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
 
             const adaToken = await modelTokenKalab.findOne({where: {token}})
             if (!adaToken) {
                 return res.status(401).json({ succes: false, message: "Tidak ada token atau sudah logout sebelumnya" });
             }
             
             await modelTokenKalab.destroy({ where: {token}});
         
             res.status(200).json({ success: true, message: 'Logout berhasil' });
         });
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports= {loginKalab, logoutKalab}