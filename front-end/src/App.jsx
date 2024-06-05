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

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/loginAdmin' element={<LoginAdmin/>}/>
        <Route path='/admin/akunPengguna' element={<AkunPengguna/>}/>
        <Route path='/admin/akunPengguna/tambah' element={<TambahPengguna/>}/>
        <Route path='/admin/akunPengguna/edit' element={<EditPengguna/>}/>
        <Route path='/admin/akunPengguna/detail' element={<DetailPengguna/>}/>

        <Route path='/admin/kelolaBarang' element={<KelolaBarang/>}/>
        <Route path='/admin/kelolaBarang/tambah' element={<TambahBarang/>}/>
        <Route path='/admin/kelolaBarang/edit' element={<EditBarang/>}/>
        <Route path='/admin/kelolaBarang/detail' element={<DetailBarang/>}/>
        <Route path='/admin/profile' element={<Profile/>}/>

        <Route path='/regisMahasiswa' element={<RegisMahasiswa/>}/>
        <Route path='/loginMahasiswa' element={<LoginMahasiswa/>}/>
        
        <Route path='/mahasiswa/generateSurat' element={<GenerateSurat/>}/>
        <Route path='/mahasiswa/generateSurat/pinjamBarang' element={<PeminjamanBarang/>}/>
        <Route path='/mahasiswa/generateSurat/pinjamRuang' element={<PeminjamanRuangan/>}/>
        <Route path='/mahasiswa/generateSurat/permohonanTA' element={<PermohonanTA/>}/>

        <Route path='/mahasiswa/kelolaSurat' element={<KelolaSurat/>}/>
        <Route path='/mahasiswa/kelolaSurat/tambah' element={<TambahSurat/>}/>
        <Route path='/mahasiswa/kelolaSurat/edit' element={<EditSurat/>}/>
        <Route path='/mahasiswa/kelolaSurat/detail' element={<DetailSurat/>}/>

        <Route path='/mahasiswa/disposisiSurat' element={<DisposisiSurat/>}/>
        <Route path='/mahasiswa/disposisiSurat/tambah' element={<TambahDisposisi/>}/>
        <Route path='/mahasiswa/disposisiSurat/Edit' element={<EditDisposisi/>}/>
        <Route path='/mahasiswa/profile' element={<ProfileMhs/>}/>


        <Route path='/test' element={<TestComponenet/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
