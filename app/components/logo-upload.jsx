'use client';
import React from "react";

export default function LogoUpload({label}){
    return(
        <div className="w-[1019px] flex flex-col gap-[12px]">
            {/* Untuk Judul Label */}
            <h4 className="text-[14px] font-semibold text-black leading-[20px]">
                {label}
            </h4>

            {/* Area untuk upload file */}
            <div className="w-[1019px] h-[124px] bg-white border border-[#E6E6E6] rounded-[4px] flex flex-col items-center relative cursor-pointer hover:bg-gray-50 trasition-all oveerflow-hidden">
                
                <div className="w-[65px] h-[63px] mb-1"
                        style={{
                            backgroundImage: "url('/images/Dokumen.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}>
                </div>

                {/* Teks bawah logo */}
                <p className="text-[14px] leading-[16px] text-center">
                    <span className="font-bold text-[#0455BF]">Klik disini</span>{" "}
                    <span className="text-[#3A4340]">untuk unggah file atau drag</span>
                    <br/>
                    <span className="text-[10px] text-[#636363] mt-1 inline-block">
                        Support Format: JPG, JPEG, SVG, PNG
                    </span>

                    {/* Area input */}
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer"></input>
                </p>
            </div>
        </div>
    );
}