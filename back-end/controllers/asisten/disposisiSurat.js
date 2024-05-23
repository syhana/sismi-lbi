const modelDisposisiSurat = require('../../models/disposisi_surat')
const modelSuratMahasiswa = require('../../models/surat_mahasiswa')
const modelMahasiswa = require('../../models/mahasiswa')
const { Op } = require('sequelize');

//tampil seluruh data disposisi (hanya yang dari mahasiswa)
const dataDisposisi = async (req,res) => {
    try {
        const findData = await modelDisposisiSurat.findAll({
            where: {
                id_surat_mahasiswa: {
                    [Op.ne]: null
                }
            },
            include: [
                {
                    model: modelSuratMahasiswa,
                    as: 'dataSuratMhs',
                    attributes: ['file_surat_mahasiswa']
                },
                {
                    model: modelMahasiswa,
                    as: 'dataDisposisiPemberi',
                    attributes: ['nama_mahasiswa']
                }
            ],
            attributes: ['id_disposisi', 'id_surat_mahasiswa', 'pemberi_disposisi_mahasiswa', 'status_disposisi']
        }); 
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data disposisi surat belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data disposisi surat tersedia', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//menolak
const menolakDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi)
        if (!findDisposisi) {
            return res.status(400).json({success: false, message:'Data disposisi surat tidak ditemukan'})
        }
        await modelDisposisiSurat.update({
            status_disposisi: 'ditolak'
        }, {
            where:{
                id_disposisi: id_disposisi
            }
        })
        return res.status(200).json({success:true, message: 'Disposisi surat berhasil ditolak'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//mengirim disposisi
const kirimDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi)
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi surat tidak ditemukan'})
        }
        if (findDisposisi.status_disposisi == 'TTD Kalab' || findDisposisi.status_disposisi == 'ditolak' || findDisposisi.status_disposisi == 'selesai') {
            return res.status(400).json({success: false, message: 'Tidak dapat melakukan pengiriman disposisi surat'})
        }
        await modelDisposisiSurat.update({
            status_disposisi: 'TTD Kordas'
        }, {
            where:{
                id_disposisi: id_disposisi
            }
        })
        return res.status(200).json({success: true , message: 'Disposisi surat berhasil dikirim'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//menyelesaikan disposisi
const selesaiDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi)
        if (!findDisposisi) {
           return res.status(400).json({success: false, message: 'Data disposisi surat tidak ditemukan'}) 
        }
        if (findDisposisi.status_disposisi !== 'TTD Kalab') {
            return res.status(400).json({success: false, message: 'Anda belum dapat menyelesaikan proses disposisi surat'})
        }
        await modelDisposisiSurat.update({
            status_disposisi: 'selesai'
        },{
            where:{
                id_disposisi: id_disposisi
            }
        })
        return res.status(200).json({success: true, message: 'Data disposisi surat berhasil diselesaikan'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}


//detail surat
const detailSurat = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi, {
            include: [
                {
                    model: modelSuratMahasiswa,
                    as: 'dataSuratMhs', 
                    attributes: ['nama_surat_mahasiswa','file_surat_mahasiswa']
                }
            ],
            attributes: ['id_surat_mahasiswa']
        })
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi surat tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data disposisi surat ditemukan', data: findDisposisi})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {dataDisposisi, menolakDisposisi, kirimDisposisi, selesaiDisposisi, detailSurat}