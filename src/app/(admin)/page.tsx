import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DX Job Requisition",
  description: "DX Job Requisition",
};

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">TEST</div>
    </div>
  );
}
