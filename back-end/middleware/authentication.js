const jwt = require('jsonwebtoken')
const modelTokenAdmin = require('../models/token_admin')
const modelTokenAsisten = require('../models/token_asisten')
const modelTokenMahasiswa = require('../models/token_mahasiswa')
const modelTokenKalab = require('../models/token_kalab')

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
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, admin) => {
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
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, admin) => {
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
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, admin) => {
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

module.exports = {verifyTokenAdmin, verifyTokenAsisten, verifyTokenKalab, verifyTokenMahasiswa}