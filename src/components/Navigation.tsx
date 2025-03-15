"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ArrowsRightLeftIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      label: "Transfer",
      href: "/transfer",
      icon: ArrowsRightLeftIcon,
    },
    {
      label: "Account",
      href: "/account",
      icon: UserIcon,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Cog6ToothIcon,
    },
  ];

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <img src="/wf-logo.png" alt="Wells Fargo" className="h-8" />
        </div>
        <div className="flex-1 py-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-6 py-3 space-x-3
                  ${
                    isActive
                      ? "text-wf-red bg-red-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full
                  ${
                    isActive
                      ? "text-wf-red"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
