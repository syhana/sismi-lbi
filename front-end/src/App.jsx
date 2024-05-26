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

        <Route path='/test' element={<TestComponenet/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
