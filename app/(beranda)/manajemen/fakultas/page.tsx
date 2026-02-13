"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ManajemenFakultas() {
  const [dataFakultas, setDataFakultas] = useState<any[]>([]);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  // Ambil data khusus fakultas dari localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('helphin_fakultas_data') || '[]');
    setDataFakultas(storedData);
  }, []);

  const hapusFakultas = (indexHapus: number) => {
    const dataLama = JSON.parse(localStorage.getItem('helphin_fakultas_data') || '[]');
    const dataBaru = dataLama.filter((_: any, index: number) => index !== indexHapus);
    localStorage.setItem('helphin_fakultas_data', JSON.stringify(dataBaru));
    setDataFakultas(dataBaru);
    setOpenMenuId(null);
    alert("Fakultas berhasil dihapus! 🗑️");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <div className="flex-1 p-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Data Fakultas</h1>
          <p className="text-gray-400 text-sm italic">Daftar fakultas yang terdaftar di sistem.</p>
        </div>

        <div className="bg-white p-6 rounded-t-xl border-b flex justify-between items-center">
          <input type="text" placeholder="Cari Fakultas" className="border border-gray-200 p-2 rounded-lg w-72 text-sm" />
          
          <Link href="/buat-akun-fakultas"> 
            <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
              Tambah Fakultas +
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-b-xl shadow-sm overflow-visible">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
              <tr>
                <th className="p-4 border-b">No</th>
                <th className="p-4 border-b">Logo</th>
                <th className="p-4 border-b">Fakultas</th>
                <th className="p-4 border-b">Universitas</th>
                <th className="p-4 border-b">Date</th>
                <th className="p-4 border-b text-center w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {dataFakultas.length > 0 ? (
                dataFakultas.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-b">{index + 1}</td>
                    <td className="p-4 border-b">
                      <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                    </td>
                    <td className="p-4 border-b font-medium">{row.namaFakultas}</td>
                    <td className="p-4 border-b text-gray-500">{row.universitas || 'Telkom University'}</td>
                    <td className="p-4 border-b text-gray-400 text-xs">20/05/2025</td>
                    <td className="p-4 border-b text-center relative overflow-visible">
                       <button onClick={() => setOpenMenuId(openMenuId === index ? null : index)} className="text-gray-400 font-bold p-1 text-xl leading-none">...</button>
                       {openMenuId === index && (
                         <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-100 shadow-2xl rounded-lg z-[9999] py-1 animate-in fade-in zoom-in duration-150">
                           <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-2" onClick={() => hapusFakultas(index)}>
                             🗑️ Hapus
                           </button>
                         </div>
                       )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={6} className="p-10 text-center text-gray-400 italic">Belum ada data fakultas.</td></tr>
              )}
            </tbody>
          </table>
          
          {/* PAGINATION SESUAI FIGMA */}
          <div className="p-4 bg-white flex justify-between items-center text-sm text-gray-500 border-t rounded-b-xl">
             <div className="flex items-center space-x-2"><span>10</span> <span className="text-xs">Rows per page</span></div>
             <div className="flex items-center space-x-4">
                <span className="text-xs">Page 1 of 1</span>
                <div className="flex space-x-1">
                   <button className="px-3 py-1 border rounded-md bg-black text-white text-xs">1</button>
                   <button className="px-3 py-1 border rounded-md text-xs hover:bg-gray-50">2</button>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Blue Banner */}
        <div className="mt-8 bg-blue-500 p-6 rounded-xl flex justify-between items-center text-white shadow-lg">
          <Image src="/Assets/Logo-helphin-putih.png" alt="Logo Helphin" width={120} height={40} priority />
          <div className="space-x-4 text-xs font-light">
            <span className="cursor-pointer hover:underline">About</span>
            <span className="cursor-pointer hover:underline">Policy</span>
            <span className="cursor-pointer hover:underline">Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}