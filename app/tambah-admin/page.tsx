'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DaftarAkunPage() {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    // Data dummy kita
const dataAdmin = [
  { id: 1, nama: "Farel A.", jab: "Ketua Deprtemen", email: "farel.helPhinian@gmail.com", pass: "zaSjaksj@aks112", org: "HIMA IF" },
  { id: 2, nama: "Andi", jab: "Anggota", email: "andi.helPhinian@gmail.com", pass: "zaSjaksj@aks112", org: "HIMA IF" },
  { id: 3, nama: "Kesya", jab: "Anggota", email: "kseyafarel.helPhinian@gmail.com", pass: "zaSjaksj@aks112", org: "HIMA IF" },
];

// State untuk menyimpan ID yang dipilih
const [selectedIds, setSelectedIds] = useState<number[]>([]);

// Fungsi untuk checklist semua atau hapus semua
const handleSelectAll = () => {
  if (selectedIds.length === dataAdmin.length) {
    setSelectedIds([]); // Jika sudah semua terpilih, maka kosongkan
  } else {
    setSelectedIds(dataAdmin.map(item => item.id)); // Pilih semua ID
  }
};

// Fungsi untuk pilih satu per satu
const handleSelectOne = (id: number) => {
  if (selectedIds.includes(id)) {
    setSelectedIds(selectedIds.filter(item => item !== id));
  } else {
    setSelectedIds([...selectedIds, id]);
  }
};

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* --- SIDEBAR --- */}
      <div className="w-64 bg-white border-r flex flex-col p-6 space-y-6">
        <div className="mb-8">
            <Image
                src="/Assets/Logo-helphin-biru.png" 
                alt="Logo Helphin" 
                width={120} 
                height={40} 
                priority
            />
        </div>
        <nav className="space-y-2">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
             <span>🏠</span> <span>Dashboard</span>
          </div>
          <div className="bg-blue-500 text-white flex items-center space-x-3 p-3 rounded-lg cursor-pointer">
             <span>📅</span> <span className="font-semibold">Manajemen</span>
          </div>
          <div className="pl-12 space-y-2 text-sm">
            <p className="text-gray-400 cursor-pointer">Fakultas</p>
            <p className="text-gray-400 cursor-pointer">Prodi</p>
            <p className="text-blue-500 font-bold border-l-2 border-blue-500 pl-2">Akun</p>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-400">
             <span>📉</span> <span>Log Activity</span>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-400">
             <span>⚙️</span> <span>Setelan</span>
          </div>
        </nav>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 p-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Data Akun Admin Himpunan</h1>
            <p className="text-gray-400 text-sm">Lorem Ipsum</p>
          </div>
          <div className="flex items-center space-x-4">
             <button className="p-2">🌙</button>
             <button className="p-2">🔔</button>
             <div className="flex items-center space-x-2">
                <div className="text-right text-xs">
                  <p className="font-bold text-sm">Super Admin</p>
                  <p className="text-gray-400">nexta.edu@gmail.com</p>
                </div>
                <div className="w-10 h-10 bg-orange-200 rounded-full"></div>
             </div>
          </div>
        </div>

        {/* Search & Action */}
        <div className="bg-white p-6 rounded-t-xl border-b flex justify-between items-center">
           <input type="text" placeholder="Cari Nama" className="border border-gray-200 p-2 rounded-lg w-72 text-sm focus:outline-blue-500" />
           <div className="space-x-2">
            <Link href="/daftar-akun">
              <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
                Tambah Akun +
              </button>
            </Link>
              <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm">Filter</button>
           </div>
        </div>

        {/* Table Content */}
        <div className="bg-white rounded-b-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
              <tr>
                <th className="p-4 border-b">
                    <input
                        type="checkbox" 
                        onChange={handleSelectAll}
                        checked={selectedIds.length === dataAdmin.length && dataAdmin.length > 0}
                    />
                </th>
                <th className="p-4 border-b">No</th>
                <th className="p-4 border-b">Nama Lengkap</th>
                <th className="p-4 border-b">Jabatan</th>
                <th className="p-4 border-b">Email</th>
                <th className="p-4 border-b">Password</th>
                <th className="p-4 border-b">Nama Organisasi</th>
                <th className="p-4 border-b">Date</th>
                <th className="p-4 border-b text-center w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 1, nama: "Farel A.", jab: "Ketua Deprtemen", email: "farel.helPhinian@gmail.com", pass: "zaSjaksj@aks112", org: "HIMA IF" },
                { id: 2, nama: "Andi", jab: "Anggota", email: "andi.helPhinian@gmail.com", pass: "zaSjaksj@aks112", org: "HIMA IF" },
                { id: 3, nama: "Kesya", jab: "Anggota", email: "kseyafarel.helPhinian@gmail.com", pass: "zaSjaksj@aks112", org: "HIMA IF" },
              ].map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                    <td className="p-4 border-b">
                        <input 
                            type="checkbox" 
                            checked={selectedIds.includes(row.id)}
                            onChange={() => handleSelectOne(row.id)}
                        />
                    </td>
                  <td className="p-4 border-b">{row.id}</td>
                  <td className="p-4 border-b font-medium">{row.nama}</td>
                  <td className="p-4 border-b">{row.jab}</td>
                  <td className="p-4 border-b">{row.email}</td>
                  <td className="p-4 border-b font-mono text-gray-400">{row.pass}</td>
                  <td className="p-4 border-b font-semibold text-blue-600">{row.org}</td>
                  <td className="p-4 border-b text-gray-400 text-xs">20/05/2025</td>
<td className="p-4 border-b text-center relative">
  {/* SKENARIO 1: Muncul tombol Hapus jika baris di-checklist */}
  {selectedIds.includes(row.id) ? (
    <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
      <button 
        className="bg-red-600 text-white px-4 py-1 rounded-md text-xs font-bold hover:bg-red-700 transition shadow-sm"
      >
        Hapus
      </button>
    </div>
  ) : (
    /* SKENARIO 2: Defaultnya adalah Titik 3 */
    <div className="relative inline-block">
      <button 
        onClick={() => setOpenMenuId(openMenuId === row.id ? null : row.id)}
        className="text-gray-400 hover:text-black font-bold p-1 transition"
      >
        ...
      </button>

      {/* Pop-up Edit yang muncul saat titik 3 diklik */}
      {openMenuId === row.id && (
        <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 shadow-xl rounded-lg z-20 py-1 animate-in fade-in zoom-in duration-150">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium">
            Edit
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
          
          {/* Pagination */}
          <div className="p-4 bg-white flex justify-between items-center text-sm text-gray-500 border-t">
             <div className="flex items-center space-x-2">
                <span>10</span> <span>Rows per page</span>
             </div>
             <div className="flex items-center space-x-4">
                <span>Page 1 of 10</span>
                <div className="flex space-x-1">
                   <button className="px-3 py-1 border rounded bg-black text-white">1</button>
                   <button className="px-3 py-1 border rounded">2</button>
                   <button className="px-3 py-1 border rounded">3</button>
                </div>
             </div>
          </div>
        </div>

{/* Footer Banner */}
<div className="mt-8 bg-blue-500 p-6 rounded-xl flex justify-between items-center text-white">
   {/* Hilangkan mb-8 supaya beneran di tengah secara vertikal */}
   <div className="flex items-center"> 
      <Image 
        src="/Assets/Logo-helphin-putih.png" 
        alt="Logo Helphin" 
        width={120} 
        height={40} 
        priority 
        className="object-contain"
      />
   </div>
   
   <div className="space-x-4 text-sm font-light">
     <span>About</span>
     <span>Policy</span>
     <span>Terms</span>
   </div>
</div>
      </div>
    </div>
  );
}