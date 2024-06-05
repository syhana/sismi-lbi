import ButtonIcon from "./components/button/buttonIcon"
import Tabel from "./components/table/TabelAkunAdmin"
import InputSelect from './components/input/inputSelect'
import InputFile from "./components/input/inputFile";
import Badges from "./components/badges/badges";
import JenisSurat from "./components/button/JenisSurat";
import AlertSuccess from "./components/alert/AlertSuccess";
import UploadFile from "./components/input/uploadFile";
import FormTambahDisposisiMhs from "./components/form/Mahasiswa/Disposisi/FormTambahDisposisiMhs";

export default function TestComponenet (){

    const data = [
        { id: 1, name: "Arif Wahyudi", role: "Asisten" },
        { id: 2, name: "Arif", role: "Kepala Laboratorium" },
        { id: 3, name: "Wahyu", role: "Asisten" },
    ];
    
    const columns = [
        { key: "no", label: "No" },
        { key: "name", label: "Nama" },
        { key: "role", label: "Role" },
        { key: "action", label: "Aksi" },
    ];

    const people = [
        {
          id: 1,
          name: 'Wade Cooper',
        },
        {
          id: 2,
          name: 'Arlene Mccoy',
      
        },
      ]

    return (
        <>
        <ButtonIcon className={'bg-secondary w-fIT mt-10 mb-10'} type={'submit'} label={'Masuk'}  icon={'/icon/material-symbols--add.svg'}/>
        <Tabel
        data={data}
        columns={columns}
        bg_head={'bg-biruComplement'}
        />
        <InputSelect data={people} defaultValue={people[0]} label={'pilih'}/>
        <InputFile label={'Tanda Tangan'}/>
        <Badges label={'Tersedia'} className={'bg-tersedia text-white px-6 py-2'}/>
        <JenisSurat/>
        <AlertSuccess label={'Selamat'}/>
        <UploadFile label={'Bukti Pembayaran'} icon={'/public/add file.svg'}/>
        <FormTambahDisposisiMhs/>
        </>
    )
}