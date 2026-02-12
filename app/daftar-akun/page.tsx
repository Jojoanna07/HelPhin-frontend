"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BuatAkunPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F0F7FF] flex flex-col items-center p-8 relative overflow-hidden">
      {/* Efek Lingkaran Blur di Background agar mirip Figma */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full blur-[120px] opacity-50 z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] opacity-40 z-0"></div>

      {/* --- LOGO ATAS --- */}
      <div className="z-10 mb-4">
        <Image
          src="/Assets/Logo-helphin-biru.png"
          alt="Logo Helphin"
          width={140}
          height={40}
          priority
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 z-10">
        Buat Akun Anggota
      </h1>
      <p className="text-blue-500 text-sm mb-10 z-10 cursor-pointer hover:underline">
        Buatkan Akun Prodi
      </p>

      {/* --- FORM CONTAINER --- */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10 z-10 space-y-8">
        {/* Section Data Organisasi */}
        <div>
          <h2 className="text-lg font-bold mb-4">Data Organisasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold">Organisasi Himpunan</label>
              <select className="border border-gray-200 p-3 rounded-lg text-gray-400 focus:outline-blue-500 bg-gray-50">
                <option>Masukkan nama organisasi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section Data Akun */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Data Akun</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center shadow-md hover:bg-blue-600 transition">
              + Tambah Anggota
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {/* Row 1 */}
            <div className="space-y-2">
              <label className="text-sm font-bold">Nama Lengkap</label>
              <select className="border border-gray-200 p-3 rounded-lg w-full text-gray-300 bg-gray-50">
                <option>Pilih universitas</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Jabatan</label>
              <input
                type="text"
                placeholder="Jabatan di Organisasi"
                className="border border-gray-200 p-3 rounded-lg w-full bg-gray-50"
              />
            </div>
            {/* Row 2 */}
            <div className="space-y-2">
              <label className="text-sm font-bold">Email</label>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <input
                  type="text"
                  placeholder="Masukkan email"
                  className="p-3 w-full bg-transparent outline-none"
                />
                <span className="p-3 text-gray-400 text-sm border-l bg-white">
                  .helPhian@gmail.com
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="border border-gray-200 p-3 rounded-lg w-full bg-gray-50"
              />
            </div>

            {/* Row 3 (Duplikat contoh di Figma) */}
            <div className="space-y-2">
              <label className="text-sm font-bold">Nama Lengkap</label>
              <select className="border border-gray-200 p-3 rounded-lg w-full text-gray-300 bg-gray-50">
                <option>Pilih universitas</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Fakultas</label>
              <select className="border border-gray-200 p-3 rounded-lg w-full text-gray-300 bg-gray-50">
                <option>Pilih fakultas</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex justify-end space-x-4 pt-6">
          <button
            onClick={() => router.back()}
            className="bg-transparent px-8 py-3 text-gray-400 font-semibold hover:text-gray-600 transition flex items-center"
          >
            Batal
          </button>
          <button className="bg-blue-500 text-white px-12 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition">
            Buat Akun
          </button>
        </div>
      </div>
    </div>
  );
}
