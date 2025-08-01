import CardTitle from "@/components/common/CardTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DX Bearing Center",
  description: "DX Bearing Center",
};

export default function Home() {
  return (
    <div className="grid gap-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">DX Bearing Center</h1>
        <p className="text-lg mt-2 text-gray-500">Digital Transformation Dashboard</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        <CardTitle title={"NAT"} />
        <CardTitle title={"NHT"} />
        <CardTitle title={"NMB"} />
        <CardTitle title={"PELMEC"} />
        <CardTitle title={"NHB"} />
        <CardTitle title={"MCB"} />
      </div>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        <CardTitle title={"DX Job Request"} />
      </div>
    </div>
  );
}
