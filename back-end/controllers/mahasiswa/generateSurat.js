const modelJenisSurat = require('../../models/jenis_surat')
const modelGenerateSurat = require('../../models/generate_surat')
const modelDetailGenerateSurat = require('../../models/detail_generate_surat')
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
const modelAsisten = require('../../models/asisten')
const modelRoleAsisten = require('../../models/role_asisten')
const modelMahasiswa = require('../../models/mahasiswa')
const modelKalab = require('../../models/kepala_lab')
const modelBarang = require('../../models/barang')

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

//tambah jenis surat 
const tambahSurat = async (req,res) => {
    try {
        const {nama_jenis} = req.body
        if (!nama_jenis) {
            return res.status(400).json({success: false, message: 'Silahkan isi nama jenis surat'})
        }
        await modelJenisSurat.create({
            nama_jenis: nama_jenis
        })
        return res.status(200).json({success: true, message: 'Jenis surat berhasil ditambahkan'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}

//tampil data barang tersedia
const allBarang = async (req,res) => {
    try {
        const findData = await modelBarang.findAll({
            where:{
                status_barang: 'Tersedia'
            },
            attributes: ['id_barang', 'nama_barang']
        })
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data barang belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data barang tersedia', data:findData})
    } catch (error) {
        console.log(error)
        return res.status(500).josn({success: false, message: 'Kesalahan Server'})
    }
}

//generate surat 
const generateSurat = async (req,res) => {
    try {
        const {id_jenis} = req.params
        let i = 1;
        const nim_mahasiswa = req.mahasiswa.nim_mahasiswa
        const findMhs = await modelMahasiswa.findByPk(nim_mahasiswa)
        if (!findMhs) {
            return res.status(400).json({success: false, message: 'Data mahasiswa tidak ditemukan'})
        }
        const findJenis = await modelJenisSurat.findByPk(id_jenis)
        if (!findJenis) {
            return res.status(400).json({success: false, message: 'Jenis surat tidak ditemukan'})
        }
        const findKoor = await modelAsisten.findOne({
            include: [
                {
                    model: modelRoleAsisten,
                    as: 'dataRole',
                    where:{
                        nama_role: 'koordinator asisten'
                    },
                    attributes: ['nama_role']
                }
            ],
            attributes: ['nama_asisten']
        })
        if (!findKoor) {
            return res.status(400).json({success: false, message: 'Data koordinator asisten tidak ditemukan'})
        }

        const findKalab = await modelKalab.findOne()
        if (!findKalab) {
            return res.status(400).json({success: false, message: 'Data kalab tidak ditemukan'})
        }

        const {nama_generate, keperluan_peminjaman_ruangan, tanggal_peminjaman_ruangan, waktu_peminjaman_ruangan, keperluan_peminjaman_barang, tanggal_peminjaman_barang, id_barang} = req.body
        let total = 0
        const findAllGenerate = await modelGenerateSurat.findAll()
        if (findAllGenerate.length <= 0) {
            total = total + 1
        }
        total = total + findAllGenerate.length + 1

        const findGenerate = await modelGenerateSurat.findOne({where:{nama_generate: nama_generate}})
        if (findGenerate) {
            return res.status(400).json({success: false, message: 'Nama generate sudah digunakan'})
        }

        const date = new Date()
        const day = date.getDay()
        const tanggal = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        
        const dayName = days[day]; 
        const monthName = months[month]; 
    
        if (findJenis.nama_jenis == "Surat Peminjaman Ruangan") {
            if (!nama_generate || !keperluan_peminjaman_ruangan || !tanggal_peminjaman_ruangan || !waktu_peminjaman_ruangan) {
                return res.status(400).json({success: false, message: 'Silahkan lengkapi data surat anda'})
            }

            const content = fs.readFileSync(
                path.resolve(__dirname,  '../', '../', 'public', 'doc', 'template', 'Surat_Formulir Peminjaman Ruangan.docx'),
                "binary"
            );

            const zip = new PizZip(content);

            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            doc.render({
                no_surat: `${total}`,
                tanggal: `${tanggal}`,
                bulan: `${monthName}`,
                tahun: `${year}`,
                nama_mahasiswa: `${findMhs.nama_mahasiswa}`,
                nim_mahasiswa: `${nim_mahasiswa}`,
                keperluan_peminjaman_ruangan: `${keperluan_peminjaman_ruangan}`,
                tanggal_peminjaman_ruangan: `${tanggal_peminjaman_ruangan}`,
                waktu_peminjaman_ruangan: `${waktu_peminjaman_ruangan}`,
                koordinator_asisten: `${findKoor.nama_asisten}`,
                nama_kalab: `${findKalab.nama_kalab}`,
                nip_kalab: `${findKalab.nip_kalab}`
            });

            const buf = doc.getZip().generate({
                type: "nodebuffer",
                compression: "DEFLATE",
            });

            fs.writeFileSync(path.resolve(__dirname,  '../', '../', 'public', 'doc', 'generate', `${nama_generate}_${findMhs.nama_mahasiswa}_PeminjamanRuangan.docx`), buf);
            await modelGenerateSurat.create({
                id_jenis: id_jenis,
                nama_generate: nama_generate,
                nim_mahasiswa: nim_mahasiswa,
                keperluan_peminjaman_ruang: keperluan_peminjaman_ruangan,
                tanggal_peminjaman_ruang: tanggal_peminjaman_ruangan,
                waktu_peminjaman_ruang: waktu_peminjaman_ruangan,
                hasil_generate: `${nama_generate}_${findMhs.nama_mahasiswa}.docx`
            })
            res.download(docxPath, `${nama_generate}_${findMhs.nama_mahasiswa}_PeminjamanRuangan.docx`, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ success: false, message: 'Terjadi kesalahan saat mengunduh file' });
                }
            });

        } else if (findJenis.nama_jenis == 'Surat Peminjaman Barang') {
            if (!nama_generate || !keperluan_peminjaman_barang || !tanggal_peminjaman_barang) {
                return res.status(400).json({success: false, message: 'Silahkan lengkapi data surat anda'})
            }
            let barang = []
            if (!Array.isArray(id_barang)) {
                return res.status(400).json({success: false, message: 'Data barang harus dalam bentuk array'})
            }

            for (const item of id_barang) {
                const{dataBarang} = item
                barang.push({ dataBarang });
            }

            const content = fs.readFileSync(
                path.resolve(__dirname,  '../', '../', 'public', 'doc', 'template', 'Surat_Formulir Peminjaman Peralatan.docx'),
                "binary"
            );

            const zip = new PizZip(content);

            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });
            
            const namaBarang = []
            for (let index = 0; index < barang.length; index++) {
                const findBarang = await modelBarang.findOne({where:{id_barang: barang[index].dataBarang}})
                if (!findBarang) {
                    return res.status(400).json({success: false, message: 'Data barang tidak ditemukan'})
                }
                namaBarang.push(findBarang.nama_barang)
            }

            const listBarang = []

            for (let index = 0; index < namaBarang.length; index++) {
                const dataBarang = {
                    "no_list": index + 1,
                    "nama_barang": namaBarang[index]
                }
                listBarang.push(dataBarang)
            }

            doc.render({
                nomor: total,
                tahun: year,
                hari: dayName,
                bulan: monthName,
                nama_mahasiswa: findMhs.nama_mahasiswa,
                nim_mahasiswa: nim_mahasiswa,
                keperluan_pinjam: keperluan_peminjaman_barang,
                tanggal: tanggal,
                barang: listBarang,
                koordinator_asisten: findKoor.nama_asisten,
                nama_mahasiswa: findMhs.nama_mahasiswa,
                nama_kalab: findKalab.nama_kalab,
                nip_kalab: findKalab.nip_kalab
            });

            const buf = doc.getZip().generate({
                type: "nodebuffer",
                compression: "DEFLATE",
            });

            fs.writeFileSync(path.resolve(__dirname,  '../', '../', 'public', 'doc', 'generate', `${nama_generate}_${findMhs.nama_mahasiswa}_PeminjamanBarang.docx`), buf);

            const addGenerate = await modelGenerateSurat.create({
                id_jenis: id_jenis,
                nama_generate: nama_generate,
                keperluan_peminjaman_barang: keperluan_peminjaman_barang,
                tanggal_peminjaman_barang: tanggal_peminjaman_barang,
                hasil_generate: `${nama_generate}_${findMhs.nama_mahasiswa}_PeminjamanBarang.docx`,
                nim_mahasiswa: nim_mahasiswa
            })
            if (!addGenerate) {
                return res.status(400).json({success: false, message: 'Data generate tidak berhasil ditambahkan'})
            }
            for (let index = 0; index < barang.length; index++) {
                await modelDetailGenerateSurat.create({
                    id_generate: addGenerate.id_generate,
                    id_barang: barang[index].dataBarang
                })
            }
            res.download(docxPath, `${nama_generate}_${findMhs.nama_mahasiswa}_PeminjamanBarang.docx`, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ success: false, message: 'Terjadi kesalahan saat mengunduh file' });
                }
            });
        } else {
            if (!nama_generate) {
                return res.status(400).json({success: false, message: 'Silahkan lengkapi data surat anda'})
            }
            const content = fs.readFileSync(
                path.resolve(__dirname,  '../', '../', 'public', 'doc', 'template', 'Surat_Permohonan Pengerjaan TA.docx'),
                "binary"
            );

            const zip = new PizZip(content);

            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            doc.render({
                nomor: total,
                tahun: year,
                tanggal: tanggal,
                bulan: monthName,
                nama_mahasiswa: findMhs.nama_mahasiswa,
                nim_mahasiswa: nim_mahasiswa,
                alamat_mahasiswa: findMhs.alamat_mahasiswa,
                koordinator_asisten: findKoor.nama_asisten,
                nama_kalab: findKalab.nama_kalab,
                nip_kalab: findKalab.nip_kalab
            });

            const buf = doc.getZip().generate({
                type: "nodebuffer",
                compression: "DEFLATE",
            });

            const docxPath = path.resolve(__dirname, '../', '../', 'public', 'doc', 'generate', `${nama_generate}_${findMhs.nama_mahasiswa}_PengerjaanTA.docx`);
            fs.writeFileSync(docxPath, buf);

            await modelGenerateSurat.create({
                id_jenis: id_jenis,
                nim_mahasiswa: nim_mahasiswa,
                nama_generate: nama_generate,
                hasil_generate: `${nama_generate}_${findMhs.nama_mahasiswa}_PengerjaanTA.pdf`
            })
            
            res.download(docxPath, `${nama_generate}_${findMhs.nama_mahasiswa}_PengerjaanTA.docx`, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ success: false, message: 'Terjadi kesalahan saat mengunduh file' });
                }
            });
        }
        i++;
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan Server'})
    }
}


module.exports = {allJenisSurat, tambahSurat, generateSurat, allBarang}