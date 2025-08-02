import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Request Job",
  description: "New Request Job",
};

export default function NewRequestPage() {
  return(
  <div>
    <PageBreadcrumb pageTitle="New Request" />
  </div>
  );
}
