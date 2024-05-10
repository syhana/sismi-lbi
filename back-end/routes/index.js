const admin = require('./admin/admin')
const akunPengguna = require('./admin/akunPengguna')
const barang = require('./admin/barang')
const profileAdmin = require('./admin/profile')
const mahasiswa = require('./mahasiswa/mahasiswa')
const generateSurat = require('./mahasiswa/generateSurat')
const kelolaSuratMhs = require('./mahasiswa/kelolaSurat')
const disposisiMhs = require('./mahasiswa/disposisi')
const profileMhs = require('./mahasiswa/profile')
const server = {}

server.admin = admin
server.akunPengguna = akunPengguna
server.barang = barang
server.profileAdmin = profileAdmin
server.mahasiswa = mahasiswa
server.generateSurat = generateSurat
server.kelolaSuratMhs = kelolaSuratMhs
server.disposisiMhs = disposisiMhs
server.profileMhs = profileMhs

module.exports = server