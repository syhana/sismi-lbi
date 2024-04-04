import React from "react";
import Input from "@components/Input";
import Judul from "@components/Judul";
import InputPass from "@components/InputPass"
import InputFile from "@components/InputFile";
import ButtonSimple from "@components/ButtonSimple";

export default function FormRegis() {
  return (
    <>
      <div className="h-screen flex items-center justify-center w-full">
        <div className="h-screen w-1/3">
          <img src="/bg-mahasiswa.svg" alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center justify-center p-0 m-0 h-screen w-2/3">
          <form className="items-center w-2/3 ">
            <Judul judul="Silahkan Daftarkan Dirimu" />
            <br />
            <Input
              label="Nama Lengkap"
              placeholder="Masukkan Nama Lengkap Anda"
              name="Nama Lengkap"
            />
            <Input
              label="Nomor Induk Mahasiswa (NIM)"
              placeholder="Masukkan NIM Anda"
              name="NIM"
            />
            <Input
              label="Alamat"
              placeholder="Masukkan Alamat Anda"
              name="Alamat"
            />
            <InputFile
              label="Tanda Tangan"
              placeholder="Klik pilih untuk memilih tanda tangan"
            />
            <InputPass
              label="Password"
              placeholder="Masukkan Password Anda"
              name="password"
            />
            <br />
            <ButtonSimple
              type="submit"
              label="Daftar"
              background="bg-custom-100 w-full flex items-center justify-center mt-4 py-3"
            />
            <div className="font-bold items-center justify-center w-full flex mt-2">
              <span className="text-gray-400">Sudah memiliki akun?  
                <a href="/" className="text-custom-100"> Masuk</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}




