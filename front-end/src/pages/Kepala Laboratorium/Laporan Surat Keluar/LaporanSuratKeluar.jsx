import SidebarKalab from "../../../components/sidebar/Kalab/Sidebar"
import Input from "../../../components/input/input"
import ButtonSimple from "../../../components/button/button"

export default function LaporanSuratKeluar (){
    return (
        <>
        <SidebarKalab profile={'/profile/kalab'} nama_kalab={'Nadini Annisa Byant'}>
            <div className="p-10 ps-12">
                    <p className="text-primary font-bold text-3xl">Laporan Surat Keluar</p>
                    <div className="pt-10">
                        <form action="">
                            <Input label={'Tanggal awal'} name={'tanggal_awal_keluar'} type={'date'}/>
                            <Input label={'Tanggal Akhir'} name={'tanggal_akhir_keluar'} type={'date'}/>
                            <div className="flex justify-end pt-10">
                                <ButtonSimple label={'Cetak Laporan'} type={'submit'} className={'bg-primary text-white'}/>
                            </div>
                        </form>
                    </div>
            </div>
        </SidebarKalab>
        </>
    )
}