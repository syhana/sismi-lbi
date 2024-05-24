const modelSuratMasuk = require('../../models/surat_masuk')
const modelMahasiswa = require('../../models/mahasiswa')
const modelAsisten = require('../../models/asisten')
const modelSuratMahasiswa = require('../../models/surat_mahasiswa')
const {Sequelize, Op} = require('sequelize')
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");



//generate laporan surat masuk
const generateLaporanMasuk = async (req,res) =>{
    try {
        const {tanggal_awal, tanggal_akhir} = req.body
        const findSuratMasuk = await modelSuratMasuk.findAll({
            where: {
                created_at: {
                    [Op.between]: [
                        tanggal_awal + ' 00:00:00',
                        tanggal_akhir + ' 23:59:59'
                    ]
                }
            },
            attributes: [
                'no_surat_masuk',
                'nama_surat_masuk',
                [Sequelize.literal("DATE_FORMAT(surat_masuk.created_at, '%d-%m-%Y')"), 'created_at'],
                'id_asisten',
                'id_surat_mahasiswa'
            ],
            include:[
                {
                    model: modelAsisten,
                    as: 'dataAsisten',
                    attributes: ['nama_asisten']
                },
                {
                    model: modelSuratMahasiswa,
                    as: 'dataSuratMasukMhs',
                    attributes: ['id_surat_mahasiswa'],
                    include: [
                        {
                            model: modelMahasiswa,
                            as: 'dataMahasiswa',
                            attributes: ['nama_mahasiswa']
                        }
                    ]
                }
            ]
        });        
        if (findSuratMasuk.length === 0) {
            return res.status(400).json({success: false, message: 'Data surat masuk belum tersedia'})
        }
        const content = fs.readFileSync(
            path.resolve(__dirname, __dirname, '../', '../', 'public', 'doc', 'template', 'Laporan_Surat Masuk.docx'),
          "binary"
        )
        const zip = new PizZip(content)
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true, 
            linebreaks: true
        })

        // console.log(findSuratMasuk)

        let dataSurat = []
        for (let index = 0; index < findSuratMasuk.length; index++) {
            const dataAsisten = findSuratMasuk[index].dataAsisten;
            const dataSuratMasukMhs = findSuratMasuk[index].dataSuratMasukMhs;

            const data = {
                "no": index + 1,
                "nomor_surat": findSuratMasuk[index].no_surat_masuk,
                "tanggal_surat": findSuratMasuk[index].created_at,
                "perihal_surat": findSuratMasuk[index].nama_surat_masuk,
                "dari": dataAsisten ? dataAsisten.nama_asisten : dataSuratMasukMhs.dataMahasiswa.nama_mahasiswa,
                "keterangan": '-'
            }

            dataSurat.push(data)
        }

        doc.render({
            "surat": dataSurat
        })

        const buf = doc.getZip().generate({
            type: "nodebuffer",
            compression: "DEFLATE",
        });
        
        const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
        const fileName = `Laporan_Surat_Masuk_${tanggal_awal}_${tanggal_akhir}_${timestamp}.docx`;
  
        fs.writeFileSync(path.resolve(__dirname, '../', '../', 'public', 'doc', 'laporanSuratMasuk', fileName), buf); 
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
   
        res.send(buf);

        // return res.status(200).json({success: true, message: 'Laporan berhasil digenerate'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

module.exports = {generateLaporanMasuk}