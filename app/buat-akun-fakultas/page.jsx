import React from "react";
import Image from "next/image";
import InputFakultas from "../components/akun-fakultas/input-fakultas";
import LogoFakultas from "../components/akun-fakultas/Logo-fakultas"

export default function BuatAkunProdi() {
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
                    Buat Data Fakultas
                </h1>
                <p className="text-[#068DFF] text-sm mt-2">Buatkan Akun Fakultas</p>
            </div>

             {/* Untuk frame box putih */}
            <div className="w-full max-w-[1055px] min-h-[512px] p-[18px] rounded-[8px] flex flex-col items-center gap-[32px] shadow-xl"
                 style={{ 
                     background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%)" 
                 }}>
                
                <h3 className="w-full max-w-[1019px] text-[20px] font-semibold leading-[32px] text-black border-b border-gray-100 pb-2 self-center">
                    Data Prodi
                </h3>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[1019px]">
                    <InputFakultas label="Nama Universitas" placeholder="Pilih universitas"/>
                    <InputFakultas label="Fakultas" placeholder="Pilih Universitas"/>
                </div>
                
                <LogoFakultas label="Logo Fakultas"/>

                <div className="w-[1019px] flex justify-end">
                    <button className="w-[264px] h-[54px] bg-[#068DFF] text-white rounded-[4px] font-bold text-[16px] hover:bg-blue-600 transition-all shadow-md">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}