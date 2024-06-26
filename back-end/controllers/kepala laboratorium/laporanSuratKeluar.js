const modelSuratKeluar = require('../../models/surat_keluar')
const modelMahasiswa = require('../../models/mahasiswa')
const modelAsisten = require('../../models/asisten')
const modelSuratMahasiswa = require('../../models/surat_mahasiswa')
const {Sequelize, Op} = require('sequelize')
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");



//generate laporan surat masuk
const generateLaporanKeluar = async (req, res) => {
    try {
        const { tanggal_awal, tanggal_akhir } = req.body;
        const findSuratKeluar = await modelSuratKeluar.findAll({
            where: {
                created_at: {
                    [Op.between]: [
                        tanggal_awal + ' 00:00:00',
                        tanggal_akhir + ' 23:59:59'
                    ]
                }
            },
            attributes: [
                'no_surat_keluar',
                'nama_surat_keluar',
                [Sequelize.literal("DATE_FORMAT(surat_keluar.created_at, '%d-%m-%Y')"), 'created_at'],
                'id_asisten',
            ],
            include: [
                {
                    model: modelAsisten,
                    as: 'dataAsisten',
                    attributes: ['nama_asisten']
                }
            ]
        });

        if (findSuratKeluar.length === 0) {
            return res.status(400).json({ success: false, message: 'Data surat keluar belum tersedia' });
        }

        const content = fs.readFileSync(path.resolve(__dirname, '../', '../', 'public', 'doc', 'template', 'Laporan_Surat Keluar.docx'), "binary");
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true
        });

        let dataSurat = findSuratKeluar.map((surat, index) => ({
            "no": index + 1,
            "nomor_surat": surat.no_surat_keluar,
            "tanggal_surat": surat.created_at,
            "perihal_surat": surat.nama_surat_keluar,
            "dari": surat.dataAsisten.nama_asisten,
            "keterangan": '-'
        }));

        doc.render({ "surat": dataSurat });

        const buf = doc.getZip().generate({ type: "nodebuffer", compression: "DEFLATE" });

        const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
        const fileName = `Laporan_Surat_Keluar_${tanggal_awal}_${tanggal_akhir}_${timestamp}.docx`;
        const outputPath = path.resolve(__dirname, '../', '../', 'public', 'doc', 'laporanSuratKeluar', fileName);

        fs.writeFileSync(outputPath, buf);

        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.download(outputPath, fileName);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Kesalahan Server' });
    }
};
module.exports = {generateLaporanKeluar}
