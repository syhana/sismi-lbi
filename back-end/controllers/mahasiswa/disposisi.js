const modelDisposisiSurat = require('../../models/disposisi_surat')
const modelSuratMahasiswa = require('../../models/surat_mahasiswa')

// semua data disposisi
const dataDisposisi = async (req,res) => {
    try {
        const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
        const findData = await modelDisposisiSurat.findAll({
            where:{
                pemberi_disposisi_mahasiswa: nim_mahasiswa
            },
            include: [
                {
                    model: modelSuratMahasiswa,
                    attributes: ['id_surat_mahasiswa', 'nama_surat_mahasiswa'],
                    as: 'dataSuratMhs'
                }
            ],
            attributes: ['id_disposisi', 'tujuan_disposisi', 'status_disposisi']
        })
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        return res.status(200).json({success: true, message:'Data disposisi ditemukan', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//data surat mahasiswa
const dataSuratMhs = async (req,res) => {
    try {
        const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
        const findData = await modelSuratMahasiswa.findAll({where:{nim_mahasiswa: nim_mahasiswa}, attributes: ['id_surat_mahasiswa', 'nama_surat_mahasiswa']})
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Surat mahasiswa belum tersedia'})
        }
        return res.status(200).json({success:true, message:'Data surat mahasiswa tersedia', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

// tambah disposisi
const tambahDisposisi = async (req,res) => {
    try {
        const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
        const {id_surat_mahasiswa, tujuan_disposisi} = req.body
        if (!id_surat_mahasiswa || !tujuan_disposisi) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data disposisi anda'})
        }
        const findSurat = await modelSuratMahasiswa.findOne({where:{id_surat_mahasiswa: id_surat_mahasiswa}})
        if (!findSurat) {
            return res.status(400).json({success: false, message: 'Surat anda tidak ditemukan'})
        }
        await modelDisposisiSurat.create({
            id_surat_mahasiswa: id_surat_mahasiswa,
            tujuan_disposisi: tujuan_disposisi,
            status_disposisi: 'menunggu',
            pemberi_disposisi_mahasiswa: nim_mahasiswa,
        })
        return res.status(200).json({success: true, message: 'Disposisi berhasil dikirimkan, Harap menunggu hingga proses selesai!!'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

// edit disposisi
const editDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const {id_surat_mahasiswa, tujuan_disposisi} = req.body
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi)
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        await modelDisposisiSurat.update({
            id_surat_mahasiswa: id_surat_mahasiswa || findDisposisi.id_surat_mahasiswa,
            tujuan_disposisi: tujuan_disposisi || findDisposisi.tujuan_disposisi
        }, {
            where:{
                id_disposisi: id_disposisi
            }
        })
        return res.status(200).json({success: true, message: 'Data disposisi berhasil diperbaharui'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}


// hapus disposisi
const hapusDiposisi = async(req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDisposisi = await modelDisposisiSurat.findByPk(id_disposisi)
        if (!findDisposisi) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        await modelDisposisiSurat.destroy({
            where:{
                id_disposisi: id_disposisi
            }
        })
        return res.status(200).json({success: true, message: 'Data disposisi berhasil dihapus'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

const detailDisposisi = async (req,res) => {
    try {
        const {id_disposisi} = req.params
        const findDetail = await modelDisposisiSurat.findByPk(id_disposisi, {
            include: [
                {
                    model: modelSuratMahasiswa,
                    attributes: ['id_surat_mahasiswa', 'nama_surat_mahasiswa'],
                    as: 'dataSuratMhs'
                }
            ],
            attributes: ['id_disposisi', 'tujuan_disposisi', 'status_disposisi']
        })
        if (!findDetail) {
            return res.status(400).json({success: false, message: 'Data disposisi tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data disposisi ditemukan', data: findDetail})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {dataDisposisi, dataSuratMhs, tambahDisposisi, editDisposisi, hapusDiposisi, detailDisposisi}
