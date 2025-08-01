import CardTitle from "@/components/common/CardTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DX Bearing",
  description: "DX Bearing",
};

export default function Home() {
  return (
    <div className="grid gap-4">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 drop-shadow-md">
          DX Bearing
        </h1>
        <p className="text-lg md:text-xl mt-3 text-slate-500">
          Digital Transformation
        </p>
      </div>
      <div className="text-center">Factory</div>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-10 mb-10">
        <CardTitle title={"NAT"} />
        <CardTitle title={"NHT"} />
        <CardTitle title={"NMB"} />
        <CardTitle title={"PELMEC"} />
        <CardTitle title={"NHB"} />
        <CardTitle title={"MCB"} />
      </div>
      <div className="text-center">Application</div>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 mb-10">
        <CardTitle title={"DX Job Request"} />
      </div>
    </div>
  );
}