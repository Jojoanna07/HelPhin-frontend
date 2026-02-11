import React from "react";
import Image from "next/image";
import FormInput from "../components/form-input";
import FormSelect from "../components/form-select";

export default function BuatAkunProdi() {

    const daftarKampus = ["Telkom University", "Telkom University", "Telkom University"];
    const daftarFakultas = ["Fakulltas Informatika", "Fakultas Ekonomi dan Bisnis", "Fakultas Teknik Elektro"];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 overflow-hidden"
             style={{
                 backgroundImage: "url('/images/background.svg')",
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                 backgroundPosition: "115% 0%",
                 backgroundColor: '#FCFDFF'
             }}>

            {/*Logo Helphin*/}
            <div className="mb-10">
                <Image 
                    src="/images/helPhin 2.png"
                    alt="Logo Helphin" 
                    width={150} 
                    height={50} 
                    priority 
                />
            </div>

            <div className="mb-10 text-center">
                <h1 className="text-[32px] font-semibold leading-[32px] text-[#1D1D1D]">
                    Buat Akun Prodi
                </h1>
                <p className="text-[#068DFF] text-sm mt-2">Buatkan Akun Prodi</p>
            </div>

            <div className="w-full max-w-[1055px] min-h-[606px] p-[18px] rounded-[8px] flex flex-col items-center gap-[32px] shadow-xl"
                 style={{ 
                     background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%)" 
                 }}>
                
                <h3 className="w-full max-w-[1019px] text-[20px] font-semibold leading-[32px] text-black border-b border-gray-100 pb-2 self-center">
                    Data Prodi
                </h3>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[1019px]">
                    <FormSelect label="Nama Universitas" placeholder="Pilih universitas" options={daftarKampus}/>
                    <FormSelect label="Fakultas" placeholder="Pilih Universitas" options={daftarFakultas}/>

                    <FormInput label="Program Studi" placeholder="Masukkan nama prodi"/>
                    <FormInput label="Nama Organisasi Himpunan" placeholder="Masukkan nama organisasi" />
                </div>
                
                {/* Nanti di bawah sini kita masukkan area Upload Logo Himpunan */}
            </div>
        </div>
    );
}