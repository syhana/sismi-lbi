import React from "react";
import Input from "@components/Input";
import Judul from "@components/Judul";
import InputPass from "@components/InputPass"
import ButtonSimple from "@components/ButtonSimple";

export default function FormLogin() {
    return (
      <>
        <div className="h-screen flex items-center justify-center w-full">
          <div className="h-screen w-1/3">
            <img src="/bg-mahasiswa.svg" alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center justify-center p-0 m-0 h-screen w-2/3">
            <form className="items-center w-2/3 ">
              <Judul judul="Selamat Datang Kembali" />
              <br />
              <Input
                label="Nomor Induk Mahasiswa (NIM)"
                placeholder="Masukkan NIM Anda"
                name="NIM"
              />
              <InputPass
                label="Password"
                placeholder="Masukkan Password Anda"
                name="password"
              />
              <br />
              <ButtonSimple
                type="submit"
                label="Masuk"
                background="bg-custom-100 w-full flex items-center justify-center mt-4 py-3"
              />
              <div className="font-bold items-center justify-center w-full flex mt-2">
                <span className="text-gray-400">Belum memiliki akun?  
                  <a href="/regis" className="text-custom-100"> Daftar</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

