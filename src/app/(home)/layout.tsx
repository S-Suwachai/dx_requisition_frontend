"use client";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-teal-200 via-white to-gray-200">
      <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
        &copy; 2025 - DX bearing team
      </p>
    </div>
  );
}