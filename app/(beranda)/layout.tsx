"use client";

import { useState, ReactNode } from "react";
import { ChevronDown, ChevronRight, Bell, Moon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface BerandaLayoutProps {
  children: ReactNode;
}

type SubMenuItem = {
  name: string;
  path: string;
};

type MenuItem = {
  name: string;
  icon: string;
  path?: string;
  hasSubmenu: boolean;
  submenu?: SubMenuItem[];
};

export default function BerandaLayout({ children }: BerandaLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isManajemenOpen, setIsManajemenOpen] = useState(true);

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      icon: "/Assets/icons/home-active-icon.svg",
      hasSubmenu: false,
      path: "/dashboard",
    },
    {
      name: "Manajemen",
      icon: "/Assets/icons/manajemen-icon.svg",
      hasSubmenu: true,
      submenu: [
        { name: "Fakultas", path: "/manajemen/fakultas" },
        { name: "Prodi", path: "/manajemen/prodi" },
        { name: "Akun", path: "/manajemen/akun" },
      ],
    },
    {
      name: "Log Activity",
      icon: "/Assets/icons/log_activity-icon.svg",
      hasSubmenu: false,
      path: "/log_activity",
    },
    {
      name: "Setelan",
      icon: "/Assets/icons/setting-icon.svg",
      hasSubmenu: false,
      path: "/setelan",
    },
  ];

  const isActive = (path?: string) => {
    if (!path) return false;
    return pathname === path;
  };

  const isSubmenuActive = (submenu?: SubMenuItem[]) => {
    if (!submenu) return false;
    return submenu.some((sub) => pathname === sub.path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-55 bg-white shadow-lg flex flex-col">
        <div className="px-4 py-8">
          <Image
            src="/Assets/Logo-helphin-biru.png"
            alt="Logo Helphin"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            if (item.hasSubmenu) {
              const activeParent = isSubmenuActive(item.submenu);

              return (
                <div key={item.name}>
                  <button
                    onClick={() => setIsManajemenOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      activeParent
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                        priority
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {isManajemenOpen ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>

                  {isManajemenOpen && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu?.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => router.push(sub.path)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                            isActive(sub.path)
                              ? "bg-blue-500 text-white font-medium"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.name}
                onClick={() => item.path && router.push(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  priority
                />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-transparent px-8 pt-4 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Moon size={20} className="text-gray-600" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell size={20} className="text-gray-600" />
              {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
            </button>

            <button className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SA</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">
                  Super Admin
                </p>
                <p className="text-xs text-gray-500">nexto.edug@gmail.com</p>
              </div>
              <ChevronDown size={18} className="text-gray-600" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 px-8 pb-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
