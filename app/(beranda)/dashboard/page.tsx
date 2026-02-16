"use client";
import Image from "next/image";
import HeaderDashboard from "./components/header_dashboard";
import FooterDashboard from "./components/footer_dahsboard";
import ChartStatisLoginUser from "./components/chart_statis_login_user";
import StatTelkom from "./components/stat_telkom";
import Leaderboard from "./components/leaderboard";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <HeaderDashboard />
      <div className="flex justify-between items-center my-2">
        <h1 className="text-lg">Aktivitas Anda</h1>
        <Image
          src="/Assets/helphin_1.png"
          alt="helphin_1"
          width={75}
          height={75}
          priority
        />
      </div>
      <div className="flex">
        <ChartStatisLoginUser />
        <StatTelkom />
      </div>
      <Leaderboard />
      <FooterDashboard />
    </div>
  );
}
