import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound'
import LoginAdmin from './pages/Admin/LoginAdmin';
import TestComponenet from './testComponent';
import AkunPengguna from './pages/Admin/Akun Pengguna/akunPengguna';
import TambahPengguna from './pages/Admin/Akun Pengguna/Tambah/TambahPengguna';
import EditPengguna from './pages/Admin/Akun Pengguna/Edit/editPengguna';
import DetailPengguna from './pages/Admin/Akun Pengguna/Detail/DetailPengguna';
import KelolaBarang from './pages/Admin/Mengelola Barang/kelolaBarang';
import TambahBarang from './pages/Admin/Mengelola Barang/Tambah/TambahBarang';
import EditBarang from './pages/Admin/Mengelola Barang/Edit/EditBarang';
import DetailBarang from './pages/Admin/Mengelola Barang/Detail/DetailBarang';
import Profile from './pages/Admin/Profile/Profile';
import RegisMahasiswa from './pages/Mahasiswa/RegisMahasiswa';
import LoginMahasiswa from './pages/Mahasiswa/LoginMahasiswa';
import GenerateSurat from './pages/Mahasiswa/Generate Surat/GenerateSurat';
import PeminjamanBarang from './pages/Mahasiswa/Generate Surat/PeminjamanBarang';
import PeminjamanRuangan from './pages/Mahasiswa/Generate Surat/PeminjamanRuangan';
import PermohonanTA from './pages/Mahasiswa/Generate Surat/PermohonanTA';
import KelolaSurat from './pages/Mahasiswa/Kelola Surat/KelolaSurat';
import TambahSurat from './pages/Mahasiswa/Kelola Surat/Tambah/TambahSurat';
import EditSurat from './pages/Mahasiswa/Kelola Surat/Edit/EditSurat';
import DetailSurat from './pages/Mahasiswa/Kelola Surat/Detail/DetailSurat';
import DisposisiSurat from './pages/Mahasiswa/Disposisi Surat/DisposisiSurat';
import TambahDisposisi from './pages/Mahasiswa/Disposisi Surat/Tambah/TambahDiposisi';
import EditDisposisi from './pages/Mahasiswa/Disposisi Surat/Edit/EditDisposisi';
import ProfileMhs from './pages/Mahasiswa/Profile/Profile';
import LoginAsisten from './pages/Asisten/LoginAsisten';
import SuratMasuk from './pages/Asisten/Surat Masuk/SuratMasuk';
import TambahSuratMasuk from './pages/Asisten/Surat Masuk/TambahSuratMasuk';
import DetailSuratMasuk from './pages/Asisten/Surat Masuk/DetailSuratMasuk';
import EditSuratMasuk from './pages/Asisten/Surat Masuk/EditSuratMasuk';
import SuratKeluar from './pages/Asisten/Surat Keluar/SuratKeluar';
import TambahSuratKeluar from './pages/Asisten/Surat Keluar/TambahSuratKeluar';
import EditSuratKeluar from './pages/Asisten/Surat Keluar/EditSuratKeluar';
import DetailSuratKeluar from './pages/Asisten/Surat Keluar/DetailSuratKeluar';
import DisposisiSuratAsisten from './pages/Asisten/Disposisi/DisposisiSurat';
import DetailDisposisiAsiten from './pages/Asisten/Disposisi/DetailDisposisi';
import MyDisposisi from './pages/Asisten/Disposisi/MyDisposisi/MyDisposisi';
import TambahMyDisposisi from './pages/Asisten/Disposisi/MyDisposisi/TambahMyDisposisi';
import EditMyDisposisi from './pages/Asisten/Disposisi/MyDisposisi/EditMyDisposisi';
import ProfileAsisten from './pages/Asisten/ProfileAsisten';
import LoginKalab from './pages/Kepala Laboratorium/LoginKalab';
import DisposisiSuratKalab from './pages/Kepala Laboratorium/Disposisi Surat/DisposisiSurat';
import DetailDisposisiKalab from './pages/Kepala Laboratorium/Disposisi Surat/Detail/DetailDisposisiKalab';
import TandaTanganKalab from './pages/Kepala Laboratorium/Disposisi Surat/TTD/TandaTanganKalab';
import LaporanSuratMasuk from './pages/Kepala Laboratorium/Laporan Surat Masuk/LaporanSuratMasuk';
import LaporanSuratKeluar from './pages/Kepala Laboratorium/Laporan Surat Keluar/LaporanSuratKeluar';
import ProfileKalab from './pages/Kepala Laboratorium/ProfileKalab';
import DisposisiSuratKoor from './pages/Koordinator Asisten/Disposisi Surat/DisposisiSurat';
import DetailDisposisiKoor from './pages/Koordinator Asisten/Detail/DetailDisposisiKoor';
import TandaTanganKoor from './pages/Koordinator Asisten/TTD/TandaTanganKoor';
import ProfileKoor from './pages/Koordinator Asisten/ProfileKoor';
import TokenNotFound from './TokenNotFound';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/loginAdmin' element={<LoginAdmin/>}/>
        <Route path='/admin/akunPengguna' element={<AkunPengguna/>}/>
        <Route path='/admin/akunPengguna/tambah' element={<TambahPengguna/>}/>
        <Route path='/admin/akunPengguna/edit/:nama' element={<EditPengguna/>}/>
        <Route path='/admin/akunPengguna/detail/:nama' element={<DetailPengguna/>}/>

        <Route path='/admin/kelolaBarang' element={<KelolaBarang/>}/>
        <Route path='/admin/kelolaBarang/tambah' element={<TambahBarang/>}/>
        <Route path='/admin/kelolaBarang/edit/:id_barang' element={<EditBarang/>}/>
        <Route path='/admin/kelolaBarang/detail/:id_barang' element={<DetailBarang/>}/>
        <Route path='/admin/profile' element={<Profile/>}/>

        <Route path='/regisMahasiswa' element={<RegisMahasiswa/>}/>
        <Route path='/loginMahasiswa' element={<LoginMahasiswa/>}/>
        
        <Route path='/mahasiswa/generateSurat' element={<GenerateSurat/>}/>
        <Route path='/mahasiswa/generateSurat/pinjamBarang/:idJenis' element={<PeminjamanBarang/>}/>
        <Route path='/mahasiswa/generateSurat/pinjamRuang/:idJenis' element={<PeminjamanRuangan/>}/>
        <Route path='/mahasiswa/generateSurat/permohonanTA/:idJenis' element={<PermohonanTA/>}/>

        <Route path='/mahasiswa/kelolaSurat' element={<KelolaSurat/>}/>
        <Route path='/mahasiswa/kelolaSurat/tambah' element={<TambahSurat/>}/>
        <Route path='/mahasiswa/kelolaSurat/edit/:id_surat_mahasiswa' element={<EditSurat/>}/>
        <Route path='/mahasiswa/kelolaSurat/detail/:id_surat_mahasiswa' element={<DetailSurat/>}/>

        <Route path='/mahasiswa/disposisiSurat' element={<DisposisiSurat/>}/>
        <Route path='/mahasiswa/disposisiSurat/tambah' element={<TambahDisposisi/>}/>
        <Route path='/mahasiswa/disposisiSurat/Edit/:id_disposisi' element={<EditDisposisi/>}/>
        <Route path='/mahasiswa/profile' element={<ProfileMhs/>}/>

        <Route path='/loginAsisten' element={<LoginAsisten/>}/>
        <Route path='/asisten/suratMasuk' element={<SuratMasuk/>}/>
        <Route path='/asisten/suratMasuk/tambah' element={<TambahSuratMasuk/>}/>
        <Route path='/asisten/suratMasuk/detail/:no_surat_masuk' element={<DetailSuratMasuk/>}/>
        <Route path='/asisten/suratMasuk/edit/:no_surat_masuk' element={<EditSuratMasuk/>}/>

        <Route path='/asisten/suratKeluar' element={<SuratKeluar/>}/>
        <Route path='/asisten/suratKeluar/tambah' element={<TambahSuratKeluar/>}/>
        <Route path='/asisten/suratKeluar/edit/:no_surat_keluar' element={<EditSuratKeluar/>}/>
        <Route path='/asisten/suratKeluar/detail/:no_surat_keluar' element={<DetailSuratKeluar/>}/>

        <Route path='/asisten/disposisiSurat' element={<DisposisiSuratAsisten/>}/>
        <Route path='/asisten/disposisiSurat/detail/:id_disposisi' element={<DetailDisposisiAsiten/>}/>

        <Route path='/asisten/disposisiSurat/myDisposisi' element={<MyDisposisi/>}/>
        <Route path='/asisten/disposisiSurat/myDisposisi/tambah' element={<TambahMyDisposisi/>}/>
        <Route path='/asisten/disposisiSurat/myDisposisi/edit/:id_disposisi' element={<EditMyDisposisi/>}/>

        <Route path='/asisten/profile' element={<ProfileAsisten/>}/>

        <Route path='/loginKalab' element={<LoginKalab/>}/>
        <Route path='/kalab/disposisiSurat' element={<DisposisiSuratKalab/>}/>
        <Route path='/kalab/disposisiSurat/detail/:file_surat' element={<DetailDisposisiKalab/>}/>
        <Route path='/kalab/disposisiSurat/ttd' element={<TandaTanganKalab/>}/>
        <Route path='/kalab/laporanSuratMasuk' element={<LaporanSuratMasuk/>}/>
        <Route path='/kalab/laporanSuratKeluar' element={<LaporanSuratKeluar/>}/>
        <Route path='/profile/kalab' element={<ProfileKalab/>}/>

        <Route path='/koor/disposisiSurat' element={<DisposisiSuratKoor/>}/>
        <Route path='/koor/disposisiSurat/detail/:nama_surat' element={<DetailDisposisiKoor/>}/>
        <Route path='/koor/disposisiSurat/ttd' element={<TandaTanganKoor/>}/>
        <Route path='/koor/profile' element={<ProfileKoor/>}/>

        <Route path='/notAllowed' element={<TokenNotFound/>}/>




        <Route path='/test' element={<TestComponenet/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
