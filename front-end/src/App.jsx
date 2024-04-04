import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisMahasiswa from "@mahasiswa/regisMahasiswa";
import LoginMahasiswa from "@mahasiswa/loginMahasiswa";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginMahasiswa></LoginMahasiswa>} />
          <Route path="/regis" element={<RegisMahasiswa></RegisMahasiswa>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
