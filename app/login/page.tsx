"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <main className="overflow-hidden relative">

      {/* Container */}
      <div className="relative z-10 h-full w-full flex items-center justify-end px-20">

        {/* Login Card */}
        <div className="w-[420px] bg-white border border-white rounded-2xl p-10">

          {/* Icon */}
          <div className="mb-4 flex flex-col items-center pt-4">
                <Image 
                    src="/images/helPhin 2.svg"
                    alt="Logo Helphin" 
                    width={150} 
                    height={50} 
                    priority 
                />
            </div>

          {/* Teks */}
          <p className="text-black text-center mt-2 mb-8">
            Masukkan alamat email dan kata sandi Anda<br/>di bawah ini untuk masuk ke akun Anda
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white text-gray border border-gray-300 outline-none transition-all duration-300 ease-in-out hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white text-gray border border-gray-300 outline-none transition-all duration-300 ease-in-out hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Button */}
            <button
              onClick={handleLogin}
              type="button"
              className="mt-4 bg-[#068DFF] hover:bg-blue-700 transition duration-300 text-white py-3 rounded-lg font-semibold shadow-lg"
            >
              Masuk
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}