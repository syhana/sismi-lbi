const modelJenisSurat = require('../../models/jenis_surat')
const modelGenerateSurat = require('../../models/generate_surat')
const modelDetailGenerateSurat = require('../../models/detail_generate_surat')

//tampil jenis surat
const allJenisSurat = async (req,res) => {
    try {
        const findData = await modelJenisSurat.findAll({
            attributes: ['id_jenis', 'nama_jenis']
        })
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data jenis surat belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data jenis surat sudah tersedia', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//tambah generate

module.exports = {allJenisSurat}