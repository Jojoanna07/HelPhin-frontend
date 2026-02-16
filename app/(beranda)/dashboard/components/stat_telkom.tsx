"use client";
export default function StatTelkom() {
  return (
    <div className="pl-5 w-full grid grid-cols-2 gap-4">
      <div className="bg-white h-auto p-3 rounded-xl shadow-md">
        <h2 className="text-sm mb-4">Total Mahasiswa</h2>
        <h1 className="font-bold text-3xl">254</h1>
        <h3 className="text-xs font-light text-[#A9B2BC]">
          90% Meningkat dalam 15 hari sebelumnya
        </h3>
      </div>
      <div className="h-auto bg-white p-3 rounded-xl shadow-md">
        <h2 className="text-sm mb-4">Total Course</h2>
        <h1 className="font-bold text-3xl">154</h1>
        <h3 className="text-xs font-light text-[#A9B2BC]">
          94% Meningkat dalam 15 hari sebelumnya
        </h3>
      </div>
      <div className="h-auto bg-white p-3 rounded-xl shadow-md">
        <h2 className="text-sm mb-4">Total Prodi</h2>
        <h1 className="font-bold text-3xl">6</h1>
        <h3 className="text-xs font-light text-[#A9B2BC]">prodi aktif</h3>
      </div>
      <div className="h-auto bg-white p-3 rounded-xl shadow-md">
        <h2 className="text-sm mb-4">???</h2>
        <h1 className="font-bold text-3xl">?</h1>
        <h3 className="text-xs font-light text-[#A9B2BC]">Lorem Ipsum</h3>
      </div>
    </div>
  );
}
