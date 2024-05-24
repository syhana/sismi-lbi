var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const server = require('./routes/index')
const cors = require('cors')
const multer = require('multer')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/fileSuratMahasiswa', express.static('public/doc/suratMahasiswa'))
app.use('/fileSuratMasuk', express.static('public/Asisten/suratMasuk'))
app.use('/fileSuratKeluar', express.static('public/Asisten/suratKeluar'))
app.use('/ttd', express.static('public/images/ttd'))
app.use(cors({
  origin: 'http://localhost:5137'
})) 

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  } else {
    next(err);
  }
});

app.use('/', server.admin)
app.use('/', server.akunPengguna)
app.use('/', server.barang)
app.use('/', server.profileAdmin)
app.use('/', server.mahasiswa)
app.use('/', server.generateSurat)
app.use('/', server.kelolaSuratMhs)
app.use('/', server.disposisiMhs)
app.use('/', server.profileMhs)
app.use('/', server.asisten)
app.use('/', server.suratMasukAsisten)
app.use('/', server.suratKeluarAsisten)
app.use('/', server.disposisiSuratAsisten)
app.use('/', server.myDisposisi)
app.use('/', server.profileAsisten)
app.use('/', server.DisposisiKordas)
app.use('/', server.kalab)
app.use('/', server.disposisiKalab)
app.use('/', server.laporanSuratMasuk)
app.use('/', server.laporanSuratKeluar)
app.use('/', server.profileKalab)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
