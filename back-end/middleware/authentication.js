const jwt = require('jsonwebtoken')
const modelTokenAdmin = require('../models/token_admin')
const modelTokenAsisten = require('../models/token_asisten')
const modelTokenMahasiswa = require('../models/token_mahasiswa')
const modelTokenKalab = require('../models/token_kalab')
const modelAsisten = require('../models/asisten')
const modelRole = require('../models/role_asisten')

const verifyTokenAdmin = (req, res, next) => {    
    try {
        const authHeader = req.get('Authorization');
    
        if (!authHeader) {
            res.status(404).json({
                success: false,
                message: 'Masukkan token terlebih dahulu'
            })
        }

        const token = authHeader.split(' ')[1];
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, admin) => {
            if (err) {
                console.error(err);
                return res.status(401).json({ success: false, message: err });
            }

            const adaToken = await modelTokenAdmin.findOne({where: {token}})
            if (!adaToken) {
                return res.status(401).json({ success: false, message: "Tidak ada token atau sudah logout sebelumnya" });
            }

            const date = new Date()
            const tanggal = date.getDate()
            if (tanggal > adaToken.expires_at) {
                return res.status(400).json({success: false, message: 'Token Sudah Kadaluarsa'})
            } else {
                req.admin = admin;
                next();
            }
        });
        
    } catch (error) {
        console.error(error)
        res.status(404).json({
            success: false,
            message: 'Session Token Has Expired'
        })
    }
};

const verifyTokenAsisten = (req, res, next) => {    
    try {
        const authHeader = req.get('Authorization');
    
        if (!authHeader) {
            res.status(404).json({
                success: false,
                message: 'Masukkan token terlebih dahulu'
            })
        }

        const token = authHeader.split(' ')[1];
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, asisten) => {
            if (err) {
                console.error(err);
                return res.status(401).json({ success: false, message: err });
            }

            const adaToken = await modelTokenAsisten.findOne({where: {token}})
            if (!adaToken) {
                return res.status(401).json({ success: false, message: "Tidak ada token atau sudah logout sebelumnya" });
            }

            const date = new Date()
            const tanggal = date.getDate()
            if (tanggal > adaToken.expires_at) {
                return res.status(400).json({success: false, message: 'Token Sudah Kadaluarsa'})
            } else {
                const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                const id_asisten = decoded.id_asisten
                const findAsisten = await modelAsisten.findOne({
                    where:{
                        id_asisten: id_asisten
                    },
                    include: [
                        {
                            model: modelRole,
                            as: 'dataRole',
                            attributes: ['nama_role']
                        }
                    ]
                }) 
                if (findAsisten.dataRole.dataValues.nama_role != 'Asisten') {
                    return res.status(400).json({success: false, message: 'Anda tidak memiliki akses halaman ini'})
                }
                req.asisten = asisten;
                next();
            }
        });
        
    } catch (error) {
        console.error(error)
        res.status(404).json({
            success: false,
            message: 'Session Token Has Expired'
        })
    }
};

const verifyTokenKalab = (req, res, next) => {    
    try {
        const authHeader = req.get('Authorization');
    
        if (!authHeader) {
            res.status(404).json({
                success: false,
                message: 'Masukkan token terlebih dahulu'
            })
        }

        const token = authHeader.split(' ')[1];
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, kalab) => {
            if (err) {
                console.error(err);
                return res.status(401).json({ success: false, message: err });
            }

            const adaToken = await modelTokenKalab.findOne({where: {token}})
            if (!adaToken) {
                return res.status(401).json({ success: false, message: "Tidak ada token atau sudah logout sebelumnya" });
            }

            const date = new Date()
            const tanggal = date.getDate()
            if (tanggal > adaToken.expires_at) {
                return res.status(400).json({success: false, message: 'Token Sudah Kadaluarsa'})
            } else {
                req.kalab = kalab;
                next();
            }
        });
        
    } catch (error) {
        console.error(error)
        res.status(404).json({
            success: false,
            message: 'Session Token Has Expired'
        })
    }
};

const verifyTokenMahasiswa = (req, res, next) => {    
    try {
        const authHeader = req.get('Authorization');
    
        if (!authHeader) {
            res.status(404).json({
                success: false,
                message: 'Masukkan token terlebih dahulu'
            })
        }

        const token = authHeader.split(' ')[1];
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, mahasiswa) => {
            if (err) {
                console.error(err);
                return res.status(401).json({ success: false, message: err });
            }

            const adaToken = await modelTokenMahasiswa.findOne({where: {token}})
            if (!adaToken) {
                return res.status(401).json({ success: false, message: "Tidak ada token atau sudah logout sebelumnya" });
            }

            const date = new Date()
            const tanggal = date.getDate()
            if (tanggal > adaToken.expires_at) {
                return res.status(400).json({success: false, message: 'Token Sudah Kadaluarsa'})
            } else {
                req.mahasiswa = mahasiswa;
                next();
            }
        });
        
    } catch (error) {
        console.error(error)
        res.status(404).json({
            success: false,
            message: 'Session Token Has Expired'
        })
    }
};

const verifyTokenKordas = (req, res, next) => {    
    try {
        const authHeader = req.get('Authorization');
    
        if (!authHeader) {
            res.status(404).json({
                success: false,
                message: 'Masukkan token terlebih dahulu'
            })
        }

        const token = authHeader.split(' ')[1];
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, asisten) => {
            if (err) {
                console.error(err);
                return res.status(401).json({ success: false, message: err });
            }

            const adaToken = await modelTokenAsisten.findOne({where: {token}})
            if (!adaToken) {
                return res.status(401).json({ success: false, message: "Tidak ada token atau sudah logout sebelumnya" });
            }

            const date = new Date()
            const tanggal = date.getDate()
            if (tanggal > adaToken.expires_at) {
                return res.status(400).json({success: false, message: 'Token Sudah Kadaluarsa'})
            } else {
                const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                const id_asisten = decoded.id_asisten
                const findAsisten = await modelAsisten.findOne({
                    where:{
                        id_asisten: id_asisten
                    },
                    include: [
                        {
                            model: modelRole,
                            as: 'dataRole',
                            attributes: ['nama_role']
                        }
                    ]
                }) 
                if (findAsisten.dataRole.dataValues.nama_role != 'Koordinator Asisten') {
                    return res.status(400).json({success: false, message: 'Anda tidak memiliki akses halaman ini'})
                }
                req.asisten = asisten;
                next();
            }
        });
        
    } catch (error) {
        console.error(error)
        res.status(404).json({
            success: false,
            message: 'Session Token Has Expired'
        })
    }
};

module.exports = {verifyTokenAdmin, verifyTokenAsisten, verifyTokenKalab, verifyTokenMahasiswa, verifyTokenKordas}