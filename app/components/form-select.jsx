"use client";
import React from "react";

export default function FormSelect({ label, placeholder, options = [] }) {
  return (
    <div className="flex flex-col gap-[12px] w-[500px]">
      <label className="text-[14px] font-semibold text-black">
        {label}
      </label>
      <div className="relative">
        <select
          defaultValue=""
          className="w-full h-[45px] px-[12px] bg-white border border-[#E6E6E6] rounded-[4px] shadow-[0px_2px_8px_rgba(6,141,255,0.08)] text-[14px] text-[#1D1D1D] outline-none focus:border-[#068DFF] cursor-pointer appearance-none transition-all invalid:text-[#9A999A]"
          required
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt, index) => (
            <option key={index} value={opt} className="text-black">
              {opt}
            </option>
          ))}
        </select>
        
        {/* Ikon Segitiga Sesuai Figma */}
        <div className="absolute inset-y-0 right-[12px] flex items-center pointer-events-none">
          <svg 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1L6 6L11 1" 
              stroke="#1D1D1D" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}