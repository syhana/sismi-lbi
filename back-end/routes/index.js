const admin = require('./admin/admin')
const akunPengguna = require('./admin/akunPengguna')
const barang = require('./admin/barang')
const profileAdmin = require('./admin/profile')
const server = {}

server.admin = admin
server.akunPengguna = akunPengguna
server.barang = barang
server.profileAdmin = profileAdmin

module.exports = server