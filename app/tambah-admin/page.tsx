import React from 'react';

export default function TambahAdmin() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-4">
      {/* Header Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-blue-500 text-2xl font-bold italic">helPhin</h1>
        <h2 className="text-xl font-semibold mt-2">Buat Akun Anggota</h2>
        <p className="text-blue-400 text-sm">Buatkan Akun Prodi</p>
      </div>

      {/* Main Form Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <form>
          {/* Section: Data Organisasi */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4">Data Organisasi</h3>
            <label className="block text-sm font-medium mb-1">Organisasi Himpunan</label>
            <select className="w-full border border-gray-300 p-2 rounded-md bg-gray-50 text-gray-400">
              <option>Masukkan nama organisasi</option>
            </select>
          </div>

          {/* Section: Data Akun */}
          <div className="relative border-t pt-6">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Data Akun</h3>
                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  + Tambah Anggota
                </button>
             </div>

            {/* Grid Input (Sesuai Figma: 2 Kolom) */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                <select className="w-full border border-gray-300 p-2 rounded-md bg-gray-50 text-gray-400"><option>Pilih universitas</option></select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Jabatan</label>
                <input type="text" placeholder="Jabatan di Organisasi" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <div className="flex">
                   <input type="text" placeholder="Masukkan email" className="w-full border border-gray-300 p-2 rounded-l-md" />
                   <span className="bg-gray-100 border border-l-0 border-gray-300 p-2 rounded-r-md text-gray-500 text-sm">.helPhinian@gmail.com</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input type="password" placeholder="Masukkan password" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-center">
            <button className="bg-blue-500 text-white w-full py-3 rounded-lg font-bold hover:bg-blue-600 transition">
              Buatkan Akun
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}