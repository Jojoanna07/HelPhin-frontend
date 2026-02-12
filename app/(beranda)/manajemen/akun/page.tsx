"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ManajemenAkun() {
  const [dataAdmin, setDataAdmin] = useState<any[]>([]); // State untuk data asli
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  // Ambil data dari LocalStorage saat halaman dibuka
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('helphin_admin_data') || '[]');
    setDataAdmin(storedData);
  }, []);

  const handleSelectAll = () => {
    if (selectedIds.length === dataAdmin.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(dataAdmin.map((_, index) => index)); // Gunakan index sebagai ID sementara
    }
  };

  const handleSelectOne = (index: number) => {
    if (selectedIds.includes(index)) {
      setSelectedIds(selectedIds.filter((item) => item !== index));
    } else {
      setSelectedIds([...selectedIds, index]);
    }
  };

const hapusDataAdmin = (indexHapus: number) => {
    const dataLama = JSON.parse(localStorage.getItem('helphin_admin_data') || '[]');
    const dataBaru = dataLama.filter((_: any, index: number) => index !== indexHapus);
    localStorage.setItem('helphin_admin_data', JSON.stringify(dataBaru));
    setDataAdmin(dataBaru);
    setSelectedIds([]);
    alert("Data berhasil dihapus! 🗑️");
  };

  return (
   <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <div className="flex-1 p-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Data Akun Admin Himpunan</h1>
          <p className="text-gray-400 text-sm italic">Kelola semua akses admin organisasi Anda dengan mudah.</p>
        </div>

        <div className="bg-white p-6 rounded-t-xl border-b flex justify-between items-center">
          <input type="text" placeholder="Cari Nama" className="border border-gray-200 p-2 rounded-lg w-72 text-sm focus:outline-blue-500" />
          <div className="space-x-2">
            <Link href="/daftar-akun-himpunan">
              <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">Tambah Akun +</button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-b-xl shadow-sm overflow-visible"> {/* overflow-visible agar menu titik 3 tidak terpotong */}
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
  <tr>
    <th className="p-4 border-b"><input type="checkbox" onChange={handleSelectAll} checked={selectedIds.length === dataAdmin.length && dataAdmin.length > 0} /></th>
    <th className="p-4 border-b">No</th>
    <th className="p-4 border-b">Nama Lengkap</th>
    <th className="p-4 border-b">Jabatan</th>
    <th className="p-4 border-b">Email</th>
    <th className="p-4 border-b">Password</th> {/* Kolom Baru */}
    <th className="p-4 border-b">Organisasi</th>
    <th className="p-4 border-b text-center w-24">Aksi</th>
  </tr>
</thead>
           <tbody className="text-sm">
  {dataAdmin.map((row, index) => (
    <tr key={index} className="hover:bg-gray-50 transition-colors">
      <td className="p-4 border-b">
        <input type="checkbox" checked={selectedIds.includes(index)} onChange={() => handleSelectOne(index)} />
      </td>
      <td className="p-4 border-b">{index + 1}</td>
      <td className="p-4 border-b font-medium">{row.nama}</td>
      <td className="p-4 border-b">{row.jabatan}</td>
      
      {/* 1. Gabungkan username dengan domain agar jadi email beneran */}
      <td className="p-4 border-b text-gray-500 lowercase">
        {row.email ? `${row.email}.helPhian@gmail.com` : '-'}
      </td>
      
      {/* 2. Tampilkan Password (atau bisa pakai tipe password agar lebih aman) */}
      <td className="p-4 border-b font-mono text-gray-400 text-xs">
        {row.password || '********'}
      </td>

      <td className="p-4 border-b font-semibold text-blue-600">HIMA IF</td>
      <td className="p-4 border-b text-center relative overflow-visible">
  {selectedIds.includes(index) ? (
    /* 1. Tombol Hapus muncul jika baris dicentang */
    <button 
      onClick={() => hapusDataAdmin(index)} 
      className="bg-red-600 text-white px-4 py-1 rounded-md text-xs font-bold hover:bg-red-700 transition"
    >
      Hapus
    </button>
  ) : (
    /* 2. Menu Titik Tiga muncul secara default */
    <div className="relative inline-block overflow-visible">
      <button 
        onClick={() => setOpenMenuId(openMenuId === index ? null : index)} 
        className="text-gray-400 hover:text-black font-bold p-1 text-xl leading-none"
      >
        ...
      </button>

      {/* Pop-up Menu Edit yang muncul saat diklik */}
      {openMenuId === index && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-100 shadow-2xl rounded-lg z-[9999] py-1 animate-in fade-in zoom-in duration-150">
          <button 
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition"
            onClick={() => {
              alert("Halaman Edit sedang diproses! 🐬");
              setOpenMenuId(null);
            }}
          >
            ✏️ Edit
          </button>
        </div>
      )}
    </div>
  )}
</td>
    </tr>
  ))}
</tbody>
          </table>

          {/* --- PAGINATION (Halaman 1, 2, 3) --- */}
          <div className="p-4 bg-white flex justify-between items-center text-sm text-gray-500 border-t rounded-b-xl">
            <div className="flex items-center space-x-2">
              <span>10</span> <span className="text-xs">Rows per page</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs">Page 1 of 1</span>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border rounded-md bg-black text-white text-xs">1</button>
                <button className="px-3 py-1 border rounded-md text-xs hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border rounded-md text-xs hover:bg-gray-50">3</button>
              </div>
            </div>
          </div>
        </div>

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